import { useEffect, useRef } from "react";
import * as THREE from "three";

const DESKTOP_SEGMENTS = { x: 120, y: 80 };
const MOBILE_SEGMENTS = { x: 64, y: 44 };
const PLANE_SIZE = { x: 95, y: 70 };
const SCROLL_SPEED = 0.9;
const POINTER_BUMP = 2.4;

const VERTEX_SHADER = /* glsl */ `
  uniform float uTime;
  uniform vec2 uPointer;
  uniform float uPointerStrength;
  varying float vElevation;
  varying float vDepth;

  float hash(vec2 p) {
    return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
  }

  float vnoise(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);
    vec2 u = f * f * (3.0 - 2.0 * f);
    return mix(
      mix(hash(i), hash(i + vec2(1.0, 0.0)), u.x),
      mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), u.x),
      u.y
    ) * 2.0 - 1.0;
  }

  float fbm(vec2 p) {
    float value = 0.0;
    float amplitude = 0.5;
    for (int i = 0; i < 4; i++) {
      value += amplitude * vnoise(p);
      p *= 2.05;
      amplitude *= 0.5;
    }
    return value;
  }

  void main() {
    vec3 pos = position;
    vec2 p = vec2(pos.x, pos.z - uTime);

    float elevation = fbm(p * 0.055) * 4.5;
    // Keep a calm valley corridor through the center so the headline sits
    // over quiet ground while ridges rise at the edges
    elevation *= 0.35 + 0.65 * smoothstep(5.0, 28.0, abs(pos.x));

    float pointerDist = distance(pos.xz, uPointer);
    elevation += exp(-pointerDist * pointerDist * 0.035) * uPointerStrength;

    pos.y += elevation;
    vElevation = elevation;

    vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
    vDepth = -mvPosition.z;
    gl_Position = projectionMatrix * mvPosition;
  }
`;

const FRAGMENT_SHADER = /* glsl */ `
  uniform vec3 uColor;
  varying float vElevation;
  varying float vDepth;

  void main() {
    float depthFade = smoothstep(75.0, 14.0, vDepth);
    // Dim the near field so foreground lines never compete with the copy
    float nearDim = smoothstep(14.0, 34.0, vDepth) * 0.45 + 0.55;
    float altitude = clamp(0.26 + vElevation * 0.08, 0.12, 0.5);
    gl_FragColor = vec4(uColor, depthFade * altitude * nearDim * 0.62);
  }
`;

export function WireframeTerrain() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const isMobile = window.matchMedia("(max-width: 767px)").matches;
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const segments = isMobile ? MOBILE_SEGMENTS : DESKTOP_SEGMENTS;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      55,
      container.clientWidth / Math.max(container.clientHeight, 1),
      0.1,
      120
    );
    camera.position.set(0, 7.5, 26);
    camera.lookAt(0, 0, -10);

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(container.clientWidth, container.clientHeight);
    container.appendChild(renderer.domElement);

    const geometry = new THREE.PlaneGeometry(
      PLANE_SIZE.x,
      PLANE_SIZE.y,
      segments.x,
      segments.y
    );
    geometry.rotateX(-Math.PI / 2);

    const uniforms = {
      uTime: { value: 0 },
      uPointer: { value: new THREE.Vector2(9999, 9999) },
      uPointerStrength: { value: 0 },
      uColor: { value: new THREE.Color(0x06b6d4) },
    };

    const material = new THREE.ShaderMaterial({
      vertexShader: VERTEX_SHADER,
      fragmentShader: FRAGMENT_SHADER,
      uniforms,
      wireframe: true,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    const terrain = new THREE.Mesh(geometry, material);
    scene.add(terrain);

    // Project the cursor onto the terrain plane so the bump tracks it in world space
    const raycaster = new THREE.Raycaster();
    const groundPlane = new THREE.Plane(new THREE.Vector3(0, 1, 0), 0);
    const ndc = new THREE.Vector2();
    const hit = new THREE.Vector3();
    const pointerTarget = new THREE.Vector2(9999, 9999);
    const mouse = { x: 0, y: 0, active: false };

    const onPointerMove = (event: PointerEvent) => {
      mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.y = (event.clientY / window.innerHeight) * 2 - 1;
      mouse.active = true;
      ndc.set(mouse.x, -mouse.y);
      raycaster.setFromCamera(ndc, camera);
      if (raycaster.ray.intersectPlane(groundPlane, hit)) {
        pointerTarget.set(hit.x, hit.z);
      }
    };
    if (!isMobile && !prefersReducedMotion) {
      window.addEventListener("pointermove", onPointerMove, { passive: true });
    }

    let elapsed = 0;

    const update = (dt: number) => {
      elapsed += dt;
      uniforms.uTime.value = elapsed * SCROLL_SPEED;

      if (mouse.active) {
        uniforms.uPointer.value.lerp(pointerTarget, 0.12);
        uniforms.uPointerStrength.value +=
          (POINTER_BUMP - uniforms.uPointerStrength.value) * 0.08;
      }

      // Gentle parallax tilt toward the cursor, idle sway otherwise
      const swayX = Math.sin(elapsed * 0.2) * 0.6;
      const targetX = (isMobile ? 0 : mouse.x * 2.2) + swayX;
      const targetY = 7.5 + (isMobile ? 0 : -mouse.y * 0.8);
      camera.position.x += (targetX - camera.position.x) * 0.04;
      camera.position.y += (targetY - camera.position.y) * 0.04;
      camera.lookAt(0, 0, -10);
    };

    let rafId = 0;
    let running = false;
    let lastTime = 0;

    const renderLoop = () => {
      rafId = requestAnimationFrame(renderLoop);
      const now = performance.now();
      const dt = Math.min((now - lastTime) / 1000, 0.05);
      lastTime = now;
      update(dt);
      renderer.render(scene, camera);
    };

    const start = () => {
      if (running) return;
      if (prefersReducedMotion) {
        update(0);
        renderer.render(scene, camera);
        return;
      }
      running = true;
      lastTime = performance.now();
      rafId = requestAnimationFrame(renderLoop);
    };
    const stop = () => {
      if (!running) return;
      running = false;
      cancelAnimationFrame(rafId);
    };

    // Pause the GPU work entirely once the hero scrolls out of view
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) start();
      else stop();
    });
    observer.observe(container);

    const onResize = () => {
      const width = container.clientWidth;
      const height = Math.max(container.clientHeight, 1);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
      // setSize clears the buffer; with no render loop running, repaint the still frame
      if (prefersReducedMotion) {
        update(0);
        renderer.render(scene, camera);
      }
    };
    window.addEventListener("resize", onResize);

    return () => {
      stop();
      observer.disconnect();
      window.removeEventListener("resize", onResize);
      window.removeEventListener("pointermove", onPointerMove);
      geometry.dispose();
      material.dispose();
      renderer.dispose();
      container.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="pointer-events-none absolute inset-0"
      aria-hidden="true"
    />
  );
}

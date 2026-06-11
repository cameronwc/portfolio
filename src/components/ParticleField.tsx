import { useEffect, useRef } from "react";
import * as THREE from "three";

const DESKTOP_COUNT = 800;
const MOBILE_COUNT = 300;
const MAX_EDGES = 24;
const EDGE_SPAWNS_PER_SECOND = 8;
const EDGE_DISTANCE = 4.5;
const EDGE_LIFETIME = 2.4;
const PAIR_SAMPLES_PER_FRAME = 600;
const BOUNDS = { x: 44, y: 26, z: 18 };

const ACCENT = new THREE.Color(0x06b6d4);

interface Edge {
  a: number;
  b: number;
  age: number;
}

export function ParticleField() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const isMobile = window.matchMedia("(max-width: 767px)").matches;
    const count = isMobile ? MOBILE_COUNT : DESKTOP_COUNT;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      60,
      container.clientWidth / Math.max(container.clientHeight, 1),
      0.1,
      100
    );
    camera.position.z = 24;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(container.clientWidth, container.clientHeight);
    container.appendChild(renderer.domElement);

    const positions = new Float32Array(count * 3);
    const velocities = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * BOUNDS.x;
      positions[i * 3 + 1] = (Math.random() - 0.5) * BOUNDS.y;
      positions[i * 3 + 2] = (Math.random() - 0.5) * BOUNDS.z;
      velocities[i * 3] = (Math.random() - 0.5) * 0.014;
      velocities[i * 3 + 1] = (Math.random() - 0.5) * 0.014;
      velocities[i * 3 + 2] = (Math.random() - 0.5) * 0.014;
    }

    const pointsGeometry = new THREE.BufferGeometry();
    const positionAttribute = new THREE.BufferAttribute(positions, 3);
    positionAttribute.setUsage(THREE.DynamicDrawUsage);
    pointsGeometry.setAttribute("position", positionAttribute);

    const pointsMaterial = new THREE.PointsMaterial({
      color: ACCENT,
      size: 0.09,
      sizeAttenuation: true,
      transparent: true,
      opacity: 0.15,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
    const points = new THREE.Points(pointsGeometry, pointsMaterial);
    scene.add(points);

    // Edges are drawn additively, so fading a vertex color toward black
    // fades the line out without needing per-vertex alpha.
    const edges: Edge[] = [];
    const activePairs = new Set<string>();
    const linePositions = new Float32Array(MAX_EDGES * 2 * 3);
    const lineColors = new Float32Array(MAX_EDGES * 2 * 3);
    const lineGeometry = new THREE.BufferGeometry();
    const linePositionAttribute = new THREE.BufferAttribute(linePositions, 3);
    linePositionAttribute.setUsage(THREE.DynamicDrawUsage);
    const lineColorAttribute = new THREE.BufferAttribute(lineColors, 3);
    lineColorAttribute.setUsage(THREE.DynamicDrawUsage);
    lineGeometry.setAttribute("position", linePositionAttribute);
    lineGeometry.setAttribute("color", lineColorAttribute);

    const lineMaterial = new THREE.LineBasicMaterial({
      vertexColors: true,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
    const lines = new THREE.LineSegments(lineGeometry, lineMaterial);
    scene.add(lines);

    const mouse = { x: 0, y: 0 };
    const onPointerMove = (event: PointerEvent) => {
      mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.y = (event.clientY / window.innerHeight) * 2 - 1;
    };
    if (!isMobile) {
      window.addEventListener("pointermove", onPointerMove, { passive: true });
    }

    let spawnBudget = 0;

    const distanceSq = (a: number, b: number) => {
      const dx = positions[a * 3] - positions[b * 3];
      const dy = positions[a * 3 + 1] - positions[b * 3 + 1];
      const dz = positions[a * 3 + 2] - positions[b * 3 + 2];
      return dx * dx + dy * dy + dz * dz;
    };

    const update = (dt: number) => {
      for (let i = 0; i < count * 3; i++) {
        positions[i] += velocities[i] * dt * 60;
      }
      // Bounce drifting particles back inside the volume
      for (let i = 0; i < count; i++) {
        for (let axis = 0; axis < 3; axis++) {
          const limit =
            axis === 0 ? BOUNDS.x / 2 : axis === 1 ? BOUNDS.y / 2 : BOUNDS.z / 2;
          const idx = i * 3 + axis;
          if (Math.abs(positions[idx]) > limit) {
            velocities[idx] *= -1;
            positions[idx] = Math.sign(positions[idx]) * limit;
          }
        }
      }
      positionAttribute.needsUpdate = true;

      // Random pair sampling keeps edge discovery O(samples), not O(n^2).
      // A time-based budget keeps connections occasional rather than constant.
      spawnBudget = Math.min(spawnBudget + dt * EDGE_SPAWNS_PER_SECOND, 2);
      const maxDistSq = EDGE_DISTANCE * EDGE_DISTANCE;
      for (
        let s = 0;
        s < PAIR_SAMPLES_PER_FRAME &&
        spawnBudget >= 1 &&
        edges.length < MAX_EDGES;
        s++
      ) {
        const a = (Math.random() * count) | 0;
        const b = (Math.random() * count) | 0;
        if (a === b) continue;
        const key = a < b ? `${a}-${b}` : `${b}-${a}`;
        if (activePairs.has(key)) continue;
        if (distanceSq(a, b) < maxDistSq) {
          edges.push({ a, b, age: 0 });
          activePairs.add(key);
          spawnBudget -= 1;
        }
      }

      const breakDistSq = maxDistSq * 2;
      for (let i = edges.length - 1; i >= 0; i--) {
        const edge = edges[i];
        edge.age += dt;
        if (edge.age >= EDGE_LIFETIME || distanceSq(edge.a, edge.b) > breakDistSq) {
          const key =
            edge.a < edge.b ? `${edge.a}-${edge.b}` : `${edge.b}-${edge.a}`;
          activePairs.delete(key);
          edges.splice(i, 1);
        }
      }

      for (let i = 0; i < edges.length; i++) {
        const edge = edges[i];
        const fade = Math.sin(Math.PI * (edge.age / EDGE_LIFETIME)) * 0.15;
        for (let end = 0; end < 2; end++) {
          const particle = end === 0 ? edge.a : edge.b;
          const v = (i * 2 + end) * 3;
          linePositions[v] = positions[particle * 3];
          linePositions[v + 1] = positions[particle * 3 + 1];
          linePositions[v + 2] = positions[particle * 3 + 2];
          lineColors[v] = ACCENT.r * fade;
          lineColors[v + 1] = ACCENT.g * fade;
          lineColors[v + 2] = ACCENT.b * fade;
        }
      }
      lineGeometry.setDrawRange(0, edges.length * 2);
      linePositionAttribute.needsUpdate = true;
      lineColorAttribute.needsUpdate = true;

      if (!isMobile) {
        camera.position.x += (mouse.x * 2 - camera.position.x) * 0.04;
        camera.position.y += (-mouse.y * 1.2 - camera.position.y) * 0.04;
        camera.lookAt(0, 0, 0);
      }
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
    };
    window.addEventListener("resize", onResize);

    return () => {
      stop();
      observer.disconnect();
      window.removeEventListener("resize", onResize);
      window.removeEventListener("pointermove", onPointerMove);
      pointsGeometry.dispose();
      pointsMaterial.dispose();
      lineGeometry.dispose();
      lineMaterial.dispose();
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

import { motion } from "framer-motion";

const projects = [
  {
    name: "Smoke Signal",
    role: "Creator & Developer",
    description:
      "iOS app enabling off-grid group communication by pairing with LoRa radios. Live GPS mapping, end-to-end encrypted messaging, emergency SOS alerts, and GPX route import — all with zero cloud dependency.",
    impact:
      "Built with Swift, currently in active development for App Store launch.",
    link: "https://usesmokesignal.com",
  },
  {
    name: "LEAP!",
    role: "Creator & Developer",
    description:
      "iOS platform jump game shipped on the App Store. Tight arcade loop tuned for one-handed play, with progression and physics tuning iterated across test builds.",
    impact:
      "Live on the App Store, built solo from prototype to release.",
    link: "https://apps.apple.com/us/app/leap-platform-jump-game/id6762069983",
  },
  {
    name: "Cairn",
    role: "Creator & Developer",
    description:
      "Hike photos to 3D-printed topography. Feed it a folder of geotagged photos; get back an STL pair — terrain and trail — that slices cleanly on a Bambu A1 Mini for a dual-color print where the route is raised on the mountain. Extracts the track from photo EXIF, smooths GPS jitter, queries OpenTopography for a DEM covering the bounding box, then drapes the route across the terrain mesh with a configurable Z-offset so the trail reads clearly without clipping into the surface.",
    impact:
      "Python 3.12, uv, click, pydantic-settings, trimesh, rasterio, pyproj. Every stage is a standalone, idempotent CLI subcommand with inspectable intermediate artifacts (EXIF CSV, GPX, GeoTIFF, STL). Alpha — shipping first print of the Peru Ausangate trek.",
  },
  {
    name: "Home Server Platform",
    role: "Architect & Operator",
    description:
      "150TB Unraid virtualization and NAS environment supporting 80+ users with Bitwarden, Nextcloud, Home Assistant, and custom registries.",
    impact:
      "30+ Docker services with 99.99% uptime, automated off-site backups, and Cloudflare-protected ingress.",
  },
  {
    name: "Deauthentication Detector",
    role: "Hardware Security Developer",
    description:
      "Raspberry Pi-based device that identifies Wi-Fi deauthentication attacks and surfaces telemetry on likely sources.",
    impact:
      "Python, Node.js, MongoDB, and Aircrack-ng for real-time malicious network activity alerts.",
  },
  {
    name: "GraphQL-Cop (Open Source)",
    role: "Contributor",
    description:
      "Added cookie authentication support and Dockerfile to the open-source GraphQL security scanner, improving CI/CD integration for authenticated endpoint testing.",
    impact:
      "Contributed upstream to improve the tool's usability in enterprise DevSecOps pipelines.",
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-24 sm:py-32">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-sm tracking-[0.2em] text-accent-400">
            PROJECTS
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Hands-on builds that keep platforms
            <br className="hidden sm:block" /> secure and resilient.
          </h2>
        </motion.div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {projects.map((project, index) => (
            <motion.article
              key={project.name}
              className="group flex flex-col rounded-xl border border-white/[0.06] bg-white/[0.02] p-6 transition-colors hover:border-white/[0.12]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <span className="font-mono text-xs tracking-wider text-accent-400/80">
                    {project.role}
                  </span>
                  <h3 className="mt-2 text-lg font-semibold text-white">
                    {project.name}
                  </h3>
                </div>
                {"link" in project && project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 flex-none rounded-md border border-white/[0.08] px-2.5 py-1 text-xs text-slate-400 transition hover:border-white/[0.2] hover:text-white"
                  >
                    Visit
                  </a>
                )}
              </div>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-400">
                {project.description}
              </p>
              <p className="mt-4 border-t border-white/[0.06] pt-4 text-sm text-slate-500">
                {project.impact}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

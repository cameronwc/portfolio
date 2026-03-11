import { motion } from "framer-motion";

const photos = [
  { src: "/photography/DSC05565-Pano.jpg", alt: "Panoramic landscape" },
  { src: "/photography/DSC03713.jpg", alt: "Landscape photography" },
  { src: "/photography/DSC05119.jpg", alt: "Nature photography" },
  { src: "/photography/DJI_0406.jpg", alt: "Aerial drone photography" },
  { src: "/photography/DSC05353.jpg", alt: "Travel photography" },
  { src: "/photography/DSC08871.jpg", alt: "Couples portrait" },
  { src: "/photography/DSC05371.jpg", alt: "Adventure photography" },
  { src: "/photography/DSC03037.jpg", alt: "Coastal photography" },
  { src: "/photography/DSC05523.jpg", alt: "Scenic photography" },
];

export function Photography() {
  return (
    <section
      id="photography"
      className="border-t border-white/[0.06] py-24 sm:py-32"
    >
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-sm tracking-[0.2em] text-accent-400">
            PHOTOGRAPHY
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Beyond the terminal.
          </h2>
          <p className="mt-4 max-w-2xl text-slate-400">
            I carry a camera on every adventure. Photography is my creative
            counterbalance to security engineering — both demand patience,
            precision, and an eye for what others miss.
          </p>
        </motion.div>

        <motion.div
          className="mt-12 columns-2 gap-4 space-y-4 sm:columns-3"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6 }}
        >
          {photos.map((photo, index) => (
            <motion.div
              key={photo.src}
              className="group relative break-inside-avoid overflow-hidden rounded-lg"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              <img
                src={photo.src}
                alt={photo.alt}
                loading="lazy"
                className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-950/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-10 flex justify-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <a
            href="https://cameroncooperphotography.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-lg border border-white/[0.12] px-6 py-3 text-sm font-medium text-slate-300 transition hover:border-white/[0.25] hover:text-white"
          >
            View full photography portfolio
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              className="transition-transform group-hover:translate-x-0.5"
            >
              <path
                d="M6 3l5 5-5 5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}

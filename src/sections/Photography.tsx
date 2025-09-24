import { motion } from "framer-motion";
import { SectionHeading } from "../components/SectionHeading";

const photos = [
  {
    title: "Alpine glow",
    location: "Rocky Mountain National Park, CO",
    src: "https://images.unsplash.com/photo-1470770903676-69b98201ea1c?auto=format&fit=crop&w=1400&q=80",
  },
  {
    title: "City reflections",
    location: "Lower Manhattan, NY",
    src: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1400&q=80",
  },
  {
    title: "Desert storm",
    location: "Moab, UT",
    src: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1400&q=80",
  },
  {
    title: "Coastal dusk",
    location: "Big Sur, CA",
    src: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=1400&q=80",
  },
  {
    title: "Aurora night",
    location: "Reykjavík, Iceland",
    src: "https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?auto=format&fit=crop&w=1400&q=80",
  },
  {
    title: "Forest mist",
    location: "Olympic National Park, WA",
    src: "https://images.unsplash.com/photo-1500530855697-ff1c49472c41?auto=format&fit=crop&w=1400&q=80",
  },
];

export function Photography() {
  return (
    <div>
      <SectionHeading id="photography" eyebrow="PHOTOGRAPHY">
        Capturing the places that inspire my approach to resilient systems.
      </SectionHeading>
      <motion.div
        className="section-padding mx-auto mt-12 max-w-6xl columns-1 gap-6 space-y-6 md:columns-2 lg:columns-3"
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {photos.map((photo, index) => (
          <motion.figure
            key={photo.title}
            className="break-inside-avoid overflow-hidden rounded-3xl border border-white/10 bg-slate-900/50 shadow-xl"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
          >
            <div className="relative">
              <img
                src={photo.src}
                alt={`${photo.title} — ${photo.location}`}
                loading="lazy"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent p-4 text-slate-100">
                <p className="text-sm font-semibold">{photo.title}</p>
                <p className="text-xs text-slate-300">{photo.location}</p>
              </div>
            </div>
          </motion.figure>
        ))}
      </motion.div>
    </div>
  );
}

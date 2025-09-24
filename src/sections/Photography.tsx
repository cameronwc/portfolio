import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { SectionHeading } from "../components/SectionHeading";
import { galleryPhotos } from "../photography/gallery";

const previewPhotos = galleryPhotos.slice(0, 3);

export function Photography() {
  return (
    <div>
      <SectionHeading id="photography" eyebrow="PHOTOGRAPHY">
        Capturing the places that inspire my approach to resilient systems.
      </SectionHeading>
      <p className="section-padding mx-auto mt-6 max-w-3xl text-balance text-sm text-slate-300">
        I carry a camera on every adventure. Here&apos;s a glimpse at the gallery—each image is a study in patience, lighting,
        and storytelling through resilience.
      </p>
      <motion.div
        className="section-padding mx-auto mt-10 max-w-6xl columns-1 gap-6 space-y-6 md:columns-2 lg:columns-3"
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {previewPhotos.map((photo, index) => (
          <motion.figure
            key={photo.src}
            className="break-inside-avoid overflow-hidden rounded-3xl border border-white/10 bg-slate-900/60 shadow-xl"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
          >
            <div className="relative">
              <img src={photo.src} alt={photo.alt} loading="lazy" className="h-full w-full object-cover" />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent p-4 text-slate-100">
                <p className="text-sm font-semibold">{photo.alt}</p>
                <p className="text-xs uppercase tracking-[0.2em] text-slate-400">{photo.name}</p>
              </div>
            </div>
          </motion.figure>
        ))}
      </motion.div>
      <div className="section-padding mx-auto mt-10 flex max-w-6xl justify-center">
        <Link
          to="/photography"
          className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-medium text-slate-200 transition hover:border-white/30 hover:bg-white/10"
        >
          Explore the full gallery
          <span aria-hidden>→</span>
        </Link>
      </div>
    </div>
  );
}

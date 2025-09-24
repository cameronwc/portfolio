import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Footer } from "../components/Footer";
import { SectionHeading } from "../components/SectionHeading";
import type { PhotoAsset } from "../photography/gallery";
import { galleryPhotos } from "../photography/gallery";

export function PhotographyPage() {
  const [hoveredPhoto, setHoveredPhoto] = useState<PhotoAsset | null>(null);

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-slate-950 text-slate-100">
      <div className="pointer-events-none fixed inset-0 -z-20 bg-slate-950" />
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(88,113,255,0.35),_transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,_rgba(148,163,184,0.2),_transparent_60%)]" />
        <div className="absolute inset-0 bg-grid-light bg-grid-size opacity-30" />
      </div>

      <div className="relative z-10 flex flex-col">
        <header className="section-padding mx-auto mt-16 w-full max-w-5xl text-center">
          <div className="flex items-center justify-center">
            <Link
              to="/"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200 transition hover:border-white/20 hover:bg-white/10"
            >
              <span aria-hidden>←</span>
              Back to portfolio
            </Link>
          </div>
          <div className="mt-12">
            <SectionHeading id="photography-gallery" eyebrow="PHOTOGRAPHY">
              A curated gallery of the moments that shape my perspective.
            </SectionHeading>
            <p className="mx-auto mt-6 max-w-2xl text-balance text-base text-slate-300">
              Each frame here was captured while exploring the landscapes that inspire my approach to resilient, human-centered
              systems. Hover over any photograph to examine the full composition.
            </p>
          </div>
        </header>

        <motion.section
          className="section-padding mx-auto mt-16 w-full max-w-6xl pb-16"
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {galleryPhotos.map((photo, index) => (
              <motion.figure
                key={photo.src}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-slate-900/60 shadow-xl transition duration-500 hover:border-white/30 hover:shadow-2xl"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                onMouseEnter={() => setHoveredPhoto(photo)}
                onMouseLeave={() => setHoveredPhoto(null)}
                onFocus={() => setHoveredPhoto(photo)}
                onBlur={() => setHoveredPhoto(null)}
                tabIndex={0}
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-500 ease-out group-hover:scale-105"
                />
                <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent p-4 text-slate-100">
                  <p className="text-sm font-semibold tracking-wide">{photo.alt}</p>
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-400">{photo.name}</p>
                </figcaption>
              </motion.figure>
            ))}
          </div>
        </motion.section>

        {hoveredPhoto && (
          <div className="pointer-events-none fixed inset-0 z-50 flex items-center justify-center bg-slate-950/90 backdrop-blur">
            <img
              src={hoveredPhoto.src}
              alt={hoveredPhoto.alt}
              className="max-h-[85vh] max-w-[90vw] rounded-3xl border border-white/20 object-contain shadow-2xl"
            />
          </div>
        )}

        <Footer />
      </div>
    </div>
  );
}

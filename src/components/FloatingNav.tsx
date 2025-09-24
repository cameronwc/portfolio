import { useContext, useEffect, useState } from "react";
import { SectionsContext } from "./sections-context";
import type { SectionId } from "../App";

export function FloatingNav() {
  const { sections } = useContext(SectionsContext);
  const [activeSection, setActiveSection] = useState<SectionId>("home");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) {
          setActiveSection(visible.target.id as SectionId);
        }
      },
      { rootMargin: "-40% 0px -50% 0px" }
    );

    sections.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, [sections]);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 32);
    };
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      aria-label="Primary sections"
      className={`fixed left-1/2 top-8 z-50 -translate-x-1/2 transition-all duration-500 ${
        isScrolled ? "opacity-100" : "opacity-95"
      }`}
    >
      <div className="flex items-center gap-1 rounded-full border border-white/15 bg-slate-900/80 px-4 py-2 shadow-glow backdrop-blur-xl">
        {sections.map((section) => (
          <a
            key={section.id}
            href={`#${section.id}`}
            className={`rounded-full px-3 py-1 text-sm transition-colors ${
              activeSection === section.id
                ? "bg-white text-slate-900"
                : "text-slate-300 hover:text-white"
            }`}
            aria-current={activeSection === section.id ? "true" : undefined}
          >
            {section.label}
          </a>
        ))}
      </div>
    </nav>
  );
}

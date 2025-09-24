import { useMemo } from "react";
import { AnalyticsBar } from "./components/AnalyticsBar";
import { FloatingNav } from "./components/FloatingNav";
import { Footer } from "./components/Footer";
import { Hero } from "./sections/Hero";
import { About } from "./sections/About";
import { Experience } from "./sections/Experience";
import { Projects } from "./sections/Projects";
import { Skills } from "./sections/Skills";
import { Speaking } from "./sections/Speaking";
import { Contact } from "./sections/Contact";
import { SectionsContext } from "./components/sections-context";

const sections = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "speaking", label: "Speaking" },
  { id: "contact", label: "Contact" },
] as const;

export type SectionId = (typeof sections)[number]["id"];

function App() {
  const value = useMemo(() => ({ sections }), []);

  return (
    <SectionsContext.Provider value={value}>
      <div className="relative overflow-x-hidden">
        <div className="pointer-events-none fixed inset-0 -z-20 bg-slate-950" />
        <div className="pointer-events-none fixed inset-0 -z-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(88,113,255,0.35),_transparent_55%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,_rgba(148,163,184,0.2),_transparent_60%)]" />
          <div className="absolute inset-0 bg-grid-light bg-grid-size opacity-30" />
        </div>
        <FloatingNav />
        <main className="flex min-h-screen flex-col gap-28 pb-24">
          <Hero />
          <AnalyticsBar />
          <About />
          <Experience />
          <Projects />
          <Skills />
          <Speaking />
          <Contact />
        </main>
        <Footer />
      </div>
    </SectionsContext.Provider>
  );
}

export default App;

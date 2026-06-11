import { Hero } from "../sections/Hero";
import { Metrics } from "../sections/Metrics";
import { Clients } from "../sections/Clients";
import { About } from "../sections/About";
import { Experience } from "../sections/Experience";
import { Leadership } from "../sections/Leadership";
import { Expertise } from "../sections/Expertise";
import { Certifications } from "../sections/Certifications";
import { Projects } from "../sections/Projects";
import { Book } from "../sections/Book";
import { Photography } from "../sections/Photography";
import { Contact } from "../sections/Contact";
import { PageTransition } from "../components/PageTransition";
import { usePageMeta } from "../hooks/usePageMeta";

export function Home() {
  usePageMeta(
    "Cameron Cooper — Senior DevSecOps Engineer",
    "Cameron Cooper — Senior DevSecOps Engineer II at Wellthy. Cloud security automation, compliance engineering, and team enablement."
  );

  return (
    <PageTransition>
      <Hero />
      <Metrics />
      <Clients />
      <About />
      <Experience />
      <Leadership />
      <Expertise />
      <Certifications />
      <Projects />
      <Book />
      <Photography />
      <Contact />
    </PageTransition>
  );
}

import { Navigation } from "./components/Navigation";
import { Hero } from "./sections/Hero";
import { Metrics } from "./sections/Metrics";
import { About } from "./sections/About";
import { Experience } from "./sections/Experience";
import { Leadership } from "./sections/Leadership";
import { Expertise } from "./sections/Expertise";
import { Certifications } from "./sections/Certifications";
import { Projects } from "./sections/Projects";
import { Book } from "./sections/Book";
import { Photography } from "./sections/Photography";
import { Contact } from "./sections/Contact";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="relative overflow-x-hidden">
      <Navigation />
      <main>
        <Hero />
        <Metrics />
        <About />
        <Experience />
        <Leadership />
        <Expertise />
        <Certifications />
        <Projects />
        <Book />
        <Photography />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;

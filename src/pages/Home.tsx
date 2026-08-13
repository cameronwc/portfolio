import { Head } from "vite-react-ssg";
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

export function Home() {
  return (
    <PageTransition>
      <Head>
        <title>Cameron Cooper — Senior DevSecOps Engineer</title>
        <meta
          name="description"
          content="Cameron Cooper — Senior DevSecOps Engineer II at Wellthy. Cloud security automation, compliance engineering, and team enablement."
        />
        <meta property="og:title" content="Cameron Cooper — Senior DevSecOps Engineer" />
        <meta
          property="og:description"
          content="Senior DevSecOps Engineer II at Wellthy. Cloud security automation, compliance engineering, and team enablement."
        />
        <meta property="og:url" content="https://cameroncooper.co/" />
        <meta name="twitter:title" content="Cameron Cooper — Senior DevSecOps Engineer" />
        <meta
          name="twitter:description"
          content="Senior DevSecOps Engineer II at Wellthy. Cloud security automation, compliance engineering, and team enablement."
        />
      </Head>
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

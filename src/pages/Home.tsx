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
        <link rel="canonical" href="https://cameroncooper.co/" />
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
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfilePage",
            "mainEntity": {
              "@type": "Person",
              "name": "Cameron Cooper",
              "url": "https://cameroncooper.co/",
              "image": "https://cameroncooper.co/og-image.png",
              "jobTitle": "Senior DevSecOps Engineer II",
              "description":
                "Senior DevSecOps Engineer II at Wellthy. Cloud security automation, compliance engineering, and team enablement.",
              "email": "mailto:cameron.w.cooper@gmail.com",
              "worksFor": {
                "@type": "Organization",
                "name": "Wellthy",
              },
              "alumniOf": [
                { "@type": "Organization", "name": "CVS Health / Aetna Health" },
                { "@type": "Organization", "name": "Parsons" },
              ],
              "knowsAbout": [
                "DevSecOps",
                "Cloud Security",
                "Compliance Engineering",
                "SOC 2",
                "HIPAA",
                "AWS Security",
                "Threat Modeling",
                "Vulnerability Management",
                "CI/CD Security",
              ],
              "sameAs": [
                "https://github.com/cameronwc",
                "https://www.linkedin.com/in/cameronwc",
                "https://cameroncooperphotography.com",
                "https://www.amazon.com/Breaking-into-DevSecOps-Practical-Launching-ebook/dp/B0GSHSK4H5",
              ],
            },
          })}
        </script>
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

import { lazy, Suspense } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { Navigation } from "./components/Navigation";
import { Footer } from "./components/Footer";
import { ScrollManager } from "./components/ScrollManager";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";

const CaseStudyAIRemediation = lazy(() =>
  import("./pages/CaseStudyAIRemediation").then((m) => ({
    default: m.CaseStudyAIRemediation,
  }))
);

function App() {
  const location = useLocation();

  return (
    <div className="relative overflow-x-hidden">
      <a href="#main" className="skip-link">Skip to content</a>
      <ScrollManager />
      <Navigation />
      <main id="main">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route
              path="/work/ai-remediation"
              element={
                <Suspense fallback={null}>
                  <CaseStudyAIRemediation />
                </Suspense>
              }
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
}

export default App;

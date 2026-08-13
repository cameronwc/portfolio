import { AnimatePresence, MotionConfig } from "framer-motion";
import { Outlet, useLocation } from "react-router-dom";
import { Navigation } from "./components/Navigation";
import { Footer } from "./components/Footer";
import { ScrollManager } from "./components/ScrollManager";

export function Layout() {
  const location = useLocation();

  return (
    <MotionConfig reducedMotion="user">
      <div className="relative overflow-x-hidden">
        <a href="#main" className="skip-link">Skip to content</a>
        <ScrollManager />
        <Navigation />
        <main id="main" tabIndex={-1} className="outline-none">
          <AnimatePresence mode="wait">
            <Outlet key={location.pathname} />
          </AnimatePresence>
        </main>
        <Footer />
      </div>
    </MotionConfig>
  );
}

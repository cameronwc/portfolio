import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// Retry budget bridges the page-exit animation (~350ms) plus lazy chunk load
const MAX_FRAMES = 90;

export function ScrollManager() {
  const { pathname, hash, key } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0 });
      return;
    }
    let rafId = 0;
    let frames = 0;
    const tryScroll = () => {
      const target = document.querySelector(hash);
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
        return;
      }
      if (frames++ < MAX_FRAMES) {
        rafId = requestAnimationFrame(tryScroll);
      }
    };
    rafId = requestAnimationFrame(tryScroll);
    return () => cancelAnimationFrame(rafId);
  }, [pathname, hash, key]);

  return null;
}

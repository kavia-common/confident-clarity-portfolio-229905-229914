import React, { useEffect, useRef, useState } from "react";

/**
 * Wrap content and reveal it when it enters the viewport.
 * Respects prefers-reduced-motion (becomes immediate).
 */
// PUBLIC_INTERFACE
export default function Reveal({ children, className = "", delayMs = 0 }) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const reduced =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduced) {
      setIsVisible(true);
      return;
    }

    const obs = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry?.isIntersecting) {
          window.setTimeout(() => setIsVisible(true), Math.max(0, delayMs));
          obs.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    obs.observe(node);
    return () => obs.disconnect();
  }, [delayMs]);

  return (
    <div
      ref={ref}
      className={`reveal ${isVisible ? "is-visible" : ""} ${className}`.trim()}
    >
      {children}
    </div>
  );
}

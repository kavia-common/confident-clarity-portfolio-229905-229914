import { useCallback } from "react";

/**
 * Smooth-scroll to a section by id. Also focuses the target section for accessibility.
 *
 * @param {number} offsetPx - Optional offset (e.g., sticky header height).
 * @returns {(id: string) => void} scrollTo
 */
// PUBLIC_INTERFACE
export function useScrollToSection(offsetPx = 0) {
  const scrollTo = useCallback(
    (id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const top =
        window.scrollY + el.getBoundingClientRect().top - Math.max(0, offsetPx);

      window.history.replaceState(null, "", `#${id}`);

      window.scrollTo({
        top,
        behavior: "smooth",
      });

      // Focus without jumping (needs tabindex on section).
      window.setTimeout(() => {
        try {
          el.focus({ preventScroll: true });
        } catch {
          // ignore
        }
      }, 250);
    },
    [offsetPx]
  );

  return scrollTo;
}

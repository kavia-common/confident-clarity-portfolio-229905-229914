import { useEffect, useMemo, useState } from "react";

/**
 * Track which section is currently active based on viewport intersection.
 * Uses IntersectionObserver and prefers the most visible intersecting section.
 *
 * @param {string[]} sectionIds - IDs of sections to observe.
 * @returns {string} activeSectionId
 */
// PUBLIC_INTERFACE
export function useActiveSection(sectionIds) {
  const idsKey = useMemo(() => (sectionIds || []).join("|"), [sectionIds]);
  const [activeId, setActiveId] = useState(sectionIds?.[0] || "home");

  useEffect(() => {
    const ids = (sectionIds || []).filter(Boolean);
    if (ids.length === 0) return;

    const elements = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    if (elements.length === 0) return;

    // Keep track of intersection ratios so we can pick the most visible.
    const ratios = new Map();

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          ratios.set(entry.target.id, entry.intersectionRatio);
        }

        // Choose the most visible intersecting section; fallback to last known.
        let bestId = activeId;
        let bestRatio = -1;

        for (const [id, ratio] of ratios.entries()) {
          if (ratio > bestRatio) {
            bestRatio = ratio;
            bestId = id;
          }
        }

        if (bestId && bestId !== activeId) setActiveId(bestId);
      },
      {
        // Trigger when a section approaches the middle of the viewport.
        root: null,
        rootMargin: "-35% 0px -55% 0px",
        threshold: [0, 0.1, 0.2, 0.35, 0.5, 0.65, 0.8, 1],
      }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [idsKey]);

  return activeId;
}

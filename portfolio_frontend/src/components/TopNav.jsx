import React, { useMemo } from "react";
import { SECTIONS } from "../constants/sections";
import { useActiveSection } from "../hooks/useActiveSection";
import { useScrollToSection } from "../hooks/useScrollToSection";

/**
 * Sticky top navigation with smooth scrolling and active section highlighting.
 */
// PUBLIC_INTERFACE
export default function TopNav() {
  const sectionIds = useMemo(() => SECTIONS.map((s) => s.id), []);
  const activeId = useActiveSection(sectionIds);

  // Sticky header height (CSS var mirrors actual height)
  const scrollTo = useScrollToSection(72);

  return (
    <div className="topnav">
      <div className="container topnav__inner">
        <a
          href="#home"
          className="brand"
          onClick={(e) => {
            e.preventDefault();
            scrollTo("home");
          }}
          aria-label="Go to Home"
        >
          <span className="brand__mark" aria-hidden="true">
            CC
          </span>
          <span className="brand__text">
            Confident Clarity
            <span className="brand__sub">Portfolio</span>
          </span>
        </a>

        <nav className="topnav__links" aria-label="Primary">
          {SECTIONS.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className={`navlink ${activeId === s.id ? "is-active" : ""}`}
              onClick={(e) => {
                e.preventDefault();
                scrollTo(s.id);
              }}
              aria-current={activeId === s.id ? "page" : undefined}
            >
              {s.label}
            </a>
          ))}
        </nav>
      </div>
    </div>
  );
}

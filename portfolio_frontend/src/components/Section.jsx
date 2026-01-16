import React from "react";
import Reveal from "./Reveal";

/**
 * Editorial section wrapper with consistent spacing and optional eyebrow label.
 */
// PUBLIC_INTERFACE
export default function Section({
  id,
  eyebrow,
  title,
  children,
  variant = "default",
}) {
  return (
    <section
      id={id}
      tabIndex={-1}
      className={`section section--${variant}`.trim()}
      aria-label={typeof title === "string" ? title : undefined}
    >
      <div className="container">
        <Reveal>
          <div className="section__header">
            {eyebrow ? <div className="eyebrow">{eyebrow}</div> : null}
            {title ? <h2 className="h2">{title}</h2> : null}
          </div>
        </Reveal>

        <div className="section__body">{children}</div>
      </div>
    </section>
  );
}

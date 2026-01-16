import React from "react";
import Section from "../components/Section";
import Reveal from "../components/Reveal";

/**
 * Services section.
 */
// PUBLIC_INTERFACE
export default function Services() {
  const services = [
    {
      title: "Product & interface design",
      desc:
        "Editorial UI, flows, and visual systems that prioritize clarity and confidence.",
    },
    {
      title: "Design systems",
      desc:
        "Tokens, components, and documentation that scale across teams without bloat.",
    },
    {
      title: "Frontend implementation",
      desc:
        "Lean React + CSS, accessible patterns, and subtle motion that respects user settings.",
    },
  ];

  const frontendUrl =
    process.env.REACT_APP_FRONTEND_URL || process.env.REACT_APP_API_BASE || "";

  return (
    <Section id="services" eyebrow="Services" title="Ways we can work together">
      <div className="grid grid--2">
        <div className="stack">
          {services.map((s, idx) => (
            <Reveal key={s.title} delayMs={idx * 70}>
              <div className="service">
                <div className="service__title">{s.title}</div>
                <div className="service__desc muted">{s.desc}</div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delayMs={120}>
          <div className="card card--cta">
            <div className="card__title">Start with a small engagement</div>
            <p className="p muted">
              A one-week sprint to define direction, layout, typography, and a
              design system baseline—then iterate with intent.
            </p>
            <div className="divider" />
            <div className="ctaRow">
              <a className="btn" href="#footer">
                Contact
              </a>
              <a className="btn btn--ghost" href="#work">
                View work
              </a>
            </div>
            <div className="micro muted">
              {frontendUrl
                ? `Env hint: REACT_APP_FRONTEND_URL set (${frontendUrl}).`
                : "Env vars are optional; this site renders without configuration."}
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}

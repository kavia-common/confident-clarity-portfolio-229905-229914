import React from "react";
import Section from "../components/Section";
import Reveal from "../components/Reveal";

/**
 * Work section.
 */
// PUBLIC_INTERFACE
export default function Work() {
  const projects = [
    {
      title: "Editorial commerce redesign",
      tag: "Product",
      desc:
        "A calmer storefront: stronger hierarchy, less chrome, better conversion through clarity.",
    },
    {
      title: "Design system v2",
      tag: "System",
      desc:
        "Tokens, typography scale, and accessible components for a multi-team product suite.",
    },
    {
      title: "Onboarding with intent",
      tag: "UX",
      desc:
        "Reframed onboarding as a conversation—shorter flows, more confidence, fewer decisions at once.",
    },
    {
      title: "Portfolio experiments",
      tag: "Web",
      desc:
        "Subtle motion and editorial layout details that reward attention without demanding it.",
    },
  ];

  return (
    <Section id="work" eyebrow="Work" title="Selected work">
      <div className="grid grid--cards">
        {projects.map((p, idx) => (
          <Reveal key={p.title} delayMs={idx * 70}>
            <a className="workcard" href="#work" aria-label={p.title}>
              <div className="workcard__top">
                <span className="badge">{p.tag}</span>
                <span className="workcard__arrow" aria-hidden="true">
                  ↗
                </span>
              </div>
              <div className="workcard__title">{p.title}</div>
              <p className="p muted">{p.desc}</p>
            </a>
          </Reveal>
        ))}
      </div>

      <Reveal delayMs={120}>
        <div className="note">
          <span className="strong">Note:</span>{" "}
          Detailed case studies can be plugged in later (routes, modal, or
          external links). This scaffold keeps the layout intentional and
          minimal.
        </div>
      </Reveal>
    </Section>
  );
}

import React from "react";
import Section from "../components/Section";
import Reveal from "../components/Reveal";

/**
 * Experience section.
 */
// PUBLIC_INTERFACE
export default function Experience() {
  const roles = [
    {
      period: "2024 — Now",
      title: "Product Designer / Frontend Partner",
      org: "Independent",
      desc:
        "Designing and shipping calm, high-clarity interfaces. Blending prototyping with production-ready components.",
    },
    {
      period: "2021 — 2024",
      title: "Senior Designer",
      org: "Placeholder Studio",
      desc:
        "Led editorial redesigns and a component-driven design system. Improved accessibility and performance across key flows.",
    },
    {
      period: "2018 — 2021",
      title: "Designer / Engineer",
      org: "Early-stage teams",
      desc:
        "Built UI foundations and established visual language: grids, type scales, and interaction patterns.",
    },
  ];

  return (
    <Section id="experience" eyebrow="Experience" title="Selected roles & rhythms">
      <div className="timeline">
        {roles.map((r, idx) => (
          <Reveal key={r.period} delayMs={idx * 60}>
            <div className="timeline__item">
              <div className="timeline__meta">
                <div className="micro">{r.period}</div>
              </div>
              <div className="timeline__body">
                <div className="timeline__title">
                  <span className="strong">{r.title}</span>{" "}
                  <span className="muted">· {r.org}</span>
                </div>
                <p className="p muted">{r.desc}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

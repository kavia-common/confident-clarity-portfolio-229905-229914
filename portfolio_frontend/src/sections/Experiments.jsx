import React from "react";
import Section from "../components/Section";
import Reveal from "../components/Reveal";

/**
 * Visual Experimentations section.
 */
// PUBLIC_INTERFACE
export default function Experiments() {
  const items = [
    {
      title: "Imperfect grid studies",
      desc:
        "A rigid system with one intentional break to create a focal point—controlled tension.",
    },
    {
      title: "Type-only landing pages",
      desc:
        "No hero images. Just hierarchy, spacing, and a single accent color to guide attention.",
    },
    {
      title: "Micro-interactions as punctuation",
      desc:
        "Hover states that feel like a whisper: lighter, slower, never distracting.",
    },
  ];

  return (
    <Section
      id="experiments"
      eyebrow="Visual Experimentations"
      title="Small studies, big leverage"
      variant="surface"
    >
      <div className="grid grid--2">
        <Reveal>
          <div className="prose">
            <p>
              Experiments are where I explore edge cases: how little UI can still
              feel complete, how motion can be nearly invisible, and how
              typography carries meaning without decoration.
            </p>
            <p className="muted">
              Placeholder content—swap these entries with real sketches, code
              pens, or image-driven studies later.
            </p>
          </div>
        </Reveal>

        <div className="stack">
          {items.map((it, idx) => (
            <Reveal key={it.title} delayMs={idx * 70}>
              <div className="mini">
                <div className="mini__title">{it.title}</div>
                <div className="mini__desc muted">{it.desc}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}

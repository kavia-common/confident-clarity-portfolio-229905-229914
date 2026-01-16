import React from "react";
import Section from "../components/Section";
import Reveal from "../components/Reveal";

/**
 * About section.
 */
// PUBLIC_INTERFACE
export default function About() {
  return (
    <Section id="about" eyebrow="About" title="A practice built on restraint.">
      <div className="grid grid--2">
        <Reveal>
          <div className="prose">
            <p>
              I’m a designer who treats composition as a form of editing:
              removing noise, amplifying intent, and shaping the experience with
              typography and rhythm.
            </p>
            <p>
              My work tends to be minimal, but not sterile—there’s always a
              subtle human imperfection: a gentle motion, a slightly off-grid
              detail, a deliberate pause.
            </p>
          </div>
        </Reveal>

        <Reveal delayMs={90}>
          <div className="card">
            <div className="card__title">Focus areas</div>
            <ul className="list">
              <li>Editorial UI + interaction design</li>
              <li>Design systems + component libraries</li>
              <li>Rapid prototyping & product iteration</li>
              <li>Accessibility-first implementation</li>
            </ul>

            <div className="divider" />

            <div className="kv">
              <div className="kv__row">
                <span className="kv__k">Location</span>
                <span className="kv__v">Remote / flexible</span>
              </div>
              <div className="kv__row">
                <span className="kv__k">Tools</span>
                <span className="kv__v">Figma · React · CSS</span>
              </div>
              <div className="kv__row">
                <span className="kv__k">Values</span>
                <span className="kv__v">Clarity · Craft · Care</span>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}

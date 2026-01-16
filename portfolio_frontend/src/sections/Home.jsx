import React from "react";
import Reveal from "../components/Reveal";

/**
 * Home / Hero section.
 */
// PUBLIC_INTERFACE
export default function Home() {
  return (
    <section id="home" tabIndex={-1} className="hero" aria-label="Home">
      <div className="container hero__inner">
        <div className="hero__grid">
          <Reveal>
            <div>
              <div className="eyebrow">Minimalist editorial portfolio</div>
              <h1 className="h1">
                Calm clarity,
                <br />
                confident craft.
              </h1>
            </div>
          </Reveal>

          <Reveal delayMs={80}>
            <div className="hero__meta">
              <p className="lead">
                I design and build thoughtful digital experiences with a bias for
                typography, negative space, and deliberate interaction.
              </p>

              <div className="hero__chips" aria-label="Highlights">
                <span className="chip">Product design</span>
                <span className="chip">UI engineering</span>
                <span className="chip">Design systems</span>
              </div>

              <div className="hero__cta">
                <a className="btn" href="#work">
                  Selected work
                </a>
                <a className="btn btn--ghost" href="#services">
                  Services
                </a>
              </div>

              <div className="micro">
                <span className="dot" aria-hidden="true" />
                Available for select projects · 2026
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

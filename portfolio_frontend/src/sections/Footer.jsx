import React from "react";
import Reveal from "../components/Reveal";

/**
 * Footer / contact section.
 */
// PUBLIC_INTERFACE
export default function Footer() {
  return (
    <footer id="footer" tabIndex={-1} className="footer" aria-label="Footer">
      <div className="container footer__inner">
        <Reveal>
          <div className="footer__grid">
            <div>
              <div className="eyebrow">Footer</div>
              <div className="footer__title">
                Let’s build something
                <br />
                calm and effective.
              </div>
              <p className="p muted">
                Placeholder contact details—wire in your email, calendar link, or
                form endpoint when ready.
              </p>
            </div>

            <div className="footer__links" aria-label="Contact links">
              <a className="footlink" href="mailto:hello@example.com">
                hello@example.com
              </a>
              <a className="footlink" href="#home">
                Back to top
              </a>
              <a
                className="footlink"
                href="https://example.com"
                target="_blank"
                rel="noreferrer"
              >
                External link
              </a>
            </div>
          </div>

          <div className="footer__bottom">
            <span className="micro muted">
              © {new Date().getFullYear()} Confident Clarity
            </span>
            <span className="micro muted">Ocean Professional palette</span>
          </div>
        </Reveal>
      </div>
    </footer>
  );
}

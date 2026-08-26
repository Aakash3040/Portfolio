import { profile } from "../data";
import useScrollReveal from "../hooks/useScrollReveal";

export default function Contact() {
  const revealRef = useScrollReveal();
  return (
    <section className="section" id="contact">
      <div className="container reveal" ref={revealRef}>
        <div className="contactCard">
          <h2>Let's Connect</h2>
          <p className="muted" style={{ maxWidth: "500px" }}>
            I am currently open to new opportunities in software engineering.
          </p>
          <div className="contactRow">
            <a className="btn btn-primary" href={`mailto:${profile.email}`}>
              Email me
            </a>
            <a
              className="btn btn-ghost"
              href={profile.links.linkedin}
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
            <a
              className="btn btn-ghost"
              href={profile.links.github}
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
            <a
              className="btn btn-ghost"
              href={profile.links.medium}
              target="_blank"
              rel="noreferrer"
            >
              Medium
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

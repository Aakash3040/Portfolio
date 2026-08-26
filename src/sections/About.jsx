import { profile } from "../data";
import useScrollReveal from "../hooks/useScrollReveal";
import profilePhoto from "../profile photo.png";

export default function About() {
  const revealRef = useScrollReveal();
  return (
    <section className="section" id="about">
      <div className="container reveal" ref={revealRef}>
        <div className="about-grid">
          <div className="about-avatar">
            <img src={profilePhoto} alt={profile.name} />
          </div>
          <div className="about-text">
            <h2 style={{ marginTop: 0 }}>About Me</h2>
            <p>
              I'm a software engineer with 3+ years of industry experience building
              backend services in Python, RESTful APIs, and user-facing features in
              JavaScript, TypeScript, and React, deployed on AWS. I hold an M.S. in
              Computer Science from Arizona State University with hands-on machine
              learning and NLP project work.
            </p>
            <p>
              I enjoy solving complex problems end-to-end — from designing APIs and
              optimizing database queries to shipping polished, well-tested React
              interfaces alongside design and product teams. I'm always looking for
              opportunities to build impactful products with great teams.
            </p>
            <div className="about-links">
              <a className="btn btn-sm btn-primary-outline" href={profile.links.github} target="_blank" rel="noreferrer">
                GitHub
              </a>
              <a className="btn btn-sm btn-primary-outline" href={profile.links.linkedin} target="_blank" rel="noreferrer">
                LinkedIn
              </a>
              <a className="btn btn-sm btn-primary-outline" href={profile.links.medium} target="_blank" rel="noreferrer">
                Medium
              </a>
              <a className="btn btn-sm btn-primary-outline" href={profile.links.resume} target="_blank" rel="noreferrer">
                Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

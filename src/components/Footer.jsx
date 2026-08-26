import { profile } from "../data";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
];

const socialLinks = [
  { label: "GitHub", href: profile.links.github },
  { label: "LinkedIn", href: profile.links.linkedin },
  { label: "Medium", href: profile.links.medium },
];

export default function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="footer-gradient-border" />

      <div className="container footer-cta">
        <h2>Let's Connect</h2>
        <p className="muted">
          I am currently open to new opportunities in software engineering.
        </p>
        <div className="footer-cta-buttons">
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
        </div>
      </div>

      <div className="container footer-inner">
        <div className="footer-col footer-col-brand">
          <a className="brand" href="#home" aria-label="Go to top">
            <span className="brand_dot" />
            <span className="brand_text">Aakash Shetty</span>
          </a>
          <p className="muted footer-tagline">
            Software Engineer building backend services, full-stack apps, and
            cloud infrastructure.
          </p>
        </div>

        <div className="footer-col">
          <h4 className="footer-heading">Navigate</h4>
          <ul className="footer-nav">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-col">
          <h4 className="footer-heading">Connect</h4>
          <ul className="footer-nav">
            {socialLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href} target="_blank" rel="noreferrer">
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a href={`mailto:${profile.email}`}>{profile.email}</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="container footer-bottom">
        <span className="muted">
          &copy; {new Date().getFullYear()} Aakash Sathish Shetty
        </span>
        <span className="muted">Built with React + Vite</span>
      </div>
    </footer>
  );
}

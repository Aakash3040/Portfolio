import { useEffect, useState } from "react";

export default function Topbar({ onToggleTheme, isLight, onOpenMenu, activeSection }) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`topbar ${isScrolled ? "scrolled" : ""}`}>
      <div className="container topbar_inner">
        <a className="brand" href="#home" aria-label="Go to top">
          <span className="brand_dot" />
          <span className="brand_text">Aakash</span>
        </a>

        <nav className="nav" aria-label="Primary">
          {["about", "skills", "projects", "experience", "education", "contact"].map((id) => (
            <a
              key={id}
              href={`#${id}`}
              className={activeSection === id ? "nav-active" : ""}
            >
              {id[0].toUpperCase() + id.slice(1)}
            </a>
          ))}
        </nav>

        <div className="topbar_actions">
          <button
            className="iconbtn"
            onClick={onToggleTheme}
            aria-label="Toggle theme"
            title="Toggle theme"
          >
            <span aria-hidden="true">{isLight ? "☀" : "◐"}</span>
          </button>

          <button
            className="iconbtn iconbtn-menu"
            onClick={onOpenMenu}
            aria-label="Open menu"
            title="Menu"
          >
            <span aria-hidden="true">☰</span>
          </button>
        </div>
      </div>
    </div>
  );
}

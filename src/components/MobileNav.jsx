import React from "react";

export default function MobileNav({ open, onClose, activeSection }) {
  return (
    <div className={`mobileNav ${open ? "open" : ""}`} aria-label="Mobile menu">
      {["about", "skills", "projects", "experience", "education", "contact"].map((id) => (
        <a
          key={id}
          href={`#${id}`}
          onClick={onClose}
          className={activeSection === id ? "nav-active" : ""}
        >
          {id[0].toUpperCase() + id.slice(1)}
        </a>
      ))}
    </div>
  );
}

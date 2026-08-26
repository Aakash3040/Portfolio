import { profile } from "../data";
import SectionHead from "../components/SectionHead";
import useScrollReveal from "../hooks/useScrollReveal";

const categories = [
  { key: "Languages", icon: "</>", accent: "var(--primary)" },
  { key: "Frameworks", icon: "\u2B21", accent: "var(--secondary)" },
  { key: "Backend", icon: "{ }", accent: "#f59e0b" },
  { key: "DevOps", icon: "\u2601", accent: "#a78bfa" },
  { key: "Concepts", icon: "\u2699", accent: "#34d399" },
];

export default function Skills() {
  const revealRef = useScrollReveal();
  return (
    <section className="section section-alt" id="skills">
      <div className="container reveal" ref={revealRef}>
        <SectionHead title="Technical Skills" />
        <div className="skills-rows">
          {categories.map((cat, idx) => (
            <div
              className="skills-row stagger-item"
              style={{ "--delay": `${idx * 0.1}s`, "--accent": cat.accent }}
              key={cat.key}
            >
              <div className="skills-row-label">
                <span className="skills-row-icon">{cat.icon}</span>
                <span className="skills-row-name">{cat.key}</span>
              </div>
              <div className="skills-row-pills">
                {(profile.skills[cat.key] || []).map((skill) => (
                  <span key={skill} className="skill-chip">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

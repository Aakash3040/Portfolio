import { motion } from "framer-motion";
import { profile } from "../data";
import SectionHead from "../components/SectionHead";

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

function TechTag({ name }) {
  const iconMap = {
    python: "devicon-python-plain",
    numpy: "devicon-numpy-original",
    java: "devicon-java-plain",
    android: "devicon-android-plain",
  };
  return (
    <span className="tech-tag">
      {iconMap[name] && <i className={iconMap[name]} />}
      {name.charAt(0).toUpperCase() + name.slice(1)}
    </span>
  );
}

export default function Projects() {
  return (
    <section className="section" id="projects">
      <div className="container">
        <SectionHead
          title="Projects"
          subtitle="Academic and research projects showcasing technical depth."
        />

        <motion.div
          className="bento-grid"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          {profile.projects.map((p, idx) => (
            <motion.div
              key={idx}
              className={`bento-card ${idx === 0 ? "bento-large" : "bento-medium"}`}
              variants={item}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
            >
              <div className="card-gradient-header" />
              <span className="bento-tag">{p.tag}</span>
              <h3>{p.title}</h3>
              <p className="muted">{p.desc}</p>
              {p.tech && (
                <div className="tech-tags">
                  {p.tech.map((t) => (
                    <TechTag key={t} name={t} />
                  ))}
                </div>
              )}
              {p.link && (
                <a
                  href={p.link}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-sm btn-primary-outline"
                  style={{ alignSelf: "flex-start", marginTop: "auto" }}
                >
                  {p.linkText}
                </a>
              )}
            </motion.div>
          ))}

          <motion.a
            className="bento-card bento-cta"
            href={profile.links.github}
            target="_blank"
            rel="noreferrer"
            variants={item}
            whileHover={{ y: -6, transition: { duration: 0.2 } }}
          >
            <div className="bento-cta-content">
              <span style={{ fontSize: "2rem" }}>→</span>
              <h3>More Projects</h3>
              <p className="muted">Check out my GitHub for additional work</p>
              <span className="btn btn-primary">View GitHub →</span>
            </div>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}

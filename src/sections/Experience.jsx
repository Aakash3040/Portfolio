import { motion } from "framer-motion";
import { profile } from "../data";
import SectionHead from "../components/SectionHead";

const iconMap = {
  python: "devicon-python-plain",
  react: "devicon-react-original",
  docker: "devicon-docker-plain",
  amazonwebservices: "devicon-amazonwebservices-plain-wordmark",
  postgresql: "devicon-postgresql-plain",
  java: "devicon-java-plain",
  spring: "devicon-spring-plain",
  mysql: "devicon-mysql-plain",
  jenkins: "devicon-jenkins-line",
  android: "devicon-android-plain",
  arduino: "devicon-arduino-plain",
  bluetooth: null,
  typescript: "devicon-typescript-plain",
  nodejs: "devicon-nodejs-plain",
};

const labelMap = {
  typescript: "TypeScript",
  nodejs: "Node.js",
  amazonwebservices: "AWS",
  postgresql: "PostgreSQL",
  mysql: "MySQL",
};

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.2 } },
};

const item = {
  hidden: { opacity: 0, x: -30 },
  show: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};

export default function Experience() {
  return (
    <section className="section section-alt" id="experience">
      <div className="container">
        <SectionHead title="Experience" />
        <motion.div
          className="timeline"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          {profile.experience.map((job, idx) => (
            <motion.div className="timeline_item" variants={item} key={idx}>
              <div className="timeline_dot" />
              <div className="timeline_content">
                <h3>
                  {job.company} — {job.role}
                </h3>
                <span className="muted">{job.dates}</span>
                <ul className="bullets">
                  {job.bullets.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
                {job.tech && (
                  <div className="tech-tags">
                    {job.tech.map((t) => (
                      <span key={t} className="tech-tag">
                        {iconMap[t] && <i className={iconMap[t]} />}
                        {labelMap[t] || t.charAt(0).toUpperCase() + t.slice(1)}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

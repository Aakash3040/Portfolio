import { motion } from "framer-motion";
import { profile } from "../data";
import SectionHead from "../components/SectionHead";

export default function Education() {
  return (
    <section className="section" id="education">
      <div className="container">
        <SectionHead title="Education" />
        <div className="education-compact">
          {profile.education.map((edu, idx) => (
            <motion.div
              className="education-row"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              key={idx}
            >
              <div className="education-school">{edu.school}</div>
              <div className="education-degree">{edu.degree}</div>
              <div className="education-dates muted">{edu.dates}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

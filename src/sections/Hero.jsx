import { motion } from "framer-motion";
import { profile } from "../data";
import profilePhoto from "../profile photo.png";

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.2 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Hero() {
  return (
    <section id="home" className="hero-split">
      <div className="hero-gradient-bg" aria-hidden="true" />
      <div className="container hero-split-grid">
        <motion.div
          className="hero-split-left"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <motion.span variants={item} className="hero-kicker">
            Software Engineer
          </motion.span>
          <motion.h1 variants={item} className="hero-name hero-name-gradient">
            {profile.name}
          </motion.h1>
          <motion.p variants={item} className="hero-tagline-static">
            I build scalable backend systems and ship polished full-stack
            products.
          </motion.p>
          <motion.div variants={item} className="hero-actions">
            <a
              className="btn btn-linkedin"
              href={profile.links.linkedin}
              target="_blank"
              rel="noreferrer"
            >
              <span style={{ marginRight: 8 }}>in</span>LinkedIn
            </a>
            <a className="btn btn-email" href={`mailto:${profile.email}`}>
              <span style={{ marginRight: 8 }}>✉</span>Email
            </a>
            <a
              className="btn btn-resume"
              href={profile.links.resume}
              target="_blank"
              rel="noreferrer"
            >
              Resume
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          className="hero-split-right"
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          <div className="hero-photo-frame">
            <img src={profilePhoto} alt={profile.name} />
          </div>
        </motion.div>
      </div>

      <motion.a
        href="#projects"
        className="scroll-down"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        <span>↓</span>
      </motion.a>
    </section>
  );
}

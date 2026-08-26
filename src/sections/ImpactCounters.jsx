import { useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { profile } from "../data";
import useCountUp from "../hooks/useCountUp";

function Counter({ value, label, suffix, delay }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { count, trigger } = useCountUp(value);

  useEffect(() => {
    if (isInView) trigger();
  }, [isInView, trigger]);

  const formatted = value % 1 === 0 ? Math.round(count) : count.toFixed(1);

  return (
    <motion.div
      ref={ref}
      className="impact-counter"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, delay }}
    >
      <div className="impact-value">
        {formatted}
        {suffix}
      </div>
      <div className="impact-label">{label}</div>
    </motion.div>
  );
}

export default function ImpactCounters() {
  return (
    <section className="impact-section">
      <div className="container">
        <div className="impact-grid">
          {profile.counters.map((c, idx) => (
            <Counter
              key={c.label}
              value={c.value}
              label={c.label}
              suffix={c.suffix}
              delay={idx * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

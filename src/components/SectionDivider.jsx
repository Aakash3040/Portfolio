export default function SectionDivider({ flip = false }) {
  return (
    <div
      className="section-divider"
      style={flip ? { transform: "scaleX(-1)" } : undefined}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0,40 C360,80 720,0 1080,40 C1260,60 1380,50 1440,40 L1440,80 L0,80 Z"
          fill="var(--divider-fill, var(--section-alt))"
        />
      </svg>
    </div>
  );
}

import React from "react";

export default function SectionHead({ title, subtitle }) {
  return (
    <div className="section_head">
      <h2>{title}</h2>
      {subtitle ? <p className="muted">{subtitle}</p> : null}
    </div>
  );
}

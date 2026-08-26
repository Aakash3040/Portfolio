import React from "react";

export default function Pill({ children, ghost = false }) {
  return (
    <span className={`pill ${ghost ? "pill-ghost" : ""}`}>{children}</span>
  );
}

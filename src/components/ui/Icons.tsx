export const Chevron = ({ dir = "right" }: { dir?: "right" | "left" }) => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" 
    style={{ transform: dir === "left" ? "rotate(180deg)" : "none", transition: "0.2s" }}>
    <path d="m9 18 6-6-6-6" />
  </svg>
);

export const LayersIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2">
    <path d="m12 2 9 4.91-9 5.09-9-5.09L12 2Z"/><path d="m3 12.89 9 5.11 9-5.11"/><path d="m3 17.44 9 5.11 9-5.11"/>
  </svg>
);
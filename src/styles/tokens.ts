export const tokens = {
  colors: {
    bg: "var(--bg)",
    panel: "var(--panel)",
    text: "var(--text)",
    accent: "var(--accent)",
    success: "var(--success)",
    accentMuted: "color-mix(in srgb, var(--accent), transparent 80%)",
  },
  spacing: {
    fluid: "clamp(1rem, 5vw, 3rem)",
  },
  radius: "var(--radius-card)",
} as const;
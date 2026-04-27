"use client";
import { tokens } from "@/styles/tokens";

export default function Button({ children, onClick, variant = "primary" }: any) {
  const isPrimary = variant === "primary";
  return (
    <button
      onClick={onClick}
      style={{
        backgroundColor: isPrimary ? tokens.colors.accent : "transparent",
        color: tokens.colors.text,
        border: isPrimary ? "none" : "1px solid rgba(255,255,255,0.1)",
        borderRadius: "8px",
      }}
      className="px-4 py-2 text-xs font-bold uppercase tracking-wider hover:opacity-80 transition-all active:scale-95"
    >
      {children}
    </button>
  );
}
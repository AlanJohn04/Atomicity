"use client";
import { motion } from "framer-motion";

export default function MetricBar({ label, value, max, onClick, index }: any) {
  const percentage = (value / max) * 100;

  return (
    <motion.div 
      layout
      initial={{ opacity: 0, scale: 0.95, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ 
        type: "spring", 
        stiffness: 150, 
        damping: 20, 
        delay: index * 0.05 
      }}
      onClick={onClick}
      className="group relative flex flex-col @[450px]:flex-row items-start @[450px]:items-center gap-4 p-5 cursor-pointer bg-[#1a1b1e]/40 hover:bg-accent/[0.08] rounded-2xl border border-white/5 hover:border-accent/40 transition-all duration-500 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-accent/0 via-accent/[0.03] to-accent/0 opacity-0 group-hover:opacity-100 transition-opacity" />
      
      <div className="z-10 w-full @[450px]:w-36">
        <div className="text-[10px] font-black text-accent uppercase tracking-[0.2em] mb-1 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-1 group-hover:translate-y-0">
          Node Active
        </div>
        <div className="text-sm font-bold text-white/60 group-hover:text-white uppercase tracking-tighter transition-colors">
          {label}
        </div>
      </div>
      
      <div className="z-10 flex-1 w-full h-14 bg-black/60 rounded-xl overflow-hidden relative border border-white/10 group-hover:border-accent/20 p-1.5 shadow-2xl">
        <motion.div 
          initial={{ width: 0 }}
          animate={{ width: `${percentage}%` }}
          transition={{ duration: 1.5, ease: [0.19, 1, 0.22, 1] }}
          className="h-full bg-gradient-to-r from-accent via-[#5d7dff] to-white/80 rounded-lg relative"
        >
          <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_0%,rgba(255,255,255,0.2)_50%,transparent_100%)] animate-[shimmer_2s_infinite]" />
          <div className="absolute top-0 right-0 h-full w-[2px] bg-white shadow-[0_0_15px_#fff]" />
        </motion.div>
        
        <div className="absolute inset-y-0 right-4 flex items-center gap-2 pointer-events-none">
          <span className="text-[10px] font-black text-white group-hover:scale-110 transition-transform">
            {value.toFixed(1)}
          </span>
          <span className="text-[8px] font-bold text-white/40 uppercase">GB</span>
        </div>
      </div>

      <div className="z-10 hidden @[450px]:flex items-center justify-center w-10 h-10 rounded-full border border-white/5 group-hover:border-accent/50 group-hover:bg-accent/10 transition-all duration-500">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="text-white/20 group-hover:text-accent group-hover:translate-x-0.5 transition-all">
          <path d="m9 18 6-6-6-6" />
        </svg>
      </div>
    </motion.div>
  );
}
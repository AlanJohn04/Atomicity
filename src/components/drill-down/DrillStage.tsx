"use client";
import { motion, AnimatePresence } from "framer-motion";

interface DrillStageProps {
  children: React.ReactNode;
  isLoading: boolean;
  currentLevel: number;
}

export default function DrillStage({ children, isLoading, currentLevel }: DrillStageProps) {
  return (
    <div className="relative w-full">
      <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-accent/50 to-transparent" />
      
      <div className="bg-panel/40 backdrop-blur-2xl rounded-[32px] border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden">
        <div className="flex items-center justify-between p-6 md:px-10 border-b border-white/5">
          <div className="flex items-center gap-4">
            <div className="w-2 h-2 rounded-full bg-accent animate-pulse shadow-[0_0_10px_var(--color-accent)]" />
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white/40">
              Data Stream Alpha
            </span>
          </div>
          <div className="flex items-center gap-2">
            {[0, 1, 2].map((i) => (
              <div 
                key={i}
                className={`h-1 transition-all duration-500 rounded-full ${
                  i <= currentLevel ? "w-6 bg-accent" : "w-2 bg-white/10"
                }`}
              />
            ))}
          </div>
        </div>

        <div className="p-4 md:p-8 min-h-[450px] relative">
          <AnimatePresence mode="wait">
            {isLoading ? (
              <motion.div
                key="loading"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 flex flex-col items-center justify-center gap-6"
              >
                <div className="relative w-12 h-12">
                  <div className="absolute inset-0 border-2 border-accent/20 rounded-xl" />
                  <motion.div 
                    animate={{ rotate: 360 }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 border-t-2 border-accent rounded-xl"
                  />
                </div>
                <span className="text-[9px] font-bold uppercase tracking-[0.5em] text-accent animate-pulse">
                  Synchronizing
                </span>
              </motion.div>
            ) : (
              <motion.div
                key={currentLevel}
                initial={{ opacity: 0, x: 20, filter: "blur(10px)" }}
                animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, x: -20, filter: "blur(10px)" }}
                transition={{ type: "spring", stiffness: 100, damping: 20 }}
              >
                {children}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className="p-4 bg-black/20 border-t border-white/5 flex justify-between items-center px-10">
          <span className="text-[8px] font-bold text-white/20 uppercase">System Ready</span>
          <div className="flex gap-4">
            <div className="w-1 h-1 rounded-full bg-white/10" />
            <div className="w-1 h-1 rounded-full bg-white/10" />
            <div className="w-1 h-1 rounded-full bg-white/10" />
          </div>
        </div>
      </div>

      <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-full h-20 bg-accent/5 blur-[80px] -z-10" />
    </div>
  );
}
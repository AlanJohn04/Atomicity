"use client";
import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useDrillData } from "../hooks/useDrillData";
import MetricBar from "../components/drill-down/MetricBar";
import Breadcrumbs from "../components/drill-down/Breadcrumbs";
import DrillStage from "../components/drill-down/DrillStage";
import { LayersIcon } from "../components/ui/Icons";

export default function Page() {
  const [v, setV] = useState({ level: 0, id: null as any, name: "Infrastructure" });
  const [stack, setStack] = useState<any[]>([]);
  const [sort, setSort] = useState<"val" | "name">("val");

  const { data, isLoading } = useDrillData(v.level, v.id);

  const processed = useMemo(() => {
    if (!data) return [];
    const items = data.map((d: any) => ({
      id: d.id,
      name: d.name || d.title?.split(" ")[0] || "Unknown Node",
      val: d.id * 8.5 + 15 
    }));
    return items.sort((a: any, b: any) => 
      sort === "val" ? b.val - a.val : a.name.localeCompare(b.name)
    );
  }, [data, sort]);

  const maxVal = useMemo(() => Math.max(...processed.map((p: any) => p.val), 1), [processed]);

  const handleNavigate = (i: number) => {
    if (i === -1) {
      setV({ level: 0, id: null, name: "Infrastructure" });
      setStack([]);
    } else {
      setV(stack[i]);
      setStack(stack.slice(0, i));
    }
  };

  return (
    <div className="relative min-h-screen bg-bg text-white selection:bg-accent/30 overflow-x-hidden">
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_50%_-20%,#2f5bff22,transparent_50%)] pointer-events-none" />
      <div className="fixed inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.02] pointer-events-none" />

      <main className="relative z-10 max-w-5xl mx-auto p-6 md:p-20 chart-container">
        <header className="flex flex-col md:flex-row justify-between items-end gap-8 mb-20">
          <div className="flex items-center gap-6">
            <motion.div 
              whileHover={{ rotate: 90, scale: 1.1 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="p-5 bg-accent rounded-[2rem] shadow-[0_0_50px_rgba(47,91,255,0.4)] border border-white/10"
            >
              <LayersIcon />
            </motion.div>
            <div>
              <h1 className="text-4xl font-bold tracking-[-0.05em] leading-none">
                Atomity <span className="text-white/20">Optima</span>
              </h1>
              <div className="flex items-center gap-3 mt-4">
                <span className="w-2 h-2 rounded-full bg-success animate-pulse shadow-[0_0_10px_var(--color-success)]" />
                <p className="text-[10px] text-white/30 font-black uppercase tracking-[0.4em]">
                  System Operational
                </p>
              </div>
            </div>
          </div>

          <div className="flex bg-white/[0.03] backdrop-blur-xl border border-white/10 p-1.5 rounded-2xl shadow-2xl">
            {(["val", "name"] as const).map((s) => (
              <button 
                key={s} 
                onClick={() => setSort(s)} 
                className={`px-6 py-2.5 text-[10px] font-black uppercase rounded-xl transition-all duration-500 ${
                  sort === s 
                    ? "bg-white text-black shadow-[0_10px_20px_rgba(255,255,255,0.2)] scale-105" 
                    : "text-white/40 hover:text-white hover:bg-white/5"
                }`}
              >
                {s === "val" ? "Rank" : "Index"}
              </button>
            ))}
          </div>
        </header>

        <Breadcrumbs stack={stack} onNavigate={handleNavigate} />

        <DrillStage isLoading={isLoading} currentLevel={v.level}>
          <div className="grid gap-4">
            {processed.map((item: any, i: number) => (
              <MetricBar 
                key={item.id} 
                index={i} 
                label={item.name} 
                value={item.val} 
                max={maxVal} 
                onClick={() => {
                  if (v.level < 2) {
                    setStack([...stack, v]);
                    setV({ level: v.level + 1, id: item.id, name: item.name });
                  }
                }} 
              />
            ))}
          </div>
        </DrillStage>

        <footer className="mt-20 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[9px] font-bold text-white/10 uppercase tracking-[0.3em]">
            Core Engine v4.0.12
          </p>
          <div className="flex gap-6">
            <div className="h-[1px] w-12 bg-white/5" />
            <div className="h-[1px] w-12 bg-white/5" />
          </div>
        </footer>
      </main>
    </div>
  );
}
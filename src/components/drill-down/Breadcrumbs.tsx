export default function Breadcrumbs({ stack, onNavigate }: any) {
  return (
    <nav className="flex items-center gap-4 mb-10 overflow-x-auto no-scrollbar pb-2">
      <button 
        onClick={() => onNavigate(-1)} 
        className="text-[11px] font-black text-white/20 hover:text-accent transition-colors uppercase tracking-[0.2em]"
      >
        ROOT
      </button>
      {stack.map((item: any, i: number) => (
        <div key={i} className="flex items-center gap-4">
          <span className="text-white/10 font-bold">/</span>
          <button 
            onClick={() => onNavigate(i)}
            className="text-[11px] font-black text-white/20 hover:text-accent transition-colors uppercase tracking-[0.2em] whitespace-nowrap"
          >
            {item.name}
          </button>
        </div>
      ))}
    </nav>
  );
}
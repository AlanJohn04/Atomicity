export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center h-[450px] gap-8">
      <div className="relative">
        <div className="w-16 h-16 border-4 border-accent/10 rounded-full animate-pulse" />
        <div className="absolute inset-0 w-16 h-16 border-t-4 border-accent rounded-full animate-spin" />
      </div>
      <p className="text-[11px] font-black text-accent uppercase tracking-[0.5em] animate-pulse">
        Polling Data Plane
      </p>
    </div>
  );
}
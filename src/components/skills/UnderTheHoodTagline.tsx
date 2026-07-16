export const UnderTheHoodTagline = () => {
  return (
    <div className="absolute bottom-18 w-full text-center z-50 pointer-events-none flex items-center justify-center space-x-6">
      {/* Decorative Line Left */}
      <div className="w-16 h-[1px] bg-gradient-to-r from-transparent to-white/30 relative">
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[3px] h-[3px] bg-white/50 rounded-full" />
      </div>

      <h2 className="text-xl md:text-3xl font-light tracking-[0.3em] text-gray-200">
        <span className="italic">UNDER THE </span>
        <span className="font-bold text-brand-red italic">HOOD</span>
      </h2>

      {/* Decorative Line Right */}
      <div className="w-16 h-[1px] bg-gradient-to-l from-transparent to-brand-red/40 relative">
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[3px] h-[3px] bg-brand-red rounded-full shadow-[0_0_8px_rgba(229,9,20,0.8)]" />
      </div>
    </div>
  );
};

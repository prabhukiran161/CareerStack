export const ProjectsSectionHeader = () => {
  return (
    <div className="w-full max-w-7xl flex items-center justify-center my-2 select-none">
      {/* Left Gradient Line */}
      <div className="h-[1px] bg-gradient-to-r from-transparent via-brand-red/60 to-brand-red/30 flex-1 max-w-[120px] md:max-w-[200px]" />

      {/* Header Text */}
      <div className="px-4 text-xs md:text-2xl tracking-[0.2em] font-semibold uppercase flex items-center">
        <span className="text-white font-bold">
          FEATURED{" "}
          <span className="text-brand-red font-bold italic tracking-[0.15em] [text-shadow:0px_0px_12px_#FE3548]">
            BUILDS
          </span>
        </span>
      </div>

      {/* Right Gradient Line */}
      <div className="h-[1px] bg-gradient-to-l from-transparent via-brand-red/60 to-brand-red/30 flex-1 max-w-[120px] md:max-w-[200px]" />
    </div>
  );
};

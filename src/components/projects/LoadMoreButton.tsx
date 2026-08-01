import { HiChevronDown } from "react-icons/hi2";

type LoadMoreButtonProps = {
  onClick?: () => void;
};

export const LoadMoreButton = ({ onClick }: LoadMoreButtonProps) => {
  return (
    <div className="flex justify-center w-full mt-4 select-none">
      <button
        onClick={onClick}
        className="px-8 py-3.5 border border-brand-red/60 text-sm font-medium text-white rounded-full hover:bg-brand-red/10 shadow-[0_0_20px_rgba(229,9,20,0.3)] hover:shadow-[0_0_30px_rgba(229,9,20,0.5)] transition-all duration-300 flex items-center gap-2.5 cursor-pointer bg-black/40 active:scale-95 group"
      >
        <span>Load More Projects</span>
        <HiChevronDown className="w-4 h-4 text-brand-red group-hover:translate-y-0.5 transition-transform" />
      </button>
    </div>
  );
};

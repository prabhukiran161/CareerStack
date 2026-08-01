import { HiOutlineMagnifyingGlass } from "react-icons/hi2";

type SearchBarProps = {
  value: string;
  onChange: (value: string) => void;
};

export const SearchBar = ({ value, onChange }: SearchBarProps) => {
  return (
    <div className="relative flex-1 min-w-[280px] flex items-center bg-black/40 border border-white/10 rounded-xl px-3.5 py-2.5 focus-within:border-brand-red/60 focus-within:ring-1 focus-within:ring-brand-red/40 transition-all">
      <HiOutlineMagnifyingGlass className="w-5 h-5 text-gray-400 shrink-0 mr-3" />
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search by technology, feature, or project name..."
        className="w-full bg-transparent text-sm text-white placeholder-gray-500 focus:outline-none font-geomini"
      />
      <kbd className="hidden sm:inline-flex items-center gap-1 text-[11px] font-mono text-gray-400 bg-white/5 border border-white/10 px-2 py-0.5 rounded-md shrink-0 ml-2 select-none">
        ⌘K
      </kbd>
    </div>
  );
};

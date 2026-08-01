import { useState, useRef, useEffect } from "react";
import { HiChevronDown } from "react-icons/hi2";
import type { FilterOption } from "../../config/filters.config";

type DropdownFilterProps = {
  filter: FilterOption;
  selectedValue?: string;
  onSelect?: (value: string) => void;
  alignRight?: boolean;
};

export const DropdownFilter = ({
  filter,
  selectedValue,
  onSelect,
  alignRight = false,
}: DropdownFilterProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const { Icon, label, options, widthClass } = filter;
  const currentLabel = selectedValue || label;

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative shrink-0" ref={containerRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center justify-between gap-2 px-3.5 py-2.5 ${
          widthClass || "w-36"
        } bg-black/40 border ${
          isOpen
            ? "border-brand-red/60 text-white"
            : "border-white/10 text-gray-300 hover:text-white hover:border-white/20"
        } rounded-xl text-sm font-medium transition-all cursor-pointer select-none active:scale-95`}
      >
        <div className="flex items-center gap-2 min-w-0 flex-1 overflow-hidden">
          <Icon className="w-4 h-4 text-gray-400 shrink-0" />
          <span
            className="truncate text-left font-medium block"
            title={currentLabel}
          >
            {currentLabel}
          </span>
        </div>
        <HiChevronDown
          className={`w-4 h-4 text-gray-400 shrink-0 transition-transform duration-200 ${
            isOpen ? "rotate-180 text-brand-red" : ""
          }`}
        />
      </button>

      {isOpen && options && options.length > 0 && (
        <div
          className={`absolute ${
            alignRight ? "right-0" : "left-0"
          } mt-2 w-48 bg-[#121212]/95 backdrop-blur-xl border border-white/15 rounded-xl shadow-2xl z-50 py-1.5 overflow-hidden`}
        >
          {options.map((option) => (
            <button
              key={option}
              onClick={() => {
                onSelect?.(option);
                setIsOpen(false);
              }}
              className={`w-full text-left px-4 py-2 text-sm transition-colors ${
                selectedValue === option
                  ? "bg-brand-red/20 text-brand-red font-medium"
                  : "text-gray-300 hover:bg-white/5 hover:text-white"
              }`}
            >
              {option}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

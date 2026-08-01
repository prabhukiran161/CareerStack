import { SearchBar } from "./SearchBar";
import { DropdownFilter } from "./DropdownFilter";
import { FILTERS } from "../../config/filters.config";

type ProjectsFilterBarProps = {
  searchTerm: string;
  onSearchChange: (value: string) => void;
  selectedFilters: Record<string, string>;
  onFilterChange: (filterId: string, value: string) => void;
};

export const ProjectsFilterBar = ({
  searchTerm,
  onSearchChange,
  selectedFilters,
  onFilterChange,
}: ProjectsFilterBarProps) => {
  return (
    <div className="relative z-30 w-full max-w-7xl bg-[#121212]/80 backdrop-blur-md border border-white/10 rounded-2xl p-3 md:p-3.5 flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-3 shadow-xl">
      {/* Search Bar */}
      <SearchBar value={searchTerm} onChange={onSearchChange} />

      {/* Filter Dropdowns Row */}
      <div className="flex flex-wrap items-center gap-2.5">
        {FILTERS.map((filter, index) => (
          <DropdownFilter
            key={filter.id}
            filter={filter}
            alignRight={index >= FILTERS.length - 2}
            selectedValue={selectedFilters[filter.id]}
            onSelect={(val) => onFilterChange(filter.id, val)}
          />
        ))}
      </div>
    </div>
  );
};

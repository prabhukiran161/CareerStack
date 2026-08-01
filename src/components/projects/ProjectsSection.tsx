import { useState, useMemo } from "react";
import { ProjectHero } from "./ProjectHero";
import { ProjectsFilterBar } from "./ProjectsFilterBar";
import { ProjectsSectionHeader } from "./ProjectsSectionHeader";
import { ProjectsGrid } from "./ProjectsGrid";
import { LoadMoreButton } from "./LoadMoreButton";
import { PROJECTS_DATA } from "../../config/projects.config";

export const ProjectsSection = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedFilters, setSelectedFilters] = useState<Record<string, string>>({});

  const handleFilterChange = (filterId: string, value: string) => {
    setSelectedFilters((prev) => ({
      ...prev,
      [filterId]: value,
    }));
  };

  const filteredProjects = useMemo(() => {
    return PROJECTS_DATA.filter((project) => {
      // Search term matching (title, description, category, tech stack)
      if (searchTerm.trim()) {
        const query = searchTerm.toLowerCase();
        const matchesTitle = project.title.toLowerCase().includes(query);
        const matchesDesc = project.description.toLowerCase().includes(query);
        const matchesCategory = project.category.toLowerCase().includes(query);
        const matchesTech = project.tech.icons.some((t) =>
          t.name.toLowerCase().includes(query)
        );

        if (!matchesTitle && !matchesDesc && !matchesCategory && !matchesTech) {
          return false;
        }
      }

      // Category filter matching
      const categoryFilter = selectedFilters["category"];
      if (
        categoryFilter &&
        categoryFilter !== "All Categories" &&
        project.category !== categoryFilter
      ) {
        return false;
      }

      return true;
    });
  }, [searchTerm, selectedFilters]);

  return (
    <section className="relative w-full min-h-screen bg-black bg-grid-pattern pt-34 pb-20 px-4 md:px-8 flex flex-col items-center gap-8 overflow-x-hidden">
      {/* Phase 1 — Hero Banner */}
      <ProjectHero />

      {/* Phase 2 — Search + Filters Bar */}
      <ProjectsFilterBar
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        selectedFilters={selectedFilters}
        onFilterChange={handleFilterChange}
      />

      {/* Section Divider Header */}
      <ProjectsSectionHeader />

      {/* Phase 3 — Projects Cards Grid */}
      <ProjectsGrid projects={filteredProjects} />

      {/* Load More Button */}
      <LoadMoreButton />
    </section>
  );
};

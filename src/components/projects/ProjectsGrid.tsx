import { useState } from "react";
import type { ProjectItem } from "../../config/projects.config";
import { ProjectCard } from "./ProjectCard";

type ProjectsGridProps = {
  projects: ProjectItem[];
};

export const ProjectsGrid = ({ projects }: ProjectsGridProps) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  if (projects.length === 0) {
    return (
      <div className="w-full max-w-7xl py-16 text-center bg-[#0D0D0D]/60 border border-white/10 rounded-2xl">
        <p className="text-gray-400 text-lg">No projects match your filter criteria.</p>
      </div>
    );
  }

  const defaultActiveIndex = projects.length >= 3 ? 1 : null;
  const activeIndex = hoveredIndex !== null ? hoveredIndex : defaultActiveIndex;

  return (
    <div
      onMouseLeave={() => setHoveredIndex(null)}
      className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
    >
      {projects.map((project, index) => (
        <ProjectCard
          key={project.id}
          project={project}
          index={index}
          isActive={index === activeIndex}
          onMouseEnter={() => setHoveredIndex(index)}
        />
      ))}
    </div>
  );
};

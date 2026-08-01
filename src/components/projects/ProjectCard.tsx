import { motion } from "framer-motion";
import type { ProjectItem } from "../../config/projects.config";
import { TechStackIcons } from "./TechStackIcons";
import { CategoryBadge } from "./CategoryBadge";
import { ActionButton } from "./ActionButton";

type ProjectCardProps = {
  project: ProjectItem;
  index?: number;
  isActive?: boolean;
  onMouseEnter?: () => void;
};

export const ProjectCard = ({
  project,
  index = 0,
  isActive = false,
  onMouseEnter,
}: ProjectCardProps) => {
  const { title, category, description, image, tech, github, live, docs } =
    project;

  return (
    <motion.article
      onMouseEnter={onMouseEnter}
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={`bg-[#0D0D0D] border rounded-2xl md:rounded-3xl overflow-hidden flex flex-col group relative transition-all duration-300 ${
        isActive
          ? "border-brand-red/70 shadow-[0_0_30px_rgba(229,9,20,0.25)] ring-1 ring-brand-red/40"
          : "border-white/10 shadow-xl"
      }`}
    >
      {/* 1. Project Image & Floating Tech Icons */}
      <div className="h-48 w-full overflow-hidden relative bg-black/60">
        <img
          src={image}
          alt={title}
          draggable={false}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {/* Dark subtle gradient overlay on image */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D] via-transparent to-black/30 opacity-70" />

        {/* 2. Floating Tech Stack */}
        <TechStackIcons tech={tech} />
      </div>

      {/* Card Body */}
      <div className="px-6 py-4 flex flex-col justify-between flex-1 gap-2 border-t border-white/5">
        {/* 3. Title & 4. Category Badge Row */}
        <div className="flex items-center gap-3">
          <h3 className="text-xl font-bold text-white group-hover:text-brand-red transition-colors font-geomini">
            {title}
          </h3>
          <CategoryBadge category={category} />
        </div>

        {/* 5. Description & Action Buttons Row */}
        <div className="flex items-center justify-between gap-2">
          <p className="max-w-3/4 text-sm text-gray-400 leading-relaxed font-normal">
            {description}
          </p>
          <div className="flex items-center space-x-1">
            <ActionButton type="live" href={live} />
            <ActionButton type="github" href={github} />
            <ActionButton type="docs" href={docs} />
          </div>
        </div>
      </div>
    </motion.article>
  );
};

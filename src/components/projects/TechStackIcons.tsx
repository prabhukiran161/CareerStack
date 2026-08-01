import type { ProjectTech } from "../../config/projects.config";

type TechStackIconsProps = {
  tech: {
    icons: ProjectTech[];
    extraCount?: number;
  };
};

export const TechStackIcons = ({ tech }: TechStackIconsProps) => {
  const { icons, extraCount } = tech;

  // Progressive size specs: 1st icon (largest, z-30), 2nd icon (medium, z-20), 3rd+ icon
  const sizeConfigs = [
    { container: "w-10 h-10 z-30", icon: "w-5 h-5" },
    { container: "w-9.5 h-9.5 z-20", icon: "w-4 h-4" },
    { container: "w-9 h-9 z-10", icon: "w-4 h-4" },
  ];

  return (
    <div className="absolute top-3.5 right-5 z-20 flex items-center -space-x-3.5 select-none">
      {icons.map(({ name, Icon, color }, index) => {
        const styleConfig =
          sizeConfigs[index] || sizeConfigs[sizeConfigs.length - 1];

        return (
          <div
            key={name}
            title={name}
            className={`relative rounded-full bg-[#181818] border border-white/20 flex items-center justify-center shadow-lg transition-transform hover:scale-110 hover:z-40 ${styleConfig.container}`}
          >
            <Icon
              style={{ color: color || "#FFFFFF" }}
              className={styleConfig.icon}
            />
          </div>
        );
      })}

      {extraCount !== undefined && extraCount > 0 && (
        <div
          title={`${extraCount} more technologies`}
          className="relative w-9 h-9 z-10 rounded-full bg-[#222222] border border-white/20 flex items-center justify-center shadow-md text-xs font-semibold text-gray-300"
        >
          +{extraCount}
        </div>
      )}
    </div>
  );
};

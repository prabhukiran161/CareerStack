import { SKILLS_CONFIG, type OrbitNodeConfig } from "../../../config/skills.config";

type OrbitNodeProps = {
  config: OrbitNodeConfig;
};

export const OrbitNode = ({ config }: OrbitNodeProps) => {
  const { orbitId, angle, Icon, label } = config;
  
  // Find the parent orbit config to get radius and scale
  const orbit = SKILLS_CONFIG.orbits.find((o) => o.id === orbitId);
  if (!orbit) return null;

  const { radius, iconScale } = orbit;
  const ry = radius * SKILLS_CONFIG.layout.ellipseScaleY;

  // Convert angle to radians for layout
  const radians = (angle * Math.PI) / 180;
  
  // Mathematical position on the ellipse, incorporating yOffset
  const x = Math.cos(radians) * radius;
  const y = Math.sin(radians) * ry + orbit.yOffset;

  return (
    <div
      className="absolute left-0 top-0 overflow-visible flex flex-col items-center justify-center pointer-events-none"
      style={{
        // translate(-50%, -50%) centers the node's box over the origin. 
        // x and y are pure mathematical travel from that origin.
        transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px)) scale(${iconScale})`,
      }}
    >
      <div
        className="
          relative w-[60px] h-[60px] rounded-full 
          bg-[#080808]/90 border border-white/10 backdrop-blur-md 
          flex items-center justify-center 
          shadow-[inset_0_1px_0_rgba(255,255,255,0.06),_0_8px_16px_rgba(0,0,0,0.4)]
        "
      >
        <div 
          className="absolute inset-0 rounded-full opacity-30 blur-[8px]"
          style={{ backgroundColor: orbit.color }}
        />
        <Icon size={28} className="relative z-10 text-white" />
      </div>
      <span className="mt-3 text-xs font-medium text-gray-300 tracking-wide">
        {label}
      </span>
    </div>
  );
};

import { SKILLS_CONFIG, type OrbitNodeConfig } from "../../../config/skills.config";

type OrbitNodeProps = {
  config: OrbitNodeConfig;
  angle: number;
};

export const OrbitNode = ({ config, angle }: OrbitNodeProps) => {
  const { orbitId, Icon, label, iconColor, labelColor } = config;
  const { 
    iconSize, 
    iconSaturation, 
    iconBrightness,
    glassTiltStrength,
    orbitVisualOffset
  } = SKILLS_CONFIG.layout;
  
  // Find the parent orbit config to get radius and scale
  const orbit = SKILLS_CONFIG.orbits.find((o) => o.id === orbitId);
  if (!orbit) return null;

  const { radius, iconScale, nodeGlowOpacity } = orbit;
  const ry = radius * SKILLS_CONFIG.layout.ellipseScaleY;

  // Convert angle to radians for layout
  const radians = (angle * Math.PI) / 180;
  
  // Mathematical position on the ellipse
  const x = Math.cos(radians) * radius + config.xOffset;
  
  // Apply the artistic visual offset so the 60px box sits correctly on the 2.5px line
  const y = Math.sin(radians) * ry + orbit.yOffset + orbitVisualOffset + config.yOffset;

  // Atmospheric Perspective - driven entirely by configuration
  const currentOpacity = config.depth;
  const currentScale = 0.95 + config.depth * 0.05; // 0.95 (at depth 0) -> 1.0 (at depth 1)
  
  // Subtle Depth Glow Adjustment (glow fades slightly in the back)
  const currentGlowOpacity = nodeGlowOpacity * (0.7 + 0.3 * config.depth);

  // Curvature Tilting based on tangent (cosine provides left/right horizontal position)
  const tilt = Math.cos(radians) * glassTiltStrength;

  return (
    <div
      className="group absolute left-0 top-0 overflow-visible flex flex-col items-center justify-center pointer-events-auto"
      style={{
        // Positioning and depth scaling applied to the whole node
        transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px)) scale(${iconScale * currentScale})`,
        opacity: currentOpacity,
        zIndex: config.behindPortrait ? 25 : 50,
      }}
    >
      <div className="relative w-[60px] h-[60px] flex items-center justify-center">
        
        {/* Glass Container (Rotates based on orbit curve) */}
        <div 
          className="absolute inset-0 rounded-full bg-[#080808]/90 border border-[rgba(255,255,255,0.07)] backdrop-blur-md shadow-[inset_0_1px_0_rgba(255,255,255,0.06),_0_8px_16px_rgba(0,0,0,0.4)] transition-transform duration-300"
          style={{ transform: `rotate(${tilt}deg)` }}
        />

        {/* Glow (Stays Upright) */}
        <div 
          className="absolute inset-0 rounded-full blur-[14px]"
          style={{ 
            backgroundColor: orbit.color,
            opacity: currentGlowOpacity
          }}
        />

        {/* Logo (Stays Upright) */}
        <Icon 
          size={iconSize} 
          className="relative z-10" 
          style={{
            color: iconColor,
            filter: `saturate(${iconSaturation}) brightness(${iconBrightness})`
          }}
        />
      </div>

      {/* Label */}
      <span 
        className="absolute top-[70px] opacity-0 translate-y-[6px] scale-95 group-hover:opacity-100 group-hover:translate-y-0 group-hover:scale-100 transition-all duration-300 text-xs font-medium tracking-wide whitespace-nowrap"
        style={{ color: labelColor }}
      >
        {label}
      </span>
    </div>
  );
};

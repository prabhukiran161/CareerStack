import { SKILLS_CONFIG, type OrbitConfig } from "../../../config/skills.config";

type OrbitRingProps = {
  config: OrbitConfig;
  isFront: boolean;
};

export const OrbitRing = ({ config, isFront }: OrbitRingProps) => {
  const { radius, color, glowOpacity, blur } = config;
  const ry = radius * SKILLS_CONFIG.layout.ellipseScaleY;

  // Since we render inside a relative container, we center it using 50%
  // A relative path string using A (elliptical arc)
  // M -startX 0 A rx ry 0 0 sweepFlag startX 0

  // Sweep flag: 1 for clockwise (bottom arc), 0 for counter-clockwise (top arc)
  const sweepFlag = isFront ? 1 : 0;

  const pathData = `M -${radius} 0 A ${radius} ${ry} 0 0 ${sweepFlag} ${radius} 0`;

  return (
    <div
      className="absolute left-0 top-0 pointer-events-none"
      style={{
        // translate(-50%, -50%) centers the SVG box over the origin.
        // yOffset is pure vertical translation for 3D stacking.
        transform: `translate(-50%, calc(-50% + ${config.yOffset}px))`,
      }}
    >
      <svg
        width={radius * 2 + 100} // Add padding for glow
        height={ry * 2 + 100}
        viewBox={`-${radius + 50} -${ry + 50} ${radius * 2 + 100} ${ry * 2 + 100}`}
        className="overflow-visible"
      >
        {/* Layer 3: Bloom */}
        <path
          d={pathData}
          fill="none"
          stroke={color}
          strokeWidth={20}
          strokeOpacity={glowOpacity}
          style={{ filter: "blur(20px)" }}
        />
        {/* Layer 2: Blur */}
        <path
          d={pathData}
          fill="none"
          stroke={color}
          strokeWidth={6}
          strokeOpacity={glowOpacity * 2}
          style={{ filter: "blur(6px)" }}
        />
        {/* Layer 1: Core */}
        <path
          d={pathData}
          fill="none"
          stroke={color}
          strokeWidth={2.5}
          strokeOpacity={0.8}
          style={{ filter: blur ? `blur(${blur}px)` : "none" }}
        />
      </svg>
    </div>
  );
};

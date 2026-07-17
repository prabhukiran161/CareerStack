import { useContext } from "react";
import { motion } from "framer-motion";
import { SKILLS_CONFIG, type OrbitConfig } from "../../../config/skills.config";
import { OrbitContext } from "./OrbitContext";

type OrbitRingProps = {
  config: OrbitConfig;
  isFront: boolean;
};

export const OrbitRing = ({ config, isFront }: OrbitRingProps) => {
  const { radius, color, glowOpacity, blur } = config;
  const ry = radius * SKILLS_CONFIG.layout.ellipseScaleY;
  
  const { introState } = useContext(OrbitContext);
  const { timeline, presets, master } = SKILLS_CONFIG.animation;

  // Since we render inside a relative container, we center it using 50%
  // A relative path string using A (elliptical arc)
  // M -startX 0 A rx ry 0 0 sweepFlag startX 0

  // Sweep flag: 1 for clockwise (bottom arc), 0 for counter-clockwise (top arc)
  const sweepFlag = isFront ? 1 : 0;

  const pathData = `M -${radius} 0 A ${radius} ${ry} 0 0 ${sweepFlag} ${radius} 0`;

  let delay = timeline.rings.topDelay;
  if (config.id === "middle") delay = timeline.rings.middleDelay;
  if (config.id === "bottom") delay = timeline.rings.bottomDelay;

  return (
    <motion.div
      className="absolute left-0 top-0 pointer-events-none"
      initial={presets.rings.initial}
      animate={
        introState !== "idle" || master.debug.disableRings
          ? { 
              scale: [0.9, 1.02, 1], 
              opacity: [0, 0.8, 1],
              filter: ["brightness(1)", "brightness(1.8)", "brightness(1)"]
            }
          : presets.rings.initial
      }
      transition={{
        duration: timeline.rings.duration * master.speedMultiplier,
        delay: delay * master.speedMultiplier,
        times: [0, 0.7, 1],
        ease: "easeInOut",
      }}
      style={{
        // translate(-50%, -50%) centers the SVG box over the origin.
        // yOffset is pure vertical translation for 3D stacking.
        x: "-50%",
        y: `calc(-50% + ${config.yOffset}px)`,
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
    </motion.div>
  );
};

import { motion, MotionValue } from "framer-motion";
import {
  type OrbitNodeConfig,
  SKILLS_CONFIG,
} from "../../../config/skills.config";

type OrbitNodeProps = {
  node: OrbitNodeConfig;
  orbitColor: string;
  x: MotionValue<number>;
  y: MotionValue<number>;
  opacity: MotionValue<number>;
  scale: MotionValue<number>;
  glowOpacity: MotionValue<number>;
  tilt: MotionValue<number>;
  zIndex: MotionValue<number>;
  onHoverStart: () => void;
  onHoverEnd: () => void;
};

export const OrbitNode = ({
  node,
  orbitColor,
  x,
  y,
  opacity,
  scale,
  glowOpacity,
  tilt,
  zIndex,
  onHoverStart,
  onHoverEnd,
}: OrbitNodeProps) => {
  const { Icon, label, iconColor, labelColor } = node;
  const { iconSize, iconSaturation, iconBrightness } = SKILLS_CONFIG.layout;

  return (
    <motion.div
      className="group absolute left-0 top-0 overflow-visible flex flex-col items-center justify-center pointer-events-auto"
      style={{
        x,
        y,
        opacity,
        scale,
        zIndex,
        // Centering offset applied via translate to keep x/y pure
        translateX: "-50%",
        translateY: "-50%",
      }}
      onHoverStart={onHoverStart}
      onHoverEnd={onHoverEnd}
    >
      {/* Soft Float Container */}
      <motion.div
        className="relative w-[60px] h-[60px] flex items-center justify-center"
        animate={{ y: ["-2px", "2px", "-2px"] }}
        transition={{
          duration: 4 + Math.random() * 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        {/* Glass Container (Rotates & Breathes, scales on hover) */}
        <motion.div
          className="absolute inset-0 rounded-full bg-[#080808]/90 border border-[rgba(255,255,255,0.07)] backdrop-blur-md shadow-[inset_0_1px_0_rgba(255,255,255,0.06),_0_8px_16px_rgba(0,0,0,0.4)]"
          style={{ rotate: tilt }}
          animate={{ scale: ["0.99", "1.01", "0.99"] }}
          transition={{
            duration: 3 + Math.random(),
            repeat: Infinity,
            ease: "easeInOut",
          }}
          whileHover={{ scale: 1.08 }}
        />

        {/* Glow (Stays Upright, increases on hover) */}
        <motion.div
          className="absolute inset-0 rounded-full blur-[10px]"
          style={{
            backgroundColor: orbitColor,
            opacity: glowOpacity,
          }}
          whileHover={{ opacity: 0.15 }}
        />

        {/* Logo (Stays Upright) */}
        <Icon
          size={iconSize}
          className="relative z-10 transition-transform duration-300 group-hover:scale-110"
          style={{
            color: iconColor,
            filter: `saturate(${iconSaturation}) brightness(${iconBrightness})`,
          }}
        />
      </motion.div>

      {/* Label */}
      <span
        className="absolute top-[70px] opacity-0 translate-y-[6px] scale-95 group-hover:opacity-100 group-hover:translate-y-0 group-hover:scale-100 transition-all duration-300 text-xs font-medium tracking-wide whitespace-nowrap"
        style={{ color: labelColor }}
      >
        {label}
      </span>
    </motion.div>
  );
};

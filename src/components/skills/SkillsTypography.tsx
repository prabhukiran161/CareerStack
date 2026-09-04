import { useContext } from "react";
import { motion } from "framer-motion";
import { getResponsive, SKILLS_CONFIG } from "../../config/skills.config";
import { OrbitContext } from "./orbit/OrbitContext";

export const SkillsTypography = () => {
  const { isMobile, introState } = useContext(OrbitContext);
  const typographyOffsetTop = getResponsive(SKILLS_CONFIG.layout.typographyOffsetTop, isMobile);
  const typographyFontSize = getResponsive(SKILLS_CONFIG.layout.typographyFontSize, isMobile);
  const { timeline, presets, master } = SKILLS_CONFIG.animation;
  const { typography } = presets;

  return (
    <motion.div
      className="absolute flex flex-col items-center justify-center text-center font-extenda leading-[0.75] pointer-events-none"
      initial={typography.initial}
      animate={
        introState !== "idle" || master.debug.disableTypography
          ? typography.animate
          : typography.initial
      }
      transition={{
        delay: timeline.typography.delay * master.speedMultiplier,
        duration: timeline.typography.duration * master.speedMultiplier,
        ease: typography.ease,
      }}
      style={{
        y: typographyOffsetTop,
      }}
    >
      <span
        className="block whitespace-nowrap text-transparent bg-clip-text bg-linear-to-b from-gray-200 via-gray-400 to-black/50"
        style={{ fontSize: typographyFontSize }}
      >
        TECH STACK
      </span>
    </motion.div>
  );
};

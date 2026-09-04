import { useContext } from "react";
import { motion } from "framer-motion";
import { getResponsive, SKILLS_CONFIG } from "../../config/skills.config";
import { OrbitContext } from "./orbit/OrbitContext";

export const SkillsPortrait = () => {
  const { isMobile, introState } = useContext(OrbitContext);
  const portraitWidth = getResponsive(SKILLS_CONFIG.layout.portraitWidth, isMobile);
  const portraitYOffset = getResponsive(SKILLS_CONFIG.layout.portraitYOffset, isMobile);
  const { timeline, presets, master } = SKILLS_CONFIG.animation;

  return (
    <div
      className="relative z-30 pointer-events-none"
      style={{
        width: `${portraitWidth}px`,
        transform: `translateY(${portraitYOffset}px)`,
      }}
    >
      <motion.img
        src="/images/prabhu_kiran_sweatshirt.png"
        alt="Prabhu Kiran"
        draggable={false}
        className="w-full h-auto object-contain relative z-0"
        initial={presets.portrait.initial}
        animate={
          introState !== "idle" || master.debug.disablePortrait
            ? { y: 0, scale: 1, opacity: 1 }
            : presets.portrait.initial
        }
        transition={{
          duration: timeline.portrait.duration * master.speedMultiplier,
          delay: timeline.portrait.delay * master.speedMultiplier,
          ease: presets.portrait.ease,
        }}
        style={{
          WebkitMaskImage: `
    linear-gradient(
      to bottom,
      black 92%,
      rgba(0,0,0,0.95) 95%,
      rgba(0,0,0,0.7) 98%,
      transparent 100%
    )
  `,
          maskImage: `
    linear-gradient(
      to bottom,
      black 92%,
      rgba(0,0,0,0.95) 95%,
      rgba(0,0,0,0.7) 98%,
      transparent 100%
    )
  `,
        }}
      />
    </div>
  );
};

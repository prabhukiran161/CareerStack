import { useContext } from "react";
import { motion } from "framer-motion";
import { SKILLS_CONFIG } from "../../config/skills.config";
import { OrbitContext } from "./orbit/OrbitContext";

export const SkillsPortrait = () => {
  const { desktop } = SKILLS_CONFIG.layout.portraitWidth;
  const { introState } = useContext(OrbitContext);
  const { timeline, presets, master } = SKILLS_CONFIG.animation;

  return (
    <div
      className="relative z-30 pointer-events-none"
      style={{
        width: `${desktop}px`,
        transform: "translateY(30px)",
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

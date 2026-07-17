import { useContext } from "react";
import { motion } from "framer-motion";
import { SKILLS_CONFIG } from "../../config/skills.config";
import { OrbitContext } from "./orbit/OrbitContext";

export const UnderTheHoodTagline = () => {
  const { introState } = useContext(OrbitContext);
  const { timeline, presets, master } = SKILLS_CONFIG.animation;

  return (
    <div className="absolute bottom-18 w-full text-center z-50 pointer-events-none flex items-center justify-center space-x-6">
      {/* Decorative Line Left */}
      <motion.div
        className="w-16 h-[1px] bg-gradient-to-r from-transparent to-white/30 relative origin-right"
        initial={{ scaleX: 0.7, x: -40, opacity: 0 }}
        animate={
          introState !== "idle" || master.debug.disableTagline
            ? { scaleX: 1, x: 0, opacity: 1 }
            : { scaleX: 0.7, x: -40, opacity: 0 }
        }
        transition={{ 
          duration: timeline.tagline.linesDuration * master.speedMultiplier, 
          delay: timeline.tagline.linesDelay * master.speedMultiplier 
        }}
      >
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[3px] h-[3px] bg-white/50 rounded-full" />
      </motion.div>

      <motion.h2
        className="text-xl md:text-3xl font-light tracking-[0.3em] text-gray-200"
        initial={{ clipPath: "inset(0 100% 0 0)", filter: "blur(8px)" }}
        animate={
          introState !== "idle" || master.debug.disableTagline
            ? { clipPath: "inset(0 0% 0 0)", filter: "blur(0px)" }
            : { clipPath: "inset(0 100% 0 0)", filter: "blur(8px)" }
        }
        transition={{
          duration: timeline.tagline.textDuration * master.speedMultiplier,
          delay: timeline.tagline.textDelay * master.speedMultiplier,
          ease: presets.tagline.textEase,
        }}
      >
        <span className="italic">UNDER THE </span>
        <span className="font-bold text-brand-red italic">HOOD</span>
      </motion.h2>

      {/* Decorative Line Right */}
      <motion.div
        className="w-16 h-[1px] bg-gradient-to-l from-transparent to-brand-red/40 relative origin-left"
        initial={{ scaleX: 0.7, x: 40, opacity: 0 }}
        animate={
          introState !== "idle" || master.debug.disableTagline
            ? { scaleX: 1, x: 0, opacity: 1 }
            : { scaleX: 0.7, x: 40, opacity: 0 }
        }
        transition={{ 
          duration: timeline.tagline.linesDuration * master.speedMultiplier, 
          delay: timeline.tagline.linesDelay * master.speedMultiplier 
        }}
      >
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[3px] h-[3px] bg-brand-red rounded-full shadow-[0_0_8px_rgba(229,9,20,0.8)]" />
      </motion.div>
    </div>
  );
};

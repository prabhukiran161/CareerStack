import { motion } from "framer-motion";
import type { SocialLink } from "../../types/social.types";
import { getResponsive, SOCIAL_CORE_CONFIG } from "../../config/social.config";

type SocialOrbitNodeProps = {
  link: SocialLink;
  index: number;
  isMobile: boolean;
};

export const SocialOrbitNode = ({ link, index, isMobile }: SocialOrbitNodeProps) => {
  const x = getResponsive(link.orbit.x, isMobile);
  const y = getResponsive(link.orbit.y, isMobile);
  const nodeSize = getResponsive(SOCIAL_CORE_CONFIG.nodeSize, isMobile);
  const iconSize = getResponsive(SOCIAL_CORE_CONFIG.iconSize, isMobile);

  return (
    <motion.div
      initial={{ x: 0, y: 0, scale: 0.7, opacity: 0 }}
      animate={{
        x,
        y,
        scale: 1,
        opacity: 1,
      }}
      exit={{ x: 0, y: 0, scale: 0.7, opacity: 0 }}
      transition={{
        delay: index * 0.045,
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-auto"
    >
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[180%] h-[180%] rounded-full pointer-events-none -z-10"
        style={{
          background: `
            radial-gradient(
              circle,
              rgba(0, 0, 0, 0.72) 0%,
              rgba(0, 0, 0, 0.48) 38%,
              rgba(0, 0, 0, 0.18) 65%,
              transparent 82%
            )
          `,
          filter: "blur(10px)",
        }}
      />
      <a
        href={link.href}
        target="_blank"
        rel="noopener noreferrer"
        onClick={(e) => e.stopPropagation()}
        className="
          relative rounded-full 
          bg-[#080808]/90 border border-white/20 backdrop-blur-md 
          flex items-center justify-center 
          text-[#C8CBD2] hover:text-brand-red hover:drop-shadow-[0_0_6px_rgba(229,9,20,0.45)]
          transition-colors duration-200
          shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]
        "
        style={{
          width: `${nodeSize}px`,
          height: `${nodeSize}px`,
        }}
        aria-label={link.name}
      >
        <link.Icon size={iconSize} />
      </a>
    </motion.div>
  );
};

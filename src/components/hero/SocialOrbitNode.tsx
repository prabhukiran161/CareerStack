import { motion } from "framer-motion";
import type { SocialLink } from "../../types/social.types";

type SocialOrbitNodeProps = {
  link: SocialLink;
  index: number;
};

export const SocialOrbitNode = ({ link, index }: SocialOrbitNodeProps) => {
  return (
    <motion.div
      initial={{ x: 0, y: 0, scale: 0.7, opacity: 0 }}
      animate={{
        x: link.orbit.x,
        y: link.orbit.y,
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
          relative w-11 h-11 rounded-full 
          bg-[#080808]/90 border border-white/20 backdrop-blur-md 
          flex items-center justify-center 
          text-[#C8CBD2] hover:text-brand-red hover:drop-shadow-[0_0_6px_rgba(229,9,20,0.45)]
          transition-colors duration-200
          shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]
        "
        aria-label={link.name}
      >
        <link.Icon size={18} />
      </a>
    </motion.div>
  );
};

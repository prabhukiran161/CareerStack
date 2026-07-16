import { motion } from "framer-motion";
import { HERO_TAGLINE } from "../../config/hero.config";

type HeroTaglineProps = {
  show: boolean;
  onComplete?: () => void;
  skipAnimation?: boolean;
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.055,
    },
  },
};

const letterVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};

export const HeroTagline = ({ show, onComplete, skipAnimation }: HeroTaglineProps) => {
  return (
    <motion.div
      className="
        absolute
        bottom-[8vh]
        z-20
        text-center
        text-xl md:text-5xl
        font-light
        text-gray-300
        tracking-wide
        whitespace-nowrap
      "
      variants={containerVariants}
      initial={skipAnimation ? false : "hidden"}
      animate={show ? "visible" : "hidden"}
      onAnimationComplete={(definition) => {
        if (definition === "visible") {
          onComplete?.();
        }
      }}
    >
      {HERO_TAGLINE.map((part, partIndex) => (
        <span key={partIndex} className={part.className}>
          {part.text.split("").map((char, charIndex) => (
            <motion.span
              key={`${partIndex}-${charIndex}`}
              variants={letterVariants}
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </span>
      ))}
    </motion.div>
  );
};

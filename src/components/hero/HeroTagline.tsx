import { useState } from "react";
import { motion } from "framer-motion";
import { HERO_TAGLINE } from "../../config/hero.config";
import { DiscussProjectSlider } from "./DiscussProjectSlider";

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

export const HeroTagline = ({
  show,
  onComplete,
  skipAnimation,
}: HeroTaglineProps) => {
  const [isTaglineTextFinished, setIsTaglineTextFinished] = useState(
    Boolean(skipAnimation),
  );

  return (
    <motion.div
      className="       
        flex flex-col items-center justify-center
        text-center
        w-full px-4
      "
      variants={containerVariants}
      initial={skipAnimation ? false : "hidden"}
      animate={show ? "visible" : "hidden"}
      onAnimationComplete={(definition) => {
        if (definition === "visible") {
          setIsTaglineTextFinished(true);
          onComplete?.();
        }
      }}
    >
      {/* Tagline Text */}
      <div className="text-2xl sm:text-2xl md:text-4xl font-light text-gray-200 tracking-wide whitespace-nowrap">
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
      </div>

      {/* Red Glowing Line Divider (Mobile Only, reveals ONLY after tagline text reveal finishes) */}
      <motion.div
        initial={false}
        animate={
          isTaglineTextFinished
            ? { opacity: 1, scaleX: 1 }
            : { opacity: 0, scaleX: 0 }
        }
        transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
        className="md:hidden relative w-72 sm:w-80 h-[1px] bg-gradient-to-r from-transparent via-red-600/80 to-transparent my-3.5 flex items-center justify-center shadow-[0_0_8px_rgba(254,53,72,0.8)] origin-center"
      >
        <span className="w-1.5 h-1.5 rounded-full bg-[#FE3548] shadow-[0_0_12px_#FE3548]" />
      </motion.div>

      {/* Discuss a Project Slider Micro-Interaction (Mobile Only, reveals ONLY after tagline text reveal finishes) */}
      <DiscussProjectSlider show={isTaglineTextFinished} />
    </motion.div>
  );
};

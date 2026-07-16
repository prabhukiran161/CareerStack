import { motion } from "framer-motion";

type HeroTypographyProps = {
  visible: boolean;
  skipAnimation?: boolean;
};

export const HeroTypography = ({ visible, skipAnimation }: HeroTypographyProps) => {
  return (
    <motion.div
      className="absolute inset-0 z-0 flex items-center justify-center overflow-hidden pointer-events-none"
      initial={skipAnimation ? false : {
        clipPath: "inset(100% 0 0 0)",
      }}
      animate={{
        clipPath: visible ? "inset(0% 0 0 0)" : "inset(100% 0 0 0)",
      }}
      transition={{
        duration: 0.65,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      <div
        className="
          flex flex-col
          items-center
          justify-center
          text-center
          font-extenda
          leading-[0.72]
        "
      >
        <span className="block h-full pb-6 text-[22vw] text-transparent bg-clip-text bg-linear-to-b from-gray-200 via-gray-400 to-black/0.5">
          FULL STACK
        </span>
        <span className="block h-full pb-10 text-[22vw]  text-transparent bg-clip-text bg-linear-to-b from-gray-200 via-gray-400 to-black/0.5 ">
          DEVELOPER
        </span>
      </div>
    </motion.div>
  );
};

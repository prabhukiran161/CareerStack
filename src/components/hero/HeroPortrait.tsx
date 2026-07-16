import { motion } from "framer-motion";
import { SocialCore } from "./SocialCore";

type HeroPortraitProps = {
  visible: boolean;
  socialCoreEnabled: boolean;
  skipAnimation?: boolean;
};

export const HeroPortrait = ({
  visible,
  socialCoreEnabled,
  skipAnimation,
}: HeroPortraitProps) => {
  return (
    <motion.div
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[55%] md:-translate-y-[45%] z-10 w-[100px] md:w-[350px] flex items-center justify-center pointer-events-none"
      initial={skipAnimation ? false : { scale: 0, opacity: 0 }}
      animate={visible ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
      transition={{
        scale: { duration: 0.65, ease: [0.16, 1, 0.3, 1] },
        opacity: { duration: 0.08 },
      }}
      style={{ willChange: "transform, opacity" }}
    >
      {/* Dark atmospheric halo */}
      <div
        className="absolute left-1/2 top-[52%] -translate-x-1/2 -translate-y-1/2 w-[125%] h-[105%] -z-10 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse 48% 58% at center, rgba(0, 0, 0, 0.62) 0%, rgba(0, 0, 0, 0.42) 30%, rgba(0, 0, 0, 0.20) 55%, rgba(0, 0, 0, 0.07) 72%, transparent 90%)`,
          filter: "blur(28px)",
        }}
      />
      <img
        src="/images/prabhu_kiran.png"
        alt="Developer Portrait"
        draggable={false}
        className="relative z-10 w-full h-auto object-contain"
        style={{
          WebkitMaskImage: `radial-gradient(ellipse 78% 92% at 50% 35%, black 0%, black 58%, rgba(0, 0, 0, 0.95) 68%, rgba(0, 0, 0, 0.72) 78%, rgba(0, 0, 0, 0.35) 88%, transparent 100%)`,
          maskImage: `radial-gradient(ellipse 78% 92% at 50% 35%, black 0%, black 58%, rgba(0, 0, 0, 0.95) 68%, rgba(0, 0, 0, 0.72) 78%, rgba(0, 0, 0, 0.35) 88%, transparent 100%)`,
        }}
      />

      {/* Social Core mounted inside portrait wrapper to use the exact chest coordinates */}
      <SocialCore enabled={socialCoreEnabled} skipAnimation={skipAnimation} />
    </motion.div>
  );
};

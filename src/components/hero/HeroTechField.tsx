import { motion } from "framer-motion";
import { TECH_ICONS } from "../../config/hero.config";

type HeroTechFieldProps = {
  converging: boolean;
};

export const HeroTechField = ({ converging }: HeroTechFieldProps) => {
  return (
    <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
      {TECH_ICONS.map((t, i) => (
        <motion.div
          key={i}
          className="absolute left-0 top-0"
          initial={{ x: `${t.x}vw`, y: `${t.y}vh`, scale: 0, opacity: 0 }}
          animate={
            converging
              ? { x: 0, y: 0, scale: 0, opacity: 0 }
              : { x: `${t.x}vw`, y: `${t.y}vh`, scale: 1, opacity: 1 }
          }
          transition={
            converging
              ? {
                  x: {
                    duration: t.duration,
                    delay: t.delay,
                    ease: [0.5, 0, 0.9, 1],
                  },
                  y: {
                    duration: t.duration * 0.92,
                    delay: t.delay,
                    ease: [0.65, 0, 1, 1],
                  },
                  scale: {
                    duration: t.duration,
                    delay: t.delay,
                    ease: [0.7, 0, 1, 1],
                  },
                  opacity: {
                    duration: t.duration,
                    delay: t.delay + t.duration * 0.55,
                  },
                }
              : { duration: 0.5, delay: i * 0.03, ease: "backOut" }
          }
        >
          {/* subtle float / 3D rotation */}
          <motion.div
            className="-translate-x-1/2 -translate-y-1/2"
            animate={
              converging
                ? { rotate: 220 }
                : { y: [0, -10, 0], rotate: [-6, 6, -6] }
            }
            transition={
              converging
                ? { duration: 1.1, ease: "easeIn" }
                : {
                    duration: 5 + (i % 4),
                    repeat: Infinity,
                    ease: "easeInOut",
                  }
            }
            style={{
              color: t.color,
              filter: `drop-shadow(0 0 14px ${t.color}aa) drop-shadow(0 0 4px ${t.color})`,
            }}
          >
            <t.Icon size={t.size} />
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
};

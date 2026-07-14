import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import type { IconType } from "react-icons";
import {
  SiReact,
  SiNodedotjs,
  SiTypescript,
  SiJavascript,
  SiFastapi,
  SiNestjs,
  SiRust,
  SiGo,
  SiPostgresql,
  SiMongodb,
  SiDocker,
  SiGit,
} from "react-icons/si";
import { BsMouse } from "react-icons/bs";

type Tech = {
  Icon: IconType;
  color: string;
  x: number; // vw offset from center (negative = left)
  y: number; // vh offset from center (negative = up)
  size: number;
  delay: number; // convergence delay (s)
  dur: number; // convergence duration (s)
};

const TECH_ICONS: Tech[] = [
  {
    Icon: SiReact,
    color: "#61DAFB",
    x: -38,
    y: -22,
    size: 52,
    delay: 0.05,
    dur: 1.25,
  },
  {
    Icon: SiTypescript,
    color: "#3178C6",
    x: -10,
    y: -30,
    size: 44,
    delay: 0.18,
    dur: 1.05,
  },
  {
    Icon: SiJavascript,
    color: "#F7DF1E",
    x: 16,
    y: -28,
    size: 40,
    delay: 0.0,
    dur: 1.35,
  },
  {
    Icon: SiFastapi,
    color: "#05998B",
    x: 34,
    y: -18,
    size: 46,
    delay: 0.24,
    dur: 1.1,
  },
  {
    Icon: SiNodedotjs,
    color: "#539E43",
    x: -30,
    y: 8,
    size: 50,
    delay: 0.12,
    dur: 1.2,
  },
  {
    Icon: SiGit,
    color: "#F05033",
    x: -16,
    y: -6,
    size: 38,
    delay: 0.3,
    dur: 0.95,
  },
  {
    Icon: SiDocker,
    color: "#2496ED",
    x: 40,
    y: 4,
    size: 48,
    delay: 0.08,
    dur: 1.3,
  },
  {
    Icon: SiNestjs,
    color: "#E0234E",
    x: 42,
    y: 24,
    size: 42,
    delay: 0.2,
    dur: 1.15,
  },
  {
    Icon: SiMongodb,
    color: "#47A248",
    x: -40,
    y: 22,
    size: 46,
    delay: 0.15,
    dur: 1.28,
  },
  {
    Icon: SiPostgresql,
    color: "#5A86B0",
    x: -22,
    y: 32,
    size: 44,
    delay: 0.27,
    dur: 1.0,
  },
  {
    Icon: SiGo,
    color: "#00ADD8",
    x: 6,
    y: 36,
    size: 40,
    delay: 0.1,
    dur: 1.22,
  },
  {
    Icon: SiRust,
    color: "#D19070",
    x: 26,
    y: 34,
    size: 42,
    delay: 0.22,
    dur: 1.08,
  },
];

type Phase =
  | "scatter"
  | "converge"
  | "developer"
  | "typo"
  | "tagline"
  | "scroll";

export const HeroSection = () => {
  const reduce = useReducedMotion();
  const [phase, setPhase] = useState<Phase>("scatter");
  const [flash, setFlash] = useState(false);

  useEffect(() => {
    if (reduce) {
      setPhase("scroll");
      return;
    }
    const timers = [
      setTimeout(() => setPhase("converge"), 1000),

      setTimeout(() => setFlash(true), 1850),

      setTimeout(() => setPhase("developer"), 1800),

      setTimeout(() => setFlash(false), 2200),

      setTimeout(() => setPhase("typo"), 2600),

      setTimeout(() => setPhase("tagline"), 3200),

      setTimeout(() => setPhase("scroll"), 3700),
    ];
    return () => timers.forEach(clearTimeout);
  }, [reduce]);

  const converging = phase !== "scatter";
  const showDev = ["developer", "typo", "tagline", "scroll"].includes(phase);
  const showTypo = ["typo", "tagline", "scroll"].includes(phase);
  const showTagline = ["tagline", "scroll"].includes(phase);
  const showScroll = phase === "scroll";

  return (
    <section className="relative w-full h-screen bg-black bg-grid-pattern overflow-hidden flex flex-col items-center justify-center">
      {/* Central convergence anchor for icons */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-[45%] z-20">
        {/* Tech icon particles */}
        {!showTypo &&
          TECH_ICONS.map((t, i) => (
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
                        duration: 0.9,
                        ease: [0.76, 0, 0.24, 1],
                      },
                      y: {
                        duration: 0.9,
                        ease: [0.76, 0, 0.24, 1],
                      },
                      scale: {
                        duration: 0.9,
                        ease: [0.76, 0, 0.24, 1],
                      },
                      opacity: {
                        duration: 0.15,
                        delay: 0.75,
                      },
                    }
                  : {
                      duration: 0.35,
                      delay: i * 0.025,
                      ease: "backOut",
                    }
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

        {/* Convergence energy point flash */}
        <motion.div
          className="absolute left-0 top-0 -translate-x-1/2 -translate-y-1/2 rounded-full"
          initial={{ scale: 0, opacity: 0 }}
          animate={
            flash
              ? { scale: [0, 1, 0.4], opacity: [0, 1, 0] }
              : { scale: 0, opacity: 0 }
          }
          transition={{ duration: 0.55, ease: "easeOut" }}
          style={{
            width: 40,
            height: 40,
            background:
              "radial-gradient(circle, #FE3548 0%, rgba(254,53,72,0.5) 40%, transparent 70%)",
            boxShadow: "0 0 40px 12px rgba(254,53,72,0.6)",
          }}
          aria-hidden
        />
      </div>

      {/* 1. Giant Typography (Behind Image) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[60%] md:-translate-y-1/2 w-full text-center z-0 overflow-hidden flex items-center justify-center">
        <motion.h1
          className="font-extenda w-full md:text-[18vw] text-transparent bg-clip-text bg-gradient-to-b from-gray-200 via-gray-400 to-black"
          style={{
            WebkitMaskImage:
              "linear-gradient(to bottom, rgba(0,0,0,1) 50%, rgba(0,0,0,0) 100%)",
          }}
          initial={{ clipPath: "inset(100% 0 0 0)", y: 80, opacity: 0 }}
          animate={
            showTypo
              ? { clipPath: "inset(0% 0 0 0)", y: 0, opacity: 1 }
              : { clipPath: "inset(100% 0 0 0)", y: 80, opacity: 0 }
          }
          transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
        >
          FULL STACK DEVELOPER
        </motion.h1>
      </div>

      {/* 2. Central Developer Image */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[55%] md:-translate-y-[45%] z-10 w-[300px] md:w-[450px] flex items-center justify-center pointer-events-none"
        initial={{ scale: 0, opacity: 0 }}
        animate={
          showDev
            ? { scale: [0, 0.15, 0.45, 0.8, 1.03, 1], opacity: 1 }
            : { scale: 0, opacity: 0 }
        }
        transition={{
          duration: 1.0,
          ease: [0.22, 1, 0.36, 1],
          times: [0, 0.15, 0.4, 0.7, 0.9, 1],
          opacity: { duration: 0.3 },
        }}
      >
        <img
          src="/images/kunal shah.png"
          alt="Developer Portrait"
          className="w-full h-auto object-contain drop-shadow-[0_0_30px_rgba(229,9,20,0.5)]"
        />
      </motion.div>

      {/* 4. Tagline */}
      <motion.div
        className="absolute bottom-28 z-20 text-xl md:text-2xl font-light text-gray-300 tracking-wide"
        initial={{ opacity: 0, y: 15, filter: "blur(5px)" }}
        animate={
          showTagline
            ? { opacity: 1, y: 0, filter: "blur(0px)" }
            : { opacity: 0, y: 15, filter: "blur(5px)" }
        }
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        Think <span className="text-brand-red font-semibold">like</span> an
        Engineer.
      </motion.div>

      {/* 5. Scroll Indicator */}
      <motion.div
        className="absolute bottom-10 flex flex-col items-center gap-2 text-white/50 z-20"
        initial={{ opacity: 0, y: 12 }}
        animate={showScroll ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <span className="text-xs uppercase tracking-widest">
          Scroll to Explore
        </span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <BsMouse size={24} />
        </motion.div>
      </motion.div>
    </section>
  );
};

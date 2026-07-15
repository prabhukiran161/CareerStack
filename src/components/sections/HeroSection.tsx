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
import { SocialCore } from "../hero/SocialCore";

type Tech = {
  Icon: IconType;
  color: string;
  x: number;
  y: number;
  size: number;
  delay: number;
  dur: number;
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

const TAGLINE = [
  { text: "Think ", className: "" },
  {
    text: "Like An ",
    className: "",
  },
  { text: "ENGINEER", className: "text-brand-red font-semibold italic" },
];

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

type TypingTaglineProps = {
  show: boolean;
  onComplete?: () => void;
};

const TypingTagline = ({ show, onComplete }: TypingTaglineProps) => {
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
      initial="hidden"
      animate={show ? "visible" : "hidden"}
      onAnimationComplete={(definition) => {
        if (definition === "visible") {
          onComplete?.();
        }
      }}
    >
      {TAGLINE.map((part, partIndex) => (
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

type HeroSectionProps = {
  onTaglineComplete?: () => void;
};

export const HeroSection = ({ onTaglineComplete }: HeroSectionProps) => {
  const reduce = useReducedMotion();
  const [phase, setPhase] = useState<Phase>("scatter");
  const [flash, setFlash] = useState(false);

  useEffect(() => {
    if (reduce) {
      setPhase("scroll");
      return;
    }
    const timers = [
      // 1. Icons stay visible for recognition
      setTimeout(() => setPhase("converge"), 1000),
      // 2. Convergence completes → energy impact
      setTimeout(() => setFlash(true), 2380),
      // 3. Energy burst completes
      setTimeout(() => setPhase("developer"), 2460),
      // 4. Portrait begins AFTER the burst
      setTimeout(() => setFlash(false), 3100),
      // 5. Typography wipe
      setTimeout(() => setPhase("typo"), 3100),
      // 6. Tagline typing
      setTimeout(() => setPhase("tagline"), 3800),
      // 7. Final state
      setTimeout(() => setPhase("scroll"), 4700),
    ];
    return () => timers.forEach(clearTimeout);
  }, [reduce]);

  const converging = phase !== "scatter";
  const showDev = ["developer", "typo", "tagline", "scroll"].includes(phase);
  const showTypo = ["typo", "tagline", "scroll"].includes(phase);
  const showTagline = ["tagline", "scroll"].includes(phase);

  return (
    <section className="relative w-full h-screen bg-black bg-grid-pattern overflow-hidden flex flex-col items-center justify-center">
      {/* Central convergence anchor for icons */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
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
                        duration: t.dur,
                        delay: t.delay,
                        ease: [0.5, 0, 0.9, 1],
                      },
                      y: {
                        duration: t.dur * 0.92,
                        delay: t.delay,
                        ease: [0.65, 0, 1, 1],
                      },
                      scale: {
                        duration: t.dur,
                        delay: t.delay,
                        ease: [0.7, 0, 1, 1],
                      },
                      opacity: {
                        duration: t.dur,
                        delay: t.delay + t.dur * 0.55,
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

        {/* Convergence energy point flash */}
        <motion.div
          className="absolute left-0 top-0 -translate-x-1/2 -translate-y-1/2 rounded-full"
          initial={{ scale: 0, opacity: 0 }}
          animate={
            flash
              ? { scale: [0, 1, 0.4], opacity: [0, 1, 0] }
              : { scale: 0, opacity: 0 }
          }
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
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

      {/* 1. Giant Typography (True Bottom-to-Top Mask Wipe) */}
      <motion.div
        className="absolute inset-0 z-0 flex items-center justify-center overflow-hidden pointer-events-none"
        initial={{
          clipPath: "inset(100% 0 0 0)",
        }}
        animate={{
          clipPath: showTypo ? "inset(0% 0 0 0)" : "inset(100% 0 0 0)",
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

      {/* 2. Central Developer Image (Smooth Cinematic Reveal) */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[55%] md:-translate-y-[45%] z-10 w-[100px] md:w-[350px] flex items-center justify-center pointer-events-none"
        initial={{ scale: 0, opacity: 0 }}
        animate={ showDev ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 } }
        transition={{ scale: { duration: 0.65, ease: [0.16, 1, 0.3, 1] }, opacity: { duration: 0.08 } }}
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
        <SocialCore enabled={phase === "scroll"} />
      </motion.div>

      {/* 4. Tagline */}
      <TypingTagline show={showTagline} onComplete={onTaglineComplete} />

      {/* 5. Scroll Indicator */}
    </section>
  );
};

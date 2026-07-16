import { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";
import type { HeroPhase } from "../types/hero.types";
import { HERO_TIMING } from "../config/hero.config";
import { useGlobalContext } from "../config/GlobalContext";

export const useHeroSequence = () => {
  const reduceMotion = useReducedMotion();
  const { hasHeroAnimationPlayed, setHasHeroAnimationPlayed } = useGlobalContext();

  const [phase, setPhase] = useState<HeroPhase>(
    reduceMotion || hasHeroAnimationPlayed ? "scroll" : "scatter"
  );
  const [flash, setFlash] = useState(false);

  useEffect(() => {
    if (reduceMotion || hasHeroAnimationPlayed) {
      return;
    }

    const timers = [
      setTimeout(() => setPhase("converge"), HERO_TIMING.CONVERGENCE_START),
      setTimeout(() => setFlash(true), HERO_TIMING.ENERGY_BURST_START),
      setTimeout(() => setPhase("developer"), HERO_TIMING.DEVELOPER_REVEAL),
      setTimeout(() => setFlash(false), HERO_TIMING.ENERGY_BURST_END),
      setTimeout(() => setPhase("typo"), HERO_TIMING.TYPOGRAPHY_REVEAL),
      setTimeout(() => setPhase("tagline"), HERO_TIMING.TAGLINE_START),
      setTimeout(() => {
        setPhase("scroll");
        setHasHeroAnimationPlayed(true);
      }, HERO_TIMING.FINAL_STATE),
    ];

    return () => {
      timers.forEach(clearTimeout);
    };
  }, [reduceMotion, hasHeroAnimationPlayed, setHasHeroAnimationPlayed]);

  return {
    phase,
    flash,
    converging: phase !== "scatter",
    showDeveloper: ["developer", "typo", "tagline", "scroll"].includes(phase),
    showTypography: ["typo", "tagline", "scroll"].includes(phase),
    showTagline: ["tagline", "scroll"].includes(phase),
    showSocialCore: phase === "scroll",
    hasHeroAnimationPlayed,
  };
};

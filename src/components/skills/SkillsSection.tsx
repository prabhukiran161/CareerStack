import { useState, useRef, useEffect } from "react";
import { useInView, useMotionValue, animate } from "framer-motion";
import { SkillsTypography } from "./SkillsTypography";
import { SkillsPortrait } from "./SkillsPortrait";
import { OrbitLayout } from "./orbit/OrbitLayout";
import { OrbitContext } from "./orbit/OrbitContext";
import { UnderTheHoodTagline } from "./UnderTheHoodTagline";
import { SKILLS_CONFIG } from "../../config/skills.config";

export const SkillsSection = () => {
  const [backNodesRef, setBackNodesRef] = useState<HTMLDivElement | null>(null);
  const [frontNodesRef, setFrontNodesRef] = useState<HTMLDivElement | null>(null);
  
  const containerRef = useRef<HTMLElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-10%" });
  const [introState, setIntroState] = useState<"idle" | "playing" | "completed">("idle");

  const iconIntroProgress = useMotionValue(0);
  const rotationMultiplier = useMotionValue(0);
  
  useEffect(() => {
    if (isInView && introState === "idle") {
      setIntroState("playing");
      const timer = setTimeout(() => setIntroState("completed"), 2500);
      return () => clearTimeout(timer);
    }
  }, [isInView, introState]);

  useEffect(() => {
    const { timeline, presets, master } = SKILLS_CONFIG.animation;

    if (introState !== "idle") {
      // 1. Animate global icon intro progress
      if (!master.debug.disableIcons) {
        const totalIconDuration = timeline.icons.delay + (15 * timeline.icons.stagger) + timeline.icons.duration;
        animate(iconIntroProgress, 1, {
          duration: totalIconDuration * master.speedMultiplier,
          ease: "linear", // Keep linear so we can map it precisely in useTransform
        });
      } else {
        iconIntroProgress.set(1);
      }

      // 2. Animate global rotation multiplier
      if (!master.debug.disableRotation) {
        animate(rotationMultiplier, 1, {
          duration: timeline.rotation.duration * master.speedMultiplier,
          delay: timeline.rotation.delay * master.speedMultiplier,
          ease: presets.rotation.ease,
        });
      } else {
        rotationMultiplier.set(1);
      }
    } else {
      iconIntroProgress.set(0);
      rotationMultiplier.set(0);
    }
  }, [introState, iconIntroProgress, rotationMultiplier]);

  return (
    <section
      id="skills"
      ref={containerRef}
      className="relative w-full h-screen bg-black bg-grid-pattern overflow-hidden flex items-center justify-center"
    >
      <OrbitContext.Provider value={{ introState, iconIntroProgress, rotationMultiplier, backNodesRef, frontNodesRef }}>
        {/* 1. TECH STACK Typography - Behind everything */}
        <div className="absolute inset-0 z-0 flex items-center justify-center">
          <SkillsTypography />
        </div>

        {/* The Unified Coordinate System Container */}
        <div className="relative w-full max-w-[800px] aspect-square pointer-events-none">
          {/* 
            Unified Orbit System Container 
            Everything shares the same mathematical origin (0,0)
            We use strict DOM order and z-index to manage the stacking context sandwich.
          */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-0 h-0 flex items-center justify-center pointer-events-none">
          
          {/* Z-20: Back Rings */}
          <div className="absolute z-20">
            <OrbitLayout layer="back-rings" />
          </div>
          
          {/* Z-25: Back Nodes Portal Target */}
          <div className="absolute z-25 pointer-events-auto" ref={setBackNodesRef} />
          
          {/* Z-30: Portrait (Isolated so glows don't wash it out) */}
          <div className="absolute z-30 isolate pointer-events-auto">
            <SkillsPortrait />
          </div>

          {/* Z-40: Front Rings */}
          <div className="absolute z-40">
            <OrbitLayout layer="front-rings" />
          </div>

          {/* Z-50: Front Nodes Portal Target */}
          <div className="absolute z-50 pointer-events-auto" ref={setFrontNodesRef} />

          {/* Motion Engine: Computes positions and portals nodes into the targets above */}
          <OrbitLayout layer="nodes" />

        </div>
        </div>

        {/* 6. Tagline */}
        <div className="absolute inset-0 z-60 pointer-events-none">
          <UnderTheHoodTagline />
        </div>
      </OrbitContext.Provider>
    </section>
  );
};

import { SkillsTypography } from "./SkillsTypography";
import { SkillsPortrait } from "./SkillsPortrait";
import { OrbitLayout } from "./orbit/OrbitLayout";
import { UnderTheHoodTagline } from "./UnderTheHoodTagline";

export const SkillsSection = () => {
  return (
    <section
      id="skills"
      className="relative w-full h-screen bg-black bg-grid-pattern overflow-hidden flex items-center justify-center"
    >
      {/* 1. TECH STACK Typography - Behind everything */}
      <div className="absolute inset-0 z-10 flex items-center justify-center">
        <SkillsTypography />
      </div>

      {/* The Unified Coordinate System Container */}
      <div className="relative w-full max-w-[800px] aspect-square pointer-events-none">
        
        {/* The center of this relative container is the mathematical origin (0,0) */}
        
        {/* 2. Back Half Orbit Rings */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
          <OrbitLayout layer="back-rings" />
        </div>

        {/* 3. Back Half Nodes */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-25 pointer-events-auto">
          <OrbitLayout layer="back-nodes" />
        </div>

        {/* 4. Portrait */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-30">
          <SkillsPortrait />
        </div>

        {/* 5. Front Half Orbit Rings */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-40">
          <OrbitLayout layer="front-rings" />
        </div>

        {/* 6. Front Half Nodes */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50 pointer-events-auto">
          <OrbitLayout layer="front-nodes" />
        </div>
      </div>

      {/* 6. Tagline */}
      <div className="absolute inset-0 z-60 pointer-events-none">
        <UnderTheHoodTagline />
      </div>
    </section>
  );
};

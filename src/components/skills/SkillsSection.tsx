import { useState } from "react";
import { SkillsTypography } from "./SkillsTypography";
import { SkillsPortrait } from "./SkillsPortrait";
import { OrbitLayout } from "./orbit/OrbitLayout";
import { OrbitContext } from "./orbit/OrbitContext";
import { UnderTheHoodTagline } from "./UnderTheHoodTagline";

export const SkillsSection = () => {
  const [backNodesRef, setBackNodesRef] = useState<HTMLDivElement | null>(null);
  const [frontNodesRef, setFrontNodesRef] = useState<HTMLDivElement | null>(null);

  return (
    <section
      id="skills"
      className="relative w-full h-screen bg-black bg-grid-pattern overflow-hidden flex items-center justify-center"
    >
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
        <OrbitContext.Provider value={{ backNodesRef, frontNodesRef }}>
          <OrbitLayout layer="nodes" />
        </OrbitContext.Provider>

      </div>
      </div>

      {/* 6. Tagline */}
      <div className="absolute inset-0 z-60 pointer-events-none">
        <UnderTheHoodTagline />
      </div>
    </section>
  );
};

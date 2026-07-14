import { useState } from "react";
import { Navbar } from "../components/layout/Navbar";
import { HeroSection } from "../components/sections/HeroSection";

export const Landing = () => {
  const [showDeveloperName, setShowDeveloperName] = useState(false);

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar showDeveloperName={showDeveloperName} />
      <main>
        <HeroSection onTaglineComplete={() => setShowDeveloperName(true)} />
        {/* Future sections will go here */}
        {/* <ProjectsSection /> */}
        {/* <SkillsSection /> */}
        {/* <BlogsSection /> */}
      </main>
    </div>
  );
};

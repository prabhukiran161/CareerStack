import { Navbar } from "../components/layout/Navbar";
import { HeroSection } from "../components/sections/HeroSection";

export const Landing = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <main>
        <HeroSection />
        {/* Future sections will go here */}
        {/* <ProjectsSection /> */}
        {/* <SkillsSection /> */}
        {/* <BlogsSection /> */}
      </main>
    </div>
  );
};

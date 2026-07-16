import { createLazyFileRoute } from "@tanstack/react-router";
import { HeroSection } from "../components/sections/HeroSection";
import { useGlobalContext } from "../config/GlobalContext";

export const Route = createLazyFileRoute("/")({
  component: Index,
});

// eslint-disable-next-line react-refresh/only-export-components
function Index() {
  const { setShowDeveloperName } = useGlobalContext();

  return (
    <div className="min-h-screen bg-black text-white">
      <HeroSection onTaglineComplete={() => setShowDeveloperName(true)} />
    </div>
  );
}

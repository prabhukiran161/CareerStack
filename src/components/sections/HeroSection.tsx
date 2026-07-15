import { useHeroSequence } from "../../hooks/useHeroSequence";
import { HeroTechField } from "../hero/HeroTechField";
import { HeroEnergyBurst } from "../hero/HeroEnergyBurst";
import { HeroTypography } from "../hero/HeroTypography";
import { HeroPortrait } from "../hero/HeroPortrait";
import { HeroTagline } from "../hero/HeroTagline";

type HeroSectionProps = {
  onTaglineComplete?: () => void;
};

export const HeroSection = ({ onTaglineComplete }: HeroSectionProps) => {
  const {
    flash,
    converging,
    showDeveloper,
    showTypography,
    showTagline,
    showSocialCore,
  } = useHeroSequence();

  return (
    <section
      id="home"
      className="relative w-full h-screen bg-black bg-grid-pattern overflow-hidden flex flex-col items-center justify-center"
    >
      <HeroTechField converging={converging} />
      <HeroEnergyBurst active={flash} />
      <HeroTypography visible={showTypography} />
      <HeroPortrait
        visible={showDeveloper}
        socialCoreEnabled={showSocialCore}
      />
      <HeroTagline show={showTagline} onComplete={onTaglineComplete} />
    </section>
  );
};

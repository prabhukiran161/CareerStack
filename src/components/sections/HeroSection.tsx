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
    hasHeroAnimationPlayed,
  } = useHeroSequence();

  return (
    <section
      id="home"
      className="relative w-full h-screen h-[100dvh] pt-16 pb-24 md:pt-20 md:pb-12 bg-black bg-grid-pattern overflow-hidden flex flex-col items-center justify-center gap-3"
    >
      {/* Section 1: Typography + Portrait (Centered Box with bottom margin) */}
      <div className="relative w-full pt-10 h-[280px] sm:h-[280px] md:h-[540px] flex flex-col items-center justify-center">
        <HeroTechField converging={converging} />
        <HeroEnergyBurst active={flash} />
        <HeroTypography
          visible={showTypography}
          skipAnimation={hasHeroAnimationPlayed}
        />
        <HeroPortrait
          visible={showDeveloper}
          socialCoreEnabled={showSocialCore}
          skipAnimation={hasHeroAnimationPlayed}
        />
      </div>

      {/* Section 2: Tagline (Stacked directly below Section 1 naturally) */}
      <div>
        <HeroTagline
          show={showTagline}
          onComplete={onTaglineComplete}
          skipAnimation={hasHeroAnimationPlayed}
        />
      </div>
    </section>
  );
};

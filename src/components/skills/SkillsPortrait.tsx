import { SKILLS_CONFIG } from "../../config/skills.config";

export const SkillsPortrait = () => {
  const { desktop } = SKILLS_CONFIG.layout.portraitWidth;

  return (
    <div
      className="relative z-30 pointer-events-none"
      style={{
        width: `${desktop}px`,
        transform: "translateY(30px)",
      }}
    >
      <img
        src="/images/prabhu_kiran_sweatshirt.png"
        alt="Prabhu Kiran"
        draggable={false}
        className="w-full h-auto object-contain relative z-0"
        style={{
          WebkitMaskImage: `
    linear-gradient(
      to bottom,
      black 92%,
      rgba(0,0,0,0.95) 95%,
      rgba(0,0,0,0.7) 98%,
      transparent 100%
    )
  `,
          maskImage: `
    linear-gradient(
      to bottom,
      black 92%,
      rgba(0,0,0,0.95) 95%,
      rgba(0,0,0,0.7) 98%,
      transparent 100%
    )
  `,
        }}
      />
    </div>
  );
};

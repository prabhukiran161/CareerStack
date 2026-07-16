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
        src="/images/prabhu_kiran.png"
        alt="Prabhu Kiran"
        draggable={false}
        className="w-full h-auto object-contain"
        // style={{
        //   WebkitMaskImage: `linear-gradient(to bottom, black 60%, transparent 100%)`,
        //   maskImage: `linear-gradient(to bottom, black 60%, transparent 100%)`,
        // }}
      />
    </div>
  );
};

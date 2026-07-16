import { SKILLS_CONFIG } from "../../config/skills.config";

export const SkillsTypography = () => {
  const { typographyOffsetTop } = SKILLS_CONFIG.layout;

  return (
    <div
      className="absolute flex flex-col items-center justify-center text-center font-extenda leading-[0.75] pointer-events-none opacity-15"
      style={{
        transform: `translateY(${typographyOffsetTop}px)`,
      }}
    >
      <span className="block text-[24vw] text-transparent bg-clip-text bg-linear-to-b from-gray-200 via-gray-400 to-black/50">
        TECH STACK
      </span>
    </div>
  );
};

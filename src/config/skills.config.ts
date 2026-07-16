import {
  SiReact,
  SiNodedotjs,
  SiPostgresql,
  SiTypescript,
  SiNextdotjs,
  SiDocker,
  SiTailwindcss,
  SiMongodb,
  SiFramer,
  SiReactquery, // Used for TanStack
  SiGit,
  SiGithub,
  SiPostman,
} from "react-icons/si";
import { TbBrandOpenai, TbBrandVscode } from "react-icons/tb";
import type { IconType } from "react-icons";

export type OrbitConfig = {
  id: string;
  radius: number;
  yOffset: number;
  rotationOffset: number;
  color: string;
  speed: number;
  direction: number;
  blur: number;
  glowOpacity: number;
  nodeGlowOpacity: number;
  iconScale: number;
};

export type OrbitNodeConfig = {
  id: string;
  orbitId: string;
  angle: number;
  xOffset: number;
  yOffset: number;
  Icon: IconType;
  label: string;
  iconColor: string;
  labelColor: string;
};

export const SKILLS_CONFIG = {
  layout: {
    portraitWidth: {
      desktop: 440,
      tablet: 340,
      mobile: 260,
    },
    ellipseScaleY: 0.12,
    verticalGap: 32,
    typographyOffsetTop: -135,
    iconSize: 26,
    iconSaturation: 0.8,
    iconBrightness: 0.95,
    iconMinOpacity: 1, // Muted, premium fade
    iconMaxOpacity: 1,
    iconMinScale: 0.95,
    iconMaxScale: 1,
    glassTiltStrength: 4, // Subtle rotation limit
    orbitVisualOffset: -8, // Anchor the icon visually to the SVG line
    portraitOcclusionThreshold: -0.15, // Clip icons early
  },
  orbits: [
    {
      id: "top",
      radius: 160,
      yOffset: -130,
      rotationOffset: 0,
      color: "#FE3548", // Brand Red
      speed: 12,
      direction: -1,
      blur: 0.3,
      glowOpacity: 0.3,
      nodeGlowOpacity: 0.18,
      iconScale: 0.93,
    },
    {
      id: "middle",
      radius: 290, // Increased radius for breathing room
      yOffset: 35,
      rotationOffset: 30, // Organic stagger
      color: "#FFFFFF", // White
      speed: 18,
      direction: 1,
      blur: 0,
      glowOpacity: 0.2,
      nodeGlowOpacity: 0.06,
      iconScale: 0.95,
    },
    {
      id: "bottom",
      radius: 360,
      yOffset: 180,
      rotationOffset: 20, // Organic stagger
      color: "#FE3548", // Brand Red
      speed: 24,
      direction: -1,
      blur: 0.3,
      glowOpacity: 0.3,
      nodeGlowOpacity: 0.18,
      iconScale: 1,
    },
  ] as OrbitConfig[],
  nodes: [
    // Top Orbit (3 items)
    { id: "react", orbitId: "top", angle: 0, xOffset: 0, yOffset: 0, Icon: SiReact, label: "React", iconColor: "#7FC8E8", labelColor: "#D1D5DB" },
    { id: "typescript", orbitId: "top", angle: 120, xOffset: 0, yOffset: 0, Icon: SiTypescript, label: "TypeScript", iconColor: "#5C8FBF", labelColor: "#D1D5DB" },
    { id: "node", orbitId: "top", angle: 240, xOffset: 0, yOffset: 0, Icon: SiNodedotjs, label: "Node.js", iconColor: "#5F8F63", labelColor: "#D1D5DB" },

    // Middle Orbit (6 items) - Using art-directed staggered distribution
    { id: "nextjs", orbitId: "middle", angle: 20, xOffset: 0, yOffset: 0, Icon: SiNextdotjs, label: "Next.js", iconColor: "#E2E2E2", labelColor: "#D1D5DB" },
    { id: "tailwind", orbitId: "middle", angle: 75, xOffset: 0, yOffset: 0, Icon: SiTailwindcss, label: "Tailwind", iconColor: "#6FBFD8", labelColor: "#D1D5DB" },
    { id: "postgres", orbitId: "middle", angle: 135, xOffset: 0, yOffset: 0, Icon: SiPostgresql, label: "PostgreSQL", iconColor: "#305d8f", labelColor: "#D1D5DB" },
    { id: "mongodb", orbitId: "middle", angle: 210, xOffset: 0, yOffset: 0, Icon: SiMongodb, label: "MongoDB", iconColor: "#5F8E61", labelColor: "#D1D5DB" },
    { id: "framer", orbitId: "middle", angle: 275, xOffset: 0, yOffset: 0, Icon: SiFramer, label: "Framer Motion", iconColor: "#6D88D9", labelColor: "#D1D5DB" },
    { id: "tanstack", orbitId: "middle", angle: 330, xOffset: 0, yOffset: 0, Icon: SiReactquery, label: "TanStack", iconColor: "#D66A74", labelColor: "#D1D5DB" },

    // Bottom Orbit (6 items)
    { id: "git", orbitId: "bottom", angle: 10, xOffset: 0, yOffset: 0, Icon: SiGit, label: "Git", iconColor: "#C56A55", labelColor: "#D1D5DB" },
    { id: "github", orbitId: "bottom", angle: 65, xOffset: 0, yOffset: 0, Icon: SiGithub, label: "GitHub", iconColor: "#CFCFCF", labelColor: "#D1D5DB" },
    { id: "docker", orbitId: "bottom", angle: 125, xOffset: 0, yOffset: 0, Icon: SiDocker, label: "Docker", iconColor: "#5EA7DA", labelColor: "#D1D5DB" },
    { id: "postman", orbitId: "bottom", angle: 190, xOffset: 0, yOffset: 0, Icon: SiPostman, label: "Postman", iconColor: "#D98865", labelColor: "#D1D5DB" },
    { id: "openai", orbitId: "bottom", angle: 255, xOffset: 0, yOffset: 0, Icon: TbBrandOpenai, label: "OpenAI", iconColor: "#D4D4D4", labelColor: "#D1D5DB" },
    { id: "vscode", orbitId: "bottom", angle: 310, xOffset: 0, yOffset: 0, Icon: TbBrandVscode, label: "VS Code", iconColor: "#6B9BC7", labelColor: "#D1D5DB" },
  ] as OrbitNodeConfig[],
};

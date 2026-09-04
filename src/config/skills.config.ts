import {
  SiReact,
  SiNodedotjs,
  // SiPostgresql,
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
import { BiLogoPostgresql } from "react-icons/bi";
import { TbBrandOpenai, TbBrandVscode } from "react-icons/tb";
import type { IconType } from "react-icons";

export type ResponsiveProp<T> = T | { desktop: T; mobile: T };

export const getResponsive = <T>(val: ResponsiveProp<T>, isMobile: boolean): T => {
  if (typeof val === "object" && val !== null && ("desktop" in val || "mobile" in val)) {
    const responsiveVal = val as { desktop: T; mobile: T };
    return isMobile ? responsiveVal.mobile : responsiveVal.desktop;
  }
  return val as T;
};

export type OrbitConfig = {
  id: string;
  radius: ResponsiveProp<number>;
  yOffset: ResponsiveProp<number>;
  rotationOffset: number;
  color: string;
  speed: number;
  direction: number;
  blur: number;
  glowOpacity: number;
  nodeGlowOpacity: number;
  iconScale: ResponsiveProp<number>;
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
      desktop: 410,
      tablet: 340,
      mobile: 300,
    },
    portraitYOffset: {
      desktop: 30,
      mobile: 15,
    },
    ellipseScaleY: {
      desktop: 0.12,
      mobile: 0.14,
    },
    verticalGap: 32,
    typographyOffsetTop: {
      desktop: -135,
      mobile: -160,
    },
    typographyFontSize: {
      desktop: "24vw",
      mobile: "40vw",
    },
    iconSize: {
      desktop: 26,
      mobile: 20,
    },
    nodeContainerSize: {
      desktop: 60,
      mobile: 48,
    },
    iconSaturation: 0.8,
    iconBrightness: 0.95,
    iconMinOpacity: 1, // Muted, premium fade
    iconMaxOpacity: 1,
    iconMinScale: 0.95,
    iconMaxScale: 1,
    glassTiltStrength: 4, // Subtle rotation limit
    orbitVisualOffset: {
      desktop: -8,
      mobile: -4,
    },
    portraitOcclusionThreshold: -0.15, // Clip icons early
  },
  tagline: {
    bottomOffset: {
      desktop: "bottom-18",
      mobile: "bottom-40",
    },
  },
  animation: {
    master: {
      speedMultiplier: 1,
      debug: {
        disablePortrait: false,
        disableRings: false,
        disableTypography: false,
        disableIcons: false,
        disableRotation: false,
        disableTagline: false,
      },
    },
    timeline: {
      portrait: {
        delay: 0.0,
        duration: 0.65,
      },
      rings: {
        topDelay: 0.3,
        middleDelay: 0.4,
        bottomDelay: 0.5,
        duration: 0.45,
      },
      typography: {
        delay: 0.52,
        duration: 1.5,
      },
      icons: {
        delay: 0.9,
        duration: 0.5,
        stagger: 0.05,
      },
      rotation: {
        delay: 1.25,
        duration: 1.0,
      },
      tagline: {
        linesDelay: 1.55,
        linesDuration: 0.1,
        textDelay: 1.7,
        textDuration: 0.9,
      },
    },
    presets: {
      portrait: {
        ease: [0.16, 1, 0.3, 1] as const,
        initial: { y: 40, scale: 0.96, opacity: 0 },
      },
      rings: {
        initial: { scale: 9, opacity: 0 },
      },
      typography: {
        ease: [0.16, 1, 0.3, 1] as const,
        initial: {
          scale: 1,
          opacity: 0,
          letterSpacing: "14px",
          filter: "blur(8px)",
        },
        animate: {
          scale: 1,
          opacity: 0.5,
          letterSpacing: "0px",
          filter: "blur(0px)",
        },
      },
      icons: {
        initial: { scale: 0, opacity: 0 },
      },
      rotation: {
        ease: "easeInOut" as const,
      },
      tagline: {
        textEase: "easeOut" as const,
      },
    },
  },
  orbits: [
    {
      id: "top",
      radius: { desktop: 160, mobile: 90 },
      yOffset: { desktop: -130, mobile: -100 },
      rotationOffset: 0,
      color: "#FE3548", // Brand Red
      speed: 16,
      direction: -1,
      blur: 0.3,
      glowOpacity: 0.4,
      nodeGlowOpacity: 0.18,
      iconScale: { desktop: 0.93, mobile: 0.85 },
    },
    {
      id: "middle",
      radius: { desktop: 290, mobile: 140 }, // Increased radius for breathing room
      yOffset: { desktop: 30, mobile: 20 },
      rotationOffset: 30, // Organic stagger
      color: "#FFFFFF", // White
      speed: 24,
      direction: 1,
      blur: 0,
      glowOpacity: 0.3,
      nodeGlowOpacity: 0.06,
      iconScale: { desktop: 0.95, mobile: 0.85 },
    },
    {
      id: "bottom",
      radius: { desktop: 360, mobile: 180 },
      yOffset: { desktop: 190, mobile: 140 },
      rotationOffset: 20, // Organic stagger
      color: "#FE3548", // Brand Red
      speed: 32,
      direction: -1,
      blur: 0.3,
      glowOpacity: 0.4,
      nodeGlowOpacity: 0.18,
      iconScale: { desktop: 1, mobile: 0.88 },
    },
  ] as OrbitConfig[],
  nodes: [
    // Top Orbit (3 items)
    {
      id: "react",
      orbitId: "top",
      angle: 0,
      xOffset: 0,
      yOffset: 0,
      Icon: SiReact,
      label: "React",
      iconColor: "#7FC8E8",
      labelColor: "#D1D5DB",
    },
    {
      id: "typescript",
      orbitId: "top",
      angle: 120,
      xOffset: 0,
      yOffset: 0,
      Icon: SiTypescript,
      label: "TypeScript",
      iconColor: "#5C8FBF",
      labelColor: "#D1D5DB",
    },
    {
      id: "node",
      orbitId: "top",
      angle: 240,
      xOffset: 0,
      yOffset: 0,
      Icon: SiNodedotjs,
      label: "Node.js",
      iconColor: "#5F8F63",
      labelColor: "#D1D5DB",
    },

    // Middle Orbit (6 items) - Using art-directed staggered distribution
    {
      id: "nextjs",
      orbitId: "middle",
      angle: 20,
      xOffset: 0,
      yOffset: 0,
      Icon: SiNextdotjs,
      label: "Next.js",
      iconColor: "#E2E2E2",
      labelColor: "#D1D5DB",
    },
    {
      id: "tailwind",
      orbitId: "middle",
      angle: 75,
      xOffset: 0,
      yOffset: 0,
      Icon: SiTailwindcss,
      label: "Tailwind",
      iconColor: "#6FBFD8",
      labelColor: "#D1D5DB",
    },
    {
      id: "postgres",
      orbitId: "middle",
      angle: 135,
      xOffset: 0,
      yOffset: 0,
      Icon: BiLogoPostgresql,
      label: "PostgreSQL",
      iconColor: "#305d8f",
      labelColor: "#D1D5DB",
    },
    {
      id: "mongodb",
      orbitId: "middle",
      angle: 210,
      xOffset: 0,
      yOffset: 0,
      Icon: SiMongodb,
      label: "MongoDB",
      iconColor: "#5F8E61",
      labelColor: "#D1D5DB",
    },
    {
      id: "framer",
      orbitId: "middle",
      angle: 275,
      xOffset: 0,
      yOffset: 0,
      Icon: SiFramer,
      label: "Framer Motion",
      iconColor: "#6D88D9",
      labelColor: "#D1D5DB",
    },
    {
      id: "tanstack",
      orbitId: "middle",
      angle: 330,
      xOffset: 0,
      yOffset: 0,
      Icon: SiReactquery,
      label: "TanStack",
      iconColor: "#D66A74",
      labelColor: "#D1D5DB",
    },

    // Bottom Orbit (6 items)
    {
      id: "git",
      orbitId: "bottom",
      angle: 10,
      xOffset: 0,
      yOffset: 0,
      Icon: SiGit,
      label: "Git",
      iconColor: "#C56A55",
      labelColor: "#D1D5DB",
    },
    {
      id: "github",
      orbitId: "bottom",
      angle: 65,
      xOffset: 0,
      yOffset: 0,
      Icon: SiGithub,
      label: "GitHub",
      iconColor: "#CFCFCF",
      labelColor: "#D1D5DB",
    },
    {
      id: "docker",
      orbitId: "bottom",
      angle: 125,
      xOffset: 0,
      yOffset: 0,
      Icon: SiDocker,
      label: "Docker",
      iconColor: "#5EA7DA",
      labelColor: "#D1D5DB",
    },
    {
      id: "postman",
      orbitId: "bottom",
      angle: 190,
      xOffset: 0,
      yOffset: 0,
      Icon: SiPostman,
      label: "Postman",
      iconColor: "#D98865",
      labelColor: "#D1D5DB",
    },
    {
      id: "openai",
      orbitId: "bottom",
      angle: 255,
      xOffset: 0,
      yOffset: 0,
      Icon: TbBrandOpenai,
      label: "OpenAI",
      iconColor: "#D4D4D4",
      labelColor: "#D1D5DB",
    },
    {
      id: "vscode",
      orbitId: "bottom",
      angle: 310,
      xOffset: 0,
      yOffset: 0,
      Icon: TbBrandVscode,
      label: "VS Code",
      iconColor: "#6B9BC7",
      labelColor: "#D1D5DB",
    },
  ] as OrbitNodeConfig[],
};

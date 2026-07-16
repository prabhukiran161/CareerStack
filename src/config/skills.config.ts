import {
  SiReact,
  SiNodedotjs,
  SiPostgresql,
  SiTypescript,
  SiNextdotjs,
  SiDocker,
} from "react-icons/si";
import type { IconType } from "react-icons";

export type OrbitConfig = {
  id: string;
  radius: number;
  yOffset: number; // Vertical offset for 3D stacking illusion
  color: string;
  speed: number;
  direction: number;
  blur: number;
  glowOpacity: number;
  iconScale: number;
};

export type OrbitNodeConfig = {
  id: string;
  orbitId: string;
  angle: number; // Initial angle in degrees (0 = right, 90 = bottom)
  Icon: IconType;
  label: string;
};

export const SKILLS_CONFIG = {
  layout: {
    portraitWidth: {
      desktop: 440,
      tablet: 340,
      mobile: 260,
    },
    ellipseScaleY: 0.12, // True Awwwards-style faked perspective
    verticalGap: 32,
    typographyOffsetTop: -135, // Push typography up to frame face
  },
  orbits: [
    {
      id: "top",
      radius: 160,
      yOffset: -130, // Shift up
      color: "#FE3548", // Brand Red
      speed: 16, // Harmonic 16s
      direction: 1, // CW
      blur: 0.3,
      glowOpacity: 0.3,
      iconScale: 0.92,
    },
    {
      id: "middle",
      radius: 260,
      yOffset: 35, // Center
      color: "#FFFFFF", // White
      speed: 24, // Harmonic 24s
      direction: -1, // CCW
      blur: 0,
      glowOpacity: 0.2,
      iconScale: 1.0,
    },
    {
      id: "bottom",
      radius: 360,
      yOffset: 180, // Shift down
      color: "#FE3548", // Brand Red
      speed: 32, // Harmonic 32s
      direction: 1, // CW
      blur: 0.3,
      glowOpacity: 0.3,
      iconScale: 0.94,
    },
  ] as OrbitConfig[],
  nodes: [
    // Top Orbit
    {
      id: "node",
      orbitId: "top",
      angle: 180,
      Icon: SiNodedotjs,
      label: "Node.js",
    },
    { id: "react", orbitId: "top", angle: 0, Icon: SiReact, label: "React" },

    // Middle Orbit
    {
      id: "postgres",
      orbitId: "middle",
      angle: 195,
      Icon: SiPostgresql,
      label: "PostgreSQL",
    },
    {
      id: "typescript",
      orbitId: "middle",
      angle: -15,
      Icon: SiTypescript,
      label: "TypeScript",
    },

    // Bottom Orbit
    {
      id: "nextjs",
      orbitId: "bottom",
      angle: 210,
      Icon: SiNextdotjs,
      label: "Next.js",
    },
    {
      id: "docker",
      orbitId: "bottom",
      angle: -30,
      Icon: SiDocker,
      label: "Docker",
    },
  ] as OrbitNodeConfig[],
};

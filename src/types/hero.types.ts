import type { IconType } from "react-icons";

export type HeroPhase =
  | "scatter"
  | "converge"
  | "developer"
  | "typo"
  | "tagline"
  | "scroll";

export type TechIcon = {
  Icon: IconType;
  color: string;
  x: number;
  y: number;
  size: number;
  delay: number;
  duration: number;
};

export type HeroTaglinePart = {
  text: string;
  className?: string;
};

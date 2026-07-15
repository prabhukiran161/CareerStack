import type { IconType } from "react-icons";

export type OrbitPosition = {
  x: number;
  y: number;
};

export type SocialLink = {
  name: string;
  Icon: IconType;
  href: string;
  orbit: OrbitPosition;
};

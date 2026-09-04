import type { IconType } from "react-icons";

export type ResponsiveProp<T> = T | { desktop: T; mobile: T };

export type OrbitPosition = {
  x: ResponsiveProp<number>;
  y: ResponsiveProp<number>;
};

export type SocialLink = {
  name: string;
  Icon: IconType;
  href: string;
  orbit: OrbitPosition;
};

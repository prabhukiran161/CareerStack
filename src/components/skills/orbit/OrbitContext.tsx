import { createContext } from "react";
import { MotionValue } from "framer-motion";

type OrbitContextType = {
  introState: "idle" | "playing" | "completed";
  iconIntroProgress: MotionValue<number> | null;
  rotationMultiplier: MotionValue<number> | null;
  backNodesRef: HTMLDivElement | null;
  frontNodesRef: HTMLDivElement | null;
};

export const OrbitContext = createContext<OrbitContextType>({
  introState: "idle",
  iconIntroProgress: null,
  rotationMultiplier: null,
  backNodesRef: null,
  frontNodesRef: null,
});

import { createContext } from "react";

type OrbitContextType = {
  backNodesRef: HTMLDivElement | null;
  frontNodesRef: HTMLDivElement | null;
};

export const OrbitContext = createContext<OrbitContextType>({
  backNodesRef: null,
  frontNodesRef: null,
});

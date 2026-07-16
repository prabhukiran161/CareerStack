import { SKILLS_CONFIG } from "../../../config/skills.config";
import { OrbitRing } from "./OrbitRing";
import { OrbitNode } from "./OrbitNode";

type OrbitLayoutProps = {
  layer: "back" | "front" | "icons";
};

export const OrbitLayout = ({ layer }: OrbitLayoutProps) => {
  return (
    <>
      {layer === "back" || layer === "front" ? (
        SKILLS_CONFIG.orbits.map((orbit) => (
          <OrbitRing key={orbit.id} config={orbit} isFront={layer === "front"} />
        ))
      ) : layer === "icons" ? (
        SKILLS_CONFIG.nodes.map((node) => (
          <OrbitNode key={node.id} config={node} />
        ))
      ) : null}
    </>
  );
};

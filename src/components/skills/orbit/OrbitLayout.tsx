import { SKILLS_CONFIG } from "../../../config/skills.config";
import { OrbitRing } from "./OrbitRing";
import { OrbitMotionController } from "./OrbitMotionController";

type OrbitLayoutProps = {
  layer: "back-rings" | "front-rings" | "nodes";
};

export const OrbitLayout = ({ layer }: OrbitLayoutProps) => {
  return (
    <>
      {layer === "back-rings" || layer === "front-rings" ? (
        SKILLS_CONFIG.orbits.map((orbit) => (
          <OrbitRing key={orbit.id} config={orbit} isFront={layer === "front-rings"} />
        ))
      ) : layer === "nodes" ? (
        // The controller handles animation and passes it to the nodes
        SKILLS_CONFIG.orbits.map((orbit, orbitIndex) => {
          const orbitNodes = SKILLS_CONFIG.nodes.filter(
            (node) => node.orbitId === orbit.id
          );
          
          // Calculate how many nodes came before this orbit to stagger them globally
          let baseIndex = 0;
          for (let i = 0; i < orbitIndex; i++) {
            baseIndex += SKILLS_CONFIG.nodes.filter(
              (n) => n.orbitId === SKILLS_CONFIG.orbits[i].id
            ).length;
          }

          return (
            <OrbitMotionController 
              key={orbit.id} 
              orbit={orbit} 
              nodes={orbitNodes} 
              baseIndex={baseIndex}
            />
          );
        })
      ) : null}
    </>
  );
};

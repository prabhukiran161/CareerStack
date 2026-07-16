import { SKILLS_CONFIG } from "../../../config/skills.config";
import { OrbitRing } from "./OrbitRing";
import { OrbitNode } from "./OrbitNode";

type OrbitLayoutProps = {
  layer: "back-rings" | "front-rings" | "back-nodes" | "front-nodes";
};

export const OrbitLayout = ({ layer }: OrbitLayoutProps) => {
  return (
    <>
      {layer === "back-rings" || layer === "front-rings" ? (
        SKILLS_CONFIG.orbits.map((orbit) => (
          <OrbitRing key={orbit.id} config={orbit} isFront={layer === "front-rings"} />
        ))
      ) : layer === "back-nodes" || layer === "front-nodes" ? (
        // Render nodes per orbit to calculate angle dynamically
        SKILLS_CONFIG.orbits.map((orbit) => {
          const orbitNodes = SKILLS_CONFIG.nodes.filter(
            (node) => node.orbitId === orbit.id
          );
          
          return orbitNodes.map((node) => {
            const finalAngle = node.angle + orbit.rotationOffset;
            
            // Check if node is in the back hemisphere relative to occlusion threshold
            const isBehindPortrait = node.behindPortrait;

            // Only render if it matches the current requested layer
            if (layer === "back-nodes" && !isBehindPortrait) return null;
            if (layer === "front-nodes" && isBehindPortrait) return null;

            return <OrbitNode key={node.id} config={node} angle={finalAngle} />;
          });
        })
      ) : null}
    </>
  );
};

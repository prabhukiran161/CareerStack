import { useState } from "react";
import { useAnimationFrame, useMotionValue } from "framer-motion";
import { type OrbitNodeConfig, type OrbitConfig } from "../../../config/skills.config";
import { AnimatedOrbitNode } from "./AnimatedOrbitNode";

type OrbitMotionControllerProps = {
  orbit: OrbitConfig;
  nodes: OrbitNodeConfig[];
};

export const OrbitMotionController = ({ orbit, nodes }: OrbitMotionControllerProps) => {
  const rotation = useMotionValue(0);
  const [isPaused, setIsPaused] = useState(false);

  useAnimationFrame((_, delta) => {
    if (isPaused) return;
    // speed is in seconds for 1 full 360 rotation (e.g. 16s)
    const degreesPerMs = 360 / (orbit.speed * 1000);
    const step = degreesPerMs * delta * orbit.direction;
    rotation.set(rotation.get() + step);
  });

  return (
    <>
      {nodes.map((node) => (
        <AnimatedOrbitNode 
          key={node.id} 
          node={node} 
          orbit={orbit} 
          orbitRotation={rotation} 
          onHoverStart={() => setIsPaused(true)}
          onHoverEnd={() => setIsPaused(false)}
        />
      ))}
    </>
  );
};

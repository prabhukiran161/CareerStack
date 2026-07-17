import { useState, useContext } from "react";
import { useAnimationFrame, useMotionValue } from "framer-motion";
import { type OrbitNodeConfig, type OrbitConfig } from "../../../config/skills.config";
import { AnimatedOrbitNode } from "./AnimatedOrbitNode";
import { OrbitContext } from "./OrbitContext";

type OrbitMotionControllerProps = {
  orbit: OrbitConfig;
  nodes: OrbitNodeConfig[];
  baseIndex: number;
};

export const OrbitMotionController = ({ orbit, nodes, baseIndex }: OrbitMotionControllerProps) => {
  const rotation = useMotionValue(0);
  const [isPaused, setIsPaused] = useState(false);
  const { rotationMultiplier } = useContext(OrbitContext);

  useAnimationFrame((_, delta) => {
    if (isPaused || !rotationMultiplier) return;
    // speed is in seconds for 1 full 360 rotation (e.g. 16s)
    const degreesPerMs = 360 / (orbit.speed * 1000);
    const step = degreesPerMs * delta * orbit.direction * rotationMultiplier.get();
    rotation.set(rotation.get() + step);
  });

  return (
    <>
      {nodes.map((node, index) => (
        <AnimatedOrbitNode 
          key={node.id} 
          node={node} 
          orbit={orbit} 
          orbitRotation={rotation}
          globalIndex={baseIndex + index}
          onHoverStart={() => setIsPaused(true)}
          onHoverEnd={() => setIsPaused(false)}
        />
      ))}
    </>
  );
};

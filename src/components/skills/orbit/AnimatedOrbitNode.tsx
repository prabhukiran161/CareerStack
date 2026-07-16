import { useState, useContext } from "react";
import { createPortal } from "react-dom";
import { useTransform, useMotionValueEvent, MotionValue } from "framer-motion";
import {
  type OrbitNodeConfig,
  type OrbitConfig,
  SKILLS_CONFIG,
} from "../../../config/skills.config";
import { OrbitNode } from "./OrbitNode";
import { OrbitContext } from "./OrbitContext";

type AnimatedOrbitNodeProps = {
  node: OrbitNodeConfig;
  orbit: OrbitConfig;
  orbitRotation: MotionValue<number>;
  onHoverStart: () => void;
  onHoverEnd: () => void;
};

export const AnimatedOrbitNode = ({
  node,
  orbit,
  orbitRotation,
  onHoverStart,
  onHoverEnd,
}: AnimatedOrbitNodeProps) => {
  const { backNodesRef, frontNodesRef } = useContext(OrbitContext);
  const [isBehind, setIsBehind] = useState(false);

  const { orbitVisualOffset, portraitOcclusionThreshold, glassTiltStrength } =
    SKILLS_CONFIG.layout;
  const ry = orbit.radius * SKILLS_CONFIG.layout.ellipseScaleY;

  // 1. Current Angle
  const currentAngle = useTransform(
    orbitRotation,
    (rot) => node.angle + orbit.rotationOffset + rot,
  );

  // Track threshold crossing to avoid unnecessary renders
  useMotionValueEvent(currentAngle, "change", (latest) => {
    const radians = (latest * Math.PI) / 180;
    const progress = -Math.sin(radians);
    const newIsBehind = progress < portraitOcclusionThreshold;
    if (newIsBehind !== isBehind) {
      setIsBehind(newIsBehind);
    }
  });

  // 2. Position
  const x = useTransform(currentAngle, (angle) => {
    const radians = (angle * Math.PI) / 180;
    return Math.cos(radians) * orbit.radius + node.xOffset;
  });

  const y = useTransform(currentAngle, (angle) => {
    const radians = (angle * Math.PI) / 180;
    return (
      Math.sin(radians) * ry + orbit.yOffset + orbitVisualOffset + node.yOffset
    );
  });

  // 3. Dynamic Depth
  const depth = useTransform(currentAngle, (angle) => {
    const radians = (angle * Math.PI) / 180;
    const progress = -Math.sin(radians); // -1 to 1
    return (progress + 1) / 2; // 0 to 1
  });

  // 4. Atmosphere
  const opacity = useTransform(
    depth,
    (d) =>
      SKILLS_CONFIG.layout.iconMinOpacity +
      d *
        (SKILLS_CONFIG.layout.iconMaxOpacity -
          SKILLS_CONFIG.layout.iconMinOpacity),
  );
  const scale = useTransform(
    depth,
    (d) =>
      orbit.iconScale *
      (SKILLS_CONFIG.layout.iconMinScale +
        d *
          (SKILLS_CONFIG.layout.iconMaxScale -
            SKILLS_CONFIG.layout.iconMinScale)),
  );

  // Exaggerated glow for depth (1.0 in front, 0.6 in back)
  const glowOpacity = useTransform(
    depth,
    (d) => orbit.nodeGlowOpacity * (0.6 + 0.4 * d),
  );

  // 5. Tilt and Z-Index
  const tilt = useTransform(currentAngle, (angle) => {
    const radians = (angle * Math.PI) / 180;
    return Math.cos(radians) * glassTiltStrength;
  });

  // zIndex is kept for fine-grained sorting within the portal if needed
  const zIndex = useTransform(currentAngle, (angle) => {
    const radians = (angle * Math.PI) / 180;
    const progress = -Math.sin(radians);
    return (progress < portraitOcclusionThreshold ? 25 : 50) as number;
  });

  const targetPortal = isBehind ? backNodesRef : frontNodesRef;
  if (!targetPortal) return null;

  return createPortal(
    <OrbitNode
      node={node}
      orbitColor={orbit.color}
      x={x}
      y={y}
      opacity={opacity}
      scale={scale}
      glowOpacity={glowOpacity}
      tilt={tilt}
      zIndex={zIndex}
      onHoverStart={onHoverStart}
      onHoverEnd={onHoverEnd}
    />,
    targetPortal,
  );
};

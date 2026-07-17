import { useState, useContext } from "react";
import { createPortal } from "react-dom";
import { useTransform, useMotionValueEvent, MotionValue, useMotionValue } from "framer-motion";
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
  globalIndex: number;
  onHoverStart: () => void;
  onHoverEnd: () => void;
};

export const AnimatedOrbitNode = ({
  node,
  orbit,
  orbitRotation,
  globalIndex,
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

  // 4. Atmosphere (Depth based)
  const depthOpacity = useTransform(
    depth,
    (d) =>
      SKILLS_CONFIG.layout.iconMinOpacity +
      d * (SKILLS_CONFIG.layout.iconMaxOpacity - SKILLS_CONFIG.layout.iconMinOpacity),
  );
  const depthScale = useTransform(
    depth,
    (d) =>
      orbit.iconScale *
      (SKILLS_CONFIG.layout.iconMinScale +
        d * (SKILLS_CONFIG.layout.iconMaxScale - SKILLS_CONFIG.layout.iconMinScale)),
  );

  // Exaggerated glow for depth (1.0 in front, 0.6 in back)
  const glowOpacity = useTransform(
    depth,
    (d) => orbit.nodeGlowOpacity * (0.6 + 0.4 * d),
  );

  // 4b. Shared Intro Animation
  const { iconIntroProgress } = useContext(OrbitContext);
  const { timeline, master } = SKILLS_CONFIG.animation;
  const fallbackProgress = useMotionValue(1);
  const progressToUse = iconIntroProgress || fallbackProgress;
  
  // Calculate this icon's specific time slice on the global 0->1 clock
  const totalIconDuration = timeline.icons.delay + (15 * timeline.icons.stagger) + timeline.icons.duration;
  
  const iconStartTime = timeline.icons.delay + (globalIndex * timeline.icons.stagger);
  const iconEndTime = iconStartTime + timeline.icons.duration;
  
  const startProgress = iconStartTime / totalIconDuration;
  const endProgress = iconEndTime / totalIconDuration;

  const entranceScale = useTransform(
    progressToUse, 
    [startProgress, startProgress + (endProgress - startProgress) * 0.7, endProgress], 
    [0, 1.08, 1]
  );
  
  const entranceOpacity = useTransform(
    progressToUse, 
    [startProgress, endProgress], 
    [0, 1]
  );

  // Mathematically combine Depth + Entrance
  // Note: If intro is disabled in debug, we just output depth values
  const finalScale = useTransform(
    [depthScale, entranceScale],
    ([d, e]) => master.debug.disableIcons ? (d as number) : (d as number) * (e as number)
  ) as MotionValue<number>;
  
  const finalOpacity = useTransform(
    [depthOpacity, entranceOpacity],
    ([d, e]) => master.debug.disableIcons ? (d as number) : (d as number) * (e as number)
  ) as MotionValue<number>;

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
      globalIndex={globalIndex}
      x={x}
      y={y}
      opacity={finalOpacity}
      scale={finalScale}
      glowOpacity={glowOpacity}
      tilt={tilt}
      zIndex={zIndex}
      onHoverStart={onHoverStart}
      onHoverEnd={onHoverEnd}
    />,
    targetPortal,
  );
};

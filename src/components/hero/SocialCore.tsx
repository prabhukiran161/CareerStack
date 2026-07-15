import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SOCIAL_LINKS } from "../../config/social.config";
import { useSocialRotation } from "../../hooks/useSocialRotation";
import { SocialCoreButton } from "./SocialCoreButton";
import { SocialOrbitNode } from "./SocialOrbitNode";

export const SocialCore = ({ enabled }: { enabled: boolean }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isCoreHovered, setIsCoreHovered] = useState(false);

  const isPaused = isOpen || isCoreHovered || !enabled;

  const activeIndex = useSocialRotation({
    itemCount: SOCIAL_LINKS.length,
    paused: isPaused,
    interval: 2400,
  });

  const ActiveIcon = SOCIAL_LINKS[activeIndex].Icon;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={enabled ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.6, delay: 0.4 }} // Delay to let navbar reveal finish
      className="absolute left-1/2 top-1/2 translate-x-[-70%] -translate-y-1/2 mt-10 z-30 pointer-events-auto"
    >
      <div className="relative">
        <SocialCoreButton
          isOpen={isOpen}
          isHovered={isCoreHovered}
          ActiveIcon={ActiveIcon}
          activeIndex={activeIndex}
          onOpenChange={setIsOpen}
          onHoverChange={setIsCoreHovered}
        />

        {/* Orbit Nodes */}
        <div className="absolute inset-0 pointer-events-none z-10">
          <AnimatePresence>
            {isOpen &&
              SOCIAL_LINKS.map((link, index) => (
                <SocialOrbitNode key={link.name} link={link} index={index} />
              ))}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
};

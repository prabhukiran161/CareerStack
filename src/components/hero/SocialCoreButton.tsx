import { motion, AnimatePresence } from "framer-motion";
import { HiX } from "react-icons/hi";
import type { IconType } from "react-icons";

type SocialCoreButtonProps = {
  isOpen: boolean;
  isHovered: boolean;
  ActiveIcon: IconType;
  activeIndex: number;
  onOpenChange: React.Dispatch<React.SetStateAction<boolean>>;
  onHoverChange: React.Dispatch<React.SetStateAction<boolean>>;
};

export const SocialCoreButton = ({
  isOpen,
  isHovered,
  ActiveIcon,
  activeIndex,
  onOpenChange,
  onHoverChange,
}: SocialCoreButtonProps) => {
  return (
    <motion.button
      type="button"
      aria-label={isOpen ? "Close social links" : "Open social links"}
      aria-expanded={isOpen}
      onMouseEnter={() => onHoverChange(true)}
      onMouseLeave={() => onHoverChange(false)}
      onClick={() => onOpenChange((current) => !current)}
      animate={{
        background: isOpen
          ? "linear-gradient(to bottom, #161616 0%, #080808 100%)"
          : "linear-gradient(to bottom, #D9DCE2 0%, #8C929D 100%)",
        color: isOpen ? "#D9DCE2" : "#080808",
        scale: isHovered && !isOpen ? 1.04 : 1,
      }}
      transition={{ duration: 0.3 }}
      className="relative w-9.5 h-9.5 rounded-full flex items-center justify-center border border-white/20 shadow-[inset_0_1px_0_rgba(255,255,255,0.45),inset_0_-1px_0_rgba(0,0,0,0.18),0_8px_24px_rgba(0,0,0,0.45)] z-20"
    >
      <AnimatePresence mode="wait">
        {isOpen ? (
          <motion.div
            key="close"
            initial={{ opacity: 0, rotate: -90 }}
            animate={{ opacity: 1, rotate: 0 }}
            exit={{ opacity: 0, rotate: 90 }}
            transition={{ duration: 0.2 }}
          >
            <HiX size={18} />
          </motion.div>
        ) : (
          <motion.div
            key={activeIndex}
            initial={{ x: 6, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -6, opacity: 0 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
          >
            <ActiveIcon size={18} />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.button>
  );
};

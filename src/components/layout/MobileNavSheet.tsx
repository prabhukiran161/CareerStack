import { motion, AnimatePresence } from "framer-motion";
import { HiX } from "react-icons/hi";
import { Link } from "@tanstack/react-router";
import { NAV_LINKS } from "../../config/navigation.config";

type MobileNavSheetProps = {
  isOpen: boolean;
  onClose: () => void;
};

export const MobileNavSheet = ({ isOpen, onClose }: MobileNavSheetProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60]"
            onClick={onClose}
          />
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed bottom-0 left-0 right-0 bg-[#121212] border-t border-white/10 rounded-t-3xl z-[70] p-6 pb-12 flex flex-col items-center space-y-6"
          >
            <div className="w-12 h-1.5 bg-white/20 rounded-full mb-4" />

            {NAV_LINKS.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                onClick={onClose}
                activeProps={{ className: "text-brand-red" }}
                inactiveProps={{ className: "text-white" }}
                className="text-2xl font-semibold w-full text-center py-2 active:bg-white/5 rounded-xl transition-colors"
              >
                {link.name}
              </Link>
            ))}

            <a
              href="#contact"
              onClick={onClose}
              className="w-full text-center mt-6 px-6 py-4 text-lg font-semibold text-white border border-brand-red rounded-xl active:scale-95 transition-transform shadow-[0_0_20px_rgba(229,9,20,0.4)] bg-brand-red/10"
            >
              [Discuss a Project]
            </a>

            <button
              onClick={onClose}
              className="absolute top-6 right-6 p-2 bg-white/10 rounded-full text-white/70 hover:text-white"
            >
              <HiX className="w-6 h-6" />
            </button>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

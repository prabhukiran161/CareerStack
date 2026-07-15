import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiX, HiOutlineMail } from "react-icons/hi";
import {
  FaGithub,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
  FaWhatsapp,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const SOCIAL_LINKS = [
  {
    name: "YouTube",
    Icon: FaYoutube,
    href: "https://youtube.com/",
    orbit: { x: -90, y: -90 },
  },
  {
    name: "Instagram",
    Icon: FaInstagram,
    href: "https://instagram.com/",
    orbit: { x: -90, y: -160 },
  },
  {
    name: "X",
    Icon: FaXTwitter,
    href: "https://x.com/",
    orbit: { x: -60, y: -220 },
  },
  {
    name: "GitHub",
    Icon: FaGithub,
    href: "https://github.com/",
    orbit: { x: 10, y: -250 },
  },
  {
    name: "LinkedIn",
    Icon: FaLinkedinIn,
    href: "https://linkedin.com/",
    orbit: { x: 80, y: -220 },
  },
  {
    name: "Email",
    Icon: HiOutlineMail,
    href: "mailto:hello@example.com",
    orbit: { x: 110, y: -160 },
  },
  {
    name: "WhatsApp",
    Icon: FaWhatsapp,
    href: "https://whatsapp.com/",
    orbit: { x: 110, y: -95 },
  },
];

export const SocialCore = ({ enabled }: { enabled: boolean }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const isPaused = isOpen || isHovered || !enabled;

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % SOCIAL_LINKS.length);
    }, 2400);

    return () => clearInterval(interval);
  }, [isPaused]);

  const ActiveIcon = SOCIAL_LINKS[activeIndex].Icon;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={enabled ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.6, delay: 0.4 }} // Delay to let navbar reveal finish
      className="absolute left-1/2 top-1/2 translate-x-[-70%] -translate-y-1/2 mt-10 z-30 pointer-events-auto"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative">
        {/* Core Button */}
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
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

        {/* Orbit Nodes */}
        <div className="absolute inset-0 pointer-events-none z-10">
          <AnimatePresence>
            {isOpen &&
              SOCIAL_LINKS.map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ x: 0, y: 0, scale: 0.7, opacity: 0 }}
                  animate={{
                    x: link.orbit.x,
                    y: link.orbit.y,
                    scale: 1,
                    opacity: 1,
                  }}
                  exit={{ x: 0, y: 0, scale: 0.7, opacity: 0 }}
                  transition={{
                    delay: index * 0.045,
                    duration: 0.5,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-auto"
                >
                  <div
                    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[180%] h-[180%] rounded-full pointer-events-none -z-10"
                    style={{
                      background: `
                        radial-gradient(
                          circle,
                          rgba(0, 0, 0, 0.72) 0%,
                          rgba(0, 0, 0, 0.48) 38%,
                          rgba(0, 0, 0, 0.18) 65%,
                          transparent 82%
                        )
                      `,
                      filter: "blur(10px)",
                    }}
                  />
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="
                      relative w-11 h-11 rounded-full 
                      bg-[#080808]/90 border border-white/20 backdrop-blur-md 
                      flex items-center justify-center 
                      text-[#C8CBD2] hover:text-brand-red hover:drop-shadow-[0_0_6px_rgba(229,9,20,0.45)]
                      transition-colors duration-200
                      shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]
                    "
                    aria-label={link.name}
                  >
                    <link.Icon size={18} />
                  </a>
                </motion.div>
              ))}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
};

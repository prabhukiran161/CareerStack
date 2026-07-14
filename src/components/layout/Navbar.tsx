import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenu, HiX } from "react-icons/hi";
import { cn } from "../../utils/cn";

const NAV_LINKS = [
  { name: "Home", href: "#home" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "About", href: "#about" },
  { name: "Blogs", href: "#blogs" },
];

type NavbarProps = {
  showDeveloperName?: boolean;
};

export const Navbar = ({ showDeveloperName = false }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 w-[90%] max-w-[90vw] z-50 flex items-center justify-between py-5 px-6 backdrop-blur- bg-[#121212]/70 border border-white/10 rounded-2xl shadow-2xl">
      {/* Logo with the red // effect */}
      <a
        href="/"
        className="flex items-center text-lg font-geomini font-medium tracking-widest text-white hover:text-white/80 transition-colors"
      >
        <span>DEV</span>

        <span className="relative z-20 text-brand-red font-extrabold px-2 [text-shadow:0px_0px_20px_#FE3548]">
          //
        </span>

        <span className="relative z-10 overflow-hidden whitespace-nowrap">
          <motion.span
            initial={false}
            animate={{
              x: showDeveloperName ? 0 : "-100%",
            }}
            transition={{
              duration: 0.75,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="block text-brand-red font-bold italic tracking-[0.12em] whitespace-nowrap"
          >
            PRABHU
          </motion.span>
        </span>
      </a>

      {/* Desktop Links */}
      <div className="hidden md:flex space-x-8">
        {NAV_LINKS.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className={cn(
              "text-lg transition-colors relative py-1",
              link.name === "Home"
                ? "text-brand-red" // Active state
                : "text-gray-300 hover:text-white",
            )}
          >
            {link.name}
            {/* Glowing red underline for the active link */}
            {link.name === "Home" && (
              <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-brand-red shadow-[0_0_8px_rgba(229,9,20,0.8)] rounded-full" />
            )}
          </a>
        ))}
      </div>

      {/* Desktop CTA matching the reference */}
      <div className="hidden md:block text-center">
        <a
          href="#contact"
          className="px-6 py-3 text-sm font-medium text-white border border-brand-red rounded-full hover:bg-brand-red/10 transition-all shadow-[0_0_15px_rgba(229,9,20,0.3)] hover:shadow-[0_0_25px_rgba(229,9,20,0.5)] bg-black/20"
        >
          Discuss a Project
        </a>
      </div>

      {/* Mobile Hamburger */}
      <button
        className="md:hidden text-white p-2"
        onClick={() => setIsOpen(true)}
      >
        <HiMenu className="w-6 h-6" />
      </button>

      {/* Apple-Style Mobile Bottom Sheet */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60]"
              onClick={() => setIsOpen(false)}
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
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "text-2xl font-semibold w-full text-center py-2 active:bg-white/5 rounded-xl transition-colors",
                    link.name === "Home" ? "text-brand-red" : "text-white",
                  )}
                >
                  {link.name}
                </a>
              ))}

              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="w-full text-center mt-6 px-6 py-4 text-lg font-semibold text-white border border-brand-red rounded-xl active:scale-95 transition-transform shadow-[0_0_20px_rgba(229,9,20,0.4)] bg-brand-red/10"
              >
                [Discuss a Project]
              </a>

              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-6 right-6 p-2 bg-white/10 rounded-full text-white/70 hover:text-white"
              >
                <HiX className="w-6 h-6" />
              </button>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};

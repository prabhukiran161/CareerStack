import { useState } from "react";
import { HiMenu } from "react-icons/hi";
import { cn } from "../../utils/cn";
import { NAV_LINKS } from "../../config/navigation.config";
import { NavbarLogo } from "./NavbarLogo";
import { MobileNavSheet } from "./MobileNavSheet";

type NavbarProps = {
  showDeveloperName?: boolean;
};

export const Navbar = ({ showDeveloperName = false }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 w-[90%] max-w-[90vw] z-50 flex items-center justify-between py-5 px-6 backdrop-blur- bg-[#121212]/70 border border-white/10 rounded-2xl shadow-2xl">
      <NavbarLogo showDeveloperName={showDeveloperName} />

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
      <MobileNavSheet isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </nav>
  );
};

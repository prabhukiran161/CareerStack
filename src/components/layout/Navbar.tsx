import { useState, useEffect } from "react";
import { Link } from "@tanstack/react-router";
import { NAV_LINKS } from "../../config/navigation.config";
import { NavbarLogo } from "./NavbarLogo";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-4 md:top-6 left-1/2 -translate-x-1/2 z-50 w-[92%] max-w-sm md:max-w-[90vw] flex items-center justify-center pointer-events-auto">
      <nav
        className={`relative w-full transition-all duration-300 ${
          isScrolled
            ? "backdrop-blur-2xl bg-[#050505]/95 border border-white/15 shadow-[0_12px_35px_rgba(0,0,0,0.9)]"
            : "backdrop-blur-xl bg-[#080808]/90 border border-white/10 shadow-2xl"
        } px-6 py-3.5 md:py-5 rounded-2xl flex items-center justify-center md:justify-between overflow-hidden`}
      >
        {/* Inner Red Corner Brackets (Top-Left & Bottom-Right) - Mobile Only */}
        <div className="md:hidden pointer-events-none absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-brand-red/90 rounded-tl-md" />
        <div className="md:hidden pointer-events-none absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-brand-red/90 rounded-br-md" />

        <NavbarLogo />

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              activeProps={{ className: "text-brand-red font-medium" }}
              inactiveProps={{ className: "text-gray-300 hover:text-white" }}
              className="text-lg transition-colors relative py-1"
            >
              {({ isActive }) => (
                <>
                  {link.name}
                  {isActive && (
                    <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-brand-red shadow-[0_0_8px_rgba(229,9,20,0.8)] rounded-full" />
                  )}
                </>
              )}
            </Link>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:block text-center">
          <a
            href="#contact"
            className="px-6 py-3 text-sm font-medium text-white border border-brand-red rounded-full hover:bg-brand-red/10 transition-all shadow-[0_0_15px_rgba(229,9,20,0.3)] hover:shadow-[0_0_25px_rgba(229,9,20,0.5)] bg-black/20"
          >
            Discuss a Project
          </a>
        </div>
      </nav>
    </div>
  );
};

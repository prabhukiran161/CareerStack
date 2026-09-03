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
    <nav
      className={`fixed top-0 md:top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 ${
        isScrolled
          ? "backdrop-blur-2xl bg-[#0A0A0A]/90 border border-white/15 shadow-[0_12px_35px_rgba(0,0,0,0.85)]"
          : "backdrop-blur-xl bg-[#121212]/85 border border-white/10 shadow-2xl"
      } w-full md:w-[92%] max-w-sm md:max-w-[90vw] px-6 py-5 md:py-5 md:rounded-2xl flex items-center justify-center md:justify-between`}
    >
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

      {/* Desktop CTA matching the reference */}
      <div className="hidden md:block text-center">
        <a
          href="#contact"
          className="px-6 py-3 text-sm font-medium text-white border border-brand-red rounded-full hover:bg-brand-red/10 transition-all shadow-[0_0_15px_rgba(229,9,20,0.3)] hover:shadow-[0_0_25px_rgba(229,9,20,0.5)] bg-black/20"
        >
          Discuss a Project
        </a>
      </div>
    </nav>
  );
};

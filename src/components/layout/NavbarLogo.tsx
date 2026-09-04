import { Link, useLocation } from "@tanstack/react-router";
import { useIsMobile } from "../../hooks/useIsMobile";

export const NavbarLogo = () => {
  const location = useLocation();
  const isMobile = useIsMobile();

  const isProjectsPage = location.pathname.startsWith("/projects");
  const isFeaturedBuild = isMobile && isProjectsPage;

  if (isFeaturedBuild) {
    return (
      <Link
        to="/"
        className="flex items-center text-lg font-geomini font-medium tracking-widest text-white hover:text-white/80 transition-colors"
      >
        <span className="tracking-[0.18em]">RECENT</span>
        <span className="ml-2.5 text-brand-red font-bold italic tracking-[0.12em] whitespace-nowrap">
          BUILDS
        </span>
      </Link>
    );
  }

  return (
    <Link
      to="/"
      className="flex items-center text-lg font-geomini font-medium tracking-widest text-white hover:text-white/80 transition-colors"
    >
      <span className="tracking-[0.18em]">DEV</span>

      <span className="relative z-20 text-brand-red font-extrabold px-2">
        //
      </span>

      <span className="text-brand-red font-bold italic tracking-[0.12em] whitespace-nowrap">
        PRABHU
      </span>
    </Link>
  );
};

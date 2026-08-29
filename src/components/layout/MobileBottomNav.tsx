import { Link } from "@tanstack/react-router";
import { HiHome, HiCode, HiBriefcase, HiUser } from "react-icons/hi";

const BOTTOM_NAV_ITEMS = [
  { name: "HOME", href: "/", icon: HiHome, exact: true },
  { name: "SKILLS", href: "/skills", icon: HiCode, exact: false },
  { name: "PROJECTS", href: "/projects", icon: HiBriefcase, exact: false },
  { name: "ABOUT", href: "/about", icon: HiUser, exact: false },
] as const;

export const MobileBottomNav = () => {
  return (
    <div className="md:hidden fixed bottom-5 left-1/2 -translate-x-1/2 w-[92%] max-w-sm z-50">
      <nav className="bg-[#0A0A0A]/90 backdrop-blur-2xl border border-white/10 rounded-2xl py-2.5 px-4 shadow-[0_10px_35px_rgba(0,0,0,0.9)] flex items-center justify-around">
        {BOTTOM_NAV_ITEMS.map((item) => {
          const IconComponent = item.icon;
          return (
            <Link
              key={item.name}
              to={item.href}
              activeOptions={{ exact: item.exact }}
              className="flex flex-col items-center justify-center transition-all duration-200 group"
            >
              {({ isActive }) => (
                <>
                  <div
                    className={`w-10 h-10 flex items-center justify-center rounded-xl transition-all duration-300 ${
                      isActive
                        ? "bg-[#381416]/90 border border-[#FE3548]/60 text-[#FE6B7B] shadow-[0_0_16px_rgba(254,53,72,0.45)]"
                        : "border border-transparent text-gray-400 group-hover:text-gray-200"
                    }`}
                  >
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <span
                    className={`text-[10px] tracking-widest font-bold mt-1 transition-colors duration-200 ${
                      isActive ? "text-[#FE6B7B]" : "text-gray-400 group-hover:text-gray-300"
                    }`}
                  >
                    {item.name}
                  </span>
                </>
              )}
            </Link>
          );
        })}
      </nav>
    </div>
  );
};

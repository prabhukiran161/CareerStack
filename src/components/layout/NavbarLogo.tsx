import { motion } from "framer-motion";

type NavbarLogoProps = {
  showDeveloperName: boolean;
};

export const NavbarLogo = ({ showDeveloperName }: NavbarLogoProps) => {
  return (
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
  );
};

import { motion } from "framer-motion";

export const ProjectHero = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="w-full max-w-7xl rounded-2xl md:rounded-3xl border border-white/10 overflow-hidden bg-[#121212] shadow-[0_0_35px_rgba(229,9,20,0.12)] hover:shadow-[0_0_45px_rgba(229,9,20,0.22)] transition-shadow duration-500"
    >
      <img
        src="/images/projects_banner.jpg"
        alt="Proof of Work - Solving Problems. Building Solutions. Sharing Impact."
        draggable={false}
        className="w-full h-auto block object-cover"
      />
    </motion.div>
  );
};

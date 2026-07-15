import { motion } from "framer-motion";

type HeroEnergyBurstProps = {
  active: boolean;
};

export const HeroEnergyBurst = ({ active }: HeroEnergyBurstProps) => {
  return (
    <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
      <motion.div
        className="absolute left-0 top-0 -translate-x-1/2 -translate-y-1/2 rounded-full"
        initial={{ scale: 0, opacity: 0 }}
        animate={
          active
            ? { scale: [0, 1, 0.4], opacity: [0, 1, 0] }
            : { scale: 0, opacity: 0 }
        }
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        style={{
          width: 40,
          height: 40,
          background:
            "radial-gradient(circle, #FE3548 0%, rgba(254,53,72,0.5) 40%, transparent 70%)",
          boxShadow: "0 0 40px 12px rgba(254,53,72,0.6)",
        }}
        aria-hidden
      />
    </div>
  );
};

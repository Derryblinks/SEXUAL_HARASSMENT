import type { ReactNode } from "react";
import { motion } from "framer-motion";

export function PageHero({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden bg-hero text-primary-foreground">
      <div className="absolute inset-0 grain opacity-[0.05]" />
      <div
        className="absolute -top-40 left-1/2 -translate-x-1/2 h-[480px] w-[1100px] rounded-full opacity-30 blur-3xl"
        style={{ background: "radial-gradient(circle, oklch(0.72 0.13 75 / 0.5) 0%, transparent 60%)" }}
      />
      <div className="relative mx-auto max-w-7xl px-6 pt-40 pb-24 md:pt-48 md:pb-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/20 bg-primary-foreground/5 px-3 py-1.5 text-[11px] uppercase tracking-[0.2em] text-primary-foreground/80 backdrop-blur"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-gold animate-pulse-glow" />
          {eyebrow}
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
          className="mt-6 max-w-4xl font-display text-5xl md:text-7xl font-semibold tracking-tighter text-balance leading-[1.02]"
        >
          {title}
        </motion.h1>
        {description && (
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6 max-w-2xl text-lg md:text-xl text-primary-foreground/75 leading-relaxed text-pretty"
          >
            {description}
          </motion.p>
        )}
        {children && (
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="mt-10"
          >
            {children}
          </motion.div>
        )}
      </div>
    </section>
  );
}

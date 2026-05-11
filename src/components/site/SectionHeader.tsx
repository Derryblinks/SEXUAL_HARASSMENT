import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
  dark = false,
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  dark?: boolean;
}) {
  const a = align === "center" ? "text-center mx-auto" : "";
  return (
    <div className={`max-w-3xl ${a}`}>
      {eyebrow && (
        <Reveal>
          <div className={`inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.22em] border-l-2 border-gold pl-3 ${dark ? "text-white" : "text-primary"}`}>
            {eyebrow}
          </div>
        </Reveal>
      )}
      <Reveal delay={0.05}>
        <h2 className="mt-4 font-display text-3xl md:text-[2.5rem] font-medium tracking-tight leading-[1.15] text-balance">
          {title}
        </h2>
      </Reveal>
      {description && (
        <Reveal delay={0.1}>
          <p className="mt-4 text-base md:text-[17px] leading-relaxed text-muted-foreground text-pretty max-w-2xl font-sans">
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
}

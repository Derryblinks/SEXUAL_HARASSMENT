import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
}) {
  const a = align === "center" ? "text-center mx-auto" : "";
  return (
    <div className={`max-w-3xl ${a}`}>
      {eyebrow && (
        <Reveal>
          <div className={`inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground ${align === "center" ? "" : ""}`}>
            <span className="h-1.5 w-1.5 rounded-full bg-gold" />
            {eyebrow}
          </div>
        </Reveal>
      )}
      <Reveal delay={0.05}>
        <h2 className="mt-5 font-display text-4xl md:text-5xl font-semibold tracking-tight text-balance">
          {title}
        </h2>
      </Reveal>
      {description && (
        <Reveal delay={0.1}>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground text-pretty max-w-2xl">
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
}

import { Link } from "@tanstack/react-router";
import { ShieldAlert, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative mt-32 overflow-hidden bg-primary text-primary-foreground">
      <div className="absolute inset-0 opacity-30 bg-aurora" />
      <div className="absolute inset-0 grain opacity-[0.04]" />
      <div className="relative mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-xl bg-gold flex items-center justify-center">
                <ShieldAlert className="h-5 w-5 text-gold-foreground" />
              </div>
              <div>
                <div className="font-display text-lg font-semibold">Aegis UG</div>
                <div className="text-xs uppercase tracking-[0.2em] text-primary-foreground/60">Gender Equity Initiative</div>
              </div>
            </div>
            <p className="mt-6 max-w-md text-pretty text-primary-foreground/70 leading-relaxed">
              An institutional commitment of the University of Ghana to a safe, equitable
              and respectful community — grounded in the UG Gender Policy (2022).
            </p>
            <div className="mt-8 inline-flex items-center gap-3 rounded-full border border-gold/40 bg-gold/10 px-4 py-2 text-sm">
              <span className="h-2 w-2 rounded-full bg-gold animate-pulse-glow" />
              24/7 confidential support available
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="text-xs uppercase tracking-[0.2em] text-primary-foreground/50">Explore</div>
            <ul className="mt-4 space-y-3 text-sm">
              {[
                ["The Policy", "/about"],
                ["Understanding Harassment", "/understanding"],
                ["Report & Support", "/reporting"],
                ["Stakeholders", "/stakeholders"],
                ["Resources", "/resources"],
              ].map(([l, h]) => (
                <li key={h}>
                  <Link to={h} className="text-primary-foreground/80 magnetic-link">{l}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-4">
            <div className="text-xs uppercase tracking-[0.2em] text-primary-foreground/50">Reach Us</div>
            <ul className="mt-4 space-y-4 text-sm">
              <li className="flex items-start gap-3"><MapPin className="h-4 w-4 mt-0.5 text-gold" /><span className="text-primary-foreground/80">Equal Opportunities Board, University of Ghana, Legon</span></li>
              <li className="flex items-start gap-3"><Mail className="h-4 w-4 mt-0.5 text-gold" /><a href="mailto:eob@ug.edu.gh" className="text-primary-foreground/80 magnetic-link">eob@ug.edu.gh</a></li>
              <li className="flex items-start gap-3"><Phone className="h-4 w-4 mt-0.5 text-gold" /><a href="tel:+233000000000" className="text-primary-foreground/80 magnetic-link">+233 (0) 000 000 000</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-t border-primary-foreground/10 pt-8 text-xs text-primary-foreground/50">
          <div>© {new Date().getFullYear()} University of Ghana — Equal Opportunities Board. All rights reserved.</div>
          <div className="flex gap-6">
            <Link to="/about" className="magnetic-link">Policy Document</Link>
            <Link to="/contact" className="magnetic-link">Accessibility</Link>
            <Link to="/contact" className="magnetic-link">Privacy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

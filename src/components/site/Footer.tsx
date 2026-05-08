import { Link } from "@tanstack/react-router";
import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";

const COL_EXPLORE: Array<[string, string]> = [
  ["The Policy", "/about"],
  ["Understanding Harassment", "/understanding"],
  ["Report & Support", "/reporting"],
  ["Stakeholders", "/stakeholders"],
];

const COL_RESOURCES: Array<[string, string]> = [
  ["Resource Library", "/resources"],
  ["Frequently Asked", "/faq"],
  ["UG Gender Policy (PDF)", "/UG-Gender-Policy.pdf"],
  ["Contact & Help", "/contact"],
];

const COL_UNIVERSITY: Array<[string, string]> = [
  ["University of Ghana", "https://ug.edu.gh"],
  ["College of Basic & Applied Sciences", "https://cbas.ug.edu.gh"],
  ["CEGENSA", "https://cegensa.ug.edu.gh"],
  ["Office of the Dean of Students", "https://dos.ug.edu.gh"],
];

export function Footer() {
  return (
    <footer className="mt-24 bg-primary text-primary-foreground">
      {/* Top section */}
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 lg:grid-cols-12">
          {/* Identity */}
          <div className="lg:col-span-3">
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 rounded-md bg-primary-foreground/10 ring-1 ring-primary-foreground/15 flex items-center justify-center font-display font-semibold text-base">
                UG
              </div>
              <div className="leading-tight">
                <div className="font-display text-base font-semibold">University of Ghana</div>
                <div className="text-[11px] uppercase tracking-[0.18em] text-primary-foreground/60">Sextortion Platform</div>
              </div>
            </div>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-primary-foreground/70">
              An institutional initiative of the University of Ghana — providing
              education, confidential support and a safe pathway to report
              sexual harassment and sextortion. Guided by the UG Gender Policy (2022).
            </p>

            <address className="not-italic mt-7 space-y-3 text-sm text-primary-foreground/80">
              <div className="flex items-start gap-3">
                <MapPin className="h-4 w-4 mt-0.5 text-gold shrink-0" />
                <span>Equal Opportunities Board<br/>University of Ghana, Legon — Accra, Ghana</span>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="h-4 w-4 mt-0.5 text-gold shrink-0" />
                <a href="tel:+233000000000" className="hover:text-gold transition-colors">+233 (0) 000 000 000</a>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="h-4 w-4 mt-0.5 text-gold shrink-0" />
                <a href="mailto:eob@ug.edu.gh" className="hover:text-gold transition-colors">eob@ug.edu.gh</a>
              </div>
            </address>
          </div>

          {/* Link columns */}
          <FooterCol title="Explore" links={COL_EXPLORE} />
          <FooterCol title="Resources" links={COL_RESOURCES} />
          <FooterCol title="University" links={COL_UNIVERSITY} external />
        </div>

        {/* Support strip */}
        <div className="mt-14 grid gap-4 md:grid-cols-3 border-t border-primary-foreground/10 pt-8">
          {[
            ["Confidential support", "Available to all members of the UG community."],
            ["Trauma-informed care", "Trained counsellors and case officers on standby."],
            ["Anti-retaliation", "Protections under the UG Gender Policy."],
          ].map(([t, d]) => (
            <div key={t}>
              <div className="text-[11px] uppercase tracking-[0.2em] text-gold">{t}</div>
              <div className="mt-2 text-sm text-primary-foreground/70 leading-relaxed">{d}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom legal bar */}
      <div className="border-t border-primary-foreground/10 bg-primary">
        <div className="mx-auto max-w-7xl px-6 py-5 flex flex-col md:flex-row items-start md:items-center justify-between gap-3 text-[12px] text-primary-foreground/55">
          <div>© {new Date().getFullYear()} University of Ghana — Equal Opportunities Board. All rights reserved.</div>
          <div className="flex gap-6">
            <Link to="/about" className="hover:text-primary-foreground transition-colors">Policy Document</Link>
            <Link to="/contact" className="hover:text-primary-foreground transition-colors">Accessibility</Link>
            <Link to="/contact" className="hover:text-primary-foreground transition-colors">Privacy</Link>
            <Link to="/faq" className="hover:text-primary-foreground transition-colors">FAQ</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, links, external }: { title: string; links: Array<[string, string]>; external?: boolean }) {
  return (
    <div className="lg:col-span-3">
      <div className="text-[11px] uppercase tracking-[0.2em] text-primary-foreground/55 font-medium">{title}</div>
      <ul className="mt-5 space-y-3 text-sm">
        {links.map(([label, href]) => (
          <li key={href}>
            {external || href.startsWith("http") || href.endsWith(".pdf") ? (
              <a href={href} target={external ? "_blank" : undefined} rel="noreferrer" className="group inline-flex items-center gap-1.5 text-primary-foreground/80 hover:text-gold transition-colors">
                {label}
                <ArrowUpRight className="h-3 w-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
              </a>
            ) : (
              <Link to={href} className="text-primary-foreground/80 hover:text-gold transition-colors">{label}</Link>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

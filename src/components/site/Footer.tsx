import { Link } from "@tanstack/react-router";
import { Mail, Phone, MapPin, Globe } from "lucide-react";
import ugLogo from "@/assets/ug-logo.jpeg";

const COL_SUPPORT: Array<[string, string]> = [
  ["Counselling Centre", "/contact"],
  ["Campus Security", "/contact"],
  ["Legal Aid Clinic", "/resources"],
  ["Medical Services", "/contact"],
  ["ASHC Secretariat", "/contact"],
];

const COL_APP_LINKS: Array<[string, string]> = [
  ["Initiate a Report", "/reporting"],
  ["Resource Library", "/resources"],
  ["Understanding Consent", "/understanding/consent"],
  ["Take the Quiz", "/quiz"],
  ["Crisis Help", "/contact"],
];

const COL_POLICY: Array<[string, string]> = [
  ["Institutional Policy", "/understanding"],
  ["Staff Requirements", "/understanding/procedures"],
  ["Bystander Training", "/understanding/bystander"],
  ["Recognising Misconduct", "/understanding/misconduct"],
  ["Admin Portal", "/Admin"],
];

export function Footer() {
  return (
    <footer className="bg-[#1f3a5f] text-white pt-20 pb-10">
      <div className="mx-auto max-w-7xl px-8">
        <div className="grid gap-16 lg:grid-cols-12 items-start">
          {/* Identity & Contact */}
          <div className="lg:col-span-4 space-y-10">
            <Link to="/" className="flex items-center gap-4 group">
              <img src={ugLogo} alt="University of Ghana" className="h-10 w-auto object-contain" />
              <div className="h-6 w-px bg-white/20"></div>
              <span className="font-bold tracking-tighter text-white md:text-xl lg:text-2xl">
                SpeakSafe UG
              </span>
            </Link>

            <div className="space-y-0 text-[14px]">
              <div className="flex items-center gap-3 py-4 border-b border-white/10">
                <MapPin className="h-4 w-4 text-white/60 shrink-0" strokeWidth={1.5} />
                <span className="text-white/90">P.O. Box LG 25, Legon, Accra</span>
              </div>
              <div className="flex items-center gap-3 py-4 border-b border-white/10">
                <Phone className="h-4 w-4 text-white/60 shrink-0" strokeWidth={1.5} />
                <span className="text-white/90">+233 30 2213820 | +233 30 2213820</span>
              </div>
              <div className="flex items-center gap-3 py-4">
                <Mail className="h-4 w-4 text-white/60 shrink-0" strokeWidth={1.5} />
                <a href="mailto:pad@ug.edu.gh" className="text-white/90 hover:text-[#c59d5f] transition-colors">pad@ug.edu.gh</a>
              </div>
            </div>
          </div>

          {/* Links */}
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-12">
            <FooterCol title="Support Services" links={COL_SUPPORT} />
            <FooterCol title="SpeakSafe" links={COL_APP_LINKS} />
            <FooterCol title="Policy & Legal" links={COL_POLICY} />
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-20 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-[13px] font-bold text-white/90 tracking-tight">
          <div>copyright © 2026, University of Ghana</div>
          <div className="flex items-center gap-1">
            Developed by <span className="text-white font-bold">University of Ghana Computing Systems</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, links, external }: { title: string; links: Array<[string, string]>; external?: boolean }) {
  return (
    <div className="space-y-6">
      <div className="inline-block border-b-2 border-[#c59d5f] pb-1">
        <h3 className="text-[17px] font-bold text-[#c59d5f] uppercase tracking-wider">{title}</h3>
      </div>
      <ul className="space-y-3.5">
        {links.map(([label, href]) => (
          <li key={href}>
            {external ? (
              <a 
                href={href} 
                target="_blank" 
                rel="noreferrer" 
                className="text-[14px] text-white/80 hover:text-white transition-colors block leading-tight font-medium"
              >
                {label}
              </a>
            ) : (
              <Link
                to={href}
                className="text-[14px] text-white/80 hover:text-white transition-colors block leading-tight font-medium"
              >
                {label}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

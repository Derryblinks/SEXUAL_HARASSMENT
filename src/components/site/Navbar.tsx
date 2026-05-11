import ugLogo from "@/assets/ug-logo.jpeg";
import { Link, useLocation } from "@tanstack/react-router";
import { ChevronDown, Menu, X } from "lucide-react";
import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [learnOpen, setLearnOpen] = useState(false);
  const [trainingOpen, setTrainingOpen] = useState(false);
  const { pathname } = useLocation();

  const isActive = (path: string) =>
    pathname === path || (path !== "/" && pathname.startsWith(path));

  const close = () => {
    setOpen(false);
    setLearnOpen(false);
    setTrainingOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[72px]">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group shrink-0" onClick={close}>
            <img src={ugLogo} alt="UG Logo" className="h-10 w-auto object-contain" />
            <div className="h-6 w-px bg-slate-300" />
            <span className="font-bold tracking-tighter text-[#1f3a5f] text-lg md:text-xl">
              SpeakSafe UG
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-7 h-full">
            <NavLink to="/" label="Home" active={pathname === "/"} />

            {/* Learn dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger
                className={`h-full flex items-center gap-1 text-[15px] transition-colors focus:outline-none group ${
                  isActive("/understanding") ? "text-[#1f3a5f]" : "text-slate-600 hover:text-[#1f3a5f]"
                }`}
              >
                <span
                  className={`py-1 border-b-2 transition-all ${
                    isActive("/understanding") ? "border-[#c59d5f]" : "border-transparent group-hover:border-slate-200"
                  }`}
                >
                  Learn
                </span>
                <ChevronDown className="h-3.5 w-3.5 text-slate-400 mt-0.5" />
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="start"
                className="w-64 p-2 rounded-sm bg-white border border-slate-200 shadow-none mt-1"
              >
                <DropdownMenuItem asChild className="p-3 text-[14px] cursor-pointer rounded-sm hover:bg-slate-50 focus:bg-slate-50">
                  <Link to="/understanding">What is Sexual Harassment?</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild className="p-3 text-[14px] cursor-pointer rounded-sm hover:bg-slate-50 focus:bg-slate-50">
                  <Link to="/understanding/consent">Consent & Power Dynamics</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild className="p-3 text-[14px] cursor-pointer rounded-sm hover:bg-slate-50 focus:bg-slate-50">
                  <Link to="/understanding/misconduct">Recognising Misconduct</Link>
                </DropdownMenuItem>
                <div className="h-px bg-slate-100 my-1 mx-2" />
                <DropdownMenuItem asChild className="p-3 text-[14px] font-medium cursor-pointer rounded-sm hover:bg-[#1f3a5f]/5 text-[#1f3a5f] focus:bg-[#1f3a5f]/5">
                  <Link to="/quiz">Take the Quiz →</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <NavLink to="/reporting" label="Reporting" active={isActive("/reporting")} />
            <NavLink to="/resources" label="Support" active={isActive("/resources")} />

            {/* Training dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger
                className={`h-full flex items-center gap-1 text-[15px] transition-colors focus:outline-none group text-slate-600 hover:text-[#1f3a5f]`}
              >
                <span className="py-1 border-b-2 border-transparent group-hover:border-slate-200 transition-all">
                  Training
                </span>
                <ChevronDown className="h-3.5 w-3.5 text-slate-400 mt-0.5" />
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="start"
                className="w-56 p-2 rounded-sm bg-white border border-slate-200 shadow-none mt-1"
              >
                <DropdownMenuItem asChild className="p-3 text-[14px] cursor-pointer rounded-sm hover:bg-slate-50 focus:bg-slate-50">
                  <Link to="/understanding/bystander">Bystander Intervention</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild className="p-3 text-[14px] cursor-pointer rounded-sm hover:bg-slate-50 focus:bg-slate-50">
                  <Link to="/understanding/procedures">Staff Requirements</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <NavLink to="/contact" label="Contact" active={isActive("/contact")} />
          </nav>

          {/* Hamburger */}
          <button
            className="lg:hidden p-2 text-slate-600 hover:text-[#1f3a5f] transition-colors"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="lg:hidden absolute w-full bg-white border-t border-slate-100 z-50 max-h-[85vh] overflow-y-auto">
          <div className="px-4 py-4 space-y-1">
            <MobileNavLink to="/" label="Home" onClick={close} />

            {/* Learn section */}
            <div>
              <button
                className="w-full flex items-center justify-between px-4 py-3 text-[15px] text-slate-700 font-medium hover:bg-slate-50 rounded-sm"
                onClick={() => setLearnOpen(!learnOpen)}
              >
                Learn
                <ChevronDown className={`h-4 w-4 text-slate-400 transition-transform ${learnOpen ? "rotate-180" : ""}`} />
              </button>
              {learnOpen && (
                <div className="ml-4 border-l-2 border-slate-100 pl-3 mt-1 space-y-1">
                  <MobileNavLink to="/understanding" label="What is Sexual Harassment?" onClick={close} indent />
                  <MobileNavLink to="/understanding/consent" label="Consent & Power Dynamics" onClick={close} indent />
                  <MobileNavLink to="/understanding/misconduct" label="Recognising Misconduct" onClick={close} indent />
                  <MobileNavLink to="/quiz" label="Take the Quiz" onClick={close} indent />
                </div>
              )}
            </div>

            <MobileNavLink to="/reporting" label="Reporting" onClick={close} />
            <MobileNavLink to="/resources" label="Support" onClick={close} />

            {/* Training section */}
            <div>
              <button
                className="w-full flex items-center justify-between px-4 py-3 text-[15px] text-slate-700 font-medium hover:bg-slate-50 rounded-sm"
                onClick={() => setTrainingOpen(!trainingOpen)}
              >
                Training
                <ChevronDown className={`h-4 w-4 text-slate-400 transition-transform ${trainingOpen ? "rotate-180" : ""}`} />
              </button>
              {trainingOpen && (
                <div className="ml-4 border-l-2 border-slate-100 pl-3 mt-1 space-y-1">
                  <MobileNavLink to="/understanding/bystander" label="Bystander Intervention" onClick={close} indent />
                  <MobileNavLink to="/understanding/procedures" label="Staff Requirements" onClick={close} indent />
                </div>
              )}
            </div>

            <MobileNavLink to="/contact" label="Contact" onClick={close} />
          </div>
        </div>
      )}
    </header>
  );
}

function NavLink({ to, label, active }: { to: string; label: string; active: boolean }) {
  return (
    <Link
      to={to}
      className={`h-full flex items-center text-[15px] transition-colors group ${
        active ? "text-[#1f3a5f]" : "text-slate-600 hover:text-[#1f3a5f]"
      }`}
    >
      <span
        className={`py-1 border-b-2 transition-all ${
          active ? "border-[#c59d5f]" : "border-transparent group-hover:border-slate-200"
        }`}
      >
        {label}
      </span>
    </Link>
  );
}

function MobileNavLink({
  to,
  label,
  onClick,
  indent = false,
}: {
  to: string;
  label: string;
  onClick: () => void;
  indent?: boolean;
}) {
  return (
    <Link
      to={to}
      onClick={onClick}
      className={`block py-3 px-4 text-[15px] text-slate-600 hover:bg-slate-50 hover:text-[#1f3a5f] rounded-sm transition-colors ${
        indent ? "text-[14px] text-slate-500" : ""
      }`}
    >
      {label}
    </Link>
  );
}

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
  const { pathname } = useLocation();

  const isActive = (path: string) => pathname === path || (path !== "/" && pathname.startsWith(path));

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[72px]">
          
          <Link to="/" className="flex items-center gap-4 group shrink-0">
            <img
              src={ugLogo}
              alt="UG Logo"
              className="h-10 w-auto object-contain"
            />
            <div className="h-6 w-px bg-slate-300"></div>
            <span className="font-bold tracking-tighter text-[#1f3a5f] md:text-xl lg:text-2xl">
              SpeakSafe UG
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-8 h-full">
            <NavLink to="/" label="Home" active={pathname === "/"} />
            
            <DropdownMenu>
              <DropdownMenuTrigger className={`h-full flex items-center gap-1.5 text-[15px] transition-colors focus:outline-none group ${isActive("/understanding") ? "text-[#1f3a5f]" : "text-slate-600 hover:text-[#1f3a5f]"}`}>
                <span className={`py-1 border-b-2 transition-all ${isActive("/understanding") ? "border-[#c59d5f]" : "border-transparent group-hover:border-slate-200"}`}>
                  Learn
                </span>
                <ChevronDown className="h-4 w-4 text-slate-400" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-64 p-2 rounded-sm bg-white border border-slate-200 shadow-sm mt-1">
                <DropdownMenuItem asChild className="p-3 text-[14px] cursor-pointer rounded-sm hover:bg-slate-50 focus:bg-slate-50">
                  <Link to="/understanding">What is Sexual Harassment?</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild className="p-3 text-[14px] cursor-pointer rounded-sm hover:bg-slate-50 focus:bg-slate-50">
                  <Link to="/understanding">Consent and Power Dynamics</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild className="p-3 text-[14px] cursor-pointer rounded-sm hover:bg-slate-50 focus:bg-slate-50">
                  <Link to="/understanding">Recognizing Misconduct</Link>
                </DropdownMenuItem>
                <div className="h-px bg-slate-100 my-1 mx-2" />
                <DropdownMenuItem asChild className="p-3 text-[14px] font-medium cursor-pointer rounded-sm hover:bg-[#1f3a5f]/5 text-[#1f3a5f] focus:bg-[#1f3a5f]/5">
                  <Link to="/quiz">Take the Quiz</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <NavLink to="/reporting" label="Reporting" active={isActive("/reporting")} />
            <NavLink to="/resources" label="Support" active={isActive("/resources")} />
            
            <DropdownMenu>
              <DropdownMenuTrigger className={`h-full flex items-center gap-1.5 text-[15px] transition-colors focus:outline-none group ${isActive("/training") ? "text-[#1f3a5f]" : "text-slate-600 hover:text-[#1f3a5f]"}`}>
                <span className={`py-1 border-b-2 transition-all ${isActive("/training") ? "border-[#c59d5f]" : "border-transparent group-hover:border-slate-200"}`}>
                  Training
                </span>
                <ChevronDown className="h-4 w-4 text-slate-400" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-56 p-2 rounded-sm bg-white border border-slate-200 shadow-sm mt-1">
                <DropdownMenuItem asChild className="p-3 text-[14px] cursor-pointer rounded-sm hover:bg-slate-50 focus:bg-slate-50">
                  <Link to="/understanding" hash="bystander">Bystander Intervention</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild className="p-3 text-[14px] cursor-pointer rounded-sm hover:bg-slate-50 focus:bg-slate-50">
                  <Link to="/understanding" hash="procedures">Staff Requirements</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <NavLink to="/contact" label="Contact" active={isActive("/contact")} />
          </nav>

          <button
            className="lg:hidden text-slate-600 hover:text-[#1f3a5f]"
            onClick={() => setOpen(!open)}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-slate-100 bg-white px-4 py-4 space-y-1 shadow-sm absolute w-full">
          <MobileNavLink to="/" label="Home" onClick={() => setOpen(false)} />
          <MobileNavLink to="/understanding" label="Learn" onClick={() => setOpen(false)} />
          <MobileNavLink to="/reporting" label="Reporting" onClick={() => setOpen(false)} />
          <MobileNavLink to="/resources" label="Support" onClick={() => setOpen(false)} />
          <MobileNavLink to="/understanding" label="Training" onClick={() => setOpen(false)} />
          <MobileNavLink to="/contact" label="Contact" onClick={() => setOpen(false)} />
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
      <span className={`py-1 border-b-2 transition-all ${active ? "border-[#c59d5f]" : "border-transparent group-hover:border-slate-200"}`}>
        {label}
      </span>
    </Link>
  );
}

function MobileNavLink({ to, label, onClick }: { to: string; label: string; onClick: () => void }) {
  return (
    <Link
      to={to}
      onClick={onClick}
      className="block py-3 px-4 text-[16px] text-slate-700 hover:bg-slate-50 hover:text-[#1f3a5f] rounded-sm"
    >
      {label}
    </Link>
  );
}

import { useState, useEffect } from "react";
import { Link, useLocation } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "The Policy" },
  { to: "/understanding", label: "Understanding" },
  { to: "/reporting", label: "Report & Support" },
  { to: "/stakeholders", label: "Stakeholders" },
  { to: "/resources", label: "Resources" },
  { to: "/faq", label: "FAQ" },
  { to: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [pathname]);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50">
        {/* Top utility bar */}
        <div className="hidden md:block bg-primary text-primary-foreground/85 text-[12px]">
          <div className="mx-auto max-w-7xl px-6 flex items-center justify-between h-9">
            <div className="tracking-wide">University of Ghana · Equal Opportunities Board</div>
            <div className="flex items-center gap-5">
              <a href="tel:+233000000000" className="inline-flex items-center gap-1.5 hover:text-gold transition-colors"><Phone className="h-3 w-3" /> +233 (0) 000 000 000</a>
              <Link to="/contact" className="hover:text-gold transition-colors">Contact</Link>
              <Link to="/faq" className="hover:text-gold transition-colors">Help</Link>
            </div>
          </div>
        </div>

        {/* Main bar */}
        <div className={`bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/85 border-b transition-shadow duration-300 ${scrolled ? "shadow-elegant border-border" : "border-border/60"}`}>
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <div className="flex items-center justify-between gap-6 h-[72px]">
              <Link to="/" className="flex items-center gap-3 group shrink-0">
                <div className="h-11 w-11 rounded-md bg-primary text-primary-foreground flex items-center justify-center font-display font-semibold text-sm tracking-tight shadow-elegant">
                  UG
                </div>
                <div className="leading-tight">
                  <div className="font-display text-[15px] font-semibold text-foreground tracking-tight">University of Ghana</div>
                  <div className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">Sextortion Platform</div>
                </div>
              </Link>

              <nav className="hidden lg:flex items-center">
                {NAV.map((item) => {
                  const active = pathname === item.to;
                  return (
                    <Link
                      key={item.to}
                      to={item.to}
                      className={`relative px-3.5 py-6 text-[13.5px] font-medium tracking-wide transition-colors ${
                        active ? "text-primary" : "text-foreground/75 hover:text-primary"
                      }`}
                    >
                      {item.label}
                      {active && (
                        <motion.span
                          layoutId="nav-underline"
                          transition={{ type: "spring", stiffness: 380, damping: 32 }}
                          className="absolute left-3 right-3 -bottom-px h-[2px] bg-gold"
                        />
                      )}
                    </Link>
                  );
                })}
              </nav>

              <div className="flex items-center gap-2 shrink-0">
                <Button asChild size="sm" className="hidden sm:inline-flex rounded-sm h-10 px-5 bg-primary hover:bg-primary/90 text-primary-foreground text-[13px] font-medium tracking-wide">
                  <Link to="/reporting">Report Safely</Link>
                </Button>
                <button
                  className="lg:hidden h-10 w-10 inline-flex items-center justify-center rounded-sm border border-border bg-card text-foreground"
                  onClick={() => setOpen((o) => !o)}
                  aria-label="Toggle menu"
                >
                  {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 lg:hidden bg-background pt-28"
          >
            <nav className="flex flex-col px-6 gap-1">
              {NAV.map((item, i) => (
                <motion.div
                  key={item.to}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.03 * i }}
                >
                  <Link
                    to={item.to}
                    className="block py-4 text-xl font-display font-medium border-b border-border/60 text-foreground hover:text-primary transition-colors"
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

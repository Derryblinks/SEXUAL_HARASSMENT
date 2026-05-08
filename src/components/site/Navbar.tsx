import { useState, useEffect } from "react";
import { Link, useLocation } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ShieldAlert } from "lucide-react";
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
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [pathname]);

  return (
    <>
      <motion.header
        initial={{ y: -32, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled ? "py-2" : "py-4"
        }`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div
            className={`flex items-center justify-between gap-6 rounded-full border px-4 py-2.5 transition-all duration-500 ${
              scrolled
                ? "glass-light shadow-elegant border-border/60"
                : "border-transparent bg-transparent"
            }`}
          >
            <Link to="/" className="flex items-center gap-2.5 group">
              <div className="relative h-9 w-9 rounded-xl bg-primary flex items-center justify-center overflow-hidden shadow-elegant">
                <div className="absolute inset-0 bg-gold-grad opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <ShieldAlert className="relative h-4.5 w-4.5 text-primary-foreground" />
              </div>
              <div className="leading-tight">
                <div className="font-display text-sm font-semibold tracking-tight">Aegis UG</div>
                <div className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">Gender Equity Initiative</div>
              </div>
            </Link>

            <nav className="hidden lg:flex items-center gap-1">
              {NAV.map((item) => {
                const active = pathname === item.to;
                return (
                  <Link
                    key={item.to}
                    to={item.to}
                    className={`relative rounded-full px-3.5 py-2 text-sm font-medium transition-colors ${
                      active ? "text-primary" : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {active && (
                      <motion.span
                        layoutId="nav-pill"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                        className="absolute inset-0 rounded-full bg-secondary"
                      />
                    )}
                    <span className="relative">{item.label}</span>
                  </Link>
                );
              })}
            </nav>

            <div className="flex items-center gap-2">
              <Button asChild size="sm" className="hidden sm:inline-flex rounded-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-elegant">
                <Link to="/reporting">Report Safely</Link>
              </Button>
              <button
                className="lg:hidden h-9 w-9 inline-flex items-center justify-center rounded-full border border-border bg-card"
                onClick={() => setOpen((o) => !o)}
                aria-label="Toggle menu"
              >
                {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 lg:hidden bg-background/80 backdrop-blur-xl pt-24"
          >
            <nav className="flex flex-col px-6 gap-1">
              {NAV.map((item, i) => (
                <motion.div
                  key={item.to}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.04 * i }}
                >
                  <Link
                    to={item.to}
                    className="block py-4 text-2xl font-display font-medium border-b border-border/60"
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

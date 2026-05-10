<<<<<<< HEAD
import ugLogo from "@/assets/ug-logo.jpeg";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "@tanstack/react-router";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, Phone, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/understanding", label: "Education" },
  { to: "/reporting", label: "Report & Support" },
=======
import { useState, useEffect } from "react";
import { Link, useLocation } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import ugLogo from "@/assets/ug-logo.jpeg";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "The Policy" },
  { to: "/understanding", label: "Education" },
  { to: "/reporting", label: "Report & Support" },
  { to: "/stakeholders", label: "Stakeholders" },
>>>>>>> cb1628592c231f56f54661977629a3248306c706
  { to: "/resources", label: "Resources" },
  { to: "/faq", label: "FAQ" },
  { to: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
<<<<<<< HEAD
  const [forceReadableBg, setForceReadableBg] = useState(false);
  const [open, setOpen] = useState(false);
  const headerRef = useRef<HTMLElement | null>(null);
  const { pathname } = useLocation();

  useEffect(() => {
    const parseRgb = (colorValue: string) => {
      const channels = colorValue.match(/\d+(\.\d+)?/g);
      if (!channels || channels.length < 3) return null;

      const [r, g, b, a] = channels.map(Number);
      return { r, g, b, a: a ?? 1 };
    };

    const resolveBackground = (start: HTMLElement | null) => {
      let current: HTMLElement | null = start;

      while (current) {
        const styles = window.getComputedStyle(current);
        if (styles.backgroundImage && styles.backgroundImage !== "none") {
          return { imageLike: true as const };
        }

        if (["IMG", "VIDEO", "CANVAS"].includes(current.tagName)) {
          return { imageLike: true as const };
        }

        const parsed = parseRgb(styles.backgroundColor);
        if (parsed && parsed.a > 0.05) {
          return {
            imageLike: false as const,
            r: parsed.r,
            g: parsed.g,
            b: parsed.b,
          };
        }

        current = current.parentElement;
      }

      return null;
    };

    const needsReadableBg = () => {
      const sampleX = window.innerWidth / 2;
      const utilityHeight = window.matchMedia("(min-width: 768px)").matches ? 36 : 0;
      const sampleY = utilityHeight + 36;
      const stackedElements = document.elementsFromPoint(sampleX, sampleY) as HTMLElement[];
      const contentElement = stackedElements.find(
        (element) => !headerRef.current?.contains(element),
      );
      const background = resolveBackground(contentElement ?? null);

      if (!background) return false;
      if (background.imageLike) return true;

      const { r, g, b } = background;
      const luminance = (0.2126 * r + 0.7152 * g + 0.0722 * b) / 255;
      const blueDominant = b > r + 20 && b > g + 10 && b > 90;

      return luminance < 0.56 || blueDominant;
    };

    const onScroll = () => {
      const nextScrolled = window.scrollY > 8;
      setScrolled(nextScrolled);
      setForceReadableBg(nextScrolled && needsReadableBg());
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
=======
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
>>>>>>> cb1628592c231f56f54661977629a3248306c706
  }, []);

  useEffect(() => { setOpen(false); }, [pathname]);

  return (
    <>
<<<<<<< HEAD
      <header ref={headerRef} className="fixed inset-x-0 top-0 z-50">
        {/* Top utility bar */}
        <div className="hidden md:block bg-[#143D6B] text-primary-foreground/85 text-[12px]">
          <div className="mx-auto max-w-7xl px-6 flex items-center justify-between h-9">
            <div className="tracking-wide">University of Ghana · Sexual harassment &amp; misconduct response</div>
=======
      <header className="fixed inset-x-0 top-0 z-50">
        {/* Top utility bar */}
        <div className="hidden md:block bg-primary text-primary-foreground/85 text-[12px]">
          <div className="mx-auto max-w-7xl px-6 flex items-center justify-between h-9">
            <div className="tracking-wide">University of Ghana · Equal Opportunities Board</div>
>>>>>>> cb1628592c231f56f54661977629a3248306c706
            <div className="flex items-center gap-5">
              <a href="tel:+233000000000" className="inline-flex items-center gap-1.5 hover:text-gold transition-colors"><Phone className="h-3 w-3" /> +233 (0) 000 000 000</a>
              <Link to="/contact" className="hover:text-gold transition-colors">Contact</Link>
              <Link to="/faq" className="hover:text-gold transition-colors">Help</Link>
            </div>
          </div>
        </div>

        {/* Main bar */}
<<<<<<< HEAD
        <div
          className={`border-b transition-[background-color,border-color,box-shadow,backdrop-filter] duration-500 ease-out ${
            scrolled
              ? forceReadableBg
                ? "bg-white/90 border-border/60 shadow-elegant backdrop-blur-md"
                : "bg-transparent border-transparent shadow-none backdrop-blur-sm"
              : "bg-white border-border/60 shadow-elegant backdrop-blur-0"
          }`}
        >
=======
        <div className={`bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/85 border-b transition-shadow duration-300 ${scrolled ? "shadow-elegant border-border" : "border-border/60"}`}>
>>>>>>> cb1628592c231f56f54661977629a3248306c706
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <div className="flex items-center justify-between gap-6 h-[72px]">
              <Link to="/" className="flex items-center gap-3 group shrink-0">
                <img
                  src={ugLogo}
                  alt="University of Ghana coat of arms"
                  className="h-12 w-auto object-contain"
                />
                <div className="leading-tight border-l border-border/70 pl-3">
                  <div className="font-display text-[15px] font-semibold text-foreground tracking-tight">University of Ghana</div>
                  <div className="text-[11px] uppercase tracking-[0.18em] text-gold font-medium">Sextortion Platform</div>
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
<<<<<<< HEAD
                          transition={{ type: "spring", stiffness: 380, damping: 34 }}
                          className="absolute left-1/2 -translate-x-1/2 bottom-3 h-[3px] w-6 rounded-full bg-gold"
=======
                          transition={{ type: "spring", stiffness: 380, damping: 32 }}
                          className="absolute left-3 right-3 -bottom-px h-[2px] bg-gold"
>>>>>>> cb1628592c231f56f54661977629a3248306c706
                        />
                      )}
                    </Link>
                  );
                })}
              </nav>

              <div className="flex items-center gap-2 shrink-0">
                <Button asChild size="sm" className="hidden sm:inline-flex rounded-sm h-10 px-5 bg-primary hover:bg-primary/90 text-primary-foreground text-[13px] font-medium tracking-wide">
<<<<<<< HEAD
                  <Link to="/reporting" hash="report-form">Report Safely</Link>
=======
                  <Link to="/reporting">Report Safely</Link>
>>>>>>> cb1628592c231f56f54661977629a3248306c706
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

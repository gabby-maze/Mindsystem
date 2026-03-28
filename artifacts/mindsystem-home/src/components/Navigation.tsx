import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";

interface NavigationProps {
  onReserveClick?: () => void;
}

export function Navigation({ onReserveClick }: NavigationProps) {
  const [location] = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/mindsystem", label: "MindSystem" },
    { href: "/about", label: "About" },
  ];

  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        aria-label="Main navigation"
        className="fixed top-0 left-0 right-0 z-40 glass-panel border-t-0 border-x-0 border-b border-border/50"
      >
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link
            href="/"
            className="text-2xl font-serif tracking-wide font-semibold text-foreground hover:text-primary transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            Gabby Cole
          </Link>

          {/* Desktop nav */}
          <div className="hidden sm:flex items-center gap-6">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                aria-current={location === href ? "page" : undefined}
                className="text-sm uppercase tracking-widest font-semibold text-muted-foreground hover:text-foreground transition-colors"
              >
                {label}
              </Link>
            ))}
            <a
              href="https://www.mazeperformance.ai/missing-conversation"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-transparent border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all uppercase tracking-widest text-xs font-semibold min-h-[44px] inline-flex items-center"
            >
              Reserve Your Spot
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="sm:hidden flex items-center justify-center w-11 h-11 text-foreground"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile dropdown */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              key="mobile-menu"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
              className="sm:hidden overflow-hidden border-t border-border/50"
              style={{ background: "rgba(10,10,10,0.97)" }}
            >
              <div className="flex flex-col px-6 py-4 gap-1">
                {navLinks.map(({ href, label }) => (
                  <Link
                    key={href}
                    href={href}
                    aria-current={location === href ? "page" : undefined}
                    onClick={() => setMenuOpen(false)}
                    className="text-sm uppercase tracking-widest font-semibold text-muted-foreground hover:text-foreground transition-colors py-3 border-b border-border/30 last:border-0"
                  >
                    {label}
                  </Link>
                ))}
                <a
                  href="https://www.mazeperformance.ai/missing-conversation"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMenuOpen(false)}
                  className="mt-3 inline-flex items-center justify-center px-6 py-3 bg-transparent border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all uppercase tracking-widest text-xs font-semibold min-h-[44px]"
                >
                  Reserve Your Spot
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
}

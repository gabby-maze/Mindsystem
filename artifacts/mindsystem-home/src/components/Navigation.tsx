import { motion } from "framer-motion";
import { Link, useLocation } from "wouter";

interface NavigationProps {
  onReserveClick: () => void;
}

export function Navigation({ onReserveClick }: NavigationProps) {
  const [location] = useLocation();

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
          <Link href="/" className="text-2xl font-serif tracking-wide font-semibold text-foreground hover:text-primary transition-colors">
            Gabby Cole
          </Link>

          <div className="flex items-center gap-6">
            <div className="hidden sm:flex items-center gap-6">
              <Link
                href="/"
                aria-current={location === "/" ? "page" : undefined}
                className="text-sm uppercase tracking-widest font-semibold text-muted-foreground hover:text-foreground transition-colors"
              >
                Home
              </Link>
              <Link
                href="/mindsystem"
                aria-current={location === "/mindsystem" ? "page" : undefined}
                className="text-sm uppercase tracking-widest font-semibold text-muted-foreground hover:text-foreground transition-colors"
              >
                MindSystem
              </Link>
              <Link
                href="/about"
                aria-current={location === "/about" ? "page" : undefined}
                className="text-sm uppercase tracking-widest font-semibold text-muted-foreground hover:text-foreground transition-colors"
              >
                About
              </Link>
            </div>
            <button
              onClick={onReserveClick}
              className="hidden sm:inline-flex px-6 py-3 bg-transparent border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all uppercase tracking-widest text-xs font-semibold min-h-[44px]"
            >
              Reserve Your Spot
            </button>
          </div>
        </div>
      </motion.nav>
    </>
  );
}

import { Link, useLocation } from "wouter";

export function Footer() {
  const year = new Date().getFullYear();
  const [location] = useLocation();

  return (
    <footer className="bg-card border-t border-border/40 py-12 px-6" role="contentinfo">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <Link href="/" className="text-xl font-serif font-semibold text-foreground hover:text-primary transition-colors">
              Gabby Cole
            </Link>
            <p className="text-muted-foreground text-sm mt-1">
              © {year} Maze Performance Inc. All rights reserved.
            </p>
          </div>

          <nav aria-label="Footer navigation" className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs uppercase tracking-widest font-semibold text-muted-foreground">
            <Link
              href="/privacy-policy"
              aria-current={location === "/privacy-policy" ? "page" : undefined}
              className="hover:text-primary transition-colors underline-offset-2 hover:underline"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms-of-service"
              aria-current={location === "/terms-of-service" ? "page" : undefined}
              className="hover:text-primary transition-colors underline-offset-2 hover:underline"
            >
              Terms of Service
            </Link>
            <Link
              href="/cookie-policy"
              aria-current={location === "/cookie-policy" ? "page" : undefined}
              className="hover:text-primary transition-colors underline-offset-2 hover:underline"
            >
              Cookie Policy
            </Link>
            <Link
              href="/accessibility"
              aria-current={location === "/accessibility" ? "page" : undefined}
              className="hover:text-primary transition-colors underline-offset-2 hover:underline"
            >
              Accessibility
            </Link>
            <Link
              href="/contact"
              aria-current={location === "/contact" ? "page" : undefined}
              className="hover:text-primary transition-colors underline-offset-2 hover:underline"
            >
              Contact
            </Link>
          </nav>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-6 text-center">
        <Link href="/links" className="text-xs text-muted-foreground/40 hover:text-muted-foreground/70 transition-colors">
          Links
        </Link>
      </div>
    </footer>
  );
}

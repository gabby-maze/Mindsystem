import { Link } from "wouter";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border/40 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <Link href="/" className="text-xl font-serif font-semibold text-foreground hover:text-primary transition-colors">
              MindSystem
            </Link>
            <p className="text-muted-foreground text-sm mt-1">
              © {year} MindSystem. All rights reserved.
            </p>
          </div>

          <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs uppercase tracking-widest font-semibold text-muted-foreground">
            <Link href="/privacy-policy" className="hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="hover:text-primary transition-colors">
              Terms of Service
            </Link>
            <Link href="/cookie-policy" className="hover:text-primary transition-colors">
              Cookie Policy
            </Link>
            <Link href="/accessibility" className="hover:text-primary transition-colors">
              Accessibility
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}

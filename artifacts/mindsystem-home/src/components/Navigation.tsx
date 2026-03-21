import { motion } from "framer-motion";
import { Link } from "wouter";

interface NavigationProps {
  onReserveClick: () => void;
}

export function Navigation({ onReserveClick }: NavigationProps) {
  return (
    <motion.nav 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-40 glass-panel border-t-0 border-x-0 border-b border-border/50"
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="text-2xl font-serif tracking-wide font-semibold text-foreground hover:text-primary transition-colors">
          MindSystem
        </Link>
        
        <button
          onClick={onReserveClick}
          className="hidden sm:inline-flex px-6 py-2.5 bg-transparent border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all uppercase tracking-widest text-xs font-semibold"
        >
          Reserve Your Spot
        </button>
      </div>
    </motion.nav>
  );
}

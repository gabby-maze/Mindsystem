import { useState } from "react";
import { Link, useLocation } from "wouter";
import { useAuth } from "@/context/AuthContext";
import { signOut } from "@/lib/auth";
import { TIER_COLORS, TIER_LABELS } from "@/lib/data";
import { Bell, Menu, X, LogOut, Home, BookOpen, Radio, TrendingUp, HelpCircle } from "lucide-react";

const NAV_LINKS = [
  { href: "/dashboard", label: "Home", icon: Home },
  { href: "/courses", label: "Courses", icon: BookOpen },
  { href: "/live", label: "Live", icon: Radio },
  { href: "/progress", label: "My Progress", icon: TrendingUp },
  { href: "/ask", label: "Ask a Question", icon: HelpCircle },
];

export default function Layout({ children }: { children: React.ReactNode }) {
  const { family } = useAuth();
  const [, navigate] = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [location] = useLocation();

  async function handleLogout() {
    await signOut();
    navigate("/login");
  }

  const tierColor = family ? TIER_COLORS[family.tier] : "#888780";
  const tierLabel = family ? TIER_LABELS[family.tier] : "";

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: "#0a0a0a", color: "#fff", fontFamily: "'Oswald', sans-serif" }}>
      {/* Top nav */}
      <header
        className="sticky top-0 z-50 flex items-center justify-between px-6 py-4 border-b"
        style={{ backgroundColor: "#111", borderColor: "rgba(255,255,255,0.08)" }}
      >
        {/* Logo */}
        <Link href="/dashboard">
          <span className="cursor-pointer" style={{ fontFamily: "'Permanent Marker', cursive", fontSize: "1.1rem" }}>
            Gabby Cole
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          {NAV_LINKS.map(({ href, label }) => (
            <Link key={href} href={href}>
              <span
                className="text-sm uppercase tracking-wider cursor-pointer transition-colors"
                style={{ color: location === href ? "#fff" : "rgba(255,255,255,0.5)" }}
              >
                {label}
              </span>
            </Link>
          ))}
        </nav>

        {/* Right side */}
        <div className="flex items-center gap-3">
          {/* Tier badge */}
          {family && (
            <span
              className="hidden md:inline-flex text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full"
              style={{ backgroundColor: `${tierColor}20`, color: tierColor, border: `1px solid ${tierColor}40` }}
            >
              {tierLabel}
            </span>
          )}

          {/* Notification bell */}
          <Link href="/notifications">
            <button className="relative p-2 rounded-full hover:bg-white/10 transition-colors">
              <Bell size={18} />
            </button>
          </Link>

          {/* Logout */}
          <button
            onClick={handleLogout}
            className="hidden md:flex items-center gap-2 text-xs uppercase tracking-wider px-3 py-2 rounded transition-colors hover:bg-white/10"
            style={{ color: "rgba(255,255,255,0.5)" }}
          >
            <LogOut size={14} />
            Logout
          </button>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 rounded hover:bg-white/10 transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>

      {/* Mobile menu */}
      {mobileOpen && (
        <div
          className="md:hidden fixed inset-0 top-[65px] z-40 flex flex-col p-6 gap-4"
          style={{ backgroundColor: "#111" }}
        >
          {NAV_LINKS.map(({ href, label, icon: Icon }) => (
            <Link key={href} href={href}>
              <span
                className="flex items-center gap-3 text-lg uppercase tracking-wider cursor-pointer py-3 border-b"
                style={{ borderColor: "rgba(255,255,255,0.08)", color: location === href ? "#fff" : "rgba(255,255,255,0.6)" }}
                onClick={() => setMobileOpen(false)}
              >
                <Icon size={18} />
                {label}
              </span>
            </Link>
          ))}
          <button
            onClick={handleLogout}
            className="flex items-center gap-3 text-lg uppercase tracking-wider mt-4"
            style={{ color: "rgba(255,255,255,0.4)" }}
          >
            <LogOut size={18} />
            Logout
          </button>
        </div>
      )}

      {/* Main content */}
      <main className="flex-1">{children}</main>
    </div>
  );
}

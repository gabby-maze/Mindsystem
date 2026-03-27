import { useEffect } from "react";
import { useLocation } from "wouter";
import { Link } from "wouter";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { Footer } from "@/components/Footer";

const TEAL = "#00C9B1";
const ACCESS_TOKEN = "coaches2026";

export default function CoachesThankYou() {
  const [, navigate] = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get("access") !== ACCESS_TOKEN) {
      navigate("/coaches");
    }
  }, [navigate]);

  useEffect(() => {
    document.title = "You're On the List | Gabby Cole";
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <main id="main-content" className="flex-1 flex items-center justify-center">
        <div className="max-w-2xl mx-auto px-6 py-32 text-center">

          <div className="flex justify-center mb-8">
            <CheckCircle2
              className="w-16 h-16"
              style={{ color: TEAL }}
              aria-hidden="true"
            />
          </div>

          <p
            className="text-xs uppercase tracking-[0.3em] font-semibold mb-6"
            style={{ color: TEAL }}
          >
            Coach Certification · Waitlist Confirmed
          </p>

          <h1 className="text-4xl md:text-6xl font-serif leading-[1.1] tracking-tight mb-8">
            You're on the list.{" "}
            <span className="italic" style={{ color: TEAL }}>
              Welcome.
            </span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed font-light mb-6">
            We received your information and you're officially on the waitlist for the MindSystem Coach Certification.
          </p>

          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed font-light mb-6">
            Waitlist members get first access and first pricing when enrollment opens — so you're already ahead.
          </p>

          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed font-light mb-14">
            We'll be in touch. In the meantime, keep doing the work.
          </p>

          <div
            className="border p-8 mb-14 text-left"
            style={{ borderColor: `${TEAL}40` }}
          >
            <p
              className="text-xs uppercase tracking-[0.25em] font-semibold mb-3"
              style={{ color: TEAL }}
            >
              What happens next
            </p>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-3">
                <ArrowRight className="w-4 h-4 mt-1 shrink-0" style={{ color: TEAL }} aria-hidden="true" />
                <span>Watch your inbox — we'll send updates as the certification comes together.</span>
              </li>
              <li className="flex items-start gap-3">
                <ArrowRight className="w-4 h-4 mt-1 shrink-0" style={{ color: TEAL }} aria-hidden="true" />
                <span>Waitlist members will be notified before enrollment opens to the public.</span>
              </li>
              <li className="flex items-start gap-3">
                <ArrowRight className="w-4 h-4 mt-1 shrink-0" style={{ color: TEAL }} aria-hidden="true" />
                <span>You'll have access to founding pricing — available only to this group.</span>
              </li>
            </ul>
          </div>

          <Link
            href="/links"
            className="inline-flex items-center gap-2 text-sm uppercase tracking-widest font-semibold transition-opacity hover:opacity-70"
            style={{ color: TEAL }}
          >
            ← Back to Links
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}

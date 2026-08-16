import { useState, useEffect } from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ReservationModal } from "@/components/ReservationModal";
import { CheckCircle, Send } from "lucide-react";

export default function Contact() {
  const [modalOpen, setModalOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    document.title = "Contact | Gabby Cole";
  }, []);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) return;
    setStatus("sending");
    setErrorMsg("");

    try {
      const res = await fetch("/.netlify/functions/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: name.trim(), email: email.trim(), subject: subject.trim(), message: message.trim() }),
      });
      if (!res.ok) {
        const d = await res.json().catch(() => ({}));
        throw new Error(d.error || "Something went wrong.");
      }
      setStatus("sent");
    } catch (err: unknown) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong. Please email us directly.");
    }
  }

  const inputCls = "w-full bg-white/5 border border-white/10 rounded-md px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors";
  const labelCls = "block text-xs uppercase tracking-widest text-muted-foreground mb-1.5";

  return (
    <div className="bg-background text-foreground min-h-screen font-sans">
      <Navigation onReserveClick={() => setModalOpen(true)} />
      <ReservationModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />

      <main id="main-content" className="max-w-3xl mx-auto px-6 pt-36 pb-24">
        <h1 className="text-4xl md:text-5xl font-serif text-primary mb-4">Contact</h1>
        <p className="text-muted-foreground text-sm mb-12">We'd love to hear from you.</p>

        <div className="grid md:grid-cols-5 gap-16">
          {/* Left: info */}
          <div className="md:col-span-2 space-y-8 text-muted-foreground leading-relaxed">
            <section>
              <h2 className="text-base font-semibold text-foreground mb-2">Email us directly</h2>
              <a
                href="mailto:info@mazeperformance.ai"
                className="text-primary underline underline-offset-2 hover:text-primary/80 transition-colors text-sm"
              >
                info@mazeperformance.ai
              </a>
            </section>

            <section>
              <h2 className="text-base font-semibold text-foreground mb-2">Response Time</h2>
              <p className="text-sm">We aim to respond within 2 business days. For urgent matters, note that in the subject line.</p>
            </section>

            <section>
              <h2 className="text-base font-semibold text-foreground mb-2">Company</h2>
              <p className="text-sm">
                Maze Performance Inc.<br />
                <a href="https://www.gabbycole.com" className="text-primary underline underline-offset-2 hover:text-primary/80 transition-colors">
                  www.gabbycole.com
                </a>
              </p>
            </section>
          </div>

          {/* Right: form */}
          <div className="md:col-span-3">
            {status === "sent" ? (
              <div className="flex flex-col items-center justify-center py-16 text-center gap-4">
                <CheckCircle size={40} className="text-primary" />
                <h2 className="text-xl font-semibold">Message sent!</h2>
                <p className="text-muted-foreground text-sm max-w-xs">Thanks for reaching out. We'll get back to you within 2 business days.</p>
                <button
                  onClick={() => { setStatus("idle"); setName(""); setEmail(""); setSubject(""); setMessage(""); }}
                  className="mt-4 text-xs uppercase tracking-widest text-muted-foreground underline underline-offset-2 hover:text-foreground transition-colors"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className={labelCls}>Your Name *</label>
                  <input
                    type="text" required
                    className={inputCls}
                    placeholder="First and last name"
                    value={name} onChange={e => setName(e.target.value)}
                  />
                </div>
                <div>
                  <label className={labelCls}>Email Address *</label>
                  <input
                    type="email" required
                    className={inputCls}
                    placeholder="you@example.com"
                    value={email} onChange={e => setEmail(e.target.value)}
                  />
                </div>
                <div>
                  <label className={labelCls}>Subject</label>
                  <input
                    type="text"
                    className={inputCls}
                    placeholder="Program question, media request, etc."
                    value={subject} onChange={e => setSubject(e.target.value)}
                  />
                </div>
                <div>
                  <label className={labelCls}>Message *</label>
                  <textarea
                    required rows={6}
                    className={`${inputCls} resize-none`}
                    placeholder="Tell us what's on your mind…"
                    value={message} onChange={e => setMessage(e.target.value)}
                  />
                </div>

                {status === "error" && (
                  <p className="text-red-400 text-sm">{errorMsg}</p>
                )}

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-md text-xs uppercase tracking-widest font-bold hover:bg-primary/90 transition-colors disabled:opacity-60"
                >
                  <Send size={14} />
                  {status === "sending" ? "Sending…" : "Send Message"}
                </button>
              </form>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

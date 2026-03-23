import { useState, useEffect } from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ReservationModal } from "@/components/ReservationModal";

export default function Contact() {
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    document.title = "Contact | Gabby Cole";
  }, []);

  return (
    <div className="bg-background text-foreground min-h-screen font-sans">
      <Navigation onReserveClick={() => setModalOpen(true)} />
      <ReservationModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />

      <main id="main-content" className="max-w-3xl mx-auto px-6 pt-36 pb-24">
        <h1 className="text-4xl md:text-5xl font-serif text-primary mb-4">Contact</h1>
        <p className="text-muted-foreground text-sm mb-12">We'd love to hear from you.</p>

        <div className="space-y-10 text-muted-foreground leading-relaxed">

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">Get in Touch</h2>
            <p>
              For all inquiries — program questions, media requests, or general correspondence — reach us directly at:
            </p>
            <p className="mt-4 text-lg">
              <a
                href="mailto:info@mazeperformance.ai"
                className="text-primary underline underline-offset-2 hover:text-primary/80 transition-colors"
              >
                info@mazeperformance.ai
              </a>
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">Response Time</h2>
            <p>
              We aim to respond to all inquiries within 2 business days. If you have an urgent matter, please indicate that in the subject line of your email.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">Company</h2>
            <p>
              Maze Performance Inc.<br />
              <a
                href="https://www.gabbycole.com"
                className="text-primary underline underline-offset-2 hover:text-primary/80 transition-colors"
              >
                www.gabbycole.com
              </a>
            </p>
          </section>

        </div>
      </main>

      <Footer />
    </div>
  );
}

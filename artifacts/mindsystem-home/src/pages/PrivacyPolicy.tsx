import { useState, useEffect } from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ReservationModal } from "@/components/ReservationModal";

export default function PrivacyPolicy() {
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    document.title = "Privacy Policy | Maze Performance Inc.";
  }, []);

  return (
    <div className="bg-background text-foreground min-h-screen font-sans">
      <Navigation onReserveClick={() => setModalOpen(true)} />
      <ReservationModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />

      <main id="main-content" className="max-w-3xl mx-auto px-6 pt-36 pb-24">
        <h1 className="text-4xl md:text-5xl font-serif text-primary mb-4">Privacy Policy</h1>
        <p className="text-muted-foreground text-sm mb-12">Effective Date: March 22, 2026</p>

        <div className="space-y-10 text-muted-foreground leading-relaxed">

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">1. Introduction</h2>
            <p>Maze Performance Inc. is committed to protecting your privacy. This policy covers information collected at www.gabbycole.com.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">2. Information We Collect</h2>
            <ul className="list-disc list-inside space-y-2 pl-2">
              <li>Contact form submissions (name, email, phone, message)</li>
              <li>Email newsletter sign-ups</li>
              <li>Payment and booking information (processed via third-party processors)</li>
              <li>Coaching inquiry and athlete intake forms</li>
              <li>Automatically collected data including IP address, browser type, pages visited, and cookies</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">3. How We Use Your Information</h2>
            <p className="mb-3">We use the information we collect to:</p>
            <ul className="list-disc list-inside space-y-2 pl-2">
              <li>Respond to your inquiries and confirm registrations</li>
              <li>Deliver program content and communications you have requested</li>
              <li>Send occasional marketing emails about Maze Performance Inc. offerings (you may opt out at any time)</li>
              <li>Analyze site traffic and improve our website and services</li>
              <li>Comply with applicable legal obligations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">4. Sharing Your Information</h2>
            <p>We do not sell or rent your personal information to third parties. We may share information with trusted service providers who assist in operating our website and delivering our programs (e.g., email platforms, payment processors), under strict confidentiality agreements. We may also disclose information where required by law or to protect the rights and safety of Maze Performance Inc. and its community.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">5. Data Retention</h2>
            <p>We retain your personal information for as long as necessary to fulfill the purposes outlined in this policy, or as required by law. You may request deletion of your data at any time by contacting us.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">6. Your Rights</h2>
            <p className="mb-3">Depending on your location, you may have the right to:</p>
            <ul className="list-disc list-inside space-y-2 pl-2">
              <li>Access the personal data we hold about you</li>
              <li>Request correction of inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Opt out of marketing communications</li>
              <li>Lodge a complaint with your local data protection authority</li>
            </ul>
            <p className="mt-3">To exercise any of these rights, contact us at <a href="mailto:info@mazeperformance.ai" className="text-primary underline underline-offset-2 hover:text-primary/80">info@mazeperformance.ai</a>.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">7. Security</h2>
            <p>We implement reasonable technical and organizational measures to protect your information from unauthorized access, loss, or misuse. However, no internet transmission is completely secure, and we cannot guarantee absolute security.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">8. Children's Privacy</h2>
            <p>Our website is not directed to children under the age of 13. We do not knowingly collect personal information from children. If you believe we have inadvertently collected such information, please contact us and we will delete it promptly.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">9. Changes to This Policy</h2>
            <p>We may update this Privacy Policy periodically. Changes will be posted on this page with an updated effective date. Your continued use of our website after any changes constitutes your acceptance of the updated policy.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">10. Contact Us</h2>
            <p>If you have questions about this Privacy Policy, please contact us at:<br />
              Maze Performance Inc.<br />
              <a href="https://www.gabbycole.com" className="text-primary underline underline-offset-2 hover:text-primary/80">www.gabbycole.com</a><br />
              <a href="mailto:info@mazeperformance.ai" className="text-primary underline underline-offset-2 hover:text-primary/80">info@mazeperformance.ai</a>
            </p>
          </section>

        </div>
      </main>

      <Footer />
    </div>
  );
}

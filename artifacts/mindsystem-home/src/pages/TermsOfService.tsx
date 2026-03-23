import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ReservationModal } from "@/components/ReservationModal";

export default function TermsOfService() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="bg-background text-foreground min-h-screen font-sans">
      <Navigation onReserveClick={() => setModalOpen(true)} />
      <ReservationModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />

      <main className="max-w-3xl mx-auto px-6 pt-36 pb-24">
        <h1 className="text-4xl md:text-5xl font-serif text-primary mb-4">Terms of Service</h1>
        <p className="text-muted-foreground text-sm mb-12">Effective Date: March 23, 2026</p>

        <div className="space-y-10 text-muted-foreground leading-relaxed">

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">1. Acceptance of Terms</h2>
            <p>By accessing or using the MindSystem website and services (collectively, the "Services"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, please do not use our Services.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">2. Description of Services</h2>
            <p>MindSystem offers coaching programs, live sessions, and educational resources designed for youth sports families — including athletes, parents, and coaches. Specific program details, availability, and pricing are described on the website and are subject to change without notice.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">3. Eligibility</h2>
            <p>You must be at least 18 years old to register for MindSystem programs or purchase any Services. By using our Services, you represent that you meet this requirement. Parents or guardians may register on behalf of minor participants.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">4. Registration and Account</h2>
            <p>When you register for a session or program, you agree to provide accurate and complete information. You are responsible for maintaining the confidentiality of any account credentials and for all activity under your account. Notify us immediately of any unauthorized use at <a href="mailto:hello@mindsystemcoach.com" className="text-primary hover:underline">hello@mindsystemcoach.com</a>.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">5. Payment and Refunds</h2>
            <p>Fees for paid programs are stated at the time of registration. All payments are due in full prior to program access unless otherwise stated. Refund eligibility is determined on a case-by-case basis. Please contact us within 48 hours of your purchase if you have concerns about a charge.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">6. Intellectual Property</h2>
            <p>All content on this website — including text, graphics, videos, frameworks, and program materials — is the exclusive property of MindSystem and is protected by applicable intellectual property laws. You may not reproduce, distribute, or create derivative works from any MindSystem content without express written permission.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">7. User Conduct</h2>
            <p className="mb-3">You agree not to:</p>
            <ul className="list-disc list-inside space-y-2 pl-2">
              <li>Use the Services for any unlawful purpose</li>
              <li>Harass, threaten, or harm other participants or staff</li>
              <li>Share, record, or redistribute session content without written consent</li>
              <li>Attempt to gain unauthorized access to any part of the Services</li>
            </ul>
            <p className="mt-3">MindSystem reserves the right to terminate access for any user who violates these standards.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">8. Disclaimer of Warranties</h2>
            <p>The Services are provided "as is" without warranties of any kind, express or implied. MindSystem does not guarantee specific outcomes from participation in any program. Coaching and educational content is informational in nature and does not constitute licensed psychological, medical, or legal advice.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">9. Limitation of Liability</h2>
            <p>To the maximum extent permitted by law, MindSystem and its affiliates shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of the Services, even if advised of the possibility of such damages.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">10. Governing Law</h2>
            <p>These Terms are governed by the laws of the State of California, without regard to conflict of law principles. Any disputes shall be resolved in the courts located in California.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">11. Changes to Terms</h2>
            <p>We may modify these Terms at any time. Updated Terms will be posted on this page with a revised effective date. Continued use of the Services after changes constitutes your acceptance of the updated Terms.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">12. Contact Us</h2>
            <p>Questions about these Terms? Reach us at:<br />
              <a href="mailto:hello@mindsystemcoach.com" className="text-primary hover:underline">hello@mindsystemcoach.com</a>
            </p>
          </section>

        </div>
      </main>

      <Footer />
    </div>
  );
}

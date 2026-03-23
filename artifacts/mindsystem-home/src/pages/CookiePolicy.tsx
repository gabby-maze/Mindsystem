import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ReservationModal } from "@/components/ReservationModal";

export default function CookiePolicy() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="bg-background text-foreground min-h-screen font-sans">
      <Navigation onReserveClick={() => setModalOpen(true)} />
      <ReservationModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />

      <main className="max-w-3xl mx-auto px-6 pt-36 pb-24">
        <h1 className="text-4xl md:text-5xl font-serif text-primary mb-4">Cookie Policy</h1>
        <p className="text-muted-foreground text-sm mb-12">Effective Date: March 23, 2026</p>

        <div className="space-y-10 text-muted-foreground leading-relaxed">

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">1. What Are Cookies?</h2>
            <p>Cookies are small text files placed on your device when you visit a website. They allow websites to recognize your browser, remember preferences, and collect usage information to improve the experience over time.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">2. How We Use Cookies</h2>
            <p className="mb-3">MindSystem uses cookies for the following purposes:</p>
            <ul className="list-disc list-inside space-y-2 pl-2">
              <li><span className="text-foreground font-medium">Essential Cookies</span> — Required for the website to function correctly. These cannot be disabled.</li>
              <li><span className="text-foreground font-medium">Analytics Cookies</span> — Help us understand how visitors interact with the site (e.g., pages visited, time on page) so we can improve content and user experience.</li>
              <li><span className="text-foreground font-medium">Preference Cookies</span> — Remember choices you make (such as language or display settings) to personalize your experience.</li>
              <li><span className="text-foreground font-medium">Marketing Cookies</span> — Used to track visitors across websites to display relevant advertisements. We only use these if you have explicitly consented.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">3. Third-Party Cookies</h2>
            <p>Some cookies on our site are set by third-party services we use, such as analytics platforms (e.g., Google Analytics) or embedded content providers. These third parties have their own privacy policies and we encourage you to review them. We do not control the cookies placed by third parties.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">4. Managing Cookies</h2>
            <p className="mb-3">You can control and delete cookies through your browser settings. Most browsers allow you to:</p>
            <ul className="list-disc list-inside space-y-2 pl-2">
              <li>View what cookies are stored on your device</li>
              <li>Delete all or specific cookies</li>
              <li>Block cookies from specific or all websites</li>
              <li>Set preferences for cookie acceptance before they are placed</li>
            </ul>
            <p className="mt-3">Please note that disabling certain cookies may affect the functionality of our website. Consult your browser's help documentation for instructions on managing cookies.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">5. Cookie Consent</h2>
            <p>By continuing to use our website, you consent to our use of cookies as described in this policy. You may withdraw your consent at any time by adjusting your browser settings or contacting us.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">6. Updates to This Policy</h2>
            <p>We may update this Cookie Policy from time to time. Any changes will be posted on this page with a revised effective date.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">7. Contact Us</h2>
            <p>If you have questions about our use of cookies, contact us at:<br />
              <a href="mailto:hello@mindsystemcoach.com" className="text-primary hover:underline">hello@mindsystemcoach.com</a>
            </p>
          </section>

        </div>
      </main>

      <Footer />
    </div>
  );
}

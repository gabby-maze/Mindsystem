import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ReservationModal } from "@/components/ReservationModal";

export default function AccessibilityStatement() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="bg-background text-foreground min-h-screen font-sans">
      <Navigation onReserveClick={() => setModalOpen(true)} />
      <ReservationModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />

      <main className="max-w-3xl mx-auto px-6 pt-36 pb-24">
        <h1 className="text-4xl md:text-5xl font-serif text-primary mb-4">Accessibility Statement</h1>
        <p className="text-muted-foreground text-sm mb-12">Effective Date: March 23, 2026</p>

        <div className="space-y-10 text-muted-foreground leading-relaxed">

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">Our Commitment</h2>
            <p>MindSystem is committed to ensuring that our website and services are accessible to everyone, including people with disabilities. We strive to meet or exceed the standards set forth in the Web Content Accessibility Guidelines (WCAG) 2.1 at Level AA.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">Measures We Take</h2>
            <p className="mb-3">To support accessibility, MindSystem takes the following measures:</p>
            <ul className="list-disc list-inside space-y-2 pl-2">
              <li>Include accessibility as part of our design and development process</li>
              <li>Use semantic HTML elements to convey proper structure and meaning</li>
              <li>Provide text alternatives for non-text content (images, icons)</li>
              <li>Ensure sufficient color contrast between text and backgrounds</li>
              <li>Design interactive elements to be operable via keyboard navigation</li>
              <li>Test our site with assistive technologies including screen readers</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">Known Limitations</h2>
            <p>While we work toward full accessibility, some content or features on our site may not yet meet all WCAG 2.1 AA criteria. We are actively working to identify and resolve these gaps. If you encounter a barrier, please let us know so we can address it.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">Assistive Technology Compatibility</h2>
            <p className="mb-3">Our website is designed to be compatible with the following assistive technologies:</p>
            <ul className="list-disc list-inside space-y-2 pl-2">
              <li>Screen readers (NVDA, JAWS, VoiceOver, TalkBack)</li>
              <li>Keyboard-only navigation</li>
              <li>Browser zoom up to 200% without loss of content or functionality</li>
              <li>High-contrast display modes</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">Third-Party Content</h2>
            <p>Some content on our site is provided by third-party services (e.g., embedded videos, form tools). We cannot fully control the accessibility of third-party content, but we select providers who demonstrate a commitment to accessible design where possible.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">Feedback and Contact</h2>
            <p className="mb-3">We welcome feedback on the accessibility of our website. If you experience any barriers or have suggestions for improvement, please contact us:</p>
            <ul className="list-none space-y-1 pl-0">
              <li><span className="text-foreground font-medium">Email:</span> <a href="mailto:hello@mindsystemcoach.com" className="text-primary hover:underline">hello@mindsystemcoach.com</a></li>
            </ul>
            <p className="mt-3">We aim to respond to accessibility inquiries within 2 business days and will work with you to provide information or content in an accessible format upon request.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">Formal Complaints</h2>
            <p>If you are not satisfied with our response, you may contact your local accessibility regulatory authority or disability rights organization for further assistance.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">Updates to This Statement</h2>
            <p>This statement is reviewed and updated regularly as we continue to improve our accessibility. Last reviewed: March 23, 2026.</p>
          </section>

        </div>
      </main>

      <Footer />
    </div>
  );
}

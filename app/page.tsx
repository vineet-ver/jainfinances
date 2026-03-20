import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/sections/hero-section";
import { InquirySection } from "@/components/sections/inquiry-section";
import { ServicesSection } from "@/components/sections/services-section";
import { ShowcaseSection } from "@/components/sections/showcase-section";
import { TrustSection } from "@/components/sections/trust-section";
import { WhatsAppConcierge } from "@/components/whatsapp-concierge";
import { CONTACT } from "@/lib/constants";

export default function Home() {
  return (
    <div className="relative overflow-x-clip">
      <Navbar />
      <main>
        <HeroSection />
        <ServicesSection />
        <ShowcaseSection />
        <TrustSection />
        <InquirySection />
      </main>

      <footer className="border-t border-[--brand-border] px-6 py-10 md:px-10">
        <div className="mx-auto grid max-w-7xl gap-4 text-sm text-[--text-secondary] md:grid-cols-3">
          <p>{CONTACT.phone}</p>
          <p>{CONTACT.email}</p>
          <p>{CONTACT.address}</p>
        </div>
      </footer>

      <WhatsAppConcierge />
    </div>
  );
}

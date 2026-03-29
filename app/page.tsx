import { Navbar } from "@/components/navbar";
import { FundingEligibilitySection } from "@/components/sections/funding-eligibility-section";
import { FundingFaqSection } from "@/components/sections/funding-faq-section";
import { FundingRiskSection } from "@/components/sections/funding-risk-section";
import { HeroSection } from "@/components/sections/hero-section";
import { InquirySection } from "@/components/sections/inquiry-section";
import { OwnerSection } from "@/components/sections/owner-section";
import { ManagementContactSection } from "@/components/sections/management-contact-section";
import { ServicesCtaRibbon } from "@/components/sections/services-cta-ribbon";
import { PrivateFundingSection } from "@/components/sections/private-funding-section";
import { ServicesSection } from "@/components/sections/services-section";

import { TrustSection } from "@/components/sections/trust-section";
import { WhatsAppConcierge } from "@/components/whatsapp-concierge";
import { QuickActions } from "@/components/ui/quick-actions";
import { SectionWipe } from "@/components/ui/section-wipe";
import { CONTACT } from "@/lib/constants";
import { Mail, MapPin, Phone } from "lucide-react";

export default function Home() {
  return (
    <div className="relative overflow-x-clip">
      <Navbar />
      <main>
        <HeroSection />
        <SectionWipe>
          <ServicesSection />
        </SectionWipe>
        <ServicesCtaRibbon />
        <SectionWipe>
          <PrivateFundingSection />
        </SectionWipe>
        <SectionWipe>
          <FundingEligibilitySection />
        </SectionWipe>
        <SectionWipe>
          <FundingRiskSection />
        </SectionWipe>
        <SectionWipe>
          <FundingFaqSection />
        </SectionWipe>

        <SectionWipe>
          <TrustSection />
        </SectionWipe>
        <SectionWipe>
          <OwnerSection />
        </SectionWipe>
        <ManagementContactSection />
        <SectionWipe>
          <InquirySection />
        </SectionWipe>
      </main>

      {/* ═══ PREMIUM FOOTER ═══ */}
      <footer className="border-t border-[--glass-border] px-6 py-16 md:px-10">
        <div className="mx-auto max-w-7xl">
          {/* Top: Brand + Links */}
          <div className="flex flex-col gap-10 md:flex-row md:justify-between">
            <div className="max-w-sm">
              <div className="flex items-center gap-2">
                <span className="gold-badge inline-flex h-10 w-10 items-center justify-center rounded-xl text-sm font-black">
                  JFCS
                </span>
                <span className="font-display text-xl font-bold text-[--text-primary]">Jain Financial Consultancy Service</span>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-[--text-secondary]">
                Your trusted partner for fast loans, private funding, and expert financial advice. Serving families and businesses across India.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-16">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-[--gold]">Quick Links</p>
                <div className="mt-4 space-y-3">
                  <a href="#services" className="block text-sm text-[--text-secondary] transition hover:text-[--text-primary]">Services</a>
                  <a href="#private-funding" className="block text-sm text-[--text-secondary] transition hover:text-[--text-primary]">Private Funding</a>
                  <a href="#trust" className="block text-sm text-[--text-secondary] transition hover:text-[--text-primary]">Trust</a>
                  <a href="#inquiry" className="block text-sm text-[--text-secondary] transition hover:text-[--text-primary]">Contact Us</a>
                </div>
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-[--gold]">Contact</p>
                <div className="mt-4 space-y-3">
                  <a href={`tel:${CONTACT.phone}`} className="flex items-center gap-2 text-sm text-[--text-secondary] transition hover:text-[--text-primary]">
                    <Phone size={14} className="text-[--gold]" /> {CONTACT.phone}
                  </a>
                  <a href={`tel:${CONTACT.phone2}`} className="flex items-center gap-2 text-sm text-[--text-secondary] transition hover:text-[--text-primary]">
                    <Phone size={14} className="text-[--gold]" /> {CONTACT.phone2}
                  </a>
                  <a href={`mailto:${CONTACT.email}`} className="flex items-start gap-2 text-sm text-[--text-secondary] transition hover:text-[--text-primary] break-all">
                    <Mail size={14} className="mt-0.5 shrink-0 text-[--gold]" /> <span>{CONTACT.email}</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom row */}
          <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-[--glass-border] pt-8 md:flex-row">
            <div className="flex items-center gap-2 text-xs text-[--text-muted]">
              <MapPin size={14} className="text-[--gold]" />
              {CONTACT.address}
            </div>
            <p className="text-xs text-[--text-muted]">
              © {new Date().getFullYear()} Jain Financial Consultancy Service. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      <WhatsAppConcierge />
      <QuickActions />
    </div>
  );
}

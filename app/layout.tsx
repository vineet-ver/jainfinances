import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import { AppProviders } from "@/components/providers/app-providers";
import "./globals.css";

const display = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const body = Manrope({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://jfc-service.vercel.app"),
  title: "Jain Financial Consultancy Service",
  description:
    "Premium financial consultancy for loan services, real estate strategy, and private funding for discerning clients.",
  openGraph: {
    title: "Jain Financial Consultancy Service",
    description:
      "Pioneering financial excellence with concierge-grade advisory in loans, real estate, and private funding.",
    url: "https://jfc-service.vercel.app",
    siteName: "Jain Financial Consultancy Service",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jain Financial Consultancy Service",
    description:
      "Private, high-trust financial advisory for high-value decisions in India.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} h-full antialiased`} suppressHydrationWarning>
      <body className="min-h-full bg-[--bg] font-body text-[--text-primary]">
        <AppProviders>{children}</AppProviders>
      </body>
    </html>
  );
}

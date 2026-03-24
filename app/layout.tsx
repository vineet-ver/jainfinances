import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import { AppProviders } from "@/components/providers/app-providers";
import "./globals.css";

const display = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const body = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://jfc-service.vercel.app"),
  title: "Jain Financial Consultancy — Easy Loans, Private Funding & Finance Help",
  description:
    "Get fast business loans, personal loans, and private funding with Jain Financial Consultancy. Trusted by 1000+ clients across India. Simple process, quick approvals.",
  openGraph: {
    title: "Jain Financial Consultancy — Your Trusted Finance Partner",
    description:
      "Easy loans, private funding, and expert financial help for families and businesses across India. 500 Crore+ disbursed.",
    url: "https://jfc-service.vercel.app",
    siteName: "Jain Financial Consultancy",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jain Financial Consultancy — Easy Loans & Private Funding",
    description:
      "Trusted by 1000+ Indian clients. Fast approvals, simple process, expert guidance.",
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

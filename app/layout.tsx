import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const montserrat = Montserrat({ 
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.cryptopulsenow.xyz'),
  title: {
    default: "Crypto Pulse Now | Expert Regulatory & Market Analysis",
    template: "%s | Crypto Pulse Now",
  },
  description: "Professional analysis of digital assets, blockchain technology, and crypto regulations, grounded in legal precedents and ECHR standards.",
  keywords: ["Crypto News", "Blockchain Regulation", "Bitcoin Analysis", "Crypto Law", "ECHR Crypto"],
  authors: [{ name: "Crypto Pulse Now" }],
  robots: "index, follow",

  // KROK 2: Konfiguracja pod Social Media (Facebook, LinkedIn, Twitter)
  openGraph: {
    title: "Crypto Pulse Now | Intelligence for the Digital Asset Market",
    description: "In-depth reporting and professional regulatory analysis of the crypto industry.",
    url: "https://www.cryptopulsenow.xyz",
    siteName: "Crypto Pulse Now",
    images: [
      {
        url: "/og-image.jpg", // Plik musi być w folderze /public
        width: 1200,
        height: 630,
        alt: "Crypto Pulse Now - Expert Analysis",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Crypto Pulse Now",
    description: "Expert crypto intelligence and legal analysis.",
    images: ["/og-image.jpg"],
    // creator: "@TwojProfilTwitter", // Opcjonalnie dodaj swój nick
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} antialiased bg-[#f1f1f1]`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
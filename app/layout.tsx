import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer"

const montserrat = Montserrat({ 
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  variable: "--font-montserrat",
});

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
        <Footer /> {/* Dodaj stopkę tutaj */}
      </body>
    </html>
  );
}
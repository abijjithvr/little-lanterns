import type { Metadata } from "next";
import { Fredoka, Nunito } from "next/font/google";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import Providers from "./providers";
import "./globals.css";

const fredoka = Fredoka({
  subsets: ["latin"],
  variable: "--font-fredoka",
});

const nunito = Nunito({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Little Lanterns | Small plushies, big comfort.",
  description: "Little Lanterns creates handmade crochet friends stitched with love.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={fredoka.variable}>
      <body className={nunito.className}>
        <Providers>
          <div className="min-h-screen bg-[var(--cream)] text-[var(--brown)]">
            <Navbar />
            {children}
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
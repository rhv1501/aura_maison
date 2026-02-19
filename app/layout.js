import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import dynamic from "next/dynamic";
import Breadcrumbs from "@/components/Breadcrumbs";

const Navbar = dynamic(() => import("@/components/Navbar"), {
  loading: () => (
    <div className="h-14 sm:h-16 border-b border-[var(--border)] bg-[var(--surface)]" />
  ),
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Auré Maison - Premium Planters",
  description:
    "Discover premium planters that blend nature, design, and balance for your living spaces.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        <div className="min-h-screen">
          <div className="border-b border-[var(--border)] bg-[var(--surface)]">
            <div className="max-w-7xl mx-auto px-6 py-3">
              <Breadcrumbs />
            </div>
          </div>
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}

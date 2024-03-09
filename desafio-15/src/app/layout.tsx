import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "@/styles/globals.css";
import Navigation from "@/components/Navigation/Index";
import Footer from "@/components/Footer/Index";

const space_grotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["700"],
  variable: "--font-space_grotesk",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
});
export const metadata: Metadata = {
  title: {
    default: "Residencial",
    template: "Residencial | s%",
  },
  keywords: "Residencial",
  description: "Residencial",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body
        className={`${space_grotesk.variable} ${inter.className} bg-grey-900 text-grey-100`}
      >
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}

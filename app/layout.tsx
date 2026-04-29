import type { Metadata } from "next";
import { Cormorant_Garamond, Montserrat, Aboreto } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const aboreto = Aboreto({
  variable: "--font-aboreto",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Elis Family Law",
  description: "Divorce & Family Law Attorneys",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${montserrat.variable} ${aboreto.variable}`}>
      <body className="min-h-full flex flex-col bg-[#16191F]">{children}</body>
    </html>
  );
}

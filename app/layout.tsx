import type { Metadata } from "next";
import { Cormorant_Garamond, Montserrat, Aboreto } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const aboreto = Aboreto({
  variable: "--font-aboreto",
  subsets: ["latin"],
  display: "swap",
  weight: "400",
});

const BASE_URL = "https://elisfamilylaw.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Elis Family Law | Board-Certified Family Law Specialists in Durham, NC",
    template: "%s | Elis Family Law",
  },
  description:
    "Elis Family Law provides expert family law representation in Durham, Raleigh, Cary, and throughout North Carolina. Led by board-certified specialists in divorce, child custody, alimony, and estate planning.",
  keywords: [
    "family law",
    "divorce attorney",
    "child custody",
    "Durham family lawyer",
    "Raleigh divorce lawyer",
    "North Carolina family law",
    "board-certified family law specialist",
    "alimony",
    "child support",
    "property division",
    "estate planning",
    "prenuptial agreement",
    "domestic violence attorney",
    "Cary family law",
    "Triangle divorce attorney",
  ],
  authors:   [{ name: "Elis Family Law, P.L.L.C." }],
  creator:   "Elis Family Law",
  publisher: "Elis Family Law, P.L.L.C.",
  formatDetection: {
    email:     false,
    address:   true,
    telephone: true,
  },
  openGraph: {
    type:        "website",
    locale:      "en_US",
    url:         BASE_URL,
    siteName:    "Elis Family Law",
    title:       "Elis Family Law | Board-Certified Family Law Specialists in Durham, NC",
    description: "Expert family law representation in Durham, Raleigh, Cary, and throughout North Carolina. Led by board-certified specialists.",
    images: [
      {
        url:    "/images/hero-bg.png",
        width:  1200,
        height: 630,
        alt:    "Elis Family Law — Your Future Starts Here",
      },
    ],
  },
  twitter: {
    card:        "summary_large_image",
    title:       "Elis Family Law | Board-Certified Family Law Specialists in Durham, NC",
    description: "Expert family law representation in Durham, Raleigh, Cary, and throughout North Carolina. Board-certified specialists.",
    images:      ["/images/hero-bg.png"],
  },
  robots: {
    index:  true,
    follow: true,
    googleBot: {
      index:                true,
      follow:               true,
      "max-video-preview":  -1,
      "max-image-preview":  "large",
      "max-snippet":        -1,
    },
  },
  alternates: {
    canonical: BASE_URL,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${montserrat.variable} ${aboreto.variable}`}
    >
      <head>
        {/* Favicons */}
        <link rel="icon"             type="image/png" sizes="32x32"  href="/images/deer-logo.png" />
        <link rel="icon"             type="image/png" sizes="16x16"  href="/images/deer-logo.png" />
        <link rel="apple-touch-icon" sizes="180x180"                 href="/images/deer-logo.png" />

        {/* Microsoft */}
        <meta name="msapplication-TileImage" content="/images/deer-logo.png" />
        <meta name="msapplication-TileColor" content="#16191F" />

        {/* PWA */}
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#16191F" />
      </head>
      <body className="min-h-full flex flex-col bg-[#16191F]">
        {children}
      </body>
    </html>
  );
}

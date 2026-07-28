import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://buildwisecalc.com"),
  title: {
    default: "BuildWise Calculators",
    template: "%s | BuildWise",
  },
  description:
    "Free project planning calculators for paint, tile, flooring, concrete, and cost. Practical purchase quantities, transparent formulas, and no signup.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "/",
    siteName: "BuildWise Calculators",
    title: "BuildWise Calculators",
    description:
      "Simple, transparent material and project cost calculators with practical purchase quantities.",
  },
  other: {
    "codex-preview": "development",
  },
  icons: {
    icon: "/favicon-bw.svg",
    shortcut: "/favicon-bw.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3478311488171304"
          crossOrigin="anonymous"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "ISSBAH-AAIRAH | Elite Digital Marketing Agency",
  description:
    "Elite digital marketing: SEO, PPC, social, content, and growth strategies for brands that demand market dominance.",
  icons: {
    icon: "/images/arnytics llc (2).png",
    shortcut: "/images/arnytics llc (2).png",
    apple: "/images/arnytics llc (2).png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        {/* eslint-disable-next-line @next/next/no-page-custom-font -- Material Symbols not available via next/font */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap"
        />
      </head>
      <body
        className={`${inter.variable} font-body-md text-body-md antialiased selection:bg-primary-container selection:text-on-primary-container`}
      >
        {children}
      </body>
    </html>
  );
}

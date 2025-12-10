// BUILT BY DAVID REN FOR CS391 FINAL PROJECT

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";


// configuring geist sans font
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
// geist mono font
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
// page metadata for browser tab as well as SEO
export const metadata: Metadata = {
  title: "Launch",
  description: "View Upcoming IPOs and Analyzations",
};
// wrapping all pages in app
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
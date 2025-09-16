// app/layout.tsx

import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import "./globals.css";
import NavBar from "./components/Navbar";
import { Providers } from './providers'; // Import the new provider

export const metadata: Metadata = {
  title: "TNCSP",
  description: "An applied public health project leveraging open data for community-driven awareness.",
  icons: { icon: '/tncsp-circle-logo.png' },
};

export default function RootLayout({ children }: { children: React.ReactNode; }) {
  return (
    <html lang="en" className={`${GeistSans.variable} !scroll-smooth`}>
      <body>
        <Providers> {/* Wrap your content with the Geist provider */}
          <NavBar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
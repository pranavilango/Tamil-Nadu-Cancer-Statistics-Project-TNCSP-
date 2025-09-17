// app/layout.tsx

import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import "./globals.css";
import NavBar from "./components/Navbar";
import Footer from "./components/Footer"; // Import the Footer component
import { Providers } from './providers';

export const metadata: Metadata = {
  title: "TNCSP",
  description: "An applied public health project leveraging open data for community-driven awareness.",
  icons: { icon: '/tncsp-circle-logo.webp' },
};

export default function RootLayout({ children }: { children: React.ReactNode; }) {
  return (
    <html lang="en" className={`${GeistSans.variable} !scroll-smooth`}>
      <body>
        <Providers>
          <NavBar />
          {children}
          <Footer /> {/* Add the Footer component here */}
        </Providers>
      </body>
    </html>
  );
}
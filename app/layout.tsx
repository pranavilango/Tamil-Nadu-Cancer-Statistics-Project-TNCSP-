// app/layout.tsx

import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import NavBar from "./components/Navbar"; // Assuming your Navbar is also global

const poppins = Poppins({ subsets: ['latin'], weight: ['400'] })

export const metadata: Metadata = {
  title: "TNCSP",
  description: "An applied public health project leveraging open data for community-driven awareness.",
  icons: {
    icon: '/tncsp-circle-logo.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body className={poppins.className}>
        {/* The solid base color for the entire site */}
        <div className="fixed inset-0 -z-20 bg-white dark:bg-black" />
        
        <NavBar />
        
        {children}
      </body>
    </html>
  );
}
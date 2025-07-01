import "./globals.css";
import { Poppins } from 'next/font/google'
import Navbar from "./components/Navbar"

const poppins = Poppins({ subsets: ['latin'], weight: ['400'] })

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className}`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}

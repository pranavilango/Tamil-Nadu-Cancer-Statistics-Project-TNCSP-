'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function NavBar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navLinks = [
        { href: "/", label: "home" },
        { href: "/map", label: "map" },
        { href: "/impact", label: "impact" },
        { href: "/guide", label: "guide" },
        { href: "/report", label: "report" }
    ];

    const handleLinkClick = () => {
        setIsMenuOpen(false);
    };

    return (
        <>
            <div className="fixed top-4 md:top-6 left-1/2 transform -translate-x-1/2 w-[95%] max-w-4xl z-50">
                {/* --- CHANGE 1: Switched to a translucent white fill --- */}
                <div className="w-full h-[3.75rem] px-6 flex items-center justify-between
                                bg-white/20 backdrop-blur-xl
                                border border-white/30
                                shadow-lg rounded-full">
                    {/* Logo/Brand Name */}
                    <Link href="/" onClick={handleLinkClick}>
                        {/* --- CHANGE 2: Text color updated to dark for contrast --- */}
                        <span className="flex items-center gap-2 text-[1.5rem] text-slate-800 font-semibold leading-none">
                            tncsp
                        </span>
                    </Link>

                    {/* Desktop Navigation Links */}
                    <div className="hidden md:flex items-center space-x-2 h-full">
                        {navLinks.map((link) => (
                            <Link key={link.href} href={link.href}>
                                {/* --- CHANGE 2 & 3: Darker text, new hover effect for light theme --- */}
                                <span className="text-[1rem] text-slate-700 cursor-pointer transition-colors duration-300
                                                 px-4 py-1.5 rounded-full hover:bg-black/5 hover:text-slate-900">
                                    {link.label}
                                </span>
                            </Link>
                        ))}
                    </div>

                    {/* Mobile Menu Button (Hamburger) */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            aria-label="Toggle menu"
                            // --- CHANGE 2: Icon color is now dark ---
                            className="p-2 rounded-md text-slate-800 transition-transform duration-300 hover:scale-110"
                        >
                            {isMenuOpen ? (
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            ) : (
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* --- CHANGE 4: Mobile menu now has a light glass overlay --- */}
            <div
                className={`md:hidden fixed inset-0 w-full h-screen bg-white/30 backdrop-blur-2xl z-40 transition-opacity duration-300 ease-in-out ${
                    isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
                }`}
            >
                <div className="flex flex-col items-center justify-center h-full space-y-8">
                    {navLinks.map((link) => (
                        <Link key={link.href} href={link.href}>
                            <span
                                onClick={handleLinkClick}
                                // --- CHANGE 2: Dark text for mobile links ---
                                className="text-3xl font-medium text-slate-800 cursor-pointer transition-transform duration-300 hover:scale-110"
                            >
                                {link.label}
                            </span>
                        </Link>
                    ))}
                </div>
            </div>
        </>
    );
}
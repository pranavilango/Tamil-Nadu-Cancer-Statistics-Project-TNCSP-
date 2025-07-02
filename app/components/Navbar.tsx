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
    ];

    return (
        <>
            <div className="fixed top-0 left-1/2 transform -translate-x-1/2 w-full z-10000 backdrop-blur-md">
                <div className="w-full h-[3.5rem] px-4 md:px-6 flex items-center justify-between bg-white/80 shadow-md">
                    {/* Logo/Brand Name */}
                    <Link href="/" onClick={() => setIsMenuOpen(false)}>
                        <span className="flex items-center gap-2 text-[1.25rem] text-black font-semibold leading-none">
                            tncsp
                        </span>
                    </Link>

                    {/* Desktop Navigation Links */}
                    <div className="hidden md:flex items-center space-x-10 h-full">
                        {navLinks.map((link) => (
                            <Link key={link.href} href={link.href}>
                                {/* CHANGE 1 & 2: Removed 'capitalize' and 'hover:text-gray-700' */}
                                <span className="text-[1rem] text-black cursor-pointer transition hover:underline underline-offset-4 duration-200">
                                    {link.label}
                                </span>
                            </Link>
                        ))}
                    </div>

                    {/* Mobile Menu Button (Hamburger) */}
                    <div className="md:hidden">
                        {/* CHANGE 3: Removed focus ring classes */}
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            aria-label="Toggle menu"
                            className="p-2 rounded-md text-black"
                        >
                            {isMenuOpen ? (
                                // CHANGE 3: More elegant close (X) icon with a thinner stroke
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            ) : (
                                // Hamburger Icon
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Panel */}
            <div
                className={`md:hidden fixed top-[3.5rem] left-0 w-full bg-white shadow-lg z-9999 transition-transform duration-300 ease-in-out ${
                    isMenuOpen ? 'translate-y-0' : '-translate-y-full'
                }`}
            >
                <div className="flex flex-col items-center space-y-6 py-8">
                    {navLinks.map((link) => (
                        <Link key={link.href} href={link.href}>
                             {/* CHANGE 1 & 2: Removed 'capitalize' and 'hover:text-gray-700' */}
                            <span
                                onClick={() => setIsMenuOpen(false)} // Close menu on link click
                                className="text-lg text-black cursor-pointer"
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
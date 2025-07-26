'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function NavBar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isDesktopResourcesOpen, setIsDesktopResourcesOpen] = useState(false);
    const [isMobileResourcesOpen, setIsMobileResourcesOpen] = useState(false);

    const mainLinks = [
        { href: "/", label: "home" },
        { href: "/impact", label: "impact" },
        { href: "/hospitals", label: "hospitals" }
    ];

    const resourceLinks = [
        { href: "/map", label: "map" },
        { href: "/guide", label: "guide" }
    ];

    const handleLinkClick = () => {
        setIsMenuOpen(false);
        setIsMobileResourcesOpen(false);
    };

    const toggleMobileResources = (e: React.MouseEvent) => {
        e.stopPropagation();
        setIsMobileResourcesOpen(!isMobileResourcesOpen);
    };

    return (
        <>
            {/* --- Main Navbar Container --- */}
            <div className="fixed top-4 md:top-6 left-1/2 transform -translate-x-1/2 w-[95%] max-w-4xl z-50">
                <div className="w-full h-[3.75rem] px-6 flex items-center justify-between
                                bg-white/60 backdrop-blur-xl
                                border border-white/30
                                shadow-lg rounded-full">
                    
                    <Link href="/" onClick={handleLinkClick} className="flex-shrink-0">
                        <span className="flex items-center gap-2 text-[1.5rem] text-slate-800 font-semibold leading-none">
                            tncsp
                        </span>
                    </Link>

                    {/* Desktop Navigation Links */}
                    <div className="hidden md:flex items-center space-x-2 h-full">
                        {mainLinks.map((link) => (
                            <Link href={link.href} key={link.href}>
                                <span className="text-[1rem] text-slate-700 cursor-pointer transition-colors duration-300
                                                 px-4 py-1.5 rounded-full hover:bg-black/5 hover:text-slate-900">
                                    {link.label}
                                </span>
                            </Link>
                        ))}
                        
                        <div 
                            className="relative h-full flex items-center"
                            onMouseEnter={() => setIsDesktopResourcesOpen(true)}
                            onMouseLeave={() => setIsDesktopResourcesOpen(false)}
                        >
                            {/* --- CHANGE 1: Perfect alignment and new SVG for desktop --- */}
                            <span className="text-[1rem] text-slate-700 cursor-pointer transition-colors duration-300
                                             px-4 py-1.5 rounded-full hover:bg-black/5 hover:text-slate-900 flex items-center gap-1.5">
                                resources
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className={`h-4 w-4 transition-transform duration-300 ${isDesktopResourcesOpen ? 'rotate-180' : ''}`}
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2.5}
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                </svg>
                            </span>

                            <div className={`absolute top-full w-40 left-1/2 -translate-x-1/2 pt-2
                                            transition-all duration-300 ease-in-out
                                            ${isDesktopResourcesOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'}`}>
                                
                                <div className="bg-white/70 backdrop-blur-xl border border-white/30 rounded-xl shadow-xl">
                                    <div className="p-2">
                                        {resourceLinks.map((link) => (
                                            <Link key={link.href} href={link.href} onClick={() => setIsDesktopResourcesOpen(false)}>
                                                <span className="block text-slate-700 text-center text-[1rem] py-1.5 px-2 rounded-md
                                                                cursor-pointer hover:bg-black/5 hover:text-slate-900">
                                                    {link.label}
                                                </span>
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Mobile Menu Button (Hamburger) */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            aria-label="Toggle menu"
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

            {/* --- Mobile Menu --- */}
            <div
                className={`md:hidden fixed inset-0 w-full h-screen bg-white/30 backdrop-blur-2xl z-40 transition-opacity duration-300 ease-in-out ${
                    isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
                }`}
            >
                <div className="flex flex-col items-center justify-center h-full space-y-6 text-center">
                    {mainLinks.map((link) => (
                        <Link key={link.href} href={link.href} onClick={handleLinkClick}>
                            <span className="text-3xl font-medium text-slate-800 cursor-pointer">
                                {link.label}
                            </span>
                        </Link>
                    ))}
                    
                    <div>
                        {/* --- CHANGE 2: Perfect alignment and new SVG for mobile --- */}
                        <div
                            onClick={toggleMobileResources}
                            className="text-3xl font-medium text-slate-800 cursor-pointer flex items-center gap-2"
                        >
                            resources
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className={`h-6 w-6 transition-transform duration-300 ${isMobileResourcesOpen ? 'rotate-180' : ''}`}
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2.5}
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                            </svg>
                        </div>
                        
                        <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isMobileResourcesOpen ? 'max-h-40 mt-4' : 'max-h-0'}`}>
                            <div className="flex flex-col items-center space-y-4">
                                {resourceLinks.map((link) => (
                                    <Link key={link.href} href={link.href} onClick={handleLinkClick}>
                                        <span className="text-2xl font-medium text-slate-700 cursor-pointer">
                                            {link.label}
                                        </span>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
'use client';

import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';

export default function NavBar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isDesktopResourcesOpen, setIsDesktopResourcesOpen] = useState(false);
    const [isMobileResourcesOpen, setIsMobileResourcesOpen] = useState(false);

    const pathname = usePathname();

    const mainLinks = {
        home: { href: "/", label: "Home" },
        impact: { href: "/impact", label: "Impact" },
        about: { href: "/about", label: "About Us" },
        join: { href: "/join", label: "Join" }
    };

    const resourceLinks = [
        { href: "/map", label: "Map" },
        { href: "/guide", label: "Guide" },
        { href: "/hospitals", label: "Hospitals" },
        { href: "/schemes", label: "Schemes" }
    ];

    const isResourcesPathActive = resourceLinks.some(link => link.href === pathname);

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
            {/* --- Main Navbar Container (Desktop) --- */}
            <div className="fixed top-0 left-0 right-0 h-16 bg-white/70 dark:bg-black/70 backdrop-blur-xl border-b border-slate-900/10 dark:border-slate-100/10 z-50">
                <div className="w-full max-w-7xl mx-auto h-full px-4 sm:px-6 lg:px-8 flex items-center justify-between">
                    
                    <Link href="/" onClick={handleLinkClick} className="flex-shrink-0">
                        <span className="flex items-center gap-2 text-xl text-slate-800 dark:text-slate-200 font-bold leading-none">
                            tncsp
                        </span>
                    </Link>

                    <div className="hidden md:flex items-center space-x-4 h-full">
                        <Link href={mainLinks.home.href}>
                            <span className={`text-sm cursor-pointer transition-colors duration-300 px-3 py-1.5 rounded-md
                                             ${pathname === mainLinks.home.href 
                                                ? 'font-semibold bg-slate-900/5 text-slate-900 dark:bg-slate-100/5 dark:text-slate-100' 
                                                : 'text-slate-600 hover:bg-slate-900/5 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-100/5 dark:hover:text-slate-100'
                                             }`}>
                                {mainLinks.home.label}
                            </span>
                        </Link>

                        <div 
                            className="relative h-full flex items-center"
                            onMouseEnter={() => setIsDesktopResourcesOpen(true)}
                            onMouseLeave={() => setIsDesktopResourcesOpen(false)}
                        >
                            <span className={`relative top-[1.5px] text-sm cursor-pointer transition-colors duration-300 px-3 py-1.5 rounded-md flex items-center gap-1.5
                                             ${isResourcesPathActive
                                                ? 'font-semibold bg-slate-900/5 text-slate-900 dark:bg-slate-100/5 dark:text-slate-100'
                                                : 'text-slate-600 hover:bg-slate-900/5 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-100/5 dark:hover:text-slate-100'
                                             }`}>
                                Resources
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

                            <div className={`absolute top-[90%] w-40 left-1/2 -translate-x-1/2 pt-2
                                            transition-all duration-300 ease-in-out
                                            ${isDesktopResourcesOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'}`}>
                                
                                <div className="bg-white/90 dark:bg-black/90 backdrop-blur-xl border border-slate-900/10 dark:border-slate-100/10 rounded-xl shadow-lg">
                                    <div className="p-2">
                                        {resourceLinks.map((link) => (
                                            <Link key={link.href} href={link.href} onClick={() => setIsDesktopResourcesOpen(false)}>
                                                <span className={`block text-center text-sm cursor-pointer py-1.5 px-2 rounded-md
                                                                ${pathname === link.href 
                                                                    ? 'font-semibold bg-slate-900/5 text-slate-900 dark:bg-slate-100/5 dark:text-slate-100'
                                                                    : 'text-slate-600 hover:bg-slate-900/5 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-100/5 dark:hover:text-slate-100'
                                                                }`}>
                                                    {link.label}
                                                </span>
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <Link href={mainLinks.impact.href}>
                             <span className={`text-sm cursor-pointer transition-colors duration-300 px-3 py-1.5 rounded-md
                                             ${pathname === mainLinks.impact.href 
                                                ? 'font-semibold bg-slate-900/5 text-slate-900 dark:bg-slate-100/5 dark:text-slate-100' 
                                                : 'text-slate-600 hover:bg-slate-900/5 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-100/5 dark:hover:text-slate-100'
                                             }`}>
                                {mainLinks.impact.label}
                            </span>
                        </Link>

                        <Link href={mainLinks.about.href}>
                             <span className={`text-sm cursor-pointer transition-colors duration-300 px-3 py-1.5 rounded-md
                                             ${pathname === mainLinks.about.href 
                                                ? 'font-semibold bg-slate-900/5 text-slate-900 dark:bg-slate-100/5 dark:text-slate-100' 
                                                : 'text-slate-600 hover:bg-slate-900/5 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-100/5 dark:hover:text-slate-100'
                                             }`}>
                                {mainLinks.about.label}
                            </span>
                        </Link>

                        <Link href={mainLinks.join.href}>
                            <span className={`text-sm font-semibold rounded-full px-4 py-1.5 transition-colors duration-300
                                            ${pathname === mainLinks.join.href 
                                                ? 'bg-slate-800 text-white dark:bg-slate-300 dark:text-slate-900'
                                                : 'bg-slate-900 text-white hover:bg-slate-700 dark:bg-slate-100 dark:text-slate-900 dark:hover:bg-slate-300'
                                            }`}>
                                {mainLinks.join.label}
                            </span>
                        </Link>
                    </div>

                    <div className="md:hidden">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            aria-label="Toggle menu"
                            className="p-2 rounded-md text-slate-800 dark:text-slate-200"
                        >
                             {isMenuOpen ? (
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            ) : (
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* --- Mobile Menu --- */}
            <div
                className={`md:hidden fixed inset-0 w-full h-screen bg-white/80 dark:bg-black/80 backdrop-blur-2xl z-40 transition-opacity duration-300 ease-in-out ${
                    isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
                }`}
            >
                <div className="flex flex-col items-center justify-center h-full space-y-6 text-center">
                    <Link href={mainLinks.home.href} onClick={handleLinkClick}>
                        <span className="text-3xl font-medium text-slate-800 dark:text-slate-200 cursor-pointer">
                            {mainLinks.home.label}
                        </span>
                    </Link>
                    
                    <div>
                        <div
                            onClick={toggleMobileResources}
                            className="text-3xl font-medium text-slate-800 dark:text-slate-200 cursor-pointer flex items-center gap-2"
                        >
                            Resources
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
                                        <span className="text-2xl font-medium text-slate-700 dark:text-slate-300 cursor-pointer">
                                            {link.label}
                                        </span>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>

                    <Link href={mainLinks.impact.href} onClick={handleLinkClick}>
                        <span className="text-3xl font-medium text-slate-800 dark:text-slate-200 cursor-pointer">
                            {mainLinks.impact.label}
                        </span>
                    </Link>

                    <Link href={mainLinks.about.href} onClick={handleLinkClick}>
                        <span className="text-3xl font-medium text-slate-800 dark:text-slate-200 cursor-pointer">
                            {mainLinks.about.label}
                        </span>
                    </Link>

                    <div className="pt-4">
                        <Link href={mainLinks.join.href} onClick={handleLinkClick}>
                            <span className="text-xl font-semibold text-white bg-slate-900 dark:bg-slate-100 dark:text-slate-900 rounded-full px-8 py-3 cursor-pointer transition-colors duration-300 hover:bg-slate-700 dark:hover:bg-slate-300">
                                {mainLinks.join.label}
                            </span>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}
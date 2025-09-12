// app/components/Navbar.tsx

'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

// --- Minimalistic Animated Theme Toggle ---
const ThemeToggle = () => {
    // Default to false (light mode) and let the effect handle the initial setting
    const [isDarkMode, setIsDarkMode] = useState(false);

    // Effect to set the initial theme from localStorage on client-side mount
    useEffect(() => {
        const theme = localStorage.getItem('theme');
        if (theme === 'dark') {
            document.documentElement.classList.add('dark');
            setIsDarkMode(true);
        } else {
            document.documentElement.classList.remove('dark');
            setIsDarkMode(false);
        }
    }, []);

    const toggleTheme = () => {
        setIsDarkMode(prevMode => {
            const newMode = !prevMode;
            if (newMode) {
                document.documentElement.classList.add('dark');
                localStorage.setItem('theme', 'dark');
            } else {
                document.documentElement.classList.remove('dark');
                localStorage.setItem('theme', 'light');
            }
            return newMode;
        });
    };

    return (
        <div 
            onClick={toggleTheme}
            // The track for the slider
            className={`flex items-center w-12 h-6 rounded-full p-1 cursor-pointer transition-colors duration-500 ease-in-out
                        ${isDarkMode ? 'justify-end bg-slate-800' : 'justify-start bg-slate-200'}`}
        >
            {/* The animated circle */}
            <motion.div
                layout
                transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                className={`w-4 h-4 rounded-full shadow-lg 
                            ${isDarkMode ? 'bg-slate-300' : 'bg-yellow-500'}`}
            />
        </div>
    );
};


// --- Main NavBar Component ---
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

    // Close mobile menu when screen resizes to desktop
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) { // md breakpoint
                setIsMenuOpen(false);
            }
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);


    return (
        <>
            {/* --- Main Navbar Container --- */}
            <div className="fixed top-0 left-0 right-0 h-16 bg-white/70 dark:bg-black/70 backdrop-blur-xl border-b border-slate-900/10 dark:border-slate-100/10 z-50">
                <div className="w-full max-w-7xl mx-auto h-full px-4 sm:px-6 lg:px-8 flex items-center justify-between">
                    
                    {/* LEFT: Logo */}
                    <Link href="/" onClick={handleLinkClick} className="flex-shrink-0">
                        <span className="flex items-center gap-2 text-xl text-slate-800 dark:text-slate-200 font-bold leading-none">
                            tncsp
                        </span>
                    </Link>

                    {/* CENTER: Desktop Navigation Links */}
                    <nav className="hidden md:flex items-center space-x-4 h-full absolute left-1/2 -translate-x-1/2">
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
                                <svg xmlns="http://www.w3.org/2000/svg" className={`h-4 w-4 transition-transform duration-300 ${isDesktopResourcesOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                </svg>
                            </span>

                            <div className={`absolute top-[90%] w-40 left-1/2 -translate-x-1/2 pt-2 transition-all duration-300 ease-in-out
                                            ${isDesktopResourcesOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'}`}>
                                <div className="bg-white/90 dark:bg-black/90 backdrop-blur-xl border border-slate-900/10 dark:border-slate-100/10 rounded-xl shadow-lg">
                                    <div className="p-2">
                                        {resourceLinks.map((link) => (
                                            <Link key={link.href} href={link.href} onClick={() => setIsDesktopResourcesOpen(false)}>
                                                <span className={`block text-center text-sm cursor-pointer py-1.5 px-2 rounded-md
                                                                ${pathname === link.href 
                                                                    ? 'font-semibold bg-slate-900/5 text-slate-900 dark:bg-slate-100/5 dark:text-slate-100'
                                                                    : 'text-slate-600 hover:bg-slate-900/5 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-100/5 dark:hover:text-slate-100'
                                                                }`}>{link.label}</span>
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
                                             }`}>{mainLinks.impact.label}</span>
                        </Link>

                        <Link href={mainLinks.about.href}>
                             <span className={`text-sm cursor-pointer transition-colors duration-300 px-3 py-1.5 rounded-md
                                             ${pathname === mainLinks.about.href 
                                                ? 'font-semibold bg-slate-900/5 text-slate-900 dark:bg-slate-100/5 dark:text-slate-100' 
                                                : 'text-slate-600 hover:bg-slate-900/5 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-100/5 dark:hover:text-slate-100'
                                             }`}>{mainLinks.about.label}</span>
                        </Link>
                    </nav>
                    
                    {/* RIGHT: Actions (Join Button & Theme Toggle) */}
                    <div className="hidden md:flex items-center gap-4">
                        <Link href={mainLinks.join.href}>
                            <span className={`text-sm font-semibold rounded-full px-4 py-1.5 transition-colors duration-300
                                            ${pathname === mainLinks.join.href 
                                                ? 'bg-slate-800 text-white dark:bg-slate-300 dark:text-slate-900'
                                                : 'bg-slate-900 text-white hover:bg-slate-700 dark:bg-slate-100 dark:text-slate-900 dark:hover:bg-slate-300'
                                            }`}>{mainLinks.join.label}</span>
                        </Link>
                        <ThemeToggle />
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu" className="p-2 rounded-md text-slate-800 dark:text-slate-200">
                             {isMenuOpen ? (
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
                            ) : (
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" /></svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* --- Mobile Menu --- */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}
                        className="md:hidden fixed inset-0 w-full h-screen bg-white/80 dark:bg-black/80 backdrop-blur-2xl z-40">
                        <div className="flex flex-col items-center justify-center h-full space-y-6 text-center">
                            <Link href={mainLinks.home.href} onClick={handleLinkClick}><span className="text-3xl font-medium text-slate-800 dark:text-slate-200">{mainLinks.home.label}</span></Link>
                            <div>
                                <div onClick={toggleMobileResources} className="text-3xl font-medium text-slate-800 dark:text-slate-200 cursor-pointer flex items-center gap-2">
                                    Resources
                                    <svg xmlns="http://www.w3.org/2000/svg" className={`h-6 w-6 transition-transform duration-300 ${isMobileResourcesOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" /></svg>
                                </div>
                                <AnimatePresence>
                                    {isMobileResourcesOpen && (
                                        <motion.div initial={{ height: 0, opacity: 0, marginTop: 0 }} animate={{ height: 'auto', opacity: 1, marginTop: '1rem' }} exit={{ height: 0, opacity: 0, marginTop: 0 }} transition={{ duration: 0.3, ease: "easeInOut" }} className="overflow-hidden">
                                            <div className="flex flex-col items-center space-y-4">
                                                {resourceLinks.map((link) => (
                                                    <Link key={link.href} href={link.href} onClick={handleLinkClick}><span className="text-2xl font-medium text-slate-700 dark:text-slate-300">{link.label}</span></Link>
                                                ))}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                            <Link href={mainLinks.impact.href} onClick={handleLinkClick}><span className="text-3xl font-medium text-slate-800 dark:text-slate-200">{mainLinks.impact.label}</span></Link>
                            <Link href={mainLinks.about.href} onClick={handleLinkClick}><span className="text-3xl font-medium text-slate-800 dark:text-slate-200">{mainLinks.about.label}</span></Link>
                            <div className="pt-4 flex flex-col items-center gap-8">
                                <Link href={mainLinks.join.href} onClick={handleLinkClick}><span className="text-xl font-semibold text-white bg-slate-900 dark:bg-slate-100 dark:text-slate-900 rounded-full px-8 py-3 transition-colors duration-300 hover:bg-slate-700 dark:hover:bg-slate-300">{mainLinks.join.label}</span></Link>
                                <ThemeToggle />
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
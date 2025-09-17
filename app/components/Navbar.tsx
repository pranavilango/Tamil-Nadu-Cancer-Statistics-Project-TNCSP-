// --- START OF FILE app/components/Navbar.tsx ---

'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Sun, Moon } from 'lucide-react';

// The elegant, circular ThemeToggle component (unchanged)
const ThemeToggle = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);
    useEffect(() => {
        const theme = localStorage.getItem('theme');
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        if (theme === 'dark' || (!theme && prefersDark)) {
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
        <button
            onClick={toggleTheme}
            className="relative h-8 w-8 rounded-full flex items-center justify-center border border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-slate-900 transition-colors hover:bg-slate-200 dark:hover:bg-slate-800"
            aria-label="Toggle theme"
        >
            <AnimatePresence mode="wait" initial={false}>
                <motion.div
                    key={isDarkMode ? 'moon' : 'sun'}
                    initial={{ opacity: 0, scale: 0.8, rotate: 90 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    exit={{ opacity: 0, scale: 0.8, rotate: -90 }}
                    transition={{ duration: 0.2, ease: 'easeInOut' }}
                    className="absolute text-slate-600 dark:text-slate-400"
                >
                    {isDarkMode ? <Moon size={18} /> : <Sun size={18} />}
                </motion.div>
            </AnimatePresence>
        </button>
    );
};


// --- Main NavBar Component ---
export default function NavBar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isDesktopResourcesOpen, setIsDesktopResourcesOpen] = useState(false);
    const pathname = usePathname();

    const mainLinks = {
        home: { href: "/", label: "Home" },
        impact: { href: "/impact", label: "Impact" },
        about: { href: "/about", label: "About Us" },
        join: { href: "/join", label: "Join Us" }
    };

    const resourceLinks = [
        { href: "/guide", label: "Cancer Guide" },
        { href: "/hospitals", label: "Hospital Finder" },
        { href: "/map", label: "TN Data Atlas" },
        { href: "/schemes", label: "Support Schemes" },
    ];

    const isResourcesPathActive = resourceLinks.some(link => link.href === pathname);
    const handleLinkClick = () => { setIsMenuOpen(false); };

    useEffect(() => {
        const handleResize = () => { if (window.innerWidth >= 768) { setIsMenuOpen(false); } };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);


    return (
        <>
            <header className="fixed top-0 left-0 right-0 w-full h-16 bg-white/70 dark:bg-black/70 backdrop-blur-xl z-50 border-b border-slate-900/10 dark:border-slate-50/[0.06]">
                <div className="w-full max-w-7xl mx-auto h-full px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-full md:grid md:grid-cols-3">
                        
                        {/* Column 1: Logo (Aligned Left) */}
                        <div className="justify-self-start">
                            <Link href="/" onClick={handleLinkClick} className="flex items-center gap-2">
                                <Image src="/tncsp-circle-logo.webp" alt="TNCSP Logo" width={28} height={28} />
                                <span className="text-lg text-slate-900 dark:text-slate-100 font-bold tracking-tight">TNCSP</span>
                            </Link>
                        </div>

                        {/* Column 2: Navigation (Aligned Center) */}
                        <nav className="hidden md:flex justify-self-center items-center gap-x-1">
                            <Link href={mainLinks.home.href} className={`relative px-3 py-1.5 text-sm rounded-md transition-colors duration-200 ${pathname === mainLinks.home.href ? 'font-semibold bg-brand-lavender/20 text-slate-900 dark:text-slate-100' : 'text-slate-600 hover:bg-slate-900/5 dark:text-slate-400 dark:hover:bg-slate-50/5 hover:text-slate-900 dark:hover:text-slate-100'}`}>
                                {mainLinks.home.label}
                            </Link>
                            <div className="relative h-full flex items-center" onMouseEnter={() => setIsDesktopResourcesOpen(true)} onMouseLeave={() => setIsDesktopResourcesOpen(false)}>
                                <div className={`relative px-3 py-1.5 text-sm flex items-center gap-1.5 cursor-pointer rounded-md transition-colors duration-200 ${isResourcesPathActive ? 'font-semibold bg-brand-lavender/20 text-slate-900 dark:text-slate-100' : 'text-slate-600 hover:bg-slate-900/5 dark:text-slate-400 dark:hover:bg-slate-50/5 hover:text-slate-900 dark:hover:text-slate-100'}`}>
                                    Resources
                                    <ChevronDown size={16} className={`transition-transform duration-300 ${isDesktopResourcesOpen ? 'rotate-180' : ''}`} />
                                </div>
                                <AnimatePresence>
                                {isDesktopResourcesOpen && (
                                    <motion.div initial={{ opacity: 0, scale: 0.95, y: -10 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.95, y: -10 }} transition={{ duration: 0.2, ease: 'easeOut' }} className="absolute top-full w-48 left-1/2 -translate-x-1/2 pt-2">
                                        <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border border-slate-900/10 dark:border-slate-50/10 rounded-xl shadow-lg">
                                            <div className="p-2">
                                                {resourceLinks.map((link) => (
                                                    <Link key={link.href} href={link.href} onClick={() => setIsDesktopResourcesOpen(false)} className={`block text-center text-sm px-3 py-1.5 rounded-md transition-colors ${pathname === link.href ? 'font-semibold text-slate-900 dark:text-slate-100 bg-brand-lavender/20' : 'text-slate-600 dark:text-slate-400 hover:bg-slate-900/5 dark:hover:bg-slate-50/5 hover:text-slate-900 dark:hover:text-slate-100'}`}>{link.label}</Link>
                                                ))}
                                            </div>
                                        </div>
                                    </motion.div>
                                )}
                                </AnimatePresence>
                            </div>
                            <Link href={mainLinks.impact.href} className={`relative px-3 py-1.5 text-sm rounded-md transition-colors duration-200 ${pathname === mainLinks.impact.href ? 'font-semibold bg-brand-lavender/20 text-slate-900 dark:text-slate-100' : 'text-slate-600 hover:bg-slate-900/5 dark:text-slate-400 dark:hover:bg-slate-50/5 hover:text-slate-900 dark:hover:text-slate-100'}`}>
                                {mainLinks.impact.label}
                            </Link>
                            <Link href={mainLinks.about.href} className={`relative px-3 py-1.5 text-sm rounded-md transition-colors duration-200 ${pathname === mainLinks.about.href ? 'font-semibold bg-brand-lavender/20 text-slate-900 dark:text-slate-100' : 'text-slate-600 hover:bg-slate-900/5 dark:text-slate-400 dark:hover:bg-slate-50/5 hover:text-slate-900 dark:hover:text-slate-100'}`}>
                                {mainLinks.about.label}
                            </Link>
                        </nav>
                        
                        {/* Column 3: Actions (Aligned Right) */}
                        {/* DEFINITIVE FIX: Increased responsive padding to `pr-4` for a larger mobile gap, while maintaining `md:pr-0` to keep the desktop layout unchanged. */}
                        <div className="justify-self-end flex items-center gap-2 pr-4 md:pr-0">
                            <Link href={mainLinks.join.href} className="hidden md:inline-flex text-sm font-semibold rounded-full px-4 py-1.5 transition-all duration-300 bg-slate-900 text-white hover:bg-slate-700 dark:bg-slate-50 dark:text-slate-900 dark:hover:bg-slate-200">
                                {mainLinks.join.label}
                            </Link>
                            
                            <ThemeToggle />

                            {/* Mobile Burger Menu Button */}
                            <div className="md:hidden">
                                <button onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu" className="p-2 rounded-md text-slate-800 dark:text-slate-200">
                                    {isMenuOpen ? ( <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg> ) : ( <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" /></svg> )}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            
            {/* Mobile Menu Overlay (unchanged) */}
            <AnimatePresence>
                {isMenuOpen && ( <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }} className="md:hidden fixed inset-0 w-full h-screen bg-white/80 dark:bg-black/80 backdrop-blur-2xl z-40">
                    <div className="flex flex-col items-center justify-center h-full space-y-8 text-center">
                        <Link href={mainLinks.home.href} onClick={handleLinkClick}><span className="text-2xl font-semibold text-slate-800 dark:text-slate-200">{mainLinks.home.label}</span></Link>
                        
                        <div className="flex flex-col items-center space-y-4">
                            <span className="text-2xl font-semibold text-slate-800 dark:text-slate-200">Resources</span>
                            <div className="flex flex-col items-center space-y-4">
                                {resourceLinks.map((link) => (
                                    <Link key={link.href} href={link.href} onClick={handleLinkClick}>
                                        <span className="text-xl font-normal text-slate-600 dark:text-slate-400">{link.label}</span>
                                    </Link>
                                ))}
                            </div>
                        </div>

                        <Link href={mainLinks.impact.href} onClick={handleLinkClick}><span className="text-2xl font-semibold text-slate-800 dark:text-slate-200">{mainLinks.impact.label}</span></Link>
                        <Link href={mainLinks.about.href} onClick={handleLinkClick}><span className="text-2xl font-semibold text-slate-800 dark:text-slate-200">{mainLinks.about.label}</span></Link>
                        
                        <div className="pt-4">
                            <Link href={mainLinks.join.href} onClick={handleLinkClick}>
                                <span className="text-lg font-semibold text-white bg-slate-900 dark:bg-slate-100 dark:text-slate-900 rounded-full px-8 py-3 transition-colors duration-300 hover:bg-slate-700 dark:hover:bg-slate-300">
                                    {mainLinks.join.label}
                                </span>
                            </Link>
                        </div>
                    </div>
                </motion.div> )}
            </AnimatePresence>
        </>
    );
}
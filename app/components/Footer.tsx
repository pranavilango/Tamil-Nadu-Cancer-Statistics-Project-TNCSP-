// --- START OF FILE app/components/Footer.tsx ---

import Link from 'next/link';
import Image from 'next/image';
import { Linkedin } from 'lucide-react';

// A reusable component for the link columns to keep the code clean.
const FooterLinkColumn = ({ title, links }: { title: string; links: { href: string; label: string }[] }) => (
    <div>
        <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-100 tracking-wider uppercase">
            {title}
        </h3>
        <div className="mt-4 flex flex-col space-y-3">
            {links.map((link) => (
                <Link key={link.label} href={link.href} className="text-base text-slate-600 dark:text-slate-400 transition-colors hover:text-brand-lavender">
                    {link.label}
                </Link>
            ))}
        </div>
    </div>
);

export default function Footer() {
    const navigateLinks = [
        { href: '/', label: 'Home' },
        { href: '/impact', label: 'Impact' },
        { href: '/about', label: 'About Us' },
        { href: '/join', label: 'Join Us' },
    ];

    const resourceLinks = [
        { href: '/guide', label: 'Cancer Guide' },
        { href: '/hospitals', label: 'Hospital Finder' },
        { href: '/map', label: 'TN Data Atlas' },
        { href: '/schemes', label: 'Support Schemes' },
    ];

    return (
        <footer className="bg-slate-100 dark:bg-slate-900/50 border-t border-slate-200 dark:border-slate-800">
            <div className="max-w-7xl mx-auto py-16 px-6 lg:px-8">
                {/* RESPONSIVE FIX: Grid defaults to 2 columns, becomes 5 on medium screens. Increased vertical gap for mobile. */}
                <div className="grid grid-cols-2 md:grid-cols-5 gap-y-12 gap-x-8">
                    
                    {/* RESPONSIVE FIX: Branding spans full width on mobile, 2 columns on medium screens. */}
                    <div className="col-span-2 md:col-span-2">
                        <Link href="/" className="flex items-center gap-2">
                            <Image src="/tncsp-circle-logo.webp" alt="TNCSP Logo" width={32} height={32} />
                            <span className="text-xl text-slate-900 dark:text-slate-100 font-bold tracking-tight">
                                TNCSP
                            </span>
                        </Link>
                        <p className="mt-4 text-sm text-slate-500 dark:text-slate-400 max-w-xs">
                            An applied public health project leveraging open data for community-driven awareness in Tamil Nadu.
                        </p>
                    </div>

                    <FooterLinkColumn title="Navigate" links={navigateLinks} />
                    <FooterLinkColumn title="Resources" links={resourceLinks} />

                    <div>
                        <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-100 tracking-wider uppercase">
                            Connect
                        </h3>
                        <div className="mt-4 flex flex-col space-y-3"> 
                            <a 
                                href="https://www.linkedin.com/company/tncsp/" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="inline-flex items-center gap-2 text-base text-slate-600 dark:text-slate-400 transition-colors hover:text-brand-lavender"
                            >
                                <Linkedin size={18} />
                                LinkedIn
                            </a>
                        </div>
                    </div>
                </div>

                {/* RESPONSIVE FIX: Bottom bar defaults to centered column, becomes row on small screens. */}
                <div className="mt-12 border-t border-slate-200 dark:border-slate-800 pt-8 flex flex-col sm:flex-row justify-between items-center text-center sm:text-left">
                    <p className="text-sm text-slate-500 dark:text-slate-400">
                        © {new Date().getFullYear()} Tamil Nadu Cancer Statistics Project.
                    </p>
                    <div className="flex space-x-4 mt-4 sm:mt-0">
                        <p className="text-sm text-slate-500 dark:text-slate-400">All rights reserved.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};
'use client';

import Link from 'next/link';
import React from 'react';

// --- Reusable Icon Components for Consistency ---
const ArrowRightIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
    </svg>
);

const ArrowDownIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3" />
    </svg>
);

const StarIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
    </svg>
);

const MegaphoneIcon = (props: React.SVGProps<SVGSVGElement>) => (
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" {...props}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25a3 3 0 0 1 3 3m3 0a6 6 0 0 1-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1 1 21.75 8.25Z" />
</svg>
);

const UserPlusIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
    </svg>
);

// --- Main Page Component ---
export default function JoinUsPage() {

    const handleScrollToBenefits = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        e.preventDefault();
        const element = document.getElementById('benefits');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        // --- THIS IS THE FIX ---
        // Added `pt-16` to the main container to offset the entire page content by the height of the fixed navbar (h-16 = 4rem).
        <div className="bg-transparent text-zinc-800 dark:text-zinc-200 overflow-x-hidden pt-16">
            {/* Background Gradient */}
            <div className="fixed inset-0 -z-10 top-0">
                <div className="absolute w-full h-full bg-gradient-to-br from-[#f44e8b] via-[#5557fc] to-[#f44e8b] opacity-20 dark:opacity-25 blur-[120px]" />
            </div>

            {/* --- HERO SECTION --- */}
            {/* --- THIS IS THE FIX --- */}
            {/* Set height to `calc(100vh - 4rem)` to perfectly fill the viewport below the navbar. */}
            {/* `flex`, `items-center`, and `justify-center` handle the content alignment automatically. */}
            <section className="relative flex h-[calc(100vh-4rem)] items-center justify-center text-center px-4">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-y-12 lg:gap-x-12 items-center">
                    
                    {/* --- First Half: Campus Ambassador --- */}
                    <div className="flex flex-col items-center">
                        <p className="inline-block px-4 py-1 text-sm font-semibold tracking-wider text-[#5557fc] bg-[#5557fc]/10 dark:bg-[#5557fc]/20 rounded-full mb-4">
                            Shape the Future of Public Health
                        </p>
                        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-zinc-900 dark:text-white leading-tight">
                            Become a <span className="bg-gradient-to-r from-[#5557fc] to-[#f44e8b] bg-clip-text text-transparent">Campus Ambassador</span>
                        </h1>
                        <p className="mt-6 text-lg text-zinc-600 dark:text-zinc-300 max-w-md mx-auto">
                            Lead the charge on your campus, drive awareness, and be a vital part of our mission.
                        </p>
                        <div className="mt-10 flex flex-col sm:flex-row gap-4">
                            <Link href="https://forms.gle/bSJymwFqtvohE3P46" target="_blank" rel="noopener noreferrer" className="group inline-flex items-center justify-center px-6 py-3.5 bg-zinc-900 dark:bg-white text-white dark:text-black text-base font-semibold rounded-full shadow-lg hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-all transform hover:scale-105">
                                Apply Now
                            </Link>
                            <a href="#benefits" onClick={handleScrollToBenefits} className="group inline-flex items-center justify-center px-6 py-3.5 bg-transparent border border-zinc-900/50 dark:border-white/50 text-zinc-800 dark:text-white text-base font-semibold rounded-full shadow-lg hover:bg-zinc-900/5 dark:hover:bg-white/10 transition-all transform hover:scale-105">
                                Learn More
                                <ArrowDownIcon className="w-5 h-5 ml-2 transition-transform group-hover:translate-y-1" />
                            </a>
                        </div>
                    </div>
                    
                    {/* --- Second Half: Awareness Campaign --- */}
                    <div className="flex flex-col items-center border-t border-zinc-400/50 dark:border-zinc-700/50 pt-12 lg:border-t-0 lg:border-l lg:border-zinc-400 dark:lg:border-zinc-700 lg:pt-0 lg:pl-12">
                         <p className="inline-block px-4 py-1 text-sm font-semibold tracking-wider text-[#f44e8b] bg-[#f44e8b]/10 dark:bg-[#f44e8b]/20 rounded-full mb-4">
                            Make a Direct Impact
                        </p>
                        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-zinc-900 dark:text-white leading-tight">
                            Join an <span className="bg-gradient-to-r from-[#f44e8b] to-[#5557fc] bg-clip-text text-transparent">Awareness Campaign</span>
                        </h2>
                        <p className="mt-6 text-lg text-zinc-600 dark:text-zinc-300 max-w-md mx-auto">
                            Volunteer for on-the-ground events and help us connect directly with communities in need.
                        </p>
                        <div className="mt-10">
                            <Link href="https://forms.gle/WJDzgkUUoy8aZXpm6" target="_blank" rel="noopener noreferrer" className="group inline-flex items-center justify-center px-8 py-4 bg-zinc-900 dark:bg-white text-white dark:text-black text-base font-semibold rounded-full shadow-lg hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-all transform hover:scale-105">
                                Volunteer Now
                                <ArrowRightIcon className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
                            </Link>
                        </div>
                    </div>

                </div>
            </section>
            
            <div id="benefits" className="relative bg-white dark:bg-black scroll-mt-16">
                {/* --- BENEFITS SECTION --- */}
                <section className="py-16 md:py-24">
                    <div className="max-w-7xl mx-auto text-center px-4 sm:px-6 lg:px-8">
                        <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900 dark:text-white">Why Become a Campus Ambassador?</h2>
                        <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-300 max-w-2xl mx-auto">
                            Gain invaluable experience, develop key skills, and make a tangible difference in public health.
                        </p>
                        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            <div className="flex flex-col items-center p-8 border border-zinc-200 dark:border-zinc-800 rounded-3xl shadow-lg shadow-zinc-100 dark:shadow-black/20 bg-zinc-50 dark:bg-zinc-900/50">
                                <div className="flex items-center justify-center h-16 w-16 rounded-full bg-gradient-to-br from-[#f44e8b]/20 to-[#f44e8b]/10 text-[#f44e8b]">
                                    <StarIcon className="h-8 w-8" />
                                </div>
                                <h3 className="mt-6 text-xl font-bold">Real-World Impact</h3>
                                <p className="mt-2 text-zinc-600 dark:text-zinc-300">Directly contribute to a public health initiative that saves lives. Your work will have a measurable effect on communities across Tamil Nadu.</p>
                            </div>
                            <div className="flex flex-col items-center p-8 border border-zinc-200 dark:border-zinc-800 rounded-3xl shadow-lg shadow-zinc-100 dark:shadow-black/20 bg-zinc-50 dark:bg-zinc-900/50">
                                <div className="flex items-center justify-center h-16 w-16 rounded-full bg-gradient-to-br from-[#5557fc]/20 to-[#5557fc]/10 text-[#5557fc]">
                                    <MegaphoneIcon className="h-8 w-8" />
                                </div>
                                <h3 className="mt-6 text-xl font-bold">Develop Key Skills</h3>
                                <p className="mt-2 text-zinc-600 dark:text-zinc-300">Hone your leadership, communication, and project management skills. Gain hands-on experience that sets you apart.</p>
                            </div>
                            <div className="flex flex-col items-center p-8 border border-zinc-200 dark:border-zinc-800 rounded-3xl shadow-lg shadow-zinc-100 dark:shadow-black/20 bg-zinc-50 dark:bg-zinc-900/50">
                                <div className="flex items-center justify-center h-16 w-16 rounded-full bg-gradient-to-br from-zinc-200/50 to-zinc-100/50 text-zinc-600 dark:bg-zinc-800 dark:text-zinc-300">
                                    <UserPlusIcon className="h-8 w-8" />
                                </div>
                                <h3 className="mt-6 text-xl font-bold">Certification & LOR</h3>
                                <p className="mt-2 text-zinc-600 dark:text-zinc-300">Receive an official Certificate of Recognition and a strong Letter of Recommendation (LOR) to bolster your academic and professional profile.</p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}
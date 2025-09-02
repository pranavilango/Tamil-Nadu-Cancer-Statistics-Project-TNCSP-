// app/schemes/page.tsx

'use client';

import React from 'react';
import { schemesData, Scheme } from './schemes-data';

// --- Reusable Icon Components (for visual consistency) ---
const InsuranceIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.286Zm0 13.036h.008v.008h-.008v-.008Z" />
    </svg>
);
const SubsidyIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.826-1.106-2.156 0-2.982C10.544 8.22 11.27 8 12 8c.768 0 1.536.219 2.148.659.879.659.879 2.047 0 2.705M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
    </svg>
);
const TravelIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L6 12Zm0 0h7.5" />
    </svg>
);
const SupportIcon = (props: React.SVGProps<SVGSVGElement>) => (
     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
    </svg>
);

// --- Reusable Scheme Card Component (Animation Removed) ---
const SchemeCard: React.FC<{ scheme: Scheme }> = ({ scheme }) => (
    <div className="flex h-full flex-col p-6 bg-white/60 dark:bg-black/40 backdrop-blur-xl border border-zinc-200/50 dark:border-zinc-800 rounded-3xl shadow-lg shadow-zinc-200/40 dark:shadow-black/30 transition-shadow duration-500 hover:shadow-pink-200/50 dark:hover:shadow-pink-500/20 hover:border-zinc-300 dark:hover:border-zinc-700">
        <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 mb-2">{scheme.name}</h3>
        <div className="flex flex-wrap gap-2 mb-4">
            {scheme.tags.map(tag => (
                <span key={tag} className="text-xs font-semibold bg-gradient-to-r from-[#5557fc]/20 to-[#f44e8b]/20 text-[#5557fc] dark:text-[#f44e8b] px-2 py-1 rounded-full">
                    {tag}
                </span>
            ))}
        </div>

        <div className="space-y-4 text-sm flex-grow">
            <div>
                <h4 className="font-semibold text-zinc-800 dark:text-zinc-200">Eligibility</h4>
                <ul className="list-disc list-inside text-zinc-600 dark:text-zinc-300 mt-1 space-y-1">
                    {scheme.eligibility.map(item => <li key={item}>{item}</li>)}
                </ul>
            </div>
            <div>
                <h4 className="font-semibold text-zinc-800 dark:text-zinc-200">Key Benefits</h4>
                <ul className="list-disc list-inside text-zinc-600 dark:text-zinc-300 mt-1 space-y-1">
                    {scheme.benefits.map(item => <li key={item}>{item}</li>)}
                </ul>
            </div>
        </div>

        <a
            href={scheme.applyLink}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 block w-full text-center bg-zinc-900 dark:bg-white text-white dark:text-black text-base font-semibold rounded-full shadow-lg hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-all transform hover:scale-105 py-2.5"
        >
            {scheme.applyLink === '#' ? 'Learn More (Offline)' : 'Apply Now'}
        </a>
    </div>
);


// --- Main Page Component ---
export default function GovernmentSchemesPage() {
    return (
        <div className="bg-transparent text-zinc-800 dark:text-zinc-200 overflow-x-hidden">
            {/* Background Gradient */}
            <div className="absolute inset-0 -z-10 h-full w-full">
                <div className="absolute w-full h-full bg-gradient-to-br from-[#f44e8b] via-[#5557fc] to-[#f44e8b] opacity-20 dark:opacity-25 blur-[120px] rounded-full" />
            </div>

            {/* 1. Hero Section - PT-16 FOR NAVBAR HEIGHT */}
            <header className="relative text-center pt-32 pb-16 px-4">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-zinc-900 dark:text-white leading-tight">
                    Government Schemes for <span className="bg-gradient-to-r from-[#5557fc] to-[#f44e8b] bg-clip-text text-transparent">Cancer Care</span>
                </h1>
                <p className="mt-6 text-lg text-zinc-600 dark:text-zinc-300 max-w-3xl mx-auto">
                    A single place to find all financial support and aid programs available for cancer patients and their families in Tamil Nadu.
                </p>
                <div className="mt-8 max-w-xl mx-auto">
                    <input
                        type="search"
                        placeholder="Search by scheme name or keyword..."
                        className="w-full p-3 bg-white/60 dark:bg-black/40 backdrop-blur-xl border border-zinc-200/50 dark:border-zinc-800 rounded-full shadow-md placeholder:text-zinc-500"
                    />
                </div>
            </header>

            <main className="container mx-auto px-4 md:px-8 pb-16">
                {/* 2. All Schemes Listing */}
                <section>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {schemesData.map(scheme => <SchemeCard key={scheme.id} scheme={scheme} />)}
                    </div>
                </section>

                {/* 3. Guidance Section */}
                <section className="mt-20 bg-zinc-50/70 dark:bg-zinc-900/50 py-16 rounded-3xl">
                    <div className="max-w-4xl mx-auto text-center px-4">
                        <h2 className="text-3xl font-bold text-zinc-900 dark:text-white">Navigating Your Options</h2>
                        <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-300">
                           Applying for schemes can feel complex. Here’s a simple guide to help you start.
                        </p>
                        <div className="mt-10 text-left grid md:grid-cols-2 gap-10">
                            <div className="bg-white dark:bg-zinc-900 p-6 rounded-2xl border border-zinc-200/80 dark:border-zinc-800 shadow-lg shadow-zinc-100 dark:shadow-black/20">
                               <h3 className="text-xl font-bold mb-4 text-zinc-900 dark:text-white">General Application Steps</h3>
                                <ol className="list-decimal list-inside space-y-2 text-zinc-600 dark:text-zinc-300">
                                    <li><strong>Confirm Eligibility:</strong> Carefully check the requirements on each scheme card.</li>
                                    <li><strong>Collect Documents:</strong> Gather all necessary proofs like Aadhaar, Ration Card, and income certificates.</li>
                                    <li><strong>Visit an Enrollment Center:</strong> Go to a District Kiosk, Taluk office, or the designated hospital department.</li>
                                    <li><strong>Submit & Get Receipt:</strong> Fill the forms, submit your documents, and always ask for an application receipt.</li>
                                </ol>
                            </div>
                             <div className="bg-white dark:bg-zinc-900 p-6 rounded-2xl border border-zinc-200/80 dark:border-zinc-800 shadow-lg shadow-zinc-100 dark:shadow-black/20">
                                <h3 className="text-xl font-bold mb-4 text-zinc-900 dark:text-white">Frequently Asked Questions</h3>
                                <div className="space-y-4">
                                    <div>
                                        <h4 className="font-semibold text-zinc-800 dark:text-zinc-200">Can I use multiple schemes?</h4>
                                        <p className="text-zinc-600 dark:text-zinc-300">Yes. You can often combine schemes. For instance, use CMCHIS for hospital bills and the Travel Allowance for transport. Check each scheme's rules.</p>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-zinc-800 dark:text-zinc-200">What if I'm not from Tamil Nadu?</h4>
                                        <p className="text-zinc-600 dark:text-zinc-300">Central schemes like PMJAY are for all eligible Indians. State schemes (TN Govt) are typically for residents only.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}
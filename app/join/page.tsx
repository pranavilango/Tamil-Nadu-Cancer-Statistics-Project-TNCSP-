// --- START OF FILE app/join/page.tsx ---
'use client';

import Link from 'next/link';
import React from 'react';
import FadeIn from '../components/guide/FadeIn';
import { StaggeredList, StaggeredListItem } from '../components/guide/StaggeredList';
import { ArrowRight, ArrowDown, Star, Megaphone, Users, Award } from 'lucide-react';

// Reusable component for the benefits section
const BenefitCard = ({ icon, title, description }: {
    icon: React.ReactNode;
    title: string;
    description: string;
}) => (
    <div className="flex flex-col items-center justify-center text-center p-8 bg-slate-100/40 dark:bg-slate-800/20 rounded-2xl border border-slate-200/80 dark:border-slate-800 backdrop-blur-lg md:h-full">
        <div className="inline-flex items-center justify-center w-14 h-14 mb-4 text-brand-lavender bg-brand-lavender/10 rounded-full">
            {icon}
        </div>
        <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100 mt-4">{title}</h3>
        <p className="mt-2 text-slate-600 dark:text-slate-400">{description}</p>
    </div>
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
        <main className="relative isolate overflow-hidden pt-16">
            <div className="absolute inset-0 -z-10">
              <div className="absolute inset-0 [background-image:linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] [background-size:36px_36px]"></div>
            </div>

            <FadeIn>
                {/* --- HERO SECTION --- */}
                <section className="relative flex items-center justify-center text-center px-4 sm:px-6 lg:px-8 
                                    lg:min-h-[calc(100vh-4rem)] py-20 lg:py-0">
                    <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-y-12 lg:gap-x-12 items-center">
                        
                        {/* Column 1: Campus Ambassador */}
                        <div className="flex flex-col items-center">
                            <p className="inline-block px-4 py-1.5 text-sm font-semibold tracking-wide text-brand-lavender bg-brand-lavender/10 rounded-full mb-5">
                                Shape the Future of Public Health
                            </p>
                            <h1 className="text-4xl sm:text-5xl font-semibold tracking-tighter text-slate-900 dark:text-white">
                                Become a Campus Ambassador
                            </h1>
                            <p className="mt-4 text-lg text-slate-600 dark:text-zinc-300 max-w-md mx-auto">
                                Lead the charge on your campus, drive awareness, and be a vital part of our mission to save lives.
                            </p>
                            <div className="mt-8 flex flex-col sm:flex-row items-center gap-4">
                                <Link href="https://forms.gle/bSJymwFqtvohE3P46" target="_blank" rel="noopener noreferrer" className="group inline-flex items-center justify-center rounded-full bg-slate-900 dark:bg-slate-50 text-white dark:text-black px-7 py-3.5 text-base font-semibold">
                                    Apply Now
                                </Link>
                                <a href="#benefits" onClick={handleScrollToBenefits} className="group inline-flex items-center justify-center px-6 py-3 text-base font-semibold text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors">
                                    Learn More
                                    <ArrowDown className="w-5 h-5 ml-2 transition-transform group-hover:translate-y-1" />
                                </a>
                            </div>
                        </div>
                        
                        {/* Column 2: Awareness Campaign */}
                        <div className="flex flex-col items-center border-t border-slate-900/10 dark:border-slate-50/[0.06] pt-12 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-12">
                            <p className="inline-block px-4 py-1.5 text-sm font-semibold tracking-wide text-brand-lavender bg-brand-lavender/10 rounded-full mb-5">
                                Make a Direct Impact
                            </p>
                            <h2 className="text-4xl sm:text-5xl font-semibold tracking-tighter text-slate-900 dark:text-white">
                                Join an Awareness Campaign
                            </h2>
                            <p className="mt-4 text-lg text-slate-600 dark:text-zinc-300 max-w-md mx-auto">
                                Volunteer for on-the-ground events and help us connect directly with communities in need.
                            </p>
                            <div className="mt-8">
                                <Link href="https://forms.gle/WJDzgkUUoy8aZXpm6" target="_blank" rel="noopener noreferrer" className="group inline-flex items-center justify-center rounded-full bg-slate-900 dark:bg-slate-50 text-white dark:text-black px-7 py-3.5 text-base font-semibold">
                                    Volunteer Now
                                    <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
                                </Link>
                            </div>
                        </div>

                    </div>
                </section>
                
                {/* --- BENEFITS SECTION --- */}
                {/* --- DEFINITIVE FIX: Increased bottom padding (`pb-24 sm:pb-32`) to create more space above the footer. --- */}
                <section id="benefits" className="scroll-mt-16 pt-16 sm:pt-20 pb-24 sm:pb-32">
                    <div className="max-w-7xl mx-auto text-center px-4 sm:px-6 lg:px-8">
                        <div className="max-w-2xl mx-auto">
                            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900 dark:text-white">Why Join Our Team?</h2>
                            <p className="mt-4 text-lg text-slate-600 dark:text-zinc-300">
                                Gain invaluable experience, develop key skills, and make a tangible difference in public health.
                            </p>
                        </div>
                        <StaggeredList>
                            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
                                <StaggeredListItem>
                                    <BenefitCard
                                        icon={<Megaphone className="h-8 w-8" />}
                                        title="Real-World Impact"
                                        description="Directly contribute to a public health initiative that saves lives. Your work will have a measurable effect on communities across Tamil Nadu."
                                    />
                                </StaggeredListItem>
                                <StaggeredListItem>
                                    <BenefitCard
                                        icon={<Users className="h-8 w-8" />}
                                        title="Develop Key Skills"
                                        description="Hone your leadership, communication, and project management skills. Gain hands-on experience that sets you apart from your peers."
                                    />
                                </StaggeredListItem>
                                <StaggeredListItem>
                                    <BenefitCard
                                        icon={<Award className="h-8 w-8" />}
                                        title="Certification & LOR"
                                        description="Receive an official Certificate of Recognition and a strong Letter of Recommendation (LOR) to bolster your academic and professional profile."
                                    />
                                </StaggeredListItem>
                            </div>
                        </StaggeredList>
                    </div>
                </section>
            </FadeIn>
        </main>
    );
}
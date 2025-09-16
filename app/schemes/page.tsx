// --- START OF FILE app/schemes/page.tsx ---

'use client';

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { 
    ShieldCheck, 
    HeartHandshake, 
    FileText, 
    UserCheck, 
    IndianRupee,
    ArrowRight,
    Car,
    Star
} from 'lucide-react';

// --- Import the data from the dedicated file ---
import { schemesData, Scheme } from './schemes-data';

// --- Icon Mapping for Dynamic Rendering ---
const iconMap: { [key in Scheme['icon']]: React.ReactNode } = {
    'Insurance': <ShieldCheck className="w-7 h-7 sm:w-8 sm:h-8 text-white" />,
    'Subsidy': <IndianRupee className="w-7 h-7 sm:w-8 sm:h-8 text-white" />,
    'Travel': <Car className="w-7 h-7 sm:w-8 sm:h-8 text-white" />,
    'Support': <HeartHandshake className="w-7 h-7 sm:w-8 sm:h-8 text-white" />,
};

const iconColorMap: { [key in Scheme['icon']]: string } = {
    'Insurance': 'bg-blue-500',
    'Subsidy': 'bg-pink-500',
    'Travel': 'bg-green-500',
    'Support': 'bg-purple-500',
};

// --- RESPONSIVE FIX: Re-engineered for perfect alignment on all screen sizes ---
const DetailSection = ({ title, items, icon }: { title: string; items: string[]; icon: React.ReactNode }) => (
    <div className="flex items-start">
        <div className="flex-shrink-0 w-6 mr-4 text-slate-500 dark:text-slate-400 pt-0.5">
            {icon}
        </div>
        <div className="flex-1">
            <h4 className="font-semibold text-slate-800 dark:text-slate-200">
                {title}
            </h4>
            <div className="mt-1 space-y-1.5 text-sm text-slate-600 dark:text-slate-400">
                {items.map((item, index) => (
                    <div key={index} className="flex items-start">
                        <span className="mr-2.5 mt-1 text-brand-lavender flex-shrink-0 leading-tight">•</span>
                        <span>{item}</span>
                    </div>
                ))}
            </div>
        </div>
    </div>
);


const SchemeCard = ({ scheme }: { scheme: Scheme }) => (
    <motion.div 
        layout
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className={`relative flex flex-col rounded-2xl bg-slate-100/50 dark:bg-slate-800/30 border dark:border-slate-800 backdrop-blur-lg overflow-hidden shadow-lg dark:shadow-black/20 ${scheme.isTopScheme ? 'border-brand-lavender/80' : 'border-slate-200/80'}`}
    >
        {scheme.isTopScheme && (
            <div className="absolute top-0 right-0 text-xs bg-brand-lavender text-white font-bold px-3 py-1 rounded-bl-lg flex items-center z-10">
                <Star size={12} className="mr-1.5 fill-current" />
                Top Scheme
            </div>
        )}

        {/* RESPONSIVE FIX: Adjusted padding and icon container size for mobile */}
        <div className={`p-4 sm:p-6 flex items-start ${iconColorMap[scheme.icon]}`}>
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center bg-white/20 mr-4 sm:mr-5 flex-shrink-0">
                {iconMap[scheme.icon]}
            </div>
            <div>
                <h3 className="text-lg sm:text-xl font-bold text-white leading-tight">{scheme.name}</h3>
                <div className="flex flex-wrap gap-2 mt-2">
                    {scheme.tags.map((tag: string) => (
                        <span key={tag} className="text-xs font-semibold bg-white/20 text-white px-2 py-0.5 rounded-full">{tag}</span>
                    ))}
                </div>
            </div>
        </div>
        
        {/* RESPONSIVE FIX: Adjusted padding for mobile */}
        <div className="p-4 sm:p-6 flex-grow">
            <div className="space-y-6">
                <DetailSection title="Eligibility" items={scheme.eligibility} icon={<UserCheck />} />
                <DetailSection title="Key Benefits" items={scheme.benefits} icon={<IndianRupee />} />
                <DetailSection title="Required Documents" items={scheme.documents} icon={<FileText />} />
            </div>
        </div>

        <div className="border-t border-slate-200/80 dark:border-slate-700 px-4 sm:px-6 py-4 bg-slate-100/30 dark:bg-slate-900/20">
            {scheme.applyLink !== "#" ? (
                <Link 
                    href={scheme.applyLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="group inline-flex items-center text-sm font-semibold text-blue-600 dark:text-blue-500 hover:text-blue-700 dark:hover:text-blue-400"
                >
                    Visit Official Site
                    <ArrowRight className="w-4 h-4 ml-1.5 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
            ) : (
                <p className="text-sm font-medium text-slate-600 dark:text-slate-400">{scheme.whereToApply}</p>
            )}
        </div>
    </motion.div>
);


export default function SchemesPage() {
    const [activeFilter, setActiveFilter] = useState('All');
    
    const filters = useMemo((): string[] => {
        const allTags = schemesData.flatMap((scheme: Scheme) => scheme.tags);
        return ['All', ...new Set<string>(allTags)];
    }, []);

    const filteredSchemes = useMemo(() => {
        if (activeFilter === 'All') return schemesData;
        return schemesData.filter((scheme: Scheme) => scheme.tags.includes(activeFilter));
    }, [activeFilter]);

    return (
        <main className="relative isolate overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 -z-10">
              <div className="absolute inset-0 [background-image:linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] [background-size:36px_36px]"></div>
              <div className="absolute left-1/4 top-0 w-[800px] h-[800px] bg-brand-lavender/10 dark:bg-brand-lavender/20 rounded-full blur-3xl opacity-30"></div>
              <div className="absolute right-1/4 bottom-0 w-[800px] h-[800px] bg-blue-300/10 dark:bg-blue-300/20 rounded-full blur-3xl opacity-30"></div>
            </div>

            {/* RESPONSIVE FIX: Adjusted padding and font sizes for mobile */}
            <section className="py-20 sm:py-24 md:py-32">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    {/* Header */}
                    <div className="mx-auto max-w-3xl text-center">
                        <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-slate-900 dark:text-slate-100">
                            Financial Support for Cancer Care
                        </h1>
                        <p className="mt-4 text-base sm:text-lg leading-7 sm:leading-8 text-slate-600 dark:text-slate-400">
                            Navigating treatment costs can be overwhelming. Here is a clear, filterable guide to the key government schemes available for patients in Tamil Nadu.
                        </p>
                    </div>

                    {/* Filter Controls */}
                    <div className="my-12 sm:my-16 flex justify-center flex-wrap gap-2 sm:gap-3">
                        {filters.map(filter => (
                            <button
                                key={filter}
                                onClick={() => setActiveFilter(filter)}
                                className={`px-3.5 sm:px-4 py-2 text-xs sm:text-sm font-semibold rounded-full transition-colors duration-200 ${
                                    activeFilter === filter
                                        ? 'bg-brand-lavender text-white'
                                        : 'bg-slate-200/60 dark:bg-slate-800/60 text-slate-700 dark:text-slate-300 hover:bg-slate-300/60 dark:hover:bg-slate-700/60'
                                }`}
                            >
                                {filter}
                            </button>
                        ))}
                    </div>

                    {/* Schemes Grid */}
                    <motion.div layout className="mx-auto grid max-w-5xl grid-cols-1 gap-8 sm:gap-10">
                        <AnimatePresence>
                            {filteredSchemes.map((scheme: Scheme) => (
                                <SchemeCard key={scheme.id} scheme={scheme} />
                            ))}
                        </AnimatePresence>
                    </motion.div>
                    
                    {/* No Results Message */}
                    {filteredSchemes.length === 0 && (
                        <div className="text-center mt-10 text-slate-500 dark:text-slate-400">
                            <p>No schemes match the selected filter.</p>
                        </div>
                    )}


                    {/* Disclaimer */}
                    <div className="mt-16 sm:mt-20 text-center max-w-3xl mx-auto">
                         <div className="p-6 bg-slate-100/40 dark:bg-slate-800/20 rounded-2xl border border-slate-200/80 dark:border-slate-800">
                            <h3 className="font-semibold text-slate-900 dark:text-slate-100">Please Note</h3>
                            <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                                This information is for guidance purposes only. Scheme details may change. We strongly recommend visiting the official government websites for the most current information.
                            </p>
                         </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
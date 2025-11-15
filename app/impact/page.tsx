// --- START OF FILE app/impact/page.tsx ---

'use client';

import { useState } from 'react';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';
import { Users, Megaphone, Heart, MapPin, ArrowRight, ArrowLeft, X, IndianRupee, CameraOff } from 'lucide-react';

// --- CAMPAIGN DATA (UNCHANGED) ---
const campaigns = [
    {
        title: 'Awareness Campaign #1',
        description: 'Our inaugural campaign focused on direct community engagement, distributing materials and connecting with residents to spread vital awareness about early screening.',
        location: 'Sai Baba Temple, Railway Colony, Erode',
        peopleReached: '200+ Individuals',
        images: ['/awareness-erode-1.webp', '/awareness-erode-2.webp', '/awareness-erode-3.webp'],
    },
    {
        title: 'Awareness Campaign #2',
        description: 'The second campaign expanded our reach to local markets, engaging with vendors and shoppers with visual aids and interactive sessions to explain regular health check-ups.',
        location: 'Farmers Market, Sampath Nagar, Erode',
        peopleReached: '200+ Individuals',
        images: ['/awareness-sampath-1.webp', '/awareness-sampath-2.webp', '/awareness-sampath-3.webp', '/awareness-sampath-4.webp'],
    },
    {
        title: 'Awareness Campaign #3',
        description: 'Our third campaign focused on the community at a local market, using interactive sessions to highlight the importance of early cancer detection and healthy lifestyles.',
        location: 'Farmers Market, Nasiyanur, Erode',
        peopleReached: '200+ Individuals',
        images: ['/awareness-nasiyanur-1.webp', '/awareness-nasiyanur-2.webp', '/awareness-nasiyanur-3.webp'],
    },
    {
        title: 'Awareness Campaign #4',
        description: 'The fourth campaign expanded our reach to the biggest church in Erode, using visual aids and personal stories to explain the importance of regular health check-ups.',
        location: 'CSI Brough Memorial Church, Erode',
        peopleReached: '500+ Individuals',
        images: ['/awareness-brough-1.webp', '/awareness-brough-2.webp', '/awareness-brough-3.webp'],
    },
    {
        title: 'Awareness Campaign #5',
        description: 'This campaign took advantage of a local festival to explain early cancer screening to devotees in a famous temple, reaching a large and diverse audience.',
        location: 'Perur Pateeswarar Temple, Coimbatore',
        peopleReached: '3,000+ Individuals',
        images: ['/awareness-perur-1.webp', '/awareness-perur-2.webp', '/awareness-perur-3.webp', '/awareness-perur-4.webp'],
    },
    {
        title: 'Awareness Campaign #6',
        description: 'Our sixth campaign was aimed at boosting cancer awareness amongst devotees in a famous temple in the heart of Erode through one-on-one conversations.',
        location: 'Eswaran and Perumal Temple, Erode',
        peopleReached: '100+ Individuals',
        images: ['/awareness-eswaran-1.webp', '/awareness-eswaran-2.webp'],
    },
    {
        title: 'Awareness Campaign #7',
        description: 'For the seventh campaign, two student volunteers went to the busiest temple in Erode to create early screening awareness and distribute informational pamphlets.',
        location: 'Thindal Murugan Temple, Erode',
        peopleReached: '300+ Individuals',
        images: ['/awareness-thindal-1.webp', '/awareness-thindal-2.webp'],
    },
    {
        title: 'Awareness Campaign #8',
        description: 'For our eighth campaign, we turned to our own school to raise awareness at a Parent - Teacher meet. Students focused on distributing pamphlets and explaining the core ideas of cancer awarness to our teachers and parents alike.',
        location: 'CS Academy International, Coimbatore',
        peopleReached: '700+ Individuals',
        images: ['/awareness-csicbe-1.webp', '/awareness-csicbe-2.webp', '/awareness-csicbe-3.webp', '/awareness-csicbe-4.webp', '/awareness-csicbe-5.webp', '/awareness-csicbe-6.webp'],
    },
    {
        title: 'Awareness Campaign #9',
        description: 'Coimbatore boasts big, modern shopping centers, which is where we went next. Prozone mall gave our team a chance to try different methods of spreading the word, apart from pamphlets and one on one interactions with people. Overall, we were able to target a huge, constantly changing audience to spread awareness effectively. ',
        location: 'Prozone Mall, Coimbatore',
        peopleReached: '4000+ Individuals',
        images: ['/awareness-prozone-1.webp', '/awareness-prozone-2.webp', '/awareness-prozone-3.webp', '/awareness-prozone-4.webp'],
    },
    {
        title: 'Awareness Campaign #10',
        description: 'Our tenth campaign took place at CS Academy International’s new football turf, where sophomores and juniors distributed pamphlets to attendees of the charity football matches.',
        location: 'CSI Football Turf, Coimbatore',
        peopleReached: '1500+ Individuals',
        images: [],
    },
    {
        title: 'Awareness Campaign #11',
        description: 'For the eleventh campaign, Secretariat members at CSAMUN visited each committee during breaks to hand out pamphlets and spread awareness among the delegates.',
        location: 'CS Academy International, Coimbatore',
        peopleReached: '700+ Individuals',
        images: [],
    },
    {
        title: 'Awareness Campaign #12',
        description: 'Our twelfth campaign was held at Casagrand, where members distributed pamphlets to residents and explained key cancer statistics and screening suggestions.',
        location: 'Casagrand, Coimbatore',
        peopleReached: '200+ Individuals',
        images: [],
    },
    {
        title: 'Awareness Campaign #13',
        description: 'Our thirteenth campaign was held at Texvalley, where members interacted with passerbys and shopkeepers, explaining about cancer awareness and prevention in Tamil Nadu.',
        location: 'Texvalley, Erode',
        peopleReached: '3,000+ Individuals',
        images: ['/awareness-tex-1.webp', '/awareness-tex-2.webp', '/awareness-tex-3.webp'],
    },
    {
        title: 'Awareness Campaign #14',
        description: 'On a festive Tuesday, campaigners visited the bustling Thindal market, engaging with locals and distributing pamphlets to raise awareness about early cancer detection and prevention.',
        location: 'Thindal Bustop, Erode',
        peopleReached: '500+ Individuals',
        images: ['/awareness-thibus-1.webp', '/awareness-thibus-2.webp', '/awareness-thibus-3.webp'],
    },
    {
        title: 'Awareness Campaign #15',
        description: 'Our fifteenth campaign was held at RS Puram, where members distributed pamphlets and engaged with the community, especially store owners, to raise awareness about cancer prevention.',
        location: 'RS Puram, Coimbatore',
        peopleReached: '7,500+ Individuals',
        images: ['/awareness-rspuram-1.webp', '/awareness-rspuram-2.webp', '/awareness-rspuram-3.webp'],
    },
    {
        title: 'Awareness Campaign #16',
        description: 'Campaign number 16 was special. Held at the helm of Coimbatore city, this campaign was our largest yet, with over 10,000 pamphlets distributed and thousands of individuals reached.',
        location: 'Race Course, Coimbatore',
        peopleReached: '6,000+ Individuals',
        images: [],
    },
    {
        title: 'Awareness Campaign #17',
        description: 'Riding the success of our previous campaign, this initiative aimed to further engage the community at Brookfields Mall, spreading awareness about cancer prevention and early detection.',
        location: 'Brookfields Mall, Coimbatore',
        peopleReached: '1,000+ Individuals',
        images: [],
    },
    {
        title: 'Awareness Campaign #18',
        description: 'Our eighteenth campaign took us to a local hospital, where we focused on educating patients and visitors about the importance of early cancer screening and prevention strategies.',
        location: 'MVS Hospital, Attur, Salem',
        peopleReached: '6,000+ Individuals',
        images: ['/awareness-salemhosp-1.webp', '/awareness-salemhosp-2.webp', '/awareness-salemhosp-3.webp'],
    },
    {
        title: 'Awareness Campaign #19',
        description: 'Our nineteenth campaign took us to a serene lake area, where we engaged with visitors and locals alike, distributing pamphlets and discussing the significance of early cancer detection.',
        location: 'Emerald Lake, Yercaud',
        peopleReached: '1,000+ Individuals',
        images: ['/awareness-yercaud-1.webp'],
    },
    {
        title: 'Awareness Campaign #20',
        description: 'For our twentieth campaign, we traveled to Nilgiris Express in Chennai, where we reached out to travelers and staff, sharing vital information about cancer awareness and prevention.',
        location: 'Nilgiris Express, Chennai',
        peopleReached: '200+ Individuals',
        images: [],
    },
];

const StaticStatCard = ({ stat }: { stat: { icon: React.ReactNode; value: string; label: string; } }) => (
    <div className="flex flex-col items-center justify-center text-center p-6 md:p-8 rounded-3xl sm:h-full bg-slate-100/50 dark:bg-slate-800/30 border border-slate-200/80 dark:border-slate-800">
        <div className="text-brand-lavender mb-4">{stat.icon}</div>
        <p className="text-4xl sm:text-5xl font-semibold tracking-tight text-slate-900 dark:text-slate-100 mb-2">
            {stat.value}
        </p>
        <p className="text-base text-slate-600 dark:text-slate-400">{stat.label}</p>
    </div>
);

// --- EDITED SECTION: CAMPAIGN CARD ANIMATION ---
const CampaignCard = ({ campaign, onClick }: { campaign: typeof campaigns[0], onClick: () => void }) => {
    const hasImages = campaign.images && campaign.images.length > 0;

    return (
        <motion.div
            // The variants now define the animation states
            variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
            }}
            // Trigger the animation when the card itself enters the view
            initial="hidden"
            whileInView="visible"
            // The animation triggers when 20% of the card is visible, and only runs once
            viewport={{ once: true, amount: 0.2 }}
            className={`group relative flex flex-col w-full rounded-2xl bg-slate-100/50 dark:bg-slate-800/30 border border-slate-200/80 dark:border-slate-800 overflow-hidden ${hasImages ? 'cursor-pointer' : ''}`}
            onClick={hasImages ? onClick : undefined}
        >
            <div className="relative w-full aspect-[16/10] overflow-hidden">
                {hasImages ? (
                    <>
                        <Image
                            src={campaign.images[0]}
                            alt={`Photo from ${campaign.title}`}
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                    </>
                ) : (
                    <div className="w-full h-full bg-slate-200 dark:bg-slate-800 flex items-center justify-center">
                        <Megaphone size={48} className="text-slate-400 dark:text-slate-600" />
                    </div>
                )}
            </div>
            <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100">{campaign.title}</h3>
                
                <div className="mt-2 space-y-1.5">
                    <div className="flex items-center text-sm text-slate-500 dark:text-slate-400">
                        <MapPin size={14} className="mr-2 flex-shrink-0" />
                        <span>{campaign.location}</span>
                    </div>
                    <div className="flex items-center text-sm text-slate-500 dark:text-slate-400">
                        <Users size={14} className="mr-2 flex-shrink-0" />
                        <span>{campaign.peopleReached}</span>
                    </div>
                </div>

                <p className="mt-4 text-slate-600 dark:text-slate-400 flex-grow text-sm leading-relaxed">{campaign.description}</p>
            </div>
            <div className="border-t border-slate-200/80 dark:border-slate-700 px-6 py-4">
                {hasImages ? (
                    <div className="text-blue-600 dark:text-blue-500 flex items-center text-sm font-semibold">
                        View Gallery ({campaign.images.length})
                        <ArrowRight className="w-4 h-4 ml-1.5 transition-transform group-hover:translate-x-1" />
                    </div>
                ) : (
                    <div className="text-slate-400 dark:text-slate-500 flex items-center text-sm font-semibold">
                        Photos Coming Soon
                    </div>
                )}
            </div>
        </motion.div>
    );
};
// --- END OF EDITED SECTION ---


const GalleryModal = ({ campaign, onClose }: { campaign: typeof campaigns[0], onClose: () => void }) => {
    const [index, setIndex] = useState(0);

    const next = () => setIndex((prev) => (prev + 1) % campaign.images.length);
    const prev = () => setIndex((prev) => (prev - 1 + campaign.images.length) % campaign.images.length);

    return (
        <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-lg flex items-center justify-center z-50 p-4"
            onClick={onClose}
        >
            <motion.div
                className="relative w-full max-w-4xl aspect-video"
                initial={{ scale: 0.95 }} animate={{ scale: 1 }} exit={{ scale: 0.95 }}
                onClick={(e) => e.stopPropagation()}
            >
                <AnimatePresence mode="wait">
                    <motion.div
                        key={index}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.15 }}
                        className="w-full h-full"
                    >
                        <Image src={campaign.images[index]} alt={`Gallery image ${index + 1}`} fill style={{ objectFit: 'contain' }} />
                    </motion.div>
                </AnimatePresence>
                
                <button onClick={prev} className="absolute left-2 top-1/2 -translate-y-1.2 bg-white/20 hover:bg-white/30 p-2 rounded-full transition"><ArrowLeft size={24} className="text-white"/></button>
                <button onClick={next} className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 p-2 rounded-full transition"><ArrowRight size={24} className="text-white"/></button>
            </motion.div>
            <button onClick={onClose} className="absolute top-4 right-4 bg-white/20 hover:bg-white/30 p-2 rounded-full transition"><X size={24} className="text-white"/></button>
        </motion.div>
    );
};

// --- MAIN PAGE COMPONENT ---
export default function ImpactPage() {
    const [selectedCampaign, setSelectedCampaign] = useState<typeof campaigns[0] | null>(null);
    
    // This is no longer needed for the staggered animation, but can be kept for other uses if necessary
    const containerVariants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } } };
    
    const totalPeopleReached = campaigns.reduce((acc, campaign) => {
        const numberString = campaign.peopleReached.replace(/[^0-9]/g, '');
        return acc + (parseInt(numberString, 10) || 0);
    }, 0);

    const formattedTotalPeopleReached = `${(Math.round(totalPeopleReached / 100) / 10)}K+`;

    const stats = [
        { icon: <Users size={32} />, value: formattedTotalPeopleReached, label: 'People Reached' },
        { icon: <Megaphone size={32} />, value: campaigns.length.toString(), label: 'Campaigns Organized' },
        { icon: <Heart size={32} />, value: '40+', label: 'Student Volunteers' },
        { icon: <IndianRupee size={32} />, value: '10K+', label: 'INR Raised in Funds' }
    ];

    return (
        <main className="relative isolate overflow-hidden">
            <div className="absolute inset-0 -z-10">
              <div className="absolute inset-0 [background-image:linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] [background-size:36px_36px]"></div>
              <div className="absolute left-0 top-1/4 w-[800px] h-[800px] bg-brand-lavender/10 dark:bg-brand-lavender/20 rounded-full blur-3xl opacity-30"></div>
              <div className="absolute right-0 bottom-1/4 w-[800px] h-[800px] bg-blue-300/10 dark:bg-blue-300/20 rounded-full blur-3xl opacity-30"></div>
            </div>

            {/* --- SECTION 1: HERO & STATS --- */}
            <section className="pt-24 pb-24 sm:pt-32 sm:pb-32">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="relative z-10 mx-auto max-w-2xl text-center">
                        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                            className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tighter text-slate-900 dark:text-slate-100"
                        >
                            Our Impact in Action
                        </motion.h1>
                        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
                            className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-400"
                        >
                           Here’s a look at the change we’re making together, told in numbers.
                        </motion.p>
                    </div>

                    <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {stats.map((stat) => (
                            <StaticStatCard key={stat.label} stat={stat} />
                        ))}
                    </div>
                </div>
            </section>
            
            {/* --- SECTION 2: ON THE GROUND --- */}
            <section className="pb-24 sm:pb-32">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl lg:text-center mb-16">
                        <h2 className="text-base font-semibold leading-7 text-brand-lavender">Campaigns</h2>
                        <p className="mt-2 text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900 dark:text-slate-100">
                            On the Ground with Our Community
                        </p>
                    </div>

                    {/* --- EDITED SECTION: GRID ANIMATION CONTAINER --- */}
                    {/* The animation props have been removed from this container */}
                    <div
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    >
                        {campaigns.map((campaign) => (
                            <CampaignCard key={campaign.title} campaign={campaign} onClick={() => setSelectedCampaign(campaign)} />
                        ))}
                    </div>
                    {/* --- END OF EDITED SECTION --- */}

                </div>
            </section>

            <AnimatePresence>
                {selectedCampaign && <GalleryModal campaign={selectedCampaign} onClose={() => setSelectedCampaign(null)} />}
            </AnimatePresence>
        </main>
    );
}
'use client';

import { useState, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';
import AnimatedCounter from '../components/impact/AnimatedCounter';

// --- DATA (Unchanged) ---
const campaigns = [
  {
    title: 'Awareness Campaign #1',
    description: 'Our inaugural campaign focused on direct community engagement, distributing materials and connecting with residents to spread vital awareness about early screening.',
    location: 'Sai Baba Temple, Railway Colony, Erode',
    peopleReached: '200+ Individuals',
    images: ['/awareness-erode-1.jpg', '/awareness-erode-2.jpg', '/awareness-erode-3.jpg'],
  },
  {
    title: 'Awareness Campaign #2',
    description: 'The second campaign expanded our reach to local markets, engaging with vendors and shoppers with visual aids and interactive sessions to explain regular health check-ups.',
    location: 'Farmers Market, Sampath Nagar, Erode',
    peopleReached: '200+ Individuals',
    images: ['/awareness-sampath-1.jpg', '/awareness-sampath-2.jpg', '/awareness-sampath-3.jpg', '/awareness-sampath-4.jpg'],
  },
  {
    title: 'Awareness Campaign #3',
    description: 'Our third campaign focused on the community at a local market, using interactive sessions to highlight the importance of early cancer detection and healthy lifestyles.',
    location: 'Farmers Market, Nasiyanur, Erode',
    peopleReached: '200+ Individuals',
    images: ['/awareness-nasiyanur-1.jpg', '/awareness-nasiyanur-2.jpg', '/awareness-nasiyanur-3.jpg'],
  },
  {
    title: 'Awareness Campaign #4',
    description: 'The fourth campaign expanded our reach to the biggest church in Erode, using visual aids and personal stories to explain the importance of regular health check-ups.',
    location: 'CSI Brough Memorial Church, Erode',
    peopleReached: '500+ Individuals',
    images: ['/awareness-brough-1.jpg', '/awareness-brough-2.jpg', '/awareness-brough-3.jpg'],
  },
  {
    title: 'Awareness Campaign #5',
    description: 'This campaign took advantage of a local festival to explain early cancer screening to devotees in a famous temple, reaching a large and diverse audience.',
    location: 'Perur Pateeswarar Temple, Coimbatore',
    peopleReached: '3,000+ Individuals',
    images: ['/awareness-perur-1.jpg', '/awareness-perur-2.jpg', '/awareness-perur-3.jpg', '/awareness-perur-4.jpg'],
  },
  {
    title: 'Awareness Campaign #6',
    description: 'Our sixth campaign was aimed at boosting cancer awareness amongst devotees in a famous temple in the heart of Erode through one-on-one conversations.',
    location: 'Eswaran and Perumal Temple, Erode',
    peopleReached: '100+ Individuals',
    images: ['/awareness-eswaran-1.jpg', '/awareness-eswaran-2.jpg'],
  },
  {
      title: 'Awareness Campaign #7',
      description: 'For the seventh campaign, two student volunteers went to the busiest temple in Erode to create early screening awareness and distribute informational pamphlets.',
      location: 'Thindal Murugan Temple, Erode',
      peopleReached: '300+ Individuals',
      images: ['/awareness-thindal-1.jpg', '/awareness-thindal-2.jpg'],
  }
];

// --- ICONS (Unchanged) ---
const UsersIcon = (props: React.SVGProps<SVGSVGElement>) => ( <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}><path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" /></svg> );
const MegaphoneIcon = (props: React.SVGProps<SVGSVGElement>) => ( <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}><path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6a7.5 7.5 0 1 0 7.5 7.5h-7.5V6Z" /><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0 0 13.5 3v7.5Z" /></svg> );
const HeartIcon = (props: React.SVGProps<SVGSVGElement>) => ( <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}><path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" /></svg> );
const LocationIcon = (props: React.SVGProps<SVGSVGElement>) => ( <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}><path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0z" /></svg> );
const PeopleIcon = (props: React.SVGProps<SVGSVGElement>) => ( <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}><path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" /></svg> );
const ArrowLeftIcon = (props: React.SVGProps<SVGSVGElement>) => ( <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" {...props}><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" /></svg> );
const ArrowRightIcon = (props: React.SVGProps<SVGSVGElement>) => ( <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" {...props}><path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" /></svg> );

// --- HERO STAT CARD COMPONENT (Unchanged) ---
function StatCard({ icon, value, suffix, title, description, glowColor }: { icon: React.ReactNode, value: number, suffix: string, title: string, description: string, glowColor: string }) {
    return (
        <motion.div 
            variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 }}}}
            whileHover={{ scale: 1.05, y: -5 }}
            transition={{ type: 'spring', stiffness: 300, damping: 10 }}
            className="relative bg-white/60 dark:bg-zinc-900/70 backdrop-blur-xl border border-zinc-200/80 dark:border-zinc-800 rounded-3xl p-6 sm:p-8 text-center flex flex-col items-center justify-center overflow-hidden"
        >
            <div className={`absolute -bottom-1/3 -right-1/3 w-48 h-48 ${glowColor} rounded-full opacity-50 blur-3xl`} />
            <div className="relative z-10 flex flex-col items-center">
                <div className="mb-4 text-[#f44e8b]">{icon}</div>
                <div className="text-5xl sm:text-6xl font-extrabold text-black dark:text-white">
                    <AnimatedCounter value={value} />{suffix}
                </div>
                <h3 className="mt-2 text-lg font-semibold text-zinc-800 dark:text-zinc-100">{title}</h3>
                <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">{description}</p>
            </div>
        </motion.div>
    );
}

// --- CAMPAIGN CARD COMPONENT ---
function CampaignCard({ campaign, isPriority }: { campaign: typeof campaigns[0]; isPriority: boolean; }) {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const activeImage = campaign.images[currentImageIndex];

    return (
        <div className="relative w-full h-[540px] max-w-md rounded-3xl bg-gradient-to-br from-[#5557fc] to-[#f44e8b] p-0.5 shadow-2xl shadow-pink-500/20 dark:shadow-pink-500/10">
            <div className="h-full w-full bg-white dark:bg-zinc-900 rounded-[22px] p-6 flex flex-col">
                <div className="relative w-full aspect-video rounded-2xl overflow-hidden">
                    <AnimatePresence>
                        <motion.div key={currentImageIndex} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }} className="absolute inset-0">
                            <Image 
                                src={activeImage} 
                                alt={`Photo from ${campaign.title}`} 
                                fill 
                                sizes="(max-width: 640px) 90vw, 450px" 
                                style={{ objectFit: 'cover' }} 
                                priority={isPriority} 
                            />
                        </motion.div>
                    </AnimatePresence>
                    <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex space-x-2 bg-black/40 backdrop-blur-sm rounded-full p-1.5">
                        {campaign.images.map((_, idx) => (
                            <button key={idx} onClick={() => setCurrentImageIndex(idx)} aria-label={`View image ${idx + 1}`} className={`h-2 rounded-full transition-all duration-300 ${idx === currentImageIndex ? 'w-4 bg-white' : 'w-2 bg-white/50 hover:bg-white/70'}`} />
                        ))}
                    </div>
                </div>
                
                <div className="flex-grow flex flex-col pt-6">
                    <h3 className="text-2xl font-bold bg-gradient-to-r from-[#5557fc] to-[#f44e8b] bg-clip-text text-transparent">{campaign.title}</h3>
                    <p className="mt-3 text-zinc-600 dark:text-zinc-300 text-sm leading-relaxed flex-grow">{campaign.description}</p>
                </div>
                
                <div className="mt-6 pt-6 border-t border-zinc-200/80 dark:border-zinc-700/80 grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex items-center space-x-3">
                        <div className="flex-shrink-0 bg-pink-500/10 p-2.5 rounded-full">
                            <LocationIcon className="w-5 h-5 text-[#f44e8b]" />
                        </div>
                        <div>
                            <p className="text-xs text-zinc-500 dark:text-zinc-400">Location</p>
                            <p className="text-sm font-semibold text-zinc-800 dark:text-zinc-100">{campaign.location}</p>
                        </div>
                    </div>
                    <div className="flex items-center space-x-3">
                        <div className="flex-shrink-0 bg-blue-500/10 p-2.5 rounded-full">
                            <PeopleIcon className="w-5 h-5 text-[#5557fc]" />
                        </div>
                        <div>
                            <p className="text-xs text-zinc-500 dark:text-zinc-400">People Reached</p>
                            <p className="text-sm font-semibold text-zinc-800 dark:text-zinc-100">{campaign.peopleReached}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

// --- MAIN PAGE COMPONENT ---
export default function ImpactPage() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [direction, setDirection] = useState(0);

    const handlePrev = () => {
        setDirection(-1);
        setActiveIndex((prev) => (prev === 0 ? campaigns.length - 1 : prev - 1));
    };

    const handleNext = () => {
        setDirection(1);
        setActiveIndex((prev) => (prev === campaigns.length - 1 ? 0 : prev + 1));
    };

    const handleScroll = (id: string) => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    };

    const variants = {
        enter: (direction: number) => ({
            x: direction > 0 ? '100%' : '-100%',
            opacity: 0,
            scale: 0.8
        }),
        center: {
            x: 0,
            opacity: 1,
            scale: 1
        },
        exit: (direction: number) => ({
            x: direction < 0 ? '100%' : '-100%',
            opacity: 0,
            scale: 0.8
        }),
    };

    return (
        <div className="bg-transparent">
            <div className="fixed inset-0 -z-10">
                <div className="absolute w-full h-full bg-gradient-to-br from-[#f44e8b] via-[#5557fc] to-[#f44e8b] opacity-20 dark:opacity-25 blur-[120px]" />
            </div>

            <section className="relative flex flex-col justify-center min-h-screen pt-24 pb-16">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                    <div className="text-center max-w-4xl mx-auto">
                        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, ease: 'easeOut' }}
                            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tighter text-black dark:text-white leading-tight md:leading-snug">
                            Our <span className="bg-gradient-to-r from-[#5557fc] to-[#f44e8b] bg-clip-text text-transparent">Impact</span> in Action
                        </motion.h1>
                        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}
                            className="mt-6 text-lg md:text-xl leading-8 text-zinc-600 dark:text-zinc-300">
                            Every number tells a story of community, dedication, and progress. Here’s a look at the change we’re making together.
                        </motion.p>
                    </div>

                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={{ visible: { transition: { staggerChildren: 0.2 } }}}
                        className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-8 sm:gap-8">
                        <div onClick={() => handleScroll('campaigns-section')} className="cursor-pointer">
                            <StatCard icon={<UsersIcon className="h-8 w-8" />} value={9100} suffix="+" title="People Reached Directly" description="Through face-to-face awareness" glowColor="bg-pink-500" />
                        </div>
                        <div onClick={() => handleScroll('campaigns-section')} className="cursor-pointer">
                            <StatCard icon={<MegaphoneIcon className="h-8 w-8" />} value={9} suffix="" title="Awareness Campaigns" description="In high-traffic public gatherings" glowColor="bg-blue-500" />
                        </div>
                        <Link href="/about#team-section">
                            <StatCard icon={<HeartIcon className="h-8 w-8" />} value={20} suffix="" title="Student Volunteers" description="Driving our mission forward" glowColor="bg-zinc-500" />
                        </Link>
                    </motion.div>
                </div>
            </section>
            
            <section id="campaigns-section" className="relative w-full h-screen flex flex-col justify-center items-center pt-16 scroll-mt-16 overflow-hidden">
                <div className="w-full max-w-md h-[540px] relative">
                    <AnimatePresence initial={false} custom={direction}>
                        <motion.div
                            key={activeIndex}
                            custom={direction}
                            variants={variants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            transition={{ x: { type: "spring", stiffness: 300, damping: 30 }, opacity: { duration: 0.2 } }}
                            className="absolute w-full h-full"
                        >
                            {/* --- THIS IS THE FIX: Passing priority based on active index --- */}
                            <CampaignCard 
                                campaign={campaigns[activeIndex]} 
                                isPriority={activeIndex === 0} // Only prioritize the very first campaign on initial load
                            />
                        </motion.div>
                    </AnimatePresence>
                </div>

                <div className="absolute top-1/2 left-0 right-0 flex justify-between px-4 sm:px-12 md:px-24 z-20">
                    <button onClick={handlePrev} aria-label="Previous Campaign" className="p-3 rounded-full bg-white/70 dark:bg-zinc-800/70 backdrop-blur-sm shadow-md hover:bg-white dark:hover:bg-zinc-700 transition">
                        <ArrowLeftIcon className="w-6 h-6 text-zinc-800 dark:text-zinc-200" />
                    </button>
                    <button onClick={handleNext} aria-label="Next Campaign" className="p-3 rounded-full bg-white/70 dark:bg-zinc-800/70 backdrop-blur-sm shadow-md hover:bg-white dark:hover:bg-zinc-700 transition">
                        <ArrowRightIcon className="w-6 h-6 text-zinc-800 dark:text-zinc-200" />
                    </button>
                </div>
            </section>
        </div>
    );
}
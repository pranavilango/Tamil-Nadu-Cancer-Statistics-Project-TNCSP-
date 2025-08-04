'use client';

import { useState } from 'react';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';

// Campaigns Data
const campaigns = [
  {
    title: 'Awareness Campaign #1',
    description: 'Our inaugural campaign focused on direct community engagement. We initiated conversations, distributed informational materials, and connected with residents to spread vital awareness about early screening.',
    location: 'Sai Baba Temple, Railway Colony, Erode',
    peopleReached: '200+ Individuals',
    images: [
      '/awareness-erode-1.jpg',
      '/awareness-erode-2.jpg',
      '/awareness-erode-3.jpg',
    ],
  },
  {
    title: 'Awareness Campaign #2',
    description: 'The second campaign expanded our reach to local markets, engaging with vendors and shoppers. We used visual aids and interactive sessions to explain the importance of regular health check-ups.',
    location: 'Farmers Market, Sampath Nagar, Erode',
    peopleReached: '200+ Individuals',
    images: [
      '/awareness-sampath-1.jpg',
      '/awareness-sampath-2.jpg',
      '/awareness-sampath-3.jpg',
      '/awareness-sampath-4.jpg'
    ],
  },
  {
    title: 'Awareness Campaign #3',
    description: 'The third campaign expanded our reach to local markets, engaging with vendors and shoppers. We used visual aids and interactive sessions to explain the importance of regular health check-ups.',
    location: 'Farmers Market, Nasiyanur, Erode',
    peopleReached: '200+ Individuals',
    images: [
      '/awareness-nasiyanur-1.jpg',
      '/awareness-nasiyanur-2.jpg',
      '/awareness-nasiyanur-3.jpg'
    ],
  },
  {
    title: 'Awareness Campaign #4',
    description: 'The fourth campaign expanded our reach to the biggest church in Erode. We used visual aids and interactive sessions to explain the importance of regular health check-ups.',
    location: 'CSI Brough Memorial Church, Erode',
    peopleReached: '500+ Individuals',
    images: [
      '/awareness-brough-1.jpg',
      '/awareness-brough-2.jpg',
      '/awareness-brough-3.jpg'
    ],
  },
  {
    title: 'Awareness Campaign #5',
    description: 'The fifth campaign took advantage of a local festival to explain about early cancer screening to devotees in a famous temple.',
    location: 'Perur Pateeswarar Temple, Coimbatore',
    peopleReached: '3,000+ Individuals',
    images: [
      '/awareness-perur-1.jpg',
      '/awareness-perur-2.jpg',
      '/awareness-perur-3.jpg',
      '/awareness-perur-4.jpg'
    ],
  },
  {
    title: 'Awareness Campaign #6',
    description: 'The sixth campaign aimed at boosting cancer awareness amongst devotees in a famous temple.',
    location: 'Eswaran and Perumal Temple, Erode',
    peopleReached: '100+ Individuals',
    images: [
      '/awareness-eswaran-1.jpg',
      '/awareness-eswaran-2.jpg'
    ],
  }
];


// Icons
const ArrowLeftIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
    </svg>
  );

  const ArrowRightIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
    </svg>
  );

  const LocationIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
    </svg>
  );

  const PeopleIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
    </svg>
  );

export default function ImpactPage() {
    const [currentCampaignIndex, setCurrentCampaignIndex] = useState(0);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const handleCampaignPrev = () => {
      setCurrentCampaignIndex((prevIndex) => {
        const newIndex = prevIndex === 0 ? campaigns.length - 1 : prevIndex - 1;
        setCurrentImageIndex(0);
        return newIndex;
      });
    };

    const handleCampaignNext = () => {
      setCurrentCampaignIndex((prevIndex) => {
        const newIndex = prevIndex === campaigns.length - 1 ? 0 : prevIndex + 1;
        setCurrentImageIndex(0);
        return newIndex;
      });
    };

    const handleImageNext = () => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === campaigns[currentCampaignIndex].images.length - 1 ? 0 : prevIndex + 1
      );
    };

    const handleImagePrev = () => {
        setCurrentImageIndex((prevIndex) =>
          prevIndex === 0 ? campaigns[currentCampaignIndex].images.length - 1 : prevIndex - 1
        );
      };


  const activeCampaign = campaigns[currentCampaignIndex];

  return (
    <div className="bg-transparent min-h-screen text-zinc-800">
      <div className="absolute inset-0 -z-1">
        <div className="absolute w-full h-full bg-gradient-to-br from-[#f44e8b] via-[#5557fc] to-[#f44e8b] opacity-20 blur-[120px]" />
      </div>

      {/* --- HERO STATISTICS SECTION --- */}
      <section className="py-20 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-black">
              Progress Quantified
            </h1>
            <p className="mt-6 text-lg md:text-xl leading-8 text-zinc-600">
              We are dedicated to creating tangible change through direct community outreach, education, and support systems. Here’s a look at our progress.
            </p>
          </div>
          <div className="mt-12 lg:mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Main Stat */}
            <div className="relative md:col-span-2 lg:col-span-1 bg-white border border-zinc-200/80 rounded-3xl shadow-xl p-8 flex flex-col justify-between overflow-hidden min-h-[24rem] lg:h-96">
                <div className="absolute w-[300%] h-[300%] -top-full -left-full bg-gradient-to-br from-pink-500/20 via-blue-500/20 to-transparent opacity-50 blur-3xl animate-pulse-slow"></div>
                <div className="relative z-10">
                    <h2 className="text-6xl md:text-7xl font-extrabold bg-gradient-to-r from-[#5557fc] to-[#f44e8b] bg-clip-text text-transparent">
                        4,300+
                    </h2>
                    <p className="mt-4 text-xl text-zinc-700 font-medium">
                        people impacted via student-led awareness campaigns
                    </p>
                </div>
                <button
                    onClick={() => document.getElementById('campaigns-section')?.scrollIntoView({ behavior: 'smooth' })}
                    className="relative z-10 self-start mt-6 h-12 px-6 rounded-full bg-zinc-900 text-white font-semibold text-sm cursor-pointer hover:bg-zinc-800 transition-colors flex items-center group"
                >
                    Explore Campaigns
                    <ArrowRightIcon className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
                </button>
            </div>

            {/* Secondary Stats */}
            <div className="relative bg-white border border-zinc-200/80 rounded-3xl shadow-xl p-8 flex flex-col justify-between overflow-hidden min-h-[24rem] lg:h-96">
                <div className="absolute w-[300%] h-[300%] -top-full -left-full bg-gradient-to-br from-pink-500/20 via-blue-500/20 to-transparent opacity-50 blur-3xl animate-pulse-slow"></div>
                <div className="relative z-10">
                    <h2 className="text-6xl md:text-7xl font-extrabold bg-gradient-to-r from-[#5557fc] to-[#f44e8b] bg-clip-text text-transparent">
                        ₹0
                    </h2>
                    <p className="mt-4 text-xl text-zinc-700">
                        funds raised to support awareness campaigns, website development and early screening programs.
                    </p>
                </div>
                <div className="relative z-10 mt-6 px-4 py-2 rounded-full bg-zinc-100 text-zinc-500 font-medium text-sm self-start">
                    Coming Soon
                </div>
            </div>

            <div className="relative bg-white border border-zinc-200/80 rounded-3xl shadow-xl p-8 flex flex-col justify-between overflow-hidden min-h-[24rem] lg:h-96">
                <div className="absolute w-[300%] h-[300%] -top-full -left-full bg-gradient-to-br from-pink-500/20 via-blue-500/20 to-transparent opacity-50 blur-3xl animate-pulse-slow"></div>
                <div className='relative z-10 flex flex-col justify-between h-full'>
                    <div>
                        <h2 className="text-6xl font-extrabold bg-gradient-to-r from-[#5557fc] to-[#f44e8b] bg-clip-text text-transparent">
                            13
                        </h2>
                        <p className="mt-4 text-xl text-zinc-700">
                            student volunteers working together to improve the cancer landscape in Tamil Nadu
                        </p>
                    </div>
                    <a href="/about" className="self-start mt-6 h-12 px-6 rounded-full bg-white border border-zinc-300 text-zinc-900 font-semibold text-sm cursor-pointer hover:bg-zinc-100 transition-colors flex items-center group">
                        Meet the Team
                        <ArrowRightIcon className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
                    </a>
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- CAMPAIGN SHOWCASE SECTION --- */}
      <section id="campaigns-section" className="w-full flex flex-col justify-center items-center py-20 sm:py-24">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section Header and Navigation */}
            <div className="flex flex-col md:flex-row justify-between items-center mb-8 md:mb-10">
                <div className="text-center md:text-left">
                    <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 tracking-tight">Campaign Showcase</h2>
                    <p className="mt-2 text-lg text-zinc-600">Navigating through our on-ground efforts and impact.</p>
                </div>
                <div className="flex items-center space-x-4 mt-6 md:mt-0">
                    <button onClick={handleCampaignPrev} aria-label="Previous Campaign" className="p-3 rounded-full bg-white border border-zinc-300 hover:bg-zinc-100 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500">
                        <ArrowLeftIcon className="w-6 h-6 text-zinc-700" />
                    </button>
                    <span className="text-lg font-semibold text-zinc-700 tabular-nums">
                        {String(currentCampaignIndex + 1).padStart(2, '0')} / {String(campaigns.length).padStart(2, '0')}
                    </span>
                    <button onClick={handleCampaignNext} aria-label="Next Campaign" className="p-3 rounded-full bg-white border border-zinc-300 hover:bg-zinc-100 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500">
                        <ArrowRightIcon className="w-6 h-6 text-zinc-700" />
                    </button>
                </div>
            </div>

            {/* Campaign Card */}
            <div className="relative w-full bg-white rounded-3xl shadow-2xl border border-zinc-200/80 overflow-hidden grid grid-cols-1 lg:grid-cols-2">
                {/* Right Side: Image Carousel (Order changed for mobile-first rendering) */}
                <div className="relative w-full h-80 lg:h-full bg-zinc-100 order-1 lg:order-2">
                    <AnimatePresence>
                        <motion.div
                             key={currentImageIndex + activeCampaign.title}
                             initial={{ opacity: 0, scale: 1.05 }}
                             animate={{ opacity: 1, scale: 1 }}
                             exit={{ opacity: 0 }}
                             transition={{ duration: 0.4, ease: 'easeOut' }}
                             className="absolute inset-0"
                        >
                            <Image
                                src={activeCampaign.images[currentImageIndex]}
                                alt={`Photo from ${activeCampaign.title}`}
                                layout="fill"
                                objectFit="cover"
                            />
                        </motion.div>
                    </AnimatePresence>

                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>

                    <div className="absolute bottom-6 right-6 flex items-center space-x-3">
                        <button onClick={handleImagePrev} aria-label="Previous Photo" className="p-2.5 rounded-full bg-white/80 backdrop-blur-sm hover:bg-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white">
                            <ArrowLeftIcon className="h-5 w-5 text-zinc-800" />
                        </button>
                        <button onClick={handleImageNext} aria-label="Next Photo" className="p-2.5 rounded-full bg-white/80 backdrop-blur-sm hover:bg-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white">
                            <ArrowRightIcon className="h-5 w-5 text-zinc-800" />
                        </button>
                    </div>

                    <div className="absolute bottom-6 left-6 px-3 py-1 rounded-full bg-black/50 backdrop-blur-sm text-white text-sm font-mono tracking-widest">
                        {String(currentImageIndex + 1).padStart(2, '0')} / {String(activeCampaign.images.length).padStart(2, '0')}
                    </div>
                </div>

                {/* Left Side: Content */}
                <div className="flex flex-col p-6 sm:p-8 lg:p-10 order-2 lg:order-1 min-h-[50vh] lg:min-h-0">
                    <div className="flex-grow">
                        <AnimatePresence mode="wait">
                            <motion.h3
                                key={activeCampaign.title}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.3, ease: 'easeInOut' }}
                                className="text-3xl md:text-4xl font-bold text-zinc-900 leading-tight"
                            >
                                {activeCampaign.title}
                            </motion.h3>
                        </AnimatePresence>
                        <AnimatePresence mode="wait">
                            <motion.p
                                key={activeCampaign.description}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.3, delay: 0.1, ease: 'easeInOut' }}
                                className="mt-5 text-base md:text-lg text-zinc-600 leading-relaxed"
                            >
                                {activeCampaign.description}
                            </motion.p>
                        </AnimatePresence>
                    </div>

                    <div className="flex-shrink-0 border-t border-zinc-200 mt-6 pt-6 space-y-5">
                        <div className="flex items-start space-x-4">
                            <div className="flex-shrink-0 bg-zinc-100 p-3 rounded-full border border-zinc-200">
                                <LocationIcon className="w-5 h-5 text-[#f44e8b]" />
                            </div>
                            <div>
                                <p className="text-sm text-zinc-500">Location</p>
                                <p className="text-base font-semibold text-zinc-800">{activeCampaign.location}</p>
                            </div>
                        </div>
                        <div className="flex items-start space-x-4">
                            <div className="flex-shrink-0 bg-zinc-100 p-3 rounded-full border border-zinc-200">
                                <PeopleIcon className="w-5 h-5 text-[#5557fc]" />
                            </div>
                            <div>
                                <p className="text-sm text-zinc-500">People Reached</p>
                                <p className="text-base font-semibold text-zinc-800">{activeCampaign.peopleReached}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </section>

    </div>
  );
}
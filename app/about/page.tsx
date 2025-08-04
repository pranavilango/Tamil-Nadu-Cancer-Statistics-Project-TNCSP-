'use client';

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

// --- Reusable Icon Components for Clarity ---
const DataIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
    </svg>
);

const CommunityIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
    </svg>
);

const OpenAccessIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" />
    </svg>
);

const LinkedInIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
        <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.25 6.5 1.75 1.75 0 016.5 8.25zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.62 1.62 0 0013 14.19V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.38.99 3.38 3.5V19z" />
    </svg>
);

const ArrowDownIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3" />
    </svg>
);

const teamMembers = [
    // --- Leadership ---
    {
        name: "Pranav Ilango",
        role: "Co-Founder",
        bio: "Harnessing data science to make cancer care transparent, equitable, and accessible for every person in Tamil Nadu.",
        imageUrl: "/pranav.png", 
        linkedIn: "https://www.linkedin.com/in/pranav-ilango/",
    },
    {
        name: "Gautham G Anand",
        role: "Co-Founder",
        bio: "With an interest in molecular biology, genetics, and biostatistics, I aim to use cancer statistics to raise awareness in Tamil Nadu, where public understanding remains limited and the need for early detection is critical. Cancer is close to home—and awareness here is rare. I want to change that.",
        imageUrl: "/gautham.png",
        linkedIn: ""
    },
    // --- Team Members ---
    {
        name: "Krishnaraj M Saravanan",
        role: "Head, Erode Wing",
        bio: "An expert in visual storytelling, Priya crafts intuitive charts and maps that bring our data to life, making complex findings understandable at a glance.",
        imageUrl: "/krishnaraj.png",
        linkedIn: "https://www.linkedin.com/in/krishnaraj-m-951b94213/"
    },
    {
        name: "Dharshan Balu",
        role: "Campaigner + Data Collection Member",
        bio: "Passionate about chemistry, and open to exposure, Dharshan wants to contribute to this project to help people know that cancer isn't unstoppable, and seed a sense of safety against cancer, here in Tamil Nadu.",
        imageUrl: "/placeholder.png",
        linkedIn: ""
    },
    {
        name: "Aadarsh V",
        role: "Campaigner + LinkedIn Manager",
        bio: "An expert in visual storytelling, Priya crafts intuitive charts and maps that bring our data to life, making complex findings understandable at a glance.",
        imageUrl: "/aadarsh.png",
        linkedIn: "https://www.linkedin.com/in/aadarsh-v-b460742b0/"
    },    
];

const TeamMemberCard = ({ member }: { member: typeof teamMembers[0] }) => (
    <div className="group flex h-full flex-col items-center text-center p-6 bg-white/60 backdrop-blur-xl border border-zinc-200/50 rounded-3xl shadow-lg shadow-zinc-200/40 transition-all duration-500 hover:shadow-pink-200/50 hover:border-zinc-300 hover:-translate-y-2">
        <div className="relative w-32 h-32 md:w-36 md:h-36 rounded-full overflow-hidden ring-1 ring-zinc-200/80 shadow-xl shadow-zinc-300/30 transition-transform duration-500 ease-in-out group-hover:scale-110">
            <Image
                src={member.imageUrl}
                alt={`Photo of ${member.name}`}
                layout="fill"
                objectFit="cover"
                className="bg-zinc-200"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent transition-all duration-500 group-hover:from-black/40"></div>
        </div>
        <div className="mt-5 flex-grow">
            <h3 className="text-xl font-bold text-zinc-900">{member.name}</h3>
            <p className="mt-1 text-sm font-semibold bg-gradient-to-r from-[#5557fc] to-[#f44e8b] bg-clip-text text-transparent">{member.role}</p>
            <p className="mt-3 text-zinc-600 text-xs max-w-xs leading-relaxed">{member.bio}</p>
        </div>
        <div className="mt-4 flex h-6 items-center flex-shrink-0 space-x-4 justify-center opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300">
            {member.linkedIn && (
                <Link href={member.linkedIn} target="_blank" rel="noopener noreferrer">
                    <span className="sr-only">LinkedIn</span>
                    <LinkedInIcon className="w-5 h-5 text-zinc-400 hover:text-[#0077B5] transition-colors" />
                </Link>
            )}
        </div>
    </div>
);


// --- Main Page Component ---
export default function AboutPage() {
    const leaders = teamMembers.slice(0, 2);
    const coreTeam = teamMembers.slice(2);

    const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, id: string) => {
        e.preventDefault();
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });
        }
    };

    return (
        <div className="bg-transparent text-zinc-800 overflow-x-hidden">
            <div className="absolute inset-0 -z-10">
                <div className="absolute w-full h-full bg-gradient-to-br from-[#f44e8b] via-[#5557fc] to-[#f44e8b] opacity-20 blur-[120px] rounded-full" />
            </div>

            {/* --- EPIC HERO SECTION --- */}
            <section className="relative min-h-screen flex items-center px-4 pt-16 pb-16 lg:pb-0">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-16 items-center">
                    {/* --- Left Column: Text Content --- */}
                    <div className="text-center lg:text-left">
                        <p className="inline-block px-4 py-1 text-sm font-semibold tracking-wider text-[#f44e8b] bg-[#f44e8b]/10 rounded-full mb-4 mt-8 lg:mt-0">
                            A Public Health Initiative
                        </p>
                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-zinc-900 leading-tight">
                            Bridging the gap between <span className="bg-gradient-to-r from-[#5557fc] to-[#f44e8b] bg-clip-text text-transparent">cancer data</span> & <span className="bg-gradient-to-r from-[#5557fc] to-[#f44e8b] bg-clip-text text-transparent">public understanding</span>.
                        </h1>
                        <p className="mt-6 text-lg text-zinc-600 max-w-xl mx-auto lg:mx-0">
                            The Tamil Nadu Cancer Statistics Project (TNCSP) is a student-led initiative transforming complex statistics into clear, actionable knowledge to empower communities across the state.
                        </p>
                        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <a href="#team-section" onClick={(e) => handleScroll(e, 'team-section')} className="group inline-flex items-center justify-center px-6 py-3.5 bg-zinc-900 text-white text-base font-semibold rounded-full shadow-lg hover:bg-zinc-800 transition-all transform hover:scale-105">
                                Meet the Team
                                <ArrowDownIcon className="w-5 h-5 ml-2 transition-transform group-hover:translate-y-1" />
                            </a>
                             <a href="#mission" onClick={(e) => handleScroll(e, 'mission')} className="group inline-flex items-center justify-center px-6 py-3.5 bg-zinc-100 text-zinc-700 text-base font-semibold rounded-full shadow-sm hover:bg-zinc-200/80 transition-all transform hover:scale-105">
                                Our Mission
                            </a>
                        </div>
                    </div>
                    {/* --- Right Column: Visual Element (Desktop Only) --- */}
                    <div className="relative w-full h-96 hidden lg:flex items-center justify-center">
                         {/* Animated background blobs for the visual element */}
                        <div className="absolute w-64 h-64 sm:w-80 sm:h-80 bg-[#f44e8b]/50 rounded-full mix-blend-multiply filter blur-3xl opacity-90 animate-pulse"></div>
                        <div className="absolute right-10 top-10 w-64 h-64 sm:w-80 sm:h-80 bg-[#5557fc]/50 rounded-full mix-blend-multiply filter blur-3xl opacity-90 animate-pulse animation-delay-2000"></div>

                        {/* Glassmorphism Card */}
                        <div className="relative w-full max-w-sm h-60 bg-white/60 backdrop-blur-xl border border-white/30 rounded-3xl shadow-2xl shadow-zinc-300/20 p-8 flex flex-col justify-center items-center text-center">
                            <p className="text-5xl sm:text-6xl md:text-7xl font-bold bg-gradient-to-r from-[#5557fc] to-[#f44e8b] bg-clip-text text-transparent">
                                1 in 68
                            </p>
                            <p className="mt-2 text-md font-semibold text-zinc-800">
                                Lifetime risk of developing breast cancer for women in Chennai
                            </p>
                            <p className="mt-2 text-xs text-zinc-500 tracking-wide">
                                (Source: TNCRP Report, 2020)
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            
            {/* --- Core Principles Section --- */}
            <section id="mission" className="scroll-mt-20">
                <div className="bg-zinc-50/70 py-16 md:py-24">
                    <div className="max-w-7xl mx-auto text-center px-4">
                        <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900">Our Guiding Principles</h2>
                        <p className="mt-4 text-lg text-zinc-600 max-w-2xl mx-auto">
                            Our work is built on a foundation of core values that ensure our impact is meaningful, ethical, and sustainable.
                        </p>
                        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-10">
                            {/* Data-Driven Card */}
                            <div className="flex flex-col items-center p-8 border border-zinc-200/80 rounded-2xl shadow-lg shadow-zinc-100 bg-white">
                                <div className="flex items-center justify-center h-16 w-16 rounded-full bg-gradient-to-br from-[#f44e8b]/20 to-[#f44e8b]/10 text-[#f44e8b]">
                                    <DataIcon className="h-8 w-8" />
                                </div>
                                <h3 className="mt-6 text-xl font-bold">Data-Driven</h3>
                                <p className="mt-2 text-zinc-600">We ground our insights in verified, open-source data to provide information that is accurate, trustworthy, and impactful.</p>
                            </div>
                            {/* Community-Focused Card */}
                            <div className="flex flex-col items-center p-8 border border-zinc-200/80 rounded-2xl shadow-lg shadow-zinc-100 bg-white">
                                 <div className="flex items-center justify-center h-16 w-16 rounded-full bg-gradient-to-br from-[#5557fc]/20 to-[#5557fc]/10 text-[#5557fc]">
                                    <CommunityIcon className="h-8 w-8" />
                                </div>
                                <h3 className="mt-6 text-xl font-bold">Community-Focused</h3>
                                <p className="mt-2 text-zinc-600">Our project is for the people. We prioritize community engagement and grassroots awareness to ensure our work reaches those who need it most.</p>
                            </div>
                            {/* Open & Accessible Card */}
                            <div className="flex flex-col items-center p-8 border border-zinc-200/80 rounded-2xl shadow-lg shadow-zinc-100 bg-white">
                                 <div className="flex items-center justify-center h-16 w-16 rounded-full bg-gradient-to-br from-zinc-200 to-zinc-100 text-zinc-600">
                                    <OpenAccessIcon className="h-8 w-8" />
                                </div>
                                <h3 className="mt-6 text-xl font-bold">Open & Accessible</h3>
                                <p className="mt-2 text-zinc-600">We believe knowledge should be free and easy to understand. We are committed to open-source principles and creating resources for everyone.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- The Team Section --- */}
            <section id="team-section" className="relative scroll-mt-20">
                <div className="absolute inset-0 -z-10 overflow-hidden">
                    <div className="absolute top-0 -left-1/4 w-96 h-96 md:w-[32rem] md:h-[32rem] bg-gradient-to-br from-[#f44e8b]/20 to-white rounded-full blur-3xl opacity-50 md:opacity-60 transform -translate-x-1/4"></div>
                    <div className="absolute bottom-0 -right-1/4 w-96 h-96 md:w-[32rem] md:h-[32rem] bg-gradient-to-tl from-[#5557fc]/20 to-white rounded-full blur-3xl opacity-50 md:opacity-60 transform translate-x-1/4"></div>
                </div>
                <div className="max-w-7xl mx-auto text-center px-4 py-16 md:py-24">
                    <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900">Meet the Minds Behind the Mission</h2>
                    <p className="mt-4 text-lg text-zinc-600 max-w-3xl mx-auto">
                        We are a collective of students, researchers, and developers united by a single goal: to empower our communities with clear, data-driven health insights.
                    </p>

                    {/* --- Leadership Row: Stacks on mobile, side-by-side on larger screens --- */}
                    <div className="mt-16 md:mt-20 flex flex-wrap justify-center gap-y-10 md:gap-x-8">
                        {leaders.map((member) => (
                            <div key={member.name} className="w-full md:w-2/5 lg:w-1/3">
                                <TeamMemberCard member={member} />
                            </div>
                        ))}
                    </div>

                    <div className="my-12 md:my-16 border-b border-zinc-200/80 w-3/4 sm:w-1/2 mx-auto"></div>

                    {/* --- Core Team Grid: 1 col on mobile, 2 on sm, 3 on lg --- */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-10 gap-x-6 md:gap-x-8">
                        {coreTeam.map((member) => (
                            <TeamMemberCard key={member.name} member={member} />
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
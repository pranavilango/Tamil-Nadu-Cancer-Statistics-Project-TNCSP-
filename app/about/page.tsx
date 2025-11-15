'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { BarChart3, Users, Unlock, Linkedin } from 'lucide-react';

// --- Data for Team Members and Principles ---
const teamMembers = [
    {
        name: "Pranav Ilango",
        role: "Co-Founder",
        bio: "Harnessing data science to make cancer care transparent, equitable, and accessible for every person in Tamil Nadu.",
        imageUrl: "/pranav.webp", 
        linkedIn: "https://www.linkedin.com/in/pranav-ilango/",
    },
    {
        name: "Gautham G Anand",
        role: "Co-Founder",
        bio: "Aiming to use cancer statistics to raise awareness in Tamil Nadu, where the need for early detection is critical.",
        imageUrl: "/gautham.webp",
        linkedIn: ""
    },
    {
        name: "Krishnaraj M Saravanan",
        role: "Head, Erode Wing",
        bio: "Deeply moved by the cause, Krishnaraj hopes to bring much-needed awareness and impact to the project.",
        imageUrl: "/krishnaraj.webp",
        linkedIn: "https://www.linkedin.com/in/krishnaraj-m-951b94213/"
    },
    {
        name: "Aditi Rajendran",
        role: "Head, Salem Wing",
        bio: "Determined to break cancer related stereotypes, I strive to promote awareness of prevention methods through multilingual outreach.",
        imageUrl: "/aditi.webp",
        linkedIn: "https://www.linkedin.com/in/aditi-rajendran-0a0004392/"
    },
    {
        name: "Adharsh",
        role: "Fundraising Lead",
        bio: "In Tamil Nadu, awareness is rare—I want to break the silence around cancer and turn fear into early action.",
        imageUrl: "/adharsh.webp",
        linkedIn: ""
    },
    {
        name: "Dharshan Balu",
        role: "Campaigner & Data Collection",
        bio: "Passionate about chemistry, Dharshan wants to contribute to help people know that cancer isn't unstoppable.",
        imageUrl: "/placeholder.webp",
        linkedIn: ""
    },
    {
        name: "Dhakshan Vasantharajan",
        role: "Campaigner",
        bio: "Eager to explore genetics, I aim to ensure complete transparency in cancer statistics and make it available to all.",
        imageUrl: "/dhakshan.webp",
        linkedIn: ""
    },
    {
        name: "Aadarsh V",
        role: "Campaigner & LinkedIn Manager",
        bio: "Crafting intuitive charts and maps that bring our data to life and make complex findings understandable.",
        imageUrl: "/aadarsh.webp",
        linkedIn: "https://www.linkedin.com/in/aadarsh-v-b460742b0/"
    },
    {
        name: "Shambhavi Basu",
        role: "Campaigner",
        bio: "I hope to empower the public to take meaningful steps toward safeguarding the health of those they cherish.",
        imageUrl: "/placeholder.webp",
        linkedIn: ""
    },         
];

const principles = [
  {
    icon: <BarChart3 className="w-7 h-7" />,
    title: 'Data-Driven',
    description: 'We ground our insights in verified, open-source data to provide information that is accurate and trustworthy.',
  },
  {
    icon: <Users className="w-7 h-7" />,
    title: 'Community-Focused',
    description: 'Our project is for the people. We prioritize grassroots awareness to ensure our work reaches those who need it most.',
  },
  {
    icon: <Unlock className="w-7 h-7" />,
    title: 'Open & Accessible',
    description: 'We believe knowledge should be free. We are committed to creating resources that are easy to understand for everyone.',
  },
];

const TeamMember = ({ member, index }: { member: typeof teamMembers[0]; index: number }) => (
    <motion.div 
        className="group flex flex-col items-center text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: index * 0.05, ease: "easeOut" }}
        viewport={{ once: true }}
    >
        <motion.div 
            className="relative w-32 h-32 rounded-full overflow-hidden shadow-lg"
            whileHover={{ y: -4, scale: 1.05, transition: { duration: 0.2 } }}
        >
            <Image
                src={member.imageUrl}
                alt={`Photo of ${member.name}`}
                fill
                sizes="128px"
                style={{ objectFit: "cover" }}
                className="bg-slate-200"
            />
        </motion.div>
        <div className="mt-6">
            <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100">{member.name}</h3>
            <p className="mt-1 text-sm text-brand-lavender font-medium tracking-wide">{member.role}</p>
        </div>
        <p className="mt-3 text-sm text-slate-600 dark:text-slate-400 leading-relaxed max-w-[240px]" style={{minHeight: '6rem'}}>
            {member.bio}
        </p>
        {member.linkedIn && (
            <div className="mt-4">
                <Link 
                    href={member.linkedIn} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-block text-slate-400 dark:text-slate-500 hover:text-blue-600 dark:hover:text-blue-500 transition-colors opacity-50 group-hover:opacity-100"
                    aria-label={`${member.name}'s LinkedIn Profile`}
                >
                    <Linkedin className="w-5 h-5" />
                </Link>
            </div>
        )}
    </motion.div>
);

export default function AboutPage() {
    return (
        <main className="relative isolate overflow-hidden">
            {/* Background Grid and Gradients */}
            <div className="absolute inset-0 -z-10">
              <div className="absolute inset-0 [background-image:linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] [background-size:36px_36px]"></div>
              <div className="absolute left-1/4 top-0 w-[800px] h-[800px] bg-brand-lavender/10 dark:bg-brand-lavender/20 rounded-full blur-3xl opacity-30"></div>
              <div className="absolute right-1/4 bottom-0 w-[800px] h-[800px] bg-blue-300/10 dark:bg-blue-300/20 rounded-full blur-3xl opacity-30"></div>
            </div>

            {/* --- SECTION 1: THE TEAM --- */}
            <section className="py-24 sm:py-32">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    {/* Page Header */}
                    <div className="mx-auto max-w-2xl text-center">
                        <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-slate-900 dark:text-slate-100">
                            The Minds Behind the Mission
                        </h1>
                        <p className="mt-4 text-lg leading-8 text-slate-600 dark:text-slate-400">
                            We are a collective of students, researchers, and developers united by a single goal: to empower our communities with clear, data-driven health insights.
                        </p>
                    </div>

                    {/* Team Grid */}
                    <div className="mx-auto mt-20 grid max-w-7xl grid-cols-1 gap-y-16 gap-x-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                        {teamMembers.map((member, index) => (
                            <TeamMember key={member.name} member={member} index={index} />
                        ))}
                    </div>
                </div>
            </section>
            
            {/* --- SECTION 2: GUIDING PRINCIPLES --- */}
            <section className="pb-24 sm:pb-32">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl text-center mb-16">
                         <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900 dark:text-slate-100">
                            Our Guiding Principles
                        </h2>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        {principles.map((item) => (
                             <motion.div 
                                key={item.title}
                                className="text-center p-8 bg-slate-100/40 dark:bg-slate-800/20 rounded-2xl border border-slate-200/80 dark:border-slate-800 backdrop-blur-lg"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, ease: "easeOut" }}
                                viewport={{ once: true, amount: 0.5 }}
                                whileHover={{ y: -5, boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.05), 0 4px 6px -4px rgb(0 0 0 / 0.1)' }}
                             >
                                <div className="inline-flex items-center justify-center w-14 h-14 mb-4 text-brand-lavender bg-brand-lavender/10 rounded-full">
                                    {item.icon}
                                </div>
                                <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100">{item.title}</h3>
                                <p className="mt-2 text-slate-600 dark:text-slate-400">{item.description}</p>
                             </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}
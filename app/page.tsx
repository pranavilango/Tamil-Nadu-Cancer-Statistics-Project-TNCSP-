// --- START OF FILE app/page.tsx ---

'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

// Lucide icons for visual semantics
import { 
  BookOpenCheck, 
  Hospital, 
  HeartHandshake, 
  ArrowRight,
  Hourglass,
  ShieldOff,
  Map,
  HelpingHand,
  Megaphone,
  Brush,
} from 'lucide-react';

// Reusable custom components
import AnimatedCounter from './components/impact/AnimatedCounter';
import Script from 'next/script';

// A local, custom Card component with perfected responsive padding.
const CustomCard = ({
  children,
  footer,
  className = ''
}: {
  children: React.ReactNode;
  footer?: React.ReactNode;
  className?: string;
}) => (
  <div className={`flex flex-col rounded-2xl bg-slate-100/50 dark:bg-slate-800/30 border border-slate-200/80 dark:border-slate-800 backdrop-blur-lg ${className}`}>
    <div className="p-6 sm:p-8 flex-grow relative">
      {children}
    </div>
    {footer && (
      <div className="border-t border-slate-200/80 dark:border-slate-700 px-6 sm:px-8 py-4">
        {footer}
      </div>
    )}
  </div>
);

// Partner logos component
const PartnerLogos = () => (
  <>
    <div className="flex items-center mx-8 text-slate-500 dark:text-slate-400 flex-shrink-0"><span className="text-xl mr-3">🤝</span><span className="text-sm font-medium">Schools across 7 districts</span></div>
    <div className="flex items-center mx-8 text-slate-500 dark:text-slate-400 flex-shrink-0"><span className="text-xl mr-3">📊</span><span className="text-sm font-medium">Adyar Cancer Institute</span></div>
    <div className="flex items-center mx-8 text-slate-500 dark:text-slate-400 flex-shrink-0"><span className="text-xl mr-3">❤️</span><span className="text-sm font-medium">Rotary Club of Erode</span></div>
    <div className="flex items-center mx-8 text-slate-500 dark:text-slate-400 flex-shrink-0"><span className="text-xl mr-3">💻</span><span className="text-sm font-medium">CS Cancer Club</span></div>
  </>
);

export default function Home() {
  const insights = [
      { value: 60, label: "Diagnosed in Late Stages", description: "The majority of cancer patients in India are diagnosed in stages III or IV, drastically reducing survival rates.", linkHref: "/guide?section=Detection", linkLabel: "Learn about early detection" },
      { value: 75, label: "Facing Financial Catastrophe", description: "Over 75% of Indian families face catastrophic health costs during treatment, often leading to debilitating debt.", linkHref: "/schemes", linkLabel: "Explore government schemes" },
  ];
  
  const resources = [
      { icon: <BookOpenCheck size={28} strokeWidth={1.5} />, title: "The Cancer Guide", description: "Demystifying the science of cancer, from causes to treatments, in simple, accessible language.", linkHref: "/guide", linkLabel: "Start learning" },
      { icon: <Hospital size={28} strokeWidth={1.5} />, title: "Hospital Finder", description: "An interactive map to locate specialized government and private cancer care centers across Tamil Nadu.", linkHref: "/hospitals", linkLabel: "Find a center" },
      { icon: <Map size={28} strokeWidth={1.5} />, title: "TN Data Atlas", description: "Explore district-wise cancer statistics through interactive maps and charts to understand regional trends.", linkHref: "/map", linkLabel: "Explore the data" },
      { icon: <HelpingHand size={28} strokeWidth={1.5} />, title: "Support Schemes", description: "A comprehensive list of central and state government schemes providing financial aid for cancer patients.", linkHref: "/schemes", linkLabel: "Find aid" },
      { icon: <Megaphone size={28} strokeWidth={1.5} />, title: "Awareness Campaigns", description: "See our on-the-ground impact and learn how you can join our mission to spread life-saving knowledge.", linkHref: "/impact", linkLabel: "See our impact" },
      { icon: <Brush size={28} strokeWidth={1.5} />, title: "Public Murals", description: "Transforming public spaces into powerful statements of hope and awareness through community-driven art.", linkHref: "/impact#murals", linkLabel: "View the art" },
  ];

  const containerVariants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.1 } } };
  const itemVariants = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } } };

  return (
    <>
      <Script strategy="afterInteractive" src={`https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX`} />
      <Script id="google-analytics" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: `window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'G-BCR80T5VYF');` }} />

      <main className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 [background-image:linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] [background-size:36px_36px]"></div>
          <div className="absolute left-0 top-1/4 w-[800px] h-[800px] bg-brand-lavender/10 dark:bg-brand-lavender/20 rounded-full blur-3xl opacity-30"></div>
          <div className="absolute right-0 bottom-1/4 w-[800px] h-[800px] bg-blue-300/10 dark:bg-blue-300/20 rounded-full blur-3xl opacity-30"></div>
        </div>

        {/* --- SECTION 1: HERO --- */}
        <section className="w-full flex flex-col items-center justify-center pt-32 pb-20 md:min-h-screen md:py-0">
          <div className="flex-grow flex items-center justify-center">
            <div className="relative z-10 mx-auto max-w-4xl text-center px-4">
              <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, ease: "easeOut" }}>
                <p className="inline-block rounded-full bg-brand-lavender/10 px-4 py-1.5 text-sm font-bold tracking-wide text-brand-lavender border border-brand-lavender/60 mb-6">
                  Tamil Nadu Cancer Statistics Project
                </p>
              </motion.div>
              <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: "easeOut" }}
                className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tighter text-slate-900 dark:text-slate-100"
              >
                Understanding Cancer in Tamil Nadu.
              </motion.h1>
              <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
                className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-400 max-w-2xl mx-auto"
              >
                A public health initiative leveraging open data for community-driven awareness, support, and hope.
              </motion.p>
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                className="mt-10"
              >
                <Link href="/guide" className="group inline-flex items-center justify-center rounded-full bg-slate-900 dark:bg-slate-50 text-white dark:text-black px-7 py-3.5 text-base font-semibold">
                  Explore the Guide
                  <ArrowRight className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </motion.div>
            </div>
          </div>
          <div className="w-full pt-16 md:pt-0 md:pb-16">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.4 }}
              className="w-full max-w-4xl mx-auto"
            >
              <p className="text-center text-xs font-semibold tracking-widest text-slate-500 dark:text-slate-400 uppercase mb-4">
                Partners & Supporters
              </p>
              <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]">
                <div className="flex w-max">
                  <div className="flex items-center flex-shrink-0 animate-marquee-slow"><PartnerLogos /></div>
                  <div className="flex items-center flex-shrink-0 animate-marquee-slow" aria-hidden="true"><PartnerLogos /></div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* --- SECTION 2: KEY INSIGHTS --- */}
        <section className="py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:text-center">
              <h2 className="text-base font-semibold leading-7 text-brand-lavender">Why This Matters</h2>
              <p className="mt-2 text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900 dark:text-slate-100">
                Bridging the gap between information and action.
              </p>
            </div>
            
            <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}
              className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-2"
            >
              {insights.map(insight => (
                <motion.div variants={itemVariants} key={insight.label} className="transition-transform duration-300 hover:scale-[1.02]">
                  <CustomCard
                    footer={
                      <Link href={insight.linkHref} className="text-blue-600 dark:text-blue-500 hover:text-blue-700 dark:hover:text-blue-400 flex items-center text-sm font-semibold">
                        {insight.linkLabel}
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </Link>
                    }
                  >
                    <div className="mb-4 text-[2.5rem] leading-none sm:text-7xl font-semibold text-brand-lavender">
                      <AnimatedCounter value={insight.value} />%
                    </div>
                    <h3 className="text-2xl font-semibold text-slate-900 dark:text-slate-100">{insight.label}</h3>
                    <p className="mt-2 text-slate-600 dark:text-slate-400 min-h-[4.5rem]">{insight.description}</p>
                  </CustomCard>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* --- SECTION 3: RESOURCES --- */}
        <section className="pb-24 sm:pb-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:text-center">
              <h2 className="text-base font-semibold leading-7 text-brand-lavender">A Clear Path Forward</h2>
              <p className="mt-2 text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900 dark:text-slate-100">
                Your Centralized Hub for Cancer Information
              </p>
            </div>

            <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}
              className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none md:grid-cols-2 lg:grid-cols-3"
            >
              {resources.map(res => (
                <motion.div variants={itemVariants} key={res.title} className="flex">
                  <CustomCard
                    className="w-full transition-all duration-300 hover:border-slate-300 dark:hover:border-slate-700 hover:shadow-lg"
                    footer={
                      res.title === "Public Murals" ? (
                        <div className="text-slate-400 dark:text-slate-500 text-sm font-semibold">
                          Coming Soon
                        </div>
                      ) : (
                        <Link href={res.linkHref} className="text-blue-600 dark:text-blue-500 hover:text-blue-700 dark:hover:text-blue-400 flex items-center text-sm font-semibold">
                          {res.linkLabel}
                          <ArrowRight className="w-4 h-4 ml-1" />
                        </Link>
                      )
                    }
                  >
                    {/* DEFINITIVE FIX: The decorative background icon has been removed. */}
                    <div className="mb-4 text-brand-lavender">{res.icon}</div>
                    <h3 className="text-2xl font-semibold text-slate-900 dark:text-slate-100">{res.title}</h3>
                    <p className="mt-2 text-slate-600 dark:text-slate-400 min-h-[6rem]">{res.description}</p>
                  </CustomCard>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
}
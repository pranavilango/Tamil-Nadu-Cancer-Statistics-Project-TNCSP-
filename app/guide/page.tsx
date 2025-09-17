// --- File: app/guide/page.tsx ---
'use client';

import { useState, useEffect, useRef, Suspense } from "react";
import { useRouter, useSearchParams } from 'next/navigation';
import { motion } from 'framer-motion';
import { BookOpen, BrainCircuit, ShieldAlert, BarChartHorizontal, HeartPulse, Search, MessageSquareWarning, Zap, CheckCircle, Menu, List } from 'lucide-react';

import Sidebar from "../components/guide/SideBar";
import OnPageSidebar, { Heading } from "../components/guide/OnPageSidebar";

// All original sections are imported and included
import Introduction, { introductionHeadings } from "../components/guide/Introduction";
import DiseaseMechanism, { diseaseMechanismHeadings } from "../components/guide/DiseaseMechanism";
import CausativeAgents, { causativeAgentsHeadings } from "../components/guide/CausativeAgents";
import StagesOfCancer, { stagesOfCancerHeadings } from "../components/guide/StagesOfCancer";
import Symptoms, { symptomsHeadings } from "../components/guide/Symptoms";
import Detection, { detectionHeadings } from "../components/guide/Detection";
import Stigmas, { stigmasHeadings } from "../components/guide/Stigmas";
import Lifestyle, { lifestyleHeadings } from "../components/guide/Lifestyle";
import Conclusion, { conclusionHeadings } from "../components/guide/Conclusion";

const contentMap: { [key: string]: React.ReactNode } = {
  "Introduction": <Introduction />,
  "Disease Mechanism": <DiseaseMechanism />,
  "Causative Agents": <CausativeAgents />,
  "Stages of Cancer": <StagesOfCancer />,
  "Symptoms": <Symptoms />,
  "Detection": <Detection />,
  "Stigmas": <Stigmas />,
  "Lifestyle Changes": <Lifestyle />,
  "Conclusion": <Conclusion />,
};

const headingsMap: { [key:string]: Heading[] } = {
  "Introduction": introductionHeadings,
  "Disease Mechanism": diseaseMechanismHeadings,
  "Causative Agents": causativeAgentsHeadings,
  "Stages of Cancer": stagesOfCancerHeadings,
  "Symptoms": symptomsHeadings,
  "Detection": detectionHeadings,
  "Stigmas": stigmasHeadings,
  "Lifestyle Changes": lifestyleHeadings,
  "Conclusion": conclusionHeadings,
};

const sectionMetadata = {
  "Introduction": { icon: <BookOpen size={32} />, description: "Understanding the basics of one of the most complex diseases." },
  "Disease Mechanism": { icon: <BrainCircuit size={32} />, description: "The biology behind cancer—explained simply and clearly." },
  "Causative Agents": { icon: <ShieldAlert size={32} />, description: "A look at the genetic and environmental factors that trigger this disease." },
  "Stages of Cancer": { icon: <BarChartHorizontal size={32} />, description: "From early signs to advanced spread—why staging is critical." },
  "Symptoms": { icon: <HeartPulse size={32} />, description: "Spotting signs early can save a life. Learn what to watch for." },
  "Detection": { icon: <Search size={32} />, description: "When found early, cancer can be treated more effectively." },
  "Stigmas": { icon: <MessageSquareWarning size={32} />, description: "The battle beyond the body. Overcoming fear and misinformation." },
  "Lifestyle Changes": { icon: <Zap size={32} />, description: "How everyday habits shape your risk—and your future." },
  "Conclusion": { icon: <CheckCircle size={32} />, description: "Building a future where awareness leads to action and hope." },
};

function GuideView() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const sections = Object.keys(sectionMetadata);
  const activeSection = searchParams.get('section') || sections[0];
  const [activeHeading, setActiveHeading] = useState('');
  const [isLeftSidebarOpen, setIsLeftSidebarOpen] = useState(false);
  const [isRightSidebarOpen, setIsRightSidebarOpen] = useState(false);
  const isClickScrolling = useRef(false);
  const scrollTimeout = useRef<NodeJS.Timeout | null>(null);

  const handleSectionClick = (section: string) => {
    router.push(`/guide?section=${encodeURIComponent(section)}`, { scroll: false });
    setIsLeftSidebarOpen(false);
  };
  
  const handleHeadingClick = (id: string) => {
    isClickScrolling.current = true;
    setActiveHeading(id);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    window.history.pushState(null, '', `#${id}`);
    setIsRightSidebarOpen(false);
    if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
    scrollTimeout.current = setTimeout(() => { isClickScrolling.current = false; }, 1000);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    const observer = new IntersectionObserver(
      (entries) => {
        if (isClickScrolling.current) return;
        entries.forEach((entry) => { if (entry.isIntersecting) setActiveHeading(entry.target.id); });
      },
      { rootMargin: "-25% 0px -70% 0px" } 
    );
    const currentHeadings = headingsMap[activeSection] || [];
    currentHeadings.forEach((heading) => {
      const element = document.getElementById(heading.id);
      if (element) observer.observe(element);
    });
    return () => {
      currentHeadings.forEach((heading) => {
        const element = document.getElementById(heading.id);
        if (element) observer.unobserve(element);
      });
      if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
    };
  }, [activeSection]);

  const currentMetadata = sectionMetadata[activeSection as keyof typeof sectionMetadata];

  return (
    // clip horizontal overflow on small viewports, allow visible overflow on md+ to keep desktop sticky behaviour
    <div className="relative isolate overflow-x-hidden md:overflow-visible">
      <div className="absolute inset-0 -z-10">
        {/* light grid - safe to keep */}
        <div className="absolute inset-0 [background-image:linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] [background-size:36px_36px]"></div>

        {/* hide the large decorative blobs on small screens (they can cause overflow) */}
        <div className="hidden md:block absolute left-0 top-1/4 w-[800px] h-[800px] bg-brand-lavender/10 dark:bg-brand-lavender/20 rounded-full blur-3xl opacity-30 pointer-events-none" />
        <div className="hidden md:block absolute right-0 bottom-1/4 w-[800px] h-[800px] bg-blue-300/10 dark:bg-blue-300/20 rounded-full blur-3xl opacity-30 pointer-events-none" />
      </div>
      
      <div className="max-w-screen-2xl mx-auto md:flex md:flex-row">
        <Sidebar
          sections={sections}
          activeSection={activeSection}
          onSectionClick={handleSectionClick}
          isOpen={isLeftSidebarOpen}
          onClose={() => setIsLeftSidebarOpen(false)}
        />
        
        <div className="w-full flex-1 min-w-0 overflow-x-hidden md:overflow-visible">
            <main className="pt-16 px-4 sm:px-6 lg:px-8 pb-24 md:pb-16">
              <motion.header 
                  key={activeSection}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, ease: 'easeOut' }}
                  className="py-10 md:py-16 text-center border-b border-slate-900/10 dark:border-slate-50/[0.06] mb-8 md:mb-12"
              >
                  <div className="inline-flex items-center justify-center w-14 h-14 md:w-16 md:h-16 mb-4 md:mb-6 text-brand-lavender bg-brand-lavender/10 rounded-2xl">
                      {currentMetadata.icon}
                  </div>
                  <h1 className="text-4xl sm:text-5xl font-semibold tracking-tighter text-slate-900 dark:text-slate-100">
                      {activeSection}
                  </h1>
                  <p className="mt-4 text-base sm:text-lg max-w-2xl mx-auto text-slate-600 dark:text-slate-400">
                      {currentMetadata.description}
                  </p>
              </motion.header>
              
              {contentMap[activeSection]}
            </main>
        </div>

        <OnPageSidebar
          headings={headingsMap[activeSection] || []}
          activeHeading={activeHeading}
          onHeadingClick={handleHeadingClick}
          isOpen={isRightSidebarOpen}
          onClose={() => setIsRightSidebarOpen(false)}
        />
      </div>

      {/* The mobile FABs are perfect and remain untouched. */}
      <div className="md:hidden z-40">
        <button 
          onClick={() => setIsLeftSidebarOpen(true)}
          className="fixed top-[calc(4rem+1rem)] left-4 flex items-center justify-center w-12 h-12 bg-white/80 dark:bg-slate-900/80 backdrop-blur-lg border border-slate-900/10 dark:border-slate-50/[0.06] rounded-full shadow-lg text-slate-600 dark:text-slate-400 hover:text-brand-lavender dark:hover:text-brand-lavender transition-colors"
          aria-label="Open sections menu"
        >
          <Menu className="h-6 w-6" />
        </button>
        <button 
          onClick={() => setIsRightSidebarOpen(true)}
          className="fixed top-[calc(4rem+1rem)] right-4 flex items-center justify-center w-12 h-12 bg-white/80 dark:bg-slate-900/80 backdrop-blur-lg border border-slate-900/10 dark:border-slate-50/[0.06] rounded-full shadow-lg text-slate-600 dark:text-slate-400 hover:text-brand-lavender dark:hover:text-brand-lavender transition-colors"
          aria-label="Open on this page menu"
        >
          <List className="h-6 w-6" />
        </button>
      </div>
    </div>
  );
}

export default function GuidePage() {
  return (
    <Suspense fallback={<div className="w-full h-screen flex items-center justify-center dark:text-white">Loading Guide...</div>}>
      <GuideView />
    </Suspense>
  );
}
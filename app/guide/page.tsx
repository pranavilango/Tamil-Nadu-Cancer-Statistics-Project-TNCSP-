'use client';

import { useState, useEffect, useRef } from "react";
import { useRouter, useSearchParams } from 'next/navigation';

import Sidebar from "../components/guide/SideBar";
import OnPageSidebar, { Heading } from "../components/guide/OnPageSidebar";

// Import all components AND their heading data (imports remain the same)
import Introduction, { introductionHeadings } from "../components/guide/Introduction";
import DiseaseMechanism, { diseaseMechanismHeadings } from "../components/guide/DiseaseMechanism";
import CausativeAgents, { causativeAgentsHeadings } from "../components/guide/CausativeAgents";
import StagesOfCancer, { stagesOfCancerHeadings } from "../components/guide/StagesOfCancer";
import Symptoms, { symptomsHeadings } from "../components/guide/Symptoms";
import Detection, { detectionHeadings } from "../components/guide/Detection";
import Stigmas, { stigmasHeadings } from "../components/guide/Stigmas";
import Lifestyle, { lifestyleHeadings } from "../components/guide/Lifestyle";
import Conclusion, { conclusionHeadings } from "../components/guide/Conclusion";

export default function GuidePage() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const sections = [
    "Introduction", "Disease Mechanism", "Causative Agents", "Stages of Cancer",
    "Symptoms", "Detection", "Stigmas", "Lifestyle Changes", "Conclusion",
  ];

  const activeSection = searchParams.get('section') || sections[0];
  const [activeHeading, setActiveHeading] = useState('');

  // --- State for Mobile Sidebars ---
  const [isLeftSidebarOpen, setIsLeftSidebarOpen] = useState(false);
  const [isRightSidebarOpen, setIsRightSidebarOpen] = useState(false);

  const isClickScrolling = useRef(false);
  const scrollTimeout = useRef<NodeJS.Timeout | null>(null);

  const contentMap: { [key: string]: React.ReactNode } = {
    "Introduction": <Introduction />, "Disease Mechanism": <DiseaseMechanism />,
    "Causative Agents": <CausativeAgents />, "Stages of Cancer": <StagesOfCancer />,
    "Symptoms": <Symptoms />, "Detection": <Detection />, "Stigmas": <Stigmas />,
    "Lifestyle Changes": <Lifestyle />, "Conclusion": <Conclusion />,
  };
  
  const headingsMap: { [key:string]: Heading[] } = {
    "Introduction": introductionHeadings, "Disease Mechanism": diseaseMechanismHeadings,
    "Causative Agents": causativeAgentsHeadings, "Stages of Cancer": stagesOfCancerHeadings,
    "Symptoms": symptomsHeadings, "Detection": detectionHeadings, "Stigmas": stigmasHeadings,
    "Lifestyle Changes": lifestyleHeadings, "Conclusion": conclusionHeadings,
  };

  const handleSectionClick = (section: string) => {
    router.push(`/guide?section=${encodeURIComponent(section)}`, { scroll: false });
    setIsLeftSidebarOpen(false); // Close mobile sidebar on selection
  };
  
  const handleHeadingClick = (id: string) => {
    isClickScrolling.current = true;
    setActiveHeading(id);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    window.history.pushState(null, '', `#${id}`);
    setIsRightSidebarOpen(false); // Close mobile sidebar on selection

    if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
    scrollTimeout.current = setTimeout(() => { isClickScrolling.current = false; }, 1000);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    const observer = new IntersectionObserver(
      (entries) => {
        if (isClickScrolling.current) return;
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveHeading(entry.target.id);
          }
        });
      },
      { rootMargin: "-20% 0px -70% 0px" } 
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

  return (
    <div className="min-h-screen pt-14 flex relative">
      <Sidebar
        title="Guide Sections"
        sections={sections}
        activeSection={activeSection}
        onSectionClick={handleSectionClick}
        position="left"
        isOpen={isLeftSidebarOpen}
        onClose={() => setIsLeftSidebarOpen(false)}
      />
      
      {/* Main content area now has padding that works for both mobile and desktop */}
      <main className="flex-1 md:ml-64 md:mr-64 p-6 md:p-10 pb-24 md:pb-10">
        {contentMap[activeSection]}
      </main>

      <OnPageSidebar
        headings={headingsMap[activeSection] || []}
        activeHeading={activeHeading}
        onHeadingClick={handleHeadingClick}
        isOpen={isRightSidebarOpen}
        onClose={() => setIsRightSidebarOpen(false)}
      />

      {/* --- Mobile Bottom Navigation Bar --- */}
      <div className="md:hidden fixed bottom-0 left-0 w-full h-16 bg-white/95 backdrop-blur-sm border-t border-gray-200 flex justify-around items-center z-20">
        <button 
          onClick={() => setIsLeftSidebarOpen(true)}
          className="flex flex-col items-center text-gray-700 hover:text-black transition p-2"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          <span className="text-xs font-medium">Sections</span>
        </button>
        <button 
          onClick={() => setIsRightSidebarOpen(true)}
          className="flex flex-col items-center text-gray-700 hover:text-black transition p-2"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
          <span className="text-xs font-medium">On This Page</span>
        </button>
      </div>
    </div>
  );
}
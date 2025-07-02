'use client';

import { useState } from "react";
import Sidebar from "./SideBar";

// --- Step 2.1: Import all your new content components ---
import Introduction from "../components/guide/Introduction";
import DiseaseMechanism from "../components/guide/DiseaseMechanism";
import CausativeAgents from "../components/guide/CausativeAgents";
import StagesOfCancer from "../components/guide/StagesOfCancer";
import Symptoms from "../components/guide/Symptoms";
// etc.

export default function GuidePage() {
  const sections = [
    "Introduction",
    "Disease Mechanism",
    "Causative Agents",
    "Stages of Cancer",
    "Symptoms",
    "Detection",
    "Stigmas",
    "Lifestyle Changes",
    "Conclusion",
  ];

  const [activeSection, setActiveSection] = useState("Introduction");

  // --- Step 2.2: Create the content mapping object ---
  // The keys MUST EXACTLY MATCH the strings in your 'sections' array.
  const contentMap: { [key: string]: React.ReactNode } = {
    "Introduction": <Introduction />,
    "Disease Mechanism": <DiseaseMechanism />,
    "Causative Agents": <CausativeAgents />,
    "Stages of Cancer": <StagesOfCancer />,
    "Symptoms": <Symptoms />,
    "Detection": <p>Content for Detection coming soon...</p>,
    "Stigmas": <p>Content for Stigmas coming soon...</p>,
    "Lifestyle Changes": <p>Content for Lifestyle Changes coming soon...</p>,
    "Conclusion": <p>Content for Conclusion coming soon...</p>,
  };

  return (
    <div className="min-h-[300vh] pt-14 flex relative">

      <Sidebar
        title="Guide Sections"
        sections={sections}
        activeSection={activeSection}
        onSectionClick={setActiveSection}
        position="left"
      />
      
      {/* --- Step 2.3: Render the component from the map --- */}
      <main className="flex-1 md:ml-64 md:mr-64 p-6 md:p-10">
        {/* This line dynamically renders the correct component */}
        {contentMap[activeSection]}
      </main>

      <Sidebar
        title="On this page"
        sections={sections}
        activeSection={activeSection}
        onSectionClick={setActiveSection}
        position="right"
      />

    </div>
  );
}
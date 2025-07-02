'use client';

import { useState } from "react";

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

  return (
    <div className="min-h-[300vh] pt-14 flex relative">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute w-full h-[300vh] bg-gradient-to-br from-[#f44e8b] via-[#5557fc] to-[#f44e8b] opacity-20 blur-[120px] rounded-full" />
      </div>

      {/* Step 1: Fixed Sidebar with Selected Button Styling */}
      <aside className="hidden md:flex fixed top-14 left-0 w-64 h-[calc(100vh-3.5rem)] p-6 border-r border-gray-200 bg-[#f7f7f7] backdrop-blur-lg shadow-sm z-10 flex-col">
        <h2 className="text-lg font-semibold mb-6 text-gray-800">Guide Sections</h2>
        <nav className="flex flex-col space-y-2">
          {sections.map((section) => {
            const isActive = activeSection === section;
            return (
              <button
                key={section}
                onClick={() => setActiveSection(section)}
                className={`
                  text-left text-sm font-lg px-4 py-2 rounded-xl transition
                  ${isActive
                    ? "bg-white border border-gray-200 shadow-xs text-gray-900 font-medium"
                    : "text-gray-700 border border-transparent hover:bg-gray-200 hover:text-gray-900"}
                `}
              >
                {section}
              </button>
            );
          })}
        </nav>
      </aside>

      {/* Content Area */}
      <main className="flex-1 md:ml-64 p-6 md:p-10">
        <h1 className="text-3xl font-bold">{activeSection}</h1>
        <p className="mt-4 text-gray-600">Start adding content for <strong>{activeSection}</strong>...</p>
      </main>
    </div>
  );
}
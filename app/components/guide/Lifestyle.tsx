// --- START OF FILE Lifestyle.tsx ---
"use client";
import React from "react";
import { Heading } from "./OnPageSidebar";
import FadeIn from "./FadeIn";
import { StaggeredList, StaggeredListItem } from "./StaggeredList";
import { Shield, CigaretteOff, Apple, Bike, Leaf, Smile, CheckCircle } from "lucide-react";

const InfoBlock = ({ icon, title, children }: { icon: React.ReactNode, title: string, children?: React.ReactNode }) => (
    <div className="flex items-start gap-3 md:gap-4">
        <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-lg md:rounded-xl bg-brand-lavender/10 text-brand-lavender">
            {icon}
        </div>
        <div>
            <h2 className="!text-xl md:!text-2xl !font-semibold !text-slate-900 dark:!text-slate-100 !mt-0 !mb-2">
                {title}
            </h2>
            {children && (
                <div className="text-slate-600 dark:text-slate-400 text-base md:text-lg leading-relaxed">
                    {children}
                </div>
            )}
        </div>
    </div>
);

export const lifestyleHeadings: Heading[] = [
  { id: "key-pillars", title: "The Pillars of Prevention", level: 2 },
  { id: "other-critical-factors", title: "Other Critical Factors", level: 2 },
  { id: "prevention-starts-with-you", title: "Prevention Starts With You", level: 2 },
];

export default function Lifestyle() {
  return (
    <FadeIn>
      <div className="max-w-3xl mx-auto space-y-12 md:space-y-16">
        <section>
            <p className="text-slate-600 dark:text-slate-400 text-base md:text-lg leading-relaxed">
              While cancer can impact anyone, the way we live can significantly influence our risk. Prevention starts with awareness and taking control of what we can: our diet, activity, and environment.
            </p>
        </section>

        <section id="key-pillars" className="scroll-mt-24">
          <InfoBlock icon={<Shield size={24} />} title="The Pillars of Prevention" />
          <div className="mt-8 not-prose">
            <StaggeredList>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <StaggeredListItem>
                  <div className="bg-slate-100/50 dark:bg-slate-800/30 h-full rounded-xl border border-slate-200/80 dark:border-slate-800 p-4 text-center"><CigaretteOff className="mx-auto w-8 h-8 text-brand-lavender mb-2" /><h3 className="font-semibold text-slate-800 dark:text-slate-200 text-base">Avoid Tobacco & Alcohol</h3></div>
                </StaggeredListItem>
                <StaggeredListItem>
                  <div className="bg-slate-100/50 dark:bg-slate-800/30 h-full rounded-xl border border-slate-200/80 dark:border-slate-800 p-4 text-center"><Apple className="mx-auto w-8 h-8 text-brand-lavender mb-2" /><h3 className="font-semibold text-slate-800 dark:text-slate-200 text-base">Eat a Healthy Diet</h3></div>
                </StaggeredListItem>
                <StaggeredListItem>
                  <div className="bg-slate-100/50 dark:bg-slate-800/30 h-full rounded-xl border border-slate-200/80 dark:border-slate-800 p-4 text-center"><Bike className="mx-auto w-8 h-8 text-brand-lavender mb-2" /><h3 className="font-semibold text-slate-800 dark:text-slate-200 text-base">Stay Active</h3></div>
                </StaggeredListItem>
              </div>
            </StaggeredList>
          </div>
        </section>

        <section id="other-critical-factors" className="scroll-mt-24">
            <InfoBlock icon={<Leaf size={24} />} title="Other Critical Factors" />
            <div className="mt-8 not-prose bg-slate-100/50 dark:bg-slate-800/30 backdrop-blur-lg rounded-2xl border border-slate-200/80 dark:border-slate-800 p-4 sm:p-6">
                {/* DEFINITIVE FIX: Added `list-none p-0 m-0` to remove the default browser hyphens and padding. */}
                <ul className="list-none space-y-4 p-0 m-0 text-slate-600 dark:text-slate-400 text-base">
                    <li className="flex items-start gap-3"><Leaf className="w-5 h-5 mt-1 text-green-500 flex-shrink-0" /><span><strong>Environmental Toxins:</strong> Be mindful of polluted air, pesticides, and industrial fumes.</span></li>
                    <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 mt-1 text-green-500 flex-shrink-0" /><span><strong>Infections:</strong> Viruses like HPV and Hepatitis can cause cancer. Vaccination and safe practices are key.</span></li>
                    <li className="flex items-start gap-3"><Smile className="w-5 h-5 mt-1 text-green-500 flex-shrink-0" /><span><strong>Chronic Stress:</strong> Long-term stress weakens the immune system. Manage it through yoga, meditation, or community.</span></li>
                </ul>
            </div>
        </section>

        <section id="prevention-starts-with-you" className="text-center pt-8 scroll-mt-24">
           <div className="bg-slate-100/50 dark:bg-slate-800/30 backdrop-blur-lg rounded-2xl border border-slate-200/80 dark:border-slate-800 py-8 px-4 sm:py-10 sm:px-6">
                <h2 className="!text-2xl !font-semibold !text-slate-900 dark:!text-slate-100 !mt-0">Prevention Starts With You</h2>
                <p className="max-w-xl mx-auto mt-2 text-slate-600 dark:text-slate-400 text-base md:text-lg">
                  It isn’t about fear—it’s about informed choices. Start small. Stay consistent. What you eat, how you move, and how you manage stress all play a role in building a healthy future.
                </p>
            </div>
        </section>

      </div>
    </FadeIn>
  );
}
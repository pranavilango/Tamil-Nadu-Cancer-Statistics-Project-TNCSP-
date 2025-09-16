// --- START OF FILE Detection.tsx ---
"use client";
import { Heading } from "./OnPageSidebar";
import FadeIn from "./FadeIn";
import { StaggeredList, StaggeredListItem } from "./StaggeredList";
import { Beaker, Scan, Stethoscope, CalendarClock, Microscope } from 'lucide-react';

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

export const detectionHeadings: Heading[] = [
  { id: "pillars-of-detection", title: "The Pillars of Detection", level: 2 },
  { id: "routine-screenings", title: "Routine Screenings", level: 2 },
  { id: "dont-wait", title: "Don’t Wait for a Warning", level: 2 },
];

export default function Detection() {
  return (
    <FadeIn>
      <div className="max-w-3xl mx-auto space-y-12 md:space-y-16">
        <section>
            <p className="text-slate-600 dark:text-slate-400 text-base md:text-lg leading-relaxed">
                Early detection is the single most powerful tool in our arsenal. When found early, many cancers can be treated more effectively, giving patients a far better chance of survival. Too often, people ignore symptoms or delay screenings. Cancer doesn’t always shout; sometimes, it whispers.
            </p>
        </section>

        <section id="pillars-of-detection" className="scroll-mt-24">
          <InfoBlock icon={<Microscope size={24} />} title="The Pillars of Detection" />
          <div className="mt-8 not-prose">
            <StaggeredList>
              <div className="space-y-4">
                <StaggeredListItem>
                  <div className="flex items-start gap-4 p-4 bg-slate-100/50 dark:bg-slate-800/30 rounded-lg border border-slate-200/80 dark:border-slate-800"><Stethoscope className="w-6 h-6 text-brand-lavender flex-shrink-0 mt-1" /><div><h3 className="font-semibold text-slate-800 dark:text-slate-200">Physical Examination</h3><p className="text-sm text-slate-500 dark:text-slate-400">Doctors look for lumps or skin changes and review family history to assess risks.</p></div></div>
                </StaggeredListItem>
                <StaggeredListItem>
                  <div className="flex items-start gap-4 p-4 bg-slate-100/50 dark:bg-slate-800/30 rounded-lg border border-slate-200/80 dark:border-slate-800"><Scan className="w-6 h-6 text-brand-lavender flex-shrink-0 mt-1" /><div><h3 className="font-semibold text-slate-800 dark:text-slate-200">Imaging Tests</h3><p className="text-sm text-slate-500 dark:text-slate-400">Mammograms, CT Scans, and MRIs let doctors see what’s happening inside the body.</p></div></div>
                </StaggeredListItem>
                <StaggeredListItem>
                   <div className="flex items-start gap-4 p-4 bg-slate-100/50 dark:bg-slate-800/30 rounded-lg border border-slate-200/80 dark:border-slate-800"><Beaker className="w-6 h-6 text-brand-lavender flex-shrink-0 mt-1" /><div><h3 className="font-semibold text-slate-800 dark:text-slate-200">Lab Tests</h3><p className="text-sm text-slate-500 dark:text-slate-400">Signs of cancer can appear in blood or urine, detected via Pap smears, PSA tests, and more.</p></div></div>
                </StaggeredListItem>
                <StaggeredListItem>
                   <div className="flex items-start gap-4 p-4 bg-slate-100/50 dark:bg-slate-800/30 rounded-lg border border-slate-200/80 dark:border-slate-800"><Microscope className="w-6 h-6 text-brand-lavender flex-shrink-0 mt-1" /><div><h3 className="font-semibold text-slate-800 dark:text-slate-200">Biopsy (The Definitive Test)</h3><p className="text-sm text-slate-500 dark:text-slate-400">A small tissue sample is examined under a microscope to confirm cancer and its specific type.</p></div></div>
                </StaggeredListItem>
              </div>
            </StaggeredList>
          </div>
        </section>

        <section id="routine-screenings" className="scroll-mt-24">
            <InfoBlock icon={<CalendarClock size={24} />} title="Routine Screenings Save Lives">
                <p>
                  Screenings find cancer before symptoms even appear. They should be a regular part of life for at-risk groups, including mammograms, Pap smears, colonoscopies, and oral exams for tobacco users.
                </p>
            </InfoBlock>
             <div className="mt-8 not-prose w-full h-auto bg-slate-100/50 dark:bg-slate-800/30 rounded-2xl border border-slate-200/80 dark:border-slate-800 p-4 sm:p-6 flex items-center justify-center text-slate-700 dark:text-slate-300 text-base sm:text-lg font-medium italic">
                [ Infographic: Screening Timeline by Age and Risk Factor ]
            </div>
        </section>
        
        <section id="dont-wait" className="text-center pt-8 scroll-mt-24">
          <div className="bg-slate-100/50 dark:bg-slate-800/30 backdrop-blur-lg rounded-2xl border border-slate-200/80 dark:border-slate-800 py-8 px-4 sm:py-10 sm:px-6">
              <h2 className="!text-2xl !font-semibold !text-slate-900 dark:!text-slate-100 !mt-0">Don’t Wait for a Warning</h2>
              <p className="max-w-xl mx-auto mt-2 text-slate-600 dark:text-slate-400 text-base md:text-lg">
                Screening services are available in government hospitals, but awareness is still low. Let’s normalize yearly checkups. If you have a high-risk lifestyle, screening isn’t optional—it’s urgent.
              </p>
          </div>
        </section>
      </div>
    </FadeIn>
  );
}
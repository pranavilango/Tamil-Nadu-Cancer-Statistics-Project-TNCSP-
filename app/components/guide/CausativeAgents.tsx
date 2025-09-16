// --- START OF FILE CausativeAgents.tsx ---
import { Heading } from "./OnPageSidebar";
import FadeIn from "./FadeIn";
import { StaggeredList, StaggeredListItem } from "./StaggeredList";
import { Dna, TestTube, Sun, Zap, Activity, ShieldQuestion } from 'lucide-react';

const InfoBlock = ({ icon, title, children }: { icon: React.ReactNode, title: string, children: React.ReactNode }) => (
    <div className="flex items-start gap-3 md:gap-4">
        <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-lg md:rounded-xl bg-brand-lavender/10 text-brand-lavender">
            {icon}
        </div>
        <div>
            <h2 className="!text-xl md:!text-2xl !font-semibold !text-slate-900 dark:!text-slate-100 !mt-0 !mb-2">
                {title}
            </h2>
            <div className="text-slate-600 dark:text-slate-400 text-base md:text-lg leading-relaxed">
                {children}
            </div>
        </div>
    </div>
);

export const causativeAgentsHeadings: Heading[] = [
  { id: "core-issue", title: "The Core Issue: DNA Damage", level: 2 },
  { id: "genetics", title: "Genetics & Heredity", level: 2 },
  { id: "environmental-factors", title: "Environmental Factors", level: 2 },
  { id: "lifestyle-choices", title: "Lifestyle Choices", level: 2 },
];

export default function CancerCauses() {
  return (
    <FadeIn>
      <div className="max-w-3xl mx-auto space-y-12 md:space-y-16">

        <section id="core-issue" className="scroll-mt-24">
            <InfoBlock icon={<ShieldQuestion size={24} />} title="The Core Issue: DNA Damage">
                 <p>
                    Cancer begins when a cell’s <strong>DNA is damaged or mutated</strong>. DNA is the instruction manual for our body. When it mutates, a cell can start acting abnormally—dividing too much or refusing to die when it should. Some changes are inherited; most are caused by things we encounter in life.
                </p>
            </InfoBlock>
        </section>

        <section id="genetics" className="scroll-mt-24">
          <InfoBlock icon={<Dna size={24} />} title="Genetics & Heredity">
            <p>
              Some people are born with mutations that raise their cancer risk. These are passed down through families. These mutations don’t guarantee cancer, but they increase the chances. Other mutations can happen spontaneously during normal cell division.
            </p>
          </InfoBlock>
        </section>

        <section id="environmental-factors" className="scroll-mt-24">
            <InfoBlock icon={<Sun size={24} />} title="Environmental Factors">
                <p>
                  Prolonged exposure to harmful substances is a leading cause of cancer. Our surroundings can directly damage our DNA over time.
                </p>
            </InfoBlock>
            <div className="mt-8 not-prose bg-slate-100/50 dark:bg-slate-800/30 backdrop-blur-lg rounded-2xl border border-slate-200/80 dark:border-slate-800 p-4 sm:p-6">
              <StaggeredList>
                  {/* DEFINITIVE FIX: Added `list-none p-0 m-0` to remove default browser bullets and padding. */}
                  <ul className="space-y-4 list-none p-0 m-0">
                      <StaggeredListItem>
                        <div className="flex items-start gap-3">
                          <TestTube className="w-5 h-5 mt-1 text-brand-lavender flex-shrink-0" />
                          <span><strong>Chemicals:</strong> Tobacco smoke, asbestos, pesticides, and industrial pollutants.</span>
                        </div>
                      </StaggeredListItem>
                      <StaggeredListItem>
                        <div className="flex items-start gap-3">
                          <Zap className="w-5 h-5 mt-1 text-brand-lavender flex-shrink-0" />
                          <span><strong>Radiation:</strong> UV rays from the sun and radiation from medical imaging or other sources.</span>
                        </div>
                      </StaggeredListItem>
                      <StaggeredListItem>
                        <div className="flex items-start gap-3">
                          <Activity className="w-5 h-5 mt-1 text-brand-lavender flex-shrink-0" />
                          <span><strong>Infections:</strong> Viruses like HPV and Hepatitis B/C, and certain bacteria, are linked to cancer.</span>
                        </div>
                      </StaggeredListItem>
                  </ul>
              </StaggeredList>
            </div>
        </section>

        <section id="lifestyle-choices" className="scroll-mt-24">
          <InfoBlock icon={<Activity size={24} />} title="Lifestyle & Other Risks">
            <p>
              Everyday habits, along with natural processes, play a major role. Smoking, excessive alcohol, poor diet, obesity, and lack of exercise all increase risk. Furthermore, as we age, our cells naturally accumulate more mutations, which is why cancer is more common in older adults.
            </p>
          </InfoBlock>
        </section>
      </div>
    </FadeIn>
  );
}
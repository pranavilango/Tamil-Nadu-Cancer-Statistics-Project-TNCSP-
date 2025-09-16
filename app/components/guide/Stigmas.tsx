// --- START OF FILE Stigmas.tsx ---
"use client";
import { Heading } from "./OnPageSidebar";
import FadeIn from "./FadeIn";
import { StaggeredList, StaggeredListItem } from "./StaggeredList";
import { MessageSquareOff, Users, HeartHandshake } from 'lucide-react';

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

export const stigmasHeadings: Heading[] = [
  { id: "the-silent-burden", title: "The Silent Burden", level: 2 },
  { id: "breaking-the-walls", title: "Breaking the Walls of Stigma", level: 2 },
  { id: "change-starts-with-us", title: "Change Starts With Us", level: 2 },
];

export default function Stigmas() {
  return (
    <FadeIn>
      <div className="max-w-3xl mx-auto space-y-12 md:space-y-16">
        <section id="the-silent-burden" className="scroll-mt-24">
            <InfoBlock icon={<MessageSquareOff size={24} />} title="The Silent Burden">
                <p>
                  In many communities, cancer is still surrounded by fear, silence, and shame. Some see it as a punishment, a result of karma, or even a curse. These are myths. Stigma doesn’t just hurt feelings—it makes people hide their diagnosis, delay treatment, and reject help. It can cost lives.
                </p>
            </InfoBlock>
        </section>

        <section id="breaking-the-walls" className="scroll-mt-24">
            <InfoBlock icon={<Users size={24} />} title="Breaking the Walls of Stigma" />
            <div className="mt-8 not-prose">
              <StaggeredList>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <StaggeredListItem>
                    <div className="bg-slate-100/50 dark:bg-slate-800/30 h-full rounded-lg border border-slate-200/80 dark:border-slate-800 p-4 space-y-2"><h3 className="font-semibold text-slate-800 dark:text-slate-200">Isolation at Home</h3><p className="text-sm text-slate-500 dark:text-slate-400">Families may hide a diagnosis, fearing judgment. This secrecy isolates the patient when they need support the most.</p></div>
                  </StaggeredListItem>
                  <StaggeredListItem>
                    <div className="bg-slate-100/50 dark:bg-slate-800/30 h-full rounded-lg border border-slate-200/80 dark:border-slate-800 p-4 space-y-2"><h3 className="font-semibold text-slate-800 dark:text-slate-200">A Double Burden for Women</h3><p className="text-sm text-slate-500 dark:text-slate-400">Stigma hits women especially hard. Reproductive cancers are seen as a source of dishonor, and women may be blamed or shunned.</p></div>
                  </StaggeredListItem>
                  <StaggeredListItem>
                    <div className="bg-slate-100/50 dark:bg-slate-800/30 h-full rounded-lg border border-slate-200/80 dark:border-slate-800 p-4 space-y-2"><h3 className="font-semibold text-slate-800 dark:text-slate-200">More Than Hair Loss</h3><p className="text-sm text-slate-500 dark:text-slate-400">Visible changes are deeply emotional. The myth that cancer always means death prevents people from getting tested early.</p></div>
                  </StaggeredListItem>
                   <StaggeredListItem>
                    <div className="bg-slate-100/50 dark:bg-slate-800/30 h-full rounded-lg border border-slate-200/80 dark:border-slate-800 p-4 space-y-2"><h3 className="font-semibold text-slate-800 dark:text-slate-200">The Price of Survival</h3><p className="text-sm text-slate-500 dark:text-slate-400">The high cost of treatment leads to another stigma. Families may sell assets, and patients can feel like a burden.</p></div>
                  </StaggeredListItem>
                </div>
              </StaggeredList>
            </div>
        </section>

        <section id="change-starts-with-us" className="text-center pt-8 scroll-mt-24">
            <div className="bg-slate-100/50 dark:bg-slate-800/30 backdrop-blur-lg rounded-2xl border border-slate-200/80 dark:border-slate-800 py-8 px-4 sm:py-10 sm:px-6">
                <div className="inline-flex items-center justify-center w-14 h-14 mb-4 text-brand-lavender bg-brand-lavender/10 rounded-full">
                    <HeartHandshake size={32} />
                </div>
                <h2 className="!text-2xl !font-semibold !text-slate-900 dark:!text-slate-100 !mt-0">Change Starts With Us</h2>
                <p className="max-w-xl mx-auto mt-2 text-slate-600 dark:text-slate-400 text-base md:text-lg">
                  Curing cancer requires medicine. Defeating stigma requires courage, conversation, and compassion. Let's stop whispering and start listening. Cancer doesn't isolate people—stigma does.
                </p>
            </div>
        </section>
      </div>
    </FadeIn>
  );
}
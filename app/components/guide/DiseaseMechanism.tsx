// --- START OF FILE DiseaseMechanism.tsx ---
import { Heading } from "./OnPageSidebar";
import FadeIn from "./FadeIn";
import { StaggeredList, StaggeredListItem } from "./StaggeredList";
import { Dna, Activity, Grid2x2, Unplug } from 'lucide-react';

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

export const diseaseMechanismHeadings: Heading[] = [
    { id: "from-healthy-to-tumor", title: "From Healthy Cell to Tumor", level: 2 },
    { id: "how-cancer-disrupts", title: "How Cancer Disrupts the Body", level: 2 },
    { id: "root-cause-mutations", title: "The Root Cause: Mutations", level: 2 },
    { id: "one-name-many-diseases", title: "One Name, Many Diseases", level: 2 },
];

export default function DiseaseMechanism() {
  return (
    <FadeIn>
      <div className="max-w-3xl mx-auto space-y-12 md:space-y-16">
        
        <section id="from-healthy-to-tumor" className="scroll-mt-24">
            <div className="not-prose bg-slate-100/50 dark:bg-slate-800/30 backdrop-blur-lg rounded-2xl border border-slate-200/80 dark:border-slate-800 p-4 sm:p-6 space-y-4">
                <h2 className="!text-xl md:!text-2xl !font-semibold !text-slate-900 dark:!text-slate-100 !mt-0">From a Healthy Cell to a Tumor</h2>
                <div className="space-y-4 text-slate-600 dark:text-slate-400 text-base md:text-lg leading-relaxed">
                    <p>
                        Your body is made of tiny building blocks called <strong>cells</strong>. They are programmed to grow, divide, and die in a controlled, orderly way.
                    </p>
                    <p>
                        Cancer begins when this control system breaks. A cell starts to <strong>divide uncontrollably</strong>, ignoring signals to stop. This creates a clump of abnormal cells called a <strong>tumor</strong>.
                    </p>
                </div>
            </div>
             <div className="mt-8 not-prose w-full h-auto bg-slate-100/50 dark:bg-slate-800/30 rounded-2xl border border-slate-200/80 dark:border-slate-800 p-4 sm:p-6 flex items-center justify-center text-slate-700 dark:text-slate-300 text-base sm:text-lg font-medium italic">
                [ Infographic: Benign (Non-Cancerous) vs. Malignant (Cancerous) Tumors ]
            </div>
        </section>
        
        <section id="how-cancer-disrupts" className="scroll-mt-24">
            <InfoBlock icon={<Unplug size={24} />} title="How Cancer Disrupts the Body">
                <p>
                  Cancer cells are disruptive. They crowd out healthy cells and steal nutrients and oxygen. Because they come from your own body, the immune system often struggles to fight them effectively. They master two dangerous tricks:
                </p>
            </InfoBlock>
            <div className="mt-8 not-prose">
              <StaggeredList>
                {/* DEFINITIVE FIX: Added `list-none p-0 m-0` to remove default browser bullets and padding. */}
                <ul className="space-y-4 list-none p-0 m-0">
                  <StaggeredListItem>
                    <div className="p-4 bg-slate-100/50 dark:bg-slate-800/30 rounded-lg border border-slate-200/80 dark:border-slate-800">
                      <h3 className="font-semibold text-slate-800 dark:text-slate-200">Avoiding Self-Destruction</h3>
                      <p className="text-sm text-slate-500 dark:text-slate-400">They ignore the natural signals that tell old or damaged cells to die (a process called apoptosis).</p>
                    </div>
                  </StaggeredListItem>
                  <StaggeredListItem>
                     <div className="p-4 bg-slate-100/50 dark:bg-slate-800/30 rounded-lg border border-slate-200/80 dark:border-slate-800">
                      <h3 className="font-semibold text-slate-800 dark:text-slate-200">Building Their Own Supply Lines</h3>
                      <p className="text-sm text-slate-500 dark:text-slate-400">They trick the body into growing new blood vessels to feed them (a process called angiogenesis).</p>
                    </div>
                  </StaggeredListItem>
                </ul>
              </StaggeredList>
            </div>
        </section>

        <section id="root-cause-mutations" className="scroll-mt-24">
            <InfoBlock icon={<Dna size={24} />} title="The Root Cause: Genetic Mutations">
                <p>
                    At its core, cancer is a genetic disease. It is caused by <strong>mutations</strong> (changes) in a cell's DNA that hijack its instruction manual. Some mutations are inherited, but most are acquired over a lifetime from environmental factors or random errors during cell division.
                </p>
            </InfoBlock>
        </section>

        <section id="one-name-many-diseases" className="scroll-mt-24">
            <InfoBlock icon={<Grid2x2 size={24} />} title="One Name, Many Diseases">
                 <p>
                    It is crucial to remember that "cancer" is not one disease—it's a group of <strong>over 100 distinct types</strong>. Some grow fast, others slow. Some need surgery, others need chemotherapy or radiation. Understanding the specific type is the first step to the right treatment.
                </p>
            </InfoBlock>
        </section>

      </div>
    </FadeIn>
  );
}
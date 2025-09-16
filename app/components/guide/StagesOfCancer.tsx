// --- START OF FILE StagesOfCancer.tsx ---
import { Heading } from "./OnPageSidebar";
import FadeIn from "./FadeIn";
import { Layers, CheckCircle } from "lucide-react";

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

export const stagesOfCancerHeadings: Heading[] = [
  { id: "why-staging-matters", title: "Why Staging Matters", level: 2 },
  { id: "tnm-system", title: "The TNM System", level: 2 },
  { id: "stages-at-a-glance", title: "The Stages at a Glance", level: 2 },
];

export default function StagesOfCancer() {
  return (
    <FadeIn>
      <div className="max-w-3xl mx-auto space-y-12 md:space-y-16">
        <section id="why-staging-matters" className="scroll-mt-24">
            <InfoBlock icon={<Layers size={24} />} title="Why Staging Matters">
                <p>
                    Doctors classify cancer into <strong>stages from 0 to IV</strong> to describe how far it has grown or spread. Staging is critical because it helps doctors choose the best treatment plan and predict the likely outcome for a patient.
                </p>
            </InfoBlock>
        </section>

        <section id="tnm-system" className="scroll-mt-24">
          <div className="not-prose bg-slate-100/50 dark:bg-slate-800/30 backdrop-blur-lg rounded-2xl border border-slate-200/80 dark:border-slate-800 p-4 sm:p-6 space-y-4">
            <h2 className="!text-xl md:!text-2xl !font-semibold !text-slate-900 dark:!text-slate-100 !mt-0">📊 The TNM System</h2>
            <p className="text-slate-600 dark:text-slate-400 text-base md:text-lg">
              One of the most common methods is the <strong>TNM system</strong>, a detailed snapshot based on three key factors:
            </p>
            {/* This list already had `list-none` and was correct. */}
            <ul className="list-none text-slate-600 dark:text-slate-400 text-base space-y-3 pt-2">
              <li className="flex items-start gap-3"><strong className="font-semibold text-slate-800 dark:text-slate-200">T (Tumor):</strong> Measures the size and extent of the original tumor.</li>
              <li className="flex items-start gap-3"><strong className="font-semibold text-slate-800 dark:text-slate-200">N (Nodes):</strong> Shows if cancer has spread to nearby lymph nodes.</li>
              <li className="flex items-start gap-3"><strong className="font-semibold text-slate-800 dark:text-slate-200">M (Metastasis):</strong> Confirms if cancer has spread to distant parts of the body.</li>
            </ul>
          </div>
        </section>

        <section id="stages-at-a-glance" className="scroll-mt-24">
            <InfoBlock icon={<CheckCircle size={24} />} title="The Stages at a Glance">
                <p>
                    Using the TNM system and other tests, doctors assign a stage from 0 to IV. Early stages have the highest chance of successful treatment, which is why early detection is so vital.
                </p>
            </InfoBlock>
            <div className="mt-8 not-prose overflow-x-auto rounded-2xl shadow-lg border border-slate-200/80 dark:border-slate-800">
                <table className="w-full table-auto text-left text-sm md:text-base text-slate-800 dark:text-slate-300">
                    <thead className="bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white font-semibold">
                        <tr>
                            <th className="px-4 py-3 border-b-2 border-slate-200 dark:border-slate-700">Stage</th>
                            <th className="px-4 py-3 border-b-2 border-slate-200 dark:border-slate-700">Description</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white/80 dark:bg-slate-900/80">
                        <tr className="border-t border-slate-200 dark:border-slate-800"><td className="px-4 py-3 font-medium align-top">Stage 0</td><td className="px-4 py-3">Abnormal cells are present but have not spread (carcinoma in situ).</td></tr>
                        <tr className="border-t border-slate-200 dark:border-slate-800"><td className="px-4 py-3 font-medium align-top">Stage I</td><td className="px-4 py-3">A small, localized tumor that has not grown deeply into nearby tissues.</td></tr>
                        <tr className="border-t border-slate-200 dark:border-slate-800"><td className="px-4 py-3 font-medium align-top">Stage II & III</td><td className="px-4 py-3">The cancer is larger and may have spread to nearby lymph nodes, but not distant parts of the body.</td></tr>
                        <tr className="border-t border-slate-200 dark:border-slate-800"><td className="px-4 py-3 font-medium align-top">Stage IV</td><td className="px-4 py-3">The cancer has metastasized, spreading to distant organs like the lungs, liver, or brain.</td></tr>
                    </tbody>
                </table>
            </div>
        </section>
      </div>
    </FadeIn>
  );
}
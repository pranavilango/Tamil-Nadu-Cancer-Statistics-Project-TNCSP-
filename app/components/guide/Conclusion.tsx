// --- START OF FILE Conclusion.tsx ---
import { Heading } from "./OnPageSidebar";
import FadeIn from "./FadeIn";
import { Check, Heart, Handshake } from "lucide-react";

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


export const conclusionHeadings: Heading[] = [
  { id: "key-takeaways", title: "Our Path Forward", level: 2 },
  { id: "be-the-change", title: "Be the Change", level: 2 },
];

export default function Conclusion() {
  return (
    <FadeIn>
      <div className="max-w-3xl mx-auto space-y-12 md:space-y-16">
        <section>
          <p className="text-slate-600 dark:text-slate-400 text-base md:text-lg leading-relaxed">
            Cancer is a complex illness, but it is no longer the death sentence it was once believed to be. Thanks to medical advancements, many cancers are now <strong>treatable, manageable, and even curable</strong>—especially when detected early. The future of cancer care in Tamil Nadu rests on our collective responsibility.
          </p>
        </section>

        <section id="key-takeaways" className="scroll-mt-24">
            <InfoBlock icon={<Heart size={24} />} title="Our Path Forward: Key Takeaways" />
            <div className="mt-8 not-prose bg-slate-100/50 dark:bg-slate-800/30 backdrop-blur-lg rounded-2xl border border-slate-200/80 dark:border-slate-800 p-4 sm:p-6">
              {/* DEFINITIVE FIX: Added `list-none p-0 m-0` to remove the default browser hyphens and padding. */}
              <ul className="list-none space-y-4 text-slate-600 dark:text-slate-400 text-base p-0 m-0">
                  <li className="flex items-start space-x-3">
                    <Check className="text-green-500 font-bold w-5 h-5 mt-1 flex-shrink-0" />
                    <span><strong>Prevention is Powerful:</strong> Regular check-ups, avoiding tobacco, and staying active are simple actions that drastically reduce risk.</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Check className="text-green-500 font-bold w-5 h-5 mt-1 flex-shrink-0" />
                    <span><strong>Early Detection is a Lifesaver:</strong> We must normalize screenings and encourage everyone to seek help for persistent symptoms without delay.</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Check className="text-green-500 font-bold w-5 h-5 mt-1 flex-shrink-0" />
                    <span><strong>Community is a Cure:</strong> Every individual, family, and leader has a role. We must support patients, educate children, and build a culture of health.</span>
                  </li>
              </ul>
            </div>
        </section>
        
        <section className="text-center italic text-slate-500 dark:text-slate-400 text-base md:text-lg">
            <p>
              Let’s strive to make <strong>treatment accessible to all</strong> and <strong>survivors symbols of strength</strong>. A cancer-aware Tamil Nadu is not a dream—it is a vision we must realize together.
            </p>
        </section>

        <section id="be-the-change" className="text-center pt-8 scroll-mt-24">
            <div className="bg-slate-100/50 dark:bg-slate-800/30 backdrop-blur-lg rounded-2xl border border-slate-200/80 dark:border-slate-800 py-8 px-4 sm:py-10 sm:px-6">
                <div className="inline-flex items-center justify-center w-14 h-14 mb-4 text-brand-lavender bg-brand-lavender/10 rounded-full">
                    <Handshake size={32} />
                </div>
                <h2 className="!text-2xl !font-semibold !text-slate-900 dark:!text-slate-100 !mt-0">Be the Change</h2>
                <p className="max-w-xl mx-auto mt-2 text-slate-600 dark:text-slate-400 text-base md:text-lg">
                  By staying informed, supporting those affected, and making healthier choices, <strong>you</strong> can help
                  transform fear into hope and isolation into solidarity. Let’s make cancer awareness a way of life.
                </p>
            </div>
        </section>
      </div>
    </FadeIn>
  );
}
// --- START OF FILE Symptoms.tsx ---
import { Heading } from "./OnPageSidebar";
import FadeIn from "./FadeIn";
import { ListChecks, AlertTriangle, CheckCircle } from 'lucide-react';
import { useGuide } from "../../guide/GuideContext";

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

export const symptomsHeadings: Heading[] = [
  { id: "general-symptoms", title: "General Symptoms", level: 2 },
  { id: "type-specific-signs", title: "Type-Specific Signs", level: 2 },
  { id: "dont-ignore-signs", title: "Don't Ignore the Signs", level: 2 },
];

export default function Symptoms() {
    const { language } = useGuide();

    return (
      <FadeIn>
        <div className="max-w-3xl mx-auto space-y-12 md:space-y-16">
            <section>
                {language === 'en' ? (
                    <p className="text-slate-600 dark:text-slate-400 text-base md:text-lg leading-relaxed">
                        Cancer symptoms vary widely. Some early-stage cancers show <strong>no symptoms at all</strong>, while others mimic common illnesses. That's why it is crucial to be vigilant and <strong>consult a doctor</strong> if you notice any persistent or unusual changes in your body.
                    </p>
                ) : (
                    <p className="text-slate-600 dark:text-slate-400 text-base md:text-lg leading-relaxed">
                        புற்றுநோய் அறிகுறிகள் பரவலாக மாறுபடும். சில ஆரம்ப நிலை புற்றுநோய்கள் <strong>எந்த அறிகுறிகளையும் காட்டுவதில்லை</strong>, மற்றவை சாதாரண நோய்களைப் போலவே இருக்கும். எனவே, உங்கள் உடலில் ஏதேனும் தொடர்ச்சியான அல்லது அசாதாரண மாற்றங்களை நீங்கள் கவனித்தால், விழிப்புடன் இருப்பது மற்றும் <strong>மருத்துவரை அணுகுவது</strong> மிக முக்கியம்.
                    </p>
                )}
            </section>
            
            <section id="general-symptoms" className="scroll-mt-24">
              <InfoBlock icon={<ListChecks size={24} />} title={language === 'en' ? "General Symptoms to Watch For" : "கவனிக்க வேண்டிய பொதுவான அறிகுறிகள்"} />
              <div className="mt-8 not-prose bg-slate-100/50 dark:bg-slate-800/30 backdrop-blur-lg rounded-2xl border border-slate-200/80 dark:border-slate-800 p-4 sm:p-6">
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3 list-none p-0 m-0 text-slate-600 dark:text-slate-400 text-base">
                      <li className="flex items-center gap-3"><CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" /> {language === 'en' ? "Unexplained weight loss" : "காரணமில்லாத எடை குறைவு"}</li>
                      <li className="flex items-center gap-3"><CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" /> {language === 'en' ? "A lump or swelling" : "கட்டி அல்லது வீக்கம்"}</li>
                      <li className="flex items-center gap-3"><CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" /> {language === 'en' ? "A sore that doesn’t heal" : "ஆறாத புண்"}</li>
                      <li className="flex items-center gap-3"><CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" /> {language === 'en' ? "Unusual bleeding" : "அசாதாரண இரத்தப்போக்கு"}</li>
                      <li className="flex items-center gap-3"><CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" /> {language === 'en' ? "Persistent cough" : "தொடர்ச்சியான இருமல்"}</li>
                      <li className="flex items-center gap-3"><CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" /> {language === 'en' ? "Difficulty swallowing" : "விழுங்குவதில் சிரமம்"}</li>
                      <li className="flex items-center gap-3"><CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" /> {language === 'en' ? "Changes in bowel/bladder habits" : "மல/சிறுநீர் கழிக்கும் பழக்கத்தில் மாற்றம்"}</li>
                      <li className="flex items-center gap-3"><CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" /> {language === 'en' ? "Extreme fatigue" : "கடுமையான சோர்வு"}</li>
                  </ul>
              </div>
            </section>
            
            <section id="type-specific-signs" className="scroll-mt-24">
                <InfoBlock icon={<AlertTriangle size={24} />} title={language === 'en' ? "Type-Specific Warning Signs" : "வகை சார்ந்த எச்சரிக்கை அறிகுறிகள்"} />
                <div className="mt-8 not-prose w-full h-auto bg-slate-100/50 dark:bg-slate-800/30 rounded-2xl border border-slate-200/80 dark:border-slate-800 p-4 sm:p-6 flex items-center justify-center text-slate-700 dark:text-slate-300 text-base sm:text-lg font-medium italic">
                    {language === 'en' ? "[ Infographic: Common Symptoms by Cancer Type (Breast, Lung, etc.) ]" : "[ தகவல் படம்: புற்றுநோய் வகைகளின் பொதுவான அறிகுறிகள் ]"}
                </div>
            </section>

            <section id="dont-ignore-signs" className="text-center pt-8 scroll-mt-24">
                <div className="bg-slate-100/50 dark:bg-slate-800/30 backdrop-blur-lg rounded-2xl border border-slate-200/80 dark:border-slate-800 py-8 px-4 sm:py-10 sm:px-6">
                    <h2 className="!text-2xl !font-semibold !text-slate-900 dark:!text-slate-100 !mt-0">{language === 'en' ? "Do Not Ignore the Signs" : "அறிகுறிகளை அலட்சியப்படுத்தாதீர்கள்"}</h2>
                    {language === 'en' ? (
                        <p className="max-w-xl mx-auto mt-2 text-slate-600 dark:text-slate-400 text-base md:text-lg">
                            If you notice any of these signs, <strong>don't wait.</strong> Seeing a doctor can lead to a faster diagnosis and a much better outcome. It’s not overreacting—it’s being proactive.
                        </p>
                    ) : (
                        <p className="max-w-xl mx-auto mt-2 text-slate-600 dark:text-slate-400 text-base md:text-lg">
                            இந்த அறிகுறிகளில் ஏதேனும் ஒன்றை நீங்கள் கவனித்தால், <strong>காத்திருக்க வேண்டாம்.</strong> மருத்துவரைப் பார்ப்பது விரைவான நோயறிதலுக்கும் சிறந்த விளைவுக்கும் வழிவகுக்கும். இது மிகைப்படுத்தல் அல்ல—இது முன்னெச்சரிக்கை நடவடிக்கை.
                        </p>
                    )}
                </div>
            </section>
        </div>
      </FadeIn>
    );
}
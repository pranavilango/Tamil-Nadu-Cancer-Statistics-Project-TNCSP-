// --- START OF FILE Lifestyle.tsx ---
"use client";
import React from "react";
import { Heading } from "./OnPageSidebar";
import FadeIn from "./FadeIn";
import { StaggeredList, StaggeredListItem } from "./StaggeredList";
import { Shield, CigaretteOff, Apple, Bike, Leaf, Smile, CheckCircle } from "lucide-react";
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

export const lifestyleHeadings: Heading[] = [
  { id: "key-pillars", title: "The Pillars of Prevention", level: 2 },
  { id: "other-critical-factors", title: "Other Critical Factors", level: 2 },
  { id: "prevention-starts-with-you", title: "Prevention Starts With You", level: 2 },
];

export default function Lifestyle() {
  const { language } = useGuide();

  return (
    <FadeIn>
      <div className="max-w-3xl mx-auto space-y-12 md:space-y-16">
        <section>
            {language === 'en' ? (
                <p className="text-slate-600 dark:text-slate-400 text-base md:text-lg leading-relaxed">
                  While cancer can impact anyone, the way we live can significantly influence our risk. Prevention starts with awareness and taking control of what we can: our diet, activity, and environment.
                </p>
            ) : (
                <p className="text-slate-600 dark:text-slate-400 text-base md:text-lg leading-relaxed">
                  புற்றுநோய் யாரையும் பாதிக்கலாம் என்றாலும், நாம் வாழும் விதம் நமது அபாயத்தை கணிசமாக பாதிக்கிறது. விழிப்புணர்வு மற்றும் நம்மால் முடிந்தவற்றைக் கட்டுப்படுத்துவதில் தடுப்பு தொடங்குகிறது: நமது உணவு, செயல்பாடு மற்றும் சுற்றுச்சூழல்.
                </p>
            )}
        </section>

        <section id="key-pillars" className="scroll-mt-24">
          <InfoBlock icon={<Shield size={24} />} title={language === 'en' ? "The Pillars of Prevention" : "தடுப்பு முறையின் தூண்கள்"} />
          <div className="mt-8 not-prose">
            <StaggeredList>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <StaggeredListItem>
                  <div className="bg-slate-100/50 dark:bg-slate-800/30 h-full rounded-xl border border-slate-200/80 dark:border-slate-800 p-4 text-center"><CigaretteOff className="mx-auto w-8 h-8 text-brand-lavender mb-2" /><h3 className="font-semibold text-slate-800 dark:text-slate-200 text-base">{language === 'en' ? "Avoid Tobacco & Alcohol" : "புகையிலை & மதுவைத் தவிருங்கள்"}</h3></div>
                </StaggeredListItem>
                <StaggeredListItem>
                  <div className="bg-slate-100/50 dark:bg-slate-800/30 h-full rounded-xl border border-slate-200/80 dark:border-slate-800 p-4 text-center"><Apple className="mx-auto w-8 h-8 text-brand-lavender mb-2" /><h3 className="font-semibold text-slate-800 dark:text-slate-200 text-base">{language === 'en' ? "Eat a Healthy Diet" : "ஆரோக்கியமான உணவு"}</h3></div>
                </StaggeredListItem>
                <StaggeredListItem>
                  <div className="bg-slate-100/50 dark:bg-slate-800/30 h-full rounded-xl border border-slate-200/80 dark:border-slate-800 p-4 text-center"><Bike className="mx-auto w-8 h-8 text-brand-lavender mb-2" /><h3 className="font-semibold text-slate-800 dark:text-slate-200 text-base">{language === 'en' ? "Stay Active" : "சுறுசுறுப்பாக இருங்கள்"}</h3></div>
                </StaggeredListItem>
              </div>
            </StaggeredList>
          </div>
        </section>

        <section id="other-critical-factors" className="scroll-mt-24">
            <InfoBlock icon={<Leaf size={24} />} title={language === 'en' ? "Other Critical Factors" : "பிற முக்கிய காரணிகள்"} />
            <div className="mt-8 not-prose bg-slate-100/50 dark:bg-slate-800/30 backdrop-blur-lg rounded-2xl border border-slate-200/80 dark:border-slate-800 p-4 sm:p-6">
                <ul className="list-none space-y-4 p-0 m-0 text-slate-600 dark:text-slate-400 text-base">
                    <li className="flex items-start gap-3"><Leaf className="w-5 h-5 mt-1 text-green-500 flex-shrink-0" /><span><strong>{language === 'en' ? "Environmental Toxins:" : "சுற்றுச்சூழல் நச்சுகள்:"}</strong> {language === 'en' ? "Be mindful of polluted air, pesticides, and industrial fumes." : "மாசுபட்ட காற்று, பூச்சிக்கொல்லிகள் மற்றும் தொழிற்சாலை புகைகள் குறித்து கவனமாக இருங்கள்."}</span></li>
                    <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 mt-1 text-green-500 flex-shrink-0" /><span><strong>{language === 'en' ? "Infections:" : "தொற்றுகள்:"}</strong> {language === 'en' ? "Viruses like HPV and Hepatitis can cause cancer. Vaccination and safe practices are key." : "HPV மற்றும் ஹெபடைடிஸ் போன்ற வைரஸ்கள் புற்றுநோயை உண்டாக்கும். தடுப்பூசி மற்றும் பாதுகாப்பான நடைமுறைகள் முக்கியம்."}</span></li>
                    <li className="flex items-start gap-3"><Smile className="w-5 h-5 mt-1 text-green-500 flex-shrink-0" /><span><strong>{language === 'en' ? "Chronic Stress:" : "நாள்பட்ட மன அழுத்தம்:"}</strong> {language === 'en' ? "Long-term stress weakens the immune system. Manage it through yoga, meditation, or community." : "நீண்ட கால மன அழுத்தம் நோய் எதிர்ப்பு சக்தியை பலவீனப்படுத்துகிறது. யோகா அல்லது தியானம் மூலம் அதை நிர்வகிக்கவும்."}</span></li>
                </ul>
            </div>
        </section>

        <section id="prevention-starts-with-you" className="text-center pt-8 scroll-mt-24">
           <div className="bg-slate-100/50 dark:bg-slate-800/30 backdrop-blur-lg rounded-2xl border border-slate-200/80 dark:border-slate-800 py-8 px-4 sm:py-10 sm:px-6">
                <h2 className="!text-2xl !font-semibold !text-slate-900 dark:!text-slate-100 !mt-0">{language === 'en' ? "Prevention Starts With You" : "தடுப்பு உன்னிடமிருந்து தொடங்குகிறது"}</h2>
                {language === 'en' ? (
                    <p className="max-w-xl mx-auto mt-2 text-slate-600 dark:text-slate-400 text-base md:text-lg">
                      It isn’t about fear—it’s about informed choices. Start small. Stay consistent. What you eat, how you move, and how you manage stress all play a role in building a healthy future.
                    </p>
                ) : (
                    <p className="max-w-xl mx-auto mt-2 text-slate-600 dark:text-slate-400 text-base md:text-lg">
                      இது பயத்தைப் பற்றியது அல்ல—இது தெரிந்தெடுத்த முடிவுகளைப் பற்றியது. சிறியதாகத் தொடங்குங்கள். தொடர்ந்து செய்யுங்கள். நீங்கள் என்ன சாப்பிடுகிறீர்கள், எப்படிச் செயல்படுகிறீர்கள், மன அழுத்தத்தை எப்படி நிர்வகிக்கிறீர்கள் இவை அனைத்தும் ஆரோக்கியமான எதிர்காலத்தை உருவாக்குவதில் பங்கு வகிக்கின்றன.
                    </p>
                )}
            </div>
        </section>

      </div>
    </FadeIn>
  );
}
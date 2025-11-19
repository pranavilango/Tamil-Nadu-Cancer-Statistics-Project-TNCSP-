// --- START OF FILE Detection.tsx ---
"use client";
import { Heading } from "./OnPageSidebar";
import FadeIn from "./FadeIn";
import { StaggeredList, StaggeredListItem } from "./StaggeredList";
import { Beaker, Scan, Stethoscope, CalendarClock, Microscope } from 'lucide-react';
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

export const detectionHeadings: Heading[] = [
  { id: "pillars-of-detection", title: "The Pillars of Detection", level: 2 },
  { id: "routine-screenings", title: "Routine Screenings", level: 2 },
  { id: "dont-wait", title: "Don’t Wait for a Warning", level: 2 },
];

export default function Detection() {
  const { language } = useGuide();
  
  return (
    <FadeIn>
      <div className="max-w-3xl mx-auto space-y-12 md:space-y-16">
        <section>
            {language === 'en' ? (
                <p className="text-slate-600 dark:text-slate-400 text-base md:text-lg leading-relaxed">
                    Early detection is the single most powerful tool in our arsenal. When found early, many cancers can be treated more effectively, giving patients a far better chance of survival. Too often, people ignore symptoms or delay screenings. Cancer doesn’t always shout; sometimes, it whispers.
                </p>
            ) : (
                <p className="text-slate-600 dark:text-slate-400 text-base md:text-lg leading-relaxed">
                    ஆரம்பகால கண்டறிதல் நமது ஆயுதக் கிடங்கில் உள்ள மிகவும் சக்திவாய்ந்த கருவியாகும். ஆரம்பத்தில் கண்டறியப்பட்டால், பல புற்றுநோய்களை மிகவும் திறம்பட குணப்படுத்த முடியும். இது நோயாளிகள் பிழைப்பதற்கான வாய்ப்பை அதிகரிக்கிறது. பல நேரங்களில், மக்கள் அறிகுறிகளைப் புறக்கணிக்கிறார்கள் அல்லது பரிசோதனைகளைத் தாமதப்படுத்துகிறார்கள். புற்றுநோய் எப்போதும் சத்தமிடுவதில்லை; சில சமயங்களில் அது கிசுகிசுக்கும்.
                </p>
            )}
        </section>

        <section id="pillars-of-detection" className="scroll-mt-24">
          <InfoBlock icon={<Microscope size={24} />} title={language === 'en' ? "The Pillars of Detection" : "கண்டறிதலின் தூண்கள்"} />
          <div className="mt-8 not-prose">
            <StaggeredList>
              <div className="space-y-4">
                <StaggeredListItem>
                  <div className="flex items-start gap-4 p-4 bg-slate-100/50 dark:bg-slate-800/30 rounded-lg border border-slate-200/80 dark:border-slate-800">
                      <Stethoscope className="w-6 h-6 text-brand-lavender flex-shrink-0 mt-1" />
                      <div>
                          <h3 className="font-semibold text-slate-800 dark:text-slate-200">{language === 'en' ? "Physical Examination" : "உடல் பரிசோதனை"}</h3>
                          <p className="text-sm text-slate-500 dark:text-slate-400">{language === 'en' ? "Doctors look for lumps or skin changes and review family history to assess risks." : "மருத்துவர்கள் கட்டிகள் அல்லது தோல் மாற்றங்களைத் தேடுகிறார்கள் மற்றும் அபாயங்களை மதிப்பிட குடும்ப வரலாற்றை ஆய்வு செய்கிறார்கள்."}</p>
                      </div>
                  </div>
                </StaggeredListItem>
                <StaggeredListItem>
                  <div className="flex items-start gap-4 p-4 bg-slate-100/50 dark:bg-slate-800/30 rounded-lg border border-slate-200/80 dark:border-slate-800">
                      <Scan className="w-6 h-6 text-brand-lavender flex-shrink-0 mt-1" />
                      <div>
                          <h3 className="font-semibold text-slate-800 dark:text-slate-200">{language === 'en' ? "Imaging Tests" : "இமேஜிங் சோதனைகள்"}</h3>
                          <p className="text-sm text-slate-500 dark:text-slate-400">{language === 'en' ? "Mammograms, CT Scans, and MRIs let doctors see what’s happening inside the body." : "மேம்மோகிராம்கள், CT ஸ்கேன்கள் மற்றும் MRI-கள் உடலுக்குள் என்ன நடக்கிறது என்பதை மருத்துவர்கள் பார்க்க உதவுகின்றன."}</p>
                      </div>
                  </div>
                </StaggeredListItem>
                <StaggeredListItem>
                   <div className="flex items-start gap-4 p-4 bg-slate-100/50 dark:bg-slate-800/30 rounded-lg border border-slate-200/80 dark:border-slate-800">
                       <Beaker className="w-6 h-6 text-brand-lavender flex-shrink-0 mt-1" />
                       <div>
                           <h3 className="font-semibold text-slate-800 dark:text-slate-200">{language === 'en' ? "Lab Tests" : "ஆய்வகச் சோதனைகள்"}</h3>
                           <p className="text-sm text-slate-500 dark:text-slate-400">{language === 'en' ? "Signs of cancer can appear in blood or urine, detected via Pap smears, PSA tests, and more." : "புற்றுநோயின் அறிகுறிகள் இரத்தம் அல்லது சிறுநீரில் தோன்றலாம், இவை Pap smears, PSA சோதனைகள் மூலம் கண்டறியப்படுகின்றன."}</p>
                       </div>
                   </div>
                </StaggeredListItem>
                <StaggeredListItem>
                   <div className="flex items-start gap-4 p-4 bg-slate-100/50 dark:bg-slate-800/30 rounded-lg border border-slate-200/80 dark:border-slate-800">
                       <Microscope className="w-6 h-6 text-brand-lavender flex-shrink-0 mt-1" />
                       <div>
                           <h3 className="font-semibold text-slate-800 dark:text-slate-200">{language === 'en' ? "Biopsy (The Definitive Test)" : "பயாப்ஸி (உறுதியான சோதனை)"}</h3>
                           <p className="text-sm text-slate-500 dark:text-slate-400">{language === 'en' ? "A small tissue sample is examined under a microscope to confirm cancer and its specific type." : "புற்றுநோய் மற்றும் அதன் வகையை உறுதிப்படுத்த நுண்ணோக்கியின் கீழ் ஒரு சிறிய திசு மாதிரி ஆய்வு செய்யப்படுகிறது."}</p>
                       </div>
                   </div>
                </StaggeredListItem>
              </div>
            </StaggeredList>
          </div>
        </section>

        <section id="routine-screenings" className="scroll-mt-24">
            <InfoBlock icon={<CalendarClock size={24} />} title={language === 'en' ? "Routine Screenings Save Lives" : "வழக்கமான பரிசோதனைகள் உயிரைக் காப்பாற்றும்"}>
                {language === 'en' ? (
                    <p>Screenings find cancer before symptoms even appear. They should be a regular part of life for at-risk groups, including mammograms, Pap smears, colonoscopies, and oral exams for tobacco users.</p>
                ) : (
                    <p>அறிகுறிகள் தோன்றுவதற்கு முன்பே பரிசோதனைகள் புற்றுநோயைக் கண்டறிகின்றன. அபாயத்தில் உள்ளவர்களுக்கு மேம்மோகிராம்கள், பேப் ஸ்மியர்ஸ் மற்றும் புகையிலை பயன்படுத்துபவர்களுக்கான வாய்வழிப் பரிசோதனைகள் வாழ்க்கையின் ஒரு பகுதியாக இருக்க வேண்டும்.</p>
                )}
            </InfoBlock>
             <div className="mt-8 not-prose w-full h-auto bg-slate-100/50 dark:bg-slate-800/30 rounded-2xl border border-slate-200/80 dark:border-slate-800 p-4 sm:p-6 flex items-center justify-center text-slate-700 dark:text-slate-300 text-base sm:text-lg font-medium italic">
                {language === 'en' ? "[ Infographic: Screening Timeline by Age and Risk Factor ]" : "[ தகவல் படம்: வயது மற்றும் ஆபத்து காரணி அடிப்படையில் பரிசோதனை காலக்கெடு ]"}
            </div>
        </section>
        
        <section id="dont-wait" className="text-center pt-8 scroll-mt-24">
          <div className="bg-slate-100/50 dark:bg-slate-800/30 backdrop-blur-lg rounded-2xl border border-slate-200/80 dark:border-slate-800 py-8 px-4 sm:py-10 sm:px-6">
              <h2 className="!text-2xl !font-semibold !text-slate-900 dark:!text-slate-100 !mt-0">{language === 'en' ? "Don’t Wait for a Warning" : "எச்சரிக்கைக்கு காத்திருக்க வேண்டாம்"}</h2>
              {language === 'en' ? (
                  <p className="max-w-xl mx-auto mt-2 text-slate-600 dark:text-slate-400 text-base md:text-lg">
                    Screening services are available in government hospitals, but awareness is still low. Let’s normalize yearly checkups. If you have a high-risk lifestyle, screening isn’t optional—it’s urgent.
                  </p>
              ) : (
                  <p className="max-w-xl mx-auto mt-2 text-slate-600 dark:text-slate-400 text-base md:text-lg">
                    அரசு மருத்துவமனைகளில் பரிசோதனை சேவைகள் உள்ளன, ஆனால் விழிப்புணர்வு குறைவாக உள்ளது. வருடாந்திர சோதனைகளை வழக்கமாக்கிக் கொள்வோம். நீங்கள் அதிக ஆபத்துள்ள வாழ்க்கை முறையை கொண்டிருந்தால், பரிசோதனை விருப்பத் தேர்வு அல்ல—அது அவசரமானது.
                  </p>
              )}
          </div>
        </section>
      </div>
    </FadeIn>
  );
}
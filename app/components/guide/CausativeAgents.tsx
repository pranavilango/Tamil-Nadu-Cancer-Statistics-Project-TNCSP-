// --- START OF FILE CausativeAgents.tsx ---
import { Heading } from "./OnPageSidebar";
import FadeIn from "./FadeIn";
import { StaggeredList, StaggeredListItem } from "./StaggeredList";
import { Dna, TestTube, Sun, Zap, Activity, ShieldQuestion } from 'lucide-react';
import { useGuide } from "../../guide/GuideContext";

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
  const { language } = useGuide();

  return (
    <FadeIn>
      <div className="max-w-3xl mx-auto space-y-12 md:space-y-16">

        <section id="core-issue" className="scroll-mt-24">
            <InfoBlock icon={<ShieldQuestion size={24} />} title={language === 'en' ? "The Core Issue: DNA Damage" : "முக்கிய பிரச்சனை: டிஎன்ஏ பாதிப்பு"}>
                 {language === 'en' ? (
                    <p>Cancer begins when a cell’s <strong>DNA is damaged or mutated</strong>. DNA is the instruction manual for our body. When it mutates, a cell can start acting abnormally—dividing too much or refusing to die when it should. Some changes are inherited; most are caused by things we encounter in life.</p>
                 ) : (
                    <p>ஒரு செல்லின் <strong>DNA சேதமடையும் போது அல்லது மாற்றமடையும் போது</strong> புற்றுநோய் தொடங்குகிறது. DNA என்பது நமது உடலுக்கான அறிவுறுத்தல் கையேடு. அது மாற்றமடையும் போது, ஒரு செல் அசாதாரணமாக செயல்படத் தொடங்கலாம்—அதிகமாகப் பிரிதல் அல்லது அழிய வேண்டிய நேரத்தில் அழிய மறுத்தல். சில மாற்றங்கள் பரம்பரையாக வருகின்றன; பெரும்பாலானவை நாம் வாழ்வில் எதிர்கொள்ளும் விஷயங்களால் ஏற்படுகின்றன.</p>
                 )}
            </InfoBlock>
        </section>

        <section id="genetics" className="scroll-mt-24">
          <InfoBlock icon={<Dna size={24} />} title={language === 'en' ? "Genetics & Heredity" : "மரபியல் & பரம்பரை"}>
            {language === 'en' ? (
              <p>Some people are born with mutations that raise their cancer risk. These are passed down through families. These mutations don’t guarantee cancer, but they increase the chances. Other mutations can happen spontaneously during normal cell division.</p>
            ) : (
              <p>சிலர் புற்றுநோய் அபாயத்தை அதிகரிக்கும் மாற்றங்களுடன் பிறக்கிறார்கள். இவை குடும்பங்கள் வழியாகக் கடத்தப்படுகின்றன. இந்த மாற்றங்கள் புற்றுநோயை உறுதிப்படுத்தாது, ஆனால் வாய்ப்புகளை அதிகரிக்கின்றன. மற்ற மாற்றங்கள் சாதாரண செல் பிரிவின் போது தன்னிச்சையாக ஏற்படலாம்.</p>
            )}
          </InfoBlock>
        </section>

        <section id="environmental-factors" className="scroll-mt-24">
            <InfoBlock icon={<Sun size={24} />} title={language === 'en' ? "Environmental Factors" : "சுற்றுச்சூழல் காரணிகள்"}>
                {language === 'en' ? (
                  <p>Prolonged exposure to harmful substances is a leading cause of cancer. Our surroundings can directly damage our DNA over time.</p>
                ) : (
                  <p>தீங்கு விளைவிக்கும் பொருட்களுக்கு நீண்டகாலம் ஆட்படுவது புற்றுநோய்க்கான முக்கிய காரணமாகும். நமது சுற்றுச்சூழல் காலப்போக்கில் நமது டிஎன்ஏவை நேரடியாக சேதப்படுத்தும்.</p>
                )}
            </InfoBlock>
            <div className="mt-8 not-prose bg-slate-100/50 dark:bg-slate-800/30 backdrop-blur-lg rounded-2xl border border-slate-200/80 dark:border-slate-800 p-4 sm:p-6">
              <StaggeredList>
                  <ul className="space-y-4 list-none p-0 m-0">
                      <StaggeredListItem>
                        <div className="flex items-start gap-3">
                          <TestTube className="w-5 h-5 mt-1 text-brand-lavender flex-shrink-0" />
                          <span><strong>{language === 'en' ? "Chemicals:" : "ரசாயனங்கள்:"}</strong> {language === 'en' ? "Tobacco smoke, asbestos, pesticides, and industrial pollutants." : "புகையிலை புகை, கல்நார் (asbestos), பூச்சிக்கொல்லிகள் மற்றும் தொழிற்சாலை மாசுக்கள்."}</span>
                        </div>
                      </StaggeredListItem>
                      <StaggeredListItem>
                        <div className="flex items-start gap-3">
                          <Zap className="w-5 h-5 mt-1 text-brand-lavender flex-shrink-0" />
                          <span><strong>{language === 'en' ? "Radiation:" : "கதிர்வீச்சு:"}</strong> {language === 'en' ? "UV rays from the sun and radiation from medical imaging or other sources." : "சூரியனிலிருந்து வரும் UV கதிர்கள் மற்றும் மருத்துவப் பரிசோதனைகளிலிருந்து வரும் கதிர்வீச்சு."}</span>
                        </div>
                      </StaggeredListItem>
                      <StaggeredListItem>
                        <div className="flex items-start gap-3">
                          <Activity className="w-5 h-5 mt-1 text-brand-lavender flex-shrink-0" />
                          <span><strong>{language === 'en' ? "Infections:" : "தொற்றுகள்:"}</strong> {language === 'en' ? "Viruses like HPV and Hepatitis B/C, and certain bacteria, are linked to cancer." : "HPV மற்றும் ஹெபடைடிஸ் B/C போன்ற வைரஸ்கள் மற்றும் சில பாக்டீரியாக்கள் புற்றுநோயுடன் தொடர்புடையவை."}</span>
                        </div>
                      </StaggeredListItem>
                  </ul>
              </StaggeredList>
            </div>
        </section>

        <section id="lifestyle-choices" className="scroll-mt-24">
          <InfoBlock icon={<Activity size={24} />} title={language === 'en' ? "Lifestyle & Other Risks" : "வாழ்க்கை முறை & பிற அபாயங்கள்"}>
            {language === 'en' ? (
              <p>Everyday habits, along with natural processes, play a major role. Smoking, excessive alcohol, poor diet, obesity, and lack of exercise all increase risk. Furthermore, as we age, our cells naturally accumulate more mutations, which is why cancer is more common in older adults.</p>
            ) : (
              <p>இயற்கை செயல்முறைகளுடன், தினசரி பழக்கவழக்கங்களும் முக்கிய பங்கு வகிக்கின்றன. புகைபிடித்தல், அதிகப்படியான மது அருந்துதல், தவறான உணவுமுறை, உடல் பருமன் மற்றும் உடற்பயிற்சியின்மை அனைத்தும் அபாயத்தை அதிகரிக்கின்றன. மேலும், வயது அதிகரிக்கும் போது, நமது செல்கள் இயற்கையாகவே அதிக மாற்றங்களைக் குவிக்கின்றன, இதனால்தான் வயதானவர்களிடம் புற்றுநோய் அதிகம் காணப்படுகிறது.</p>
            )}
          </InfoBlock>
        </section>
      </div>
    </FadeIn>
  );
}
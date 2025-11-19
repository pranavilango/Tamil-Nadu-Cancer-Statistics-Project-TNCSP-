// --- START OF FILE StagesOfCancer.tsx ---
import { Heading } from "./OnPageSidebar";
import FadeIn from "./FadeIn";
import { Layers, CheckCircle } from "lucide-react";
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

export const stagesOfCancerHeadings: Heading[] = [
  { id: "why-staging-matters", title: "Why Staging Matters", level: 2 },
  { id: "tnm-system", title: "The TNM System", level: 2 },
  { id: "stages-at-a-glance", title: "The Stages at a Glance", level: 2 },
];

export default function StagesOfCancer() {
  const { language } = useGuide();

  return (
    <FadeIn>
      <div className="max-w-3xl mx-auto space-y-12 md:space-y-16">
        <section id="why-staging-matters" className="scroll-mt-24">
            <InfoBlock icon={<Layers size={24} />} title={language === 'en' ? "Why Staging Matters" : "நிலைகளை அறிவது ஏன் அவசியம்?"}>
                {language === 'en' ? (
                    <p>Doctors classify cancer into <strong>stages from 0 to IV</strong> to describe how far it has grown or spread. Staging is critical because it helps doctors choose the best treatment plan and predict the likely outcome for a patient.</p>
                ) : (
                    <p>புற்றுநோய் எவ்வளவு வளர்ந்துள்ளது அல்லது பரவியுள்ளது என்பதை விவரிக்க மருத்துவர்கள் அதை <strong>0 முதல் IV வரையிலான நிலைகளாக</strong> வகைப்படுத்துகிறார்கள். இது முக்கியமானது, ஏனென்றால் இது சிறந்த சிகிச்சைத் திட்டத்தைத் தேர்வுசெய்யவும் நோயாளிக்கான விளைவைக் கணிக்கவும் மருத்துவர்களுக்கு உதவுகிறது.</p>
                )}
            </InfoBlock>
        </section>

        <section id="tnm-system" className="scroll-mt-24">
          <div className="not-prose bg-slate-100/50 dark:bg-slate-800/30 backdrop-blur-lg rounded-2xl border border-slate-200/80 dark:border-slate-800 p-4 sm:p-6 space-y-4">
            <h2 className="!text-xl md:!text-2xl !font-semibold !text-slate-900 dark:!text-slate-100 !mt-0">📊 {language === 'en' ? "The TNM System" : "TNM அமைப்பு"}</h2>
            <p className="text-slate-600 dark:text-slate-400 text-base md:text-lg">
              {language === 'en' ? "One of the most common methods is the <strong>TNM system</strong>, a detailed snapshot based on three key factors:" : "மிகவும் பொதுவான முறைகளில் ஒன்று <strong>TNM அமைப்பு</strong>, இது மூன்று முக்கிய காரணிகளை அடிப்படையாகக் கொண்டது:"}
            </p>
            <ul className="list-none text-slate-600 dark:text-slate-400 text-base space-y-3 pt-2">
              <li className="flex items-start gap-3"><strong className="font-semibold text-slate-800 dark:text-slate-200">T (Tumor):</strong> {language === 'en' ? "Measures the size and extent of the original tumor." : "அசல் கட்டியின் அளவு மற்றும் தன்மையை அளவிடுகிறது."}</li>
              <li className="flex items-start gap-3"><strong className="font-semibold text-slate-800 dark:text-slate-200">N (Nodes):</strong> {language === 'en' ? "Shows if cancer has spread to nearby lymph nodes." : "புற்றுநோய் அருகிலுள்ள நிணநீர் கணுக்களுக்கு பரவியுள்ளதா என்பதைக் காட்டுகிறது."}</li>
              <li className="flex items-start gap-3"><strong className="font-semibold text-slate-800 dark:text-slate-200">M (Metastasis):</strong> {language === 'en' ? "Confirms if cancer has spread to distant parts of the body." : "புற்றுநோய் உடலின் தொலைதூர பகுதிகளுக்கு பரவியுள்ளதா என்பதை உறுதிப்படுத்துகிறது."}</li>
            </ul>
          </div>
        </section>

        <section id="stages-at-a-glance" className="scroll-mt-24">
            <InfoBlock icon={<CheckCircle size={24} />} title={language === 'en' ? "The Stages at a Glance" : "நிலைகளின் சுருக்கம்"}>
                {language === 'en' ? (
                    <p>Using the TNM system and other tests, doctors assign a stage from 0 to IV. Early stages have the highest chance of successful treatment, which is why early detection is so vital.</p>
                ) : (
                    <p>TNM அமைப்பு மற்றும் பிற சோதனைகளைப் பயன்படுத்தி, மருத்துவர்கள் 0 முதல் IV வரையிலான நிலையை நிர்ணயிக்கிறார்கள். ஆரம்ப நிலைகளில் வெற்றிகரமான சிகிச்சைக்கான வாய்ப்பு அதிகம், இதனால்தான் ஆரம்பகால கண்டறிதல் மிகவும் முக்கியமானது.</p>
                )}
            </InfoBlock>
            <div className="mt-8 not-prose overflow-x-auto rounded-2xl shadow-lg border border-slate-200/80 dark:border-slate-800">
                <table className="w-full table-auto text-left text-sm md:text-base text-slate-800 dark:text-slate-300">
                    <thead className="bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white font-semibold">
                        <tr>
                            <th className="px-4 py-3 border-b-2 border-slate-200 dark:border-slate-700">{language === 'en' ? "Stage" : "நிலை"}</th>
                            <th className="px-4 py-3 border-b-2 border-slate-200 dark:border-slate-700">{language === 'en' ? "Description" : "விளக்கம்"}</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white/80 dark:bg-slate-900/80">
                        <tr className="border-t border-slate-200 dark:border-slate-800"><td className="px-4 py-3 font-medium align-top">Stage 0</td><td className="px-4 py-3">{language === 'en' ? "Abnormal cells are present but have not spread (carcinoma in situ)." : "அசாதாரண செல்கள் உள்ளன ஆனால் பரவவில்லை (பரவாப் புற்றுநோய்)."}</td></tr>
                        <tr className="border-t border-slate-200 dark:border-slate-800"><td className="px-4 py-3 font-medium align-top">Stage I</td><td className="px-4 py-3">{language === 'en' ? "A small, localized tumor that has not grown deeply into nearby tissues." : "அருகிலுள்ள திசுக்களில் ஆழமாக வளராத ஒரு சிறிய, குறிப்பிட்ட இடத்திலுள்ள கட்டி."}</td></tr>
                        <tr className="border-t border-slate-200 dark:border-slate-800"><td className="px-4 py-3 font-medium align-top">Stage II & III</td><td className="px-4 py-3">{language === 'en' ? "The cancer is larger and may have spread to nearby lymph nodes, but not distant parts of the body." : "புற்றுநோய் பெரியது மற்றும் அருகிலுள்ள நிணநீர் கணுக்களுக்கு பரவியிருக்கலாம், ஆனால் உடலின் தொலைதூர பகுதிகளுக்கு அல்ல."}</td></tr>
                        <tr className="border-t border-slate-200 dark:border-slate-800"><td className="px-4 py-3 font-medium align-top">Stage IV</td><td className="px-4 py-3">{language === 'en' ? "The cancer has metastasized, spreading to distant organs like the lungs, liver, or brain." : "புற்றுநோய் மெட்டாஸ்டாஸிஸ் அடைந்துள்ளது, அதாவது நுரையீரல், கல்லீரல் அல்லது மூளை போன்ற தொலைதூர உறுப்புகளுக்கு பரவியுள்ளது."}</td></tr>
                    </tbody>
                </table>
            </div>
        </section>
      </div>
    </FadeIn>
  );
}
// --- START OF FILE DiseaseMechanism.tsx ---
import { Heading } from "./OnPageSidebar";
import FadeIn from "./FadeIn";
import { StaggeredList, StaggeredListItem } from "./StaggeredList";
import { Dna, Grid2x2, Unplug } from 'lucide-react';
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

export const diseaseMechanismHeadings: Heading[] = [
    { id: "from-healthy-to-tumor", title: "From Healthy Cell to Tumor", level: 2 },
    { id: "how-cancer-disrupts", title: "How Cancer Disrupts the Body", level: 2 },
    { id: "root-cause-mutations", title: "The Root Cause: Mutations", level: 2 },
    { id: "one-name-many-diseases", title: "One Name, Many Diseases", level: 2 },
];

export default function DiseaseMechanism() {
  const { language } = useGuide();

  return (
    <FadeIn>
      <div className="max-w-3xl mx-auto space-y-12 md:space-y-16">
        
        <section id="from-healthy-to-tumor" className="scroll-mt-24">
            <div className="not-prose bg-slate-100/50 dark:bg-slate-800/30 backdrop-blur-lg rounded-2xl border border-slate-200/80 dark:border-slate-800 p-4 sm:p-6 space-y-4">
                <h2 className="!text-xl md:!text-2xl !font-semibold !text-slate-900 dark:!text-slate-100 !mt-0">
                    {language === 'en' ? "From a Healthy Cell to a Tumor" : "ஆரோக்கியமான செல் முதல் கட்டி வரை"}
                </h2>
                <div className="space-y-4 text-slate-600 dark:text-slate-400 text-base md:text-lg leading-relaxed">
                    {language === 'en' ? (
                        <>
                            <p>Your body is made of tiny building blocks called <strong>cells</strong>. They are programmed to grow, divide, and die in a controlled, orderly way.</p>
                            <p>Cancer begins when this control system breaks. A cell starts to <strong>divide uncontrollably</strong>, ignoring signals to stop. This creates a clump of abnormal cells called a <strong>tumor</strong>.</p>
                        </>
                    ) : (
                        <>
                            <p>உங்கள் உடல் <strong>செல்கள்</strong> எனப்படும் சிறிய கட்டுமானத் தொகுதிகளால் ஆனது. அவை வளரவும், பிரிக்கவும் மற்றும் அழியவும் ஒரு கட்டுப்பாட்டு முறையுடன் திட்டமிடப்பட்டுள்ளன.</p>
                            <p>இந்த கட்டுப்பாட்டு அமைப்பு உடையும் போது புற்றுநோய் தொடங்குகிறது. ஒரு செல் நிற்க வேண்டிய சமிக்ஞைகளை புறக்கணித்து, <strong>கட்டுப்பாடின்றி பிரிக்க</strong> தொடங்குகிறது. இது <strong>கட்டி (tumor)</strong> எனப்படும் அசாதாரண செல்களின் தொகுப்பை உருவாக்குகிறது.</p>
                        </>
                    )}
                </div>
            </div>
             <div className="mt-8 not-prose w-full h-auto bg-slate-100/50 dark:bg-slate-800/30 rounded-2xl border border-slate-200/80 dark:border-slate-800 p-4 sm:p-6 flex items-center justify-center text-slate-700 dark:text-slate-300 text-base sm:text-lg font-medium italic">
                {language === 'en' ? "[ Infographic: Benign (Non-Cancerous) vs. Malignant (Cancerous) Tumors ]" : "[ தகவல் படம்: தீங்கற்ற கட்டி vs. புற்றுநோய் கட்டி ]"}
            </div>
        </section>
        
        <section id="how-cancer-disrupts" className="scroll-mt-24">
            <InfoBlock icon={<Unplug size={24} />} title={language === 'en' ? "How Cancer Disrupts the Body" : "புற்றுநோய் உடலை எவ்வாறு பாதிக்கிறது"}>
                {language === 'en' ? (
                  <p>Cancer cells are disruptive. They crowd out healthy cells and steal nutrients and oxygen. Because they come from your own body, the immune system often struggles to fight them effectively. They master two dangerous tricks:</p>
                ) : (
                  <p>புற்றுநோய் செல்கள் அழிவு சக்தி கொண்டவை. அவை ஆரோக்கியமான செல்களை நெரித்து, ஊட்டச்சத்துக்கள் மற்றும் ஆக்ஸிஜனைத் திருடுகின்றன. அவை உங்கள் சொந்த உடலிலிருந்தே வருவதால், நோய் எதிர்ப்பு சக்தி அவற்றை எதிர்த்துப் போராட சிரமப்படுகிறது. அவை இரண்டு ஆபத்தான உத்திகளைக் கையாளுகின்றன:</p>
                )}
            </InfoBlock>
            <div className="mt-8 not-prose">
              <StaggeredList>
                <ul className="space-y-4 list-none p-0 m-0">
                  <StaggeredListItem>
                    <div className="p-4 bg-slate-100/50 dark:bg-slate-800/30 rounded-lg border border-slate-200/80 dark:border-slate-800">
                      <h3 className="font-semibold text-slate-800 dark:text-slate-200">{language === 'en' ? "Avoiding Self-Destruction" : "சுய அழிவைத் தவிர்த்தல்"}</h3>
                      <p className="text-sm text-slate-500 dark:text-slate-400">{language === 'en' ? "They ignore the natural signals that tell old or damaged cells to die (a process called apoptosis)." : "பழைய அல்லது சேதமடைந்த செல்களை அழியச் சொல்லும் இயற்கை சமிக்ஞைகளை (apoptosis) அவை புறக்கணிக்கின்றன."}</p>
                    </div>
                  </StaggeredListItem>
                  <StaggeredListItem>
                     <div className="p-4 bg-slate-100/50 dark:bg-slate-800/30 rounded-lg border border-slate-200/80 dark:border-slate-800">
                      <h3 className="font-semibold text-slate-800 dark:text-slate-200">{language === 'en' ? "Building Their Own Supply Lines" : "சொந்த விநியோக வழிகளை உருவாக்குதல்"}</h3>
                      <p className="text-sm text-slate-500 dark:text-slate-400">{language === 'en' ? "They trick the body into growing new blood vessels to feed them (a process called angiogenesis)." : "அவை தங்களுக்கு உணவளிக்க புதிய இரத்த நாளங்களை வளர்க்குமாறு உடலை ஏமாற்றுகின்றன (angiogenesis)."}</p>
                    </div>
                  </StaggeredListItem>
                </ul>
              </StaggeredList>
            </div>
        </section>

        <section id="root-cause-mutations" className="scroll-mt-24">
            <InfoBlock icon={<Dna size={24} />} title={language === 'en' ? "The Root Cause: Genetic Mutations" : "முக்கிய காரணம்: மரபணு மாற்றங்கள்"}>
                {language === 'en' ? (
                    <p>At its core, cancer is a genetic disease. It is caused by <strong>mutations</strong> (changes) in a cell's DNA that hijack its instruction manual. Some mutations are inherited, but most are acquired over a lifetime from environmental factors or random errors during cell division.</p>
                ) : (
                    <p>அடிப்படையில், புற்றுநோய் ஒரு மரபணு நோய். இது ஒரு செல்லின் டிஎன்ஏவில் ஏற்படும் <strong>மாற்றங்களால் (mutations)</strong> ஏற்படுகிறது. சில மாற்றங்கள் பரம்பரையாக வருகின்றன, ஆனால் பெரும்பாலானவை சுற்றுச்சூழல் காரணிகள் அல்லது செல் பிரிவின் போது ஏற்படும் தவறுகளால் வாழ்நாளில் ஏற்படுகின்றன.</p>
                )}
            </InfoBlock>
        </section>

        <section id="one-name-many-diseases" className="scroll-mt-24">
            <InfoBlock icon={<Grid2x2 size={24} />} title={language === 'en' ? "One Name, Many Diseases" : "ஒரு பெயர், பல நோய்கள்"}>
                 {language === 'en' ? (
                    <p>It is crucial to remember that "cancer" is not one disease—it's a group of <strong>over 100 distinct types</strong>. Some grow fast, others slow. Some need surgery, others need chemotherapy or radiation. Understanding the specific type is the first step to the right treatment.</p>
                 ) : (
                    <p>"புற்றுநோய்" என்பது ஒரே ஒரு நோய் அல்ல என்பதை நினைவில் கொள்வது அவசியம்—இது <strong>100-க்கும் மேற்பட்ட வெவ்வேறு வகையான</strong> நோய்களின் தொகுப்பாகும். சில வேகமாக வளரும், மற்றவை மெதுவாக வளரும். சிலவற்றிற்கு அறுவை சிகிச்சை தேவை, மற்றவற்றிற்கு கீமோதெரபி அல்லது கதிர்வீச்சு சிகிச்சை தேவை. சரியான சிகிச்சைக்கு முதல் படி குறிப்பிட்ட வகையைப் புரிந்துகொள்வதாகும்.</p>
                 )}
            </InfoBlock>
        </section>

      </div>
    </FadeIn>
  );
}
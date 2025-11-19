// --- START OF FILE Conclusion.tsx ---
import { Heading } from "./OnPageSidebar";
import FadeIn from "./FadeIn";
import { Check, Heart, Handshake } from "lucide-react";
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


export const conclusionHeadings: Heading[] = [
  { id: "key-takeaways", title: "Our Path Forward", level: 2 },
  { id: "be-the-change", title: "Be the Change", level: 2 },
];

export default function Conclusion() {
  const { language } = useGuide();

  return (
    <FadeIn>
      <div className="max-w-3xl mx-auto space-y-12 md:space-y-16">
        <section>
          {language === 'en' ? (
              <p className="text-slate-600 dark:text-slate-400 text-base md:text-lg leading-relaxed">
                Cancer is a complex illness, but it is no longer the death sentence it was once believed to be. Thanks to medical advancements, many cancers are now <strong>treatable, manageable, and even curable</strong>—especially when detected early. The future of cancer care in Tamil Nadu rests on our collective responsibility.
              </p>
          ) : (
              <p className="text-slate-600 dark:text-slate-400 text-base md:text-lg leading-relaxed">
                புற்றுநோய் ஒரு சிக்கலான நோய், ஆனால் ஒரு காலத்தில் நம்பப்பட்டது போல இது மரண தண்டனை அல்ல. மருத்துவ முன்னேற்றங்களுக்கு நன்றி, பல புற்றுநோய்கள் இப்போது <strong>சிகிச்சையளிக்கக்கூடியவை, நிர்வகிக்கக்கூடியவை மற்றும் குணப்படுத்தக்கூடியவை</strong>—குறிப்பாக ஆரம்பத்தில் கண்டறியப்பட்டால். தமிழ்நாட்டில் புற்றுநோய் சிகிச்சையின் எதிர்காலம் நமது கூட்டுப் பொறுப்பில் உள்ளது.
              </p>
          )}
        </section>

        <section id="key-takeaways" className="scroll-mt-24">
            <InfoBlock icon={<Heart size={24} />} title={language === 'en' ? "Our Path Forward: Key Takeaways" : "நமது பாதை: முக்கிய குறிப்புகள்"} />
            <div className="mt-8 not-prose bg-slate-100/50 dark:bg-slate-800/30 backdrop-blur-lg rounded-2xl border border-slate-200/80 dark:border-slate-800 p-4 sm:p-6">
              <ul className="list-none space-y-4 text-slate-600 dark:text-slate-400 text-base p-0 m-0">
                  <li className="flex items-start space-x-3">
                    <Check className="text-green-500 font-bold w-5 h-5 mt-1 flex-shrink-0" />
                    <span><strong>{language === 'en' ? "Prevention is Powerful:" : "தடுப்பு சக்தி வாய்ந்தது:"}</strong> {language === 'en' ? "Regular check-ups, avoiding tobacco, and staying active are simple actions that drastically reduce risk." : "வழக்கமான பரிசோதனைகள், புகையிலையைத் தவிர்த்தல் மற்றும் சுறுசுறுப்பாக இருப்பது ஆகியவை அபாயத்தை வெகுவாகக் குறைக்கும் எளிய செயல்கள்."}</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Check className="text-green-500 font-bold w-5 h-5 mt-1 flex-shrink-0" />
                    <span><strong>{language === 'en' ? "Early Detection is a Lifesaver:" : "முன்கூட்டியே கண்டறிதல் உயிர்காக்கும்:"}</strong> {language === 'en' ? "We must normalize screenings and encourage everyone to seek help for persistent symptoms without delay." : "பரிசோதனைகளை இயல்பாக்க வேண்டும் மற்றும் அறிகுறிகள் இருந்தால் தாமதமின்றி உதவி தேட அனைவரையும் ஊக்குவிக்க வேண்டும்."}</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Check className="text-green-500 font-bold w-5 h-5 mt-1 flex-shrink-0" />
                    <span><strong>{language === 'en' ? "Community is a Cure:" : "சமூகமே மருந்து:"}</strong> {language === 'en' ? "Every individual, family, and leader has a role. We must support patients, educate children, and build a culture of health." : "ஒவ்வொரு தனிமனிதனுக்கும், குடும்பத்திற்கும், தலைவருக்கும் ஒரு பங்கு உண்டு. நோயாளிகளை ஆதரிக்கவும், குழந்தைகளுக்கு கல்வி கற்பிக்கவும், ஆரோக்கிய கலாச்சாரத்தை உருவாக்கவும் வேண்டும்."}</span>
                  </li>
              </ul>
            </div>
        </section>
        
        <section className="text-center italic text-slate-500 dark:text-slate-400 text-base md:text-lg">
            {language === 'en' ? (
                <p>Let’s strive to make <strong>treatment accessible to all</strong> and <strong>survivors symbols of strength</strong>. A cancer-aware Tamil Nadu is not a dream—it is a vision we must realize together.</p>
            ) : (
                <p><strong>சிகிச்சையை அனைவருக்கும் கிடைக்கச் செய்யவும்</strong> மற்றும் <strong>உயிர் பிழைத்தவர்களை வலிமையின் அடையாளங்களாகவும்</strong> மாற்ற முயற்சிப்போம். புற்றுநோய் விழிப்புணர்வு கொண்ட தமிழ்நாடு ஒரு கனவு அல்ல—அது நாம் அனைவரும் இணைந்து நனவாக்க வேண்டிய லட்சியம்.</p>
            )}
        </section>

        <section id="be-the-change" className="text-center pt-8 scroll-mt-24">
            <div className="bg-slate-100/50 dark:bg-slate-800/30 backdrop-blur-lg rounded-2xl border border-slate-200/80 dark:border-slate-800 py-8 px-4 sm:py-10 sm:px-6">
                <div className="inline-flex items-center justify-center w-14 h-14 mb-4 text-brand-lavender bg-brand-lavender/10 rounded-full">
                    <Handshake size={32} />
                </div>
                <h2 className="!text-2xl !font-semibold !text-slate-900 dark:!text-slate-100 !mt-0">{language === 'en' ? "Be the Change" : "மாற்றமாக இருங்கள்"}</h2>
                {language === 'en' ? (
                    <p className="max-w-xl mx-auto mt-2 text-slate-600 dark:text-slate-400 text-base md:text-lg">
                      By staying informed, supporting those affected, and making healthier choices, <strong>you</strong> can help
                      transform fear into hope and isolation into solidarity. Let’s make cancer awareness a way of life.
                    </p>
                ) : (
                    <p className="max-w-xl mx-auto mt-2 text-slate-600 dark:text-slate-400 text-base md:text-lg">
                      தகவலறிந்திருப்பதன் மூலமும், பாதிக்கப்பட்டவர்களை ஆதரிப்பதன் மூலமும், ஆரோக்கியமான தேர்வுகளை மேற்கொள்வதன் மூலமும், பயத்தை நம்பிக்கையாகவும், தனிமையை ஒற்றுமையாகவும் மாற்ற <strong>நீங்கள்</strong> உதவலாம். புற்றுநோய் விழிப்புணர்வை வாழ்க்கை முறையாக மாற்றுவோம்.
                    </p>
                )}
            </div>
        </section>
      </div>
    </FadeIn>
  );
}
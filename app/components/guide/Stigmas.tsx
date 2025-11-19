// --- START OF FILE Stigmas.tsx ---
"use client";
import { Heading } from "./OnPageSidebar";
import FadeIn from "./FadeIn";
import { StaggeredList, StaggeredListItem } from "./StaggeredList";
import { MessageSquareOff, Users, HeartHandshake } from 'lucide-react';
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

export const stigmasHeadings: Heading[] = [
  { id: "the-silent-burden", title: "The Silent Burden", level: 2 },
  { id: "breaking-the-walls", title: "Breaking the Walls of Stigma", level: 2 },
  { id: "change-starts-with-us", title: "Change Starts With Us", level: 2 },
];

export default function Stigmas() {
  const { language } = useGuide();

  return (
    <FadeIn>
      <div className="max-w-3xl mx-auto space-y-12 md:space-y-16">
        <section id="the-silent-burden" className="scroll-mt-24">
            <InfoBlock icon={<MessageSquareOff size={24} />} title={language === 'en' ? "The Silent Burden" : "அமைதியான சுமை"}>
                {language === 'en' ? (
                    <p>In many communities, cancer is still surrounded by fear, silence, and shame. Some see it as a punishment, a result of karma, or even a curse. These are myths. Stigma doesn’t just hurt feelings—it makes people hide their diagnosis, delay treatment, and reject help. It can cost lives.</p>
                ) : (
                    <p>பல சமூகங்களில், புற்றுநோய் இன்னும் பயம், மௌனம் மற்றும் அவமானத்தால் சூழப்பட்டுள்ளது. சிலர் இதை ஒரு தண்டனையாகவோ, கர்மாவின் விளைவாகவோ அல்லது சாபமாகவோ பார்க்கிறார்கள். இவை கட்டுக்கதைகள். களங்கம் உணர்வுகளை மட்டும் புண்படுத்துவதில்லை—அது மக்களை நோயறிதலை மறைக்கவும், சிகிச்சையைத் தாமதப்படுத்தவும், உதவியை நிராகரிக்கவும் வைக்கிறது. இது உயிருக்கே ஆபத்தாக முடியும்.</p>
                )}
            </InfoBlock>
        </section>

        <section id="breaking-the-walls" className="scroll-mt-24">
            <InfoBlock icon={<Users size={24} />} title={language === 'en' ? "Breaking the Walls of Stigma" : "தடைகளை உடைத்தல்"} />
            <div className="mt-8 not-prose">
              <StaggeredList>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <StaggeredListItem className="bg-slate-100/50 dark:bg-slate-800/30 rounded-lg border border-slate-200/80 dark:border-slate-800 p-4 space-y-2">
                    <h3 className="font-semibold text-slate-800 dark:text-slate-200">{language === 'en' ? "Isolation at Home" : "வீட்டில் தனிமை"}</h3>
                    <p className="text-sm text-slate-500 dark:text-slate-400">{language === 'en' ? "Families may hide a diagnosis, fearing judgment. This secrecy isolates the patient when they need support the most." : "தீர்ப்புக்கு பயந்து குடும்பங்கள் நோயறிதலை மறைக்கலாம். இந்த ரகசியம் நோயாளிக்கு ஆதரவு தேவைப்படும் நேரத்தில் அவர்களை தனிமைப்படுத்துகிறது."}</p>
                  </StaggeredListItem>
                  <StaggeredListItem className="bg-slate-100/50 dark:bg-slate-800/30 rounded-lg border border-slate-200/80 dark:border-slate-800 p-4 space-y-2">
                    <h3 className="font-semibold text-slate-800 dark:text-slate-200">{language === 'en' ? "A Double Burden for Women" : "பெண்களுக்கு இரட்டைச் சுமை"}</h3>
                    <p className="text-sm text-slate-500 dark:text-slate-400">{language === 'en' ? "Stigma hits women especially hard. Reproductive cancers are seen as a source of dishonor, and women may be blamed or shunned." : "களங்கம் பெண்களைக் கடுமையாகத் தாக்குகிறது. இனப்பெருக்க உறுப்பு புற்றுநோய்கள் அவமானமாகக் கருதப்படுகின்றன, மேலும் பெண்கள் இதற்காகக் குற்றம் சாட்டப்படலாம்."}</p>
                  </StaggeredListItem>
                  <StaggeredListItem className="bg-slate-100/50 dark:bg-slate-800/30 rounded-lg border border-slate-200/80 dark:border-slate-800 p-4 space-y-2">
                    <h3 className="font-semibold text-slate-800 dark:text-slate-200">{language === 'en' ? "More Than Hair Loss" : "முடி உதிர்தலை விட அதிகம்"}</h3>
                    <p className="text-sm text-slate-500 dark:text-slate-400">{language === 'en' ? "Visible changes are deeply emotional. The myth that cancer always means death prevents people from getting tested early." : "கண்ணுக்குத் தெரியும் மாற்றங்கள் உணர்ச்சிகரமானவை. புற்றுநோய் என்றால் எப்போதும் மரணம் என்ற கட்டுக்கதை மக்களை முன்கூட்டியே பரிசோதனை செய்வதிலிருந்து தடுக்கிறது."}</p>
                  </StaggeredListItem>
                   <StaggeredListItem className="bg-slate-100/50 dark:bg-slate-800/30 rounded-lg border border-slate-200/80 dark:border-slate-800 p-4 space-y-2">
                    <h3 className="font-semibold text-slate-800 dark:text-slate-200">{language === 'en' ? "The Price of Survival" : "பிழைப்பதற்கான விலை"}</h3>
                    <p className="text-sm text-slate-500 dark:text-slate-400">{language === 'en' ? "The high cost of treatment leads to another stigma. Families may sell assets, and patients can feel like a burden." : "சிகிச்சையின் அதிக விலை மற்றொரு களங்கத்திற்கு வழிவகுக்கிறது. குடும்பங்கள் சொத்துக்களை விற்கலாம், மேலும் நோயாளிகள் தங்களை ஒரு சுமையாக உணரலாம்."}</p>
                  </StaggeredListItem>
                </div>
              </StaggeredList>
            </div>
        </section>

        <section id="change-starts-with-us" className="text-center pt-8 scroll-mt-24">
            <div className="bg-slate-100/50 dark:bg-slate-800/30 backdrop-blur-lg rounded-2xl border border-slate-200/80 dark:border-slate-800 py-8 px-4 sm:py-10 sm:px-6">
                <div className="inline-flex items-center justify-center w-14 h-14 mb-4 text-brand-lavender bg-brand-lavender/10 rounded-full">
                    <HeartHandshake size={32} />
                </div>
                <h2 className="!text-2xl !font-semibold !text-slate-900 dark:!text-slate-100 !mt-0">{language === 'en' ? "Change Starts With Us" : "மாற்றம் நம்மிடமிருந்து தொடங்குகிறது"}</h2>
                {language === 'en' ? (
                    <p className="max-w-xl mx-auto mt-2 text-slate-600 dark:text-slate-400 text-base md:text-lg">
                      Curing cancer requires medicine. Defeating stigma requires courage, conversation, and compassion. Let's stop whispering and start listening. Cancer doesn't isolate people—stigma does.
                    </p>
                ) : (
                    <p className="max-w-xl mx-auto mt-2 text-slate-600 dark:text-slate-400 text-base md:text-lg">
                      புற்றுநோயைக் குணப்படுத்த மருந்து தேவை. களங்கத்தை வெல்ல தைரியம், உரையாடல் மற்றும் கருணை தேவை. கிசுகிசுப்பதை நிறுத்திவிட்டு செவிசாய்க்கத் தொடங்குவோம். புற்றுநோய் மக்களை தனிமைப்படுத்துவதில்லை—சமூகக் களங்கமே தனிமைப்படுத்துகிறது.
                    </p>
                )}
            </div>
        </section>
      </div>
    </FadeIn>
  );
}
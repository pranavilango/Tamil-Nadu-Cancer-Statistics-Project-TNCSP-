// --- START OF FILE Introduction.tsx ---
"use client";
import { useEffect, useState, useMemo } from "react";
import * as d3 from "d3";
import { TrendingUp, FileText, ShieldCheck, ShieldAlert, CheckCircle, Target } from "lucide-react";
import AnimatedCounter from "../impact/AnimatedCounter";
import StaticMap from './StaticMap'; 
import { FeatureCollection } from "geojson";
import { Heading } from "./OnPageSidebar";
import FadeIn from "./FadeIn";
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
            <div className="text-slate-600 dark:text-slate-400 text-base leading-relaxed md:text-lg">
                {children}
            </div>
        </div>
    </div>
);

export const introductionHeadings: Heading[] = [
    { id: "knowledge-gap", title: "The Knowledge Gap", level: 2 },
    { id: "cancer-isnt-rare", title: "A Data Dive into Tamil Nadu", level: 2 },
    { id: "why-this-guide-exists", title: "Our Mission", level: 2 },
    { id: "knowledge-is-power", title: "Your First Step", level: 2 },
];

interface CancerCounts { Male?: number; Female?: number; }
interface CancerData { [district: string]: { [cancerType: string]: CancerCounts; }; }

export default function CancerIntro() {
  const [geoData, setGeoData] = useState<FeatureCollection | null>(null);
  const [cancerData, setCancerData] = useState<CancerData | null>(null);
  const { language } = useGuide();

  useEffect(() => {
    fetch("/cancer-data.json").then((res) => res.json()).then((json: CancerData) => setCancerData(json));
    d3.json<FeatureCollection>("/tn_districts.geojson").then((geojson) => { if (geojson) setGeoData(geojson); });
  }, []);

  const districtTotals = useMemo(() => {
    if (!cancerData) return null;
    const totals: { [key: string]: number } = {};
    for (const district in cancerData) {
      totals[district] = Object.values(cancerData[district]).reduce((acc, cancer) => acc + (cancer.Male || 0) + (cancer.Female || 0), 0);
    }
    return totals;
  }, [cancerData]);

  return (
    <FadeIn>
      <div className="max-w-3xl mx-auto space-y-12 md:space-y-16">
        <section id="knowledge-gap" className="scroll-mt-24">
            <InfoBlock icon={<FileText size={24} />} title={language === 'en' ? "The Knowledge Gap" : "விழிப்புணர்வு இடைவெளி"}>
                {language === 'en' ? (
                  <p>We talk about cancer a lot. But how many of us truly understand what it is? This gap is dangerous, because <strong>awareness and early detection save lives.</strong></p>
                ) : (
                  <p>நாம் புற்றுநோயைப் பற்றி நிறைய பேசுகிறோம். ஆனால் அது உண்மையில் என்ன என்பதை நம்மில் எத்தனை பேர் உண்மையாக புரிந்துகொள்கிறோம்? இந்த இடைவெளி ஆபத்தானது, ஏனென்றால் <strong>விழிப்புணர்வு மற்றும் ஆரம்பகால கண்டறிதல் உயிரைக் காப்பாற்றும்.</strong></p>
                )}
            </InfoBlock>
        </section>

        <section id="cancer-isnt-rare" className="scroll-mt-24">
            <InfoBlock icon={<TrendingUp size={24} />} title={language === 'en' ? "A Data Dive into Tamil Nadu" : "தமிழ்நாட்டின் தரவுப் பார்வை"}>
                {language === 'en' ? (
                  <p>Once considered a distant illness, cancer is now a growing reality. Cases across the state have risen steadily. This is not a rare disease; it's a public health priority.</p>
                ) : (
                  <p>ஒரு காலத்தில் அரிதான நோயாகக் கருதப்பட்ட புற்றுநோய், இப்போது வளர்ந்து வரும் உண்மையாகிவிட்டது. மாநிலம் முழுவதும் பாதிப்புகள் சீராக உயர்ந்துள்ளன. இது ஒரு அரிதான நோய் அல்ல; இது ஒரு பொது சுகாதார முன்னுரிமை.</p>
                )}
            </InfoBlock>
            
            <div className="mt-8 flex flex-col gap-4 bg-slate-100/50 dark:bg-slate-800/30 backdrop-blur-lg rounded-2xl border border-slate-200/80 dark:border-slate-800 p-4 sm:p-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-center">
                    <div className="py-2 sm:py-4">
                        <p className="text-4xl sm:text-5xl font-semibold text-brand-lavender tracking-tight"><AnimatedCounter value={50000} />+</p>
                        <p className="text-sm text-slate-500 dark:text-slate-400 font-medium mt-1">{language === 'en' ? "Cases in 2012" : "2012-ல் பாதிப்புகள்"}</p>
                    </div>
                    <div className="py-2 sm:py-4">
                        <p className="text-4xl sm:text-5xl font-semibold text-brand-lavender tracking-tight"><AnimatedCounter value={100000} />+</p>
                        <p className="text-sm text-slate-500 dark:text-slate-400 font-medium mt-1">{language === 'en' ? "Projected Cases" : "கணிக்கப்பட்ட பாதிப்புகள்"}</p>
                    </div>
                </div>

                <div className="w-full h-64 sm:h-80 overflow-hidden rounded-lg">
                    {geoData && districtTotals ? ( 
                        <StaticMap geoData={geoData} districtTotals={districtTotals} /> 
                    ) : ( 
                        <div className="w-full h-full bg-slate-200 dark:bg-slate-800 flex items-center justify-center text-slate-500 dark:text-slate-400 italic rounded-lg">
                            {language === 'en' ? "Loading Map Data..." : "வரைபடத் தரவு ஏற்றப்படுகிறது..."}
                        </div> 
                    )}
                </div>
            </div>
        </section>

        <section id="why-this-guide-exists" className="scroll-mt-24">
            <InfoBlock icon={<Target size={24} />} title={language === 'en' ? "Our Mission" : "எங்கள் நோக்கம்"}>
                {language === 'en' ? (
                   <p>This guide was created with one mission: to break down the science of cancer—clearly and accessibly—for <strong>everyone</strong>. No jargon. No fear. Just facts.</p>
                ) : (
                   <p>இந்த வழிகாட்டி ஒரே நோக்கத்துடன் உருவாக்கப்பட்டது: புற்றுநோயின் அறிவியலை <strong>அனைவருக்கும்</strong> தெளிவாகவும் எளிதாகவும் விளக்குவது. கடினமான சொற்கள் இல்லை. பயம் இல்லை. உண்மைகள் மட்டுமே.</p>
                )}
            </InfoBlock>
            <div className="mt-8 space-y-4">
                <div className="flex items-center p-4 bg-slate-100/50 dark:bg-slate-800/30 rounded-lg border border-slate-200/80 dark:border-slate-800">
                    <ShieldCheck size={24} className="text-green-500 mr-4 flex-shrink-0" />
                    <div>
                        <h3 className="font-semibold text-slate-800 dark:text-slate-200">{language === 'en' ? "Normal Cell" : "இயல்பான செல்"}</h3>
                        <p className="text-sm text-slate-500 dark:text-slate-400">{language === 'en' ? "Follows instructions, divides orderly, and dies when it should." : "அறிவுறுத்தல்களைப் பின்பற்றுகிறது, சீராகப் பிரிகிறது, அழிய வேண்டிய நேரத்தில் அழிகிறது."}</p>
                    </div>
                </div>
                <div className="flex justify-center h-8"><div className="w-px bg-slate-300 dark:bg-slate-700"></div></div>
                <div className="flex items-center p-4 bg-slate-100/50 dark:bg-slate-800/30 rounded-lg border border-slate-200/80 dark:border-slate-800">
                     <ShieldAlert size={24} className="text-red-500 mr-4 flex-shrink-0" />
                    <div>
                        <h3 className="font-semibold text-slate-800 dark:text-slate-200">{language === 'en' ? "Cancer Cell" : "புற்றுநோய் செல்"}</h3>
                        <p className="text-sm text-slate-500 dark:text-slate-400">{language === 'en' ? "Ignores signals, divides uncontrollably, and refuses to die." : "சிக்னல்களைப் புறக்கணித்து, கட்டுப்பாடின்றிப் பெருகி, அழிய மறுக்கிறது."}</p>
                    </div>
                </div>
            </div>
        </section>

        <section id="knowledge-is-power" className="text-center pt-8 scroll-mt-24">
           <div className="bg-slate-100/50 dark:bg-slate-800/30 backdrop-blur-lg rounded-2xl border border-slate-200/80 dark:border-slate-800 py-8 px-4 sm:py-10 sm:px-6">
              <div className="inline-flex items-center justify-center w-14 h-14 mb-4 text-brand-lavender bg-brand-lavender/10 rounded-full"><CheckCircle size={32} /></div>
              <h2 className="!text-2xl !font-semibold !text-slate-900 dark:text-slate-100 !mt-0">{language === 'en' ? "Knowledge Is Your Shield" : "அறிவே உங்கள் கேடயம்"}</h2>
              {language === 'en' ? (
                 <p className="max-w-xl mx-auto mt-2 text-slate-600 dark:text-slate-400 text-base md:text-lg">Whether you’re a student, a parent, or just a curious citizen, <strong>understanding cancer is the first and most powerful step in fighting it.</strong></p>
              ) : (
                 <p className="max-w-xl mx-auto mt-2 text-slate-600 dark:text-slate-400 text-base md:text-lg">நீங்கள் ஒரு மாணவராகவோ, பெற்றோராகவோ அல்லது ஆர்வமுள்ள குடிமகனாகவோ இருந்தாலும், <strong>புற்றுநோயைப் புரிந்துகொள்வதே அதை எதிர்த்துப் போராடுவதற்கான முதல் மற்றும் சக்திவாய்ந்த படியாகும்.</strong></p>
              )}
           </div>
        </section>
      </div>
    </FadeIn>
  );
}
// --- START OF FILE Introduction.tsx ---
"use client";
import { useEffect, useState, useMemo } from "react";
import * as d3 from "d3";
import { motion } from "framer-motion";
import { TrendingUp, FileText, ShieldCheck, ShieldAlert, CheckCircle, Target } from "lucide-react";
import AnimatedCounter from "../impact/AnimatedCounter";
import StaticMap from './StaticMap'; 
import { FeatureCollection } from "geojson";
import { Heading } from "./OnPageSidebar";
import FadeIn from "./FadeIn";

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
            <InfoBlock icon={<FileText size={24} />} title="The Knowledge Gap">
                <p>We talk about cancer a lot. But how many of us truly understand what it is? This gap is dangerous, because <strong>awareness and early detection save lives.</strong></p>
            </InfoBlock>
        </section>

        <section id="cancer-isnt-rare" className="scroll-mt-24">
            <InfoBlock icon={<TrendingUp size={24} />} title="A Data Dive into Tamil Nadu">
                <p>Once considered a distant illness, cancer is now a growing reality. Cases across the state have risen steadily. This is not a rare disease; it's a public health priority.</p>
            </InfoBlock>
            
            {/* 
              DEFINITIVE FIX: 
              1. The main card is now an explicit `flex flex-col` container. This is more robust than `space-y`
                 for ensuring children stack correctly and have the right dimensions.
              2. Replaced `space-y-4` with `gap-4` for consistent spacing between flex items.
              3. Added `rounded-lg` to the map's container for a polished look.
              This fixes the mobile layout without affecting the desktop view at all.
            */}
            <div className="mt-8 flex flex-col gap-4 bg-slate-100/50 dark:bg-slate-800/30 backdrop-blur-lg rounded-2xl border border-slate-200/80 dark:border-slate-800 p-4 sm:p-6">
                
                {/* Stats Section (Unchanged) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-center">
                    <div className="py-2 sm:py-4">
                        <p className="text-4xl sm:text-5xl font-semibold text-brand-lavender tracking-tight"><AnimatedCounter value={50000} />+</p>
                        <p className="text-sm text-slate-500 dark:text-slate-400 font-medium mt-1">Cases in 2012</p>
                    </div>
                    <div className="py-2 sm:py-4">
                        <p className="text-4xl sm:text-5xl font-semibold text-brand-lavender tracking-tight"><AnimatedCounter value={100000} />+</p>
                        <p className="text-sm text-slate-500 dark:text-slate-400 font-medium mt-1">Projected Cases</p>
                    </div>
                </div>

                {/* Map Section */}
                <div className="w-full h-64 sm:h-80 overflow-hidden rounded-lg">
                    {geoData && districtTotals ? ( 
                        <StaticMap geoData={geoData} districtTotals={districtTotals} /> 
                    ) : ( 
                        <div className="w-full h-full bg-slate-200 dark:bg-slate-800 flex items-center justify-center text-slate-500 dark:text-slate-400 italic rounded-lg">
                            Loading Map Data...
                        </div> 
                    )}
                </div>

            </div>
        </section>

        <section id="why-this-guide-exists" className="scroll-mt-24">
            <InfoBlock icon={<Target size={24} />} title="Our Mission">
                <p>This guide was created with one mission: to break down the science of cancer—clearly and accessibly—for <strong>everyone</strong>. No jargon. No fear. Just facts.</p>
            </InfoBlock>
            <div className="mt-8 space-y-4">
                <div className="flex items-center p-4 bg-slate-100/50 dark:bg-slate-800/30 rounded-lg border border-slate-200/80 dark:border-slate-800">
                    <ShieldCheck size={24} className="text-green-500 mr-4 flex-shrink-0" />
                    <div><h3 className="font-semibold text-slate-800 dark:text-slate-200">Normal Cell</h3><p className="text-sm text-slate-500 dark:text-slate-400">Follows instructions, divides orderly, and dies when it should.</p></div>
                </div>
                <div className="flex justify-center h-8"><div className="w-px bg-slate-300 dark:bg-slate-700"></div></div>
                <div className="flex items-center p-4 bg-slate-100/50 dark:bg-slate-800/30 rounded-lg border border-slate-200/80 dark:border-slate-800">
                     <ShieldAlert size={24} className="text-red-500 mr-4 flex-shrink-0" />
                    <div><h3 className="font-semibold text-slate-800 dark:text-slate-200">Cancer Cell</h3><p className="text-sm text-slate-500 dark:text-slate-400">Ignores signals, divides uncontrollably, and refuses to die.</p></div>
                </div>
            </div>
        </section>

        <section id="knowledge-is-power" className="text-center pt-8 scroll-mt-24">
           <div className="bg-slate-100/50 dark:bg-slate-800/30 backdrop-blur-lg rounded-2xl border border-slate-200/80 dark:border-slate-800 py-8 px-4 sm:py-10 sm:px-6">
              <div className="inline-flex items-center justify-center w-14 h-14 mb-4 text-brand-lavender bg-brand-lavender/10 rounded-full"><CheckCircle size={32} /></div>
              <h2 className="!text-2xl !font-semibold !text-slate-900 dark:text-slate-100 !mt-0">Knowledge Is Your Shield</h2>
              <p className="max-w-xl mx-auto mt-2 text-slate-600 dark:text-slate-400 text-base md:text-lg">Whether you’re a student, a parent, or just a curious citizen, <strong>understanding cancer is the first and most powerful step in fighting it.</strong></p>
           </div>
        </section>
      </div>
    </FadeIn>
  );
}
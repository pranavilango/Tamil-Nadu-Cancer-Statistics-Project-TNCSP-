"use client";

import { useEffect, useState, useMemo } from "react";
import * as d3 from "d3";
import StaticMap from './StaticMap'; 
import { FeatureCollection } from "geojson";
import { Heading } from "./OnPageSidebar";
import FadeIn from "./FadeIn";

export const introductionHeadings: Heading[] = [
    { id: "cancer-isnt-rare", title: "A Simple Truth", level: 2 },
    { id: "knowledge-gap", title: "The Knowledge Gap", level: 2 },
    { id: "why-this-guide-exists", title: "Why This Guide Exists", level: 2 },
    { id: "knowledge-is-power", title: "Knowledge Is Power", level: 2 },
];

interface CancerCounts {
  Male?: number;
  Female?: number;
}
interface CancerData {
  [district: string]: {
    [cancerType: string]: CancerCounts;
  };
}

export default function CancerIntro() {
  const [geoData, setGeoData] = useState<FeatureCollection | null>(null);
  const [cancerData, setCancerData] = useState<CancerData | null>(null);

  useEffect(() => {
    fetch("/cancer-data.json")
      .then((res) => res.json())
      .then((json: CancerData) => setCancerData(json))
      .catch((err) => console.error("Error loading cancer data:", err));
  }, []);

  useEffect(() => {
    d3.json<FeatureCollection>("/tn_districts.geojson").then((geojson) => {
      if (geojson) {
        setGeoData(geojson);
      }
    });
  }, []);

  const districtTotals = useMemo(() => {
    if (!cancerData) return null;
    const totals: { [key: string]: number } = {};
    for (const district in cancerData) {
      totals[district] = Object.values(cancerData[district]).reduce(
        (acc, cancer) => acc + (cancer.Male || 0) + (cancer.Female || 0),
        0
      );
    }
    return totals;
  }, [cancerData]);

  return (
    <FadeIn>
      <article className="prose dark:prose-invert max-w-none prose-headings:font-bold prose-p:leading-relaxed sm:prose-lg lg:prose-xl">
        <div className="text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl">🧬 What Is Cancer, And Why Should You Care?</h1>
          <p className="lead italic">
            Understanding the basics of one of the most complex diseases of our time.
          </p>
        </div>

        <div id="cancer-isnt-rare" className="scroll-mt-24">
          <div className="not-prose bg-white/60 dark:bg-zinc-900/60 backdrop-blur-lg rounded-2xl border border-zinc-200 dark:border-zinc-800 p-6 md:p-8 space-y-4 shadow-lg shadow-zinc-200/50 dark:shadow-black/20">
            <h2 className="text-2xl font-semibold text-black dark:text-white mt-0">
              🧠 A Simple Truth: Cancer Isn’t Rare Anymore
            </h2>
            <p className="text-black dark:text-zinc-200 text-base">
              Once considered a distant and uncommon illness, <strong>cancer is now a growing reality</strong> for many — especially across Tamil Nadu. Over the past decade, cancer cases in the state have <strong>risen steadily</strong>, with estimates showing a jump from <strong>50,000 cases in 2012</strong> to nearly <strong>1,00,000 projected cases</strong> in the near future.
            </p>
            <div className="w-full h-64 sm:h-72 overflow-hidden p-2 sm:p-4">
              {geoData && districtTotals ? (
                <StaticMap geoData={geoData} districtTotals={districtTotals} />
              ) : (
                <div className="w-full h-full bg-gray-200 dark:bg-zinc-800 flex items-center justify-center text-gray-500 dark:text-zinc-400 italic rounded-lg">
                  Loading Map Data...
                </div>
              )}
            </div>
          </div>
        </div>

        <div id="knowledge-gap" className="scroll-mt-24">
          <h2>🧪 The Knowledge Gap</h2>
          <p>
            We talk about cancer a lot. But <strong>how many of us truly understand what it is?</strong> 
            Despite being a household term, <strong>the biology behind cancer</strong> — how it starts, why it grows, and what causes it — remains unclear to most people. 
            That knowledge gap is dangerous, especially when <em>early detection and awareness can save lives</em>.
          </p>
        </div>

        <div id="why-this-guide-exists" className="scroll-mt-24">
          <h2>🎯 Why This Guide Exists</h2>
          <p>
            This guide was created with a simple mission: to <strong>break down the science of cancer</strong> — clearly, visually, and accessibly — for <strong>everyone</strong>. No jargon. No fear. Just facts.
          </p>
          <div className="not-prose w-full h-64 sm:h-72 bg-gray-200 dark:bg-zinc-800 rounded-xl flex items-center justify-center text-gray-700 dark:text-zinc-300 text-lg font-medium italic">
            [ Infographic: The Journey of a Normal Cell to a Cancer Cell ]
          </div>
        </div>

        <div id="knowledge-is-power" className="text-center pt-8 scroll-mt-24">
          <h3>🛡️ Knowledge Is Power</h3>
          <p className="max-w-3xl mx-auto">
            Whether you’re a student, a parent, a healthcare worker, or just someone curious — <strong>understanding cancer is the first step in fighting it.</strong>
          </p>
        </div>
      </article>
    </FadeIn>
  );
}
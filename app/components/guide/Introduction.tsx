"use client";

import { useEffect, useState, useMemo } from "react";
import * as d3 from "d3";
import StaticMap from './StaticMap'; 
import { FeatureCollection } from "geojson";

// --- Types needed for the data fetching ---
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
    <section className="bg-white py-12 px-6 md:px-16 lg:px-24">
      {/* --- This parent div controls the large spacing between sections --- */}
      <div className="max-w-5xl mx-auto space-y-10">

        {/* Title */}
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-black">
            🧬 What Is Cancer, And Why Should You Care?
          </h1>
          <p className="mt-4 text-lg md:text-xl text-gray-600 italic">
            Understanding the basics of one of the most complex diseases of our time.
          </p>
        </div>

        {/* Section 1: Card Format */}
        <div className="bg-gray-50 shadow-lg rounded-2xl border border-gray-200 p-6 md:p-8 space-y-4">
          <h2 className="text-2xl font-semibold text-black">
            🧠 A Simple Truth: Cancer Isn’t Rare Anymore
          </h2>
          <p className="text-black text-sm md:text-base">
            Once considered a distant and uncommon illness, <strong>cancer is now a growing reality</strong> for many — especially across Tamil Nadu. Over the past decade, cancer cases in the state have <strong>risen steadily</strong>, with estimates showing a jump from <strong>50,000 cases in 2012</strong> to nearly <strong>1,00,000 projected cases</strong> in the near future.
          </p>

          <div className="w-full h-64 overflow-hidden p-4">
            {geoData && districtTotals ? (
              <StaticMap geoData={geoData} districtTotals={districtTotals} />
            ) : (
              <div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-500 italic">
                Loading Map Data...
              </div>
            )}
          </div>
        </div>

        {/* --- MODIFICATION: Ensured this text block matches the CausativeAgents pattern --- */}
        <div className="space-y-4 pt-4">
          <h2 className="text-2xl font-semibold text-black">🧪 The Knowledge Gap</h2>
          <p className="text-black text-sm md:text-base">
            We talk about cancer a lot. But <strong>how many of us truly understand what it is?</strong> 
            Despite being a household term, <strong>the biology behind cancer</strong> — how it starts, why it grows, and what causes it — remains unclear to most people. 
            That knowledge gap is dangerous, especially when <em>early detection and awareness can save lives</em>.
          </p>
        </div>

        {/* --- MODIFICATION: Ensured this text block matches the CausativeAgents pattern --- */}
        <div className="space-y-4 pt-4">
          <h2 className="text-2xl font-semibold text-black">🎯 Why This Guide Exists</h2>
          <p className="text-black text-sm md:text-base">
            This guide was created with a simple mission: to <strong>break down the science of cancer</strong> — clearly, visually, and accessibly — for <strong>everyone</strong>. No jargon. No fear. Just facts.
          </p>

          <div className="w-full h-72 bg-gray-200 rounded-xl flex items-center justify-center text-gray-700 text-lg font-medium italic">
            [ Infographic: The Journey of a Normal Cell to a Cancer Cell ]
          </div>
        </div>

        <div className="text-center pt-8">
          <h3 className="text-2xl font-semibold text-black">🛡️ Knowledge Is Power</h3>
          <p className="mt-2 text-black text-sm md:text-base max-w-3xl mx-auto">
            Whether you’re a student, a parent, a healthcare worker, or just someone curious — <strong>understanding cancer is the first step in fighting it.</strong>
          </p>
        </div>
      </div>
    </section>
  );
}
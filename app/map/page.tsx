// --- START OF FILE app/map/page.tsx ---
"use client";

import { useEffect, useRef, useState, useMemo } from "react";
import * as d3 from "d3";
import { Info } from "lucide-react";
import BarChart from "./BarChart"; 
import PieChart from "./PieChart";
import { Feature, FeatureCollection, Geometry } from "geojson";

// --- Type Definitions ---
interface DistrictProperties { Dist_Name: string; }
type DistrictFeature = Feature<Geometry, DistrictProperties>;
type DistrictFeatureCollection = FeatureCollection<Geometry, DistrictProperties>;
interface RankedData { label: string; value: number; }

// --- Expected JSON Data Structures ---
interface DistrictCaseData {
  [district: string]: {
    Male: number;
    Female: number;
    'Both Sexes': number;
  };
}
interface CancerTypeData extends RankedData {}

// --- Mappings for Merged Districts ---
const parentToChildren: Record<string, string[]> = {
  'Kanchipuram': ['Kanchipuram', 'Chengalpattu'],
  'Nagapattinam': ['Nagapattinam', 'Mayiladuthurai'],
  'Tirunelveli': ['Tirunelveli', 'Tenkasi'],
  'Vellore': ['Vellore', 'Ranipet', 'Tirupattur'],
  'Villupuram': ['Villupuram', 'Kallakuruchi'],
};

const childToParent: Record<string, string> = {
  'Chengalpattu': 'Kanchipuram',
  'Mayiladuthurai': 'Nagapattinam',
  'Tenkasi': 'Tirunelveli',
  'Ranipet': 'Vellore',
  'Tirupattur': 'Vellore',
  'Kallakuruchi': 'Villupuram',
};

export default function MapPage() {
  const svgRef = useRef<SVGSVGElement | null>(null);
  const [geoData, setGeoData] = useState<DistrictFeatureCollection | null>(null);
  const [districtCases, setDistrictCases] = useState<DistrictCaseData | null>(null);
  const [topData, setTopData] = useState<{ male: CancerTypeData[], female: CancerTypeData[], both: CancerTypeData[] } | null>(null);
  const [selectedDistrict, setSelectedDistrict] = useState("Chennai");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const darkModeMatcher = window.matchMedia('(prefers-color-scheme: dark)');
    setIsDark(darkModeMatcher.matches);
    const listener = (e: MediaQueryListEvent) => setIsDark(e.matches);
    darkModeMatcher.addEventListener('change', listener);
    return () => darkModeMatcher.removeEventListener('change', listener);
  }, []);

  useEffect(() => {
    async function loadData() {
      try {
        const [geojson, districtData, maleCancerData, femaleCancerData, bothCancerData] = await Promise.all([
          d3.json<DistrictFeatureCollection>("/tn_districts.geojson"),
          d3.json<DistrictCaseData>("/district-cases.json"),
          d3.json<CancerTypeData[]>("/cancer-types-male.json"),
          d3.json<CancerTypeData[]>("/cancer-types-female.json"),
          d3.json<CancerTypeData[]>("/cancer-types-both.json"),
        ]);

        if (!geojson || !districtData || !maleCancerData || !femaleCancerData || !bothCancerData) {
          throw new Error("One or more essential data files failed to load.");
        }

        setGeoData(geojson);
        setDistrictCases(districtData);
        setTopData({ male: maleCancerData, female: femaleCancerData, both: bothCancerData });
      } catch (err) {
        console.error("Data loading failed:", err);
        setError(err instanceof Error ? err.message : "An unknown error occurred.");
      } finally {
        setIsLoading(false);
      }
    }
    loadData();
  }, []);

  // --- DERIVED STATE & INTERACTIVITY ---
  const dataParentDistrict = childToParent[selectedDistrict] || selectedDistrict;
  const districtsToHighlight = parentToChildren[dataParentDistrict] || [selectedDistrict];
  const districtNote = parentToChildren[dataParentDistrict] ? `*Data for ${parentToChildren[dataParentDistrict].join(', ')} is consolidated.` : '';

  const pieData = useMemo(() => {
    if (!dataParentDistrict || !districtCases) return [];
    const district = districtCases[dataParentDistrict];
    if (!district) return [];
    return [
        { type: 'Male', Total: district.Male },
        { type: 'Female', Total: district.Female }
    ];
  }, [dataParentDistrict, districtCases]);

  const mapTotals = useMemo(() => {
    if (!districtCases) return null;
    return Object.keys(districtCases).reduce((acc, dist) => {
      acc[dist] = districtCases[dist]['Both Sexes'];
      return acc;
    }, {} as Record<string, number>);
  }, [districtCases]);

  const mapMetrics = useMemo(() => {
    if (!mapTotals) return { min: 0, max: 0 };
    const values = Object.values(mapTotals);
    return { min: 0, max: d3.max(values) || 0 };
  }, [mapTotals]);
  
  const colorScale = useMemo(() => d3.scaleSequential(d3.interpolatePurples).domain([0, mapMetrics.max * 0.9]), [mapMetrics.max]);

  // --- D3 MAP RENDERING ---
  const highlightColor = "#EC4899";
  const noDataColor = isDark ? "#334155" : "#F1F5F9";
  useEffect(() => {
    if (!geoData || !svgRef.current) return;
    const svg = d3.select(svgRef.current);
    svg.selectAll("*").remove();
    const width = 500, height = 500;
    svg.attr("viewBox", `0 0 ${width} ${height}`);
    const projection = d3.geoMercator().fitSize([width, height], geoData);
    const pathGenerator = d3.geoPath().projection(projection);

    svg.selectAll("path").data(geoData.features).enter().append("path")
      .attr("d", pathGenerator).attr("class", "district-path")
      .attr("stroke", isDark ? "#0f172a" : "#f8fafc").attr("stroke-width", 0.75)
      .attr("stroke-linejoin", "round").style("cursor", "pointer")
      .on("click", (event, d: DistrictFeature) => setSelectedDistrict(d.properties.Dist_Name));
  }, [geoData, isDark]);

  useEffect(() => {
    if (!svgRef.current || !mapTotals) return;
    const svg = d3.select(svgRef.current);
    const paths = svg.selectAll<SVGPathElement, DistrictFeature>(".district-path");
    paths.each(function(d) {
      const path = d3.select(this);
      const districtName = d.properties.Dist_Name;
      const total = mapTotals[childToParent[districtName] || districtName] || 0;
      const isHighlighted = districtsToHighlight.includes(districtName);
      path.transition("colorfade").duration(350).attr("fill", isHighlighted ? highlightColor : (total > 0 ? colorScale(total) : noDataColor));
    });
  }, [districtsToHighlight, mapTotals, colorScale, noDataColor, highlightColor, isDark]);
  
  if (isLoading) return <div className="w-full min-h-screen flex items-center justify-center"><p className="text-slate-500 dark:text-slate-400 animate-pulse">Building The Cancer Atlas...</p></div>;
  if (error) return <div className="w-full min-h-screen flex items-center justify-center text-center p-4"><div><h2 className="text-2xl font-semibold text-red-500">Data Error</h2><p className="mt-2 text-slate-600 dark:text-slate-400">{error}</p></div></div>;

  return (
    <main className="w-full min-h-screen relative isolate overflow-hidden">
      <div className="absolute inset-0 -z-10 [background-image:linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] [background-size:36px_36px]"></div>
      <div className="w-full max-w-screen-xl mx-auto pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-12">
            {/* Left Column: Map & Controls */}
            <div className="w-full flex flex-col items-center gap-8">
                <div className="w-full max-w-sm">
                    <label htmlFor="district-select" className="block text-sm mb-2 font-semibold text-slate-700 dark:text-slate-300 text-center">Select a District</label>
                    <select id="district-select"
                        className="w-full border border-slate-300 dark:border-slate-700 bg-white/50 dark:bg-slate-900/50 text-slate-800 dark:text-slate-200 rounded-lg px-3 py-2 text-base focus:ring-2 focus:ring-brand-lavender"
                        value={selectedDistrict} onChange={(e) => setSelectedDistrict(e.target.value)}>
                        {geoData?.features.map((feature: DistrictFeature) => (
                            <option key={feature.properties.Dist_Name} value={feature.properties.Dist_Name}>{feature.properties.Dist_Name}</option>
                        ))}
                    </select>
                </div>
                <div className="w-full max-w-md aspect-square">
                    <svg ref={svgRef} className="w-full h-full" />
                </div>
            </div>

            {/* Right Column: District Details */}
            {/* --- CHANGE 3: Added lg:mt-10 for vertical alignment --- */}
            <div className="w-full flex flex-col items-center lg:mt-10">
                <h2 className="text-xl font-semibold tracking-tight text-slate-800 dark:text-slate-200 mb-4 text-center">
                    Gender Breakdown in <span className="text-brand-lavender break-words">{dataParentDistrict}</span>
                </h2>
                <PieChart data={pieData} />
                {districtNote && (
                    <div className="mt-4 flex items-center justify-center gap-2 text-xs text-slate-500 dark:text-slate-400 bg-slate-100/50 dark:bg-slate-800/30 p-2 rounded-md">
                        <Info size={14} />
                        <span>{districtNote}</span>
                    </div>
                )}
            </div>
        </div>
        
        {/* --- BOTTOM 3-COLUMN CHART LAYOUT --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
            <div className="md:col-span-2 lg:col-span-1 p-4 sm:p-6 bg-white/40 dark:bg-slate-900/40 backdrop-blur-sm rounded-2xl border border-slate-200/80 dark:border-slate-800">
                {topData && <BarChart data={topData.both} title={"Top 10 Cancers (Both Sexes)"} barColor="#8b5cf6" />}
            </div>
            <div className="p-4 sm:p-6 bg-white/40 dark:bg-slate-900/40 backdrop-blur-sm rounded-2xl border border-slate-200/80 dark:border-slate-800">
                {topData && <BarChart data={topData.male} title={"Top 10 Cancers (Male)"} barColor="#6366f1" />}
            </div>
            <div className="p-4 sm:p-6 bg-white/40 dark:bg-slate-900/40 backdrop-blur-sm rounded-2xl border border-slate-200/80 dark:border-slate-800">
                {topData && <BarChart data={topData.female} title={"Top 10 Cancers (Female)"} barColor="#ec4899" />}
            </div>
        </div>
      </div>
    </main>
  );
}
// --- START OF FILE app/map/page.tsx ---
"use client";

import { useEffect, useRef, useState, useMemo } from "react";
import * as d3 from "d3";
import PieChart from "./PieChart";
import { Feature, FeatureCollection, Geometry } from "geojson";

// --- Type Definitions (Unchanged) ---
interface DistrictProperties {
  Dist_Name: string;
}
type DistrictFeature = Feature<Geometry, DistrictProperties>;
type DistrictFeatureCollection = FeatureCollection<Geometry, DistrictProperties>;
interface CancerCounts {
  Male?: number;
  Female?: number;
}
interface CancerData {
  [district: string]: {
    [cancerType: string]: CancerCounts;
  };
}

// Map Legend Component - Perfect for both mobile and desktop
const MapLegend = ({ colorScale, min, max }: { colorScale: d3.ScaleSequential<string>, min: number, max: number }) => {
  if (max === 0) return null;
  const range = d3.range(0, 1.01, 0.05);

  return (
    <div className="w-full">
        <p className="text-xs font-semibold text-slate-600 dark:text-slate-400 mb-2 text-center">Total Cases</p>
        <div className="w-full h-3 rounded-full overflow-hidden" style={{
            background: `linear-gradient(to right, ${range.map(t => colorScale(t * max)).join(',')})`
        }}></div>
        <div className="flex justify-between mt-1 text-xs text-slate-500 dark:text-slate-400">
            <span>{Math.floor(min)}</span>
            <span>{Math.ceil(max)}</span>
        </div>
    </div>
  );
};


export default function MapPage() {
  const svgRef = useRef<SVGSVGElement | null>(null);
  const [geoData, setGeoData] = useState<DistrictFeatureCollection | null>(null);
  const [selectedDistrict, setSelectedDistrict] = useState("");
  const [cancerData, setCancerData] = useState<CancerData | null>(null);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const darkModeMatcher = window.matchMedia('(prefers-color-scheme: dark)');
    setIsDark(darkModeMatcher.matches);
    const listener = (e: MediaQueryListEvent) => setIsDark(e.matches);
    darkModeMatcher.addEventListener('change', listener);
    return () => darkModeMatcher.removeEventListener('change', listener);
  }, []);

  useEffect(() => {
    fetch("/cancer-data.json")
      .then((res) => res.json())
      .then((json: CancerData) => setCancerData(json))
      .catch((err) => console.error("Error loading cancer data:", err));
  }, []);

  useEffect(() => {
    d3.json<DistrictFeatureCollection>("/tn_districts.geojson").then((geojson) => {
      if (geojson) {
        setGeoData(geojson);
        if (!selectedDistrict && geojson.features.length > 0) {
          setSelectedDistrict(geojson.features[0].properties.Dist_Name);
        }
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

  const mapMetrics = useMemo(() => {
    if (!districtTotals) return { min: 0, max: 0 };
    const values = Object.values(districtTotals);
    return {
      min: Math.min(...values.filter(v => v > 0), 0),
      max: Math.max(...values)
    }
  }, [districtTotals]);
  
  const highlightColor = "#EC4899";
  const noDataColor = isDark ? "#334155" : "#F1F5F9";

  const colorScale = useMemo(() => {
    return d3.scaleSequential(d3.interpolatePurples)
             .domain([mapMetrics.min, mapMetrics.max * 0.9]);
  }, [mapMetrics.min, mapMetrics.max]);


  useEffect(() => {
    if (!geoData || !svgRef.current) return;

    const svg = d3.select(svgRef.current);
    svg.selectAll("*").remove();
    
    const width = 500;
    const height = 500; // Adjusted for a square aspect ratio
    svg.attr("viewBox", `0 0 ${width} ${height}`);

    const projection = d3.geoMercator().fitSize([width, height], geoData);
    const pathGenerator = d3.geoPath().projection(projection);

    svg
      .selectAll("path")
      .data(geoData.features)
      .enter()
      .append("path")
      .attr("d", pathGenerator)
      .attr("class", "district-path")
      .attr("stroke", isDark ? "#0f172a" : "#f8fafc")
      .attr("stroke-width", 0.75)
      .attr("stroke-linejoin", "round")
      .style("cursor", "pointer")
      .on("click", (event, d: DistrictFeature) => {
        setSelectedDistrict(d.properties.Dist_Name);
      });

  }, [geoData, isDark]);

  useEffect(() => {
    if (!geoData || !svgRef.current || !districtTotals) return;

    const svg = d3.select(svgRef.current);
    const paths = svg.selectAll<SVGPathElement, DistrictFeature>(".district-path");

    paths.each(function(d) {
        const path = d3.select(this);
        const districtName = d.properties.Dist_Name;
        const isSelected = districtName === selectedDistrict;
        
        const total = districtTotals[districtName] || 0;
        const targetColor = isSelected ? highlightColor : (total > 0 ? colorScale(total) : noDataColor);

        path.transition("colorfade")
          .duration(350)
          .attr("fill", targetColor);
    });

    paths
      .on("mouseover", function (event, d) {
        d3.select(this).raise(); 
        if (d.properties.Dist_Name !== selectedDistrict) {
          d3.select(this)
            .transition("hoverfade")
            .duration(150)
            .attr("fill", highlightColor);
        }
      })
      .on("mouseout", function (event, d) {
        if (d.properties.Dist_Name !== selectedDistrict) {
          const totalCases = districtTotals[d.properties.Dist_Name] || 0;
          d3.select(this)
            .transition("hoverfade")
            .duration(150)
            .attr("fill", totalCases > 0 ? colorScale(totalCases) : noDataColor);
        }
      });
  }, [selectedDistrict, geoData, districtTotals, colorScale, noDataColor]);

  if (!geoData || !cancerData || !districtTotals) {
    return (
      <div className="w-full min-h-screen flex items-center justify-center bg-slate-50 dark:bg-slate-900">
        <p className="text-slate-500 dark:text-slate-400 animate-pulse">Loading Atlas...</p>
      </div>
    );
  }

  return (
    <main className="w-full min-h-screen relative bg-slate-50 dark:bg-slate-900 overflow-hidden">
      <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 [background-image:linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] [background-size:36px_36px]"></div>
          <div className="absolute left-1/4 top-1/4 w-[700px] h-[700px] bg-brand-lavender/10 dark:bg-brand-lavender/20 rounded-full blur-3xl opacity-40 animate-pulse"></div>
          <div className="absolute right-1/4 bottom-1/4 w-[700px] h-[700px] bg-blue-300/10 dark:bg-blue-300/20 rounded-full blur-3xl opacity-40 animate-pulse [animation-delay:2s]"></div>
      </div>
      
      <div className="w-full max-w-screen-xl mx-auto pt-20 md:pt-24 pb-16 flex flex-col items-center">
        
        <div className="w-full max-w-3xl mb-12 px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-16">
                {/* --- DEFINITIVE FIX: Added `text-center` to align the label consistently with the legend below it --- */}
                <div className="w-full max-w-[300px] sm:max-w-xs text-center">
                    <label htmlFor="district-select" className="block text-sm mb-2 font-semibold text-slate-700 dark:text-slate-300">
                        Select a District
                    </label>
                    <select
                        id="district-select"
                        className="w-11/12 mx-auto border border-slate-300 dark:border-slate-700 bg-white/50 dark:bg-slate-900/50 text-slate-800 dark:text-slate-200 rounded-lg px-3 py-2 text-sm focus:outline-none"
                        value={selectedDistrict}
                        onChange={(e) => setSelectedDistrict(e.target.value)}
                    >
                        {geoData?.features.map((feature: DistrictFeature) => (
                            <option key={feature.properties.Dist_Name} value={feature.properties.Dist_Name}>
                                {feature.properties.Dist_Name}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="w-full max-w-[300px] sm:max-w-xs">
                    <MapLegend colorScale={colorScale} min={mapMetrics.min} max={mapMetrics.max} />
                </div>
            </div>
        </div>
        
        <div className="w-full flex-grow flex flex-col lg:flex-row items-center justify-center gap-12 px-4 sm:px-6 lg:px-8">
            {/* Left Column: The Map */}
            <div className="w-full lg:w-1/2 flex justify-center items-center">
                <div className="w-full max-w-md aspect-square">
                    <svg ref={svgRef} className="w-full h-full" />
                </div>
            </div>

            {/* Right Column: The Pie Chart */}
            <div className="w-full lg:w-1/2 flex flex-col justify-center items-center min-h-[450px]">
              {selectedDistrict && cancerData && cancerData[selectedDistrict] ? (
                <div className="w-full max-w-lg flex flex-col items-center">
                  <h2 className="text-3xl lg:text-4xl font-semibold tracking-tighter mb-6 text-center text-slate-900 dark:text-white">
                    <span className="text-brand-lavender break-words">{selectedDistrict}</span>

                  </h2>
                  <PieChart
                    data={Object.entries(cancerData[selectedDistrict]).map(
                      ([type, value]) => {
                        const { Male = 0, Female = 0 } = value as { Male?: number; Female?: number };
                        return { type, Male, Female, Total: Male + Female };
                      }
                    )}
                  />
                </div>
              ) : (
                 <div className="text-center text-slate-500 dark:text-slate-400 bg-slate-100/50 dark:bg-slate-800/30 p-8 sm:p-10 rounded-2xl border border-slate-200/80 dark:border-slate-800 w-full max-w-md">
                    <p className="text-lg font-medium">Select a district</p>
                    <p className="mt-2 text-sm">Choose a district from the dropdown or click on the map to view detailed cancer statistics.</p>
                </div>
              )}
            </div>
        </div>
      </div>
    </main>
  );
}
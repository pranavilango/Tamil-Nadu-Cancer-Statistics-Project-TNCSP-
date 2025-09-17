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
    <div className="w-full mt-3 px-1 lg:px-2 lg:mt-4">
        <p className="text-[10px] lg:text-xs font-semibold text-slate-600 dark:text-slate-400 lg:text-gray-600 mb-2 text-center">Total Cases</p>
        <div className="w-full h-2.5 lg:h-3 rounded-full overflow-hidden" style={{
            background: `linear-gradient(to right, ${range.map(t => colorScale(t * max)).join(',')})`
        }}></div>
        <div className="flex justify-between mt-1 text-[10px] lg:text-xs text-slate-500 dark:text-slate-400 lg:text-gray-500">
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
    const height = 600;
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
    <main className="w-full min-h-screen pt-16 lg:pt-0 relative bg-slate-50 dark:bg-slate-900 overflow-hidden">
      <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 [background-image:linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] [background-size:36px_36px]"></div>
          <div className="absolute left-1/4 top-1/4 w-[700px] h-[700px] bg-brand-lavender/10 dark:bg-brand-lavender/20 rounded-full blur-3xl opacity-40 animate-pulse"></div>
          <div className="absolute right-1/4 bottom-1/4 w-[700px] h-[700px] bg-blue-300/10 dark:bg-blue-300/20 rounded-full blur-3xl opacity-40 animate-pulse [animation-delay:2s]"></div>
      </div>
      
      {/* PERFECT MOBILE (preserved) + PERFECT DESKTOP (original) */}
      <div className="w-full min-h-screen flex flex-col lg:flex-row lg:justify-start lg:items-center box-border overflow-x-hidden">
        
        {/* DEFINITIVE FIX: Changed z-index from z-50 to z-30 to ensure it's below the z-50 navbar. */}
        <div className="w-full px-3 py-4 lg:px-0 lg:py-0 lg:fixed lg:top-0 lg:h-[100vh] lg:w-[50vw] flex lg:items-center lg:justify-start z-30 lg:ml-6">
          <div className="w-full max-w-[calc(100vw-24px)] sm:max-w-md lg:max-w-none rounded-2xl lg:rounded-4xl bg-slate-100/50 lg:bg-gray-100 dark:bg-slate-800/30 backdrop-blur-lg border border-slate-200/80 dark:border-slate-800 flex flex-col lg:flex-row shadow-lg lg:shadow-[0_0_25px_rgba(0,0,0,0.2)] overflow-hidden min-w-0">
            
            {/* Controls Panel - MOBILE: Safe, DESKTOP: Original */}
            <div className="w-full lg:w-2/5 p-3 lg:p-6 min-w-0 flex flex-col lg:justify-start lg:rounded-l-4xl lg:shadow-[0_5px_15px_rgba(0,0,0,0.05)]">
                <div className="mb-3 lg:mb-4">
                    <h1 className="text-lg lg:text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-100 truncate lg:no-truncate">Tamil Nadu</h1>
                    <p className="text-sm lg:text-lg font-medium text-slate-600 dark:text-slate-300">Cancer Atlas</p>
                </div>
                
                <label htmlFor="district-select" className="block text-xs lg:text-sm mb-1 lg:mb-2 font-semibold text-slate-700 lg:text-black dark:text-slate-300">
                    Select a District
                </label>
                
                {/* Select - MOBILE: Safe, DESKTOP: Original */}
                <select
                    id="district-select"
                    className="w-full min-w-0 border border-slate-300 lg:border-gray-300 dark:border-slate-700 bg-white/50 lg:bg-white dark:bg-slate-900/50 text-slate-800 dark:text-slate-200 rounded-lg px-2 lg:px-3 py-2 text-xs lg:text-sm focus:outline-none focus:ring-2 lg:focus:ring-1 focus:ring-brand-lavender lg:focus:ring-black truncate lg:truncate-none"
                    value={selectedDistrict}
                    onChange={(e) => setSelectedDistrict(e.target.value)}
                >
                    {geoData?.features.map((feature: DistrictFeature) => (
                        <option key={feature.properties.Dist_Name} value={feature.properties.Dist_Name}>
                            {feature.properties.Dist_Name}
                        </option>
                    ))}
                </select>
                
                <MapLegend colorScale={colorScale} min={mapMetrics.min} max={mapMetrics.max} />
                
                {/* Desktop original text content */}
                <div className="hidden lg:block mt-8">
                  <p className="text-xs text-gray-600 text-center mb-4">
                      This data is from the 2020 TNCRP Report, presenting statistics from 2016.
                  </p>
                  <p className="text-xs text-gray-600 text-center mb-4">
                      The pie chart includes both male and female cases. Hover over slices for details.
                  </p>
                  <div className="mt-4 bg-gray-200 rounded-lg p-3 text-center">
                      <p className="text-xs text-gray-600 font-medium">
                          Other selectors coming soon.
                      </p>
                  </div>
                </div>
            </div>
            
            {/* Map SVG Container - MOBILE: Perfect sizing, DESKTOP: Original */}
            <div className="w-full lg:w-3/5 p-2 lg:p-4 flex items-center justify-center min-w-0">
              <div className="w-full max-w-[260px] sm:max-w-[300px] lg:max-w-full aspect-[4/5] lg:aspect-auto lg:h-full">
                <svg ref={svgRef} className="w-full h-full lg:h-auto block" />
              </div>
            </div>
          </div>
        </div>

        {/* Chart Container - MOBILE: Perfect containment, DESKTOP: Original positioning */}
        <div className="w-full px-3 py-4 lg:ml-[52vw] lg:w-[48vw] lg:h-screen flex flex-col items-center justify-center lg:px-6">
          {selectedDistrict && cancerData && cancerData[selectedDistrict] ? (
            <div className="w-full max-w-[calc(100vw-24px)] sm:max-w-md lg:max-w-full flex flex-col items-center">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold lg:font-bold tracking-tighter mb-4 lg:mb-8 text-center text-slate-900 dark:text-white px-2 lg:px-0">
                Cancer in <span className="text-brand-lavender break-words">{selectedDistrict}</span>
              </h2>
              <div className="w-full flex justify-center">
                <PieChart
                  data={Object.entries(cancerData[selectedDistrict]).map(
                    ([type, value]) => {
                      const { Male = 0, Female = 0 } = value as { Male?: number; Female?: number };
                      return { type, Male, Female, Total: Male + Female };
                    }
                  )}
                />
              </div>
            </div>
          ) : (
             <div className="text-center text-slate-500 dark:text-slate-400 bg-slate-100/50 dark:bg-slate-800/30 p-6 lg:p-8 rounded-2xl border border-slate-200/80 dark:border-slate-800 w-full max-w-[calc(100vw-24px)] sm:max-w-md lg:max-w-lg mx-auto">
                <p className="text-base lg:text-lg font-medium">Select a district</p>
                <p className="mt-2 text-sm">Choose a district from the dropdown or click on the map to view detailed cancer statistics.</p>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
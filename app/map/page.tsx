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

// Map Legend Component
const MapLegend = ({ colorScale, min, max }: { colorScale: d3.ScaleSequential<string>, min: number, max: number }) => {
  const range = d3.range(0, 1.01, 0.05);

  return (
    <div className="w-full px-2 mt-4">
        <p className="text-xs font-semibold text-slate-600 dark:text-slate-400 mb-2 text-center">Total Cases</p>
        <div className="w-full h-3 rounded-full" style={{
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
  }, [selectedDistrict]);

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
      min: Math.min(...values),
      max: Math.max(...values)
    }
  }, [districtTotals]);
  
  const highlightColor = "#EC4899"; // Tailwind's `pink-500`
  const colorScale = useMemo(() => {
    return d3.scaleSequential(d3.interpolatePurples)
             .domain([0, mapMetrics.max * 0.9]);
  }, [mapMetrics.max]);


  useEffect(() => {
    if (!geoData || !svgRef.current) return;

    const svg = d3.select(svgRef.current);
    svg.selectAll("*").remove();
    
    svg.append("title").text("Map of Tamil Nadu Districts");
    svg.append("desc").text("A choropleth map showing cancer case data. Each district is clickable.");

    const width = 500;
    const height = 500;
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
      .attr("stroke", isDark => isDark ? "#0f172a" : "#f8fafc")
      .attr("stroke-width", 0.5)
      .attr("stroke-linejoin", "round")
      .style("cursor", "pointer")
      .on("click", (event, d: DistrictFeature) => {
        setSelectedDistrict(d.properties.Dist_Name);
      });

  }, [geoData]);

  useEffect(() => {
    if (!geoData || !svgRef.current || !districtTotals) return;

    const svg = d3.select(svgRef.current);
    const paths = svg.selectAll<SVGPathElement, DistrictFeature>(".district-path");

    paths.each(function(d) {
        const path = d3.select(this);
        const districtName = d.properties.Dist_Name;
        const isSelected = districtName === selectedDistrict;
        
        const currentColor = path.attr('fill');
        const targetColor = isSelected ? highlightColor : colorScale(districtTotals[districtName] || 0);

        if (currentColor !== targetColor) {
            path.transition("colorfade")
              .duration(350)
              .attr("fill", targetColor);
        }
    });

    paths
      .on("mouseover", function (event, d) {
        d3.select(this).raise(); 
        if (d.properties.Dist_Name !== selectedDistrict) {
          // IMPROVEMENT #1: Use the same pink for hover and highlight
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
            .attr("fill", colorScale(totalCases));
        }
      });
  }, [selectedDistrict, geoData, districtTotals, colorScale]);

  if (!geoData || !cancerData || !districtTotals) {
    return (
      <div className="w-full min-h-screen flex items-center justify-center bg-slate-50 dark:bg-slate-900">
        <p className="text-slate-500 dark:text-slate-400">Loading Atlas...</p>
      </div>
    );
  }

  return (
    <main className="w-full min-h-screen flex items-center justify-center p-4 lg:p-8 relative overflow-hidden bg-slate-50 dark:bg-slate-900">
      <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 [background-image:linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] [background-size:36px_36px]"></div>
          <div className="absolute left-1/4 top-1/4 w-[700px] h-[700px] bg-brand-lavender/10 dark:bg-brand-lavender/20 rounded-full blur-3xl opacity-40 animate-pulse"></div>
          <div className="absolute right-1/4 bottom-1/4 w-[700px] h-[700px] bg-blue-300/10 dark:bg-blue-300/20 rounded-full blur-3xl opacity-40 animate-pulse [animation-delay:2s]"></div>
      </div>
      
      <div className="w-full max-w-screen-2xl grid grid-cols-1 lg:grid-cols-2 gap-8 items-center animate-fade-in">
        
        <div className="w-full h-full max-h-[90vh] lg:max-h-[800px] rounded-2xl bg-slate-100/50 dark:bg-slate-800/30 backdrop-blur-lg border border-slate-200/80 dark:border-slate-800 flex flex-col lg:flex-row shadow-2xl dark:shadow-black/30 overflow-hidden">
          <div className="w-full lg:w-2/5 flex flex-col justify-start rounded-t-2xl lg:rounded-l-2xl lg:rounded-tr-none p-6">
              <div className="mb-6">
                  <h1 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-100">Tamil Nadu</h1>
                  <p className="text-lg font-medium text-slate-600 dark:text-slate-300">Cancer Atlas</p>
              </div>
              <label htmlFor="district-select" className="block text-sm mb-2 font-semibold text-slate-700 dark:text-slate-300">
                  Select a District
              </label>
              <select
                  id="district-select"
                  className="w-full border border-slate-300 dark:border-slate-700 bg-white/50 dark:bg-slate-900/50 text-slate-800 dark:text-slate-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-lavender"
                  value={selectedDistrict}
                  onChange={(e) => setSelectedDistrict(e.target.value)}
              >
                  {geoData?.features.map((feature: DistrictFeature) => (
                      <option key={feature.properties.Dist_Name} value={feature.properties.Dist_Name}>
                          {feature.properties.Dist_Name}
                      </option>
                  ))}
              </select>
              <MapLegend colorScale={colorScale} min={0} max={mapMetrics.max} />
              <div className="hidden lg:block mt-auto pt-6 text-xs text-slate-500 dark:text-slate-400 space-y-3 text-center">
                <p>Data from the 2020 TNCRP Report (statistics from 2016).</p>
                <p>Hover over the map to explore and click to select a district.</p>
              </div>
          </div>
          <div className="w-full lg:w-3/5 p-4 flex items-center justify-center">
            <div className="w-full">
              <svg ref={svgRef} className="w-full h-auto" />
            </div>
          </div>
        </div>

        <div className="w-full flex flex-col items-center justify-center px-4 py-8 h-full min-h-[500px] lg:min-h-0">
          {selectedDistrict && cancerData && cancerData[selectedDistrict] ? (
            <>
              <h2 className="text-3xl lg:text-4xl font-semibold tracking-tighter mb-8 text-center text-slate-900 dark:text-white">
                {/* IMPROVEMENT #2: Revert district name to lavender */}
                Cancer in <span className="text-brand-lavender">{selectedDistrict}</span>
              </h2>
              <PieChart
                data={Object.entries(cancerData[selectedDistrict]).map(
                  ([type, value]) => {
                    const { Male = 0, Female = 0 } = value as { Male?: number; Female?: number };
                    return { type, Male, Female, Total: Male + Female };
                  }
                )}
              />
            </>
          ) : (
             <div className="text-center text-slate-500 dark:text-slate-400 bg-slate-100/50 dark:bg-slate-800/30 p-10 rounded-2xl border border-slate-200/80 dark:border-slate-800">
                <p className="text-lg font-medium">Select a district</p>
                <p className="mt-2 text-sm">Choose a district from the dropdown or click on the map to view detailed cancer statistics.</p>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
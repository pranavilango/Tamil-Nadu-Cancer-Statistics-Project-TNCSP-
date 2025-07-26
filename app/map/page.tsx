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

export default function MapPage() {
  const svgRef = useRef<SVGSVGElement | null>(null);
  const [geoData, setGeoData] = useState<DistrictFeatureCollection | null>(null);
  const [selectedDistrict, setSelectedDistrict] = useState("");
  const [cancerData, setCancerData] = useState<CancerData | null>(null);

  // --- Data Loading (Unchanged) ---
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
        if (geojson.features.length > 0) {
          setSelectedDistrict(geojson.features[0].properties.Dist_Name);
        }
      }
    });
  }, []);

  // --- Data Aggregation (Unchanged) ---
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


  // --- D3 RENDERING LOGIC (Unchanged) ---
  useEffect(() => {
    if (!geoData || !svgRef.current) return;

    const svg = d3.select(svgRef.current);
    svg.selectAll("*").remove();

    const width = 600;
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
      .attr("stroke", "#000")
      .attr("stroke-width", 0.35)
      .attr("stroke-linejoin", "round")
      .style("cursor", "pointer")
      .on("click", (event, d: DistrictFeature) => {
        setSelectedDistrict(d.properties.Dist_Name);
      });

  }, [geoData]);

  useEffect(() => {
    if (!geoData || !svgRef.current || !districtTotals) return;

    const maxCases = Math.max(...Object.values(districtTotals));
    const colorScale = d3.scaleSequential(d3.interpolateBlues)
                         .domain([0, maxCases]);

    const svg = d3.select(svgRef.current);

    svg
      .selectAll<SVGPathElement, DistrictFeature>(".district-path")
      .attr("fill", (d) => {
        const districtName = d.properties.Dist_Name;
        if (districtName === selectedDistrict) {
          return "#ff6347";
        }
        const totalCases = districtTotals[districtName] || 0;
        return colorScale(totalCases);
      })
      .on("mouseover", function () {
        d3.select(this).attr("fill", "#ff6347"); 
      })
      .on("mouseout", function (event, d) {
        const districtName = d.properties.Dist_Name;
        if (districtName !== selectedDistrict) {
          const totalCases = districtTotals[districtName] || 0;
          d3.select(this).attr("fill", colorScale(totalCases));
        }
      });
  }, [selectedDistrict, geoData, districtTotals]);

  // --- JSX Layout (RESPONSIVE) ---
  return (
    <div className="w-full min-h-screen flex flex-col lg:flex-row lg:justify-start lg:items-center p-4 pt-24 lg:p-0 z-2 overflow-x-hidden">
      
      {/* Map & Selector Container */}
      {/* FIX: On lg screens, pushed down from top and height adjusted to prevent overlap with fixed navbar */}
      <div className="w-full lg:fixed lg:top-[12vh] lg:h-[88vh] lg:w-[50vw] flex lg:items-center lg:justify-start z-39 lg:ml-6">
        <div className="w-full rounded-4xl bg-gray-100 flex flex-col lg:flex-row z-1" style={{ boxShadow: "0 0 25px rgba(0,0,0,0.2)" }}>
          
          {/* Selector Panel */}
          <div className="w-full lg:w-2/5 flex flex-col justify-start rounded-t-4xl lg:rounded-l-4xl lg:rounded-tr-none p-6" style={{ boxShadow: "0 5px 15px rgba(0,0,0,0.05)" }}>
              <label htmlFor="district-select" className="block text-sm mb-2 font-semibold">
                  District
              </label>
              <select
                  id="district-select"
                  className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-black"
                  value={selectedDistrict}
                  onChange={(e) => setSelectedDistrict(e.target.value)}
              >
                  {geoData?.features.map((feature: DistrictFeature) => (
                      <option key={feature.properties.Dist_Name} value={feature.properties.Dist_Name}>
                          {feature.properties.Dist_Name}
                      </option>
                  ))}
              </select>
              {/* Text hidden on mobile for a cleaner look, visible on desktop */}
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
          
          {/* Map SVG Container */}
          <div className="w-full lg:w-3/5 p-4 flex justify-center">
            <div className="w-full max-w-md lg:max-w-full">
              <svg ref={svgRef} className="w-full h-auto" />
            </div>
          </div>
        </div>
      </div>

      {/* Pie Chart Container */}
      <div className="w-full mt-8 lg:mt-0 lg:ml-[52vw] lg:w-[48vw] h-auto lg:h-screen flex flex-col items-center justify-center px-2 lg:px-6">
        {selectedDistrict && cancerData && cancerData[selectedDistrict] && (
          <>
            <h2 className="text-2xl lg:text-3xl font-bold mb-4 lg:mb-8 text-center">
              Cancer in {selectedDistrict}
            </h2>
            <PieChart
              data={Object.entries(cancerData[selectedDistrict]).map(
                ([type, value]) => {
                  const { Male = 0, Female = 0 } = value as { Male?: number; Female?: number };
                  return {
                    type, Male, Female, Total: Male + Female,
                  };
                }
              )}
            />
          </>
        )}
      </div>
    </div>
  );
}
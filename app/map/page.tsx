// --- START OF FILE page.tsx ---

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

  // --- JSX Layout (Unchanged) ---
  return (
    <div className="w-full h-full flex justify-start items-center z-2">
      <div className="fixed top-0 h-[100vh] w-[50vw] flex items-center justify-start z-50 ml-2 sm:ml-4 lg:ml-6">
        <div className="w-full rounded-4xl bg-gray-100 flex z-3" style={{ boxShadow: "0 0 25px rgba(0,0,0,0.2)" }}>
          <div className="w-2/5 flex flex-col justify-start rounded-l-4xl" style={{ boxShadow: "5px 0 15px rgba(0,0,0,0.1)" }}>
              <div className="pt-5 pl-4 pr-4">
                  <label htmlFor="district-select" className="block text-sm mb-2 font-semibold">
                      District
                  </label>
                  <select
                      id="district-select"
                      className="w-[100%] border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-black mb-8"
                      value={selectedDistrict}
                      onChange={(e) => setSelectedDistrict(e.target.value)}
                  >
                      {geoData?.features.map((feature: DistrictFeature) => (
                          <option key={feature.properties.Dist_Name} value={feature.properties.Dist_Name}>
                              {feature.properties.Dist_Name}
                          </option>
                      ))}
                  </select>
                  <p className="text-xs text-gray-600 text-center mb-8">
                      This data is taken from the 2020 Report of TNCRP. It presents the cancer statistics from 2016.
                  </p>
                  <p className="text-xs text-gray-600 text-center mb-8">
                      The pie chart represents both male and female cases.
                  </p>
                  <p className="text-xs text-gray-600 text-center">
                      Hovering on each slice of the pie chart presents a toolkit with gender-wise case data and proportion of the respective cancer type in relation to the total number of cases.
                  </p>
                  <div className="mt-8 bg-gray-200 rounded-lg p-3 text-center">
                      <p className="text-xs text-gray-600 font-medium">
                          Other selectors coming soon.
                      </p>
                  </div>
              </div>
          </div>
          <div className="w-3/5">
            <svg ref={svgRef} className="w-full h-auto m-4" />
          </div>
        </div>
      </div>
      <div className="ml-[52vw] w-[48vw] h-screen flex flex-col items-center justify-center px-6">
        {selectedDistrict && cancerData && cancerData[selectedDistrict] && (
          <>
            <h2 className="text-3xl font-bold mb-8 text-center">
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
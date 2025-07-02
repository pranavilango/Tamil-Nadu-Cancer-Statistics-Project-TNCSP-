"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import * as d3 from "d3";
import PieChart from "./PieChart";
import { Feature, FeatureCollection, Geometry } from "geojson";

// Define types for our data
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
  const [data, setData] = useState<DistrictFeatureCollection | null>(null);
  const [selectedDistrict, setSelectedDistrict] = useState("");
  const [cancerData, setCancerData] = useState<CancerData | null>(null);

  useEffect(() => {
    fetch("/cancer-data.json")
      .then((res) => res.json())
      .then((json: CancerData) => {
        console.log("Loaded cancer data:", json);
        setCancerData(json);
      })
      .catch((err) => console.error("Error loading cancer data:", err));
  }, []);

  useEffect(() => {
    d3.json<DistrictFeatureCollection>("/tn_districts.geojson").then((geojson) => {
      if (geojson) {
        setData(geojson);
      }
    });
  }, []);

  const handleDistrictClick = useCallback((feature: DistrictFeature) => {
    const svg = d3.select(svgRef.current);
    if (!svg.node()) return;

    const allPaths = svg.selectAll<SVGPathElement, DistrictFeature>("path");

    const clickedPath = allPaths.filter(
      (d) => d.properties.Dist_Name === feature.properties.Dist_Name
    );

    const isAlreadyClicked = clickedPath.attr("data-clicked") === "true";

    if (isAlreadyClicked) {
      clickedPath
        .attr("fill", clickedPath.attr("data-original-fill"))
        .attr("data-clicked", "false");
      setSelectedDistrict("");
    } else {
      allPaths.each(function () {
        const path = d3.select(this);
        path.attr("fill", path.attr("data-original-fill")).attr("data-clicked", "false");
      });

      clickedPath.attr("fill", "#ff6347").attr("data-clicked", "true");
      setSelectedDistrict(feature.properties.Dist_Name);
    }
  }, []);

  useEffect(() => {
    if (!data || !svgRef.current) return;

    const svg = d3.select(svgRef.current);
    svg.selectAll("*").remove();

    const width = 600;
    const height = 600;

    const projection = d3.geoMercator().fitSize([width, height], data);
    const path = d3.geoPath().projection(projection);
    svg.attr("viewBox", `0 0 ${width} ${height}`);

    const colorScale = d3.scaleSequential(d3.interpolateBlues).domain([0, data.features.length]);

    svg.append("defs").html(`
      <filter id="noise-texture" x="0%" y="0%" width="100%" height="100%">
        <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="3" result="noise" />
        <feComposite in="noise" in2="SourceAlpha" operator="in" result="maskedNoise" />
        <feBlend in="SourceGraphic" in2="maskedNoise" mode="multiply" />
      </filter>
    `);

    svg
      .selectAll("path")
      .data(data.features)
      .enter()
      .append("path")
      .attr("d", path)
      .attr("fill", (_, i) => colorScale(i))
      .attr("stroke", "#000")
      .attr("stroke-width", 0.35)
      .attr("stroke-linejoin", "round")
      .attr("filter", "url(#noise-texture)")
      .each(function (_, i) {
        d3.select(this)
          .attr("data-original-fill", colorScale(i))
          .attr("data-clicked", "false");
      })
      .on("mouseover", function () {
        d3.select(this).attr("fill", "#ff6347");
      })
      .on("mouseout", function () {
        const isClicked = d3.select(this).attr("data-clicked") === "true";
        if (!isClicked) {
          const originalColor = d3.select(this).attr("data-original-fill");
          d3.select(this).attr("fill", originalColor as string);
        }
      })
      .style("cursor", "pointer")
      .on("click", function (event, d: DistrictFeature) {
        handleDistrictClick(d);
      });
  }, [data, handleDistrictClick]);

  return (
    <div className="w-full h-full flex justify-start items-center z-2">
      <div className="fixed top-0 h-[100vh] w-[50vw] flex items-center justify-start z-50 ml-2 sm:ml-4 lg:ml-6">
        <div className="w-full rounded-4xl bg-gray-100 flex z-3" style={{ boxShadow: "0 0 25px rgba(0,0,0,0.2)" }}>
          <div className="w-2/5 flex flex-col justify-start rounded-l-4xl" style={{ boxShadow: "5px 0 15px rgba(0,0,0,0.1)" }}>
            <div className="pt-5 pl-4 pr-4">
              <label htmlFor="district-select" className="block text-sm mb-1">
                District
              </label>
              <select
                id="district-select"
                className="w-[100%] border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-black"
                value={selectedDistrict}
                onChange={(e) => {
                  const districtName = e.target.value;
                  setSelectedDistrict(districtName);
                  e.target.blur();
                  if (districtName === "") {
                    const svg = d3.select(svgRef.current);
                    svg.selectAll("path").each(function () {
                      const path = d3.select(this);
                      path
                        .attr("fill", path.attr("data-original-fill"))
                        .attr("data-clicked", "false");
                    });
                    return;
                  }
                  const selectedFeature = data?.features.find(
                    (feature: DistrictFeature) => feature.properties.Dist_Name === districtName
                  );
                  if (selectedFeature) {
                    handleDistrictClick(selectedFeature);
                  }
                }}
              >
                <option value="">choose</option>
                {data?.features.map((feature: DistrictFeature) => (
                  <option key={feature.properties.Dist_Name} value={feature.properties.Dist_Name}>
                    {feature.properties.Dist_Name}
                  </option>
                ))}
              </select>
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
                    type,
                    Male,
                    Female,
                    Total: Male + Female,
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
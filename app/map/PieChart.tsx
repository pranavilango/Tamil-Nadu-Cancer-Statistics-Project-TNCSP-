"use client";

import { useEffect, useRef } from "react";
import * as d3 from "d3";

type CancerDataItem = {
  type: string;
  Male: number;
  Female: number;
  Total: number;
};

type Props = {
  data: CancerDataItem[];
};

export default function PieChart({ data }: Props) {
  const ref = useRef<SVGSVGElement | null>(null);
  const isDarkMode = typeof window !== 'undefined' && document.documentElement.classList.contains('dark');

  const color = d3
  .scaleOrdinal<string>()
  .range(d3.schemeCategory10.concat(d3.schemeSet3));

  const chartData = data.filter((d) => d.Total > 0).sort((a, b) => b.Total - a.Total);
  
  useEffect(() => {
    if (!ref.current || !data) return;

    const svg = d3.select(ref.current);
    svg.selectAll("*").remove();

    const width = 400;
    const height = 300;
    const radius = Math.min(width, height) / 2 - 10;

    const chart = svg
      .attr("viewBox", `0 0 ${width} ${height}`)
      .attr("width", "100%")
      .attr("height", "100%")
      .append("g")
      .attr("transform", `translate(${width / 2}, ${height / 2})`);

    const totalCases = d3.sum(chartData, (d) => d.Total);

    const pie = d3.pie<CancerDataItem>().value((d) => d.Total).sort(null);
    const arc = d3.arc<d3.PieArcDatum<CancerDataItem>>().innerRadius(0).outerRadius(radius);

    color.domain(chartData.map((d) => d.type));

    const tooltip = d3
      .select("#d3-tooltip-container")
      .style("position", "absolute")
      .style("padding", "6px")
      .style("background", isDarkMode ? "#1f2937" : "#fff") 
      .style("border-width", "1px")
      .style("border-style", "solid")
      .style("border-color", isDarkMode ? "#374151" : "#ccc")
      .style("color", isDarkMode ? "#f3f4f6" : "#1f2937") 
      .style("border-radius", "4px")
      .style("pointer-events", "none")
      .style("font-size", "11px")
      .style("box-shadow", "0 2px 10px rgba(0,0,0,0.1)")
      .style("opacity", 0)
      .style("z-index", "9999");

    chart
      .selectAll("path")
      .data(pie(chartData))
      .enter()
      .append("path")
      .attr("d", arc)
      .attr("fill", (d) => color(d.data.type))
      // --- THIS IS THE FIX ---
      // The stroke is now permanently set to white for both themes.
      .attr("stroke", "#fff") 
      .attr("stroke-width", 0.5)
      .style("cursor", "pointer")
      .attr("transform", "translate(0,0)")
      .on("mouseover", function (event, d) {
        const [cx, cy] = arc.centroid(d);
        d3.select(this)
          .transition()
          .duration(200)
          .attr("transform", `translate(${cx * 0.10}, ${cy * 0.10})`);

        tooltip
          .style("opacity", 1)
          .html(`
            <strong>${d.data.type}</strong><br/>
            Male: ${d.data.Male}<br/>
            Female: ${d.data.Female}<br/>
            Share: ${(d.data.Total / totalCases * 100).toFixed(1)}%
          `);
      })
      .on("mousemove", function (event) {
        tooltip
          .style("left", event.pageX + 10 + "px")
          .style("top", event.pageY - 28 + "px");
      })
      .on("mouseout", function () {
        d3.select(this)
          .transition()
          .duration(200)
          .attr("transform", "translate(0,0)");

        tooltip.style("opacity", 0);
      });

    return () => {
      tooltip.style("opacity", 0);
    };
  }, [data, chartData, color, isDarkMode]);

  return (
    <div className="flex flex-col sm:flex-row gap-4 items-center justify-center w-full">
      <div className="w-full max-w-xs sm:max-w-none sm:w-auto">
        <svg ref={ref}></svg>
        <div id="d3-tooltip-container" />
      </div>
      <div
        className="w-full sm:w-[160px] max-h-[200px] sm:max-h-[280px] overflow-y-auto p-2 border border-gray-300 dark:border-zinc-700 rounded-lg shadow-inner bg-white dark:bg-zinc-900/70"
      >
        {chartData.map((d, i) => (
            <div key={i} className="flex items-center mb-2 text-xs text-zinc-800 dark:text-zinc-200">
              <div
                style={{
                  backgroundColor: color(d.type),
                  width: "10px",
                  height: "10px",
                  marginRight: "8px",
                  flexShrink: 0,
                }}
              />
              <span>{d.type}</span>
            </div>
          ))}
      </div>
    </div>
  );
}
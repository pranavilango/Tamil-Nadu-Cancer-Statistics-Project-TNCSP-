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
      .attr("width", width)
      .attr("height", height)
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
      .style("background", "#fff")
      .style("border", "1px solid #ccc")
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
  }, [data, chartData, color]);

  return (
    <div className="flex gap-4 items-center">
      <div>
        <svg ref={ref}></svg>
        <div id="d3-tooltip-container" />
      </div>
      <div
        style={{
          maxHeight: "280px",
          overflowY: "auto",
          padding: "8px",
          border: "1px solid #ccc",
          borderRadius: "6px",
          width: "160px",
          fontSize: "11px",

          /* Hide scrollbar */
          scrollbarWidth: "none",       // Firefox
          msOverflowStyle: "none",      // IE/Edge
        }}
        className="scrollbar-hide shadow-lg"
      >
        {chartData.map((d, i) => (
            <div key={i} className="flex items-center mb-2">
              <div
                style={{
                  backgroundColor: color(d.type),
                  width: "10px",
                  height: "10px",
                  marginRight: "8px",
                }}
              />
              <span>{d.type}</span>
            </div>
          ))}
      </div>
    </div>
  );
}
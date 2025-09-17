// --- START OF FILE app/map/PieChart.tsx ---
"use client";

import { useEffect, useRef, useMemo, useState } from "react";
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
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const darkModeMatcher = window.matchMedia('(prefers-color-scheme: dark)');
    setIsDark(darkModeMatcher.matches);
    const listener = (e: MediaQueryListEvent) => setIsDark(e.matches);
    darkModeMatcher.addEventListener('change', listener);
    return () => darkModeMatcher.removeEventListener('change', listener);
  }, []);

  const color = d3.scaleOrdinal(d3.schemeTableau10);

  const chartData = useMemo(() => 
    data.filter((d) => d.Total > 0).sort((a, b) => b.Total - a.Total), 
    [data]
  );
  
  useEffect(() => {
    if (!ref.current || chartData.length === 0) return;

    const svg = d3.select(ref.current);
    svg.selectAll("*").remove();
    
    const width = 400;
    const height = 300;
    const radius = Math.min(width, height) / 2.5;

    const chart = svg
      .attr("viewBox", `0 0 ${width} ${height}`)
      .attr("width", "100%")
      .attr("height", "100%")
      .append("g")
      .attr("transform", `translate(${width / 2}, ${height / 2})`);

    const totalCases = d3.sum(chartData, (d) => d.Total);

    const pie = d3.pie<CancerDataItem>().value((d) => d.Total).sort(null).padAngle(0.01);
    const arc = d3.arc<d3.PieArcDatum<CancerDataItem>>().innerRadius(radius * 0.5).outerRadius(radius);

    color.domain(chartData.map((d) => d.type));
    
    const tooltip = d3
      .select("body")
      .append("div")
      .attr("id", "d3-tooltip")
      .style("position", "absolute")
      .style("padding", "8px 12px")
      .style("background", isDark ? "rgba(30, 41, 59, 0.8)" : "rgba(255, 255, 255, 0.8)")
      .style("backdrop-filter", "blur(10px)")
      .style("border", `1px solid ${isDark ? "rgba(51, 65, 85, 0.5)" : "rgba(226, 232, 240, 0.8)"}`)
      .style("color", isDark ? "#f1f5f9" : "#1e293b") 
      .style("border-radius", "8px")
      .style("pointer-events", "none")
      .style("font-size", "13px")
      .style("box-shadow", "0 6px 20px rgba(0,0,0,0.15)")
      .style("opacity", 0)
      .style("z-index", "9999")
      .style("transition", "opacity 0.2s ease-in-out");

    chart
      .selectAll("path")
      .data(pie(chartData))
      .enter()
      .append("path")
      .attr("d", arc)
      .attr("fill", (d) => color(d.data.type))
      .attr("stroke", isDark ? "#0f172a" : "#f8fafc") 
      // DEFINITIVE FIX: Reduced stroke width for a cleaner look.
      .attr("stroke-width", 1.5)
      .style("cursor", "pointer")
      .on("mouseover", function (event, d) {
        const [cx, cy] = arc.centroid(d);
        d3.select(this)
          .transition()
          .duration(200)
          .attr("transform", `translate(${cx * 0.08}, ${cy * 0.08}) scale(1.03)`);

        tooltip
          .style("opacity", 1)
          .html(`
            <div style="font-weight: 600; margin-bottom: 5px; border-bottom: 1px solid ${isDark ? '#334155' : '#e2e8f0'}; padding-bottom: 5px;">${d.data.type}</div>
            <div style="display: grid; grid-template-columns: auto 1fr; gap: 4px 8px; margin-top: 5px;">
                <span>Male:</span><span style="font-weight: 500;">${d.data.Male.toLocaleString()}</span>
                <span>Female:</span><span style="font-weight: 500;">${d.data.Female.toLocaleString()}</span>
            </div>
            <div style="margin-top: 6px; padding-top: 6px; border-top: 1px solid ${isDark ? '#334155' : '#e2e8f0'}; font-weight: 500;">Share: ${(d.data.Total / totalCases * 100).toFixed(1)}%</div>
          `);
      })
      .on("mousemove", function (event) {
        tooltip
          .style("left", event.pageX + 20 + "px")
          .style("top", event.pageY + "px");
      })
      .on("mouseout", function () {
        d3.select(this)
          .transition()
          .duration(200)
          .attr("transform", "translate(0,0) scale(1)");

        tooltip.style("opacity", 0);
      });
    
    return () => {
      tooltip.remove();
    };
  }, [chartData, color, isDark]);

  return (
    /* DEFINITIVE FIX: Changed sm breakpoint to md for a better tablet/large phone experience */
    <div className="flex flex-col md:flex-row gap-4 md:gap-6 items-center justify-center w-full max-w-lg">
      <div className="w-full max-w-[280px] md:max-w-none md:w-2/3 relative">
        <svg ref={ref} className="w-full h-auto"></svg>
      </div>
      <div
        className="w-full md:w-1/3 max-h-[220px] md:max-h-[300px] overflow-y-auto p-3 border border-slate-200/80 dark:border-slate-800 rounded-lg shadow-inner bg-slate-100/50 dark:bg-slate-800/30 scrollbar-hide"
      >
        {chartData.map((d, i) => (
            <div key={i} className="flex items-center mb-2 text-xs text-slate-700 dark:text-slate-300">
              <div
                style={{
                  backgroundColor: color(d.type),
                  width: "10px",
                  height: "10px",
                  marginRight: "8px",
                  borderRadius: "2px",
                  flexShrink: 0,
                }}
              />
              <span className="font-medium">{d.type}</span>
            </div>
          ))}
      </div>
    </div>
  );
}
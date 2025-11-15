// --- START OF FILE app/map/PieChart.tsx ---
"use client";

import { useEffect, useRef, useMemo, useState } from "react";
import * as d3 from "d3";

type CancerDataItem = {
  type: string;
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

  const color = useMemo(() => 
    d3.scaleOrdinal<string, string>()
      .domain(['Male', 'Female'])
      .range(['#6366f1', '#ec4899']), 
  []);

  const chartData = useMemo(() => 
    data.filter((d) => d.Total > 0), 
    [data]
  );
  
  useEffect(() => {
    if (!ref.current || chartData.length === 0) {
      d3.select(ref.current).selectAll("*").remove();
      return;
    };

    const svg = d3.select(ref.current);
    svg.selectAll("*").remove();
    
    const width = 300;
    const height = 300;
    const radius = Math.min(width, height) / 2.2;

    const chart = svg
      .attr("viewBox", `0 0 ${width} ${height}`)
      .append("g")
      .attr("transform", `translate(${width / 2}, ${height / 2})`);

    const totalCases = d3.sum(chartData, (d) => d.Total);

    const pie = d3.pie<CancerDataItem>().value((d) => d.Total).sort(null).padAngle(0.02);
    const arc = d3.arc<d3.PieArcDatum<CancerDataItem>>().innerRadius(radius * 0.6).outerRadius(radius);
    
    const tooltip = d3.select("body").append("div")
      .attr("id", "d3-tooltip")
      .style("position", "absolute").style("opacity", 0).style("pointer-events", "none")
      .style("padding", "8px 12px").style("font-size", "13px")
      .style("background", isDark ? "rgba(30, 41, 59, 0.85)" : "rgba(255, 255, 255, 0.85)")
      .style("backdrop-filter", "blur(10px)")
      .style("border", `1px solid ${isDark ? "rgba(51, 65, 85, 0.5)" : "rgba(226, 232, 240, 0.8)"}`)
      .style("color", isDark ? "#f1f5f9" : "#1e293b") 
      .style("border-radius", "8px").style("box-shadow", "0 6px 20px rgba(0,0,0,0.15)")
      .style("z-index", "9999").style("transition", "opacity 0.2s ease-in-out");

    const path = chart.selectAll("path")
      .data(pie(chartData))
      .enter()
      .append("path")
      .attr("fill", (d) => color(d.data.type))
      .attr("stroke", isDark ? "#0f172a" : "#f8fafc") 
      // --- CHANGE 1: Reduced border thickness ---
      .attr("stroke-width", 1.5) 
      .style("cursor", "pointer")
      .on("mouseover", function (event, d) {
        d3.select(this).transition().duration(200).attr("transform", `scale(1.04)`);
        tooltip.style("opacity", 1).html(
          `<div style="font-weight: 600;">${d.data.type}</div>
           <div style="margin-top: 4px; border-top: 1px solid ${isDark ? '#334155' : '#e2e8f0'}; padding-top: 4px;">
                ${d.data.Total.toLocaleString()} cases (${(d.data.Total / totalCases * 100).toFixed(1)}%)
           </div>`
        );
      })
      .on("mousemove", (event) => tooltip.style("left", event.pageX + 20 + "px").style("top", event.pageY + "px"))
      .on("mouseout", function () {
        d3.select(this).transition().duration(200).attr("transform", "scale(1)");
        tooltip.style("opacity", 0);
      });

    path.transition()
      .duration(800)
      .ease(d3.easeCubicOut)
      .attrTween("d", function(d) {
          const i = d3.interpolate({ startAngle: d.startAngle, endAngle: d.startAngle }, d);
          return function(t) { return arc(i(t)) as string; };
      });

    path.append("title").text(d => `${d.data.type}: ${d.data.Total.toLocaleString()}`);

    chart.append("text")
      .attr("dy", "-0.2em").attr("text-anchor", "middle")
      .style("font-size", "28px").style("font-weight", "700")
      .attr("fill", isDark ? "#e2e8f0" : "#1e293b")
      .text(totalCases.toLocaleString());

    chart.append("text")
      .attr("dy", "1.1em").attr("text-anchor", "middle")
      .style("font-size", "11px").style("text-transform", "uppercase").style("letter-spacing", "0.5px")
      .attr("fill", isDark ? "#94a3b8" : "#64748b")
      .text("Total Cases");
    
    return () => { tooltip.remove(); };
  }, [chartData, color, isDark]);

  if (chartData.reduce((sum, d) => sum + d.Total, 0) === 0) {
    return (
      <div className="w-full flex items-center justify-center min-h-[340px] text-center text-slate-500 dark:text-slate-400">
        <p>No reported cases for this district.</p>
      </div>
    )
  }

  return (
    <div className="flex flex-col items-center justify-center w-full gap-4">
      <div className="w-full max-w-xs h-auto">
        <svg ref={ref} className="w-full h-full min-h-[300px]"></svg>
      </div>
      
      {/* --- CHANGE 2: Removed border-t and dark:border-slate-800 --- */}
      <div className="flex flex-row items-center justify-center gap-6 text-sm w-full pt-4">
        {chartData.map((d) => (
            <div key={d.type} className="flex items-center gap-2">
                <div style={{ backgroundColor: color(d.type) }} className="w-3 h-3 rounded-full flex-shrink-0" />
                <span className="text-slate-600 dark:text-slate-400 font-medium">{d.type}</span>
            </div>
        ))}
      </div>
    </div>
  );
}
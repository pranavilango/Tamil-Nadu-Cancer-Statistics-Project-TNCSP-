// --- START OF FILE app/map/GroupedBarChart.tsx ---
"use client";

import { useEffect, useRef, useState } from "react";
import * as d3 from "d3";

export type GroupedDataItem = {
  label: string;
  male: number;
  female: number;
};

type Props = {
  data: GroupedDataItem[];
  title: string;
};

const MALE_COLOR = "#6366f1";
const FEMALE_COLOR = "#ec4899";

export default function GroupedBarChart({ data, title }: Props) {
  const ref = useRef<SVGSVGElement | null>(null);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const darkModeMatcher = window.matchMedia('(prefers-color-scheme: dark)');
    setIsDark(darkModeMatcher.matches);
    const listener = (e: MediaQueryListEvent) => setIsDark(e.matches);
    darkModeMatcher.addEventListener('change', listener);
    return () => darkModeMatcher.removeEventListener('change', listener);
  }, []);

  useEffect(() => {
    if (!ref.current || data.length === 0) return;

    const svg = d3.select(ref.current);
    svg.selectAll("*").remove();

    const margin = { top: 20, right: 20, bottom: 40, left: 100 };
    const width = 500 - margin.left - margin.right;
    const height = 350 - margin.top - margin.bottom;

    const chart = svg
      .attr("viewBox", `0 0 ${width + margin.left + margin.right} ${height + margin.top + margin.bottom}`)
      .append("g")
      .attr("transform", `translate(${margin.left},${margin.top})`);
      
    const subgroups = ['male', 'female'];
    const groups = data.map(d => d.label);

    const y = d3.scaleBand().domain(groups).range([0, height]).padding(0.2);
    const x = d3.scaleLinear().domain([0, d3.max(data, d => Math.max(d.male, d.female)) || 0]).range([0, width]);
    const xSubgroup = d3.scaleBand().domain(subgroups).range([0, y.bandwidth()]).padding(0.05);

    chart.append("g").call(d3.axisLeft(y).tickSize(0).tickPadding(10))
      .call(g => g.select(".domain").remove())
      .call(g => g.selectAll("text").attr("fill", isDark ? "#cbd5e1" : "#475569").style("font-size", "12px"));

    chart.append("g").attr("transform", `translate(0, ${height})`)
      .call(d3.axisBottom(x).ticks(5).tickSizeOuter(0).tickFormat(d => d3.format("~s")(d as number)))
      .call(g => g.select(".domain").remove())
      .call(g => g.selectAll(".tick line").attr("stroke", isDark ? "#475569" : "#cbd5e1").attr("stroke-dasharray", "3,3"))
      .call(g => g.selectAll("text").attr("fill", isDark ? "#94a3b8" : "#64748b").style("font-size", "11px"));

    const tooltip = d3.select("body").append("div")
      .attr("class", "d3-tooltip")
      .style("position", "absolute").style("opacity", 0).style("pointer-events", "none")
      .style("padding", "6px 10px").style("font-size", "12px").style("border-radius", "6px")
      .style("background", isDark ? "rgba(30, 41, 59, 0.8)" : "rgba(255, 255, 255, 0.8)")
      .style("backdrop-filter", "blur(8px)")
      .style("border", `1px solid ${isDark ? "rgba(51, 65, 85, 0.5)" : "rgba(226, 232, 240, 0.8)"}`)
      .style("color", isDark ? "#f1f5f9" : "#1e293b");

    chart.append("g")
      .selectAll("g")
      .data(data)
      .join("g")
        .attr("transform", d => `translate(0, ${y(d.label)!})`)
      .selectAll("rect")
      .data(d => subgroups.map(key => ({ key, value: d[key as keyof typeof d] })))
      .join("rect")
        .attr("y", d => xSubgroup(d.key)!)
        .attr("height", xSubgroup.bandwidth())
        .attr("fill", d => d.key === 'male' ? MALE_COLOR : FEMALE_COLOR)
        .attr("x", 0)
        .attr("width", 0) // for transition
        .on("mouseover", (event, d) => {
            tooltip.style("opacity", 1).html(`<strong>${(d.value as number).toLocaleString()}</strong> cases`);
        })
        .on("mousemove", (event) => tooltip.style("left", (event.pageX + 15) + "px").style("top", (event.pageY - 28) + "px"))
        .on("mouseout", () => tooltip.style("opacity", 0))
        .transition()
        .duration(800)
        .ease(d3.easeCubicOut)
        .attr("width", d => x(d.value as number));

    return () => { tooltip.remove(); };

  }, [data, isDark]);

  return (
    <div className="w-full h-full flex flex-col items-center">
      <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-200 mb-2">{title}</h3>
      <div className="flex items-center justify-center gap-x-6 text-xs mb-2 text-slate-600 dark:text-slate-400">
          <div className="flex items-center gap-x-2"><div className="w-2.5 h-2.5 rounded-sm" style={{backgroundColor: MALE_COLOR}}/>Male</div>
          <div className="flex items-center gap-x-2"><div className="w-2.5 h-2.5 rounded-sm" style={{backgroundColor: FEMALE_COLOR}}/>Female</div>
      </div>
      <div className="w-full h-[350px]">
          <svg ref={ref} className="w-full h-full" />
      </div>
    </div>
  );
}
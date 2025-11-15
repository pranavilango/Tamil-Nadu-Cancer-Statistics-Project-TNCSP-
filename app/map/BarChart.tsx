// --- START OF FILE app/map/BarChart.tsx ---
"use client";

import { useEffect, useRef, useState } from "react";
import * as d3 from "d3";

type DataItem = {
  label: string;
  value: number;
};

type Props = {
  data: DataItem[];
  title: string;
  barColor?: string;
};

export default function BarChart({ data, title, barColor = "#8b5cf6" }: Props) {
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

    const margin = { top: 10, right: 20, bottom: 40, left: 100 };
    const width = 450 - margin.left - margin.right;
    const height = 300 - margin.top - margin.bottom;

    const chart = svg
      .attr("viewBox", `0 0 ${width + margin.left + margin.right} ${height + margin.top + margin.bottom}`)
      .append("g")
      .attr("transform", `translate(${margin.left},${margin.top})`);
      
    const y = d3.scaleBand()
      .domain(data.map(d => d.label))
      .range([0, height])
      .padding(0.2);

    const x = d3.scaleLinear()
      .domain([0, d3.max(data, d => d.value) || 0])
      .range([0, width]);

    // X axis
    chart.append("g")
      .attr("transform", `translate(0, ${height})`)
      .call(d3.axisBottom(x).ticks(5).tickSizeOuter(0).tickFormat(d => d3.format("~s")(d as number)))
      .call(g => g.select(".domain").remove())
      .call(g => g.selectAll(".tick line").attr("stroke", isDark ? "#475569" : "#cbd5e1").attr("stroke-dasharray", "3,3"))
      .call(g => g.selectAll("text").attr("fill", isDark ? "#94a3b8" : "#64748b").style("font-size", "11px"));

    // Y axis
    chart.append("g")
      .call(d3.axisLeft(y).tickSize(0).tickPadding(10))
      .call(g => g.select(".domain").remove())
      .call(g => g.selectAll("text").attr("fill", isDark ? "#cbd5e1" : "#475569").style("font-size", "12px"));

    const tooltip = d3.select("body").append("div")
      .attr("class", "d3-tooltip")
      .style("position", "absolute").style("opacity", 0).style("pointer-events", "none")
      .style("padding", "6px 10px").style("font-size", "12px").style("border-radius", "6px")
      .style("background", isDark ? "rgba(30, 41, 59, 0.8)" : "rgba(255, 255, 255, 0.8)")
      .style("backdrop-filter", "blur(8px)")
      .style("border", `1px solid ${isDark ? "rgba(51, 65, 85, 0.5)" : "rgba(226, 232, 240, 0.8)"}`)
      .style("color", isDark ? "#f1f5f9" : "#1e293b");

    chart.selectAll(".bar")
      .data(data)
      .enter()
      .append("rect")
      .attr("class", "bar")
      .attr("y", d => y(d.label)!)
      .attr("height", y.bandwidth())
      .attr("fill", barColor)
      .attr("x", 0)
      .attr("width", 0) // Start with 0 width for transition
      .on("mouseover", (event, d) => {
        tooltip.style("opacity", 1).html(`<strong>${d.value.toLocaleString()}</strong> cases`);
      })
      .on("mousemove", (event) => {
        tooltip.style("left", (event.pageX + 15) + "px").style("top", (event.pageY - 28) + "px");
      })
      .on("mouseout", () => {
        tooltip.style("opacity", 0);
      })
      .transition()
      .duration(800)
      .ease(d3.easeCubicOut)
      .attr("width", d => x(d.value));

    return () => {
      tooltip.remove();
    };

  }, [data, isDark, barColor]);


  return (
    <div className="w-full h-full flex flex-col items-center">
        <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-200 mb-2">{title}</h3>
        <div className="w-full h-[300px]">
            <svg ref={ref} className="w-full h-full" />
        </div>
    </div>
  );
}
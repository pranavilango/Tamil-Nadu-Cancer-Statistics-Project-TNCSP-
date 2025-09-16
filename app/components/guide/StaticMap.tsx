// --- File: app/components/guide/StaticMap.tsx ---
"client";

import { useRef, useEffect, useMemo } from 'react';
import * as d3 from 'd3';
import { FeatureCollection } from 'geojson';

interface StaticMapProps {
  geoData: FeatureCollection;
  districtTotals: { [key: string]: number };
}

export default function StaticMap({ geoData, districtTotals }: StaticMapProps) {
  const svgRef = useRef<SVGSVGElement>(null);

  const colorScale = useMemo(() => {
    if (!districtTotals || Object.keys(districtTotals).length === 0) {
      return null;
    }
    const values = Object.values(districtTotals).filter(v => v > 0);
    const maxVal = Math.max(...values, 1);
    return d3.scaleSequential(d3.interpolatePurples).domain([1, maxVal * 0.9]);
  }, [districtTotals]);

  useEffect(() => {
    const svg = d3.select(svgRef.current);
    if (!svg || !geoData || !colorScale) return;

    // Clear previous render to be safe.
    svg.selectAll("*").remove();

    // --- THE DEFINITIVE FIX ---
    // 1. We define a fixed internal canvas size for the SVG.
    //    This gives D3 a stable target to draw on.
    const width = 500;
    const height = 600; // Using a slightly taller ratio to better fit Tamil Nadu's shape.

    // 2. We apply this as a `viewBox`. The browser will now automatically
    //    scale this entire 500x600 canvas to fit the container div.
    svg.attr("viewBox", `0 0 ${width} ${height}`);

    // 3. We tell D3's projection to fit the map into this stable canvas size.
    const projection = d3.geoMercator().fitSize([width, height], geoData);
    const pathGenerator = d3.geoPath().projection(projection);

    const noDataColor = "#F3F4F6";

    // Draw the map paths onto our stable canvas.
    svg
      .selectAll("path")
      .data(geoData.features)
      .join("path")
      .attr("d", pathGenerator)
      .attr("fill", (d: any) => {
        const districtName = d.properties.DISTRICT || d.properties.Dist_Name;
        const total = districtTotals[districtName] || 0;
        return total > 0 ? colorScale(total) : noDataColor;
      })
      .attr("stroke", "#000000")
      .attr("stroke-width", 0.3) // Slightly thicker for better definition
      .attr("stroke-linejoin", "round");

  }, [geoData, districtTotals, colorScale]);

  return (
    // The SVG element itself will now scale to fill its parent container
    // defined in Introduction.tsx (the one with h-64 sm:h-80).
    <svg ref={svgRef} className="w-full h-full" />
  );
}
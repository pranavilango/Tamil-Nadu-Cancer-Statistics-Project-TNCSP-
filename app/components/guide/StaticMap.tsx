"use client";

import { useEffect, useRef } from 'react';
import * as d3 from 'd3';
import { Feature, FeatureCollection, Geometry } from 'geojson';

// Define a more specific type for our GeoJSON features
interface DistrictProperties {
  Dist_Name: string;
}
type DistrictFeature = Feature<Geometry, DistrictProperties>;

// Define the types for the data this component receives
interface DistrictTotals {
  [key:string]: number;
}
interface StaticMapProps {
  geoData: FeatureCollection<Geometry>;
  districtTotals: DistrictTotals;
}

export default function StaticMap({ geoData, districtTotals }: StaticMapProps) {
  const ref = useRef<SVGSVGElement | null>(null);

  useEffect(() => {
    if (!geoData || !districtTotals || !ref.current) return;

    const svg = d3.select(ref.current);
    svg.selectAll("*").remove();

    const width = 600;
    const height = 600;
    svg.attr('viewBox', `0 0 ${width} ${height}`);

    const projection = d3.geoMercator().fitSize([width, height], geoData);
    const pathGenerator = d3.geoPath().projection(projection);

    const maxCases = Math.max(...Object.values(districtTotals));
    const colorScale = d3.scaleSequential(d3.interpolateReds)
                         .domain([0, maxCases]);

    const defs = svg.append('defs');
    const filter = defs.append('filter')
      .attr('id', 'drop-shadow')
      .attr('height', '130%');

    filter.append('feGaussianBlur')
      .attr('in', 'SourceAlpha')
      .attr('stdDeviation', 2)
      .attr('result', 'blur');

    filter.append('feOffset')
      .attr('in', 'blur')
      .attr('dx', 1)
      .attr('dy', 1)
      .attr('result', 'offsetBlur');

    const feMerge = filter.append('feMerge');
    feMerge.append('feMergeNode').attr('in', 'offsetBlur');
    feMerge.append('feMergeNode').attr('in', 'SourceGraphic');


    svg
      .selectAll('path')
      .data(geoData.features as DistrictFeature[])
      .enter()
      .append('path')
      .attr('d', pathGenerator)
      .attr('stroke', '#000') 
      .attr('stroke-width', 0.5)
      .attr('fill', (d: DistrictFeature) => {
        const districtName = d.properties.Dist_Name;
        const totalCases = districtTotals[districtName] || 0;
        return colorScale(totalCases);
      });
  }, [geoData, districtTotals]);

  return <svg ref={ref} className="w-full h-full" />;
}
'use client';

import { useEffect, useRef } from 'react';
import { useInView, useMotionValue, useSpring } from 'framer-motion';

/**
 * A component that animates a number from 0 to a target value when it scrolls into view.
 * @param value The target number to count up to.
 * @param className Optional classes to apply to the number span.
 */
export default function AnimatedCounter({ value, className }: { value: number; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(0);

  // --- THIS IS THE FIX ---
  // Decreased `stiffness` from 300 to 100 for a smoother, slower animation.
  // Decreased `damping` from 30 to 20 to give it a more natural and gentle stop.
  // This combination creates a "sweet spot" that is deliberate but not sluggish.
  const springValue = useSpring(motionValue, {
    damping: 20,
    stiffness: 100,
  });
  
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [motionValue, isInView, value]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = Math.round(latest).toLocaleString();
      }
    });
  }, [springValue]);

  return <span className={className} ref={ref} />;
}
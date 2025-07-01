'use client';

import { useState, useRef } from 'react';
import { motion, useMotionValue, useSpring, AnimatePresence } from 'framer-motion';

export default function ProblemBadge({ index }: { index: number }) {
  const [isHovering, setIsHovering] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 200, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 200, damping: 20 });

  return (
    <div className="relative z-5 mb-2 min-w-[120px] text-center">
      <div
        className="text-black border border-black text-sm px-4 py-1 rounded-full font-medium bg-white/60 relative overflow-hidden"
        onMouseEnter={() => {
          if (timeoutRef.current) clearTimeout(timeoutRef.current);
          setIsHovering(true);
        }}
        onMouseLeave={() => {
          timeoutRef.current = setTimeout(() => setIsHovering(false), 100);
        }}
        onMouseMove={(e) => {
          const rect = e.currentTarget.getBoundingClientRect();
          mouseX.set(e.clientX - rect.left);
          mouseY.set(e.clientY - rect.top);
        }}
      >
        <AnimatePresence>
          {isHovering && (
            <motion.div
              className="absolute w-20 h-20 bg-black/10 blur-xl rounded-full pointer-events-none"
              style={{
                x: springX,
                y: springY,
                translateX: '-50%',
                translateY: '-50%',
              }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.4, ease: 'easeInOut' }}
            />
          )}
        </AnimatePresence>
        Problem #{index + 1}
      </div>
    </div>
  );
}

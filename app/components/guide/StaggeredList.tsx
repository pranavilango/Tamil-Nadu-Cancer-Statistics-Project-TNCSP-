// --- File: app/components/guide/StaggeredList.tsx ---
'use client';

import { motion } from 'framer-motion';

// This is the parent container that orchestrates the animation.
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15, // This sets the delay between each child animating in.
    },
  },
};

// This is the animation that will be applied to each child item.
const itemVariants = {
  hidden: { opacity: 0, y: 20 }, // Start invisible and slightly down.
  visible: {
    opacity: 1,
    y: 0,                 // End fully visible and in its original position.
    transition: {
      duration: 0.5,
    },
  },
};

/**
 * A container component that animates its children in a staggered sequence.
 * Wrap your list or grid with this component.
 */
export function StaggeredList({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      {children}
    </motion.div>
  );
}

/**
 * A wrapper for each item inside a StaggeredList.
 * Wrap each `<li>` or grid item with this component.
 */
// --- THE DEFINITIVE FIX ---
// 1. The component's props are updated to accept an optional `className`.
// 2. The `className` is passed directly to the `motion.div`.
// This allows you to style the animated item from the outside, resolving the TypeScript error.
export function StaggeredListItem({ children, className }: { children: React.ReactNode, className?: string }) {
  return <motion.div variants={itemVariants} className={className}>{children}</motion.div>;
}
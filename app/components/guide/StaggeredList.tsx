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
export function StaggeredListItem({ children }: { children: React.ReactNode }) {
  return <motion.div variants={itemVariants}>{children}</motion.div>;
}   
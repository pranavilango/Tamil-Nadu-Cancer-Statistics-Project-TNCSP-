'use client';

import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { SunIcon, MoonIcon } from '@heroicons/react/24/solid';

const ThemeToggle = () => {
  // FIX: The default state is now `false` (light mode).
  const [isDarkMode, setIsDarkMode] = useState(false);

  // This effect runs once on the client-side to check for a previously saved preference.
  useEffect(() => {
    // If the user has *explicitly* chosen 'dark' on a previous visit, we respect that.
    if (localStorage.getItem('theme') === 'dark') {
      setIsDarkMode(true);
    }
    // --- IMPORTANT ---
    // If no theme is saved in localStorage, it will remain `false`,
    // ensuring the initial mode is always light. We no longer check for system preference.
  }, []);

  // This effect runs whenever `isDarkMode` changes to apply the theme and save the user's choice.
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  return (
    <button
      onClick={() => setIsDarkMode(!isDarkMode)}
      className="fixed top-20 right-4 z-50 w-12 h-12 rounded-full shadow-lg transition-transform duration-200 ease-in-out hover:scale-105 active:scale-95
                 bg-white/50 dark:bg-black/50 border border-slate-900/10 dark:border-slate-100/10 backdrop-blur-sm"
      aria-label="Toggle theme"
    >
      <AnimatePresence initial={false} mode="wait">
        <motion.div
          key={isDarkMode ? 'moon' : 'sun'}
          initial={{ opacity: 0, rotate: -90, scale: 0.8 }}
          animate={{ opacity: 1, rotate: 0, scale: 1 }}
          exit={{ opacity: 0, rotate: 90, scale: 0.8 }}
          transition={{ duration: 0.2 }}
          className="w-full h-full flex items-center justify-center"
        >
          {isDarkMode ? (
            <MoonIcon className="w-6 h-6 text-slate-100" />
          ) : (
            <SunIcon className="w-7 h-7 text-slate-800" />
          )}
        </motion.div>
      </AnimatePresence>
    </button>
  );
};

export default ThemeToggle;
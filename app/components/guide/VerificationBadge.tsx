'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, X } from 'lucide-react';

/**
 * A component that displays a "Radiologist Verified" badge and opens a modal 
 * with the verification PDF when clicked.
 */
export default function VerificationBadge() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      {/* Verification Badge Button (bottom-right) */}
      <button
        onClick={openModal}
        className="fixed bottom-4 right-4 z-50 flex items-center space-x-2.5 px-4 py-2 bg-white/80 dark:bg-slate-900/80 backdrop-blur-lg border border-slate-900/10 dark:border-slate-50/[0.06] rounded-full shadow-lg text-slate-700 dark:text-slate-300 hover:text-green-600 dark:hover:text-green-400 transition-all duration-300 ease-in-out group"
        aria-label="Open Radiologist Verification Letter"
      >
        <CheckCircle2 className="h-5 w-5 text-green-500 group-hover:scale-110 transition-transform" />
        <span className="text-sm font-medium">Radiologist Verified</span>
      </button>

      {/* PDF Viewer Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
            className="fixed inset-0 z-[9999] bg-black/70 backdrop-blur-md flex items-start justify-center p-4 pt-24 pb-8"
          >
            <motion.div
              initial={{ scale: 0.95, y: -20, opacity: 0.5 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.95, y: 20, opacity: 0 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl h-full bg-white dark:bg-slate-800 rounded-2xl shadow-2xl flex flex-col overflow-hidden"
            >
              {/* --- REFINED HEADER --- */}
              <header className="relative flex items-center justify-center p-4 border-b border-slate-200 dark:border-slate-700 flex-shrink-0">
                <h2 className="flex items-center gap-x-2 text-md font-semibold text-slate-700 dark:text-slate-300">
                  <CheckCircle2 className="h-5 w-5 text-green-500" />
                  <span>TNCSP Radiologist Verification Letter</span>
                </h2>
                <button
                  onClick={closeModal}
                  className="absolute top-1/2 right-4 -translate-y-1/2 p-1 rounded-full text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-700 hover:text-slate-800 dark:hover:text-slate-200 transition-colors"
                  aria-label="Close PDF viewer"
                >
                  <X className="h-6 w-6" />
                </button>
              </header>
              {/* --- END REFINED HEADER --- */}
              
              <div className="flex-1 bg-slate-50 dark:bg-slate-900">
                <iframe
                  src="/TNCSP Radiologist Verification Letter.pdf"
                  title="TNCSP Radiologist Verification Letter"
                  className="w-full h-full"
                  frameBorder="0"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
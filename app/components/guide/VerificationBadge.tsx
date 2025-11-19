'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, X } from 'lucide-react';
import { useGuide } from "../../guide/GuideContext"; // Import the Context

/**
 * A component that displays a "Radiologist Verified" badge and opens a modal 
 * with the verification PDF when clicked.
 * 
 * Supports English/Tamil toggling and Mobile Responsiveness.
 */
export default function VerificationBadge() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { content, language } = useGuide(); // Access Language State

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  // Dynamic Title for the Modal Header based on language
  const modalTitle = language === 'ta' 
    ? "TNCSP கதிரியக்க நிபுணரின் சரிபார்ப்புக் கடிதம்" 
    : "TNCSP Radiologist Verification Letter";

  return (
    <>
      {/* Verification Badge Button (bottom-right) */}
      <button
        onClick={openModal}
        // Responsive Classes:
        // - text-xs for mobile, text-sm for desktop to handle long Tamil text
        // - max-w-[90vw] ensures it doesn't push off screen on small phones
        // - z-30 ensures it sits above content but doesn't block full-screen overlays
        className="fixed bottom-4 right-4 z-30 flex items-center space-x-2 md:space-x-2.5 px-3 py-2 md:px-4 md:py-2 bg-white/90 dark:bg-slate-900/90 backdrop-blur-lg border border-slate-900/10 dark:border-slate-50/[0.06] rounded-full shadow-lg text-slate-700 dark:text-slate-300 hover:text-green-600 dark:hover:text-green-400 transition-all duration-300 ease-in-out group max-w-[90vw]"
        aria-label="Open Radiologist Verification Letter"
      >
        <CheckCircle2 className="h-4 w-4 md:h-5 md:w-5 text-green-500 group-hover:scale-110 transition-transform flex-shrink-0" />
        <span className="text-xs md:text-sm font-medium truncate">
            {content.ui.radiologistVerified}
        </span>
      </button>

      {/* PDF Viewer Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
            // Responsive Padding: Less padding on top/bottom for mobile to maximize view area
            className="fixed inset-0 z-[9999] bg-black/70 backdrop-blur-md flex items-center justify-center p-4 pt-20 pb-8 md:pt-24"
          >
            <motion.div
              initial={{ scale: 0.95, y: 20, opacity: 0.5 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.95, y: 20, opacity: 0 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl h-[85vh] md:h-[80vh] bg-white dark:bg-slate-800 rounded-2xl shadow-2xl flex flex-col overflow-hidden"
            >
              {/* --- HEADER --- */}
              <header className="relative flex items-center justify-between p-4 border-b border-slate-200 dark:border-slate-700 flex-shrink-0 bg-white dark:bg-slate-800">
                <h2 className="flex items-center gap-x-2 text-sm md:text-base font-semibold text-slate-700 dark:text-slate-300 truncate pr-8">
                  <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span className="truncate">{modalTitle}</span>
                </h2>
                <button
                  onClick={closeModal}
                  className="p-1.5 rounded-full text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-700 hover:text-slate-800 dark:hover:text-slate-200 transition-colors flex-shrink-0"
                  aria-label="Close PDF viewer"
                >
                  <X className="h-5 w-5 md:h-6 md:w-6" />
                </button>
              </header>
              {/* --- END HEADER --- */}
              
              <div className="flex-1 bg-slate-50 dark:bg-slate-900 w-full h-full relative">
                <iframe
                  src="/TNCSP Radiologist Verification Letter.pdf"
                  title="TNCSP Radiologist Verification Letter"
                  className="w-full h-full absolute inset-0"
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
// --- File: app/components/guide/SideBar.tsx ---
interface SidebarProps {
  sections: string[];
  activeSection: string;
  onSectionClick: (section: string) => void;
  isOpen: boolean;
  onClose: () => void;
}

export default function Sidebar({ sections, activeSection, onSectionClick, isOpen, onClose }: SidebarProps) {
  return (
    <>
      <div 
        className={`md:hidden fixed inset-0 bg-black/40 backdrop-blur-sm transition-opacity ${isOpen ? 'opacity-100 z-50' : 'opacity-0 pointer-events-none'}`}
        onClick={onClose}
      />

      <aside className={`
        flex flex-col flex-shrink-0
        fixed md:sticky top-0 left-0 h-full w-72 max-w-full md:w-64 bg-white/90 dark:bg-slate-900/90 backdrop-blur-lg shadow-xl
        md:top-16 md:h-[calc(100vh-4rem)] md:bg-transparent md:dark:bg-transparent md:shadow-none md:border-r md:border-slate-900/10 dark:md:border-slate-50/[0.06]
        transition-transform duration-300 ease-in-out
        md:translate-x-0
        ${isOpen ? 'translate-x-0 z-50' : '-translate-x-full'}
      `}>
        <div className="md:hidden p-4 border-b border-slate-200 dark:border-slate-800 pt-20">
            <h2 className="text-lg font-semibold text-slate-800 dark:text-slate-200">Guide Sections</h2>
        </div>

        <div className="hidden md:block p-6 pb-2">
          <h2 className="text-sm font-semibold tracking-widest text-slate-500 dark:text-slate-400 uppercase mb-4">Guide Sections</h2>
        </div>
        
        <nav className="flex-1 flex flex-col space-y-1 overflow-y-auto p-4 md:p-6 md:pt-0">
          {sections.map((section) => {
            const isActive = activeSection === section;
            return (
              <a
                key={section}
                href={`/guide?section=${encodeURIComponent(section)}`}
                onClick={(e) => {
                  e.preventDefault();
                  onSectionClick(section);
                }}
                className={`
                  text-left px-3 py-2 rounded-md transition-colors duration-200 text-sm
                  ${isActive
                    ? "font-semibold bg-brand-lavender/20 text-slate-900 dark:text-slate-100"
                    : "text-slate-600 hover:bg-slate-900/5 dark:text-slate-400 dark:hover:bg-slate-50/5 hover:text-slate-900 dark:hover:text-slate-100"}
                `}
              >
                {section}
              </a>
            );
          })}
        </nav>
      </aside>
    </>
  );
}
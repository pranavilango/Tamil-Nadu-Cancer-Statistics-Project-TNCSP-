// --- File: app/components/guide/Sidebar.tsx ---
interface SidebarProps {
  title: string;
  sections: string[];
  activeSection: string;
  onSectionClick: (section: string) => void;
  position: 'left' | 'right';
  isOpen: boolean;
  onClose: () => void;
}

export default function Sidebar({ title, sections, activeSection, onSectionClick, position, isOpen, onClose }: SidebarProps) {
  const positionClasses = position === 'left' 
    ? 'left-0' 
    : 'right-0';
  
  // Adjusted transform for left and right sidebars
  const transformClasses = position === 'left'
    ? (isOpen ? 'translate-x-0' : '-translate-x-full')
    : (isOpen ? 'translate-x-0' : 'translate-x-full');

  return (
    <>
      <div 
        className={`md:hidden fixed inset-0 bg-black/40 transition-opacity ${isOpen ? 'opacity-100 z-50' : 'opacity-0 pointer-events-none'}`}
        onClick={onClose}
      />

      <aside className={`
        fixed top-0 h-full w-72 bg-white dark:bg-zinc-900 shadow-xl flex flex-col
        transition-transform duration-300 ease-in-out
        md:w-64 md:h-screen md:bg-gray-50 dark:md:bg-zinc-900/80 md:shadow-none md:border-r md:border-gray-200 dark:md:border-zinc-800
        md:translate-x-0 md:p-6 md:pt-28
        ${positionClasses}
        ${transformClasses}
        ${isOpen ? 'z-50' : ''} /* Ensure sidebar is on top when open */
      `}>
        {/* Mobile Header for Sidebar */}
        <div className="md:hidden p-4 border-b border-gray-200 dark:border-zinc-800">
            <h2 className="text-lg font-semibold text-gray-800 dark:text-zinc-200">{title}</h2>
        </div>

        {/* Desktop Header for Sidebar */}
        <h2 className="hidden md:block text-lg font-semibold mb-6 text-gray-800 dark:text-zinc-200">{title}</h2>
        
        <nav className="flex flex-col space-y-2 p-4 md:p-0">
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
                  text-left text-sm font-lg px-4 py-2 rounded-xl transition
                  ${isActive
                    ? "bg-white dark:bg-zinc-800 border border-gray-300 dark:border-zinc-700 shadow-sm text-gray-900 dark:text-white font-medium"
                    : "text-gray-600 dark:text-zinc-400 border border-transparent hover:bg-white dark:hover:bg-zinc-800/50 hover:border-gray-200 dark:hover:border-zinc-700/50"}
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
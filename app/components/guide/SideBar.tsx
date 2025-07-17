// --- File: Sidebar.tsx ---
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
  
  const transformClasses = isOpen ? 'translate-x-0' : '-translate-x-full';

  return (
    <>
      <div 
        className={`md:hidden fixed inset-0 bg-black/40 z-30 transition-opacity ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={onClose}
      />

      <aside className={`
        fixed top-0 h-full w-72 bg-white shadow-xl z-40 flex flex-col
        transition-transform duration-300 ease-in-out
        /* FIX: Re-styled for a fixed, full-height, three-column layout */
        md:w-64 md:h-screen md:bg-gray-50 md:shadow-none md:border-r md:border-gray-200
        md:translate-x-0 md:p-6 md:pt-28 /* Added top padding for navbar */
        ${positionClasses}
        ${transformClasses}
      `}>
        <h2 className="text-lg font-semibold mb-6 text-gray-800">{title}</h2>
        <nav className="flex flex-col space-y-2">
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
                    ? "bg-white border border-gray-300 shadow-sm text-gray-900 font-medium"
                    : "text-gray-600 border border-transparent hover:bg-white hover:border-gray-200"}
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
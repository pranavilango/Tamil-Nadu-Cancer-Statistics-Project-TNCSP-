// A reusable Sidebar component
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
  // FIX: Removed the 'border-r' and 'border-l' classes
  const positionClasses = position === 'left' 
    ? 'left-0' 
    : 'right-0';
  
  const transformClasses = isOpen ? 'translate-x-0' : '-translate-x-full';

  return (
    <>
      {/* Backdrop for mobile view */}
      <div 
        className={`md:hidden fixed inset-0 bg-black/40 z-30 transition-opacity ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={onClose}
      />

      <aside className={`
        fixed top-0 h-full w-72 p-6 bg-white shadow-xl z-40 flex-col
        transition-transform duration-300 ease-in-out
        md:flex md:top-14 md:h-[calc(100vh-3.5rem)] md:w-64 md:shadow-sm md:bg-[#f7f7f7]/80 md:backdrop-blur-lg md:z-10
        md:translate-x-0
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
                    ? "bg-white border border-gray-300 shadow-xs text-gray-900 font-medium"
                    : "text-gray-700 border border-transparent hover:bg-gray-200 hover:text-gray-900"}
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
// A reusable Sidebar component
interface SidebarProps {
  title: string;
  sections: string[];
  activeSection: string;
  onSectionClick: (section: string) => void;
  position: 'left' | 'right';
}

export default function Sidebar({ title, sections, activeSection, onSectionClick, position }: SidebarProps) {
  // Determine positioning and border styles based on the 'position' prop
  const positionClasses = position === 'left' 
    ? 'left-0 border-r' 
    : 'right-0 border-l';

  return (
    <aside className={`hidden md:flex fixed top-14 h-[calc(100vh-3.5rem)] w-64 p-6 border-gray-200 bg-[#f7f7f7] backdrop-blur-lg shadow-sm z-10 flex-col ${positionClasses}`}>
      <h2 className="text-lg font-semibold mb-6 text-gray-800">{title}</h2>
      <nav className="flex flex-col space-y-2">
        {sections.map((section) => {
          const isActive = activeSection === section;
          return (
            <button
              key={section}
              onClick={() => onSectionClick(section)}
              className={`
                text-left text-sm font-lg px-4 py-2 rounded-xl transition
                ${isActive
                  ? "bg-white border border-gray-200 shadow-xs text-gray-900 font-medium"
                  : "text-gray-700 border border-transparent hover:bg-gray-200 hover:text-gray-900"}
              `}
            >
              {section}
            </button>
          );
        })}
      </nav>
    </aside>
  );
}
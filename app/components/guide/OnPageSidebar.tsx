export interface Heading {
  id: string;
  title: string;
  level: number;
}

interface OnPageSidebarProps {
  headings: Heading[];
  activeHeading: string;
  onHeadingClick: (id: string) => void;
  isOpen: boolean;
  onClose: () => void;
}

export default function OnPageSidebar({ headings, activeHeading, onHeadingClick, isOpen, onClose }: OnPageSidebarProps) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    onHeadingClick(id);
  };

  const formatTitle = (title: string) => {
    const emojiRegex = /^\p{Emoji_Presentation}/u;
    return title.replace(emojiRegex, '').trim();
  };

  return (
    <>
      {/* Backdrop for mobile view */}
      <div 
        className={`md:hidden fixed inset-0 bg-black/40 z-30 transition-opacity ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={onClose}
      />

      {/* FIX: Removed 'border-l border-gray-200' from the desktop classes */}
      <aside className={`
        fixed top-0 right-0 h-full w-72 p-6 bg-white shadow-xl z-40 flex-col
        transition-transform duration-300 ease-in-out
        md:flex md:top-14 md:h-[calc(100vh-3.5rem)] md:w-64 md:shadow-sm md:bg-[#f7f7f7]/80 md:backdrop-blur-lg md:z-10
        md:translate-x-0
        ${isOpen ? 'translate-x-0' : 'translate-x-full'}
      `}>
        <h2 className="text-lg font-semibold mb-6 text-gray-800">On this page</h2>
        <nav className="flex flex-col space-y-2 overflow-y-auto">
          {headings.map((heading) => {
            const isActive = activeHeading === heading.id;
            const indentClass = heading.level === 3 ? 'pl-8' : 'pl-4';

            return (
              <a
                key={heading.id}
                href={`#${heading.id}`}
                onClick={(e) => handleClick(e, heading.id)}
                className={`
                  text-left text-sm py-2 rounded-xl transition-all duration-150
                  ${indentClass}
                  ${isActive
                    ? "bg-white border border-gray-300 shadow-xs text-gray-900"
                    : "text-gray-600 border border-transparent hover:bg-gray-200 hover:text-gray-900"}
                `}
              >
                {formatTitle(heading.title)}
              </a>
            );
          })}
        </nav>
      </aside>
    </>
  );
}
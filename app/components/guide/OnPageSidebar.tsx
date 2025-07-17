// --- File: OnPageSidebar.tsx ---
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
      <div 
        className={`md:hidden fixed inset-0 bg-black/40 z-30 transition-opacity ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={onClose}
      />

      <aside className={`
        fixed top-0 right-0 h-full w-72 bg-white shadow-xl z-40 flex flex-col
        transition-transform duration-300 ease-in-out
        /* FIX: Re-styled for a fixed, full-height, three-column layout */
        md:w-64 md:h-screen md:bg-gray-50 md:shadow-none md:border-l md:border-gray-200
        md:translate-x-0 md:p-6 md:pt-28 /* Added top padding for navbar */
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
                    ? "bg-white border border-gray-300 shadow-sm text-gray-900"
                    : "text-gray-600 border border-transparent hover:bg-white hover:border-gray-200"}
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
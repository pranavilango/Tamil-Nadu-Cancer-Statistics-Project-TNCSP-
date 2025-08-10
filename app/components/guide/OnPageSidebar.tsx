// --- File: app/components/guide/OnPageSidebar.tsx ---
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
        className={`md:hidden fixed inset-0 bg-black/40 transition-opacity ${isOpen ? 'opacity-100 z-50' : 'opacity-0 pointer-events-none'}`}
        onClick={onClose}
      />

      <aside className={`
        fixed top-0 right-0 h-full w-72 bg-white dark:bg-zinc-900 shadow-xl flex flex-col
        transition-transform duration-300 ease-in-out
        md:w-64 md:h-screen md:bg-gray-50 dark:md:bg-zinc-900/80 md:shadow-none md:border-l md:border-gray-200 dark:md:border-zinc-800
        md:translate-x-0 md:p-6 md:pt-28
        ${isOpen ? 'translate-x-0 z-50' : 'translate-x-full'} /* Ensure sidebar is on top */
      `}>
        {/* Mobile Header */}
        <div className="md:hidden p-4 border-b border-gray-200 dark:border-zinc-800">
            <h2 className="text-lg font-semibold text-gray-800 dark:text-zinc-200">On this page</h2>
        </div>

        {/* Desktop Header */}
        <h2 className="hidden md:block text-lg font-semibold mb-6 text-gray-800 dark:text-zinc-200">On this page</h2>
        
        <nav className="flex flex-col space-y-2 overflow-y-auto p-4 md:p-0">
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
                    ? "bg-white dark:bg-zinc-800 border border-gray-300 dark:border-zinc-700 shadow-sm text-gray-900 dark:text-white"
                    : "text-gray-600 dark:text-zinc-400 border border-transparent hover:bg-white dark:hover:bg-zinc-800/50 hover:border-gray-200 dark:hover:border-zinc-700/50"}
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
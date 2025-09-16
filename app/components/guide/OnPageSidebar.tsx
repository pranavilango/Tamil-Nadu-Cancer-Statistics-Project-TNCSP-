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
        className={`md:hidden fixed inset-0 bg-black/40 backdrop-blur-sm transition-opacity ${isOpen ? 'opacity-100 z-50' : 'opacity-0 pointer-events-none'}`}
        onClick={onClose}
      />

      <aside className={`
        fixed top-0 right-0 h-full w-72 bg-white/90 dark:bg-slate-900/90 backdrop-blur-lg shadow-xl flex flex-col
        transition-transform duration-300 ease-in-out
        md:w-64 md:h-screen md:bg-transparent md:dark:bg-transparent md:shadow-none md:border-l md:border-slate-900/10 dark:md:border-slate-50/[0.06]
        md:translate-x-0 md:p-6 md:pt-28
        ${isOpen ? 'translate-x-0 z-50' : 'translate-x-full'}
        pt-16 md:pt-28 // DEFINITIVE FIX: Added pt-16 for mobile to clear the navbar
      `}>
        <div className="md:hidden p-4 border-b border-slate-200 dark:border-slate-800">
            <h2 className="text-lg font-semibold text-slate-800 dark:text-slate-200">On This Page</h2>
        </div>

        <h2 className="hidden md:block text-sm font-semibold tracking-widest text-slate-500 dark:text-slate-400 uppercase mb-4">On This Page</h2>
        
        <nav className="flex flex-col space-y-1 overflow-y-auto p-4 md:p-0">
          {headings.map((heading) => {
            const isActive = activeHeading === heading.id;
            const indentClass = heading.level === 3 ? 'pl-7' : 'pl-3';

            return (
              <a
                key={heading.id}
                href={`#${heading.id}`}
                onClick={(e) => handleClick(e, heading.id)}
                className={`
                  relative text-left py-2 rounded-md transition-colors duration-200 text-sm
                  ${indentClass}
                  ${isActive
                    ? "font-semibold text-slate-900 dark:text-slate-100"
                    : "text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100"}
                `}
              >
                {isActive && <div className="absolute left-0 top-1/2 -translate-y-1/2 h-5 w-0.5 bg-brand-lavender rounded-full" />}
                {formatTitle(heading.title)}
              </a>
            );
          })}
        </nav>
      </aside>
    </>
  );
}
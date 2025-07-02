import Link from 'next/link';

export default function NavBar() {
    return (
          <div
            className="fixed left-1/2 transform -translate-x-1/2 w-[100vw] z-10000 backdrop-blur-[4px]">
            <div className="w-full h-[3.5rem] px-6 flex items-center justify-between bg-[#f7f7f7] shadow-md">
              <span className="flex items-center gap-2 text-[1.25rem] text-black leading-none ml-4">
                tncsp
              </span>
              <div className="flex items-center space-x-10 h-full">
                <Link href="/">
                  <span className="text-[1rem] text-black cursor-pointer hover:text-black transition
                                transition hover:underline underline-offset-4 duration-200 cursor-pointer"
                  >
                    home
                  </span>
                </Link>
                <Link href="/map">
                  <span className="text-[1rem] text-black cursor-pointer hover:text-black transition
                                  transition hover:underline underline-offset-4 duration-200 cursor-pointer"
                  >
                    map
                  </span>
                </Link>
                <Link href="/impact">
                  <span className="text-[1rem] text-black cursor-pointer hover:text-black transition
                                  transition hover:underline underline-offset-4 duration-200 cursor-pointer"
                  >
                    impact
                  </span>
                </Link>
                <Link href="/guide">
                  <span className="text-[1rem] text-black cursor-pointer hover:text-black transition
                                  transition hover:underline underline-offset-4 duration-200 cursor-pointer"
                  >
                    guide
                  </span> 
                </Link>
              </div>
            </div>
          </div>
    );
}
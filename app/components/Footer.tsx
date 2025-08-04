import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          
          {/* Branding & Mission */}
          <div className="col-span-2 md:col-span-1">
            <h2 className="text-2xl font-bold text-white mb-2">tncsp</h2>
            <p className="text-sm text-gray-400">
              An applied public health project leveraging open data for community-driven awareness.
            </p>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Navigate</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="/" className="text-base text-gray-300 hover:text-[#f44e8b] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/impact" className="text-base text-gray-300 hover:text-[#f44e8b] transition-colors">
                  Impact
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-base text-gray-300 hover:text-[#f44e8b] transition-colors">
                  About
                </Link>
              </li>
            </ul>
          </div>

          {/* Resource Links */}
          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Resources</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="/map" className="text-base text-gray-300 hover:text-[#f44e8b] transition-colors">
                  Map
                </Link>
              </li>
              <li>
                <Link href="/guide" className="text-base text-gray-300 hover:text-[#f44e8b] transition-colors">
                  Guide
                </Link>
              </li>
              <li>
                <Link href="/hospitals" className="text-base text-gray-300 hover:text-[#f44e8b] transition-colors">
                  Hospitals
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect Links */}
          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Connect</h3>
            <ul className="mt-4 space-y-2"> 
              <li>
                <a 
                  href="https://www.linkedin.com/company/tncsp/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-base text-gray-300 hover:text-[#f44e8b] transition-colors"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 border-t border-gray-700 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-gray-400">© {new Date().getFullYear()} Tamil Nadu Cancer Statistics Project. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 sm:mt-0">
            {/* <Link href="/privacy" className="text-sm text-gray-400 hover:text-white transition-colors"> */}
              Privacy Policy
            {/* </Link> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
export default function ImpactPage() {
  return (
    // Responsive Padding: Added more top padding (pt-24) to clear the navbar and adjusted horizontal padding for larger screens.
    <div className="min-h-screen flex justify-center items-center px-4 md:px-8 pt-24 pb-12">
      
      {/* Responsive Gap: Reduced the gap between cards on mobile for a tighter look. */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10 w-full max-w-7xl">

        {/* Box 1 */}
        {/* Responsive Height & Padding: Reduced height and padding on mobile. */}
        <div className="relative bg-black rounded-2xl shadow-xl p-8 md:p-12 text-center h-[380px] md:h-[400px] flex flex-col justify-center">
            <h2 className="text-6xl md:text-7xl font-extrabold mb-6 bg-gradient-to-r from-[#5557fc] via-[#f44e8b] to-[#5557fc]
                    bg-clip-text text-transparent drop-shadow-md">1</h2>
            {/* Responsive Typography: Reduced text size on mobile. */}
            <p className="text-xl md:text-2xl text-white">awareness campaigns and educational drives organized</p>
            
            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex space-x-3">
                <button className="w-10 h-10 rounded-full bg-white flex items-center justify-center cursor-pointer hover:opacity-80 transition">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                </button>
                <button className="w-10 h-10 rounded-full bg-white flex items-center justify-center cursor-pointer hover:opacity-80 transition">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </button>
            </div>
        </div>


        {/* Box 2 */}
        <div className="relative bg-black rounded-2xl shadow-xl p-8 md:p-12 text-center h-[380px] md:h-[400px] flex flex-col justify-center">
            <h2 className="text-6xl md:text-7xl font-extrabold mb-6 bg-gradient-to-r from-[#5557fc] via-[#f44e8b] to-[#5557fc]
                    bg-clip-text text-transparent drop-shadow-md">2,000</h2>
            <p className="text-xl md:text-2xl text-white">in micropayments received to build a state-wide cancer fund</p>
            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
                <button className="h-10 px-4 rounded-full bg-white text-black font-medium text-sm cursor-pointer hover:opacity-80 transition flex items-center space-x-2">
                    <span>Donate</span>
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                </button>
            </div>

        </div>

        {/* Box 3 */}
        <div className="relative bg-black rounded-2xl shadow-xl p-8 md:p-12 text-center h-[380px] md:h-[400px] flex flex-col justify-center">
            <h2 className="text-6xl md:text-7xl font-extrabold mb-6 bg-gradient-to-r from-[#5557fc] via-[#f44e8b] to-[#5557fc]
                    bg-clip-text text-transparent drop-shadow-md">2</h2>
            <p className="text-xl md:text-2xl text-white">interviews of health-care workers and survivors on YouTube</p>
            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
                <button className="h-10 px-4 rounded-full bg-white text-black font-medium text-sm cursor-pointer hover:opacity-80 transition flex items-center space-x-2">
                    <span>Watch</span>
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                </button>
            </div>
        </div>

      </div>
    </div>
  );
}
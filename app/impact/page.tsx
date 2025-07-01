export default function ImpactPage() {
  return (
    <div className="min-h-screen flex justify-center items-center px-4 py-20">
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 w-full max-w-7xl">

        {/* Box 1 */}
        <div className="relative bg-[url('/card-grad.png')] bg-cover bg-center rounded-2xl shadow-xl p-12 text-center h-[400px] flex flex-col justify-center">
            <h2 className="text-6xl md:text-7xl font-extrabold mb-6 bg-gradient-to-r from-[#5557fc] via-[#f44e8b] to-[#5557fc]
                    bg-clip-text text-transparent drop-shadow-md">0</h2>
            <p className="text-white text-2xl">awareness campaigns and educational drives organized</p>
            
            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex space-x-3">
                <button className="w-10 h-10 rounded-full bg-[url('/nav-grad.png')] bg-cover flex items-center justify-center cursor-pointer hover:opacity-80 transition">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                </button>
                <button className="w-10 h-10 rounded-full bg-[url('/nav-grad.png')] bg-cover flex items-center justify-center cursor-pointer hover:opacity-80 transition">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </button>
            </div>
        </div>


        {/* Box 2 */}
        <div className="relative bg-[url('/card-grad.png')] bg-cover bg-center rounded-2xl shadow-xl p-12 text-center h-[400px] flex flex-col justify-center">
            <h2 className="text-6xl md:text-7xl font-extrabold mb-6 bg-gradient-to-r from-[#5557fc] via-[#f44e8b] to-[#5557fc]
                    bg-clip-text text-transparent drop-shadow-md">0</h2>
            <p className="text-white text-2xl">in micropayments received to build a state-wide cancer fund</p>
            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
                <button className="h-10 px-4 rounded-full bg-[url('/nav-grad.png')] bg-cover text-black font-medium text-sm cursor-pointer hover:opacity-80 transition flex items-center space-x-2">
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
        <div className="relative bg-[url('/card-grad.png')] bg-cover bg-center rounded-2xl shadow-xl p-12 text-center h-[400px] flex flex-col justify-center">
            <h2 className="text-6xl md:text-7xl font-extrabold mb-6 bg-gradient-to-r from-[#5557fc] via-[#f44e8b] to-[#5557fc]
                    bg-clip-text text-transparent drop-shadow-md">0</h2>
            <p className="text-white text-2xl">interviews of health-care workers and survivors on YouTube</p>
            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
                <button className="h-10 px-4 rounded-full bg-[url('/nav-grad.png')] bg-cover text-black font-medium text-sm cursor-pointer hover:opacity-80 transition flex items-center space-x-2">
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

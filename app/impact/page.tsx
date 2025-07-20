'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function ImpactPage() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [
    '/awareness-erode-1.jpg',
    '/awareness-erode-2.jpg',
    '/awareness-erode-3.jpg',
  ];

  const handlePrev = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <>
      {/* --- TOP SECTION (UNCHANGED) --- */}
      <div className="min-h-screen flex justify-center items-center px-4 md:px-8 pt-24 pb-20 md:pb-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10 w-full max-w-7xl">
          {/* Box 1 */}
          <div className="relative bg-black rounded-2xl shadow-xl p-8 md:p-12 text-center h-[380px] md:h-[400px] flex flex-col justify-center">
            <h2 className="text-6xl md:text-7xl font-extrabold mb-6 bg-gradient-to-r from-[#5557fc] via-[#f44e8b] to-[#5557fc] bg-clip-text text-transparent drop-shadow-md">
              200+
            </h2>
            <p className="text-xl md:text-2xl text-white">
              people impacted via student-led awareness campaigns
            </p>
            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
              <button
                onClick={() => {
                  document
                    .getElementById('scroll-target')
                    ?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="h-10 px-4 rounded-full bg-white text-black font-medium text-sm cursor-pointer hover:opacity-80 transition flex items-center space-x-2"
              >
                <span>Learn More</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Box 2 */}
          <div className="relative bg-black rounded-2xl shadow-xl p-8 md:p-12 text-center h-[380px] md:h-[400px] flex flex-col justify-center">
            <h2 className="text-6xl md:text-7xl font-extrabold mb-6 bg-gradient-to-r from-[#5557fc] via-[#f44e8b] to-[#5557fc] bg-clip-text text-transparent drop-shadow-md">
              0
            </h2>
            <p className="text-xl md:text-2xl text-white">
              in micropayments received to build an early screening fund
            </p>
            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
              <button className="h-10 px-4 rounded-full bg-white text-black font-medium text-sm opacity-60 flex items-center space-x-2">
                <span>Coming Soon</span>
              </button>
            </div>
          </div>

          {/* Box 3 */}
          <div className="relative bg-black rounded-2xl shadow-xl p-8 md:p-12 text-center h-[380px] md:h-[400px] flex flex-col justify-center">
            <h2 className="text-6xl md:text-7xl font-extrabold mb-6 bg-gradient-to-r from-[#5557fc] via-[#f44e8b] to-[#5557fc] bg-clip-text text-transparent drop-shadow-md">
              2
            </h2>
            <p className="text-xl md:text-2xl text-white">
              interviews of health-care workers and survivors on YouTube
            </p>
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
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* --- REFINED SECTION --- */}
      <section
        id="scroll-target"
        className="min-h-screen w-full flex flex-col justify-start md:justify-center items-center p-4 sm:p-6 pt-20 md:pt-6"
      >
        <div className="w-full max-w-6xl mx-auto">
          <h2 className="bg-gradient-to-t from-[#000000] to-[#878a89] bg-clip-text text-transparent text-center font-bold text-3xl md:text-4xl leading-tight mb-8">
            Awareness Campaign #1
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="bg-zinc-100/80 backdrop-blur-sm border border-zinc-200 rounded-2xl p-5 flex flex-col h-64 md:h-96">
              <h3 className="text-xl font-bold text-zinc-800 mb-2">Photos</h3>
              <div className="relative flex-grow w-full rounded-xl overflow-hidden">
                <Image
                  src={images[currentImageIndex]}
                  alt={`Awareness Campaign Photo ${currentImageIndex + 1}`}
                  layout="fill"
                  objectFit="cover"
                  className="transition-opacity duration-300"
                />
                <button
                  onClick={handlePrev}
                  className="absolute left-2 top-1/2 -translate-y-1/2 z-10 p-2 bg-black/30 rounded-full hover:bg-black/50 transition"
                  aria-label="Previous Photo"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  onClick={handleNext}
                  className="absolute right-2 top-1/2 -translate-y-1/2 z-10 p-2 bg-black/30 rounded-full hover:bg-black/50 transition"
                  aria-label="Next Photo"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-10 flex space-x-2">
                  {images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`w-2 h-2 rounded-full transition-all ${
                        index === currentImageIndex ? 'bg-white scale-110' : 'bg-white/50'
                      }`}
                      aria-label={`Go to photo ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Container now aligns items to the start, allowing for different widths */}
            <div className="flex flex-col gap-5 items-start">
              {/* Location card now has a reduced width */}
              <div className="bg-[#00844F] border border-zinc-200 rounded-2xl p-1.5 flex-grow flex flex-col justify-center w-3/5">
                <div className="bg-[#00844F] border-4 border-white rounded-lg w-full h-full flex flex-col justify-center items-center">
                  <p className="text-white text-4xl leading-tight text-center p-4">
                    Railway Colony
                    <br />
                    Erode
                  </p>
                </div>
              </div>

              {/* People Reached card now has w-full to maintain its original width */}
              <div className="bg-zinc-100/80 backdrop-blur-sm border border-zinc-200 rounded-2xl p-5 flex-grow flex flex-col justify-center w-full">
                <h3 className="text-xl font-bold text-zinc-800 mb-1">People Reached</h3>
                <p className="text-3xl font-bold text-zinc-900">200+</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
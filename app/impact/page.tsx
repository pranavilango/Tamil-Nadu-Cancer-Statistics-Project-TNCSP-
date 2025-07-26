'use client';

import { useState } from 'react';
import Image from 'next/image';

// --- ICONS (Defined as components for clarity and reusability) ---
const ArrowLeftIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
  </svg>
);

const ArrowRightIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
  </svg>
);

const LocationIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
  </svg>
);

const PeopleIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m-7.5-2.962a3.75 3.75 0 01-4.125-2.582A11.25 11.25 0 012.25 4.5a3.75 3.75 0 015.875 2.106c.358.85.673 1.737.94 2.625M12 15a3.75 3.75 0 01-3.75-3.75V8.625c0-1.036.84-1.875 1.875-1.875h3.75c1.036 0 1.875.84 1.875 1.875v2.625A3.75 3.75 0 0112 15z" />
  </svg>
);


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
      {/* --- TOP SECTION (REFINED OVERLAY EFFECT) --- */}
      <div className="min-h-screen flex justify-center items-center px-4 md:px-8 pt-24 pb-20 md:pb-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10 w-full max-w-7xl">
          {/* Box 1 */}
          <div className="relative bg-white border border-zinc-200 rounded-2xl shadow-xl p-8 md:p-12 text-center h-[380px] md:h-[400px] flex flex-col justify-center overflow-hidden">
            <div className="absolute w-[200%] h-[200%] -top-1/2 -left-1/2 bg-gradient-to-br from-[#f44e8b] via-[#5557fc] to-transparent opacity-15 blur-3xl"></div>
            <div className='relative'>
              <h2 className="text-6xl md:text-7xl font-extrabold mb-6 bg-gradient-to-r from-[#5557fc] via-[#f44e8b] to-[#5557fc] bg-clip-text text-transparent drop-shadow-md">
                200+
              </h2>
              <p className="text-xl md:text-2xl text-zinc-800">
                people impacted via student-led awareness campaigns
              </p>
            </div>
            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
              <button
                onClick={() => {
                  document
                    .getElementById('scroll-target')
                    ?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="h-10 px-4 rounded-full bg-white text-black font-medium text-sm cursor-pointer hover:bg-zinc-100 transition flex items-center space-x-2 border border-zinc-300"
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
          <div className="relative bg-white border border-zinc-200 rounded-2xl shadow-xl p-8 md:p-12 text-center h-[380px] md:h-[400px] flex flex-col justify-center overflow-hidden">
            <div className="absolute w-[200%] h-[200%] -top-1/2 -left-1/2 bg-gradient-to-br from-[#f44e8b] via-[#5557fc] to-transparent opacity-15 blur-3xl"></div>
            <div className='relative'>
              <h2 className="text-6xl md:text-7xl font-extrabold mb-6 bg-gradient-to-r from-[#5557fc] via-[#f44e8b] to-[#5557fc] bg-clip-text text-transparent drop-shadow-md">
                0
              </h2>
              <p className="text-xl md:text-2xl text-zinc-800">
                in micropayments received to build an early screening fund
              </p>
            </div>
            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
              <button className="h-10 px-4 rounded-full bg-zinc-200 text-zinc-500 font-medium text-sm flex items-center space-x-2 cursor-default">
                <span>Coming Soon</span>
              </button>
            </div>
          </div>

          {/* Box 3 */}
          <div className="relative bg-white border border-zinc-200 rounded-2xl shadow-xl p-8 md:p-12 text-center h-[380px] md:h-[400px] flex flex-col justify-center overflow-hidden">
            <div className="absolute w-[200%] h-[200%] -top-1/2 -left-1/2 bg-gradient-to-br from-[#f44e8b] via-[#5557fc] to-transparent opacity-15 blur-3xl"></div>
            <div className='relative'>
              <h2 className="text-6xl md:text-7xl font-extrabold mb-6 bg-gradient-to-r from-[#5557fc] via-[#f44e8b] to-[#5557fc] bg-clip-text text-transparent drop-shadow-md">
                2
              </h2>
              <p className="text-xl md:text-2xl text-zinc-800">
                interviews of health-care workers and survivors on YouTube
              </p>
            </div>
            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
              <button className="h-10 px-4 rounded-full bg-white text-black font-medium text-sm cursor-pointer hover:bg-zinc-100 transition flex items-center space-x-2 border border-zinc-300">
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

      {/* --- REFINED SECTION (CONSISTENT OVERLAY EFFECT ADDED) --- */}
      <section
        id="scroll-target"
        className="min-h-screen w-full flex justify-center items-center p-4 sm:p-6 md:p-8"
      >
        <div className="relative w-full max-w-6xl mx-auto bg-zinc-100 rounded-3xl shadow-2xl overflow-hidden border border-zinc-200/80">
          <div className="absolute w-[200%] h-[200%] -top-1/2 -left-1/2 bg-gradient-to-br from-[#f44e8b] via-[#5557fc] to-transparent opacity-15 blur-3xl"></div>
          <div className="relative grid grid-cols-1 lg:grid-cols-2">
            
            {/* Left Side: Image Carousel */}
            <div className="relative w-full h-80 lg:h-[500px]">
              <Image
                src={images[currentImageIndex]}
                alt={`Awareness Campaign Photo ${currentImageIndex + 1}`}
                layout="fill"
                objectFit="cover"
                className="transition-opacity duration-500 ease-in-out"
                key={currentImageIndex}
              />
              
              <div className="absolute inset-0 flex items-center justify-between p-4">
                <button
                  onClick={handlePrev}
                  className="p-2 bg-white/70 rounded-full hover:bg-white backdrop-blur-sm transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-pink-500"
                  aria-label="Previous Photo"
                >
                  <ArrowLeftIcon className="h-6 w-6 text-zinc-800" />
                </button>
                <button
                  onClick={handleNext}
                  className="p-2 bg-white/70 rounded-full hover:bg-white backdrop-blur-sm transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-pink-500"
                  aria-label="Next Photo"
                >
                  <ArrowRightIcon className="h-6 w-6 text-zinc-800" />
                </button>
              </div>

              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex space-x-2.5">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentImageIndex ? 'bg-zinc-800 scale-110' : 'bg-zinc-800/40 hover:bg-zinc-800/75'
                    }`}
                    aria-label={`Go to photo ${index + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* Right Side: Content */}
            <div className="flex flex-col p-8 lg:p-12 justify-center">
              <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4">
                Awareness Campaign #1
              </h2>
              <p className="text-zinc-600 text-base md:text-lg mb-8">
                Our inaugural campaign focused on direct community engagement. We initiated conversations, distributed informational materials, and connected with residents to spread vital awareness about early screening.
              </p>

              <div className="border-t border-zinc-300 pt-8 space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 bg-zinc-200 p-3 rounded-full">
                    <LocationIcon className="w-6 h-6 text-[#f44e8b]" />
                  </div>
                  <div>
                    <p className="text-sm text-zinc-500">Location</p>
                    <p className="text-lg font-semibold text-zinc-800">Railway Colony, Erode</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 bg-zinc-200 p-3 rounded-full">
                    <PeopleIcon className="w-6 h-6 text-[#f44e8b]" />
                  </div>
                  <div>
                    <p className="text-sm text-zinc-500">People Reached</p>
                    <p className="text-lg font-semibold text-zinc-800">200+ Individuals</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
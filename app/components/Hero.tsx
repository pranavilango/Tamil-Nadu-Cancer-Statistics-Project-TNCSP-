"use client";

import { Typewriter } from 'react-simple-typewriter';

export default function Hero() {  

  return (
    <main className="relative min-h-screen overflow-hidden">
      
      <div 
        className="absolute inset-0 -z-10 h-full w-full
                   bg-[radial-gradient(circle,rgba(0,0,0,0.1)_1px,transparent_1px)]
                   dark:bg-[radial-gradient(circle,rgba(255,255,255,0.08)_1px,transparent_1px)]"
        style={{ backgroundSize: '1.25rem 1.25rem' }}
      />

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4">
        <section className="text-center">
          <h1
            className="text-[2.75rem] md:text-[4rem] font-bold tracking-[-0.04em]
                      leading-tight bg-gradient-to-r from-[#5557fc] via-[#f44e8b] to-[#5557fc]
                      bg-clip-text text-transparent"
          >
            Boosting cancer awareness<br />
            in Tamil Nadu with{' '}
            <span className="inline-block typewriter-wrapper">
              <Typewriter
                words={['data', 'charts', 'maps']}
                loop={0}
                cursor={false}
                typeSpeed={90}
                deleteSpeed={60}
                delaySpeed={2000}
              />
            </span>
          </h1>

          {/* Replaced Tailwind utility with our new custom class for consistent spacing */}
          <p className="mt-4 text-black dark:text-white text-lg sm:text-xl font-medium max-w-3xl mx-auto hero-subtitle">
            An applied public health project<br />
            leveraging open data for community-driven awareness.
          </p>
        </section>

        <div className="mt-10 flex justify-center">
          <button
            onClick={() => {
              document
                .getElementById('scroll-target')
                ?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="flex items-center gap-2 px-6 py-3 rounded-full
                        bg-black dark:bg-white shadow-lg text-white dark:text-black text-lg
                        hover:opacity-75 cursor-pointer z-10"
          >
            Learn More
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>
      </div>
    </main>
  );
}
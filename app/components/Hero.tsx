"use client";

import { Typewriter } from 'react-simple-typewriter';

export default function Hero() {  
  return (
    <main className="relative h-screen overflow-hidden">

      <section className="relative z-10 flex flex-col items-center text-white mt-[176px]">
        <h1
          className="text-[4rem] font-bold tracking-[-0.04em] text-center
                    leading-tight bg-gradient-to-r from-[#5557fc] via-[#f44e8b] to-[#5557fc]
                    bg-clip-text text-transparent"
        >
          Boosting cancer awareness<br />
          in Tamil Nadu with{' '}
          <span className="inline-block typewriter-wrapper">
            <Typewriter
              words={['data', 'charts', 'maps']}
              loop={0}
              cursor={false} // disables default cursor
              typeSpeed={90}
              deleteSpeed={60}
              delaySpeed={2000}
            />
          </span>
        </h1>


        <p className="mt-2 text-center text-black text-lg sm:text-xl font-medium leading-relaxed max-w-3xl mx-auto">
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
                      bg-black shadow-lg text-white text-lg
                      hover:opacity-75 cursor-pointer z-5"
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

    </main>
  );
}
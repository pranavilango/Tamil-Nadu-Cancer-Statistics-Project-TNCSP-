'use client';

import Hero from "./components/Hero";
import ProblemBadge from "./components/ProblemBadge";
import { useState, useEffect, useCallback } from "react";
import Image from "next/image";

export default function Home() {

  const problems = [
    {
      title: "The Late Screening Epidemic",
      quote: "Over 60% of cancer patients in India are diagnosed in stages III or IV.",
    },
    {
      title: "Clueless, Until It’s Too Late",
      quote: "Nearly 70% of rural patients in Tamil Nadu are unaware of advanced cancer treatment options.",
    },
    {
      title: "Silenced by Shame",
      quote: "Fear of social judgment delays diagnosis in over 40% of female patients in South India.",
    },
    {
      title: "When Pain Is Misread",
      quote: "Up to 50% of early cancer symptoms are dismissed as minor ailments by local clinics.",
    },
    {
      title: "Treatment That Breaks Families",
      quote: "Over 75% of Indian families face catastrophic health costs during cancer treatment.",
    },
  ];


  const [index, setIndex] = useState(0);
  const [activeArrow, setActiveArrow] = useState<"left" | "right" | null>(null);

  const handleNext = useCallback(() => {
    setIndex((prev) => (prev + 1) % problems.length);
  }, [problems.length]);

  const handlePrev = useCallback(() => {
    setIndex((prev) => (prev - 1 + problems.length) % problems.length);
  }, [problems.length]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        setActiveArrow("left");
        handlePrev(); // go to previous problem
      }
      if (e.key === "ArrowRight") {
        setActiveArrow("right");
        handleNext(); // go to next problem
      }
    };

    const handleKeyUp = () => {
      setActiveArrow(null);
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, [handleNext, handlePrev]);

  return (
    <>

      <div className="absolute inset-0 -z-1">
        <div className="absolute w-full h-[100%] bg-gradient-to-br from-[#f44e8b] via-[#5557fc] to-[#f44e8b] opacity-20 blur-[120px] rounded-full" />
      </div>

      <Hero />

      <section
        id="scroll-target"
        // The `relative` class is crucial for positioning the absolute child button.
        className="relative w-full h-[100vh] rounded-tl-4xl rounded-br-4xl flex flex-col justify-center items-center space-y-[2vh]"
      >
        <ProblemBadge index={index} />

        {/* Main Text Button */}
        <h2
          className="bg-gradient-to-t from-[#000000] to-[#878a89] bg-clip-text text-transparent text-center font-bold text-[3rem] z-4"
        >
          {problems[index].title}
        </h2>

        {/* Navigation Buttons */}
        <div className="flex items-center space-x-[12vw] z-5">
          <button
            onClick={handlePrev}
            className={`-mt-22 w-10 h-10 rounded-full bg-black flex items-center justify-center cursor-pointer transition
              hover:opacity-80
              ${activeArrow === "left" ? "opacity-80 scale-105" : ""}
            `}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <span className="text-black text-lg font-medium max-w-md text-center">
            {problems[index].quote}
          </span>
          <button
            onClick={handleNext}
            className={`-mt-22 w-10 h-10 rounded-full bg-black flex items-center justify-center cursor-pointer transition
                hover:opacity-80
                ${activeArrow === "right" ? "opacity-80 scale-105" : ""}
              `}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center items-center mt-2 space-x-2">
          {problems.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              aria-label={`Go to problem ${i + 1}`}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                i === index ? 'bg-black scale-115' : 'bg-gray-400 opacity-40'
              }`}
            />
          ))}
        </div>

      </section>


      <section
        id="scroll-target-2"
        className="w-full h-[100vh] bg-transparent flex p-4 gap-4 z-2"
      >
        {/* 
          Icon circles have been made smaller and moved higher up.
          - Position is now `top-[18%]`.
          - Circle size is `w-16 h-16`.
          - Icon size is `w-8 h-8`.
        */}
        <div
          className="flex-1 h-full bg-[url('/map-bg.jpg')] bg-cover border border-white rounded-2xl overflow-hidden 
                    grayscale hover:grayscale-0 cursor-pointer transition-all duration-300 ease-in-out
                    relative flex flex-col justify-end items-center"
        >
          {/* Elegant Icon Circle */}
          <div className="absolute top-[18%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white rounded-full border-2 border-black flex items-center justify-center">
            <Image src="/map-icon.png" alt="Map Icon" width={32} height={32} className="object-contain" />
          </div>

          <h2 className="bg-white text-black text-xl font-medium px-6 py-2 rounded-full mb-8 border border-black">
            map
          </h2>
        </div>
        <div
          className="flex-1 h-full bg-[url('/book-bg.jpeg')] bg-cover bg-center border-white rounded-2xl overflow-hidden
                    grayscale hover:grayscale-0 cursor-pointer transition-all duration-300 ease-in-out
                    relative flex flex-col justify-end items-center"
        >
          {/* Elegant Icon Circle */}
          <div className="absolute top-[18%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white rounded-full border-2 border-black flex items-center justify-center">
            <Image src="/guide-icon.png" alt="Guide Icon" width={32} height={32} className="object-contain" />
          </div>

          <h2 className="bg-white text-black text-xl font-medium px-6 py-2 rounded-full mb-8 border border-black">
            guide
          </h2>
        </div>
        <div
          className="flex-1 h-full bg-[url('/report-bg.jpg')] bg-cover bg-center border border-white rounded-2xl overflow-hidden
                    grayscale hover:grayscale-0 cursor-pointer transition-all duration-300 ease-in-out
                    relative flex flex-col justify-end items-center"
        >
          {/* Elegant Icon Circle */}
          <div className="absolute top-[18%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white rounded-full border-2 border-black flex items-center justify-center">
            <Image src="/report-icon.png" alt="Report Icon" width={32} height={32} className="object-contain" />
          </div>

          <h2 className="bg-white text-black text-xl font-medium px-6 py-2 rounded-full mb-8 border border-black">
            report
          </h2>
        </div>
        <div
          className="flex-1 h-full bg-[url('/money-bg.jpg')] bg-cover bg-center border border-white rounded-2xl overflow-hidden
                    grayscale hover:grayscale-0 cursor-pointer transition-all duration-300 ease-in-out
                    relative flex flex-col justify-end items-center"
        >
          {/* Elegant Icon Circle */}
          <div className="absolute top-[18%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white rounded-full border-2 border-black flex items-center justify-center">
            <Image src="/fund-icon.png" alt="Fund Icon" width={32} height={32} className="object-contain" />
          </div>
          
          <h2 className="bg-white text-black text-xl font-medium px-6 py-2 rounded-full mb-8 border border-black">
            fund
          </h2>
        </div>
        <div
          className="flex-1 h-full bg-[url('/mic-bg.jpg')] bg-cover bg-center border-white rounded-2xl overflow-hidden
                    grayscale hover:grayscale-0 cursor-pointer transition-all duration-300 ease-in-out
                    relative flex flex-col justify-end items-center"
        >
          {/* Elegant Icon Circle */}
          <div className="absolute top-[18%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white rounded-full border-2 border-black flex items-center justify-center">
            <Image src="/interviews-icon.png" alt="Interviews Icon" width={32} height={32} className="object-contain" />
          </div>

          <h2 className="bg-white text-black text-xl font-medium px-6 py-2 rounded-full mb-8 border border-black">
            interviews
          </h2>
        </div>
      </section>
    </>
  );
}
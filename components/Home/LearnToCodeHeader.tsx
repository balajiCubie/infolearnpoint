"use client"
import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import CourseCardHeader from './CourseCardHeader';

const LearnToCodeHeader: React.FC = () => {
  const starsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (starsRef.current) {
      const stars = starsRef.current.children;
      Array.from(stars).forEach((star: Element) => {
        if (star instanceof HTMLElement) {
          const size = Math.random() * 2 + 1;
          const duration = Math.random() * 3 + 2;
          const delay = Math.random() * 5;

          star.style.width = `${size}px`;
          star.style.height = `${size}px`;
          star.style.animation = `twinkle ${duration}s ${delay}s infinite`;
          star.style.opacity = `${Math.random() * 0.7 + 0.3}`;
        }
      });
    }
  }, []);

  return (
    <div className="bg-[#282A35] text-white py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 text-center relative z-10">
        <h1 className="text-6xl md:text-7xl font-bold mb-6">Learn to Code</h1>
        <p className="text-2xl md:text-3xl mb-10 text-[#FFF4A3]">With the world's largest web developer site.</p>
        <div className="max-w-4xl mx-auto mb-10">
          <div className="flex">
            <input
              type="text"
              placeholder="Search our tutorials, e.g. HTML"
              className="w-full px-6 py-4 rounded-l-full text-black text-lg"
            />
            <button className="bg-[#04AA6D] text-white px-8 py-4 rounded-r-full hover:bg-[#059862] transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </div>
        </div>
        <a href="#" className="text-2xl underline hover:text-[#FFF4A3] transition-colors">Not Sure Where To Begin?</a>
      </div>
      <div className="absolute top-6 right-24">
        <Image src="/astronaut.png" alt="Astronaut" width={300} height={300} />
      </div>
      {/* Stars */}
      <div ref={starsRef} className="absolute inset-0 z-0 h-[550px] overflow-hidden">
        {[...Array(500)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-white rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
          ></div>
        ))}
      </div>
      <div className="relative">
        <svg style={{backgroundColor:'#D9EEE1'}} width="100%" height="100" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path id="wavepath" d="M0,0  L110,0C35,150 35,0 0,100z" fill="#282A35"></path>
        </svg>
      </div>
     <CourseCardHeader/>

      <style jsx>{`
        @keyframes twinkle {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(0.5); }
        }
      `}</style>
    </div>
  );
};

export default LearnToCodeHeader;

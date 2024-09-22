"use client"
import React, { useRef } from 'react';
import Link from 'next/link';

const SubHeader: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 300;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="bg-black text-white py-1 w-full">
      <div className="px-4 sm:px-6 lg:px-8 flex items-center">
        <button onClick={() => scroll('left')} className="p-1 bg-white bg-opacity-20 text-white rounded-full hover:bg-opacity-30 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white mr-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <div ref={scrollContainerRef} className="flex-grow overflow-x-auto scrollbar-hide">
          <div className="flex space-x-2">
            <SubHeaderLink href="/html" text="HTML" />
            <SubHeaderLink href="/css" text="CSS" />
            <SubHeaderLink href="/javascript" text="JS" />
            <SubHeaderLink href="/python" text="PYTHON" />
            <SubHeaderLink href="/react" text="REACT" />
            <SubHeaderLink href="/sql" text="SQL" />
            <SubHeaderLink href="/php" text="PHP" />
            <SubHeaderLink href="/java" text="JAVA" />
            <SubHeaderLink href="/cpp" text="C++" />
            <SubHeaderLink href="/csharp" text="C#" />
            <SubHeaderLink href="/nodejs" text="NODE.JS" />
            <SubHeaderLink href="/typescript" text="TYPESCRIPT" />
            <SubHeaderLink href="/angular" text="ANGULAR" />
            <SubHeaderLink href="/vue" text="VUE" />
            <SubHeaderLink href="/bootstrap" text="BOOTSTRAP" />
            <SubHeaderLink href="/jquery" text="JQUERY" />
            <SubHeaderLink href="/django" text="DJANGO" />
            <SubHeaderLink href="/mongodb" text="MONGODB" />
            <SubHeaderLink href="/aws" text="AWS" />
            <SubHeaderLink href="/docker" text="DOCKER" />
            <SubHeaderLink href="/git" text="GIT" />
            <SubHeaderLink href="/kotlin" text="KOTLIN" />
            <SubHeaderLink href="/swift" text="SWIFT" />
            <SubHeaderLink href="/ruby" text="RUBY" />
            <SubHeaderLink href="/go" text="GO" />
            <SubHeaderLink href="/rust" text="RUST" />
            <SubHeaderLink href="/scala" text="SCALA" />
            <SubHeaderLink href="/dart" text="DART" />
            <SubHeaderLink href="/flutter" text="FLUTTER" />
            <SubHeaderLink href="/r" text="R" />
            <SubHeaderLink href="/matlab" text="MATLAB" />
            <SubHeaderLink href="/perl" text="PERL" />
            <SubHeaderLink href="/haskell" text="HASKELL" />
            <SubHeaderLink href="/lua" text="LUA" />
            <SubHeaderLink href="/groovy" text="GROOVY" />
            <SubHeaderLink href="/elixir" text="ELIXIR" />
            <SubHeaderLink href="/clojure" text="CLOJURE" />
            <SubHeaderLink href="/erlang" text="ERLANG" />
            <SubHeaderLink href="/f-sharp" text="F#" />
            <SubHeaderLink href="/julia" text="JULIA" />
            <SubHeaderLink href="/fortran" text="FORTRAN" />
            <SubHeaderLink href="/cobol" text="COBOL" />
            <SubHeaderLink href="/assembly" text="ASSEMBLY" />
            <SubHeaderLink href="/prolog" text="PROLOG" />
            <SubHeaderLink href="/lisp" text="LISP" />
            <SubHeaderLink href="/pascal" text="PASCAL" />
            <SubHeaderLink href="/d" text="D" />
            <SubHeaderLink href="/ocaml" text="OCAML" />
            <SubHeaderLink href="/scheme" text="SCHEME" />
            <SubHeaderLink href="/racket" text="RACKET" />
            <SubHeaderLink href="/crystal" text="CRYSTAL" />
            <SubHeaderLink href="/nim" text="NIM" />
            <SubHeaderLink href="/zig" text="ZIG" />
            <SubHeaderLink href="/elm" text="ELM" />
            <SubHeaderLink href="/purescript" text="PURESCRIPT" />
            <SubHeaderLink href="/reason" text="REASON" />
            <SubHeaderLink href="/idris" text="IDRIS" />
            <SubHeaderLink href="/agda" text="AGDA" />
            <SubHeaderLink href="/coq" text="COQ" />
            <SubHeaderLink href="/ada" text="ADA" />
            <SubHeaderLink href="/forth" text="FORTH" />
            <SubHeaderLink href="/smalltalk" text="SMALLTALK" />
            <SubHeaderLink href="/vhdl" text="VHDL" />
            <SubHeaderLink href="/verilog" text="VERILOG" />
            <SubHeaderLink href="/postscript" text="POSTSCRIPT" />
            <SubHeaderLink href="/tcl" text="TCL" />
            <SubHeaderLink href="/apl" text="APL" />
            <SubHeaderLink href="/j" text="J" />
            <SubHeaderLink href="/k" text="K" />
            <SubHeaderLink href="/q" text="Q" />
            <SubHeaderLink href="/sas" text="SAS" />
            <SubHeaderLink href="/stata" text="STATA" />
            <SubHeaderLink href="/spss" text="SPSS" />
            {/* Add more SubHeaderLink components as needed */}
          </div>
        </div>
        <button onClick={() => scroll('right')} className="p-1 bg-white bg-opacity-20 text-white rounded-full hover:bg-opacity-30 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white ml-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
};

const SubHeaderLink: React.FC<{ href: string; text: string }> = ({ href, text }) => {
  return (
    <Link href={href} className="px-2 py-0.5 bg-white bg-opacity-10 rounded-full text-xs font-medium hover:bg-opacity-20 transition-all duration-300 whitespace-nowrap">
      {text}
    </Link>
  );
};

export default SubHeader;

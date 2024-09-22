"use client"
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const Navbar: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setDarkMode(true);
    }
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <nav className="bg-[#282A35] text-white">
      <div className="flex justify-between items-center h-16 px-4">
        <div className="flex items-center space-x-4">
          <Link href="/" className="flex items-center text-2xl font-bold text-white">
            <span className="ml-2">InfoLearnPoint</span>
          </Link>
          <NavDropdown
            title="Tutorials"
            items={['HTML', 'CSS', 'JavaScript', 'Python']}
            className="z-50 relative"
            dropdownClassName="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden"
            itemClassName="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
          />
          <NavDropdown title="Exercises" items={['HTML', 'CSS', 'JavaScript', 'Python']} className="z-10" />
          <NavDropdown title="Certificates" items={['HTML', 'CSS', 'JavaScript', 'Python']} className="z-10" />
          <NavDropdown title="Services" items={['Hosting', 'Spaces', 'Videos']} className="z-10" />
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              className="w-64 px-4 py-2 text-sm text-gray-700 bg-white border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <button
              type="submit"
              className="absolute right-0 top-0 mt-2 mr-3"
            >
              <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
              </svg>
            </button>
          </div>
          <div className="relative">
            <button
              onClick={toggleDarkMode}
              className="flex items-center space-x-2 px-3 py-2 text-sm font-medium rounded-md hover:bg-gray-700"
            >
              {darkMode ? (
                <>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" fillRule="evenodd" clipRule="evenodd" />
                  </svg>

                </>
              ) : (
                <>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                  </svg>

                </>
              )}
            </button>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <Link href="/teachers" className="text-sm font-medium px-3 py-2 rounded-full transition-all duration-300 hover:backdrop-filter hover:backdrop-blur-lg hover:bg-opacity-10 hover:bg-white">
            <span className="mr-1 text-blue-500">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" className="w-5 h-5 inline-block">
                <path d="M622.34 153.2L343.4 67.5c-15.2-4.67-31.6-4.67-46.79 0L17.66 153.2c-23.54 7.23-23.54 38.36 0 45.59l48.63 14.94c-10.67 13.19-17.23 29.28-17.88 46.9C38.78 266.15 32 276.11 32 288c0 10.78 5.68 19.85 13.86 25.65L20.33 428.53C18.11 438.52 25.71 448 35.94 448h56.11c10.24 0 17.84-9.48 15.62-19.47L82.14 313.65C90.32 307.85 96 298.78 96 288c0-11.57-6.47-21.25-15.66-26.87.76-15.02 8.44-28.3 20.69-36.72L296.6 284.5c9.06 2.78 26.44 6.25 46.79 0l278.95-85.7c23.55-7.24 23.55-38.36 0-45.6zM352.79 315.09c-28.53 8.76-52.84 3.92-65.59 0l-145.02-44.55L128 384c0 35.35 85.96 64 192 64s192-28.65 192-64l-14.18-113.47-145.03 44.56z" fill="currentColor" />
              </svg>
            </span>
            <span className="ml-1">For Teachers</span>
          </Link>
          <Link href="/plus" className="text-sm font-medium px-3 py-2 rounded-full transition-all duration-300 hover:backdrop-filter hover:backdrop-blur-lg hover:bg-opacity-10 hover:bg-white">
            <span className="mr-1 text-blue-500">
              <svg xmlns="http://www.w3.org/2000/svg" width="15" height="26" viewBox="0 0 12 16" fill="none" aria-hidden="true" className="w-5 h-5 inline-block">
                <path d="M6.65723 6.24707C6.76704 5.91764 7.233 5.91765 7.34281 6.24707L7.98828 8.1835C8.276 9.04666 8.95332 9.72399 9.81648 10.0117L11.7529 10.6572C12.0824 10.767 12.0824 11.233 11.7529 11.3428L9.81649 11.9883C8.95332 12.276 8.27599 12.9533 7.98828 13.8165L7.34281 15.7529C7.233 16.0823 6.76704 16.0823 6.65723 15.7529L6.01173 13.8165C5.72401 12.9533 5.04669 12.276 4.18353 11.9883L2.24707 11.3428C1.91764 11.233 1.91764 10.767 2.24707 10.6572L4.18353 10.0117C5.04669 9.72399 5.72401 9.04667 6.01173 8.18352L6.65723 6.24707Z" fill="#3b82f6"></path>
                <path d="M2.79434 1.14824C2.86023 0.950586 3.1398 0.950587 3.20569 1.14824L3.59297 2.3101C3.7656 2.828 4.172 3.2344 4.6899 3.40703L5.85177 3.79432C6.04942 3.86021 6.04942 4.13978 5.85177 4.20567L4.6899 4.59296C4.172 4.76559 3.7656 5.17199 3.59297 5.68989L3.20569 6.85176C3.13981 7.04941 2.86023 7.04942 2.79434 6.85176L2.40704 5.68988C2.23441 5.17198 1.82801 4.76559 1.31012 4.59296L0.148241 4.20567C-0.0494137 4.13978 -0.0494138 3.86021 0.148241 3.79432L1.31012 3.40703C1.82802 3.2344 2.23441 2.82801 2.40704 2.31011L2.79434 1.14824Z" fill="#3b82f6"></path>
                <path d="M9.8629 0.1988C9.9068 0.0671 10.0932 0.0671 10.1371 0.1988L10.3953 0.9734C10.5104 1.3187 10.7813 1.5896 11.1266 1.7047L11.9012 1.9629C12.0329 2.0068 12.0329 2.1932 11.9012 2.2371L11.1266 2.4953C10.7813 2.6104 10.5104 2.8813 10.3953 3.2266L10.1371 4.0012C10.0932 4.1329 9.9068 4.1329 9.8629 4.0012L9.6047 3.2266C9.4896 2.8813 9.2187 2.6104 8.8734 2.4953L8.0988 2.2371C7.9671 2.1932 7.9671 2.0068 8.0988 1.9629L8.8734 1.7047C9.2187 1.5896 9.4896 1.3187 9.6047 0.9734L9.8629 0.1988Z" fill="#3b82f6"></path>
              </svg>
            </span>
            <span className="ml-1">Plus</span>
          </Link>
          <Link href="/spaces" className="text-sm font-medium px-3 py-2 rounded-full transition-all duration-300 hover:backdrop-filter hover:backdrop-blur-lg hover:bg-opacity-10 hover:bg-white">
            <span className="mr-1 text-blue-500">&lt;/&gt;</span> Spaces
          </Link>
          <Link href="/certified" className="text-sm font-medium px-3 py-2 rounded-full transition-all duration-300 hover:backdrop-filter hover:backdrop-blur-lg hover:bg-opacity-10 hover:bg-white">
          <span className="mr-1 text-blue-500">
            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512" aria-hidden="true"><path d="M24 0C10.7 0 0 10.7 0 24S10.7 48 24 48H69.5c3.8 0 7.1 2.7 7.9 6.5l51.6 271c6.5 34 36.2 58.5 70.7 58.5H488c13.3 0 24-10.7 24-24s-10.7-24-24-24H199.7c-11.5 0-21.4-8.2-23.6-19.5L170.7 288H459.2c32.6 0 61.1-21.8 69.5-53.3l41-152.3C576.6 57 557.4 32 531.1 32h-411C111 12.8 91.6 0 69.5 0H24zM131.1 80H520.7L482.4 222.2c-2.8 10.5-12.3 17.8-23.2 17.8H161.6L131.1 80zM176 512a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm336-48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0z" fill="currentColor"></path></svg></span><span className="ml-1">Get Certified</span></Link>
          <button className="bg-[#04AA6D] text-white px-4 py-2 rounded text-sm font-medium hover:bg-[#059862]">
            Sign Up
          </button>
          <button className="text-white px-4 py-2 rounded text-sm font-medium hover:bg-gray-700">
            Log in
          </button>
        </div>
      </div>
    </nav>
  );
};

const NavDropdown: React.FC<{
  title: string;
  items: string[];
  className?: string;
  dropdownClassName?: string;
  itemClassName?: string;
}> = ({ title, items, className, dropdownClassName, itemClassName }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`relative ${className}`} onMouseEnter={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)}>
      <button className="flex items-center space-x-1 px-3 py-2 text-sm font-medium">
        <span>{title}</span>
        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {isOpen && (
        <div className={`absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 ${dropdownClassName}`}>
          <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
            {items.map((item) => (
              <Link
                key={item}
                href={`/${item.toLowerCase()}`}
                className={`block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 ${itemClassName}`}
                role="menuitem"
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

const NavLink: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => {
  return (
    <Link href={href} className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-700 hover:text-green-600">
      {children}
    </Link>
  );
};

export default Navbar;

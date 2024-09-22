"use client"

import React, { useState, useEffect } from 'react';
import Navbar from "./NavBar";
import SubHeader from "./SubHeader";


const NavbarWithSubHeader: React.FC = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`sticky top-0 z-50 ${isSticky ? 'shadow-md' : ''}`}>
      <Navbar />
      <SubHeader />
      
    </div>
  );
};

export default NavbarWithSubHeader;

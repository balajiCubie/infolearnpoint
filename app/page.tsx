import React from 'react';
import NavbarWithSubHeader from '../components/Home/NavbarWithSubHeader';
import LearnToCodeHeader from '../components/Home/LearnToCodeHeader';
import Footer from '@/components/Home/Footer';

export default function Home() {
  return (
    <>
    <NavbarWithSubHeader />

      <LearnToCodeHeader />
      <Footer/>
      </>
  );
}

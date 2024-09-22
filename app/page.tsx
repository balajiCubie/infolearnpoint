import React from 'react';
import Link from 'next/link';
import Navbar from "./components/Home/NavBar";
import SubHeader from "./components/Home/SubHeader";
import LearnToCodeHeader from './components/Home/LearnToCodeHeader';

export default function Home() {
  return (
    <>
    <Navbar />
    <SubHeader />
      <LearnToCodeHeader />
      </>
  );
}

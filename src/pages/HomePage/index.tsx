/** @format */

import React, { useState } from 'react';

import Navbar from '../../components/Navbar';
import HeroSection from '../../components/HeroSection';
import Sidebar from '../../components/Sidebar';
import InfoSection from '../../components/InfoSection';

const HomePage: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection />
      <InfoSection />
    </>
  );
};

export default HomePage;

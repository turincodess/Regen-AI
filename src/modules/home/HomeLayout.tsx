import { NavBarActions, StyledButton } from '../builder/nav-bar/atoms';
import { AnimationGeneratorType, motion, useAnimation } from 'framer-motion';

import { BsGithub } from 'react-icons/bs';
import { Button } from '@mui/material';
import FeatureSection from './components/Feature';
import Image from 'next/image';
import Link from 'next/link';
import Person from './components/Person';
import Navbar2 from './components/Navbar';
import  Banner2  from './components/Banner';
import HeroSection from './components/hero';
import FeaturesSection from './components/features';
import ContactForm from './components/contact';

const HomeLayout = () => {
 

  return (
  <>
  <Navbar2/>
  <HeroSection/>
  <FeaturesSection/>
  <ContactForm/>

  
  </>
  );
};

export default HomeLayout;

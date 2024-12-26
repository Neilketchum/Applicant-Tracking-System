import React from 'react';
import { motion } from 'framer-motion';

import { AppWrap } from '../../wrapper';
import { images } from '../../constants';
import useWindowSize from "../useWindowSize" // Adjust the import according to your project structure
import './Header.scss';

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: 'easeInOut',
    },
  },
};

const Header = () => {
  const { width } = useWindowSize(); // Get the window size

  return (
    <header className='header'></header>
      
  );
};

export default AppWrap(Header, 'home');

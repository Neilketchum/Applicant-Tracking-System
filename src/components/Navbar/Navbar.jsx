import React, { useState } from 'react';
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { motion } from 'framer-motion';

import { images } from '../../constants';
import './Navbar.scss';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const urls = ['whyToUse', 'technologiesUsed', 'connectWithDeveloper', 'login'];
  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.logo} alt="logo" />
      </div>
      <ul className="app__navbar-links">
        {['Why to use ?', 'Technologies Used', 'Connect with the Developer', 'Login'].map((item,index) => (
          <li className="app__flex p-text" key={`link-${item}`}>
            <div />
            <a href={`#${urls[index]}`}>{item}</a>
          </li>
        ))}
      </ul>

      <div className="app__navbar-menu">
        <HiMenuAlt4 onClick={() => setToggle(true)} />

        {toggle && (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.85, ease: 'easeOut' }}
          >
            <HiX onClick={() => setToggle(false)} />
            <ul>
              {['Why to use ?', 'Technologies Used', 'Connect with the Developer', 'Login'].map((item,index) => (
                <li key={item}>
                  <a href={`#${urls[index]}`} onClick={() => setToggle(false)}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
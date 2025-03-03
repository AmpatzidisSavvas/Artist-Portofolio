import gsap from 'gsap';
import React, { useEffect, useRef, useState } from 'react';
import { useWindowScroll } from 'react-use';
import { motion } from 'framer-motion';

const navItems = ['Home', 'About', 'Projects', 'Contact'];

const Navbar = () => {
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navContainerRef = useRef(null);

  const { y: currentScrollY } = useWindowScroll();

  useEffect(() => {
    if (currentScrollY === 0) {
      setIsNavVisible(true);
      navContainerRef.current.classList.remove('floating-nav');
    } else if (currentScrollY > lastScrollY) {
      setIsNavVisible(false);
      navContainerRef.current.classList.add('floating-nav');
    } else if (currentScrollY < lastScrollY) {
      setIsNavVisible(true);
      navContainerRef.current.classList.add('floating-nav');
    }

    setLastScrollY(currentScrollY);
  }, [currentScrollY]);

  useEffect(() => {
    gsap.to(navContainerRef.current, {
      y: isNavVisible ? 0 : -100,
      opacity: isNavVisible ? 1 : 0,
      duration: 0.2,
    });
  });

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <div
      ref={navContainerRef}
      className="fixed inset-x-0 top-4 z-50 h-16 border-none transition-all duration-700 sm:inset-x-6"
    >
      {/* Desktop Navbar  */}
      <header className="hidden md:flex absolute top-1/2 w-full -translate-y-1/2">
        <nav className="flex w-full items-center justify-end p-4">
          {/* Nav Items  */}
          <div className="flex space-x-6">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="nav-hover-btn"
              >
                {item}
              </a>
            ))}
          </div>
        </nav>
      </header>

      {/* Burger Button (Animated) */}
      <div className="md:hidden flex justify-end p-4 ">
        <button className="bg-gray-900 border-2 border-white p-2 rounded flex flex-col items-center justify-center" onClick={toggleMenu}>
          <motion.div
            animate={isMenuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
            className="w-6 h-0.5 bg-white mb-1 transition-all"
          />
          <motion.div
            animate={isMenuOpen ? { opacity: 0 } : { opacity: 1 }}
            className="w-6 h-0.5 bg-white mb-1 transition-all"
          />
          <motion.div
            animate={isMenuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
            className="w-6 h-0.5 bg-white transition-all"
          />
        </button>
      </div>

      {/* Animated Mobile Menu */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={isMenuOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
        transition={{ duration: 0.3 }}
        className={`${
          isMenuOpen ? 'block ' : 'hidden'
        } md:hidden absolute top-full right-0 w-48 bg-gray-900 text-white p-4 flex flex-col space-y-4 rounded-lg shadow-lg`}
      >
        {navItems.map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className="block px-4 py-2 hover:bg-gray-700 rounded"
            onClick={() => setIsMenuOpen(false)}
          >
            {item}
          </a>
        ))}
      </motion.div>
    </div>
  );
};

export default Navbar;

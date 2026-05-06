/* =========================================
   ADDED: Framer Motion Import
========================================= */
import { motion, AnimatePresence } from 'framer-motion';

import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/edited_logo.png';

const navLinks = [
  { label: 'HOME', path: '/' },
  { label: 'ABOUT US', path: '/about' },
  { label: 'JOURNALS', path: '/journals' },
  { label: 'EVENTS', path: '/events' },
  { label: 'MEMBERSHIP', path: '/membership' },
  { label: 'CONTACT', path: '/contact' },
];

/* =========================================
   ADDED: Animation Variants
========================================= */

const navContainer = {
  hidden: { opacity: 0, y: -15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
      staggerChildren: 0.06,
    },
  },
};

const navItem = {
  hidden: { opacity: 0, y: -8 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: 'easeOut',
    },
  },
};

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <motion.nav
      /* ADDED: Smooth navbar entrance animation */
      initial="hidden"
      animate="visible"
      variants={navContainer}
      className="bg-black text-white sticky top-0 z-50 shadow-lg backdrop-blur-md"
    >
      {/* =========================================
          ADDED: Better Responsive Container
      ========================================= */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex items-center justify-between">
        
        {/* Logo */}
        <motion.div
          variants={navItem}
          whileHover={{
            scale: 1.03,
          }}
          transition={{ duration: 0.25 }}
        >
          <Link to="/" className="flex items-center gap-2">
            <div>
              <img
                src={logo}
                alt="MRI India Logo"
                
                /* =========================================
                   ADDED:
                   Responsive logo sizing
                   Smooth hover animation
                ========================================= */
                className="w-30 h-16 object-contain"
              />
            </div>
          </Link>
        </motion.div>

        {/* Desktop Nav */}
        <motion.div
          variants={navContainer}
          className="hidden lg:flex items-center gap-6 xl:gap-10"
        >
          {navLinks.map(link => {
            const active = location.pathname === link.path;

            return (
              <motion.div
                key={link.path}
                variants={navItem}
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2 }}
              >
                <Link
                  to={link.path}
                  className={`
                    relative text-xs tracking-wider
                    transition-all duration-300
                    pb-1 border-b-2
                    hover:scale-[1.03]
                    ${
                      active
                        ? 'text-[#B8860B] border-[#B8860B]'
                        : 'text-white border-transparent hover:text-[#B8860B] hover:border-[#B8860B]'
                    }
                  `}
                >
                  {link.label}
                </Link>
              </motion.div>
            );
          })}

          {/* Member Login Button */}
          <motion.div
            variants={navItem}
            whileHover={{
              scale: 1.04,
              y: -2,
            }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.25 }}
          >
            <Link
              to="/membership"
              className="
                flex rounded-md items-center gap-2
                bg-[#B8860B]
                hover:bg-[#8B6914]
                text-white text-xs tracking-wider
                px-4 xl:px-5 py-2.5
                transition-all duration-300
                shadow-md hover:shadow-xl
              "
            >
              <svg
                className="w-4 h-4 transition-transform duration-300 group-hover:rotate-3"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" />
              </svg>

              MEMBER LOGIN
            </Link>
          </motion.div>
        </motion.div>

        {/* Mobile Hamburger */}
        <motion.button
          variants={navItem}
          
          /* =========================================
             ADDED:
             Soft hover + tap animation
          ========================================= */
          whileHover={{
            scale: 1.08,
            rotate: 2,
          }}
          whileTap={{ scale: 0.92 }}
          transition={{ duration: 0.2 }}
          
          className="
            lg:hidden text-white
            focus:outline-none
            p-2 rounded-md
            hover:bg-white/10
            transition-all duration-300
          "
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg
            className="w-6 h-6 transition-transform duration-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </motion.button>
      </div>

      {/* =========================================
          ADDED:
          Animated Mobile Menu
      ========================================= */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="
              lg:hidden
              bg-black/95
              backdrop-blur-md
              border-t border-gray-800
              px-4 sm:px-6
              py-5
              flex flex-col gap-4
              shadow-2xl
            "
          >
            {navLinks.map((link, index) => (
              <motion.div
                key={link.path}
                initial={{ opacity: 0, x: -10 }}
                animate={{
                  opacity: 1,
                  x: 0,
                  transition: {
                    delay: index * 0.05,
                  },
                }}
                exit={{ opacity: 0, x: -10 }}
              >
                <Link
                  to={link.path}
                  onClick={() => setMenuOpen(false)}
                  className={`
                    block text-xs sm:text-sm
                    font-semibold tracking-widest
                    py-2 px-2 rounded-md
                    transition-all duration-300
                    hover:translate-x-1
                    hover:bg-white/5
                    ${
                      location.pathname === link.path
                        ? 'text-[#B8860B]'
                        : 'text-gray-300 hover:text-[#B8860B]'
                    }
                  `}
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}

            {/* Mobile Login Button */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: {
                  delay: 0.25,
                },
              }}
            >
              <Link
                to="/membership"
                onClick={() => setMenuOpen(false)}
                className="
                  bg-[#B8860B]
                  text-white
                  text-xs sm:text-sm
                  font-bold tracking-wider
                  px-4 py-3
                  text-center rounded-md
                  transition-all duration-300
                  hover:bg-[#8B6914]
                  hover:shadow-lg
                  hover:scale-[1.02]
                  active:scale-[0.98]
                  flex items-center justify-center gap-2
                "
              >
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" />
                </svg>

                MEMBER LOGIN
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
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

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="bg-black text-white sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-4 px-4 py-2 flex items-center justify-between">
        {/* Logo */}
       <Link to="/" className="flex items-center gap-2">
  <div>
    <img src={logo} alt="MRI India Logo" className="w-30 h-16 object-contain " />
  </div>

  {/* <div className="text-white">
    <div className="text-[12px] ">
      MULTIDISCIPLINARY
    </div>
    <div className="text-[10px] ">
      RESEARCH INSTITUTE
    </div>
    <div className="flex items-center gap-1 text-amber-500 text-[10px]  mt-1">
      <span className="w-8 h-[1px] bg-amber-500"></span>
      INDIA
      <span className="w-8 h-[1px] bg-amber-500"></span>
    </div>
  </div> */}
</Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-10">
          {navLinks.map(link => {
            const active = location.pathname === link.path;
            return (
              <Link
                key={link.path}
                to={link.path}
                className={`text-xs  transition-colors duration-200 pb-0.5 border-b-2 ${
                  active
                    ? 'text-[#B8860B] border-[#B8860B]'
                    : 'text-white border-transparent hover:text-[#B8860B] hover:border-[#B8860B]'
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <Link
            to="/membership"
            className="flex rounded items-center gap-2 bg-[#B8860B] hover:bg-[#8B6914] text-white text-xs tracking-wider px-4 py-2.5 transition-colors duration-200"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" />
            </svg>
            MEMBER LOGIN
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="lg:hidden text-white focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {menuOpen
              ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            }
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-black border-t border-gray-800 px-4 py-4 flex flex-col gap-4">
          {navLinks.map(link => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setMenuOpen(false)}
              className={`text-xs font-semibold tracking-widest ${
                location.pathname === link.path ? 'text-[#B8860B]' : 'text-gray-300'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/membership"
            onClick={() => setMenuOpen(false)}
            className="bg-[#B8860B] text-white text-xs font-bold tracking-wider px-4 py-2.5 text-center rounded "
          >
            MEMBER LOGIN
          </Link>
        </div>
      )}
    </nav>
  );
}
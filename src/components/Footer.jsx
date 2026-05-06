/* =========================================
   ADDED: Framer Motion Import
========================================= */
import { motion } from 'framer-motion';

import { Link } from 'react-router-dom';
import logo from '../assets/edited_logo2.png';

/* =========================================
   ADDED: Animation Variants
========================================= */

const fadeUp = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

export default function Footer() {
  return (
    <motion.footer
      /* ADDED: Footer entrance animation */
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeUp}
      className="bg-[#0A0A0A] text-white overflow-hidden"
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
        
        {/* =========================================
            ADDED:
            Better responsive grid spacing
        ========================================= */}
        <motion.div
          variants={staggerContainer}
          className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8 lg:gap-10"
        >
          {/* Brand */}
          <motion.div
            variants={fadeUp}
            whileHover={{ y: -3 }}
            transition={{ duration: 0.3 }}
          >
            <div className="items-center mb-4">
              
              {/* =========================================
                  ADDED:
                  Responsive logo sizing
                  Soft hover effect
              ========================================= */}
              <motion.div
                whileHover={{
                  scale: 1.03,
                }}
                transition={{ duration: 0.3 }}
                className="w-[180px] sm:w-[200px] h-[100px] sm:h-[120px]"
              >
                <img
                  src={logo}
                  alt="MRI India Logo"
                  className="w-full h-full object-contain transition-all duration-300"
                />
              </motion.div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            variants={fadeUp}
            whileHover={{ y: -3 }}
            transition={{ duration: 0.3 }}
          >
            <h4 className="text-[#C9960C] text-[11px] font-bold tracking-[2px] uppercase mb-4">
              QUICK LINKS
            </h4>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6 text-gray-300">
              {[
                { label: "About Us", path: "/about" },
                { label: "Journals", path: "/journals" },
                { label: "Events", path: "/events" },
                { label: "Membership", path: "/membership" },
                { label: "Contact", path: "/contact" },
              ].map((item, index) => (
                <motion.li
                  key={item.label}
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.25 }}
                  className={index === 4 ? "sm:col-span-2" : ""}
                >
                  <Link
                    to={item.path}
                    className="
                      hover:text-[#C9960C]
                      text-[13px]
                      transition-all duration-300
                      flex items-center gap-2
                      group
                    "
                  >
                    {/* =========================================
                        ADDED:
                        Animated arrow hover
                    ========================================= */}
                    <span className="text-[#C9960C] text-xs transition-transform duration-300 group-hover:translate-x-1">
                      ›
                    </span>

                    {item.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Us */}
          <motion.div
            variants={fadeUp}
            whileHover={{ y: -3 }}
            transition={{ duration: 0.3 }}
            className="text-gray-300"
          >
            <h4 className="text-[#C9960C] text-[11px] font-bold tracking-[2px] uppercase mb-4">
              CONTACT US
            </h4>

            <ul className="space-y-4">
              <motion.li
                whileHover={{ x: 3 }}
                transition={{ duration: 0.25 }}
                className="flex items-start gap-2.5 text-[13px]"
              >
                <svg
                  className="w-4 h-4 text-[#C9960C] mt-0.5 shrink-0 transition-transform duration-300 hover:scale-110"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>

                <span>
                  Bengaluru, Karnataka, India – 560012
                </span>
              </motion.li>

              <motion.li
                whileHover={{ x: 3 }}
                transition={{ duration: 0.25 }}
                className="flex items-center gap-2.5 text-[13px]"
              >
                <svg
                  className="w-4 h-4 text-[#C9960C] shrink-0 transition-transform duration-300 hover:scale-110"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>

                <span>info@mriindia.org</span>
              </motion.li>

              <motion.li
                whileHover={{ x: 3 }}
                transition={{ duration: 0.25 }}
                className="flex items-center gap-2.5 text-[13px]"
              >
                <svg
                  className="w-4 h-4 text-[#C9960C] shrink-0 transition-transform duration-300 hover:scale-110"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>

                <span>+91 80 1234 5678</span>
              </motion.li>
            </ul>
          </motion.div>

          {/* Follow Us */}
          <motion.div
            variants={fadeUp}
            whileHover={{ y: -3 }}
            transition={{ duration: 0.3 }}
          >
            <h4 className="text-[#C9960C] text-[11px] font-bold tracking-[2px] uppercase mb-4">
              FOLLOW US
            </h4>

            {/* =========================================
                ADDED:
                Responsive social layout
            ========================================= */}
            <div className="flex items-center flex-wrap gap-3">
              
              {/* Facebook */}
              <motion.a
                href="#"
                whileHover={{
                  scale: 1.12,
                  y: -2,
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.25 }}
                className="
                  w-9 h-9 rounded-full
                  border border-gray-100
                  flex items-center justify-center
                  hover:border-[#C9960C]
                  hover:text-[#C9960C]
                  hover:shadow-[0_0_15px_rgba(201,150,12,0.15)]
                  transition-all duration-300
                "
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
                </svg>
              </motion.a>

              {/* LinkedIn */}
             <motion.a
  href="https://www.linkedin.com/company/mriindia/"
  target="_blank"
  rel="noopener noreferrer"
  whileHover={{
    scale: 1.12,
    y: -2,
  }}
  whileTap={{ scale: 0.95 }}
  transition={{ duration: 0.25 }}
  className="
    w-9 h-9 rounded-full
    border border-gray-100
    flex items-center justify-center
    hover:border-[#C9960C]
    hover:text-[#C9960C]
    hover:shadow-[0_0_15px_rgba(201,150,12,0.15)]
    transition-all duration-300
  "
>
  <svg
    className="w-3.5 h-3.5"
    fill="currentColor"
    viewBox="0 0 24 24"
  >
    <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
</motion.a>

              {/* Twitter/X */}
              <motion.a
                href="#"
                whileHover={{
                  scale: 1.12,
                  y: -2,
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.25 }}
                className="
                  w-9 h-9 rounded-full
                  border border-gray-100
                  flex items-center justify-center
                  hover:border-[#C9960C]
                  hover:text-[#C9960C]
                  hover:shadow-[0_0_15px_rgba(201,150,12,0.15)]
                  transition-all duration-300
                "
              >
                <svg
                  className="w-3.5 h-3.5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </motion.a>

              {/* YouTube */}
              <motion.a
                href="#"
                whileHover={{
                  scale: 1.12,
                  y: -2,
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.25 }}
                className="
                  w-9 h-9 rounded-full
                  border border-gray-100
                  flex items-center justify-center
                  hover:border-[#C9960C]
                  hover:text-[#C9960C]
                  hover:shadow-[0_0_15px_rgba(201,150,12,0.15)]
                  transition-all duration-300
                "
              >
                <svg
                  className="w-3.5 h-3.5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M22.54 6.42a2.78 2.78 0 00-1.94-1.96C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 00-1.94 1.96A29 29 0 001 12a29 29 0 00.46 5.58A2.78 2.78 0 003.4 19.54C5.12 20 12 20 12 20s6.88 0 8.6-.46a2.78 2.78 0 001.94-1.96A29 29 0 0023 12a29 29 0 00-.46-5.58z"/>
                  <polygon
                    points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"
                    fill="white"
                  />
                </svg>
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Bar */}
      <motion.div
        variants={fadeUp}
        className="border-t border-white/5"
      >
        <div
          className="
            max-w-[1200px]
            mx-auto
            px-4 sm:px-6 lg:px-8
            py-4
            flex flex-col md:flex-row
            items-center
            justify-between
            gap-3
            text-center md:text-left
          "
        >
          <p className="text-gray-500 text-[11px] sm:text-[12px]">
            © 2025 Mathematical Research Institute of India. All Rights Reserved.
          </p>

          {/* =========================================
              ADDED:
              Responsive bottom links
          ========================================= */}
          <div className="flex items-center flex-wrap justify-center gap-3 sm:gap-4">
            <motion.a
              href="#"
              whileHover={{ y: -1 }}
              transition={{ duration: 0.2 }}
              className="
                text-gray-500
                hover:text-[#C9960C]
                text-[11px] sm:text-[12px]
                transition-colors duration-300
              "
            >
              Privacy Policy
            </motion.a>

            <span className="text-gray-700 hidden sm:block">|</span>

            <motion.a
              href="#"
              whileHover={{ y: -1 }}
              transition={{ duration: 0.2 }}
              className="
                text-gray-500
                hover:text-[#C9960C]
                text-[11px] sm:text-[12px]
                transition-colors duration-300
              "
            >
              Terms of Use
            </motion.a>
          </div>
        </div>
      </motion.div>
    </motion.footer>
  );
}
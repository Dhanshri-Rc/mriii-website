import { Link } from 'react-router-dom';
import logo from '../assets/edited_logo2.png';

export default function Footer() {
  return (
    <footer className="bg-[#0A0A0A] text-white">
      <div className="max-w-[1200px] mx-auto px-2 py-5">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Brand */}
          <div>
            <div className=" items-center mb-4">
              <div className="w-[200px] h-[120px] ">
                <img src={logo} alt="MRI India Logo" className="w-full h-full object-contain" />
              </div>
             
            </div>
            
           
          </div>

          {/* Quick Links */}
         <div>
  <h4 className="text-[#C9960C] text-[11px] font-bold tracking-[2px] uppercase mb-4">
    QUICK LINKS
  </h4>

  <ul className="grid grid-cols-2 gap-y-2.5 gap-x-6 text-gray-300">

    {[
      { label: "About Us", path: "/about" },
      { label: "Journals", path: "/journals" },
      { label: "Events", path: "/events" },
      { label: "Membership", path: "/membership" },
      { label: "Contact", path: "/contact" },
    ].map((item, index) => (
      <li
        key={item.label}
        className={index === 4 ? "col-span-2" : ""}
      >
        <Link
          to={item.path}
          className=" hover:text-[#C9960C] text-[13px] transition-colors duration-200 flex items-center gap-2"
        >
          <span className="text-[#C9960C] text-xs">›</span>
          {item.label}
        </Link>
      </li>
    ))}

  </ul>
</div>

         

          {/* Contact Us */}
          <div className="text-gray-300">
            <h4 className="text-[#C9960C] text-[11px] font-bold tracking-[2px] uppercase mb-4">CONTACT US</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5  text-[13px]">
                <svg className="w-4 h-4 text-[#C9960C] mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Bengaluru, Karnataka, India – 560012</span>
              </li>
              <li className="flex items-center gap-2.5 text-[13px]">
                <svg className="w-4 h-4 text-[#C9960C] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>info@mriindia.org</span>
              </li>
              <li className="flex items-center gap-2.5  text-[13px]">
                <svg className="w-4 h-4 text-[#C9960C] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>+91 80 1234 5678</span>
              </li>
            </ul>
          </div>

           {/* Important Links */}
          <div>
            <h4 className="text-[#C9960C] text-[11px] font-bold tracking-[2px] uppercase mb-4">FOLLOW US</h4>
             <div className="flex items-center gap-3">
              {/* Facebook */}
              <a href="#" className="w-8 h-8 rounded-full border border-gray-100 flex items-center justify-center hover:border-[#C9960C] hover:text-[#C9960C]  transition-colors duration-200">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24 ">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
                </svg>
              </a>
              {/* LinkedIn */}
              <a href="#" className="w-8 h-8 rounded-full border border-gray-100 flex items-center justify-center hover:border-[#C9960C] hover:text-[#C9960C] transition-colors duration-200">
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/>
                  <circle cx="4" cy="4" r="2"/>
                </svg>
              </a>
              {/* Twitter/X */}
              <a href="#" className="w-8 h-8 rounded-full border border-gray-100 flex items-center justify-center hover:border-[#C9960C] hover:text-[#C9960C] ttransition-colors duration-200">
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              {/* YouTube */}
              <a href="#" className="w-8 h-8  rounded-full border border-gray-100 flex items-center justify-center hover:border-[#C9960C] hover:text-[#C9960C]  transition-colors duration-200">
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.54 6.42a2.78 2.78 0 00-1.94-1.96C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 00-1.94 1.96A29 29 0 001 12a29 29 0 00.46 5.58A2.78 2.78 0 003.4 19.54C5.12 20 12 20 12 20s6.88 0 8.6-.46a2.78 2.78 0 001.94-1.96A29 29 0 0023 12a29 29 0 00-.46-5.58z"/>
                  <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="white"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className=" flex items-center justify-center ">
        <div className="max-w-[1200px] mx-auto px-6 py-1 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-gray-500 text-[12px]">© 2025 Mathematical Research Institute of India. All Rights Reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="text-gray-500 hover:text-[#C9960C] text-[12px] transition-colors ml-28">Privacy Policy</a>
            <span className="text-gray-700">|</span>
            <a href="#" className="text-gray-500 hover:text-[#C9960C] text-[12px] transition-colors">Terms of Use</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

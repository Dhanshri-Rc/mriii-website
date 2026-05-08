import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Mail,
  Lock,
  Eye,
  EyeOff,
  ShieldCheck,
  ArrowRight,
} from 'lucide-react';
import logo from '../assets/edited_logo.png';
import bgImage from '../assets/1bg.png';
import { useNavigate } from 'react-router-dom';
import { loginAdmin } from '../api/authApi';

const container = {
  hidden: { opacity: 0, scale: 0.98 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
      staggerChildren: 0.1,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45 },
  },
};

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const data = await loginAdmin(email, password);

      if (data.success) {
        // Store token and admin info in localStorage
        localStorage.setItem('adminToken', data.token);
        localStorage.setItem('adminData', JSON.stringify(data.admin));
        navigate('/dashboard');
      }
    } catch (err) {
      const msg = err.response?.data?.message || 'Invalid Email or Password';
      setError(msg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="min-h-screen w-full flex items-center justify-center bg-cover bg-center px-4 py-8 "
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="w-full max-w-[750px] h-[500px] bg-white rounded-[10px] shadow-[0_10px_40px_rgba(0,0,0,0.12)] overflow-hidden flex flex-col md:flex-row"
      >
        {/* LEFT SIDE */}
        <motion.div
          variants={fadeUp}
          className="relative md:w-1/2 h-full bg-gradient-to-br from-black via-[#050505] to-[#0A0A0A] px-8 pt-7 pb-7 flex flex-col justify-between overflow-hidden"
        >
          {/* BACKGROUND DOTS */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute bottom-0 left-0 w-full h-full bg-[radial-gradient(#C9960C_1px,transparent_1px)] bg-[length:22px_22px]" />
          </div>

          {/* NETWORK DESIGN */}
          <div className="absolute bottom-0 left-0 w-full h-[52%] opacity-45">
            <svg
              viewBox="0 0 600 300"
              className="w-full h-full"
              fill="none"
            >
              <path
                d="M10 250 L120 170 L210 230 L320 120 L430 180 L560 80"
                stroke="#C9960C"
                strokeWidth="1"
              />
              <path
                d="M120 170 L200 90 L320 120 L400 60 L560 80"
                stroke="#C9960C"
                strokeWidth="1"
              />
              <path
                d="M60 280 L170 220 L280 260 L360 180 L500 220"
                stroke="#C9960C"
                strokeWidth="0.8"
              />

              <circle cx="120" cy="170" r="4" fill="#FFD36A" />
              <circle cx="210" cy="230" r="4" fill="#FFD36A" />
              <circle cx="320" cy="120" r="4" fill="#FFD36A" />
              <circle cx="430" cy="180" r="4" fill="#FFD36A" />
              <circle cx="560" cy="80" r="4" fill="#FFD36A" />
              <circle cx="360" cy="180" r="4" fill="#FFD36A" />
            </svg>
          </div>

          {/* LOGO */}
          <motion.div variants={fadeUp} className="relative z-10">
            <img
              src={logo}
              alt="logo"
              className="w-[245px] object-contain"
            />

            <p className="text-[#C9960C] text-[11px] mt-[-12px] ml-[140px] tracking-[0.3px]">
              Admin Portal
            </p>
          </motion.div>

          {/* TEXT */}
          <motion.div
            variants={fadeUp}
            className="relative z-10 py-28"
          >
            <h1 className="text-white text-[20px]   font-serif font-semibold">
              Welcome to <br />
              <span className="text-[#D4A017]">
                MRI India Admin Panel
              </span>
            </h1>

            <div className="w-[48px] h-[2px] bg-[#C9960C] mt-4 mb-4"></div>

            <p className="text-gray-300 text-[13px] leading-[25px] max-w-[255px]">
              Manage journals, events, memberships, and other content
              seamlessly through our secure admin portal.
            </p>
          </motion.div>
        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div
          variants={fadeUp}
          className="md:w-1/2 h-full bg-[#FAFAFA] px-10 py-4 flex items-center"
        >
          <form onSubmit={handleLogin} className="w-full">
            {/* TITLE */}
            <motion.div variants={fadeUp}>
              <h2 className="text-[28px] font-serif font-semibold text-[#111]">
                Admin Login
              </h2>

              <div className="w-[45px] h-[3px] bg-[#C9960C] mt-2 mb-3 rounded-full"></div>

              <p className="text-[11px] text-gray-600 mb-4">
                Please enter your credentials to access the admin panel.
              </p>
            </motion.div>

            {/* EMAIL */}
            <motion.div variants={fadeUp} className="mb-3">
              <label className="text-[13px] font-semibold mb-2 block text-[#111]">
                Email Address
              </label>

              <div className="h-[46px] border border-[#E4E4E4] rounded-[7px] bg-white flex items-center px-3 gap-2.5 shadow-sm">
                <Mail size={18} className="text-gray-500" />

                <input
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 outline-none text-[13px] text-[#111] placeholder:text-gray-400 bg-transparent"
                />
              </div>
            </motion.div>

            {/* PASSWORD */}
            <motion.div variants={fadeUp} className="mb-3">
              <label className="text-[13px] font-semibold mb-2 block text-[#111]">
                Password
              </label>

              <div className="h-[46px] border border-[#E4E4E4] rounded-[7px] bg-white flex items-center px-3 gap-2.5 shadow-sm">
                <Lock size={18} className="text-gray-500" />

                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="flex-1 outline-none text-[13px] text-[#111] placeholder:text-gray-400 bg-transparent"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="text-gray-500"
                >
                  {showPassword ? (
                    <EyeOff size={18} />
                  ) : (
                    <Eye size={18} />
                  )}
                </button>
              </div>
            </motion.div>

            {/* REMEMBER */}
            <motion.div
              variants={fadeUp}
              className="flex justify-between items-center mb-4 text-[13px]"
            >
              <label className="flex items-center gap-2 text-[#333] cursor-pointer">
                <input
                  type="checkbox"
                  className="accent-[#C9960C] w-[14px] h-[14px]"
                />
                Remember me
              </label>

              <span className="text-[#C9960C] cursor-pointer hover:underline">
                Forgot Password?
              </span>
            </motion.div>

            {/* ERROR MESSAGE */}
            {error && (
              <motion.p
                variants={fadeUp}
                className="text-red-500 text-[12px] mb-3 text-center"
              >
                {error}
              </motion.p>
            )}

            {/* LOGIN BUTTON */}
           <motion.button
  type="submit"
  variants={fadeUp}
  whileHover={{ scale: 1.02 }}
  whileTap={{ scale: 0.98 }}
  disabled={loading}
  className="w-full h-[46px] rounded-[7px] bg-gradient-to-r from-[#C9960C] to-[#B8860B] text-white text-[14px] font-semibold mb-3 flex items-center justify-center gap-2 shadow-md disabled:opacity-70"
>
  {loading ? 'Logging in...' : 'LOGIN'}
  {!loading && <ArrowRight size={18} />}
</motion.button>

            {/* DIVIDER */}
            <motion.div
              variants={fadeUp}
              className="flex items-center gap-3 mb-3"
            >
              <div className="flex-1 h-px bg-[#DDD]" />
              <span className="text-[12px] text-gray-500">OR</span>
              <div className="flex-1 h-px bg-[#DDD]" />
            </motion.div>

            {/* SECOND BUTTON */}
            <motion.button
              type="button"
              variants={fadeUp}
              className="w-full h-[46px] rounded-[7px] border border-[#C9960C] text-[#C9960C] text-[13px] flex items-center justify-center gap-2 bg-white hover:bg-gradient-to-r from-[#C9960C] to-[#B8860B] hover:text-white transition-colors duration-300 shadow-sm"
            >
              <ShieldCheck size={18} />
              Secure Admin Access
            </motion.button>

            {/* STATIC LOGIN INFO */}
            {/* <div className="mt-5 text-[11px] text-gray-500 leading-[20px]">
              <p>
                <span className="font-semibold">Admin Email:</span>{' '}
                admin@gmail.com
              </p>

              <p>
                <span className="font-semibold">Password:</span> admin@123
              </p>
            </div> */}
          </form>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Login;
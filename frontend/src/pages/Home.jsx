import { Link } from "react-router-dom";
import logo3d from "../assets/1bg.png";
import bg2 from "../assets/uni.png";
import globe from "../assets/globe2.png";

import {
  ChevronRight,
  Award,
  Users,
  BookOpen,
  CalendarDays,
  TrendingUp,
} from "lucide-react";

import { motion } from "framer-motion";

/* ================= FEATURES ================= */

const features = [
  {
    icon: <Award className="w-8 h-8 stroke-[1.5]" />,
    title: "Research Excellence",
    desc: "Promoting high-quality mathematical research",
  },
  {
    icon: <Users className="w-8 h-8 stroke-[1.5]" />,
    title: "Global Collaboration",
    desc: "Building connections across the world",
  },
  {
    icon: <BookOpen className="w-8 h-8 stroke-[1.5]" />,
    title: "Knowledge Sharing",
    desc: "Through publications, events & workshops",
  },
  {
    icon: <CalendarDays className="w-8 h-8 stroke-[1.5]" />,
    title: "Academic Events",
    desc: "Conferences, seminars & training programs",
  },
  {
    icon: <TrendingUp className="w-8 h-8 stroke-[1.5]" />,
    title: "Support & Growth",
    desc: "Nurturing the next generation of mathematicians",
  },
];

/* ================= ANIMATION ================= */

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const item = {
  hidden: { opacity: 0, y: 20, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function Home() {
  return (
    <div className="overflow-x-hidden">

      {/* HERO */}
      <section
        className="relative bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${logo3d})` }}
      >
        <div className="absolute inset-0 bg-white/80"></div>

        <div className="relative max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col lg:flex-row items-center gap-10">
          
          {/* LEFT */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="visible"
            className="w-full lg:w-1/2"
          >
            <motion.p variants={item} className="text-[#C9960C] text-[12px] font-semibold mb-3 font-serif">
              WELCOME TO MRI INDIA
            </motion.p>

            <motion.h1
              variants={item}
              className="text-[28px] sm:text-[34px] md:text-[40px] leading-tight font-serif text-[#111] mb-4"
            >
              Advancing <br /> Mathematical Research. <br />
              <span className="text-[#C9960C]">Inspiring Innovation.</span>
            </motion.h1>

            <motion.div variants={item} className="w-10 h-[2px] bg-[#C9960C] mb-6"></motion.div>

            <motion.p variants={item} className="text-gray-600 text-[14px] mb-8">
              The Mathematical Research Institute of India promotes excellence in mathematical research, fosters collaboration, and supports the growth of the mathematics community.
            </motion.p>

            <motion.div variants={item} className="flex flex-wrap gap-3">
              <Link
                to="/about"
                className="flex items-center gap-2 bg-[#C9960C] text-white text-[12px] px-4 py-3 rounded hover:bg-[#b37a0a] transition-colors duration-200 uppercase font-serif"
              >
                EXPLORE MORE <ChevronRight className="w-4 h-4" />
              </Link>

              <Link
                to="/membership"
                className="flex items-center gap-2 border border-[#C9960C] text-[12px] px-4 py-3 rounded hover:bg-[#C9960C] hover:text-white transition-colors duration-200 uppercase font-serif"
              >
                BECOME A MEMBER <ChevronRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            className="w-full lg:w-1/2 flex justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <motion.img
              src={globe}
              alt="globe"
              className="w-[250px] sm:w-[320px] md:w-[400px] lg:w-[450px]"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
            />
          </motion.div>
        </div>
      </section>

      {/* FEATURES */}
     <section className="py-6">
  <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
    <div className="bg-white border rounded-[14px] shadow-sm overflow-hidden">

      <motion.div
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.1,
            },
          },
        }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 divide-y sm:divide-y-0 sm:divide-x"
      >

        {features.map((f, i) => (
          <motion.div
            key={i}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: {
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.5,
                  ease: "easeOut",
                },
              },
            }}

            whileHover={{
              y: -6,
              transition: { duration: 0.25, ease: "easeOut" },
            }}

            className="flex flex-col items-center text-center p-4 cursor-pointer"
          >

            {/* ICON */}
            <motion.div
              className="mb-3 text-[#C9960C]"
              whileHover={{
                scale: 0.9,
                rotate: -3,
              }}
              transition={{ type: "spring", stiffness: 250 }}
            >
              {f.icon}
            </motion.div>

            {/* TITLE */}
            <motion.p
              className="text-[15px] font-semibold"
              whileHover={{ opacity: 0.9 }}
            >
              {f.title}
            </motion.p>

            {/* DESC */}
            <motion.p
              className="text-[13px] text-gray-500"
              whileHover={{ opacity: 0.8 }}
            >
              {f.desc}
            </motion.p>

            {/* HOVER SHADOW LAYER */}
            <motion.div
              className="absolute inset-0 rounded-[14px] pointer-events-none"
              initial={{ opacity: 0 }}
              whileHover={{
                opacity: 1,
                boxShadow: "0px 12px 30px rgba(0,0,0,0.08)",
              }}
              transition={{ duration: 0.25 }}
            />

          </motion.div>
        ))}

      </motion.div>

    </div>
  </div>
</section>

      {/* ABOUT */}
   <section className="bg-[#f7f7f7] py-10">
  <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
    <div className="flex flex-col lg:flex-row gap-x-6 items-center">

      {/* LEFT */}
      <motion.div
        className="w-full lg:w-1/2"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.p variants={item} className="text-[#C9960C] text-[12px] mb-2">
          ABOUT MRI INDIA
        </motion.p>

        <motion.div
  initial="hidden"
  whileInView="visible"
  whileHover="hover"
  viewport={{ once: true }}
  className="inline-block"
>
  <motion.h2
    variants={item}
    className="text-[26px] sm:text-[30px] mb-2 relative inline-block"
  >
    A Hub for Mathematical Advancement
  </motion.h2>

  {/* GOLD LINE */}
  <motion.div
    className="h-[3px] w-[50px] bg-[#C9960C] origin-left mb-2"
    variants={{
      hidden: { scaleX: 0 },
      visible: { scaleX: 1 },
      hover: { scaleX: 1.1 },
    }}
    transition={{
      duration: 0.6,
      ease: "easeOut",
    }}
  />
</motion.div>

        <motion.p variants={item} className="text-gray-600 mb-1 text-[14px]">
          MRI India is dedicated to the advancement of mathematical sciences through research, collaboration, and dissemination of knowledge.
        </motion.p>

        <motion.p variants={item} className="text-gray-600 mb-4 text-[14px]">
          We aim to create a vibrant community of mathematicians and researchers working together to address challenges.
        </motion.p>

        <Link
          to="/about"
          className="inline-flex items-center gap-2 bg-[#C9960C] text-white px-4 py-2 rounded uppercase font-serif text-[12px] hover:bg-[#b37a0a] transition-colors duration-200"
        >
          Learn  More  About  Us <ChevronRight className="w-4 h-4" />
        </Link>
      </motion.div>

      {/* RIGHT IMAGE */}
      <motion.div
        className="w-full lg:w-1/2 flex justify-center lg:justify-end relative overflow-visible"
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >

        {/* GOLD SHAPE */}
        <div className="absolute left-1 sm:left-6 top-[-12px] w-12 sm:w-20 h-10 sm:h-20 bg-[#C9960C] rounded-xl "></div>

        {/* IMAGE WRAPPER */}
        <motion.div
          className="relative z-10 overflow-hidden rounded-xl w-full max-w-[510px]"
          initial={{ scale: 1.05, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          whileHover="hover"
        >
          {/* IMAGE */}
          <motion.img
            src={bg2}
            alt="MRI"
            className="w-full h-[180px] sm:h-[200px] object-cover rounded-xl shadow-lg"
            variants={{
              hover: { scale: 1.06 },
            }}
            transition={{ duration: 0.5 }}
          />

          {/* LIGHT SWEEP */}
          <motion.div
            className="absolute inset-0 pointer-events-none"
            initial={{ x: "-100%" }}
            variants={{ hover: { x: "100%" } }}
            transition={{ duration: 1 }}
            style={{
              background:
                "linear-gradient(120deg, transparent 30%, rgba(255,255,255,0.35), transparent 70%)",
            }}
          />

          {/* SHADOW DEPTH */}
          <motion.div
            className="absolute inset-0 rounded-xl pointer-events-none"
            variants={{
              hover: {
                boxShadow: "0px 20px 40px rgba(0,0,0,0.15)",
              },
            }}
          />
        </motion.div>

        {/* ✅ DOTTED PATTERN (FIXED & VISIBLE) */}
        <div className="absolute right-[-4px] sm:right-[-30px] top-2 grid grid-cols-6 gap-2 opacity-50 z-10 pointer-events-none">
          {[...Array(108)].map((_, i) => (
            <span
              key={i}
              className="w-[3px] h-[3px] bg-[#C9960C] rounded-full"
            ></span>
          ))}
        </div>

      </motion.div>

    </div>
  </div>
</section>
    </div>
  );
}
import { Link } from "react-router-dom";
import Breadcrumb from "../components/Breadcrumb";
import bg1 from "../assets/bg 5.png";

import {
  Globe,
  BookOpen,
  Calendar,
  Users,
  Trophy,
  FileText,
  CreditCard,
  Mail,
  UserCheck,
  Headphones,
  GraduationCap,
  User,
  Building2,
  Gem,
} from "lucide-react";

/* =========================
   ADDED: Framer Motion
========================= */
import { motion } from "framer-motion";

/* =========================
   ADDED: Animation Variants
========================= */
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.08,
      duration: 0.55,
      ease: "easeOut",
    },
  }),
};

/* ---------------- PLANS ---------------- */
const plans = [
  {
    title: "Student Member",
    desc: "For undergraduate and postgraduate students with an interest in mathematics.",
    price: "₹500",
    period: "/ year",
    icon: GraduationCap,
    popular: false,
    benefits: [
      "Access to events & seminars",
      "Student workshops",
      "Newsletter subscription",
      "Networking opportunities",
    ],
  },
  {
    title: "Regular Member",
    desc: "For researchers, academicians and professionals in the field of mathematics.",
    price: "₹1,500",
    period: "/ year",
    icon: User,
    popular: true,
    benefits: [
      "All Student benefits",
      "Access to journals",
      "Discounts on events",
      "Participation in committees",
      "Voting rights",
    ],
  },
  {
    title: "Institutional Member",
    desc: "For academic and research institutions, departments, and organizations.",
    price: "₹5,000",
    period: "/ year",
    icon: Building2,
    popular: false,
    benefits: [
      "All Regular benefits",
      "Multiple membership",
      "Institutional recognition",
      "Collaboration opportunities",
      "Customized support",
    ],
  },
  {
    title: "Life Member",
    desc: "For individuals who wish to make a long-term commitment to MRI India.",
    price: "₹25,000",
    period: "One-time payment",
    icon: Gem,
    popular: false,
    benefits: [
      "All Regular benefits",
      "Lifetime membership",
      "Recognition on website",
      "Invitation to special events",
      "Priority support",
    ],
  },
];

export default function Membership() {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={fadeUp}
    >
      {/* ================= HERO ================= */}
      <section className="relative py-20 bg-[#fdf8f0] overflow-hidden px-10">
        {/* ADDED: smooth background reveal */}
        <motion.img
          initial={{ opacity: 0, scale: 1.03 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          src={bg1}
          alt="background pattern"
          className="absolute inset-0 min-w-full h-full object-cover pointer-events-none"
        />

        <div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 items-center gap-10">
          <motion.div
            variants={fadeUp}
            custom={1}
            className="max-w-xl"
          >
            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:text-4xl text-3xl font-serif text-gray-900 mb-4"
            >
              Membership
            </motion.h1>

            {/* ADDED: underline animation */}
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: 48 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="h-[2px] bg-[#c9a24a] mb-6"
            />

            <p className="text-gray-600 text-[14px] leading-relaxed mb-4">
              Join the Mathematical Research Institute of India (MRI India) and
              be part of a vibrant community dedicated to advancing mathematical
              sciences.
            </p>

            <p className="text-gray-600 text-[15px] leading-relaxed">
              Whether you are a student, researcher, educator, or an enthusiast,
              there is a place for you in our community.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ================= BREADCRUMB ================= */}
      <motion.div
        variants={fadeUp}
        custom={2}
        className="bg-white py-3 px-16"
      >
        <div className="max-w-7xl mx-auto">
          <Breadcrumb items={[{ label: "Membership", path: "/membership" }]} />
        </div>
      </motion.div>

      {/* ================= PLANS ================= */}
      <section className="py-6 bg-white px-10">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            variants={fadeUp}
            custom={3}
            className="text-center mb-14"
          >
            <h2 className="text-3xl font-medium text-gray-900 mb-3">
              Membership Categories
            </h2>

            {/* ADDED: animated underline */}
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: 48 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="h-[2px] bg-[#c9a24a] mx-auto mb-4"
            />

            <p className="text-gray-500 text-sm">
              Choose the membership that best suits you.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {plans.map((plan, i) => {
              const Icon = plan.icon;

              return (
                <motion.div
                  key={i}
                  /* ADDED: card entrance */
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: i * 0.08,
                  }}
                  /* ADDED: hover animation */
                  whileHover={{
                    y: -8,
                    scale: 1.015,
                    boxShadow: "0 18px 40px rgba(0,0,0,0.08)",
                  }}
                  className={`relative rounded-xl bg-white p-7 flex flex-col transition-all duration-300
                  ${
                    plan.popular
                      ? "border border-[#c9a24a] shadow-lg scale-[1.03]"
                      : "shadow-sm hover:shadow-md"
                  }`}
                >
                  {plan.popular && (
                    <motion.div
                      initial={{ opacity: 0, y: -8 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                      className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#c9a24a] text-white text-[10px] px-4 py-1 font-semibold"
                    >
                      MOST POPULAR
                    </motion.div>
                  )}

                  {/* ADDED: icon hover */}
                  <motion.div
                    whileHover={{ rotate: 2, scale: 1.08 }}
                    transition={{ duration: 0.25 }}
                    className="w-14 h-14 flex items-center justify-center rounded-full border border-[#c9a24a] text-[#c9a24a] mb-5"
                  >
                    <Icon className="w-6 h-6" />
                  </motion.div>

                  <h3 className="text-lg font-semibold text-gray-900 mb-2 transition-colors duration-300 hover:text-[#c9a24a]">
                    {plan.title}
                  </h3>

                  <p className="text-gray-500 text-sm mb-5">{plan.desc}</p>

                  <ul className="space-y-3 mb-6 flex-1">
                    {plan.benefits.map((b, j) => (
                      <motion.li
                        key={j}
                        whileHover={{ x: 3 }}
                        transition={{ duration: 0.2 }}
                        className="flex gap-2 text-gray-600 text-sm"
                      >
                        <span className="text-[#c9a24a]">✔</span>
                        {b}
                      </motion.li>
                    ))}
                  </ul>

                  <div className="mb-5">
                    <span className="text-2xl font-semibold text-[#c9a24a]">
                      {plan.price}
                    </span>

                    <span className="text-gray-400 text-sm ml-1">
                      {plan.period}
                    </span>
                  </div>

                  {/* ADDED: button hover */}
                  <motion.button
                    whileHover={{
                      scale: 1.03,
                      boxShadow: "0 8px 20px rgba(201,162,74,0.25)",
                    }}
                    whileTap={{ scale: 0.97 }}
                    transition={{ duration: 0.2 }}
                    className="w-full py-3 text-xs font-semibold uppercase bg-[#c9a24a] text-white rounded-md hover:bg-[#a8822f] transition-all duration-300"
                  >
                    JOIN NOW
                  </motion.button>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= WHY JOIN ================= */}
      <section className="py-6 bg-white px-10">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            variants={fadeUp}
            custom={4}
            className="bg-[#faf7f2] rounded-2xl px-8 py-10"
          >
            <h2 className="text-2xl font-medium text-gray-900 mb-2">
              Why Join MRI India?
            </h2>

            {/* ADDED: animated underline */}
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: 40 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="h-[2px] bg-[#c9a24a]"
            />

            <div className="grid grid-cols-1 md:grid-cols-5 text-center divide-y md:divide-y-0 md:divide-x divide-gray-200">
              {[
                {
                  icon: Globe,
                  text: "Be part of a national community of mathematicians and researchers.",
                },
                {
                  icon: BookOpen,
                  text: "Access high-quality research through our journals and publications.",
                },
                {
                  icon: Calendar,
                  text: "Participate in conferences, workshops and colloquia at member rates.",
                },
                {
                  icon: Users,
                  text: "Collaborate, network and exchange ideas with peers across the world.",
                },
                {
                  icon: Trophy,
                  text: "Contribute to the advancement of mathematics and inspire future generations.",
                },
              ].map((item, i) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.45,
                      delay: i * 0.06,
                    }}
                    whileHover={{ y: -4 }}
                    className="px-6 py-4 flex flex-col items-center transition-all duration-300"
                  >
                    <motion.div
                      whileHover={{ scale: 1.08 }}
                      transition={{ duration: 0.25 }}
                    >
                      <Icon className="w-8 h-8 text-[#c9a24a] mb-4" />
                    </motion.div>

                    <p className="text-gray-600 text-sm leading-relaxed">
                      {item.text}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================= HOW TO JOIN ================= */}
      <section className="py-6 bg-white px-10">
        <div className="max-w-7xl mx-auto px-6">
          {/* HEADER */}
          <motion.h2
            variants={fadeUp}
            custom={5}
            className="text-2xl font-medium text-gray-900 mb-2"
          >
            How to Join
          </motion.h2>

          {/* ADDED: animated underline */}
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 40 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="h-[2px] bg-[#c9a24a] mb-12"
          />

          {/* STEPS GRID */}
          <div className="grid grid-cols-1 md:grid-cols-5 items-start gap-10">
            {[
              {
                icon: FileText,
                title: "Fill the Form",
                desc: "Complete the online membership application form.",
              },
              {
                icon: CreditCard,
                title: "Make Payment",
                desc: "Choose your membership type and make the payment securely.",
              },
              {
                icon: Mail,
                title: "Receive Confirmation",
                desc: "You will receive an email confirmation with your membership details.",
              },
              {
                icon: UserCheck,
                title: "Enjoy Benefits",
                desc: "Start enjoying the benefits and opportunities as a member.",
              },
            ].map((step, i) => {
              const Icon = step.icon;

              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.45,
                    delay: i * 0.08,
                  }}
                  whileHover={{ y: -4 }}
                  className="relative flex flex-col items-center text-center transition-all duration-300"
                >
                  {/* ICON WITH BACKGROUND CIRCLE */}
                  <div className="relative mb-6">
                    {/* OUTER CIRCLE */}
                    <motion.div
                      whileHover={{
                        scale: 1.06,
                        boxShadow: "0 10px 25px rgba(201,162,74,0.18)",
                      }}
                      transition={{ duration: 0.25 }}
                      className="w-20 h-20 rounded-full bg-[#faf7f2] flex items-center justify-center"
                    >
                      <Icon className="w-8 h-8 text-[#c9a24a]" />
                    </motion.div>

                    {/* STEP NUMBER */}
                    <motion.div
                      whileHover={{ scale: 1.08 }}
                      className="absolute -top-2 -left-7 w-8 h-8 rounded-full bg-[#c9a24a] text-white text-xs font-semibold flex items-center justify-center shadow"
                    >
                      {i + 1}
                    </motion.div>
                  </div>

                  {/* TITLE */}
                  <h4 className="font-semibold text-gray-900 text-sm mb-2">
                    {step.title}
                  </h4>

                  {/* DESC */}
                  <p className="text-gray-500 text-xs leading-relaxed max-w-[200px]">
                    {step.desc}
                  </p>

                  {/* ARROW */}
                  {i < 3 && (
                    <motion.div
                      animate={{ x: [0, 4, 0] }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="hidden md:block absolute top-[42px] right-[-35px] text-[#c9a24a] text-xl"
                    >
                      →
                    </motion.div>
                  )}
                </motion.div>
              );
            })}

            {/* NEED HELP CARD */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.25 }}
              whileHover={{
                y: -6,
                boxShadow: "0 18px 40px rgba(0,0,0,0.08)",
              }}
              className="bg-[#faf7f2] rounded-xl p-6 text-center shadow-md border border-gray-100 transition-all duration-300"
            >
              <motion.div
                whileHover={{ scale: 1.08 }}
                className="w-16 h-10 mx-auto rounded-full bg-white flex items-center justify-center"
              >
                <Headphones className="w-7 h-7 text-[#c9a24a]" />
              </motion.div>

              <h4 className="font-semibold text-gray-900 text-sm mb-2">
                Need Help?
              </h4>

              <p className="text-gray-500 text-xs mb-5">
                Contact our membership team for any queries.
              </p>

              <motion.div
                whileHover={{
                  scale: 1.04,
                  boxShadow: "0 8px 20px rgba(201,162,74,0.2)",
                }}
                whileTap={{ scale: 0.97 }}
              >
                <Link
                  to="/contact"
                  className="inline-block bg-[#c9a24a] hover:bg-[#a8822f] text-white text-xs font-semibold px-5 py-2.5 rounded-md transition-all duration-300"
                >
                  CONTACT US
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
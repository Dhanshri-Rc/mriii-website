/* =========================================
   ADDED: Framer Motion Import
========================================= */
import { motion } from "framer-motion";

import { useState } from "react";
import Breadcrumb from "../components/Breadcrumb";
import bg6 from "../assets/bg6.png";

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
      ease: "easeOut",
    },
  },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function ContactUs() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    agree: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent! We will get back to you soon.");
  };

  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-white">
        {/* BACKGROUND IMAGE */}
        <motion.img
          /* ADDED: Smooth hero image entrance */
          initial={{ scale: 1.04, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          src={bg6}
          alt="background"
          className="absolute w-full h-[260px] sm:h-[320px] lg:h-[400px] object-cover"
        />

        {/* OPTIONAL OVERLAY (for readability) */}
        <div className="absolute bg-white/80"></div>

        {/* CONTENT */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="relative z-20 h-[260px] sm:h-[320px] lg:h-[400px] flex items-center lg:px-16 px-6"
        >
          <div className="max-w-[600px]"></div>
        </motion.div>
      </section>

      {/* Breadcrumb */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="bg-white border-t border-[#E5E5E5]"
      >
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 py-4 sm:py-6">
          <Breadcrumb items={[{ label: "Contact Us" }]} />
        </div>
      </motion.div>

      {/* Heading */}
      <section className="bg-white">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-4 text-center px-4"
        >
          <h1 className="text-3xl sm:text-4xl font-serif text-[#1A1A1A]">
            Contact Us
          </h1>

          {/* centered line */}
          <div className="w-12 h-[2px] bg-[#C9960C] mx-auto mt-3 mb-5"></div>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-[800px] mx-auto px-4 sm:px-6 text-center mb-4"
        >
          <p className="text-gray-600 text-[13px] sm:text-[14px] leading-relaxed">
            We'd love to hear from you. Reach out to us for any inquiries,
            <br className="hidden sm:block" />
            collaborations, feedback, or general information.
          </p>
        </motion.div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-6 bg-white">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4"
          >
            {[
              {
                icon: (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                ),
                title: "Address",
                lines: [
                  "Mathematical Research Institute of India",
                  "Survey No. 8, Hesaraghatta Hobli,",
                  "Bengaluru, Karnataka – 560012, India",
                ],
              },
              {
                icon: (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                ),
                title: "Email",
                lines: ["info@mriindia.org", "support@mriindia.org"],
              },
              {
                icon: (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                ),
                title: "Phone",
                lines: ["+91 80 1234 5678", "+91 80 1234 5679"],
              },
              {
                icon: (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                ),
                title: "Office Hours",
                lines: ["Monday – Friday", "9:30 AM – 5:30 PM IST"],
              },
            ].map((card, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                whileHover={{
                  y: -5,
                  scale: 1.02,
                  boxShadow: "0 15px 35px rgba(0,0,0,0.08)",
                }}
                transition={{ duration: 0.3 }}
                className="p-5 rounded-xl flex flex-col items-center text-center min-h-[180px] shadow-md transition-all duration-300 bg-white"
              >
                {/* ICON */}
                <div className="mb-4 transition-transform duration-300 hover:scale-110">
                  <svg
                    className="w-10 h-10 text-[#C9960C]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    {card.icon}
                  </svg>
                </div>

                {/* TITLE */}
                <h3 className="font-semibold text-[15px] text-[#1A1A1A] mb-2">
                  {card.title}
                </h3>

                {/* TEXT */}
                <div className="space-y-1">
                  {card.lines.map((line, li) => (
                    <p
                      key={li}
                      className="text-gray-700 text-[12px] leading-relaxed"
                    >
                      {line}
                    </p>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Form + Map */}
      <section className="py-8 sm:py-10 bg-white">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <div className="flex flex-col xl:flex-row gap-8">
            {/* FORM BOX */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{
                y: -3,
                boxShadow: "0 15px 35px rgba(0,0,0,0.08)",
              }}
              transition={{ duration: 0.3 }}
              className="flex-1 shadow-md rounded-xl p-5 sm:p-6 lg:p-8 transition-all duration-300 bg-white"
            >
              <h2 className="font-serif text-[22px] sm:text-[24px] text-[#1A1A1A] mb-2">
                Send Us a Message
              </h2>

              <div className="w-8 h-[2px] bg-[#C9960C] mb-6"></div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="name"
                    placeholder="Full Name *"
                    value={form.name}
                    onChange={handleChange}
                    required
                    className="border border-[#E5E5E5] px-4 py-3 text-[13px] focus:outline-none focus:border-[#C9960C] focus:shadow-[0_0_0_4px_rgba(201,150,12,0.08)] w-full rounded-md transition-all duration-300"
                  />

                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address *"
                    value={form.email}
                    onChange={handleChange}
                    required
                    className="border border-[#E5E5E5] px-4 py-3 text-[13px] focus:outline-none focus:border-[#C9960C] focus:shadow-[0_0_0_4px_rgba(201,150,12,0.08)] w-full rounded-md transition-all duration-300"
                  />
                </div>

                <input
                  type="text"
                  name="subject"
                  placeholder="Subject *"
                  value={form.subject}
                  onChange={handleChange}
                  required
                  className="border border-[#E5E5E5] px-4 py-3 text-[13px] focus:outline-none focus:border-[#C9960C] focus:shadow-[0_0_0_4px_rgba(201,150,12,0.08)] w-full rounded-md transition-all duration-300"
                />

                <textarea
                  name="message"
                  placeholder="Message *"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="border border-[#E5E5E5] px-4 py-3 text-[13px] focus:outline-none focus:border-[#C9960C] focus:shadow-[0_0_0_4px_rgba(201,150,12,0.08)] w-full resize-none rounded-md transition-all duration-300"
                />

                <div className="flex items-start gap-2">
                  <input
                    type="checkbox"
                    name="agree"
                    checked={form.agree}
                    onChange={handleChange}
                    className="mt-1 accent-[#C9960C]"
                    id="agree"
                  />

                  <label
                    htmlFor="agree"
                    className="text-[12px] text-gray-600 leading-relaxed"
                  >
                    I agree to the{" "}
                    <a
                      href="#"
                      className="text-[#C9960C] hover:underline transition-all duration-300"
                    >
                      Privacy Policy
                    </a>{" "}
                    and{" "}
                    <a
                      href="#"
                      className="text-[#C9960C] hover:underline transition-all duration-300"
                    >
                      Terms of Use
                    </a>
                    .
                  </label>
                </div>

                <button
                  type="submit"
                  className="btn-gold font-serif rounded-md hover:scale-[1.03] active:scale-[0.98] hover:shadow-lg transition-all duration-300"
                >
                  SEND MESSAGE →
                </button>
              </form>
            </motion.div>

            {/* MAP BOX */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{
                y: -3,
                boxShadow: "0 15px 35px rgba(0,0,0,0.08)",
              }}
              transition={{ duration: 0.3 }}
              className="w-full xl:w-[500px] shadow-md rounded-xl flex flex-col overflow-hidden transition-all duration-300"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.0!2d77.497!3d13.090!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDA1JzI0LjAiTiA3N8KwMjknNDkuMiJF!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
                className="w-full h-[300px] sm:h-[400px] xl:flex-1"
                style={{ border: 0 }}
                loading="lazy"
                title="MRI India Location"
              ></iframe>
            </motion.div>
          </div>
        </div>
      </section>

      {/* General Inquiries Banner */}
      <section className="py-2 mb-8">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            whileHover={{
              y: -3,
              boxShadow: "0 15px 35px rgba(0,0,0,0.08)",
            }}
            transition={{ duration: 0.3 }}
            className="shadow-md rounded-xl bg-[#f9f7f0] p-5 sm:p-6 flex flex-col lg:flex-row items-center justify-between gap-6 transition-all duration-300"
          >
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5 sm:gap-8 text-center sm:text-left">
              <div className="w-14 h-14 flex items-center justify-center transition-transform duration-300 hover:scale-110">
                <svg
                  className="w-16 h-24 text-[#C9960C]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>

              <div>
                <h3 className="font-semibold text-[16px] text-[#1A1A1A] mb-1 font-serif">
                  General Inquiries
                </h3>

                <p className="text-gray-700 text-[12px] sm:text-[13px] leading-relaxed">
                  For general questions and information, please email us at{" "}
                  <br className="hidden sm:block" />
                  info@mriindia.org. We will get back to you as soon as
                  possible.
                </p>
              </div>
            </div>

            <button className="font-serif border border-[#C9960C] rounded-md text-[#C9960C] hover:bg-[#C9960C] hover:text-white hover:scale-[1.03] active:scale-[0.98] text-[13px] font-bold tracking-wider px-10 sm:px-16 lg:px-20 py-2.5 transition-all duration-300 shadow-sm hover:shadow-lg whitespace-nowrap">
              FAQS →
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
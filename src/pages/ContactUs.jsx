import { useState } from "react";
import Breadcrumb from "../components/Breadcrumb";
import bg6 from "../assets/bg6.png";

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
        <img
          src={bg6}
          alt="background"
          className="absolute  w-full h-[400px] "
        />

        {/* OPTIONAL OVERLAY (for readability) */}
        <div className="absolute bg-white/80"></div>

        {/* CONTENT */}
        <div className="relative z-20 h-[400px] flex items-center lg:px-16 px-6">
          <div className="max-w-[600px]"></div>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="bg-white border-t border-[#E5E5E5]">
        <div className="max-w-[1200px] mx-auto px-6 py-6">
          <Breadcrumb items={[{ label: "Contact Us" }]} />
        </div>
      </div>
<section className=" bg-white">
  <div className="mb-4 text-center">
    <h1 className="text-4xl font-serif text-[#1A1A1A]">
      Contact Us
    </h1>

    {/* centered line */}
    <div className="w-12 h-[2px] bg-[#C9960C] mx-auto mt-3 mb-5"></div>
  </div>

  <div className="max-w-[800px] mx-auto px-6 text-center mb-4">
    <p className="text-gray-600 text-[14px] leading-relaxed">
      We'd love to hear from you. Reach out to us for any inquiries,
      <br className="hidden sm:block" />
      collaborations, feedback, or general information.
    </p>
  </div>
</section>
      {/* Contact Info Cards */}
     <section className="py-6 bg-white ">
  <div className="max-w-[1200px] mx-auto px-6">
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
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
        <div
          key={i}
          className=" p-4 rounded-lg flex flex-col items-center text-center min-h-[160px] shadow-md transition"
        >
          {/* ICON */}
          <div className="mb-4">
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
        </div>
      ))}
    </div>
  </div>
</section>

      {/* Form + Map */}
     <section className="py-10 bg-white">
  <div className="max-w-[1200px] mx-auto px-6">
    <div className="flex flex-col lg:flex-row gap-8">

      {/* FORM BOX */}
      <div className="flex-1 shadow-md rounded-lg p-6 lg:p-8">
        <h2 className="font-serif text-[24px] text-[#1A1A1A] mb-2">
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
              className="border border-[#E5E5E5] px-4 py-3 text-[13px] focus:outline-none focus:border-[#C9960C] w-full"
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address *"
              value={form.email}
              onChange={handleChange}
              required
              className="border border-[#E5E5E5] px-4 py-3 text-[13px] focus:outline-none focus:border-[#C9960C] w-full"
            />
          </div>

          <input
            type="text"
            name="subject"
            placeholder="Subject *"
            value={form.subject}
            onChange={handleChange}
            required
            className="border border-[#E5E5E5] px-4 py-3 text-[13px] focus:outline-none focus:border-[#C9960C] w-full"
          />

          <textarea
            name="message"
            placeholder="Message *"
            value={form.message}
            onChange={handleChange}
            required
            rows={6}
            className="border border-[#E5E5E5] px-4 py-3 text-[13px] focus:outline-none focus:border-[#C9960C] w-full resize-none"
          />

          <div className="flex items-start gap-2">
            <input
              type="checkbox"
              name="agree"
              checked={form.agree}
              onChange={handleChange}
              className="mt-1"
              id="agree"
            />
            <label htmlFor="agree" className="text-[12px] text-gray-600">
              I agree to the{" "}
              <a href="#" className="text-[#C9960C] hover:underline">
                Privacy Policy
              </a>{" "}
              and{" "}
              <a href="#" className="text-[#C9960C] hover:underline">
                Terms of Use
              </a>
              .
            </label>
          </div>

          <button type="submit" className="btn-gold font-serif rounded-md">
            SEND MESSAGE →
          </button>
        </form>
      </div>

      {/* MAP BOX */}
      <div className="lg:w-[500px] shadow-md rounded-lg flex flex-col">
        
        {/* <div className="bg-[#F8F8F8] p-4 ">
          <h3 className="font-bold text-[13px] text-[#1A1A1A] mb-1">
            Mathematical Research Institute of India
          </h3>
          <p className="text-gray-500 text-[12px]">
            Survey No. 8, Hesaraghatta Hobli,
            <br />
            Bengaluru, Karnataka – 560012, India
          </p>
          <a
            href="#"
            className="text-[#C9960C] text-[12px] hover:underline mt-1 inline-block"
          >
            View larger map
          </a>
        </div> */}

        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.0!2d77.497!3d13.090!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDA1JzI0LjAiTiA3N8KwMjknNDkuMiJF!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
          className="w-full flex-1 min-h-[300px]"
          style={{ border: 0 }}
          loading="lazy"
          title="MRI India Location"
        ></iframe>
      </div>

    </div>
  </div>
</section>

      {/* General Inquiries Banner */}
      <section className="py-2 mb-8 ">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="shadow-md rounded-lg bg-[#f9f7f0] p-6 flex flex-col md:flex-row items-center justify-between gap-2">
            <div className="flex items-center gap-8">
              <div className="w-14 h-14  flex items-center justify-center ">
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
                <p className="text-gray-700 text-[12px] leading-relaxed">
                  For general questions and information, please email us at <br />
                  info@mriindia.org. We will get back to you as soon as
                  possible.
                </p>
              </div>
            </div>
            <button className=" font-serif border border-[#C9960C] rounded-md text-[#C9960C] hover:bg-[#C9960C] hover:text-white text-[13px] font-bold tracking-wider px-20 py-2.5 transition-colors ">
              FAQS →
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

import Breadcrumb from "../components/Breadcrumb";
import bg4 from "../assets/bg4.png";
import conference from "../assets/conference.png";
import first from "../assets/11.png";
import second from "../assets/22.png";
import fourth from "../assets/19.png";
import fifth from "../assets/maths.png";

const events = [
  {
    type: "CONFERENCE",
    typeColor: "#1a6bde",
    date: "15",
    month: "JUN",
    year: "2025",
    title: "International Conference on Number Theory and its Applications",
    location: "Bengaluru, India",
    dates: "15 – 18 June 2025",
    mode: null,
    desc: "A four-day conference bringing together researchers working in number theory and arithmetic geometry.",
    img: first,
    bgColor: "#0a1a3a",
  },
  {
    type: "SEMINAR",
    typeColor: "#2a7a2a",
    date: "22",
    month: "JUN",
    year: "2025",
    title: "MRI Colloquium Talk by Prof. Manjul Bhargava",
    location: "Online (Zoom)",
    dates: "22 June 2025, 5:00 PM IST",
    mode: null,
    desc: "Talk on recent advances in arithmetic geometry and Diophantine equations.",
    img: second,
    bgColor: "#0a2a1a",
  },
  {
    type: "WORKSHOP",
    typeColor: "#c9600c",
    date: "05",
    month: "JUL",
    year: "2025",
    title: "Workshop on Algebraic Topology and its Applications",
    location: "TIFR, Mumbai, India",
    dates: "5 – 9 July 2025",
    mode: null,
    desc: "Hands-on workshop for students and researchers on modern topics in algebraic topology.",
    img: conference,
    bgColor: "#1a1a0a",
  },
  {
    type: "LECTURE SERIES",
    typeColor: "#8a2a8a",
    date: "19",
    month: "JUL",
    year: "2025",
    title: "Lecture Series on Mathematical Physics",
    location: "Online (Zoom)",
    dates: "19 July – 23 Aug 2025",
    mode: null,
    desc: "A series of lectures exploring the deep connections between mathematics and physics.",
    img: fourth,
    bgColor: "#1a0a2a",
  },
  {
    type: "TRAINING PROGRAM",
    typeColor: "#2a6a6a",
    date: "10",
    month: "AUG",
    year: "2025",
    title: "Research Methodology for Mathematics",
    location: "Bengaluru, India",
    dates: "10 – 14 Aug 2025",
    mode: null,
    desc: "Training program for early-career researchers on research methods and academic writing.",
    img: fifth,
    bgColor: "#0a2a2a",
  },
];

const upcomingEvents = [
  {
    date: "15",
    month: "JUN",
    year: "2025",
    title: "International Conference on Number Theory and its Applications",
    dates: "15 – 18 June 2025",
    location: "Bengaluru, India",
   
  },
  {
    date: "22",
    month: "JUN",
    year: "2025",
    title: "MRI Colloquium Talk by Prof. Manjul Bhargava",
    dates: "22 June 2025, 5:00 PM IST",
    location: "Online (Zoom)",
  
  },
  {
    date: "05",
    month: "JUL",
    year: "2025",
    title: "Workshop on Algebraic Topology and its Applications",
    dates: "5 – 9 July 2025",
    location: "TIFR, Mumbai, India",
  
  },
  {
    date: "19",
    month: "JUL",
    year: "2025",
    title: "Lecture Series on Mathematical Physics",
    dates: "19 July – 23 Aug 2025",
    location: "Online (Zoom)",
   
  },
  {
    date: "10",
    month: "AUG",
    year: "2025",
    title: "Research Methodology for Mathematics",
    dates: "10 – 14 Aug 2025",
    location: "Bengaluru, India",
    
  },
];

export default function Events() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-white">
        {/* BACKGROUND IMAGE */}
        <img
          src={bg4}
          alt="background"
          className="absolute  w-full h-[400px] "
        />

        {/* OPTIONAL OVERLAY (for readability) */}
        <div className="absolute bg-white/80"></div>

        {/* DOT PATTERN */}
        <div className="absolute inset-0 opacity-5 z-10">
          <div className="absolute inset-0 bg-[radial-gradient(#C9960C_1px,transparent_1px)] bg-[length:20px_20px]"></div>
        </div>

        {/* CONTENT */}
        <div className="relative z-20 h-[400px] flex items-center lg:px-16 px-6">
          <div className="max-w-[600px]">
            <h1 className="font-serif text-[50px] leading-tight text-[#1A1A1A] mb-3">
              Events
            </h1>

            <div className="w-10 h-0.5 bg-[#C9960C] mb-5"></div>

            <p className="text-black text-[14px] mb-3">
              Stay updated with conferences, workshops, seminars, <br /> lecture
              series, and training programs organized by MRI India <br /> and
              our partners.
            </p>

            <p className="text-black text-[14px] ">
              Join leading mathematicians, researchers, and students <br /> in
              inspiring discussions and collaborations.
            </p>
          </div>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="bg-white ">
        <div className="max-w-[1200px] mx-auto px-6 py-6">
          <Breadcrumb items={[{ label: "Events" }]} />
        </div>
      </div>

      {/* Search */}
      <section className="">
        <div className="max-w-[1200px] mx-auto px-6">
          {/* BOX CONTAINER */}
          <div className="bg-white shadow-md rounded-lg p-4">
            <div className="flex flex-wrap items-center gap-4">
              {/* SEARCH INPUT */}
              <div className="flex-1 min-w-[250px] relative">
                <svg
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>

                <input
                  type="text"
                  placeholder="Search events by title, speaker or keywords..."
                  className="w-full pl-10 pr-4 h-[42px] border border-[#E5E5E5] text-[13px] focus:outline-none focus:border-[#C9960C] rounded"
                />
              </div>

              {/* SELECTS */}
              <select className="h-[42px] border border-[#E5E5E5] px-3 text-[13px] text-gray-900 focus:outline-none bg-white rounded min-w-[160px]">
                <option>All Event Types</option>
                <option>Conference</option>
                <option>Workshop</option>
                <option>Seminar</option>
              </select>

              <select className="h-[42px] border border-[#E5E5E5] px-3 text-[13px] text-gray-900 focus:outline-none bg-white rounded min-w-[160px]">
                <option>All Categories</option>
                <option>Pure Mathematics</option>
                <option>Applied Mathematics</option>
              </select>

              <select className="h-[42px] border border-[#E5E5E5] px-3 text-[13px] text-gray-900 focus:outline-none bg-white rounded min-w-[160px]">
                <option>Upcoming & Past</option>
                <option>Upcoming</option>
                <option>Past</option>
              </select>

              {/* BUTTON */}
              <button className="h-[42px] px-6 bg-[#C9960C] text-white text-[13px] font-semibold rounded hover:bg-[#b8860b] transition">
                SEARCH
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Events List + Sidebar */}
      <section className="py-10 ">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-6">
            {/* LEFT SIDE */}
            <div className="flex-1">
              <h2 className="font-serif text-[22px] text-[#1A1A1A] mb-1">
                All Events
              </h2>
              <div className="w-8 h-[2px] bg-[#C9960C] mb-5"></div>

              <div className="space-y-4">
                {events.map((ev, i) => (
                  <div
                    key={i}
                    className="bg-white shadow-md rounded-lg  flex overflow-hidden"
                  >
                    {/* IMAGE */}
                    <div className="w-[200px] h-[155px] shrink-0">
                      <img
                        src={ev.img}
                        alt={ev.title}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* RIGHT CONTENT */}
                    <div className="flex flex-1 p-4 gap-4 relative">
                     
                      {/* DATE BOX */}
                      <div className="w-[40px] h-[70px] border border-[#E5E5E5] rounded text-center shrink-0 overflow-hidden">
                        <div className="text-[18px] font-bold text-[#1A1A1A] py-1">
                          {ev.date}
                        </div>
                        <div className="text-[10px] font-bold text-[#C9960C] border-t border-[#E5E5E5] py-[2px]">
                          {ev.month}
                        </div>
                        <div className="bg-[#C9960C] text-white text-[9px] font-bold py-[2px]">
                          {ev.year}
                        </div>
                      </div>

                      {/* TEXT CONTENT */}
                      <div className="flex-1 pr-[120px]">
                        <span
                          className="text-[10px] font-bold tracking-wide"
                          style={{ color: ev.typeColor }}
                        >
                          {ev.type}
                        </span>

                        <h3 className="text-[14px] font-semibold text-[#1A1A1A] mt-1 mb-1 leading-snug">
                          {ev.title}
                        </h3>

                        {/* META ROW */}
                        <div className="flex items-center gap-2 text-[11px] text-gray-500 mb-1">
                          <span>{ev.location}</span>
                          <span className="text-gray-300">•</span>
                          <span>{ev.dates}</span>
                        </div>

                        <p className="text-[11px] text-gray-500 leading-snug line-clamp-2">
                          {ev.desc}
                        </p>
                      </div>

                      {/* BUTTON (BOTTOM RIGHT FIXED) */}
                      <div className="absolute right-4 bottom-4">
                        <button className="text-[10px] font-bold px-3 py-2 border border-[#C9960C] text-[#C9960C] hover:bg-[#C9960C] hover:text-white transition rounded">
                          VIEW DETAILS
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* PAGINATION */}
              <div className="flex justify-center gap-2 mt-6">
                <button className="w-8 h-8 border border-[#E5E5E5] text-[12px] text-gray-500">
                  ‹
                </button>
                <button className="w-8 h-8 bg-[#C9960C] text-white text-[12px] font-bold">
                  1
                </button>
                <button className="w-8 h-8 border border-[#E5E5E5] text-[12px]">
                  2
                </button>
                <button className="w-8 h-8 border border-[#E5E5E5] text-[12px]">
                  3
                </button>
                <button className="w-8 h-8 border border-[#E5E5E5] text-[12px]">
                  ›
                </button>
              </div>
            </div>

            {/* RIGHT SIDEBAR */}
            <div className="w-[300px] shrink-0 space-y-5">
              {/* UPCOMING */}
              <div className="bg-white border border-[#EAEAEA] rounded-md p-4">
                <h3 className="font-serif text-[16px] text-[#1A1A1A] mb-1">
                  Upcoming Events
                </h3>
                <div className="w-8 h-[2px] bg-[#C9960C] mb-6"></div>

                <div className="space-y-4">
                  {upcomingEvents.map((ev, i) => (
                    <div
                      key={i}
                      className="flex gap-3 pb-3 last:border-0 last:pb-0"
                    >

                      {/* DATE BOX */}
                      <div className="w-[42px] h-[70px] border border-[#E5E5E5] rounded text-center shrink-0 overflow-hidden">
                        
                        <div className="text-[14px] font-bold text-[#1A1A1A] py-[4px]">
                          {ev.date}
                        </div>

                        <div className="text-[10px] font-bold text-[#C9960C] border-t border-[#E5E5E5] py-[2px]">
                          {ev.month}
                        </div>

                        <div className="bg-[#C9960C] text-white text-[10px] font-bold py-[3px]">
                          {ev.year}
                        </div>
                      </div>

                      {/* TEXT */}
                      <div className="flex-1">
                        <p className="text-[12px] font-semibold text-[#1A1A1A] leading-tight mb-1">
                          {ev.title}
                        </p>

                        {/* DATE / TIME */}
                        <div className="flex items-center gap-1 text-[10px] text-gray-700 mb-[2px]">
                          <svg
                            className="w-3 h-3 text-[#C9960C]"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                          <span>{ev.dates}</span>
                        </div>

                        {/* LOCATION */}
                        <div className="flex items-center gap-1 text-[10px] text-gray-700">
                          <svg
                            className="w-3 h-3 text-[#C9960C]"
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
                          <span>{ev.location}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <button className="mt-8 w-full text-[11px] border border-[#C9960C] text-[#C9960C] py-2 hover:bg-[#C9960C] hover:text-white transition rounded">
                  VIEW ALL EVENTS →
                </button>
              </div>
              {/* NEWSLETTER */}
             <div className="bg-[#F6F2E8] border border-[#EAEAEA] rounded-md p-4 text-center">

  {/* ICON */}
  <div className="w-10 h-10 mx-auto rounded-full bg-white border border-[#C9960C] flex items-center justify-center">
    <svg
      className="w-6 h-6 text-[#C9960C]"
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

  {/* HEADING */}
  <h3 className="font-serif text-[15px] text-[#1A1A1A] mt-3 font-semibold mb-1">
    Never Miss an Update
  </h3>

  {/* TEXT */}
  <p className="text-[11px] text-gray-900 leading-relaxed mb-3">
    Subscribe to our newsletter and <br /> get the latest updates
    on events, <br /> seminars and programs.
  </p>

  {/* INPUT */}
  <input
    type="email"
    placeholder="Enter your email address"
    className="w-full border border-[#E5E5E5] px-3 h-[36px] text-[11px] mb-3 focus:outline-none focus:border-[#C9960C] rounded text-left"
  />

  {/* BUTTON */}
  <button className="w-full h-[36px] bg-[#C9960C] text-white text-[11px] font-bold tracking-wide rounded hover:bg-[#b8860b] transition">
    SUBSCRIBE
  </button>

</div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Features */}
   <section className="py-6  ">
  <div className="max-w-[1200px] mx-auto px-6">

    {/* SINGLE BOX */}
    <div className="bg-white border border-[#EAEAEA] rounded-md shadow-sm px-6 py-5">

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

        {[
          {
            title: "Diverse Events",
            desc: "Conferences, workshops, seminars, colloquia and more.",
            icon: (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round"
                  d="M8 7V3m8 4V3M4 11h16M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            ),
          },
          {
            title: "Expert Speakers",
            desc: "Learn from leading mathematicians and researchers.",
            icon: (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round"
                  d="M12 14l9-5-9-5-9 5 9 5z" />
                <path strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round"
                  d="M12 14v7m0 0l-3-3m3 3l3-3" />
              </svg>
            ),
          },
          {
            title: "Global Participation",
            desc: "Join in-person or online from anywhere in the world.",
            icon: (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round"
                  d="M12 2a10 10 0 100 20 10 10 0 000-20z" />
                <path strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round"
                  d="M2 12h20M12 2c2.5 3 2.5 17 0 20M12 2c-2.5 3-2.5 17 0 20" />
              </svg>
            ),
          },
          {
            title: "Networking Opportunities",
            desc: "Connect, collaborate and grow together.",
            icon: (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round"
                  d="M17 20h5V4H2v16h5m10 0a5 5 0 01-10 0m10 0a5 5 0 00-10 0" />
              </svg>
            ),
          },
        ].map((f, i) => (
          
          <div key={i} className="flex items-start gap-3">

            {/* ICON */}
            <div className="w-12 h-16  flex items-center justify-center text-[#C9960C] ">
              {f.icon}
            </div>

            {/* TEXT */}
            <div>
              <h3 className="font-serif text-[14px] text-[#1A1A1A] font-semibold mb-1 leading-tight">
                {f.title}
              </h3>
              <p className="text-[12px] text-gray-700 leading-snug">
                {f.desc}
              </p>
            </div>

          </div>

        ))}

      </div>
    </div>

  </div>
</section>
    </div>
  );
}

// import { useState } from "react";
// import Breadcrumb from "../components/Breadcrumb";
// import bg2 from "../assets/bg2.png";
// import { ShieldCheck, Globe, FileText, Upload } from "lucide-react";
// import math from "../assets/math.png";
// import mri from "../assets/mri.png";
// import science from "../assets/science.png";
// import mathematics from "../assets/math2.png";
// import review from "../assets/review.png";
// import research from "../assets/reserch.png";

// import { motion } from "framer-motion";

// /* =========================
//    ADDED: Animation Variants
// ========================= */
// const fadeUp = {
//   hidden: { opacity: 0, y: 24 },
//   visible: (i = 1) => ({
//     opacity: 1,
//     y: 0,
//     transition: {
//       delay: i * 0.08,
//       duration: 0.55,
//       ease: "easeOut",
//     },
//   }),
// };

// const journals = [
//   {
//     title: "JOURNAL OF\nINDIAN\nMATHEMATICS",
//     name: "Journal of Indian Mathematics",
//     desc: "Publishes original research papers in all areas of mathematics.",
//     issn: "0970-3773",
//     freq: "Quarterly",
//     color: "#1a3a5c",
//     image: math,
//   },
//   {
//     title: "PROCEEDINGS OF\nMRI INDIA",
//     name: "Proceedings of MRI India",
//     desc: "Conference proceedings featuring cutting-edge research and insights.",
//     issn: "2321-2406",
//     freq: "Biannual",
//     color: "#1a3d1a",
//     image: mri,
//   },
//   {
//     title: "ANNALS OF\nMATHEMATICAL\nSCIENCES",
//     name: "Annals of Mathematical Sciences",
//     desc: "Focuses on long research articles and comprehensive surveys.",
//     issn: "2582-1299",
//     freq: "Biannual",
//     color: "#2d1a5c",
//     image: science,
//   },
//   {
//     title: "INDIAN JOURNAL OF\nAPPLIED\nMATHEMATICS",
//     name: "Indian Journal of Applied Mathematics",
//     desc: "Publishes significant research in applied mathematics and its applications.",
//     issn: "2394-1558",
//     freq: "Quarterly",
//     color: "#1a2a4d",
//     image: mathematics,
//   },
//   {
//     title: "COMPUTATIONAL\nMATHEMATICS\nREVIEW",
//     name: "Computational Mathematics Review",
//     desc: "Covers innovative developments in computational methods and algorithms.",
//     issn: "2582-1302",
//     freq: "Quarterly",
//     color: "#5c1a1a",
//     image: review,
//   },
//   {
//     title: "BULLETIN OF\nMATHEMATICAL\nRESEARCH",
//     name: "Bulletin of Mathematical Research",
//     desc: "Short communications and high-impact results in mathematics.",
//     issn: "2582-1310",
//     freq: "Quarterly",
//     color: "#0d3d3d",
//     image: research,
//   },
// ];

// export default function Journals() {
//   const [search, setSearch] = useState("");

//   return (
//     <motion.div
//       initial="hidden"
//       animate="visible"
//       variants={fadeUp}
//     >
//       {/* Hero */}
//       <section className="relative bg-[#FEFCF9] overflow-hidden lg:py-24 py-10 px-10">
//         {/* Background image */}
//         <motion.div
//           /* ADDED: soft hero background reveal */
//           initial={{ opacity: 0, scale: 1.02 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 1 }}
//           className="absolute inset-0 bg-no-repeat bg-right-top"
//           style={{
//             backgroundImage: `url(${bg2})`,
//             backgroundSize: "55%",
//           }}
//         />

//         {/* Content */}
//         <div className="relative z-10 max-w-7xl mx-auto px-6">
//           <motion.div
//             className="max-w-xl"
//             variants={fadeUp}
//             custom={1}
//           >
//             <motion.h1
//               initial={{ opacity: 0, y: 18 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6 }}
//               className="text-3xl lg:text-4xl font-serif text-gray-900 leading-tight"
//             >
//               Journals
//             </motion.h1>

//             {/* underline */}
//             <motion.div
//               initial={{ width: 0 }}
//               animate={{ width: 48 }}
//               transition={{ duration: 0.8, delay: 0.2 }}
//               className="h-[2px] bg-[#b8860b] mt-4 mb-6"
//             />

//       <p className="text-gray-600 text-[14px] leading-relaxed">
//               MRI India publishes high-quality, peer-reviewed journals that
//               contribute to the advancement of mathematical sciences.
//               Our journals cover a wide range of areas in pure and applied
//               mathematics.
//             </p>
//           </motion.div>
//         </div>
//       </section>

//       {/* Breadcrumb */}
//       <motion.div
//         variants={fadeUp}
//         custom={2}
//         className="bg-white py-3 px-16"
//       >
//         <div className="max-w-7xl mx-auto">
//           <Breadcrumb items={[{ label: "Journals", path: "/journals" }]} />
//         </div>
//       </motion.div>

//       {/* Search */}
//       <section className="py-6 bg-white px-10">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6">
//           {/* Card container */}
//           <motion.div
//             variants={fadeUp}
//             custom={3}
//             whileHover={{
//               y: -4,
//               boxShadow: "0 10px 25px rgba(0,0,0,0.06)",
//             }}
//             transition={{ duration: 0.25 }}
//             className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 transition-all duration-300"
//           >
//             <div className="flex flex-wrap lg:flex-nowrap gap-4 items-center">
//               {/* Search Input */}
//               <div className="relative flex-1 min-w-[260px] group">
//                 <svg
//                   className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 group-hover:text-[#c58a1c] transition-all duration-300"
//                   fill="none"
//                   stroke="currentColor"
//                   viewBox="0 0 24 24"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
//                   />
//                 </svg>

//                 <input
//                   value={search}
//                   onChange={(e) => setSearch(e.target.value)}
//                   type="text"
//                   placeholder="Search journals by title, ISSN or keywords..."
//                   className="w-full pl-11 pr-4 py-3 rounded-lg border border-gray-200 text-sm text-gray-700 
//                   focus:outline-none focus:ring-2 focus:ring-[#c58a1c]/30 
//                   hover:border-[#c58a1c]/40 transition-all duration-300
//                   hover:shadow-sm focus:shadow-md"
//                 />
//               </div>

//               {/* Dropdowns */}
//               <motion.select
//                 whileHover={{ scale: 1.02, y: -1 }}
//                 transition={{ duration: 0.2 }}
//                 className="min-w-[180px] px-4 py-3 rounded-lg border border-gray-200 text-sm text-gray-600 bg-white 
//                 focus:outline-none focus:ring-2 focus:ring-[#c58a1c]/30 
//                 hover:border-[#c58a1c]/40 transition-all duration-300 hover:shadow-sm"
//               >
//                 <option>All Subjects</option>
//                 <option>Pure Mathematics</option>
//                 <option>Applied Mathematics</option>
//               </motion.select>

//               <motion.select
//                 whileHover={{ scale: 1.02, y: -1 }}
//                 transition={{ duration: 0.2 }}
//                 className="min-w-[180px] px-4 py-3 rounded-lg border border-gray-200 text-sm text-gray-600 bg-white 
//                 focus:outline-none focus:ring-2 focus:ring-[#c58a1c]/30 
//                 hover:border-[#c58a1c]/40 transition-all duration-300 hover:shadow-sm"
//               >
//                 <option>All Journal Types</option>
//                 <option>Quarterly</option>
//                 <option>Biannual</option>
//               </motion.select>

//               <motion.select
//                 whileHover={{ scale: 1.02, y: -1 }}
//                 transition={{ duration: 0.2 }}
//                 className="min-w-[180px] px-4 py-3 rounded-lg border border-gray-200 text-sm text-gray-600 bg-white 
//                 focus:outline-none focus:ring-2 focus:ring-[#c58a1c]/30 
//                 hover:border-[#c58a1c]/40 transition-all duration-300 hover:shadow-sm"
//               >
//                 <option>Sort By: Newest</option>
//                 <option>Sort By: Oldest</option>
//               </motion.select>

//               {/* Button */}
//               <motion.button
//                 whileHover={{
//                   scale: 1.04,
//                   boxShadow: "0 8px 20px rgba(197,138,28,0.22)",
//                 }}
//                 whileTap={{ scale: 0.96 }}
//                 transition={{ duration: 0.2 }}
//                 className="bg-[#c58a1c] hover:bg-[#a97314] text-white text-sm font-semibold tracking-wide px-6 py-3 rounded-lg whitespace-nowrap shadow-sm hover:shadow-md transition-all duration-300"
//               >
//                 SEARCH
//               </motion.button>
//             </div>
//           </motion.div>
//         </div>
//       </section>

//       {/* Journals Grid */}
//       <section className="py-6 bg-white px-10">
//         <div className="max-w-7xl mx-auto px-6">
//           <p className="text-sm text-gray-500 mb-6">
//             Showing {journals.length} journals
//           </p>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {journals
//               .filter((j) =>
//                 j.name.toLowerCase().includes(search.toLowerCase()),
//               )
//               .map((j, i) => (
//                 <motion.div
//                   key={i}
//                   /* ADDED: card entrance */
//                   initial={{ opacity: 0, y: 22 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   viewport={{ once: true }}
//                   transition={{
//                     duration: 0.5,
//                     delay: i * 0.07,
//                   }}
//                   /* ADDED: subtle hover */
//                   whileHover={{
//                     y: -6,
//                     scale: 1.01,
//                     boxShadow: "0 16px 35px rgba(0,0,0,0.07)",
//                   }}
//                   className="bg-white rounded-xl border border-gray-200 shadow-sm transition-all duration-300 p-5 flex gap-4 group"
//                 >
//                   <div className="relative w-28 h-44 rounded-lg overflow-hidden">
//                     {/* Image */}
//                     <motion.img
//                       src={j.image}
//                       className="w-full h-full object-cover"
//                       whileHover={{ scale: 1.05 }}
//                       transition={{ duration: 0.4 }}
//                     />
//                   </div>

//                   {/* Content */}
//                   <div className="flex flex-col flex-1">
//                     <h3 className="text-[15px] font-semibold text-gray-900 leading-snug mb-2 transition-colors duration-300 group-hover:text-[#c58a1c]">
//                       {j.name}
//                     </h3>

//                     <p className="text-gray-500 text-xs leading-relaxed mb-3">
//                       {j.desc}
//                     </p>

//                     {/* ISSN */}
//                     <div className="flex items-center gap-2 text-xs text-gray-500 mb-1">
//                       <svg
//                         className="w-3.5 h-3.5 text-[#c58a1c]"
//                         fill="currentColor"
//                         viewBox="0 0 20 20"
//                       >
//                         <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z" />
//                       </svg>
//                       ISSN: {j.issn}
//                     </div>

//                     {/* Frequency */}
//                     <div className="flex items-center gap-2 text-xs text-gray-500 mb-4">
//                       <svg
//                         className="w-3.5 h-3.5 text-[#c58a1c]"
//                         fill="none"
//                         stroke="currentColor"
//                         viewBox="0 0 24 24"
//                       >
//                         <path
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                           strokeWidth={2}
//                           d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
//                         />
//                       </svg>
//                       {j.freq}
//                     </div>

//                     {/* Button RIGHT aligned */}
//                     <div className="mt-auto ">
//                       <motion.button
//                         whileHover={{
//                           scale: 1.04,
//                           x: 2,
//                         }}
//                         whileTap={{ scale: 0.97 }}
//                         transition={{ duration: 0.2 }}
//                         className="bg-[#c58a1c] hover:bg-[#a97314] text-white text-xs font-semibold px-4 py-2 rounded-md flex items-center gap-1 transition-all duration-300 hover:shadow-md"
//                       >
//                         VIEW JOURNAL
//                         <span className="transition-transform duration-300 group-hover:translate-x-1">
//                           →
//                         </span>
//                       </motion.button>
//                     </div>
//                   </div>
//                 </motion.div>
//               ))}
//           </div>

//           {/* Pagination */}
//           <motion.div
//             variants={fadeUp}
//             custom={4}
//             className="flex justify-center items-center gap-2 mt-10"
//           >
//             <button className="w-9 h-9 rounded-md border border-gray-200 text-gray-400 hover:shadow-sm transition-all duration-300">
//               ‹
//             </button>

//             <button className="w-9 h-9 rounded-md bg-[#c58a1c] text-white text-sm font-semibold shadow-sm hover:shadow-md transition-all duration-300">
//               1
//             </button>

//             <button className="w-9 h-9 rounded-md border border-gray-200 text-gray-600 hover:border-gray-300 hover:shadow-sm transition-all duration-300">
//               2
//             </button>

//             <button className="w-9 h-9 rounded-md border border-gray-200 text-gray-400 hover:shadow-sm transition-all duration-300">
//               ›
//             </button>
//           </motion.div>
//         </div>
//       </section>

//       {/* Features */}
//       <section className="py-6 bg-white px-10">
//         <div className="max-w-7xl mx-auto px-6">
//           <motion.div
//             variants={fadeUp}
//             custom={5}
//             className="bg-[#f8f8f8] border border-gray-200 rounded-2xl shadow-sm px-8 py-10"
//           >
//             <div className="grid grid-cols-1 md:grid-cols-4">
//               {[
//                 {
//                   icon: ShieldCheck,
//                   title: "Peer Reviewed",
//                   desc: "Rigorous peer review ensures quality and integrity.",
//                 },
//                 {
//                   icon: Globe,
//                   title: "Global Reach",
//                   desc: "Our journals are read worldwide.",
//                 },
//                 {
//                   icon: FileText,
//                   title: "Open Access Options",
//                   desc: "Select journals offer open access publishing.",
//                 },
//                 {
//                   icon: Upload,
//                   title: "Submit Your Work",
//                   desc: "We welcome submissions from researchers globally.",
//                   cta: true,
//                 },
//               ].map((f, i) => {
//                 const Icon = f.icon;

//                 return (
//                   <motion.div
//                     key={i}
//                     whileHover={{ y: -4 }}
//                     transition={{ duration: 0.25 }}
//                     className={`flex flex-col gap-3 px-6 transition-all duration-300 ${
//                       i !== 3 ? "border-r border-gray-200" : ""
//                     }`}
//                   >
//                     {/* Lucide Icon */}
//                     <motion.div
//                       whileHover={{ scale: 1.08 }}
//                       transition={{ duration: 0.25 }}
//                       className="text-[#c58a1c]"
//                     >
//                       <Icon size={28} strokeWidth={1.8} />
//                     </motion.div>

//                     {/* Text */}
//                     <h4 className="text-md font-semibold text-gray-900 transition-colors duration-300 hover:text-[#c58a1c]">
//                       {f.title}
//                     </h4>

//                     <p className="text-sm text-gray-900 leading-relaxed">
//                       {f.desc}
//                     </p>

//                     {/* CTA */}
//                     {f.cta && (
//                       <div className="mt-3">
//                         <motion.button
//                           whileHover={{
//                             scale: 1.04,
//                             boxShadow: "0 8px 20px rgba(197,138,28,0.2)",
//                           }}
//                           whileTap={{ scale: 0.97 }}
//                           className="bg-[#c58a1c] hover:bg-[#a97314] text-white text-xs font-semibold px-5 py-2.5 rounded-md flex items-center gap-2 transition-all duration-300"
//                         >
//                           AUTHOR GUIDELINES
//                           <span className="transition-transform duration-300 hover:translate-x-1">
//                             →
//                           </span>
//                         </motion.button>
//                       </div>
//                     )}
//                   </motion.div>
//                 );
//               })}
//             </div>
//           </motion.div>
//         </div>
//       </section>
//     </motion.div>
//   );
// }




import { useEffect, useMemo, useState } from "react";
import Breadcrumb from "../components/Breadcrumb";
import bg2 from "../assets/bg2.png";
import { ShieldCheck, Globe, FileText, Upload } from "lucide-react";
import { motion } from "framer-motion";

// API
import { getAllJournals } from "../api/journalApi";

/* =========================
   Animation Variants
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

export default function Journals() {
  const [search, setSearch] = useState("");

  // API STATES
  const [journals, setJournals] = useState([]);
  const [loading, setLoading] = useState(false);

  // FILTER STATES
  const [subject, setSubject] = useState("All Subjects");
  const [journalType, setJournalType] =
    useState("All Journal Types");
  const [sortBy, setSortBy] = useState("newest");

  // PAGINATION
  const [currentPage, setCurrentPage] = useState(1);
  const journalsPerPage = 6;

  /* =========================
     FETCH JOURNALS API
  ========================= */
  useEffect(() => {
    fetchJournals();
  }, []);

  const fetchJournals = async () => {
    try {
      setLoading(true);

      const response = await getAllJournals();

      console.log("JOURNALS API RESPONSE:", response);

      setJournals(response?.data || response || []);
    } catch (error) {
      console.error("Journal fetch error:", error);
    } finally {
      setLoading(false);
    }
  };

  /* =========================
     FILTER + SEARCH + SORT
  ========================= */
  const filteredJournals = useMemo(() => {
    let filtered = [...journals];

    // SEARCH
    if (search.trim()) {
      filtered = filtered.filter((j) => {
        const searchText = search.toLowerCase();

        return (
          j?.name?.toLowerCase().includes(searchText) ||
          j?.title?.toLowerCase().includes(searchText) ||
          j?.description?.toLowerCase().includes(searchText) ||
          j?.desc?.toLowerCase().includes(searchText) ||
          j?.issn?.toLowerCase().includes(searchText)
        );
      });
    }

    // SUBJECT FILTER
    if (subject !== "All Subjects") {
      filtered = filtered.filter(
        (j) =>
          j?.subject === subject ||
          j?.category === subject
      );
    }

    // TYPE FILTER
    if (journalType !== "All Journal Types") {
      filtered = filtered.filter(
        (j) =>
          j?.frequency === journalType ||
          j?.freq === journalType
      );
    }

    // SORT
    if (sortBy === "newest") {
      filtered.sort(
        (a, b) =>
          new Date(b.createdAt || b.created_at || 0) -
          new Date(a.createdAt || a.created_at || 0)
      );
    } else {
      filtered.sort(
        (a, b) =>
          new Date(a.createdAt || a.created_at || 0) -
          new Date(b.createdAt || b.created_at || 0)
      );
    }

    return filtered;
  }, [journals, search, subject, journalType, sortBy]);

  /* =========================
     PAGINATION
  ========================= */
  const totalPages = Math.ceil(
    filteredJournals.length / journalsPerPage
  );

  const paginatedJournals = filteredJournals.slice(
    (currentPage - 1) * journalsPerPage,
    currentPage * journalsPerPage
  );

  // RESET PAGE WHEN FILTER CHANGES
  useEffect(() => {
    setCurrentPage(1);
  }, [search, subject, journalType, sortBy]);

  return (
    <motion.div initial="hidden" animate="visible" variants={fadeUp}>
      {/* Hero */}
      <section className="relative bg-[#FEFCF9] overflow-hidden lg:py-24 py-10 px-10">
        <motion.div
          initial={{ opacity: 0, scale: 1.02 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 bg-no-repeat bg-right-top"
          style={{
            backgroundImage: `url(${bg2})`,
            backgroundSize: "55%",
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <motion.div className="max-w-xl" variants={fadeUp} custom={1}>
            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl lg:text-4xl font-serif text-gray-900 leading-tight"
            >
              Journals
            </motion.h1>

            <motion.div
              initial={{ width: 0 }}
              animate={{ width: 48 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="h-[2px] bg-[#b8860b] mt-4 mb-6"
            />

            <p className="text-gray-600 text-[14px] leading-relaxed">
              MRI India publishes high-quality, peer-reviewed journals.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Breadcrumb */}
      <motion.div
        variants={fadeUp}
        custom={2}
        className="bg-white py-3 px-16"
      >
        <div className="max-w-7xl mx-auto">
          <Breadcrumb items={[{ label: "Journals", path: "/journals" }]} />
        </div>
      </motion.div>

      {/* Search */}
      <section className="py-6 bg-white px-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            variants={fadeUp}
            custom={3}
            whileHover={{
              y: -4,
              boxShadow: "0 10px 25px rgba(0,0,0,0.06)",
            }}
            transition={{ duration: 0.25 }}
            className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 transition-all duration-300"
          >
            <div className="flex flex-wrap lg:flex-nowrap gap-4 items-center">
              {/* Search */}
              <div className="relative flex-1 min-w-[260px] group">
                <svg
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400"
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
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  type="text"
                  placeholder="Search journals by title, ISSN or keywords..."
                  className="w-full pl-11 pr-4 py-3 rounded-lg border border-gray-200 text-sm text-gray-700 
                  focus:outline-none focus:ring-2 focus:ring-[#c58a1c]/30"
                />
              </div>

              {/* SUBJECT */}
              <motion.select
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                whileHover={{ scale: 1.02, y: -1 }}
                className="min-w-[180px] px-4 py-3 rounded-lg border border-gray-200 text-sm text-gray-600 bg-white"
              >
                <option>All Subjects</option>
                <option>Pure Mathematics</option>
                <option>Applied Mathematics</option>
              </motion.select>

              {/* TYPE */}
              <motion.select
                value={journalType}
                onChange={(e) =>
                  setJournalType(e.target.value)
                }
                whileHover={{ scale: 1.02, y: -1 }}
                className="min-w-[180px] px-4 py-3 rounded-lg border border-gray-200 text-sm text-gray-600 bg-white"
              >
                <option>All Journal Types</option>
                <option>Quarterly</option>
                <option>Biannual</option>
              </motion.select>

              {/* SORT */}
              <motion.select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                whileHover={{ scale: 1.02, y: -1 }}
                className="min-w-[180px] px-4 py-3 rounded-lg border border-gray-200 text-sm text-gray-600 bg-white"
              >
                <option value="newest">
                  Sort By: Newest
                </option>

                <option value="oldest">
                  Sort By: Oldest
                </option>
              </motion.select>

              <motion.button
                whileHover={{
                  scale: 1.04,
                  boxShadow:
                    "0 8px 20px rgba(197,138,28,0.22)",
                }}
                whileTap={{ scale: 0.96 }}
                className="bg-[#c58a1c] hover:bg-[#a97314] text-white text-sm font-semibold tracking-wide px-6 py-3 rounded-lg whitespace-nowrap"
              >
                SEARCH
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Journals Grid */}
      <section className="py-6 bg-white px-10">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-sm text-gray-500 mb-6">
            Showing {filteredJournals.length} journals
          </p>

          {/* LOADING */}
          {loading && (
            <div className="text-center py-10 text-gray-500">
              Loading journals...
            </div>
          )}

          {/* EMPTY */}
          {!loading && filteredJournals.length === 0 && (
            <div className="text-center py-10 text-gray-500">
              No journals found
            </div>
          )}

          {/* GRID */}
          {!loading && filteredJournals.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {paginatedJournals.map((j, i) => (
                <motion.div
                  key={j.id || i}
                  initial={{ opacity: 0, y: 22 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: i * 0.07,
                  }}
                  whileHover={{
                    y: -6,
                    scale: 1.01,
                    boxShadow:
                      "0 16px 35px rgba(0,0,0,0.07)",
                  }}
                  className="bg-white rounded-xl border border-gray-200 shadow-sm transition-all duration-300 p-5 flex gap-4 group"
                >
                  {/* IMAGE */}
                  <div className="relative w-28 h-44 rounded-lg overflow-hidden">
                    <motion.img
                      src={
                        j.image_url
                          ? j.image_url.startsWith("http")
                            ? j.image_url
                            : `${import.meta.env.VITE_API_URL}${j.image_url}`
                          : "https://placehold.co/400x600/png"
                      }
                      alt={j.name || j.title}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.4 }}
                      onError={(e) => {
                        e.target.src =
                          "https://placehold.co/400x600/png";
                      }}
                    />
                  </div>

                  {/* CONTENT */}
                  <div className="flex flex-col flex-1">
                    <h3 className="text-[15px] font-semibold text-gray-900 leading-snug mb-2 transition-colors duration-300 group-hover:text-[#c58a1c]">
                      {j.name || j.title}
                    </h3>

                    <p className="text-gray-500 text-xs leading-relaxed mb-3">
                      {j.desc || j.description}
                    </p>

                    <div className="text-xs text-gray-500 mb-1">
                      ISSN: {j.issn || "N/A"}
                    </div>

                    <div className="text-xs text-gray-500 mb-4">
                      {j.freq ||
                        j.frequency ||
                        "Quarterly"}
                    </div>

                    <div className="mt-auto ">
                      <motion.a
                        href={j.file_url || "#"}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{
                          scale: 1.04,
                          x: 2,
                        }}
                        whileTap={{ scale: 0.97 }}
                        transition={{ duration: 0.2 }}
                        className="bg-[#c58a1c] hover:bg-[#a97314] text-white text-xs font-semibold px-4 py-2 rounded-md flex items-center gap-1 transition-all duration-300 hover:shadow-md w-fit"
                      >
                        VIEW JOURNAL
                        <span className="transition-transform duration-300 group-hover:translate-x-1">
                          →
                        </span>
                      </motion.a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}

          {/* PAGINATION */}
          {!loading && totalPages > 1 && (
            <motion.div
              variants={fadeUp}
              custom={4}
              className="flex justify-center items-center gap-2 mt-10"
            >
              {/* PREV */}
              <button
                onClick={() =>
                  setCurrentPage((prev) =>
                    Math.max(prev - 1, 1)
                  )
                }
                disabled={currentPage === 1}
                className="w-9 h-9 rounded-md border border-gray-200 text-gray-400 hover:shadow-sm transition-all duration-300 disabled:opacity-40"
              >
                ‹
              </button>

              {/* PAGE NUMBERS */}
              {[...Array(totalPages)].map((_, index) => (
                <button
                  key={index}
                  onClick={() =>
                    setCurrentPage(index + 1)
                  }
                  className={`w-9 h-9 rounded-md text-sm font-semibold transition-all duration-300 ${
                    currentPage === index + 1
                      ? "bg-[#c58a1c] text-white shadow-sm"
                      : "border border-gray-200 text-gray-600 hover:border-gray-300"
                  }`}
                >
                  {index + 1}
                </button>
              ))}

              {/* NEXT */}
              <button
                onClick={() =>
                  setCurrentPage((prev) =>
                    Math.min(prev + 1, totalPages)
                  )
                }
                disabled={currentPage === totalPages}
                className="w-9 h-9 rounded-md border border-gray-200 text-gray-400 hover:shadow-sm transition-all duration-300 disabled:opacity-40"
              >
                ›
              </button>
            </motion.div>
          )}
        </div>
      </section>

      {/* Features */}
      <section className="py-6 bg-white px-10">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            variants={fadeUp}
            custom={5}
            className="bg-[#f8f8f8] border border-gray-200 rounded-2xl shadow-sm px-8 py-10"
          >
            <div className="grid grid-cols-1 md:grid-cols-4">
              {[
                {
                  icon: ShieldCheck,
                  title: "Peer Reviewed",
                  desc: "Rigorous peer review ensures quality and integrity.",
                },
                {
                  icon: Globe,
                  title: "Global Reach",
                  desc: "Our journals are read worldwide.",
                },
                {
                  icon: FileText,
                  title: "Open Access Options",
                  desc: "Select journals offer open access publishing.",
                },
                {
                  icon: Upload,
                  title: "Submit Your Work",
                  desc: "We welcome submissions from researchers globally.",
                  cta: true,
                },
              ].map((f, i) => {
                const Icon = f.icon;

                return (
                  <motion.div
                    key={i}
                    whileHover={{ y: -4 }}
                    transition={{ duration: 0.25 }}
                    className={`flex flex-col gap-3 px-6 transition-all duration-300 ${
                      i !== 3
                        ? "border-r border-gray-200"
                        : ""
                    }`}
                  >
                    <motion.div
                      whileHover={{ scale: 1.08 }}
                      transition={{ duration: 0.25 }}
                      className="text-[#c58a1c]"
                    >
                      <Icon size={28} strokeWidth={1.8} />
                    </motion.div>

                    <h4 className="text-md font-semibold text-gray-900">
                      {f.title}
                    </h4>

                    <p className="text-sm text-gray-900 leading-relaxed">
                      {f.desc}
                    </p>

                    {f.cta && (
                      <div className="mt-3">
                        <motion.button
                          whileHover={{
                            scale: 1.04,
                          }}
                          whileTap={{ scale: 0.97 }}
                          className="bg-[#c58a1c] hover:bg-[#a97314] text-white text-xs font-semibold px-5 py-2.5 rounded-md flex items-center gap-2 transition-all duration-300"
                        >
                          AUTHOR GUIDELINES
                          <span>→</span>
                        </motion.button>
                      </div>
                    )}
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}
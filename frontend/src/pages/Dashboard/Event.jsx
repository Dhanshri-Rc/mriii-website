// import  { useRef, useState } from "react";
// import {
//   ChevronRight,
  
  
//   Upload,
//   Bold,
//   Italic,
//   Underline,
//   List,
//   ListOrdered,
//   AlignLeft,
//   Quote,
//   Paperclip,
//   Save,
// } from "lucide-react";

// import { motion } from "framer-motion";

// import Sidebar from "./Sidebar";
// import Topbar from "./Topbar";
// import { createEvent } from "../../api/eventApi";

// export default function AddEventPage() {
//   const [shortDesc, setShortDesc] = useState("");
//   const [eventDesc, setEventDesc] = useState("");
//   const [eventTitle, setEventTitle] = useState("");
//   const [eventType, setEventType] = useState("");
//   const [category, setCategory] = useState("");
//   const [eventDate, setEventDate] = useState("");
//   const [location, setLocation] = useState("");
//   const [organizer, setOrganizer] = useState("");
//   const [imageFile, setImageFile] = useState(null);
//   const [imagePreview, setImagePreview] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const imageInputRef = useRef(null);

//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     if (!file) return;
//     setImageFile(file);
//     setImagePreview(URL.createObjectURL(file));
//   };

//   const handleSaveEvent = async () => {
//     if (!eventTitle || !eventDate) {
//       alert("Event title and date are required.");
//       return;
//     }

//     try {
//       setLoading(true);
//       const data = new FormData();
//       data.append("title", eventTitle);
//       data.append("description", eventDesc);
//       data.append("shortDescription", shortDesc);
//       data.append("date", eventDate);
//       data.append("location", location);
//       data.append("organizer", organizer);
//       data.append("eventType", eventType);
//       data.append("category", category);
//       if (imageFile) data.append("image", imageFile);

//       const response = await createEvent(data);
//       if (response.success) {
//         alert("Event saved successfully!");
//         // Reset
//         setEventTitle(""); setShortDesc(""); setEventDesc("");
//         setEventDate(""); setLocation(""); setOrganizer("");
//         setEventType(""); setCategory("");
//         setImageFile(null); setImagePreview(null);
//       }
//     } catch (err) {
//       alert(err.response?.data?.message || "Failed to save event.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="h-screen w-full bg-[#f7f7f7] flex overflow-hidden">
//       {/* SIDEBAR */}
//       <Sidebar />

//       {/* RIGHT SIDE */}
//       <div className="flex-1 flex flex-col overflow-hidden">
//         {/* TOPBAR */}
//         <Topbar />

//         {/* PAGE CONTENT */}
//         <div className="flex-1 overflow-y-auto px-5 py-4">
//           {/* PAGE HEADER */}
//           <div className="flex items-start justify-between mb-5">
//             <div>
//               <h1 className="text-[32px] font-semibold text-[#1d1d1f] tracking-[-0.4px]">
//                 Add Event
//               </h1>

//               <p className="text-[13px] text-[#8b8b8b] mt-[2px]">
//                 Fill in the details below to add a new event.
//               </p>
//             </div>

//             {/* BREADCRUMB */}
//             <div className="hidden md:flex items-center gap-2 text-[12px] text-[#8b8b8b] mt-2">
//               <span className="hover:text-[#b88428] transition-colors cursor-pointer">
//                 Home
//               </span>

//               <ChevronRight size={12} strokeWidth={2} />

//               <span className="hover:text-[#b88428] transition-colors cursor-pointer">
//                 Events
//               </span>

//               <ChevronRight size={12} strokeWidth={2} />

//               <span className="text-[#b88428] font-medium">
//                 Add Event
//               </span>
//             </div>
//           </div>

//           {/* ALL SECTIONS */}
//           <div className="space-y-5">
//             {/* ========================================================= */}
//             {/* EVENT DETAILS */}
//             {/* ========================================================= */}
//             <motion.div
//               initial={{ opacity: 0, y: 18 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.45 }}
//               className="bg-white border border-[#ececec] rounded-[12px] shadow-[0_1px_2px_rgba(0,0,0,0.03)]"
//             >
//               {/* HEADER */}
//               <div className="px-5 pt-5 pb-2">
//                 <div className="flex items-center gap-2">
//                   <div className="w-[3px] h-[18px] rounded-full bg-[#c8952d]" />

//                   <h2 className="text-[15px] font-semibold text-[#1e1e1e]">
//                     Event Details
//                   </h2>
//                 </div>
//               </div>

//               <div className="px-5 pb-5">
//                 {/* ROW 1 */}
//                 <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mt-3">
//                   {/* TITLE */}
//                   <div>
//                     <label className="text-[13px] font-medium text-[#1f1f1f] mb-2 block">
//                       Event Title <span className="text-red-500">*</span>
//                     </label>

//                     <input
//                       type="text"
//                       value={eventTitle}
//                       onChange={(e) => setEventTitle(e.target.value)}
//                       placeholder="Enter event title"
//                       className="w-full h-[44px] rounded-[8px] border border-[#e6e6e6] px-4 text-[13px]
//                       placeholder:text-[#a6a6a6]
//                       focus:outline-none focus:ring-2 focus:ring-[#d8b06a]/20
//                       focus:border-[#d1a250]
//                       transition-all duration-300"
//                     />
//                   </div>

//                   {/* TYPE */}
//                   <div>
//                     <label className="text-[13px] font-medium text-[#1f1f1f] mb-2 block">
//                       Event Type <span className="text-red-500">*</span>
//                     </label>

//                     <select
//                       value={eventType}
//                       onChange={(e) => setEventType(e.target.value)}
//                       className="w-full h-[44px] rounded-[8px] border border-[#e6e6e6] px-4 text-[13px]
//                       text-[#7d7d7d]
//                       focus:outline-none focus:ring-2 focus:ring-[#d8b06a]/20
//                       focus:border-[#d1a250]
//                       transition-all duration-300"
//                     >
//                       <option value="">Select event type</option>
//                       <option value="Conference">Conference</option>
//                       <option value="Seminar">Seminar</option>
//                       <option value="Workshop">Workshop</option>
//                       <option value="Lecture">Lecture</option>
//                     </select>
//                   </div>

//                   {/* CATEGORY */}
//                   <div>
//                     <label className="text-[13px] font-medium text-[#1f1f1f] mb-2 block">
//                       Category <span className="text-red-500">*</span>
//                     </label>

//                     <select
//                       value={category}
//                       onChange={(e) => setCategory(e.target.value)}
//                       className="w-full h-[44px] rounded-[8px] border border-[#e6e6e6] px-4 text-[13px]
//                       text-[#7d7d7d]
//                       focus:outline-none focus:ring-2 focus:ring-[#d8b06a]/20
//                       focus:border-[#d1a250]
//                       transition-all duration-300"
//                     >
//                       <option value="">Select category</option>
//                       <option value="Mathematics">Mathematics</option>
//                       <option value="Physics">Physics</option>
//                       <option value="Computer Science">Computer Science</option>
//                     </select>
//                   </div>
//                 </div>

//                 {/* ROW 2 */}
//                 <div className="grid grid-cols-1 lg:grid-cols-[1fr_290px] gap-5 mt-5">
//                   {/* LEFT SIDE */}
//                   <div>
//                     {/* SHORT DESCRIPTION */}
//                     <div>
//                       <label className="text-[13px] font-medium text-[#1f1f1f] mb-2 block">
//                         Short Description{" "}
//                         <span className="text-red-500">*</span>
//                       </label>

//                       <div className="relative">
//                         <input
//                           value={shortDesc}
//                           onChange={(e) =>
//                             setShortDesc(e.target.value.slice(0, 150))
//                           }
//                           type="text"
//                           placeholder="Enter a short description"
//                           className="w-full h-[44px] rounded-[8px] border border-[#e6e6e6] px-4 pr-16 text-[13px]
//                           placeholder:text-[#a6a6a6]
//                           focus:outline-none focus:ring-2 focus:ring-[#d8b06a]/20
//                           focus:border-[#d1a250]"
//                         />

//                         <span className="absolute right-4 top-1/2 -translate-y-1/2 text-[11px] text-[#9d9d9d]">
//                           {shortDesc.length} / 150
//                         </span>
//                       </div>
//                     </div>

//                     {/* EDITOR */}
//                     <div className="mt-5">
//                       <label className="text-[13px] font-medium text-[#1f1f1f] mb-2 block">
//                         Event Description
//                       </label>

//                       <div className="border border-[#e8e8e8] rounded-[10px] overflow-hidden bg-white">
//                         {/* TOOLBAR */}
//                         <div className="h-[44px] border-b border-[#ececec] px-3 flex items-center gap-4 text-[#666]">
//                           <button className="text-[13px] font-medium hover:text-[#c8952d] transition-colors">
//                             Paragraph
//                           </button>

//                           <div className="w-[1px] h-4 bg-[#e5e5e5]" />

//                           <div className="flex items-center gap-3">
//                             <Bold size={15} className="cursor-pointer" />
//                             <Italic size={15} className="cursor-pointer" />
//                             <Underline size={15} className="cursor-pointer" />
//                             <List size={15} className="cursor-pointer" />
//                             <ListOrdered size={15} className="cursor-pointer" />
//                             <AlignLeft size={15} className="cursor-pointer" />
//                             <Paperclip size={15} className="cursor-pointer" />
//                             <Quote size={15} className="cursor-pointer" />
//                           </div>
//                         </div>

//                         {/* TEXTAREA */}
//                         <div className="relative">
//                           <textarea
//                             value={eventDesc}
//                             onChange={(e) =>
//                               setEventDesc(e.target.value.slice(0, 2000))
//                             }
//                             placeholder="Enter detailed event description"
//                             className="w-full min-h-[160px] resize-none px-4 py-4 text-[13px]
//                             placeholder:text-[#a7a7a7]
//                             focus:outline-none"
//                           />

//                           <span className="absolute right-4 bottom-4 text-[11px] text-[#9d9d9d]">
//                             {eventDesc.length} / 2000
//                           </span>
//                         </div>
//                       </div>
//                     </div>
//                   </div>

//                   {/* UPLOAD */}
//                   <div>
//                     <label className="text-[13px] font-medium text-[#1f1f1f] mb-2 block">
//                       Event Image / Banner
//                     </label>

//                     <motion.div
//                       whileHover={{ y: -2 }}
//                       className="border border-dashed border-[#dddddd]
//                       rounded-[10px]
//                       h-[250px]
//                       flex flex-col items-center justify-center
//                       bg-[#fcfcfc]"
//                     >
//                       <div className="w-11 h-11 rounded-full bg-[#fff8ec] flex items-center justify-center mb-4">
//                         <Upload size={20} className="text-[#c8952d]" />
//                       </div>

//                       <p className="text-[13px] text-[#5f5f5f] font-medium">
//                         Drag and drop an image here
//                       </p>

//                       <p className="text-[12px] text-[#9b9b9b] mt-1">
//                         or click to browse
//                       </p>
//                     </motion.div>
//                   </div>
//                 </div>
//               </div>
//             </motion.div>

//             {/* ACTION BUTTONS */}
//             <div className="flex justify-end gap-3 pb-5">
//               <motion.button
//                 whileTap={{ scale: 0.98 }}
//                 className="h-[42px] px-7 rounded-[8px]
//                 border border-[#d9c39b]
//                 text-[#9f7a33]
//                 bg-white
//                 text-[13px]
//                 font-medium"
//               >
//                 Cancel
//               </motion.button>

//               <motion.button
//                 whileTap={{ scale: 0.98 }}
//                 onClick={handleSaveEvent}
//                 disabled={loading}
//                 className="h-[42px] px-7 rounded-[8px]
//                 bg-[#c8952d]
//                 hover:bg-[#b88428]
//                 text-white
//                 text-[13px]
//                 font-medium
//                 flex items-center gap-2
//                 disabled:opacity-70"
//               >
//                 <Save size={15} />
//                 {loading ? "Saving..." : "Save Event"}
//               </motion.button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }




import { useState } from "react";
import {
  ChevronRight,
  Upload,
  Bold,
  Italic,
  Underline,
  List,
  ListOrdered,
  AlignLeft,
  Quote,
  Paperclip,
  Save,

  /* ADDED ICONS */
  CalendarDays,
  Clock3,
  MapPin,
  Link2,
  Mail,
  Phone,
} from "lucide-react";

import { motion } from "framer-motion";

import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
// import API from "../../api/axios";

export default function AddEventPage() {
  const [shortDesc, setShortDesc] = useState("");
  const [eventDesc, setEventDesc] = useState("");

  //upload image
  const [imagePreview, setImagePreview] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadError, setUploadError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  /* =========================================================
   IMAGE VALIDATION
========================================================= */
  const validateImage = (file) => {
    const allowedTypes = ["image/jpeg", "image/jpg", "image/png", "image/webp"];

    if (!allowedTypes.includes(file.type)) {
      return "Only JPG, PNG, and WEBP images are allowed.";
    }

    if (file.size > 2 * 1024 * 1024) {
      return "Maximum image size is 2MB.";
    }

    return null;
  };

  /* =========================================================
   HANDLE FILE SELECT
========================================================= */
  const handleFileChange = (file) => {
    if (!file) return;

    const error = validateImage(file);

    if (error) {
      setUploadError(error);
      return;
    }

    setUploadError("");

    setSelectedFile(file);

    setImagePreview(URL.createObjectURL(file));

    setFormData({
      ...formData,
      image: file,
    });
  };

  /* =========================================================
   INPUT CHANGE
========================================================= */
  const handleImageInput = (e) => {
    const file = e.target.files[0];
    handleFileChange(file);
  };

  /* =========================================================
   DRAG DROP
========================================================= */
  const handleDrop = (e) => {
    e.preventDefault();

    const file = e.dataTransfer.files[0];

    handleFileChange(file);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  /* =========================================================
   REMOVE IMAGE
========================================================= */
  const removeImage = () => {
    setSelectedFile(null);
    setImagePreview(null);
    setUploadError("");

    setFormData({
      ...formData,
      image: "",
    });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async () => {
    try {
      setIsSubmitting(true);

      const payload = new FormData();

      /* =====================================================
       APPEND FORM FIELDS
    ===================================================== */
      Object.keys(formData).forEach((key) => {
        payload.append(key, formData[key]);
      });

      /* =====================================================
       API REQUEST
    ===================================================== */
      const response = await API.post("/events", payload, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      alert(response.data.message || "Event created successfully");

      console.log(response.data);
    } catch (error) {
      console.error(error);

      alert(error?.response?.data?.message || "Failed to upload event");
    } finally {
      setIsSubmitting(false);
    }
  };

  const [formData, setFormData] = useState({
    title: "",
    type: "",
    category: "",
    short_desc: "",
    description: "",
    image: "",

    start_date: "",
    start_time: "",

    end_date: "",
    end_time: "",

    venue: "",

    mode: "offline",

    meeting_link: "",

    registration_link: "",

    contact_email: "",

    contact_phone: "",

    status: "published",
  });

  return (
    <div className="h-screen w-full bg-[#f7f7f7] flex overflow-hidden">
      {/* SIDEBAR */}
      <Sidebar />

      {/* RIGHT SIDE */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* TOPBAR */}
        <Topbar />

        {/* PAGE CONTENT */}
        <div className="flex-1 overflow-y-auto px-5 py-4">
          {/* PAGE HEADER */}
          <div className="flex items-start justify-between mb-5">
            <div>
              <h1 className="text-[32px] font-semibold text-[#1d1d1f] tracking-[-0.4px]">
                Add Event
              </h1>

              <p className="text-[13px] text-[#8b8b8b] mt-[2px]">
                Fill in the details below to add a new event.
              </p>
            </div>

            {/* BREADCRUMB */}
            <div className="hidden md:flex items-center gap-2 text-[12px] text-[#8b8b8b] mt-2">
              <span className="hover:text-[#b88428] transition-colors cursor-pointer">
                Home
              </span>

              <ChevronRight size={12} strokeWidth={2} />

              <span className="hover:text-[#b88428] transition-colors cursor-pointer">
                Events
              </span>

              <ChevronRight size={12} strokeWidth={2} />

              <span className="text-[#b88428] font-medium">Add Event</span>
            </div>
          </div>

          {/* ALL SECTIONS */}
          <div className="space-y-5">
            {/* ========================================================= */}
            {/* EVENT DETAILS */}
            {/* ========================================================= */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
              className="bg-white border border-[#ececec] rounded-[12px] shadow-[0_1px_2px_rgba(0,0,0,0.03)]"
            >
              {/* HEADER */}
              <div className="px-5 pt-5 pb-2">
                <div className="flex items-center gap-2">
                  <div className="w-[3px] h-[18px] rounded-full bg-[#c8952d]" />

                  <h2 className="text-[15px] font-semibold text-[#1e1e1e]">
                    Event Details
                  </h2>
                </div>
              </div>

              <div className="px-5 pb-5">
                {/* ROW 1 */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mt-3">
                  {/* TITLE */}
                  <div>
                    <label className="text-[13px] font-medium text-[#1f1f1f] mb-2 block">
                      Event Title <span className="text-red-500">*</span>
                    </label>

                    <input
                      type="text"
                      name="title"
                      placeholder="Enter event title"
                      value={formData.title}
                      onChange={handleChange}
                      className="w-full h-[44px] rounded-[8px] border border-[#e6e6e6] px-4 text-[13px]
  placeholder:text-[#a6a6a6]
  focus:outline-none focus:ring-2 focus:ring-[#d8b06a]/20
  focus:border-[#d1a250]
  transition-all duration-300"
                    />
                  </div>

                  {/* TYPE */}
                  <div>
                    <label className="text-[13px] font-medium text-[#1f1f1f] mb-2 block">
                      Event Type <span className="text-red-500">*</span>
                    </label>

                    <select
                      name="type"
                      value={formData.type}
                      onChange={handleChange}
                      className="w-full h-[44px]
    rounded-[8px]
    border border-[#e6e6e6]
    bg-white
    px-4
    text-[13px]
    text-[#5f5f5f]
    appearance-none
    focus:outline-none
    focus:ring-2 focus:ring-[#d8b06a]/20
    focus:border-[#d1a250]
    hover:border-[#d6d6d6]
    transition-all duration-300"
                    >
                      <option value="" disabled>
                        Select event type
                      </option>

                      <option value="conference">Conference</option>

                      <option value="seminar">Seminar</option>

                      <option value="workshop">Workshop</option>

                      <option value="webinar">Webinar</option>

                      <option value="competition">Competition</option>

                      <option value="training_program">Training Program</option>

                      <option value="research_meeting">Research Meeting</option>
                    </select>
                  </div>

                  {/* CATEGORY */}
                  <div>
                    <label className="text-[13px] font-medium text-[#1f1f1f] mb-2 block">
                      Category <span className="text-red-500">*</span>
                    </label>

                    <select
                      name="category"
                      value={formData.category}
                      onChange={handleChange}
                      className="w-full h-[44px]
    rounded-[8px]
    border border-[#e6e6e6]
    bg-white
    px-4
    text-[13px]
    text-[#5f5f5f]
    appearance-none
    focus:outline-none
    focus:ring-2 focus:ring-[#d8b06a]/20
    focus:border-[#d1a250]
    hover:border-[#d6d6d6]
    transition-all duration-300"
                    >
                      <option value="" disabled>
                        Select category
                      </option>

                      <option value="mathematics">Mathematics</option>

                      <option value="applied_mathematics">
                        Applied Mathematics
                      </option>

                      <option value="computer_science">Computer Science</option>

                      <option value="artificial_intelligence">
                        Artificial Intelligence
                      </option>

                      <option value="machine_learning">Machine Learning</option>

                      <option value="data_science">Data Science</option>

                      <option value="cyber_security">Cyber Security</option>

                      <option value="cloud_computing">Cloud Computing</option>

                      <option value="iot">Internet of Things (IoT)</option>

                      <option value="robotics">Robotics</option>

                      <option value="blockchain">Blockchain</option>

                

                      
                    </select>
                  </div>
                </div>

                {/* ROW 2 */}
                <div className="grid grid-cols-1 lg:grid-cols-[1fr_290px] gap-5 mt-5">
                  {/* LEFT SIDE */}
                  <div>
                    {/* SHORT DESCRIPTION */}
                    <div>
                      <label className="text-[13px] font-medium text-[#1f1f1f] mb-2 block">
                        Short Description{" "}
                        <span className="text-red-500">*</span>
                      </label>

                      <div className="relative">
                        <input
                          value={shortDesc}
                          onChange={(e) =>
                            setShortDesc(e.target.value.slice(0, 150))
                          }
                          type="text"
                          placeholder="Enter a short description"
                          className="w-full h-[44px] rounded-[8px] border border-[#e6e6e6] px-4 pr-16 text-[13px]
                          placeholder:text-[#a6a6a6]
                          focus:outline-none focus:ring-2 focus:ring-[#d8b06a]/20
                          focus:border-[#d1a250]"
                        />

                        <span className="absolute right-4 top-1/2 -translate-y-1/2 text-[11px] text-[#9d9d9d]">
                          {shortDesc.length} / 150
                        </span>
                      </div>
                    </div>

                    {/* EDITOR */}
                    <div className="mt-5">
                      <label className="text-[13px] font-medium text-[#1f1f1f] mb-2 block">
                        Event Description
                      </label>

                      <div className="border border-[#e8e8e8] rounded-[10px] overflow-hidden bg-white">
                        {/* TOOLBAR */}
                        <div className="h-[44px] border-b border-[#ececec] px-3 flex items-center gap-4 text-[#666]">
                          <button className="text-[13px] font-medium hover:text-[#c8952d] transition-colors">
                            Paragraph
                          </button>

                          <div className="w-[1px] h-4 bg-[#e5e5e5]" />

                          <div className="flex items-center gap-3">
                            <Bold size={15} className="cursor-pointer" />
                            <Italic size={15} className="cursor-pointer" />
                            <Underline size={15} className="cursor-pointer" />
                            <List size={15} className="cursor-pointer" />
                            <ListOrdered size={15} className="cursor-pointer" />
                            <AlignLeft size={15} className="cursor-pointer" />
                            <Paperclip size={15} className="cursor-pointer" />
                            <Quote size={15} className="cursor-pointer" />
                          </div>
                        </div>

                        {/* TEXTAREA */}
                        <div className="relative">
                          <textarea
                            value={eventDesc}
                            onChange={(e) =>
                              setEventDesc(e.target.value.slice(0, 2000))
                            }
                            placeholder="Enter detailed event description"
                            className="w-full min-h-[160px] resize-none px-4 py-4 text-[13px]
                            placeholder:text-[#a7a7a7]
                            focus:outline-none"
                          />

                          <span className="absolute right-4 bottom-4 text-[11px] text-[#9d9d9d]">
                            {eventDesc.length} / 2000
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* ========================================================= */}
                  {/* UPLOAD */}
                  {/* ========================================================= */}
                  <div>
                    <label className="text-[13px] font-medium text-[#1f1f1f] mb-2 block">
                      Event Image / Banner
                    </label>

                    {/* HIDDEN INPUT */}
                    <input
                      type="file"
                      id="eventImageUpload"
                      accept=".jpg,.jpeg,.png,.webp"
                      className="hidden"
                      onChange={handleImageInput}
                    />

                    <motion.div
                      whileHover={{ y: -2 }}
                      onDrop={handleDrop}
                      onDragOver={handleDragOver}
                      onClick={() =>
                        document.getElementById("eventImageUpload").click()
                      }
                      className="relative border border-dashed border-[#dddddd]
    rounded-[10px]
    h-[250px]
    flex flex-col items-center justify-center
    bg-[#fcfcfc]
    cursor-pointer
    overflow-hidden
    transition-all duration-300
    hover:border-[#d0b07b]
    hover:bg-[#fffdf9]"
                    >
                      {/* IMAGE PREVIEW */}
                      {imagePreview ? (
                        <div className="relative w-full h-full">
                          <img
                            src={imagePreview}
                            alt="Preview"
                            className="w-full h-full object-cover"
                          />

                          {/* OVERLAY */}
                          <div
                            className="absolute inset-0 bg-black/30
          opacity-0 hover:opacity-100
          transition-all duration-300
          flex flex-col items-center justify-center"
                          >
                            <p className="text-white text-[13px] font-medium mb-3">
                              {selectedFile?.name}
                            </p>

                            <button
                              type="button"
                              onClick={(e) => {
                                e.stopPropagation();
                                removeImage();
                              }}
                              className="px-4 py-2 rounded-[6px]
            bg-red-500 hover:bg-red-600
            text-white text-[12px] font-medium
            transition-all duration-300"
                            >
                              Remove Image
                            </button>
                          </div>
                        </div>
                      ) : (
                        <>
                          {/* DEFAULT UI */}
                          <div className="w-11 h-11 rounded-full bg-[#fff8ec] flex items-center justify-center mb-4">
                            <Upload size={20} className="text-[#c8952d]" />
                          </div>

                          <p className="text-[13px] text-[#5f5f5f] font-medium">
                            Drag and drop an image here
                          </p>

                          <p className="text-[12px] text-[#9b9b9b] mt-1">
                            or click to browse
                          </p>

                          <div className="mt-5 text-center">
                            <p className="text-[11px] text-[#9a9a9a]">
                              Supported formats: JPG, PNG, WEBP
                            </p>

                            <p className="text-[11px] text-[#9a9a9a] mt-1">
                              Maximum size: 2MB
                            </p>
                          </div>
                        </>
                      )}
                    </motion.div>

                    {/* FILE NAME */}
                    {selectedFile && (
                      <p className="mt-3 text-[12px] text-[#666666] truncate">
                        Selected: {selectedFile.name}
                      </p>
                    )}

                    {/* ERROR */}
                    {uploadError && (
                      <p className="mt-2 text-[12px] text-red-500">
                        {uploadError}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* ========================================================= */}
            {/* DATE, TIME & VENUE */}
            {/* ========================================================= */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
              className="bg-white border border-[#ececec] rounded-[10px] shadow-[0_1px_2px_rgba(0,0,0,0.03)]"
            >
              {/* HEADER */}
              <div className="px-6 pt-5 pb-3">
                <div className="flex items-center gap-[10px]">
                  <div className="w-[3px] h-[18px] rounded-full bg-[#c8952d]" />

                  <h2 className="text-[15px] font-semibold text-[#1d1d1f] tracking-[-0.1px]">
                    Date, Time & Venue
                  </h2>
                </div>
              </div>

              {/* CONTENT */}
              <div className="px-6 pb-6">
                {/* ROW 1 */}
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
                  {/* START DATE */}
                  <div>
                    <label className="block mb-[9px] text-[13px] font-medium text-[#1f1f1f]">
                      Start Date <span className="text-[#ef4444]">*</span>
                    </label>

                    <div
                      className="h-[44px] rounded-[8px] border border-[#e6e6e6]
          bg-white
          px-[14px]
          flex items-center gap-3
          text-[13px] text-[#a3a3a3]
          transition-all duration-300
          hover:border-[#d8d8d8]
          focus-within:border-[#d1a250]
          focus-within:ring-2 focus-within:ring-[#d8b06a]/20"
                    >
                      <CalendarDays size={15} className="text-[#9c9c9c]" />

                      <input
                        type="date"
                        name="start_date"
                        value={formData.start_date}
                        onChange={handleChange}
                        className="w-full bg-transparent outline-none text-[#5d5d5d]
            text-[13px]"
                      />
                    </div>
                  </div>

                  {/* START TIME */}
                  <div>
                    <label className="block mb-[9px] text-[13px] font-medium text-[#1f1f1f]">
                      Start Time <span className="text-[#ef4444]">*</span>
                    </label>

                    <div
                      className="h-[44px] rounded-[8px] border border-[#e6e6e6]
          bg-white
          px-[14px]
          flex items-center gap-3
          text-[13px] text-[#a3a3a3]
          transition-all duration-300
          hover:border-[#d8d8d8]
          focus-within:border-[#d1a250]
          focus-within:ring-2 focus-within:ring-[#d8b06a]/20"
                    >
                      <Clock3 size={15} className="text-[#9c9c9c]" />

                      <input
                        type="time"
                        name="start_time"
                        value={formData.start_time}
                        onChange={handleChange}
                        className="w-full bg-transparent outline-none text-[#5d5d5d]
            text-[13px]"
                      />
                    </div>
                  </div>

                  {/* END DATE */}
                  <div>
                    <label className="block mb-[9px] text-[13px] font-medium text-[#1f1f1f]">
                      End Date <span className="text-[#ef4444]">*</span>
                    </label>

                    <div
                      className="h-[44px] rounded-[8px] border border-[#e6e6e6]
          bg-white
          px-[14px]
          flex items-center gap-3
          text-[13px] text-[#a3a3a3]
          transition-all duration-300
          hover:border-[#d8d8d8]
          focus-within:border-[#d1a250]
          focus-within:ring-2 focus-within:ring-[#d8b06a]/20"
                    >
                      <CalendarDays size={15} className="text-[#9c9c9c]" />

                      <input
                        type="date"
                        name="end_date"
                        value={formData.end_date}
                        onChange={handleChange}
                        className="w-full bg-transparent outline-none text-[#5d5d5d]
            text-[13px]"
                      />
                    </div>
                  </div>

                  {/* END TIME */}
                  <div>
                    <label className="block mb-[9px] text-[13px] font-medium text-[#1f1f1f]">
                      End Time <span className="text-[#ef4444]">*</span>
                    </label>

                    <div
                      className="h-[44px] rounded-[8px] border border-[#e6e6e6]
          bg-white
          px-[14px]
          flex items-center gap-3
          text-[13px] text-[#a3a3a3]
          transition-all duration-300
          hover:border-[#d8d8d8]
          focus-within:border-[#d1a250]
          focus-within:ring-2 focus-within:ring-[#d8b06a]/20"
                    >
                      <Clock3 size={15} className="text-[#9c9c9c]" />

                      <input
                        type="time"
                        name="end_time"
                        value={formData.end_time}
                        onChange={handleChange}
                        className="w-full bg-transparent outline-none text-[#5d5d5d]
            text-[13px]"
                      />
                    </div>
                  </div>
                </div>

                {/* ROW 2 */}
                <div className="grid grid-cols-1 xl:grid-cols-[1.2fr_0.5fr_0.7fr] gap-5 mt-5">
                  {/* VENUE */}
                  <div>
                    <label className="block mb-[9px] text-[13px] font-medium text-[#1f1f1f]">
                      Venue <span className="text-[#ef4444]">*</span>
                    </label>

                    <div
                      className="h-[44px] rounded-[8px] border border-[#e6e6e6]
          bg-white
          px-[14px]
          flex items-center gap-3
          transition-all duration-300
          hover:border-[#d8d8d8]
          focus-within:border-[#d1a250]
          focus-within:ring-2 focus-within:ring-[#d8b06a]/20"
                    >
                      <MapPin size={15} className="text-[#9c9c9c]" />

                      <input
                        type="text"
                        name="venue"
                        value={formData.venue}
                        onChange={handleChange}
                        placeholder="Enter venue name or location"
                        className="w-full bg-transparent outline-none text-[13px]
            text-[#5d5d5d]
            placeholder:text-[#a6a6a6]"
                      />
                    </div>
                  </div>

                  {/* EVENT MODE */}
                  <div>
                    <label className="block mb-[9px] text-[13px] font-medium text-[#1f1f1f]">
                      Event Mode <span className="text-[#ef4444]">*</span>
                    </label>

                    <select
                      name="mode"
                      value={formData.mode}
                      onChange={handleChange}
                      className="w-full h-[44px]
          rounded-[8px]
          border border-[#e6e6e6]
          bg-white
          px-[14px]
          text-[13px]
          text-[#707070]
          transition-all duration-300
          hover:border-[#d8d8d8]
          focus:outline-none
          focus:border-[#d1a250]
          focus:ring-2 focus:ring-[#d8b06a]/20"
                    >
                      <option value="offline">Select mode</option>
                      <option value="online">Online</option>
                      <option value="offline">Offline</option>
                    </select>
                  </div>

                  {/* MEETING LINK */}
                  <div>
                    <label className="block mb-[9px] text-[13px] font-medium text-[#1f1f1f]">
                      Online Meeting Link
                    </label>

                    <div
                      className="h-[44px] rounded-[8px] border border-[#e6e6e6]
          bg-white
          px-[14px]
          flex items-center gap-3
          transition-all duration-300
          hover:border-[#d8d8d8]
          focus-within:border-[#d1a250]
          focus-within:ring-2 focus-within:ring-[#d8b06a]/20"
                    >
                      <Link2 size={15} className="text-[#9c9c9c]" />

                      <input
                        type="text"
                        name="meeting_link"
                        value={formData.meeting_link}
                        onChange={handleChange}
                        placeholder="Enter meeting link (if online)"
                        className="w-full bg-transparent outline-none text-[13px]
            text-[#5d5d5d]
            placeholder:text-[#a6a6a6]"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* ========================================================= */}
            {/* ADDITIONAL INFORMATION */}
            {/* ========================================================= */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
              className="bg-white border border-[#ececec] rounded-[10px] shadow-[0_1px_2px_rgba(0,0,0,0.03)]"
            >
              {/* HEADER */}
              <div className="px-6 pt-5 pb-3">
                <div className="flex items-center gap-[10px]">
                  <div className="w-[3px] h-[18px] rounded-full bg-[#c8952d]" />

                  <h2 className="text-[15px] font-semibold text-[#1d1d1f] tracking-[-0.1px]">
                    Additional Information{" "}
                    <span className="text-[#8f8f8f] font-normal">
                      (Optional)
                    </span>
                  </h2>
                </div>
              </div>

              {/* CONTENT */}
              <div className="px-6 pb-6">
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
                  {/* REGISTRATION */}
                  <div>
                    <label className="block mb-[9px] text-[13px] font-medium text-[#1f1f1f]">
                      Registration Link
                    </label>

                    <div
                      className="h-[44px] rounded-[8px] border border-[#e6e6e6]
          bg-white
          px-[14px]
          flex items-center gap-3
          transition-all duration-300
          hover:border-[#d8d8d8]
          focus-within:border-[#d1a250]
          focus-within:ring-2 focus-within:ring-[#d8b06a]/20"
                    >
                      <Link2 size={15} className="text-[#9c9c9c]" />

                      <input
                        type="text"
                        name="registration_link"
                        value={formData.registration_link}
                        onChange={handleChange}
                        placeholder="Enter registration link"
                        className="w-full bg-transparent outline-none text-[13px]
            text-[#5d5d5d]
            placeholder:text-[#a6a6a6]"
                      />
                    </div>
                  </div>

                  {/* EMAIL */}
                  <div>
                    <label className="block mb-[9px] text-[13px] font-medium text-[#1f1f1f]">
                      Contact Email
                    </label>

                    <div
                      className="h-[44px] rounded-[8px] border border-[#e6e6e6]
          bg-white
          px-[14px]
          flex items-center gap-3"
                    >
                      <Mail size={15} className="text-[#9c9c9c]" />

                      <input
                        type="email"
                        name="contact_email"
                        value={formData.contact_email}
                        onChange={handleChange}
                        placeholder="Enter contact email"
                        className="w-full bg-transparent outline-none text-[13px]
            text-[#5d5d5d]
            placeholder:text-[#a6a6a6]"
                      />
                    </div>
                  </div>

                  {/* PHONE */}
                  <div>
                    <label className="block mb-[9px] text-[13px] font-medium text-[#1f1f1f]">
                      Contact Phone
                    </label>

                    <div
                      className="h-[44px] rounded-[8px] border border-[#e6e6e6]
          bg-white
          px-[14px]
          flex items-center gap-3"
                    >
                      <Phone size={15} className="text-[#9c9c9c]" />

                      <input
                        type="text"
                        name="contact_phone"
                        value={formData.contact_phone}
                        onChange={handleChange}
                        placeholder="Enter contact phone"
                        className="w-full bg-transparent outline-none text-[13px]
            text-[#5d5d5d]
            placeholder:text-[#a6a6a6]"
                      />
                    </div>
                  </div>

                  {/* STATUS */}
                  <div>
                    <label className="block mb-[9px] text-[13px] font-medium text-[#1f1f1f]">
                      Status
                    </label>

                    <select
                      name="status"
                      value={formData.status}
                      onChange={handleChange}
                      className="w-full h-[44px]
          rounded-[8px]
          border border-[#e6e6e6]
          bg-white
          px-[14px]
          text-[13px]
          font-medium
          text-[#4ca85c]
          transition-all duration-300
          hover:border-[#d8d8d8]
          focus:outline-none
          focus:border-[#d1a250]
          focus:ring-2 focus:ring-[#d8b06a]/20"
                    >
                      <option value="published">Published</option>
                      <option value="draft">Draft</option>
                    </select>
                  </div>
                </div>

                {/* ACTION BUTTONS */}
                <div className="flex justify-end gap-3 mt-7">
                  <motion.button
                    whileHover={{ y: -1 }}
                    whileTap={{ scale: 0.98 }}
                    className="h-[42px]
        px-7
        rounded-[8px]
        border border-[#d9c39b]
        bg-white
        text-[#9f7a33]
        text-[13px]
        font-medium
        hover:bg-[#fffaf0]
        transition-all duration-300"
                  >
                    Cancel
                  </motion.button>

                  <motion.button
                    whileHover={{
                      y: -1,
                      boxShadow: "0 10px 20px rgba(184,132,40,0.18)",
                    }}
                    whileTap={{ scale: 0.98 }}
                    onClick={handleSubmit}
                    disabled={isSubmitting}
                    className="h-[42px]
  px-7
  rounded-[8px]
  bg-[#c8952d]
  hover:bg-[#b88428]
  disabled:opacity-70
  disabled:cursor-not-allowed
  text-white
  text-[13px]
  font-medium
  flex items-center gap-2
  transition-all duration-300"
                  >
                    <Save size={15} />

                    {isSubmitting ? "Uploading..." : "Save Event"}
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
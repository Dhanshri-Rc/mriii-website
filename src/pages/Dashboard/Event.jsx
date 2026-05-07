import  { useState } from "react";
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
} from "lucide-react";

import { motion } from "framer-motion";

import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

export default function AddEventPage() {
  const [shortDesc, setShortDesc] = useState("");
  const [eventDesc, setEventDesc] = useState("");

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

              <span className="text-[#b88428] font-medium">
                Add Event
              </span>
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
                      placeholder="Enter event title"
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
                      className="w-full h-[44px] rounded-[8px] border border-[#e6e6e6] px-4 text-[13px]
                      text-[#7d7d7d]
                      focus:outline-none focus:ring-2 focus:ring-[#d8b06a]/20
                      focus:border-[#d1a250]
                      transition-all duration-300"
                    >
                      <option>Select event type</option>
                    </select>
                  </div>

                  {/* CATEGORY */}
                  <div>
                    <label className="text-[13px] font-medium text-[#1f1f1f] mb-2 block">
                      Category <span className="text-red-500">*</span>
                    </label>

                    <select
                      className="w-full h-[44px] rounded-[8px] border border-[#e6e6e6] px-4 text-[13px]
                      text-[#7d7d7d]
                      focus:outline-none focus:ring-2 focus:ring-[#d8b06a]/20
                      focus:border-[#d1a250]
                      transition-all duration-300"
                    >
                      <option>Select category</option>
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

                  {/* UPLOAD */}
                  <div>
                    <label className="text-[13px] font-medium text-[#1f1f1f] mb-2 block">
                      Event Image / Banner
                    </label>

                    <motion.div
                      whileHover={{ y: -2 }}
                      className="border border-dashed border-[#dddddd]
                      rounded-[10px]
                      h-[250px]
                      flex flex-col items-center justify-center
                      bg-[#fcfcfc]"
                    >
                      <div className="w-11 h-11 rounded-full bg-[#fff8ec] flex items-center justify-center mb-4">
                        <Upload size={20} className="text-[#c8952d]" />
                      </div>

                      <p className="text-[13px] text-[#5f5f5f] font-medium">
                        Drag and drop an image here
                      </p>

                      <p className="text-[12px] text-[#9b9b9b] mt-1">
                        or click to browse
                      </p>
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* ACTION BUTTONS */}
            <div className="flex justify-end gap-3 pb-5">
              <motion.button
                whileTap={{ scale: 0.98 }}
                className="h-[42px] px-7 rounded-[8px]
                border border-[#d9c39b]
                text-[#9f7a33]
                bg-white
                text-[13px]
                font-medium"
              >
                Cancel
              </motion.button>

              <motion.button
                whileTap={{ scale: 0.98 }}
                className="h-[42px] px-7 rounded-[8px]
                bg-[#c8952d]
                hover:bg-[#b88428]
                text-white
                text-[13px]
                font-medium
                flex items-center gap-2"
              >
                <Save size={15} />
                Save Event
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
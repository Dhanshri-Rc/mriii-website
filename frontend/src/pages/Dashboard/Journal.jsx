// import { useRef, useState } from "react";
// import {
//   UploadCloud,
//   Link as LinkIcon,
//   ChevronDown,
//   X,
// } from "lucide-react";

// import Sidebar from "./Sidebar";
// import Topbar from "./Topbar";
// import { createJournal } from "../../api/journalApi";

// function Journal() {
//   const fileInputRef = useRef(null);

//   /* FORM STATE */
//   const [formData, setFormData] = useState({
//     journalName: "",
//     eissn: "",
//     pissn: "",
//     journalUrl: "",
//     publisher: "",
//     description: "",
//     frequency: "",
//     subjectArea: "",
//     status: "Published",
//   });

//   const [imagePreview, setImagePreview] = useState(null);
//   const [errors, setErrors] = useState({});

//   /* HANDLE INPUT */
//   const handleChange = (e) => {
//     const { name, value } = e.target;

//     if (name === "description" && value.length > 500) return;

//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));

//     setErrors((prev) => ({
//       ...prev,
//       [name]: "",
//     }));
//   };

//   /* IMAGE UPLOAD */
//   const handleImageUpload = (e) => {
//     const file = e.target.files[0];

//     if (!file) return;

//     if (
//       !["image/png", "image/jpeg", "image/webp"].includes(file.type)
//     ) {
//       alert("Only JPG, PNG, and WebP files are allowed.");
//       return;
//     }

//     if (file.size > 2 * 1024 * 1024) {
//       alert("Maximum file size is 2MB.");
//       return;
//     }

//     setImagePreview(URL.createObjectURL(file));
//   };

//   /* REMOVE IMAGE */
//   const removeImage = () => {
//     setImagePreview(null);

//     if (fileInputRef.current) {
//       fileInputRef.current.value = "";
//     }
//   };

//   /* VALIDATION */
//   const validateForm = () => {
//     const newErrors = {};

//     if (!formData.journalName.trim()) {
//       newErrors.journalName = "Journal name is required";
//     }

//     if (!formData.eissn.trim()) {
//       newErrors.eissn = "eISSN is required";
//     }

//     if (!imagePreview) {
//       newErrors.image = "Journal cover image is required";
//     }

//     setErrors(newErrors);

//     return Object.keys(newErrors).length === 0;
//   };

//   /* SUBMIT */
//   const handleSubmit = async () => {
//     if (!validateForm()) return;

//     try {
//       // Build FormData for multipart/form-data (supports file upload)
//       const data = new FormData();
//       data.append("title", formData.journalName);
//       data.append("description", formData.description);
//       data.append("eissn", formData.eissn);
//       data.append("pissn", formData.pissn);
//       data.append("journalUrl", formData.journalUrl);
//       data.append("publisher", formData.publisher);
//       data.append("frequency", formData.frequency);
//       data.append("subjectArea", formData.subjectArea);
//       data.append("status", formData.status);

//       // Attach image file if uploaded
//       if (fileInputRef.current?.files?.[0]) {
//         data.append("image", fileInputRef.current.files[0]);
//       }

//       const response = await createJournal(data);

//       if (response.success) {
//         alert("Journal saved successfully!");
//         // Reset form
//         setFormData({
//           journalName: "", eissn: "", pissn: "", journalUrl: "",
//           publisher: "", description: "", frequency: "", subjectArea: "", status: "Published",
//         });
//         setImagePreview(null);
//         if (fileInputRef.current) fileInputRef.current.value = "";
//       }
//     } catch (err) {
//       const msg = err.response?.data?.message || "Failed to save journal.";
//       alert(msg);
//     }
//   };

//   return (
//     <div className="h-screen w-full overflow-hidden bg-[#f7f7f7] flex">
//       {/* SIDEBAR */}
//       <Sidebar />

//       {/* RIGHT */}
//       <div className="flex-1 h-screen flex flex-col overflow-hidden">
//         {/* TOPBAR */}
//         <Topbar />

//         {/* PAGE */}
//         <div className="flex-1 overflow-y-auto px-5 py-4">
//           {/* HEADER */}
//           <div className="flex items-start justify-between mb-5">
//             <div>
//               <h1 className="text-[24px] font-semibold font-serif text-[#1d1d1d] ">
//                 Add Journal
//               </h1>

//               <p className="mt-2 text-[13px] text-[#7a7a7a]">
//                 Fill in the details below to add a new journal.
//               </p>
//             </div>

//             {/* BREADCRUMB */}
//             <div className="flex items-center gap-2 text-[13px] text-[#7b7b7b] mt-1">
//               <span>Home</span>

//               <span className="text-[#bdbdbd]">›</span>

//               <span>Journals</span>

//               <span className="text-[#bdbdbd]">›</span>

//               <span className="text-[#c9960c] font-medium">
//                 Add Journal
//               </span>
//             </div>
//           </div>

//           {/* CARD */}
//           <div className="bg-white border border-[#ececec] rounded-xl p-4 shadow-sm">
//             {/* TITLE */}
//             <div className="flex items-center gap-2 mb-4">
//               <div className="w-[3px] h-[18px] rounded-full bg-[#c9960c]" />

//               <h2 className="text-[16px] font-semibold text-[#202020]">
//                 Journal Information
//               </h2>
//             </div>

//             {/* CONTENT */}
//             <div className="flex gap-6">
//               {/* LEFT */}
//               <div className="w-[250px] shrink-0">
//                 <label className="block text-[13px] font-medium text-[#1f1f1f] mb-2">
//                   Journal Cover Image{" "}
//                   <span className="text-red-500">*</span>
//                 </label>

//                 <input
//                   ref={fileInputRef}
//                   type="file"
//                   accept=".png,.jpg,.jpeg,.webp"
//                   className="hidden"
//                   onChange={handleImageUpload}
//                 />

//                 <div
//                   onClick={() => fileInputRef.current.click()}
//                   className={`relative h-[260px] border border-dashed rounded-xl bg-[#fcfcfc] flex flex-col items-center justify-center text-center px-5 cursor-pointer transition-all duration-300 ${
//                     errors.image
//                       ? "border-red-400"
//                       : "border-[#d8d8d8] hover:border-[#c9960c]"
//                   }`}
//                 >
//                   {imagePreview ? (
//                     <>
//                       <img
//                         src={imagePreview}
//                         alt="preview"
//                         className="w-full h-full object-cover rounded-xl"
//                       />

//                       <button
//                         type="button"
//                         onClick={(e) => {
//                           e.stopPropagation();
//                           removeImage();
//                         }}
//                         className="absolute top-3 right-3 h-8 w-8 rounded-full bg-black/70 flex items-center justify-center"
//                       >
//                         <X
//                           size={15}
//                           className="text-white"
//                         />
//                       </button>
//                     </>
//                   ) : (
//                     <>
//                       <div className="h-12 w-12 rounded-full bg-[#fbf6ea] flex items-center justify-center">
//                         <UploadCloud
//                           size={22}
//                           className="text-[#c9960c]"
//                         />
//                       </div>

//                       <p className="mt-4 text-[13px] text-[#555555] leading-5">
//                         Drag and drop an image here
//                         <br />
//                         or click to browse
//                       </p>

//                       <p className="mt-5 text-[11px] leading-5 text-[#9a9a9a]">
//                         Supported formats: JPG, PNG, WebP
//                         <br />
//                         Max size: 2MB. Recommended size:
//                         600x800px
//                       </p>
//                     </>
//                   )}
//                 </div>

//                 {errors.image && (
//                   <p className="mt-2 text-[12px] text-red-500">
//                     {errors.image}
//                   </p>
//                 )}
//               </div>

//               {/* RIGHT */}
//               <div className="flex-1 ">
//                 {/* JOURNAL NAME */}
//                 <InputField
//                   label="Journal Name"
//                   required
//                   name="journalName"
//                   value={formData.journalName}
//                   onChange={handleChange}
//                   placeholder="Enter journal name"
//                   error={errors.journalName}
//                 />

//                 {/* ISSN */}
//                 <div className="grid grid-cols-2 gap-3 mt-3 ">
//                   <InputField
//                     label="eISSN"
//                     required
//                     name="eissn"
//                     value={formData.eissn}
//                     onChange={handleChange}
//                     placeholder="Enter eISSN (e.g., 2582-1299)"
//                     error={errors.eissn}
//                     className="text-[10px] "
//                   />

//                   <InputField
//                     label="pISSN"
//                     name="pissn"
//                     value={formData.pissn}
//                     onChange={handleChange}
//                     placeholder="Enter pISSN (e.g., 0970-3773)"
//                     className="text-[10px] h-[40px] "

//                   />
//                 </div>

//                 {/* URL */}
//                 <div className="mt-3">
//                   <label className="block text-[12px] font-medium text-[#1f1f1f] mb-2">
//                     Journal URL
//                   </label>

//                   <div className="relative">
//                     <LinkIcon
//                       size={16}
//                       className="absolute left-4 top-1/2 -translate-y-1/2 text-[#9c9c9c]"
//                     />

//                     <input
//                       type="text"
//                       name="journalUrl"
//                       value={formData.journalUrl}
//                       onChange={handleChange}
//                       placeholder="Enter journal website URL"
//                       className="w-full h-[40px] pl-11 pr-4 rounded-lg border border-[#e4e4e4] bg-white outline-none text-[13px] focus:border-[#c9960c]"
//                     />
//                   </div>
//                 </div>

//                 {/* PUBLISHER */}
//                 <div className="mt-3">
//                   <InputField
//                     label="Publisher / Organization"
//                     name="publisher"
//                     value={formData.publisher}
//                     onChange={handleChange}
//                     placeholder="Enter publisher or organization name"
//                   />
//                 </div>

//                 {/* DESCRIPTION */}
//                 <div className="mt-3">
//                   <label className="block text-[12px] font-medium text-[#1f1f1f] mb-2">
//                     Journal Description
//                   </label>

//                   <div className="relative">
//                     <textarea
//                       rows={5}
//                       name="description"
//                       value={formData.description}
//                       onChange={handleChange}
//                       placeholder="Enter a short description about the journal, its focus and scope..."
//                       className="w-full resize-none h-[75px] rounded-xl border border-[#e4e4e4] bg-white outline-none px-4 py-3 text-[13px] focus:border-[#c9960c]"
//                     />

//                     <span className="absolute bottom-3 right-4 text-[11px] text-[#9b9b9b]">
//                       {formData.description.length} / 500
//                     </span>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* DIVIDER */}
//             <div className="border-t border-[#ededed] my-6" />

//             {/* ADDITIONAL INFO */}
//             <div>
//               <div className="flex items-center gap-3 mb-3">
//                 <div className="w-[3px] h-[18px] rounded-full bg-[#c9960c]" />

//                 <h2 className="text-[16px] font-semibold text-[#202020]">
//                   Additional Information (Optional)
//                 </h2>
//               </div>

//               <div className="grid grid-cols-3 gap-5">
//                 <SelectBox
//                   label="Frequency"
//                   name="frequency"
//                   value={formData.frequency}
//                   onChange={handleChange}
//                   options={[
//                     "Monthly",
//                     "Quarterly",
//                     "Yearly",
//                   ]}
//                 />

//                 <SelectBox
//                   label="Subject Area"
//                   name="subjectArea"
//                   value={formData.subjectArea}
//                   onChange={handleChange}
//                   options={[
//                     "Mathematics",
//                     "Computer Science",
//                     "Physics",
//                   ]}
//                 />

//                 <SelectBox
//                   label="Status"
//                   name="status"
//                   value={formData.status}
//                   onChange={handleChange}
//                   options={["Published", "Draft"]}
//                 />
//               </div>
//             </div>

//             {/* BUTTONS */}
//             <div className="flex items-center justify-end gap-3 mt-10">
//               <button className="h-[42px] px-7 rounded-lg border border-[#dfdfdf] bg-white text-[13px] font-medium text-[#666666] hover:bg-[#f7f7f7]">
//                 Cancel
//               </button>

//               <button
//                 onClick={handleSubmit}
//                 className="h-[42px] px-7 rounded-lg bg-[#c9960c] text-white text-[13px] font-medium hover:bg-[#b68708]"
//               >
//                 Save Journal
//               </button>
//             </div>
//           </div>

//           {/* FOOTER */}
//           <div className="flex items-center justify-between mt-5 px-1 pb-3">
//             <p className="text-[12px] text-[#9a9a9a]">
//               © 2025 Mathematical Research Institute of India.
//               All Rights Reserved.
//             </p>

//             <div className="flex items-center gap-5 text-[12px] text-[#9a9a9a]">
//               <button className="hover:text-[#c9960c]">
//                 Privacy Policy
//               </button>

//               <button className="hover:text-[#c9960c]">
//                 Terms of Use
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// /* INPUT */
// const InputField = ({
//   label,
//   required,
//   error,
//   ...props
// }) => {
//   return (
//     <div>
//       <label className="block text-[12px] font-medium text-[#1f1f1f] mb-1">
//         {label}

//         {required && (
//           <span className="text-red-500"> *</span>
//         )}
//       </label>

//       <input
//         {...props}
//         className={`w-full h-[40px] px-4 rounded-lg border bg-white outline-none text-[13px] transition-all duration-300 ${
//           error
//             ? "border-red-400"
//             : "border-[#e4e4e4] focus:border-[#c9960c]"
//         }`}
//       />

//       {error && (
//         <p className="mt-2 text-[12px] text-red-500">
//           {error}
//         </p>
//       )}
//     </div>
//   );
// };

// /* SELECT */
// const SelectBox = ({
//   label,
//   options,
//   name,
//   value,
//   onChange,
// }) => {
//   return (
//     <div>
//       <label className="block text-[13px] font-medium text-[#1f1f1f] mb-2">
//         {label}
//       </label>

//       <div className="relative">
//         <select
//           name={name}
//           value={value}
//           onChange={onChange}
//           className="appearance-none w-full h-[40px] px-4 rounded-lg border border-[#e4e4e4] bg-white outline-none text-[13px] text-[#6b6b6b] focus:border-[#c9960c]"
//         >
//           <option value="">
//             Select {label.toLowerCase()}
//           </option>

//           {options.map((option) => (
//             <option
//               key={option}
//               value={option}
//             >
//               {option}
//             </option>
//           ))}
//         </select>

//         <ChevronDown
//           size={16}
//           className="absolute right-4 top-1/2 -translate-y-1/2 text-[#8d8d8d] pointer-events-none"
//         />
//       </div>
//     </div>
//   );
// };

// export default Journal;




import { useEffect, useRef, useState } from "react";
import {
  UploadCloud,
  Link as LinkIcon,
  ChevronDown,
  X,
} from "lucide-react";

import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

import {
  createJournal,
  getAllJournals,
  updateJournal,
  deleteJournal,
} from "../../api/journalApi";

function Journal() {
  const fileInputRef = useRef(null);

  /* ALL JOURNALS */
  const [journals, setJournals] = useState([]);

  /* EDIT MODE */
  const [editingId, setEditingId] = useState(null);

  /* FORM STATE */
  const [formData, setFormData] = useState({
    journalName: "",
    eissn: "",
    pissn: "",
    journalUrl: "",
    publisher: "",
    description: "",
    frequency: "",
    subjectArea: "",
    status: "Published",
  });

  const [imagePreview, setImagePreview] = useState(null);

  const [errors, setErrors] = useState({});

  /* FETCH JOURNALS */
  const fetchJournals = async () => {
    try {
     const response = await getAllJournals();

      setJournals(response.data || []);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchJournals();
  }, []);

  /* HANDLE INPUT */
  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "description" && value.length > 500) return;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  /* IMAGE UPLOAD */
  const handleImageUpload = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    if (
      !["image/png", "image/jpeg", "image/webp"].includes(
        file.type
      )
    ) {
      alert("Only JPG, PNG and WebP files allowed.");
      return;
    }

    if (file.size > 2 * 1024 * 1024) {
      alert("Maximum file size is 2MB.");
      return;
    }

    setImagePreview(URL.createObjectURL(file));
  };

  /* REMOVE IMAGE */
  const removeImage = () => {
    setImagePreview(null);

    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  /* VALIDATE */
  const validateForm = () => {
    const newErrors = {};

    if (!formData.journalName.trim()) {
      newErrors.journalName =
        "Journal name is required";
    }

    if (!formData.eissn.trim()) {
      newErrors.eissn = "eISSN is required";
    }

    if (!imagePreview && !editingId) {
      newErrors.image =
        "Journal cover image is required";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  /* RESET FORM */
  const resetForm = () => {
    setEditingId(null);

    setFormData({
      journalName: "",
      eissn: "",
      pissn: "",
      journalUrl: "",
      publisher: "",
      description: "",
      frequency: "",
      subjectArea: "",
      status: "Published",
    });

    setImagePreview(null);

    setErrors({});

    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  /* CREATE / UPDATE */
  const handleSubmit = async () => {
    if (!validateForm()) return;

    try {
      const data = new FormData();

      data.append("title", formData.journalName);
      data.append(
        "description",
        formData.description
      );
      data.append("eissn", formData.eissn);
      data.append("pissn", formData.pissn);
      data.append(
        "journalUrl",
        formData.journalUrl
      );
      data.append(
        "publisher",
        formData.publisher
      );
      data.append(
        "frequency",
        formData.frequency
      );
      data.append(
        "subjectArea",
        formData.subjectArea
      );
      data.append("status", formData.status);

      if (fileInputRef.current?.files?.[0]) {
        data.append(
          "image",
          fileInputRef.current.files[0]
        );
      }

      if (editingId) {
        await updateJournal(editingId, data);

        alert("Journal updated successfully!");
      } else {
        await createJournal(data);

        alert("Journal created successfully!");
      }

      resetForm();

      fetchJournals();
    } catch (err) {
      const msg =
        err.response?.data?.message ||
        "Failed to save journal.";

      alert(msg);
    }
  };

  /* EDIT */
  const handleEdit = (journal) => {
    setEditingId(journal.id);

    setFormData({
      journalName: journal.title || "",
      eissn: journal.eissn || "",
      pissn: journal.pissn || "",
      journalUrl: journal.journalUrl || "",
      publisher: journal.publisher || "",
      description: journal.description || "",
      frequency: journal.frequency || "",
      subjectArea: journal.subjectArea || "",
      status: journal.status || "Published",
    });

    if (journal.image) {
      setImagePreview(
        `http://localhost:5000/uploads/${journal.image}`
      );
    } else {
      setImagePreview(null);
    }

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  /* DELETE */
  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Delete this journal?"
    );

    if (!confirmDelete) return;

    try {
      await deleteJournal(id);

      alert("Journal deleted successfully!");

      fetchJournals();

      if (editingId === id) {
        resetForm();
      }
    } catch (error) {
      console.log(error);

      alert("Failed to delete journal.");
    }
  };

  return (
    <div className="h-screen w-full overflow-hidden bg-[#f7f7f7] flex">
      {/* SIDEBAR */}
      <Sidebar />

      {/* RIGHT */}
      <div className="flex-1 h-screen flex flex-col overflow-hidden">
        {/* TOPBAR */}
        <Topbar />

        {/* PAGE */}
        <div className="flex-1 overflow-y-auto px-5 py-4">
          {/* HEADER */}
          <div className="flex items-start justify-between mb-5">
            <div>
              <h1 className="text-[24px] font-semibold font-serif text-[#1d1d1d]">
                {editingId
                  ? "Edit Journal"
                  : "Add Journal"}
              </h1>

              <p className="mt-2 text-[13px] text-[#7a7a7a]">
                Fill in the details below.
              </p>
            </div>
          </div>

          {/* FORM CARD */}
          <div className="bg-white border border-[#ececec] rounded-xl p-4 shadow-sm">
            <div className="flex gap-6">
              {/* LEFT */}
              <div className="w-[250px] shrink-0">
                <label className="block text-[13px] font-medium mb-2">
                  Journal Cover Image
                </label>

                <input
                  ref={fileInputRef}
                  type="file"
                  accept=".png,.jpg,.jpeg,.webp"
                  className="hidden"
                  onChange={handleImageUpload}
                />

                <div
                  onClick={() =>
                    fileInputRef.current.click()
                  }
                  className={`relative h-[260px] border border-dashed rounded-xl bg-[#fcfcfc] flex flex-col items-center justify-center cursor-pointer ${
                    errors.image
                      ? "border-red-400"
                      : "border-[#d8d8d8]"
                  }`}
                >
                  {imagePreview ? (
                    <>
                      <img
                        src={imagePreview}
                        alt="preview"
                        className="w-full h-full object-cover rounded-xl"
                      />

                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          removeImage();
                        }}
                        className="absolute top-3 right-3 h-8 w-8 rounded-full bg-black/70 flex items-center justify-center"
                      >
                        <X
                          size={15}
                          className="text-white"
                        />
                      </button>
                    </>
                  ) : (
                    <>
                      <div className="h-12 w-12 rounded-full bg-[#fbf6ea] flex items-center justify-center">
                        <UploadCloud
                          size={22}
                          className="text-[#c9960c]"
                        />
                      </div>

                      <p className="mt-4 text-[13px] text-[#555555] text-center leading-5">
                        Drag and drop an image here
                        <br />
                        or click to browse
                      </p>
                    </>
                  )}
                </div>

                {errors.image && (
                  <p className="mt-2 text-red-500 text-xs">
                    {errors.image}
                  </p>
                )}
              </div>

              {/* RIGHT */}
              <div className="flex-1">
                <InputField
                  label="Journal Name"
                  required
                  name="journalName"
                  value={formData.journalName}
                  onChange={handleChange}
                  placeholder="Enter journal name"
                  error={errors.journalName}
                />

                {/* ISSN */}
                <div className="grid grid-cols-2 gap-3 mt-3">
                  <InputField
                    label="eISSN"
                    required
                    name="eissn"
                    value={formData.eissn}
                    onChange={handleChange}
                    placeholder="Enter eISSN"
                    error={errors.eissn}
                  />

                  <InputField
                    label="pISSN"
                    name="pissn"
                    value={formData.pissn}
                    onChange={handleChange}
                    placeholder="Enter pISSN"
                  />
                </div>

                {/* URL */}
                <div className="mt-3">
                  <label className="block text-[12px] font-medium mb-2">
                    Journal URL
                  </label>

                  <div className="relative">
                    <LinkIcon
                      size={16}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-[#9c9c9c]"
                    />

                    <input
                      type="text"
                      name="journalUrl"
                      value={formData.journalUrl}
                      onChange={handleChange}
                      placeholder="Enter journal URL"
                      className="w-full h-[40px] pl-11 pr-4 rounded-lg border border-[#e4e4e4] outline-none text-[13px]"
                    />
                  </div>
                </div>

                {/* PUBLISHER */}
                <div className="mt-3">
                  <InputField
                    label="Publisher"
                    name="publisher"
                    value={formData.publisher}
                    onChange={handleChange}
                    placeholder="Enter publisher"
                  />
                </div>

                {/* DESCRIPTION */}
                <div className="mt-3">
                  <label className="block text-[12px] font-medium mb-2">
                    Description
                  </label>

                  <div className="relative">
                    <textarea
                      rows={5}
                      name="description"
                      value={formData.description}
                      onChange={handleChange}
                      placeholder="Enter journal description"
                      className="w-full resize-none h-[90px] rounded-xl border border-[#e4e4e4] outline-none px-4 py-3 text-[13px]"
                    />

                    <span className="absolute bottom-3 right-4 text-[11px] text-[#9b9b9b]">
                      {formData.description.length} / 500
                    </span>
                  </div>
                </div>

                {/* SELECTS */}
                <div className="grid grid-cols-3 gap-5 mt-5">
                  <SelectBox
                    label="Frequency"
                    name="frequency"
                    value={formData.frequency}
                    onChange={handleChange}
                    options={[
                      "Monthly",
                      "Quarterly",
                      "Yearly",
                    ]}
                  />

                  <SelectBox
                    label="Subject Area"
                    name="subjectArea"
                    value={formData.subjectArea}
                    onChange={handleChange}
                    options={[
                      "Mathematics",
                      "Computer Science",
                      "Physics",
                    ]}
                  />

                  <SelectBox
                    label="Status"
                    name="status"
                    value={formData.status}
                    onChange={handleChange}
                    options={[
                      "Published",
                      "Draft",
                    ]}
                  />
                </div>

                {/* BUTTONS */}
                <div className="flex items-center justify-end gap-3 mt-8">
                  <button
                    onClick={resetForm}
                    className="h-[42px] px-7 rounded-lg border border-[#dfdfdf]"
                  >
                    Cancel
                  </button>

                  <button
                    onClick={handleSubmit}
                    className="h-[42px] px-7 rounded-lg bg-[#c9960c] text-white"
                  >
                    {editingId
                      ? "Update Journal"
                      : "Save Journal"}
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* JOURNAL TABLE */}
          <div className="bg-white border border-[#ececec] rounded-xl p-4 shadow-sm mt-6">
            <h2 className="text-[18px] font-semibold mb-5">
              All Journals
            </h2>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-3 text-sm">
                      Image
                    </th>

                    <th className="text-left py-3 text-sm">
                      Journal Name
                    </th>

                    <th className="text-left py-3 text-sm">
                      eISSN
                    </th>

                    <th className="text-left py-3 text-sm">
                      Status
                    </th>

                    <th className="text-left py-3 text-sm">
                      Actions
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {journals.length > 0 ? (
                    journals.map((journal) => (
                      <tr
                        key={journal.id}
                        className="border-b"
                      >
                        <td className="py-3">
                          {journal.image ? (
                            <img
                              src={`http://localhost:5000/uploads/${journal.image}`}
                              alt="journal"
                              className="w-12 h-14 rounded object-cover"
                            />
                          ) : (
                            "-"
                          )}
                        </td>

                        <td className="py-3 text-sm">
                          {journal.title}
                        </td>

                        <td className="py-3 text-sm">
                          {journal.eissn}
                        </td>

                        <td className="py-3 text-sm">
                          <span className="px-3 py-1 rounded-full text-xs bg-[#f7f2e3] text-[#c9960c]">
                            {journal.status}
                          </span>
                        </td>

                        <td className="py-3">
                          <div className="flex items-center gap-4">
                            <button
                              onClick={() =>
                                handleEdit(journal)
                              }
                              className="text-blue-500 text-sm font-medium"
                            >
                              Edit
                            </button>

                            <button
                              onClick={() =>
                                handleDelete(
                                  journal.id
                                )
                              }
                              className="text-red-500 text-sm font-medium"
                            >
                              Delete
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td
                        colSpan="5"
                        className="text-center py-8 text-sm text-[#888]"
                      >
                        No journals found
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>

          {/* FOOTER */}
          <div className="flex items-center justify-between mt-5 px-1 pb-3">
            <p className="text-[12px] text-[#9a9a9a]">
              © 2025 Mathematical Research Institute of India.
              All Rights Reserved.
            </p>

            <div className="flex items-center gap-5 text-[12px] text-[#9a9a9a]">
              <button className="hover:text-[#c9960c]">
                Privacy Policy
              </button>

              <button className="hover:text-[#c9960c]">
                Terms of Use
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* INPUT */
const InputField = ({
  label,
  required,
  error,
  ...props
}) => {
  return (
    <div>
      <label className="block text-[12px] font-medium mb-1">
        {label}

        {required && (
          <span className="text-red-500"> *</span>
        )}
      </label>

      <input
        {...props}
        className={`w-full h-[40px] px-4 rounded-lg border bg-white outline-none text-[13px] ${
          error
            ? "border-red-400"
            : "border-[#e4e4e4]"
        }`}
      />

      {error && (
        <p className="mt-2 text-[12px] text-red-500">
          {error}
        </p>
      )}
    </div>
  );
};

/* SELECT */
const SelectBox = ({
  label,
  options,
  name,
  value,
  onChange,
}) => {
  return (
    <div>
      <label className="block text-[13px] font-medium mb-2">
        {label}
      </label>

      <div className="relative">
        <select
          name={name}
          value={value}
          onChange={onChange}
          className="appearance-none w-full h-[40px] px-4 rounded-lg border border-[#e4e4e4] bg-white outline-none text-[13px]"
        >
          <option value="">
            Select {label.toLowerCase()}
          </option>

          {options.map((option) => (
            <option
              key={option}
              value={option}
            >
              {option}
            </option>
          ))}
        </select>

        <ChevronDown
          size={16}
          className="absolute right-4 top-1/2 -translate-y-1/2 text-[#8d8d8d] pointer-events-none"
        />
      </div>
    </div>
  );
};

export default Journal;
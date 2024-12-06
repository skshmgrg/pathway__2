
// import { useContext, useRef, useState } from "react";
// import { functionsContext } from "../context/context";
// import { GoArrowUp } from "react-icons/go";
// import { HiOutlineUpload } from "react-icons/hi";
// import { MdDelete } from "react-icons/md";

// export const Input = (props) => {
//   // Context and refs
//   const functions = useContext(functionsContext);
//   const fileInputRef = useRef(null);

//   // State to handle drag-and-drop styles
//   const [isDragging, setIsDragging] = useState(false);

//   const handleFileUpload = (file) => {
//     if (file) {
//       console.log("File selected:", file);
//       functions.handleFileUpload(file); // Example: pass the file to the context function
//     }
//   };

//   const handleFileInput = (event) => {
//     const file = event.target.files[0];
//     if (file) handleFileUpload(file);
//   };

//   const handleDragOver = (event) => {
//     event.preventDefault();
//     setIsDragging(true);
//   };

//   const handleDragLeave = () => {
//     setIsDragging(false);
//   };

//   const handleDrop = (event) => {
//     event.preventDefault();
//     setIsDragging(false);
//     const file = event.dataTransfer.files[0];
//     if (file) handleFileUpload(file);
//   };

//   return (
//     <>
//       <div className="flex justify-center fixed bottom-5 left-0 right-0 mx-auto">
//         <div
//           className={`flex bg-gray-800 rounded-full p-2 w-[85vw] items-center ${
//             isDragging ? "border-2 border-dashed border-blue-500" : ""
//           }`}
//           onDragOver={handleDragOver}
//           onDragLeave={handleDragLeave}
//           onDrop={handleDrop}
//         >
//           {/* File Upload Icon */}
//           <HiOutlineUpload
//             size={25}
//             style={{
//               width: "50px",
//               padding: "2px",
//               margin: "2px",
//               cursor: "pointer",
//               color: "white",
//             }}
//             onClick={() => fileInputRef.current.click()} // Trigger file input click
//           />
//           <MdDelete size={20}
//             style={{
//               "width": "20px",
//               // padding: "2px",
//               "marginRight":"7px",
//               "cursor": "pointer",
//               "color": "white",
//               "display":""
//             }} />
//           {/* Hidden File Input */}
//           <input
//             type="file"
//             ref={fileInputRef}
//             style={{ display: "none" }}
//             onChange={handleFileInput}
//           />
//           {/* Text Input */}
//           <input
//             type="text"
//             placeholder="Type your message here/ Drag file"
//             value={functions.input}
//             onChange={functions.handleChange}
//             className="flex-1 !bg-transparent border-none outline-none text-white text-base placeholder-gray-400"
//             onKeyDown={functions.handleKeyDown}
//           />
//           {/* Conditionally render the loader if loading is true */}
//           {functions.loading ? (
//             <div className="flex items-center justify-center animate-spin h-8 w-8 border-t-4 border-blue-500 rounded-full ml-2"></div>
//           ) : (
//             <button
//               onClick={functions.handleClick}
//               className="bg-transparent text-white font-semibold hover:text-neutral-400 py-2 px-4"
//             >
//               <GoArrowUp />
//             </button>
//           )}
//         </div>
//       </div>
//     </>
//   );
// };


// import { useContext, useRef, useState } from "react";
// import { functionsContext } from "../context/context";
// import { GoArrowUp } from "react-icons/go";
// import { HiOutlineUpload } from "react-icons/hi";
// import { MdDelete } from "react-icons/md";

// export const Input = (props) => {
//   // Context and refs
//   const functions = useContext(functionsContext);
//   const fileInputRef = useRef(null);

//   // State to handle drag-and-drop styles and uploaded files
//   const [isDragging, setIsDragging] = useState(false);
//   const [uploadedFiles, setUploadedFiles] = useState([]);

//   const handleFileUpload = (file) => {
//     if (file) {
//       console.log("File selected:", file);
//       setUploadedFiles([...uploadedFiles, file]); // Add the file to the state
//       functions.handleFileUpload(file); // Example: pass the file to the context function
//     }
//   };

//   const handleFileInput = (event) => {
//     const file = event.target.files[0];
//     if (file) handleFileUpload(file);
//   };

//   const handleDragOver = (event) => {
//     event.preventDefault();
//     setIsDragging(true);
//   };

//   const handleDragLeave = () => {
//     setIsDragging(false);
//   };

//   const handleDrop = (event) => {
//     event.preventDefault();
//     setIsDragging(false);
//     const file = event.dataTransfer.files[0];
//     if (file) handleFileUpload(file);
//   };

//   const handleDeleteAllFiles = () => {
//     setUploadedFiles([]); // Clear all uploaded files
//     console.log("All files deleted");
//   };

//   return (
//     <div className="flex justify-center fixed bottom-5 left-0 right-0 mx-auto">
//       <div
//         className={`flex bg-gray-800 rounded-full p-2 w-[85vw] items-center ${
//           isDragging ? "border-2 border-dashed border-blue-500" : ""
//         }`}
//         onDragOver={handleDragOver}
//         onDragLeave={handleDragLeave}
//         onDrop={handleDrop}
//       >
//         {/* File Upload Icon */}
//         <HiOutlineUpload
//           size={25}
//           style={{
//             width: "50px",
//             padding: "2px",
//             margin: "2px",
//             cursor: "pointer",
//             color: "white",
//           }}
//           onClick={() => fileInputRef.current.click()} // Trigger file input click
//         />

//         {/* Delete All Files Icon */}
//         {uploadedFiles.length > 0 && (
//           <MdDelete
//             size={20}
//             style={{
//               width: "20px",
//               marginRight: "7px",
//               cursor: "pointer",
//               color: "white",
//             }}
//             onClick={handleDeleteAllFiles} // Trigger delete all files
//           />
//         )}

//         {/* Hidden File Input */}
//         <input
//           type="file"
//           ref={fileInputRef}
//           style={{ display: "none" }}
//           onChange={handleFileInput}
//         />

//         {/* Text Input */}
//         <input
//           type="text"
//           placeholder="Type your message here / Drag file"
//           value={functions.input}
//           onChange={functions.handleChange}
//           className="flex-1 !bg-transparent border-none outline-none text-white text-base placeholder-gray-400"
//           onKeyDown={functions.handleKeyDown}
//         />

//         {/* Conditionally render the loader if loading is true */}
//         {functions.loading ? (
//           <div className="flex items-center justify-center animate-spin h-8 w-8 border-t-4 border-blue-500 rounded-full ml-2"></div>
//         ) : (
//           <button
//             onClick={functions.handleClick}
//             className="bg-transparent text-white font-semibold hover:text-neutral-400 py-2 px-4"
//           >
//             <GoArrowUp />
//           </button>
//         )}
//       </div>
//     </div>
//   );
// };


// import { useContext, useRef, useState } from "react";
// import { functionsContext } from "../context/context";
// import { GoArrowUp } from "react-icons/go";
// import { HiOutlineUpload } from "react-icons/hi";
// import { MdDelete } from "react-icons/md";

// export const Input = (props) => {
//   // Context and refs
//   const functions = useContext(functionsContext);
//   const fileInputRef = useRef(null);

//   // State to handle drag-and-drop styles and uploaded files
//   const [isDragging, setIsDragging] = useState(false);
//   const [uploadedFiles, setUploadedFiles] = useState([]);

//   const handleFileUpload = (file) => {
//     if (file) {
//       console.log("File selected:", file);
//       setUploadedFiles([...uploadedFiles, file]); // Add the file to the state
//       functions.handleFileUpload(file); // Example: pass the file to the context function
//     }
//   };

//   const handleFileInput = (event) => {
//     const file = event.target.files[0];
//     if (file) handleFileUpload(file);
//   };

//   const handleDragOver = (event) => {
//     event.preventDefault();
//     setIsDragging(true);
//   };

//   const handleDragLeave = () => {
//     setIsDragging(false);
//   };

//   const handleDrop = (event) => {
//     event.preventDefault();
//     setIsDragging(false);
//     const file = event.dataTransfer.files[0];
//     if (file) handleFileUpload(file);
//   };

//   const handleDeleteAllFiles = () => {
//     if (uploadedFiles.length === 0) {
//       alert("No files to delete");
//     } else {
//       setUploadedFiles([]); // Clear all uploaded files
//       alert("All files deleted");
//     }
//   };

//   return (
//     <div className="flex justify-center fixed bottom-5 left-0 right-0 mx-auto">
//       <div
//         className={`flex bg-gray-800 rounded-full p-2 w-[85vw] items-center ${
//           isDragging ? "border-2 border-dashed border-blue-500" : ""
//         }`}
//         onDragOver={handleDragOver}
//         onDragLeave={handleDragLeave}
//         onDrop={handleDrop}
//       >
//         {/* File Upload Icon */}
//         <HiOutlineUpload
//           size={25}
//           style={{
//             width: "50px",
//             padding: "2px",
//             margin: "2px",
//             cursor: "pointer",
//             color: "white",
//           }}
//           onClick={() => fileInputRef.current.click()} // Trigger file input click
//         />

//         {/* Delete All Files Icon */}
//         <MdDelete
//           size={20}
//           style={{
//             width: "20px",
//             marginRight: "9px",
//             cursor: "pointer",
//             color: "white",
//           }}
//           onClick={handleDeleteAllFiles} // Trigger delete all files
//         />

//         {/* Hidden File Input */}
//         <input
//           type="file"
//           ref={fileInputRef}
//           style={{ display: "none" }}
//           onChange={handleFileInput}
//         />

//         {/* Text Input */}
//         <input
//           type="text"
//           placeholder="Type your message here / Drag file"
//           value={functions.input}
//           onChange={functions.handleChange}
//           className="flex-1 !bg-transparent border-none outline-none text-white text-base placeholder-gray-400"
//           onKeyDown={functions.handleKeyDown}
//         />

//         {/* Conditionally render the loader if loading is true */}
//         {functions.loading ? (
//           <div className="flex items-center justify-center animate-spin h-8 w-8 border-t-4 border-blue-500 rounded-full ml-2"></div>
//         ) : (
//           <button
//             onClick={functions.handleClick}
//             className="bg-transparent text-white font-semibold hover:text-neutral-400 py-2 px-4"
//           >
//             <GoArrowUp />
//           </button>
//         )}
//       </div>
//     </div>
//   );
// };

import { useContext, useRef, useState } from "react";
import { functionsContext } from "../context/context";
import { GoArrowUp } from "react-icons/go";
import { HiOutlineUpload } from "react-icons/hi";
import { MdDelete } from "react-icons/md";

export const Input = (props) => {
  // Context and refs
  const functions = useContext(functionsContext);
  const fileInputRef = useRef(null);

  // State to handle drag-and-drop styles and uploaded files
  const [isDragging, setIsDragging] = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState([]);

  const handleFileUpload = (file) => {
    if (file) {
      console.log("File selected:", file);
      setUploadedFiles([...uploadedFiles, file]); // Add the file to the state
      functions.handleFileUpload(file); // Example: pass the file to the context function
    }
  };

  const handleFileInput = (event) => {
    const file = event.target.files[0];
    if (file) handleFileUpload(file);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (event) => {
    event.preventDefault();
    setIsDragging(false);
    const file = event.dataTransfer.files[0];
    if (file) handleFileUpload(file);
  };

  const handleDeleteAllFiles = () => {
    if (uploadedFiles.length === 0) {
      alert("No files to delete");
    } else {
      setUploadedFiles([]); // Clear all uploaded files
      alert("All files deleted");
    }
  };

  return (
    <div className="flex justify-center fixed bottom-5 left-0 right-0 mx-auto">
      <div
        className={`flex bg-gray-800 rounded-full p-2 w-[85vw] items-center ${
          isDragging ? "border-2 border-dashed border-blue-500" : ""
        }`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        {/* File Upload Icon */}
        <div className="relative group">
          <HiOutlineUpload
            size={25}
            style={{
              width: "50px",
              padding: "2px",
              margin: "2px",
              cursor: "pointer",
              color: "white",
            }}
            onClick={() => fileInputRef.current.click()} // Trigger file input click
          />
          {/* Tooltip */}
          <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-1 bg-gray-700 text-white text-xs rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity">
            Upload Files
          </span>
        </div>

        {/* Delete All Files Icon */}
        <div className="relative group">
          <MdDelete
            size={20}
            style={{
              width: "20px",
              marginRight: "9px",
              cursor: "pointer",
              color: "white",
            }}
            onClick={handleDeleteAllFiles} // Trigger delete all files
          />
          {/* Tooltip */}
          <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-1 bg-gray-700 text-white text-xs rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity">
            Delete Files
          </span>
        </div>

        {/* Hidden File Input */}
        <input
          type="file"
          ref={fileInputRef}
          style={{ display: "none" }}
          onChange={handleFileInput}
        />

        {/* Text Input */}
        <input
          type="text"
          placeholder="Type your message here / Drag file"
          value={functions.input}
          onChange={functions.handleChange}
          className="flex-1 !bg-transparent border-none outline-none text-white text-base placeholder-gray-400"
          onKeyDown={functions.handleKeyDown}
        />

        {/* Conditionally render the loader if loading is true */}
        {functions.loading ? (
          <div className="flex items-center justify-center animate-spin h-8 w-8 border-t-4 border-blue-500 rounded-full ml-2"></div>
        ) : (
          <button
            onClick={functions.handleClick}
            className="bg-transparent text-white font-semibold hover:text-neutral-400 py-2 px-4"
          >
            <GoArrowUp />
          </button>
        )}
      </div>
    </div>
  );
};

// import React from "react";

// const LandingPage= () => {
//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-gray-900 via-black to-gray-800 text-white">
//       <div className="text-center px-8 py-12 bg-gray-900/70 backdrop-blur-md rounded-lg shadow-xl max-w-2xl">
//         <h1 className="text-5xl font-extrabold mb-4 animate-fade-in">
//           Welcome to <span style={{color:"cyan"}}>Pathway</span> Agentic Rag
//         </h1>
//         <p className="text-lg text-gray-400 mb-6">
//            Dynamically retrieve, analyze, and synthesize information using intelligent agents optimized for accuracy and efficiency.
//         </p>
//         <button
//           className="px-6 py-3 bg-indigo-600 hover:bg-indigo-500 transition-all text-white font-semibold rounded-lg shadow-md focus:outline-none focus:ring-4 focus:ring-indigo-300"
          
//         >
//           Get Started
//         </button>
//       </div>
//     </div>
//   );
// };

// export default LandingPage;


import React from "react";

const LandingPage = ({ onStart }) => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-gray-900 via-black to-gray-800 text-white">
      <div className="text-center px-8 py-12 bg-gray-900/70 backdrop-blur-md rounded-lg shadow-xl max-w-2xl">
        <h1 className="text-5xl font-extrabold mb-4 animate-fade-in">
          Welcome to <span style={{ color: "cyan" }}>Pathway</span> Agentic Rag
        </h1>
        <p className="text-lg text-gray-400 mb-6">
          Dynamically retrieve, analyze, and synthesize information using intelligent agents optimized for accuracy and efficiency.
        </p>
        <button
          onClick={onStart} // Call the onStart prop when clicked
          className="px-6 py-3 bg-indigo-600 hover:bg-indigo-500 transition-all text-white font-semibold rounded-lg shadow-md focus:outline-none focus:ring-4 focus:ring-indigo-300"
        >
          Get Started
        </button>
      </div>
    </div>
  );
};

export default LandingPage;

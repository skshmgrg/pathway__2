// import React,{useState}from "react";
// import Page from "./components/Page";
// import axios from 'axios'
// import LandingPage from "./components/LandingPage";

// function App() {
//   return (
//     <div>
//       {/* <LandingPage/> */}
//       <Page />
//     </div>
//   );
// }
// export default App;

import React, { useState } from "react";
import Page from "./components/Page";
import LandingPage from "./components/LandingPage";

function App() {
  const [showLandingPage, setShowLandingPage] = useState(true);

  const handleStart = () => {
    setShowLandingPage(false);
  };

  return (
    <div>
      {showLandingPage ? <LandingPage onStart={handleStart} /> : <Page />}
    </div>
  );
}

export default App;

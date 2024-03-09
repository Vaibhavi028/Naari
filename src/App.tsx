// import React, { useState } from 'react';
// import './App.css';
// import Signup from './Signup';
// import Signin from './signin';
// import './style.css';

// function App() {
//   const [currentPage, setCurrentPage] = useState('Signinuser');

//   const handleLandingpage = () => {
//     setCurrentPage('landingpage');
//   };
  
//   const handleViewSignup = () => {
//     setCurrentPage('Signup');
//   };

//   const handleViewSignin = () => {
//     setCurrentPage('Signin');
//   };


//   return (
//     <div>
//       {currentPage === 'landingpage' && <landingpage onViewSignup={handleViewSignup} />}
//       {currentPage === 'Signup' && <Signup onSignupSuccess={handleLandingpage} />}
//       {currentPage === 'Signin' && <Signin onSignup={handleViewSignin} />}
//     </div>
//   );
// }


// export default App;

import React from "react";
import SignUpWomen from "./components/SignUpWomen";
import SignupPage from "./components/SignupPage";
const App = () => {
  return (
    <div>
      <SignUpWomen />
      <SignupPage />
    </div>
  );
};

export default App;


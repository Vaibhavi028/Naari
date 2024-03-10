import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignupMain from "./components/SignupMain";
import Signin from "./components/Signin";
import Woman from "./components/Woman";
import WomanProfile from "./components/WomanProfile";
import WomanUserProfile from "./components/WomanUserProfile";
import WomenProfiles from "./components/WomenProfiles";
import SignUpWomen from "./components/SignUpWomen";
import Marketplace from "./components/Marketplace";
import Landingpg from "./components/landingpage";
import Navbar from "./components/Navbar";
const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Landingpg />} />
          <Route path="/profile" element={<Landingpg />} />
          <Route path="/women-profiles" element={<WomenProfiles />} />
          <Route path="/womenuserprofiles" element={<WomanUserProfile />} />
          <Route path="/market" element={<Marketplace />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<SignupMain />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

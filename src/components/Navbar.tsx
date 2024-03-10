// import React from "react";
// import "./navbar.css";
// import Image from "./img/logo.png";
// import 'font-awesome/css/font-awesome.min.css';

// function Navbar() {
//   return (
//     <nav className="navbar">
//       <div className="navbar-container">
//         <a href="/" className="logo">
//           <img src={Image} alt="Company Logo" />{" "}
//         </a>
//         <ul className="nav-menu">
//           <li className="nav-item">
//             <a href="/profile" className="nav-links">
//               Home
//             </a>
//           </li>
//           <li className="nav-item">
//             <a href="/profile" className="nav-links">
//               Meet The Naari
//             </a>
//           </li>
//           <li className="nav-item">
//             <a href="/profile" className="nav-links">
//               Language(भाषा)
//             </a>
//           </li>
//           <li className="nav-item">
//             <form className="search-form">
//               <input
//                 type="text"
//                 className="search-input"
//                 placeholder="Search..."
//               />
//               <button type="submit" className="search-button">
//                 <i className="fa fa-search"></i> 
//               </button>
//             </form>
//           </li>
//         </ul>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;

import React, { useState } from "react";
import "./navbar.css";
import Image from "./img/logo.png";
import "font-awesome/css/font-awesome.min.css";
import Landingpg from "./landingpage";
import WomenProfiles from "./WomenProfiles";

const Navbar: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<
    "home" | "meet" | "profile"
  >("");
  const [showMainPage, setShowMainPage] = useState<boolean>(true);

  const handleCategoryChange = (category: "home" | "meet" | "profile") => {
    setSelectedCategory(category);
    setShowMainPage(false);
  };
  return (
    <nav className="navbar">
      {showMainPage && (
        <div className="navbar-container">
          <a href="/" className="logo">
            <img src={Image} alt="Company Logo" />{" "}
          </a>
          <ul className="nav-menu">
            <li className="nav-item">
              <button
                className="nav-links"
                onClick={() => handleCategoryChange("home")}
              >
                Home
              </button>
            </li>
            <li className="nav-item">
              <button
                className="nav-links"
                onClick={() => handleCategoryChange("meet")}
              >
                Meet The Naari
              </button>
            </li>
            <li className="nav-item">
              {" "}
              <button
                className="nav-links"
                onClick={() => handleCategoryChange("profile")}
              >
                Profile
              </button>
            </li>
            <li className="nav-item">
              <a href="/profile" className="nav-links">
                Language(भाषा)
              </a>
            </li>
            <li className="nav-item">
              <form className="search-form">
                <input
                  type="text"
                  className="search-input"
                  placeholder="Search..."
                />
                <button type="submit" className="search-button">
                  <i className="fa fa-search"></i>
                </button>
              </form>
            </li>
          </ul>
        </div>
      )}
      {selectedCategory === "home" && <Landingpg />}
      {selectedCategory === "meet" && <WomenProfiles />}
      {selectedCategory === "profile" && <WomanUserProfile />}
    </nav>
  );
};

export default Navbar;


import React, { useState } from "react";
import "./signup.css";
import signupImage from "./img/signupimg.png";
import SignUpWomen from "./SignUpWomen";
import SignupPage from "./SignupPage";

const SignupMain: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<"women" | "external">("");
  const [showMainPage, setShowMainPage] = useState<boolean>(true);

  const handleCategoryChange = (category: "women" | "external") => {
    setSelectedCategory(category);
    setShowMainPage(false); 
  };

  return (
    <div className="container">
      <div className="signpage">
        <img src={signupImage} alt="Signup" className="signup-image" />
        <div className="signup-container">
          {showMainPage && (
            <div className="signup-form">
              <h2>Sign Up</h2>
              <h3>Select Your Category</h3>
              <button onClick={() => handleCategoryChange("women")}>Naari</button>
              <button onClick={() => handleCategoryChange("external")}>Investors</button>
            </div>
          )}
          {selectedCategory === "women" && <SignUpWomen />}
          {selectedCategory === "external" && <SignupPage />}
        </div>
      </div>
    </div>
  );
};

export default SignupMain;

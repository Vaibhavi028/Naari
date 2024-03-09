import React, { useState } from "react";
import SignUpWomen from "./SignUpWomen";
import SignupPage from "./SignupPage";
import "./signup.css";
const SignupMain: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<
    "women" | "external"
  >("");

  const handleCategoryChange = (category: "women" | "external") => {
    setSelectedCategory(category);
  };

  return (
    <div className="signup-container">
      <h2>Select Your Category</h2>
      <button onClick={() => handleCategoryChange("women")}>Naari</button>
      <button onClick={() => handleCategoryChange("external")}>
        Investors
      </button>
      {selectedCategory &&
        (selectedCategory === "women" ? <SignUpWomen /> : <SignupPage />)}
    </div>
  );
};

export default SignupMain;

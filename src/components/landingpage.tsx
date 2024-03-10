import React, { useState } from "react";
import "./landingpg.css";
import Image from "./img/img1.png";
import layout from "./img/layout.svg";

const Landingpg: React.FC = () => {
  const [animationStarted, setAnimationStarted] = useState(false);
  const startAnimation = () => {
    setAnimationStarted(true);
  };

  return (
    <div className="container">
      <div className="p1">
        <img src={Image} alt="" />
        <div className="p1head">
          <div className="p1text">Helping build LIVES</div>
          <div className="button-container">
        <button className="signin-button">Sign In</button>
        <button className="signup-button">Sign Up</button>
      </div>
      
        </div>
        
      </div>
      <div className="p1">
      <img src={layout} className="Layoutimg" alt="" />
      </div>
      
    </div>
  );
};

export default Landingpg;

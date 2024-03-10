import React, { useState } from "react";
import "./landingpg.css";
import Image from "./img/img1.png";

const Landingpg: React.FC = () => {
  const [animationStarted, setAnimationStarted] = useState(false);
  const startAnimation = () => {
    setAnimationStarted(true);
  };

  return (
    <div className="container">
      <div className="p1">
        <img src={Image} alt="" />
        <div className="p1text">Helping build LIVES</div>
      </div>
      
    </div>
  );
};

export default Landingpg;

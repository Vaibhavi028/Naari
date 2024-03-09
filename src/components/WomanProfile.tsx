import React from "react";
import Woman from "./Woman";
import "./womenProfiles.css";
interface WomanProfileProps {
  woman: Woman;
  onClick?: (woman: Woman) => void;
  isSelected?: boolean;
  onClose?: () => void;
}

const WomanProfile: React.FC<WomanProfileProps> = ({
  woman,
  onClick,
  isSelected,
  onClose,
}) => (
  <div
    className={`woman-profile ${isSelected ? "selected" : ""}`}
    onClick={() => onClick && onClick(woman)}
  >
    <img src={woman.image} alt={woman.name} />
    <h2>{woman.name}</h2>
    <p>{woman.descriptionLines[0]}</p>
    <p>{woman.descriptionLines[1]}</p>
    <a href={woman.profileUrl} target="_blank" rel="noopener noreferrer">
      View Profile
    </a>
  </div>
);

export default WomanProfile;

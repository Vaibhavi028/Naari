import React, { useState } from "react";
import WomanProfile from "./womanProfile";
import "./womenProfiles.css";
interface Woman {
  name: string;
  image: string;
  descriptionLines: string[];
  profileUrl: string; // URL to her profile page
}
const womenData: Woman[] = [
  // Replace with your actual woman data
  {
    name: "Sample Woman 1",
    image: "https://via.placeholder.com/150",
    descriptionLines: ["Sample description line 1"],
    profileUrl: "https://www.example.com/profile1",
  },
  {
    name: "Sample Woman 2",
    image: "https://via.placeholder.com/150",
    descriptionLines: ["Sample description line 1"],
    profileUrl: "https://www.example.com/profile2",
  },
  // ... other woman data objects
  {
    name: "Sample Woman 6",
    image: "https://via.placeholder.com/150",
    descriptionLines: ["Sample description line 1"],
    profileUrl: "https://www.example.com/profile6",
  },
  {
    name: "Sample Woman 1",
    image: "https://via.placeholder.com/150",
    descriptionLines: ["Sample description line 1"],
    profileUrl: "https://www.example.com/profile1",
  },
  {
    name: "Sample Woman 2",
    image: "https://via.placeholder.com/150",
    descriptionLines: ["Sample description line 1"],
    profileUrl: "https://www.example.com/profile2",
  },
  // ... other woman data objects
  {
    name: "Sample Woman 6",
    image: "https://via.placeholder.com/150",
    descriptionLines: ["Sample description line 1"],
    profileUrl: "https://www.example.com/profile6",
  },
];

const WomenProfiles: React.FC = () => {
  const [selectedWoman, setSelectedWoman] = useState<Woman | null>(null);

  const handlePlacardClick = (woman: Woman) => {
    setSelectedWoman(woman);
  };

  const handleCloseProfile = () => {
    setSelectedWoman(null);
  };

  return (
    <div className="women-profiles-container">
      {womenData.map((woman) => (
        <WomanProfile
          key={woman.name}
          woman={woman}
          onClick={handlePlacardClick}
          isSelected={selectedWoman === woman}
        />
      ))}
      {selectedWoman && (
        <div className="profile-modal">
          <WomanProfile woman={selectedWoman} onClose={handleCloseProfile} />
        </div>
      )}
    </div>
  );
};

export default WomenProfiles;

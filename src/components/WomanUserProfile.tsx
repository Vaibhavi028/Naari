import React, { useState, useEffect } from "react";
import "./womanUserProfile.css";
import Image from "./img/img2.jpg";
interface ProfileData {
  state: string;
  city: string;
  pincode: string;
  description: string;
}

interface Post {
  caption: string;
  filePath: string; // Replace with appropriate file path type (image/video)
  uploadDate: Date;
}

function WomanUserProfile() {
  const [user, setUser] = useState<ProfileData>({
    state: "",
    city: "",
    pincode: "",
    description: "",
  });
  const [profilePicture, setProfilePicture] = useState<File | null>(null);
  const [posts, setPosts] = useState<Post[]>([]);

  // Simulated data (replace with API calls to fetch user and post data)
  useEffect(() => {
    const userData = {
      state: "",
      city: "",
      pincode: "",
      description: "",
    };
    setUser(userData);
    setPosts([
      {
        caption: "This is my first post!",
        filePath: "path/to/image.jpg",
        uploadDate: new Date(),
      },
      {
        caption: "Another post!",
        filePath: "path/to/video.mp4",
        uploadDate: new Date(),
      },
    ]);
  }, []);

  const handleProfileUpdate = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(); // Assuming a server-side script accepts FormData
    if (profilePicture?.name) {
      formData.append("profilePicture", profilePicture);
    }
    console.log("Profile updated:", user);
  };
  const handlePostSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // replace with actual API call and file upload
    console.log("New post created:", { caption: "", filePath: "" });
  };

  return (
    <div className="profile-container">
      <h1>Your Profile</h1>
      <div className="profile-info">
      <img
  src={Image}
  alt="Profile Picture"
  id="profile-picture"
      />
        <form onSubmit={handleProfileUpdate} id="profile-form">
          <label htmlFor="profile-picture">Profile Picture:</label>
          <input
            type="file"
            id="profile-picture"
            name="profile-picture"
            accept="image/*"
            onChange={(e) => setProfilePicture(e.target.files[0])}
          />
          <label htmlFor="state">State:</label>
          <input
            type="text"
            id="state"
            name="state"
            value={user.state}
            onChange={(e) => setUser({ ...user, state: e.target.value })}
            required
          />
          <label htmlFor="city">City:</label>
          <input
            type="text"
            id="city"
            name="city"
            value={user.city}
            onChange={(e) => setUser({ ...user, city: e.target.value })}
            required
          />
          <label htmlFor="pincode">Pincode:</label>
          <input
            type="text"
            id="pincode"
            name="pincode"
            value={user.pincode}
            onChange={(e) => setUser({ ...user, pincode: e.target.value })}
            required
          />
          <label htmlFor="description">
            Tell us about yourself and your venture:
          </label>
          <input
            type="text"
            id="description"
            name="description"
            value={user.description}
            onChange={(e) => setUser({ ...user, description: e.target.value })}
            required
          />
          <button type="submit" className="button1">Update Profile</button>
        </form>
      </div>

      <h2>Your Posts</h2>

      <div className="posts-container">
        {posts.map((post) => (
          <div className="post" key={post.uploadDate.toString()}>
            {/* Display post content (image/video) based on filePath */}
            <img src={post.filePath} alt={post.caption} />
            {/* Replace with appropriate element for video */}
            <p className="post-caption">{post.caption}</p>
            <p className="post-date">
              Uploaded: {post.uploadDate.toLocaleDateString()}
            </p>
          </div>
        ))}
      </div>

      <h2>Create Post</h2>

      <form onSubmit={handlePostSubmit} id="post-form">
        <label htmlFor="post-content">Upload Image or Video:</label>
        <input
          type="file"
          id="post-content"
          accept="image/*,video/*"
          required
        />
        <label htmlFor="post-caption">Caption:</label>
        <textarea id="post-caption" name="caption"></textarea>
        <button type="submit">Post</button>
      </form>
    </div>
  );
}

export default WomanUserProfile;

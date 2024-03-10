import React, { useState } from "react";
import "./signup.css";
import signupImage from "./img/signupimg.png";

interface SignInUser {
  email: string;
  password: string;
}

const Signin: React.FC = () => {
  const [signInUser, setSignInUser] = useState<SignInUser>({
    email: "",
    password: "",
  });
  const [emailError, setEmailError] = useState<string>("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setSignInUser({ ...signInUser, [name]: value });
    if (name === "email") {
      const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
      if (!emailRegex.test(value)) {
        setEmailError("Invalid Email");
      } else {
        setEmailError("");
      }
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (emailError) {
      console.log("Invalid Email");
      return;
    }
    console.log("Signin data:", signInUser);
  };

  return (
    <div className="container">
      <div className="signpage">
        <img src={signupImage} alt="Signup" className="signup-image" />
        <div className="signup-container">
          <div className="signup-form">
            
            <h2>Sign In</h2>
            <form onSubmit={handleSubmit}>
              <div className="lab-inp">
                <label htmlFor="email">Email id </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email id"
                  value={signInUser.email}
                  onChange={handleChange}
                  required
                />
                {emailError && <span className="error">{emailError}</span>}
              </div>
              <br />
              <div className="lab-inp">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Enter your password"
                  value={signInUser.password}
                  onChange={handleChange}
                  required
                />
              </div>
              <br />
              <button type="submit">Sign In</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;

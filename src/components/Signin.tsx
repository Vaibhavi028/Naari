import React, { useState } from "react";
import "./signup.css";
import signupImage from "./img/signupimg.png";

interface SignInUser {
  phone: string;
  password: string;
}

const Signin: React.FC = () => {
  const [signInUser, setSignInUser] = useState<SignInUser>({
    phone: "",
    password: ""
  });
  const [phoneError, setPhoneError] = useState<string>("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setSignInUser({ ...signInUser, [name]: value });
    if (name === "phone") {
      const phoneRegex = /^\d{10}$/;
      if (!phoneRegex.test(value)) {
        setPhoneError("Phone number must be 10 digits");
      } else {
        setPhoneError("");
      }
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (phoneError) {
      console.log("Invalid phone number");
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
              <label htmlFor="phone">Phone  </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="Enter your phone number"
                value={signInUser.phone}
                onChange={handleChange}
                required
              />
              {phoneError && <span className="error">{phoneError}</span>}
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

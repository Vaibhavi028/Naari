import React, { useState } from "react";
import "./signup.css";

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
    <div className="signup-form">
      <h2>Sign In</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="phone">Phone Number:</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={signInUser.phone}
          onChange={handleChange}
          required
        />
        {phoneError && <span className="error">{phoneError}</span>}
        <br />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={signInUser.password}
          onChange={handleChange}
          required
        />
        <br />
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
};

export default Signin;

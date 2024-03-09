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

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setSignInUser({ ...signInUser, [name]: value });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Signin data:", signInUser);
    // You can add your signin logic here
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

import React, { useState } from 'react';
import './style.css';

const Signinuser = () => {

  return (
    <>
      <div className="box">
        <h1 className="text">Welcome Back!</h1>
        <form>
        <div className="signupform">
            <div className="inputbox">
                <label htmlFor="phone" class="lab1">Phone</label>
                <input type="tel" id="phone" name="phone" class="input1" />
            </div>
            <div className="inputbox">
                <label htmlFor="password" class="lab1">Password</label>
                <input type="password" id="password" class="input1" name="password" />
            </div>
            <div className="link-cont">
                    <a href="#" className="a1">Already have an account?  </a>
                    <a href="#" className="a2">Sign In</a>
            </div>
            <button className="button1" type="submit">Sign In</button>
        </div>
        </form>
      </div>
    </>
  );
};

export default Signin;
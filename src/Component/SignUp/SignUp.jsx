import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../../firebase/firebase.init";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const SignUp = () => {
  const [success, setSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const handleSignUp = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const terms = form.terms.checked;
    console.log(email, password, terms);
    setSuccess(false);
    setErrorMessage("");
    if (!terms) {
      setErrorMessage(
        "You have to accecpt our Terms and Conditon before you get in."
      );
      return;
    }
    // password validation
    const passwordRegExp = /(?=.*d)(?=.*[a-z])(?=.*[A-Z]).{8,}/;
    if (passwordRegExp.test(password) === false) {
      setErrorMessage(
        "Must be at least 8 characters and include a number, a lowercase and an uppercase letter"
      );
      return;
    }
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        console.log(result);
        setSuccess(true);
      })
      .catch((error) => {
        console.log(error);
        setErrorMessage(error.message);
      });
  };

  return (
    <div className="hero mt-25 mx-auto w-9/12">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <h1 className="text-3xl font-bold mx-auto">Sign Up now!</h1>
        <div className="card-body">
          <form onSubmit={handleSignUp} className="fieldset">
            <label className="label">Email</label>
            <input
              type="email"
              name="email"
              className="input"
              placeholder="Email"
            />
            <label className="label">Password</label>
            <div className="relative items-center">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                className="input"
                placeholder="Password"
              />
              <button
                onClick={() => {
                  setShowPassword(!showPassword);
                }}
                className="btn btn-ghost btn-xs absolute top-2 right-6"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>
            <label className="label">
              <input type="checkbox" name="terms" className="checkbox" />
              Accept terms and conditions
            </label>
            <button className="btn btn-naturel w-1/4">Sign Up</button>
          </form>
          {errorMessage && <p className="text-red-500">{errorMessage}</p>}
          {success && (
            <p className="text-green-500">Sign Up done successfully</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default SignUp;

import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../../firebase/firebase.init";

const SignUp = () => {
  const [success, setSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const handleSignUp = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    setSuccess(false);
    setErrorMessage("");
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
            <input
              type="password"
              name="password"
              className="input"
              placeholder="Password"
            />
            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>
            <button className="btn btn-ghost mt-4 w-1/4">Sign Up</button>
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

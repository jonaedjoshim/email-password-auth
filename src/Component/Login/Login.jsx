import {
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
} from "firebase/auth";
import React, { useRef, useState } from "react";
import { auth } from "../../firebase/firebase.init";
import { Link } from "react-router";

const Login = () => {
  const [success, setSuccess] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const emailRef = useRef();

  const handleLogIn = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    setSuccess(false);
    setErrorMessage("");
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        console.log(result.user);
        if (!result.user.emailVerified) {
          alert("Verify your email address first.");
        } else {
          setSuccess(true);
        }
      })
      .catch((error) => {
        console.log(error);
        setErrorMessage(error.message);
      });
  };

  const handleForgetPassword = () => {
    console.log(emailRef.current.value);
    const email = emailRef.current.value;
    // send password reset email
    sendPasswordResetEmail(auth, email)
      .then(() => {
        alert("Password reset email has been sent to your email.");
      })
      .catch((error) => {
        setErrorMessage(error.message);
      });
  };

  return (
    <div className="hero mt-12">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-3xl font-bold">Login now!</h1>
          <p className="py-6 w-3/5 mx-auto">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
            explicabo laboriosam saepe.
          </p>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <form onSubmit={handleLogIn} className="fieldset">
              <label className="label">Email</label>
              <input
                name="email"
                type="email"
                placeholder="Email"
                ref={emailRef}
                className="input"
              />
              <label className="label">Password</label>
              <input
                name="password"
                type="password"
                className="input"
                placeholder="Password"
              />
              <div>
                <a onClick={handleForgetPassword} className="link link-hover">
                  Forgot password?
                </a>
              </div>
              <button className="btn btn-natural mt-4">Login</button>
            </form>
            <p>
              New here?{" "}
              <Link className="underline text-blue-500" to="/signup">
                Sign Up
              </Link>{" "}
              if you are new.
            </p>
            {errorMessage && <p className="text-red-500">{errorMessage}</p>}
            {success && (
              <p className="text-green-500">Successfully logged in.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

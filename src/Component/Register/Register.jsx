import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    
    console.log(email, password);
  };

  return (
    <form
      onSubmit={handleRegister}
      className="flex flex-col gap-6 w-full max-w-md p-4 items-center mx-auto mt-6"
    >
      {/* Email section */}
      <label className="input input-bordered w-full flex items-center gap-2">
        <input
          type="email"
          name="email"
          placeholder="Email address"
          required
          className="w-full"
        />
      </label>

      {/* Password section with eye icon */}
      <div className="relative w-full">
        <input
          type={showPassword ? "text" : "password"}
          name="password"
          required
          placeholder="Password"
          minLength={8}
          pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
          title="Must be at least 8 characters and include a number, a lowercase and an uppercase letter"
          className="input input-bordered w-full pr-10"
        />
        <span
          onClick={() => setShowPassword(!showPassword)}
          className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-gray-500 hover:text-gray-700"
        >
          {showPassword ? <FaEyeSlash /> : <FaEye />}
        </span>
      </div>

      {/* Submit button */}
      <button type="submit" className="btn btn-ghost w-full">
        Register
      </button>
    </form>
  );
};

export default Register;

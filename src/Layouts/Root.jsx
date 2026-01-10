import React from "react";
import Navbar from "../Compornent/Navbar/Navbar";
import { Outlet } from "react-router";

const root = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
};

export default root;

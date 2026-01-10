import React from "react";
import Navbar from "../Component/Navbar/Navbar";
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

import React, { useState } from "react";
import NavBar from "./NavBar";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
const Home = () => {
  return (
    <>
      <NavBar />
      <Outlet />
      <Footer />
    </>
  );
};

export default Home;

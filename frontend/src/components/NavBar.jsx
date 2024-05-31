import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { FaCircleUser } from "react-icons/fa6";
import Existing from "./Existing";
const NavBar = () => {
  const [data, setData] = useState({
    name: "",
    pic: "",
  });
  let email = localStorage.getItem("email");
  useEffect(() => {
    if (email) {
      axios
        .post("http://localhost:3000/api/v1/getdata", { email })
        .then((res) => {
          setData({
            ...data,
            name: res.data.name,
            pic: res.data.pic,
          });
        });
    } else {
      setData({
        ...data,
        extra: "abc",
      });
    }
  }, [data]);

  return (
    <>
      <div className="container1 bg-[#0c3c60] text-white w-[100vw]">
        <div className="wrapper1 max-w-[1300px] mx-auto flex items-center justify-between h-[10vh] ">
          <div className="logo w-[30vw]  text-[20px]">
            <Link to="/">JAMES CONSULTING</Link>
          </div>
          <div className="links w-[50vw] text-[16px] font-light">
            <ul className="flex items-center justify-between">
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/projects">Projects</Link>
              </li>
              <li>
                <Link to="/services">Services</Link>
              </li>
              <li>
                <Link to="/plans&pricing">Plans & Pricing</Link>
              </li>
              <li>
                <Link to="/tools&tips">Tools & Tips</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
          <div className="auth w-[20vw]">
            <ul className="flex items-center justify-end">
              <li>
                {!localStorage.getItem("email") ? (
                  <Link
                    to="/login"
                    className="flex items-center gap-4 text-[16px] font-light"
                  >
                    <FaCircleUser className="text-[30px]" /> Log In
                  </Link>
                ) : (
                  <Existing name={data.name} pic={data.pic} />
                )}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;

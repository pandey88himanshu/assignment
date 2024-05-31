import React, { useState } from "react";
import { Link } from "react-router-dom";

import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
const Login = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  function changeHandler(e) {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  }
  async function clickHandler(user) {
    if (user.email && user.password) {
      await axios
        .post("https://assignment-backend-omega.vercel.app/api/v1/login", user)
        .then((res) => {
          console.log(res);
          if (res.status == 200) {
            toast.success("login success");
            localStorage.setItem("email", user.email);
            navigate("/");
          } else {
            alert("Fails");
          }
        });
    } else {
      toast.error("fill details");
    }
  }
  return (
    <>
      {console.log(user)}
      <div className="container ">
        <div className="wrapper max-w-[1300px] mx-auto h-[80vh] flex items-center justify-center">
          <div className="form text-black h-[40vh] w-[30vw] flex items-center justify-center flex-col gap-3">
            <form action="" className="flex items-center justify-between ">
              <div flex items-center justify-between gap-9>
                <div className="flex flex-col w-[30vw] gap-4">
                  <label
                    htmlFor="email"
                    className="text-[16px] text-[#0c3c60] font-medium"
                  >
                    Email:
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={user.name}
                    onChange={changeHandler}
                    className="border-b border-solid border-[#0c3c60]  bg-transparent focus:outline-none text-[#0c3c60]"
                    placeholder="Enetr your email"
                  />
                </div>
                <div className="flex flex-col w-[30vw] gap-4 py-[10px]">
                  <label
                    htmlFor="password"
                    className="text-[16px] text-[#0c3c60] font-medium"
                  >
                    Password:
                  </label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    onChange={changeHandler}
                    value={user.password}
                    className="border-b border-solid border-[#0c3c60]  bg-transparent focus:outline-none text-[#0c3c60]"
                    placeholder="Enetr your pass"
                  />
                </div>
                <div className="py-[30px]">
                  <button
                    className="text-[#0c3c60] px-[30px] py-[10px] border border-solid border-black text-[16px] font-medium transition ease duration-300 hover:bg-[#0c3c60] hover:text-white"
                    onClick={(e) => {
                      e.preventDefault();
                      clickHandler(user);
                    }}
                  >
                    Submit
                  </button>
                </div>
              </div>
            </form>
            <p>
              New User ?{" "}
              <Link to="/signup" className="text-[#2c37aa]">
                Sign Up
              </Link>
            </p>
          </div>
          <div className="bg-red-200 absolute left-[120px] w-[15vw] h-[5vw] flex items-center justify-center flex-col">
            <p>ID: abc@gmail.com</p>
            <p>password: 123</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import env from "react-dotenv";
import { toast } from "react-toastify";
const Signup = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    cpassword: "",
    pic: "",
  });
  function changeHandler(e) {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  }
  async function clickHandler(user) {
    if (
      user.name &&
      user.email &&
      user.pic &&
      user.password === user.cpassword
    ) {
      await axios
        .post("https://assignment-backend-omega.vercel.app/api/v1/signup", user)
        .then((res) => {
          console.log(res);
          if (res.status == 200) {
            toast.success("signup success");
            navigate("/login", { state: user.email });
          } else {
            toast.error("Fails");
          }
        });
    } else {
      toast.error("fill details");
    }
  }
  return (
    <>
      <div className="container">
        <div className="wrapper h-[80vh] flex items-center justify-center">
          <div className="form">
            <form
              action=""
              className="flex flex-col items-start justify-between gap-4"
            >
              <label
                htmlFor="name"
                className="text-[16px] text-[#0c3c60] font-medium"
              >
                Name:
              </label>
              <input
                className=" w-[40vw] border-b border-solid border-[#0c3c60]  bg-transparent focus:outline-none text-[#0c3c60]"
                type="text"
                id="name"
                name="name"
                value={user.name}
                onChange={changeHandler}
              />
              <label
                htmlFor="email"
                className="text-[16px] text-[#0c3c60] font-medium"
              >
                Email:
              </label>
              <input
                className=" w-[40vw] border-b border-solid border-[#0c3c60]  bg-transparent focus:outline-none text-[#0c3c60]"
                type="email"
                id="email"
                name="email"
                value={user.email}
                onChange={changeHandler}
              />
              <label
                htmlFor="password"
                className="text-[16px] text-[#0c3c60] font-medium"
              >
                Password:
              </label>
              <input
                className=" w-[40vw] border-b border-solid border-[#0c3c60]  bg-transparent focus:outline-none text-[#0c3c60]"
                type="password"
                id="password"
                name="password"
                value={user.password}
                onChange={changeHandler}
              />
              <label
                htmlFor="cpassword"
                className="text-[16px] text-[#0c3c60] font-medium"
              >
                Confirm Password:
              </label>
              <input
                className=" w-[40vw] border-b border-solid border-[#0c3c60]  bg-transparent focus:outline-none text-[#0c3c60]"
                type="password"
                id="cpassword"
                name="cpassword"
                value={user.cpassword}
                onChange={changeHandler}
              />
              <label
                htmlFor="pic"
                className="text-[16px] text-[#0c3c60] font-medium"
              >
                Profile Pic URL:
              </label>
              <input
                className=" w-[40vw] border-b border-solid border-[#0c3c60]  bg-transparent focus:outline-none text-[#0c3c60]"
                type="text"
                id="pic"
                name="pic"
                value={user.pic}
                onChange={changeHandler}
              />
              <button
                className="text-[#0c3c60] px-[30px] py-[10px] border border-solid border-black text-[16px] font-medium transition ease duration-300 hover:bg-[#0c3c60] hover:text-white"
                onClick={(e) => {
                  e.preventDefault();
                  clickHandler(user);
                }}
              >
                Submit
              </button>
            </form>
            <p className="pt-[20px]">
              Already User?{" "}
              <Link to="/login" className="text-[#0c3c60] font-medium">
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;

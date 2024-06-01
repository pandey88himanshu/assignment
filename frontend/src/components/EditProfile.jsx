import axios from "axios";
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const EditProfile = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const data = location.state;
  console.log(data);
  const [user, setUser] = useState({
    name: "",
    pic: "",
    email: localStorage.getItem("email"),
  });
  function changeHandler(e) {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  }
  async function clickHandler(user) {
    try {
      if (user.name || user.pic) {
        await axios
          .put("https://assignment-backend-omega.vercel.app/v1/update", user)
          .then((data) => {
            toast.success("Changed");
            navigate("/");
          });
      }
    } catch (error) {
      alert("Not Changed");
    }
  }
  function logout() {
    localStorage.removeItem("email");
    toast.success("Logout Successfully");
    navigate("/");
  }
  return (
    <>
      {console.log(user)}
      <div className="w-[100vw] h-[100vh] flex items-center justify-center">
        <div className="max-w-[1300px] mx-auto ">
          <div>
            <form
              action=""
              className="flex items-start justify-center flex-col gap-5"
            >
              <label
                htmlFor="name"
                className="text-[16px] text-[#0c3c60] font-medium"
              >
                Update Name:{" "}
              </label>
              <input
                className=" w-[40vw] border-b border-solid border-[#0c3c60]  bg-transparent focus:outline-none text-[#0c3c60]"
                type="text"
                name="name"
                id="name"
                value={user.name}
                onChange={changeHandler}
              />
              <label
                htmlFor="pic"
                className="text-[16px] text-[#0c3c60] font-medium"
              >
                Update Pic
              </label>
              <input
                className=" w-[40vw] border-b border-solid border-[#0c3c60]  bg-transparent focus:outline-none text-[#0c3c60]"
                type="text"
                name="pic"
                id="pic"
                value={user.pic}
                onChange={changeHandler}
              />
              <button
                className="text-[#0c3c60] px-[40px] py-[15px] border border-solid border-black text-[16px] font-medium transition ease duration-300 hover:bg-[#0c3c60] hover:text-white"
                onClick={(e) => {
                  e.preventDefault();
                  clickHandler(user);
                }}
              >
                Submit
              </button>
              <button
                className="text-[#ffffff] bg-red-600 px-[40px] py-[15px]  text-[16px] font-medium transition ease duration-300 hover:bg-red-700 hover:text-white"
                onClick={(e) => {
                  e.preventDefault();
                  logout();
                }}
              >
                Logout
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditProfile;

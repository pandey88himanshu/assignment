import React from "react";
import { useNavigate } from "react-router-dom";
const Existing = (props) => {
  const navigate = useNavigate();
  return (
    <>
      <div className="flex items-center justify-between gap-6">
        <div className="w-[40px] rounded-full">
          <img src={props.pic} alt="" className="rounded-full" />
        </div>
        <div>
          <p
            className="cursor-pointer text-[16px]"
            onClick={() => {
              navigate("/update");
            }}
          >
            {props.name}
          </p>
        </div>
      </div>
    </>
  );
};

export default Existing;

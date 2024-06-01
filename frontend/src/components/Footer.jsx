import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className="container1 bg-[#072136] text-white w-[100vw]">
        <div className="wrapper1 flex items-start justify-between max-w-[1300px] mx-auto h-[50vh] pt-[30px] max-sm:flex-col  max-sm:items-center ">
          <div className="left flex flex-col items-start justify-center gap-5 ">
            <p className="text-[20px] font-light tracking-wider">
              JAMES CONSULTING
            </p>
            <ul className="text-[14px] font-light leading-6">
              <li>500 Terry Francine Street,</li>
              <li>San Francisco, CA 94158</li>
              <li>Mail: info@mysite.com</li>
              <li>Tel: 123-456-7890</li>
            </ul>
          </div>
          <div className="middle flex flex-col items-start justify-center gap-5 ">
            <p className="text-[20px] font-light tracking-wider">Menu</p>
            <ul className="text-[16px] font-light leading-6 flex flex-col gap-3">
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
          <div className="end flex flex-col items-start justify-center gap-5 ">
            <div className="flex flex-col gap-2">
              <p className="text-[20px] font-light tracking-wider">SOCIALS</p>
              <ul className="flex items-center gap-4">
                <li>
                  <FaFacebookF className="text-[20px]" />
                </li>
                <li>
                  <FaTwitter className="text-[20px]" />
                </li>
              </ul>
            </div>
            <p>© 2035 by JAMES CONSULTING.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;

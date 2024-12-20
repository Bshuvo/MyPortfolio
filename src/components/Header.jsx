import React from "react";
import pic from "../assets/profile.jpg";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Header = () => {
  return (
    <div className="">
      <div className="mx-auto w-36 mt-20 rounded-full border-4  border-[#3BF686] ">
        <img className="w-36 rounded-full" src={pic} alt="" />
      </div>
      <div className="flex gap-3 justify-center mt-5">
        <h1 className="text-white">
          <FaLinkedin />
        </h1>

         
          <a className="text-white" href="https://github.com/Bshuvo" target="_blank">  <FaGithub /></a>
      
        <h1 className="text-white">
          <FaXTwitter />
        </h1>



      </div>
      <div className="flex flex-col justify-center items-center">
        <p className="p-5 text-center bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% bg-clip-text text-transparent font-bold text-2xl">
          Shuvo Barua -a MERN Stack Developer && Problem Solver
        </p>

      <button className="px-4 py-3 rounded-md hover:scale-110 transition-transform bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% font-bold ">Resume</button>



      </div>

    </div>
  );
};

export default Header;

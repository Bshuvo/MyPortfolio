import React from "react";
import { FaTools } from "react-icons/fa";
import Skillcard from "./cards/Skillcard";

import html from "../assets/skillicon/html-5.png";
import cpp from "../assets/skillicon/c-.png";
import c from "../assets/skillicon/letter-c.png";
import css from "../assets/skillicon/css-3.png";
import react from "../assets/skillicon/science.png";
import python from "../assets/skillicon/python.png";
import js from "../assets/skillicon/js.png";
import nodejs from "../assets/skillicon/nodejs.png";
import boot from "../assets/skillicon/boot.png";
import tailwind from "../assets/skillicon/tailwind.png";
import sql from "../assets/skillicon/sql.png";
import mongodb from "../assets/skillicon/mongodb.png";
import express from "../assets/skillicon/express.png";
import git from "../assets/skillicon/git.png";
import daisy from "../assets/skillicon/daisyui.png";
import router from "../assets/skillicon/router.png";
import jwt from "../assets/skillicon/jwt.png";








const Skills = () => {
  return (
    <div id="skill">
      <div className=" p-4 border-2 rounded-md mt-10 m-5 flex flex-col justify-center items-center gap-4 ">
        <h1 className="text-xl font-bold text-[#3BF686] mt-5 ">Language & Tools</h1>
        <h1 className="text-2xl text-[#3BF686] flex justify-center border-2 w-10 h-10 rounded-xl">
          <h1 className="my-auto ">
            <FaTools />
          </h1>
        </h1>


        <div className="flex justify-center items-center flex-wrap gap-4 mt-5">
        <Skillcard pic={c} sname="C" />
        <Skillcard pic={cpp} sname="Cpp" />
        <Skillcard pic={python} sname="Python" />
        <Skillcard pic={js} sname="Javascript" />
        <Skillcard pic={html} sname="Html" />
        <Skillcard pic={css} sname="Css" />
        <Skillcard pic={boot} sname="Bootstraps" />
        <Skillcard pic={tailwind} sname="Tailwind Css" />
        <Skillcard pic={daisy} sname="Daisy Ui" />
        <Skillcard pic={react} sname="React" />
        <Skillcard pic={router} sname="React Router" />
        <Skillcard pic={nodejs} sname="Node Js" />
        <Skillcard pic={express} sname="Express Js" />
        <Skillcard pic={sql} sname="SQL" />
        <Skillcard pic={mongodb} sname="MongoDB" />
        <Skillcard pic={git} sname="Git&Github" />
        <Skillcard pic={jwt} sname="JWT" />




        </div>

      </div>
    </div>
  );
};

export default Skills;

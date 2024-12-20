
import React, { useEffect } from "react";

import { GrUserManager } from "react-icons/gr";

const AboutMe = () => {




  return (
 <section id="about">

<div className="text-white">
      <div className="mt-10 flex flex-col justify-center items-center gap-4 border-2 rounded-md p-4 m-5">
        <h1 className="text-xl font-bold text-[#3BF686] mt-5 ">About Me</h1>

        <h1 className="text-2xl text-[#3BF686] flex justify-center border-2 w-10 h-10 rounded-xl">
          <h1 className="my-auto ">
            <GrUserManager />
          </h1>
        </h1>
        <p className="text-center text-gray-300 p-3">
        Hi, I'm Shuvo, an undergraduate student in Computer Science and Engineering at the International Islamic University. I'm a web developer specializing in the MERN stack (MongoDB, Express, React, Node.js) and UI design with Tailwind CSS and DaisyUI. I enjoy solving coding challenges on Codeforces and CodeChef to improve my problem-solving skills. Passionate about building responsive, high-performance web applications, I'm always eager to learn and collaborate on new projects.




        </p>
      </div>
    </div>



 </section>
  );
};

export default AboutMe;

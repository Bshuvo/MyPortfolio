import React from "react";
import ProjectCard from "../components/cards/ProjectCard";
import { GrProjects } from "react-icons/gr";
import bike from "../assets/projects/bike.png";
import paint from "../assets/projects/paint.png";
import teahouse from "../assets/projects/teahouse.png";
import bank from "../assets/projects/bank.png";
import todo from "../assets/projects/todo.png";

const Projects = () => {
  return (
    <div id="project">
      <div className=" p-4 border-2 rounded-md mt-10 m-5 flex flex-col justify-center items-center gap-4 ">
        <h1 className="text-xl font-bold text-[#3BF686] mt-5 ">
          My Projects
        </h1>
        <h1 className="text-2xl text-[#3BF686] flex justify-center border-2 w-10 h-10 rounded-xl">
          <h1 className="my-auto "><GrProjects /></h1>
        </h1>

        <div className="flex justify-center items-center flex-wrap gap-4 mt-5">
          <ProjectCard pic={bike} pro="BikerZone" link="https://bshuvo.github.io/BikerZone_Assignment-04/"/>
          <ProjectCard pic={paint} pro="Paint" link="https://bshuvo.github.io/EDGE_MIDTERM/"/>
          <ProjectCard pic={teahouse} pro="TeaHouse" link="https://bshuvo.github.io/TeaHouse_webpage/"/>
          <ProjectCard pic={bank} pro="BaperBank" link="https://bshuvo.github.io/BaperBank_Assignment/"/>
          <ProjectCard pic={todo} pro="TodoApp" link="https://bshuvo.github.io/TodoReact/"/>
        </div>
      </div>
    </div>
  );
};

export default Projects;

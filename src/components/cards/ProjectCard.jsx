import React from 'react'
import { MdLiveTv } from "react-icons/md";
const ProjectCard = (props) => {
  return (
    <div className="p-4 bg-white rounded-md flex flex-col justify-center items-center gap-2 bg-opacity-5 ">
    <img className="w-60 h-28 rounded-md " src={props.pic} alt="" />
    <h1 className="font-bold text-sm text-[#3BF686]">{props.pro}</h1>
    <a className='flex justify-center items-center gap-2 underline text-[#3BF686] font-bold' href={props.link} target='_blank'>Live Link <MdLiveTv /></a>
  </div>
  
  )
}

export default ProjectCard

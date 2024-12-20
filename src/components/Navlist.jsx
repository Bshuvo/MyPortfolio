import React from 'react'
import { Link } from 'react-scroll'

const Navlist = () => {


  
  return (
    <div>
      <ul className='cursor-pointer bg-opacity-20 right-0 p-4 text-center top-10 space-y-2 bg-lime-50 mt-5 ml-5 rounded-md absolute md:underline md:flex md:bg-transparent md:gap-5 md:items-center md:space-y-0 md:top-0 md:mt-0'>
        <li>
          <Link to="about" smooth={true} duration={500} className="block  rounded-md text-base text-[#3BF686] md:text-xl font-bold">
            About
          </Link>
        </li>
        <li>
          <Link to="skill" smooth={true} duration={500} className="block  rounded-md text-base text-[#3BF686] md:text-xl font-bold ">
            Skills
          </Link>
        </li>
        <li>
          <Link to="project" smooth={true} duration={500} className="block  rounded-md text-base text-[#3BF686] md:text-xl font-bold ">
            Projects
          </Link>
        </li>
        <li>
          <Link to="contact" smooth={true} duration={500} className="block  rounded-md text-base text-[#3BF686] md:text-xl font-bold ">
            Contact
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default Navlist

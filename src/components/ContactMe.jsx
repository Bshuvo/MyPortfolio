import React from 'react'
import contact from '../assets/contact.jpg'
import { MdAttachEmail } from "react-icons/md";
import { FaMobileAlt } from "react-icons/fa";



const ContactMe = () => {
  return (
    <div className="mt-10 flex flex-col justify-center items-center gap-4 border-2 rounded-md p-4 m-5" id='contact'>
        <h1 className="text-xl font-bold text-[#3BF686] mt-5 ">Contact Me</h1>


        <div className='flex justify-center items-center gap-5 flex-wrap mt-5'>


        <img className='w-56 rounded-md' src={contact} alt="" />
     <div>
        <h1 className='text-[#3BF686] flex justify-between items-center gap-2'><MdAttachEmail /> shuvobaruait@gmail.com</h1>
        <h1 className='text-[#3BF686] flex  items-center gap-2'><FaMobileAlt /> +8801XXXXXXXXX</h1>
     </div>
        </div>
      
    </div>
  )
}

export default ContactMe

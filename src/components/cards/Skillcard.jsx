import React from "react";



const Skillcard = (props) => {
  return (
    <>
    
    <div className="w-32 h-24 p-4 bg-white rounded-md flex flex-col items-center gap-1">
      <img className="w-10" src={props.pic} alt="" />
      <h1 className="font-bold text-sm">{props.sname}</h1>
    </div>
    
    </>
  );
};

export default Skillcard;

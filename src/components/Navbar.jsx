import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import Navlist from "./Navlist";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="p-5 text-[#3BF686] font-bold flex items-center justify-between text-xl relative">
      <h1 className="">Shuvo Barua</h1>
      
      {/* Desktop View */}
      <div className="hidden md:block">
        <Navlist />
      </div>

      {/* Mobile View */}
      <div className="md:hidden">
        {isMenuOpen && (
          <motion.div
            className="absolute top-0 right-0 w-3/4 bg-white shadow-lg"
            initial={{ x: '100%' }} 
            animate={{ x: 0 }}        
            exit={{ x: '100%' }}    
            transition={{ duration: 0.7 }}   
          >
            <Navlist />
          </motion.div>
        )}
      </div>

      {/* Hamburger Button */}
      <button onClick={toggleMenu} className="md:hidden">
        <GiHamburgerMenu />
      </button>
    </div>
  );
};

export default Navbar;

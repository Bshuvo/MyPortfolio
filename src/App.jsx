import React from "react";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import { motion } from "motion/react";
import { Outlet } from "react-router-dom";
import Projects from "./components/Projects";
import ContactMe from "./components/ContactMe";
import Footer from "./components/Footer";


const App = () => {
  
  
  return (
    <div className=" max-w-[1080px] mx-auto bg-[#272727] p-4">
      <motion.div
        initial={{ x: -100, opacity: 0 }} // Start position to the left (x: -100) with no opacity
        animate={{ x: 0, opacity: 1 }} // Animate to its normal position (x: 0) and full opacity
        transition={{ duration: 1 }} // Duration of the animation
      >
        <Navbar />
      </motion.div>

      <Outlet></Outlet>

      

      <motion.div
        initial={{ x: 100, opacity: 0 }} // Start position to the right (x: 100) with no opacity
        animate={{ x: 0, opacity: 1 }} // Animate to its normal position (x: 0) and full opacity
        transition={{ duration: 1 }} // Duration of the animation
      >
        <Header />
      </motion.div>


      <motion.div
        initial={{ x: -100, opacity: 0 }} // Start position to the left (x: -100) with no opacity
        animate={{ x: 0, opacity: 1 }} // Animate to its normal position (x: 0) and full opacity
        transition={{ duration: 1 }} // Duration of the animation
      >

      <AboutMe />

      </motion.div>



      <motion.div
        initial={{ x: 100, opacity: 0 }} // Start position to the right (x: 100) with no opacity
        animate={{ x: 0, opacity: 1 }} // Animate to its normal position (x: 0) and full opacity
        transition={{ duration: 1 }} // Duration of the animation
      >
      <Skills />
       
      </motion.div>


      <motion.div
        initial={{ x: -100, opacity: 0 }} // Start position to the left (x: -100) with no opacity
        animate={{ x: 0, opacity: 1 }} // Animate to its normal position (x: 0) and full opacity
        transition={{ duration: 1 }} // Duration of the animation
      >

      <Projects/>

      </motion.div>

      <motion.div
        initial={{ x: 100, opacity: 0 }} // Start position to the right (x: 100) with no opacity
        animate={{ x: 0, opacity: 1 }} // Animate to its normal position (x: 0) and full opacity
        transition={{ duration: 1 }} // Duration of the animation
      >
     <ContactMe/>
      </motion.div>



      <motion.div
        initial={{ x: -100, opacity: 0 }} // Start position to the left (x: -100) with no opacity
        animate={{ x: 0, opacity: 1 }} // Animate to its normal position (x: 0) and full opacity
        transition={{ duration: 1 }} // Duration of the animation
      >

     <Footer/>

      </motion.div>



    </div>
  );
};

export default App;

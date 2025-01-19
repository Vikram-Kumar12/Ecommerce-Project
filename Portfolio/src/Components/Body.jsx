import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import Socialmedia from "./socialmedia";

function Body() {
  const navigate = useNavigate();
  
  // for cv , agr upload hai to dowloand ho, nhi to alert show ho
  const [isCvUploaded,setisCvUploaded] = useState(false);
  const handleDownloadCv = (e)=>{
    if (!isCvUploaded) {
      e.preventDefault(); // Prevent navigation
      alert("Resume abhi uploded nahi hai! Kripya baad mein check karein.");
    }
  }
  // Function to handle instant scroll when a navbar item is clicked
  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({
        behavior: "auto", // Instantly jump to the section (no smooth behavior)
        block: "start", // Aligns to the top of the section
      });
    }
  };

 
  return (
    <div className="sm:flex w-full h-full  items-center justify-between overflow-hidden">
      <div className="hidden sm:block ml-32">
        <motion.h1
          initial={{ rotate: 0, y: "50%", opacity: 0 }}
          whileInView={{ rotate: 0, y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ ease: [0.22, 1, 0.36, 1], duration: 1.5, delay: 0.3 }}
          className="text-7xl hidden sm:block "
        >
          I'm Vikram Kumar.
        </motion.h1>
         
        <motion.h2
          initial={{ rotate: 0, y: "50%", opacity: 0 }}
          whileInView={{ rotate: 0, y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ ease: [0.22, 1, 0.36, 1], duration: 1.5, delay: 0.7 }}
          className="text-4xl mt-5 mb-10"
        >
          Front End Web Developer
        </motion.h2>

        <button 
          onClick={() => handleScroll("about")}
          className="bg-[#00EEFF] shadow-[0_0_15px_#00EEFF] hover:shadow-[0_0_0px_#00EEFF] px-4 py-2 text-zinc-800 font-mono rounded-full transition-shadow duration-300 ease-in-out"
        >
          KNOW ME BETTER
        </button>

        <div className="hidden sm:block">
          <Socialmedia />
        </div>

        <div className="mt-3">
          <Link
            to="/dowloandcv" // Fixed typo here
            onClick={handleDownloadCv} // Call the function on click
            className="bg-[#00EEFF] shadow-[0_0_15px_#00EEFF] hover:shadow-[0_0_0px_#00EEFF] px-4 py-2 text-zinc-800 font-mono rounded-full transition-shadow duration-300 ease-in-out"
          >
            Download CV {/* Fixed typo here */}
          </Link>
          <Link
            to="/certificate"
            className="ml-5 bg-[#00EEFF] shadow-[0_0_15px_#00EEFF] hover:shadow-[0_0_0px_#00EEFF] px-4 py-2 text-zinc-800 font-mono rounded-full transition-shadow duration-300 ease-in-out"
          >
            See Certification
          </Link>
        </div>
        
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ ease: "easeInOut", duration: 0.8 }}
        className="sm:w-[56vh] sm:h-[70vh] sm:mr-20 sm:mt-10 mt-20 w-[40vh] h-[50vh] ml-10 rounded-md overflow-hidden shadow-[0px_4px_15px_rgba(255,255,255,100)] hover:scale-105 duration-300 "
      >
        <img
          className="w-full h-full object-cover rounded-md border-[2px] border-zinc-400"
          src="/photo.jpeg"
          alt=""
        />
      </motion.div>

    </div>
  );
}

export default Body;

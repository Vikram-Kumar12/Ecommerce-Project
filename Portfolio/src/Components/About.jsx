import React, { useState } from "react";
import Socialmedia from "./socialmedia";
import { Link } from "react-router-dom";
function About() {
  // for cv , agr upload hai to dowloand ho, nhi to alert show ho
    const [isCvUploaded,setisCvUploaded] = useState(false);
    const handleDownloadCv = (e)=>{
      if (!isCvUploaded) {
        e.preventDefault(); // Prevent navigation
        alert("Resume abhi uploded nahi hai! Kripya baad mein check karein.");
      }
    }

  return (
    <div className="w-full mt-10 sm:mt-32 overflow-hidden">

      <div 
       className="sm:w-[90%] w-[95%] ml-3 mr-3 sm:ml-20 flex items-center justify-center flex-col sm:py-20 py-5 bg-[#390F7C] rounded-lg sm:px-0 ">

        <h1 className="hidden sm:block text-3xl  sm:w-fit w-[70%] text-center">
          Hii, MY NAME IS VIKRAM KUMAR
        </h1>
        <h1 className="sm:hidden text-4xl  sm:w-fit w-[90%]">
          I'm Vikram Kumar.
        </h1>
        <h4
          style={{ fontFamily: "Normal, sans-serif" }}
          className="mt-5 text-xl hidden sm:block "
        >
          I will either find a way, or make one.
        </h4>
        <h4
          style={{ fontFamily: "Normal, sans-serif" }}
          className="mt-3 text-2xl sm:hidden w-[90%]"
        >
          FrontEnd Web Developer
        </h4>
        <span className="hidden sm:block h-[1px] w-20 bg-[#148914] mt-5 "></span>
        <p
          style={{ fontFamily: "Normal, sans-serif" }}
          className="ml-5 sm:ml-32 mt-5 text-left mr-3 sm:mr-0 sm:w-[70%] text-sm font-semibold"
        >
          Hi, I’m <span className="text-xl font-bold">Vikram Kumar</span>, a
          passionate frontend developer dedicated to creating visually appealing
          and user-friendly websites. I specialize in building responsive
          designs that work seamlessly across all devices, ensuring the best
          user experience.
        </p>
        <p
          style={{ fontFamily: "Normal, sans-serif" }}
          className="ml-5 sm:ml-32 mt-5 text-left mr-3 sm:mr-0 sm:w-[70%] text-sm font-semibold"
        >
          Though I’m at the start of my professional journey, I’ve spent
          countless hours honing my skills in HTML, CSS, JavaScript, React, and
          Tailwind CSS. From crafting small projects to experimenting with
          innovative ideas, I’m always eager to learn and grow as a developer.
        </p>
        <p
          style={{ fontFamily: "Normal, sans-serif" }}
          className="ml-5 sm:ml-32 mt-5 text-left mr-3 sm:mr-0 sm:w-[70%] text-sm font-semibold"
        >
          I believe that great design is about solving problems and telling
          stories. My goal is to collaborate with amazing people and bring
          impactful ideas to life through clean, efficient, and modern code.
        </p>
        
        <div className="mt-10 mb-5 sm:hidden">
         <Socialmedia/>
        </div>

        <div className="mt-3 mb-5 sm:hidden">
          <Link to="/dowloandcv"
             onClick={handleDownloadCv}
            className="bg-[#00EEFF] shadow-[0_0_15px_#00EEFF] hover:shadow-[0_0_0px_#00EEFF] px-4 py-2 text-zinc-800 font-mono rounded-full transition-shadow duration-300 ease-in-out"
          >
            Dowloand CV
          </Link>
          <Link to="/certificate"
            // onClick={certificateHandler}
            className="ml-4 bg-[#00EEFF] shadow-[0_0_15px_#00EEFF] hover:shadow-[0_0_0px_#00EEFF] px-4 py-2 text-zinc-800 font-mono rounded-full transition-shadow duration-300 ease-in-out"
          >
            See Certification
          </Link>
        </div>
        
      </div>
      
    </div>
  );
}
export default About;

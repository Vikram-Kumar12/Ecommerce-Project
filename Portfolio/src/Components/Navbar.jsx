import { motion } from "framer-motion";
import { Power4 } from "gsap/all";
import React, { useState, useEffect } from "react";
import { IoMenu, IoClose } from "react-icons/io5";
import Contact from "./Contact";
import { RxCross2 } from "react-icons/rx";
function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Prevent scrolling when the menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden"; // Disable scrolling
    } else {
      document.body.style.overflow = "auto"; // Re-enable scrolling
    }
  }, [menuOpen]);

  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({
        behavior: "auto",
        block: "start",
      });
      setMenuOpen(false); // Close menu after clicking an item
    }
  };

  return (
    <div className="w-full h-[12vh] sm:h-[10vh]">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ ease: Power4.easeInOut, duration: 0.8 }}
        className="flex items-center justify-between relative"
      >
        <h1 className="absolute sm:left-20 left-3 border-[3px] border-[#5435A1] px-5 py-7 text-3xl rounded-md mt-5 cursor-pointer hover:bg-[#5435A1]">
          Vikram.
        </h1>

        {/* Mobile Menu Icon */}
        <span
          className="sm:hidden px-5 py-3 mt-5 rounded-md border ml-[80%] cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <IoClose size={25} /> : <IoMenu size={25} />}
        </span>

        {/* Desktop Menu */}
        <div className="mt-5 hidden sm:block">
          <div className="w-full flex items-center justify-center gap-20 ml-[100%]">
            {["About", "Projects", "Skills", "Education", "Contact"].map((elem, index) => {
              const sectionId = elem.toLowerCase();
              return (
                <button
                  key={index}
                  className="text-lg hover:scale-105 duration-200"
                  onClick={() => handleScroll(sectionId)}
                >
                  {elem}
                </button>
              );
            })}
          </div>
        </div>
      </motion.div>

      {/* Mobile Menu */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          // top-[12vh]

          className="absolute top-[0] left-0 w-full bg-[#5435A1] text-white py-5 sm:hidden z-50 shadow-lg"
          style={{
            maxHeight: "100vh", // Restrict menu height
            overflowY: "auto", // Enable vertical scrolling
          }}
        > 
          <h1 onClick={() => setMenuOpen(!menuOpen)} className="w-fit px-2 py-1 rounded-lg border text-2xl ml-[80%]"><RxCross2 /></h1>
          <ul className="flex flex-col items-center gap-3">
            {["About", "Projects", "Skills", "Education", "Contact"].map((elem, index) => {
              const sectionId = elem.toLowerCase();
              return (
                <li
                  key={index}
                  className="py-3 px-5 w-full text-center hover:bg-[#402E7A] cursor-pointer transition-all duration-300"
                >
                  <button
                    className="w-full text-lg"
                    onClick={() => handleScroll(sectionId)}
                  >
                    {elem}
                  </button>
                </li>
              );
            })}
          </ul>
          <div className="mb-32"><Contact/></div>
        </motion.div>
      )}
      
    </div>
  );
}

export default Navbar;

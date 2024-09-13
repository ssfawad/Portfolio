import React from "react";
import { useState } from "react";
import { FaAlignJustify } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(prevIsOpen => !prevIsOpen);
  }
  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/90">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center py-5 mx-auto c-space">
            <a href="/" className="text-neutral-400 font-bold text-xl hover:text-white transition-colors">
              Anzhelika
            </a>
            <button onClick={toggleMenu} className="text-neutral-400 hover:text-white focus:outline-none" aria-label="Open Menu">
              {isOpen ? <FaTimes color="white" size={30}/> : <FaAlignJustify color="white" size={30}/>}           
            </button>
            
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;

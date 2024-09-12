import React from "react";
import { FaBeer } from 'react-icons/fa';
import { FiAlignJustify } from "react-icons/fi";
import { FaAlignJustify } from "react-icons/fa";

const Navbar = () => {
  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/90">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center py-5 mx-auto c-space">
            <a href="/" className="text-neutral-400 font-bold text-xl hover:text-white transition-colors">
              Anzhelika
            </a>
            <FaBeer color="white" size={30} />
            <FiAlignJustify color="white" size={30}/>
            <FaAlignJustify color="white" size={30}/>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;

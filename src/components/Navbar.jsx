import { useEffect, useState } from "react";
import { FaAlignRight, FaTimes } from "react-icons/fa";
import { navLinks } from "../constants/data";
import { motion } from "framer-motion";

const NavItems = () => (
  <ul className="flex flex-col items-center gap-4 sm:flex-row md:gap-6 relative z-20">
    {navLinks.map(({ id, href, name }) => (
      <motion.li
        key={id}
        className="font-generalsans max-sm:hover:bg-black-500 max-sm:w-full max-sm:rounded-md py-2 max-sm:px-5"
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.2, ease: "easeOut" }}
      >
        <motion.a
          href={href}
          className="text-lg md:text-base text-white"
          whileHover={{ color: "#ff9720" }}
          transition={{ duration: 0.2, ease: "easeOut" }}
        >
          {name}
        </motion.a>
      </motion.li>
    ))}
  </ul>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      if (isOpen) setIsOpen(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isOpen]);

  const toggleMenu = () => setIsOpen((prev) => !prev);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || isOpen
          ? "bg-[#1a191e] border-b-2 border-[#ff9720] shadow-md"
          : "bg-transparent border-b-2 border-[#ff9720] border-opacity-0"
      }`}
    >
      <div className="mx-auto px-6 sm:px-8 md:px-10">
        <div className="flex justify-between items-center py-5">
          <a href="#home" className="flex items-center">
            <img
              src="logo.png"
              alt="Logo"
              className="w-12 h-12 hover:scale-105 transition-transform"
            />
          </a>

          {/* Desktop nav + Resume link */}
          <nav className="sm:flex hidden items-center gap-6">
            <NavItems />
            <motion.a
              href="Syed_Fawad_Resume.pdf"
              download
              className="bg-gradient-to-r from-[#ff9720] to-[#fc0865] text-black px-4 py-2 rounded-lg font-medium shadow-md transform transition duration-200 ease-out hover:scale-105 hover:shadow-lg"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
            >
              Download Resume
            </motion.a>
          </nav>

          {/* Mobile menu toggle */}
          <button
            onClick={toggleMenu}
            className="text-white hover:text-[#ff9720] focus:outline-none sm:hidden flex"
            aria-label="Toggle Menu"
          >
            {isOpen ? <FaTimes size={25} /> : <FaAlignRight size={25} />}
          </button>
        </div>
      </div>

      {/* Mobile nav + Resume link */}
      <div
        className={`absolute left-0 right-0 bg-[#1a191e] transition-all duration-300 ease-in-out overflow-hidden z-20 mx-auto sm:hidden ${
          isOpen ? "max-h-screen" : "max-h-0"
        }`}
      >
        <nav className="p-5 flex flex-col items-center gap-4">
          <NavItems />
          <motion.a
            href="Syed_Fawad_Resume.pdf"
            download
            className="mt-4 bg-gradient-to-r from-[#ff9720] to-[#fc0865] text-black px-4 py-2 rounded-lg font-medium shadow-md transform transition duration-200 ease-out hover:scale-105 hover:shadow-lg"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
          >
            Download Resume
          </motion.a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;

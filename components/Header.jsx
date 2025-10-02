'use client'


import { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import HaveDrop from "../public/HaveDrop";

const menuItem =[{name:"about"},{name:"process"},{name:"case study"},{name:"skills"},{name:"contact"}]


export default function Header({ mobileMenuOpen, setMobileMenuOpen, toggleMobileMenu }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-red-500 shadow-md" : "bg-white shadow-sm"
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex justify-center items-center gap-1">
          <HaveDrop size={30} color={scrolled?"#000":"#fb2c36"}/>
          <a
            href="#"
            className={`text-2xl font-bold ${
              scrolled ? "text-white" : "text-gray-800"
            }`}
          >
            Have<span className={`${scrolled?"text-black":"text-red-500"}`}>Drop</span>
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
            <ul className="flex space-x-8">
              {menuItem.map((item,i)=>(
                <li key={i} className={` capitalize font-medium hover:text-black ${
              scrolled ? "text-white" : "text-gray-600"
            }`}><a href={`#${item.name.replace(" ","-")}`}>{item.name}</a></li>
              ))}
            </ul>
          
        </nav>

        {/* Mobile Menu Button */}
        <button
          className={`md:hidden ${scrolled ? "text-white" : "text-gray-600"}`}
          onClick={toggleMobileMenu}
        >
          {mobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div
          className={`md:hidden py-4 px-4 border-t ${
            scrolled ? "bg-red-500" : "bg-white"
          }`}
        >
          <ul className="flex flex-col space-y-4">
              {menuItem.map((item,i)=>(
                <li key={i} className={` capitalize font-medium hover:text-black ${
              scrolled ? "text-white" : "text-gray-600"
            }`}><a href={`#${item.name.replace(" ","-")}`}>{item.name}</a></li>
              ))}
            </ul>
          
        </div>
      )}
    </header>
  );
}

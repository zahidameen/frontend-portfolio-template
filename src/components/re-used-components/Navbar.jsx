import { useState, useEffect } from "react";
import { FiSearch, FiMenu, FiX } from "react-icons/fi";
import { Link } from 'react-router-dom'

function Navbar() {
  const [navBg, setNavBg] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setNavBg(true);
      } else {
        setNavBg(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        navBg ? "bg-black shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl w-full mx-auto flex items-center justify-between px-6 py-4">

        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img
            src="logo.png"
            alt="logo"
            className="w-30 h-10"
          />
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center space-x-8">
          <li> <Link to = "/" className="text-gray-300 hover:text-green-500 transition cursor-pointer">HOME</Link></li>
          <li> <Link to = "/about" className="text-gray-300 hover:text-green-500 transition cursor-pointer">ABOUT</Link></li>
          <li> <Link to = "/services" className="text-gray-300 hover:text-green-500 transition cursor-pointer">SERVICES</Link></li>
          <li> <Link to = "/projects" className="text-gray-300 hover:text-green-500 transition cursor-pointer">PROJECTS</Link></li>
          <li> <Link to = "/contact" className="text-gray-300 hover:text-green-500 transition cursor-pointer">CONTACT</Link></li>

          <div className="flex items-center space-x-2 text-green-400 cursor-pointer">
            <FiSearch size={18}/>
            {/* < className="text-gray-300 hover:text-white">Search</span> */}
            <input type="text" className="text-gray-300 hover:text-white" placeholder="Search"/>
          </div>
        </ul>

        {/* Mobile Hamburger */}
        <button
          className="text-white md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <FiX size={26} /> : <FiMenu size={26} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-black text-white pb-4">
          <ul className="flex flex-col space-y-4 px-6 pt-4">
            <li> <Link to = "/" className="hover:text-green-400 cursor-pointer">HOME</Link></li>
            <li> <Link to = "/about" className="hover:text-green-400 cursor-pointer">ABOUT</Link></li>
            <li> <Link to = "/services" className="hover:text-green-400 cursor-pointer">SERVICE</Link></li>
            <li> <Link to = "/projects" className="hover:text-green-400 cursor-pointer">PORTFOLIO</Link></li>
            <li> <Link to = "/contact" className="hover:text-green-400 cursor-pointer">PAGES</Link></li>

            <div className="flex items-center space-x-2 text-green-400 cursor-pointer">
              <FiSearch size={18} />
              <span>Search</span>
            </div>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar
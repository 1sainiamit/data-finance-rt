import { useState } from "react";
import { TiThMenu } from "react-icons/ti";
import { IoClose } from "react-icons/io5";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <nav className="flex text-white items-center h-24 max-w-[1240px] mx-auto px-4 justify-between">
      
      {/* Main Logo */}
      <img
        src="https://www.logologo.com/logos/lion-logo-simple-line-art-free-logo.jpg"
        alt="Logo"
        className="h-14 w-auto"
      />

      {/* Desktop Menu */}
      <ul className="hidden md:flex items-center">
        <li className="p-4">
          <img src="https://imgs.search.brave.com/dTB-qD19v6SBETcfwoON8vEKueFa_WdcvjadfdwE5jk/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9teWNv/YWNoaW5nLmluL3dw/LWNvbnRlbnQvdXBs/b2Fkcy9Qb2VtLTUu/d2VicA" alt="About" className="h-8 w-auto" />
        </li>
        <li className="p-4">
          <img src="https://imgs.search.brave.com/dB9biNLg7yGbKAsTrohlMZCT9yM7ceDdNnseOFp9qjg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vYi9icmFp/bi10aGlua2luZy1j/cmVhdGl2ZS13b3Jk/LW92ZXItYWJzdHJh/Y3QtZ2VvbWV0cmlj/LXNoYXBlcy1iYWNr/Z3JvdW5kLXdlYi1i/YW5uZXItYnJhaW4t/dGhpbmtpbmctY3Jl/YXRpdmUtd29yZC1v/dmVyLWFic3RyYWN0/LTExMDE3NTIwOC5q/cGc" className="h-8 w-auto" />
        </li>
        <li className="p-4">
          <img src="https://imgs.search.brave.com/lkjufuZXyitLwWq8rnYiX2TlzxNFrOHlMGT346_5Pg8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vYi9pbmZv/Z3JhcGhpY3MtdmVj/dG9yLWJyYWluLWRl/c2lnbi1kaWFncmFt/LWJhbm5lci1saW5l/LXN0eWxlLXRlbXBs/YXRlLWNhbi1iZS11/c2VkLWJhbm5lcnMt/dGVjaG5vbG9neS1j/b25jZXB0LTUwMjAx/ODE5LmpwZw" alt="Resources" className="h-8 w-auto" />
        </li>
        <li className="p-4">
          <img src="https://imgs.search.brave.com/cs_WiO-D1geAImRSPI4XI4XdWHJpQyFCoFpvh7Yg40A/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9lbGVt/ZW50cy1yZXNpemVk/LmVudmF0b3VzZXJj/b250ZW50LmNvbS9l/bGVtZW50cy1jb3Zl/ci1pbWFnZXMvMDgw/MDFmMjQtNzQ4My00/Nzg2LThhZDgtYThl/NmQyMDdiZGUzP3c9/NDMzJmNmX2ZpdD1z/Y2FsZS1kb3duJnE9/ODUmZm9ybWF0PWF1/dG8mcz04ZmY0OGMy/NGYwYjMzM2M4OTdk/M2UyZDhhYmViZTdh/MGJkY2M2OWIzNGQ5/Mjc5YjA2MmNmYjI2/YWY2ZDVhYjEx" alt="Blog" className="h-8 w-auto" />
        </li>
      </ul>

      {/* Mobile Menu Icon */}
      <div className="block md:hidden" onClick={handleNav}>
        {!nav ? <TiThMenu size={20} /> : <IoClose size={20} />}
      </div>

      {/* Mobile Menu */}
      <div
        className={
          nav
            ? "fixed left-0 top-0 h-full w-[60%] border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500"
            : "fixed left-[-100%]"
        }
      >
        <img
          src="https://www.logologo.com/logos/lion-logo-simple-line-art-free-logo.jpg"
          alt="Logo"
          className="h-14 m-4"
        />

       <ul className="uppercase p-4"> <li className="p-4 border-b border-b-gray-600">About</li> <li className="p-4 border-b border-b-gray-600">Company</li> <li className="p-4 border-b border-b-gray-600">Resources</li> <li className="p-4 border-b border-b-gray-600">Pakistan</li> <li className="p-4">Contact</li> </ul>
      </div>
    </nav>
  );
};

export default Navbar;

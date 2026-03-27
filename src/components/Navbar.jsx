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
        src="https://images.indianexpress.com/2019/09/hindi-diwas-gettyimages-616123470.jpg"
        alt="Logo"
        className="h-14 w-auto"
      />

      {/* Desktop Menu */}
      <ul className="hidden md:flex items-center">
        <li className="p-4">
          <img src="https://imgs.search.brave.com/P3I3XfYluahpKZ2r-wydk8ERghD7I4vA5mFL9zTT6DQ/rs:fit:0:180:1:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMud29uZGVyc2hh/cmUuY29tL3BkZmVs/ZW1lbnQvb2NyL3Vy/ZHUtc2FtcGxlLmpw/Zw" alt="About" className="h-8 w-auto" />
        </li>
        <li className="p-4">
          <img src="https://imgs.search.brave.com/VVoxwz9ESCMj3T8vtzRnSKGcgXnPwqclv_rbpxkNWzU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzhiLzNh/LzhkLzhiM2E4ZGRh/OWMxNmM2MjBmNjIw/NjllNzUzYzFhZDQ3/LmpwZw" className="h-8 w-auto" />
        </li>
        <li className="p-4">
          <img src="https://imgs.search.brave.com/ffTrPN6zjUxIR1YaxeTKapA9Aw6T2u1-tBnOlguaUcA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzBiL2Yw/L2MxLzBiZjBjMTNm/NTBhZmZiNmY5Yzg2/NzIxY2E2NmVmMjNm/LmpwZw" alt="Resources" className="h-8 w-auto" />
        </li>
        <li className="p-4">
          <img src="https://resize.indiatvnews.com/en/resize/newbucket/1200_-/2019/09/hindi-diwas-1568428091.jpg" alt="Blog" className="h-8 w-auto" />
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

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
        src="https://imgs.search.brave.com/zI8mk4EIbKZkG0V4FOPWxccxaKpfZmOWS8YqpAzrKUE/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5jbm4uY29tL2Fw/aS92MS9pbWFnZXMv/c3RlbGxhci9wcm9k/LzE1MDIxODE1MzYx/MS0wOS1jbm5waG90/b3MtaXdvLWppbWEt/cmVzdHJpY3RlZC5q/cGc_cT13XzIwMDAs/aF8xMTI1LHhfMCx5/XzAsY19maWxsL2hf/NDQ3"
        alt="Logo"
        className="h-14 w-auto"
      />

      {/* Desktop Menu */}
      <ul className="hidden md:flex items-center">
        <li className="p-4">
          <img src="https://cdn.3dnames.co/previews/cd47/1000x1000/h/cd47hacker3dxx.webp" alt="About" className="h-8 w-auto" />
        </li>
        <li className="p-4">
          <img src="https://hewlett.org/wp-content/uploads/2019/07/cyber-hacker-hoodie-photo.jpg" className="h-8 w-auto" />
        </li>
        <li className="p-4">
          <img src="https://cdn.vectorstock.com/i/1000v/61/72/hacker-wordmark-symbol-set-vector-35916172.jpg" alt="Resources" className="h-8 w-auto" />
        </li>
        <li className="p-4">
          <img src="https://avatars.githubusercontent.com/u/2513332?s=280&v=4" alt="Blog" className="h-8 w-auto" />
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

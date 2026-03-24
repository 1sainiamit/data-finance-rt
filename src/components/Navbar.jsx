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
        src="https://imgs.search.brave.com/UwZENeDAFnxRo_0ciX239XtMa_03f6JZgHhy7MrUkAI/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTM5/MDM1NjQzNi9waG90/by9mbGFnLW9mLXBh/a2lzdGFuLmpwZz9z/PTYxMng2MTImdz0w/Jms9MjAmYz11eXky/UndKWWtxY08zUW14/S0VYSmtOci1LQWFG/cFJDWVFoeEZNVmNV/a1VJPQ"
        alt="Logo"
        className="h-14 w-auto"
      />

      {/* Desktop Menu */}
      <ul className="hidden md:flex items-center">
        <li className="p-4">
          <img src="https://imgs.search.brave.com/VoeKqDz7Lb5tuwnoUdF4y1JT3LyHIohH-nx_PzEp5FQ/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/c2h1dHRlcnN0b2Nr/LmNvbS9pbWFnZS12/ZWN0b3IveW91LWhh/dmUtYmVlbi1oYWNr/ZWQtZ2xpdGNoLTI2/MG53LTExNzMyMzA0/NzMuanBn" alt="About" className="h-8 w-auto" />
        </li>
        <li className="p-4">
          <img src="https://imgs.search.brave.com/Aeb2tcIaXtRLRCMzNwQdfAEjXTznj6D78ngX1NM34S8/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vYi95b3Ut/aGF2ZS1iZWVuLWhh/Y2tlZC1oYWNrZXIt/YXR0YWNrLWluZm9y/bWF0aW9uLW1lc3Nh/Z2Utc2NyZWVuLTE4/NDU2MTU0NC5qcGc" className="h-8 w-auto" />
        </li>
        <li className="p-4">
          <img src="https://www.optilingo.com/wp-content/uploads/2020/09/690232_OptiLingoHindiAlphabet_v2_Opt2_041520-1-1002x1536-1.png" alt="Resources" className="h-8 w-auto" />
        </li>
        <li className="p-4">
          <img src="https://i.pinimg.com/236x/7c/79/3b/7c793bbe17e05d18fae1fade80471d75.jpg" alt="Blog" className="h-8 w-auto" />
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

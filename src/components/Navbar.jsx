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
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwF_DEkzigYscAUMDlnWTcccV_dloh30FPhg&s" alt="About" className="h-8 w-auto" />
        </li>
        <li className="p-4">
          <img src="https://i.redd.it/tp7pcwe86hdd1.png" alt="Company" className="h-8 w-auto" />
        </li>
        <li className="p-4">
          <img src="https://imgs.search.brave.com/va0UWc86edy1H4h41oNazdJmJKw1N-ITbQSAuXAg8Ro/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/c2h1dHRlcnN0b2Nr/LmNvbS9zaHV0dGVy/c3RvY2svcGhvdG9z/LzIyMTMzMjU3NTUv/ZGlzcGxheV8xNTAw/L3N0b2NrLXBob3Rv/LWdydW5nZS1iYWNr/Z3JvdW5kLXRleHR1/cmUtZGlydHktc3Bs/YXNoLXBhaW50ZWQt/d2FsbC1hYnN0cmFj/dC1zcGxhc2hlZC1h/cnQtY29uY3JldGUt/d2FsbC13aGl0ZS0y/MjEzMzI1NzU1Lmpw/Zw" alt="Resources" className="h-8 w-auto" />
        </li>
        <li className="p-4">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYNn-dM5WeCjQKcr9ZlRT3WLbMkJEQkyO4UQ&s" alt="Blog" className="h-8 w-auto" />
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

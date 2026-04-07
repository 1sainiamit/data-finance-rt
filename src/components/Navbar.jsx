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
        src="https://imgs.search.brave.com/cD1xejI3zKY_-X38hw1yHWer4sH2ulD2uvKZf5TtYtI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by8zZC1yZW5kZXJp/bmctaGFja2VkLXRl/eHQtd2l0aC1zY3Jl/ZW4tZWZmZWN0cy10/ZWNobm9sb2dpY2Fs/LWdsaXRjaGVzXzIz/MjEwNC0xMDc5MC5q/cGc_c2VtdD1haXNf/aHlicmlkJnc9NzQw/JnE9ODA"
        alt="Logo"
        className="h-14 w-auto"
      />

      {/* Desktop Menu */}
      <ul className="hidden md:flex items-center">
        <li className="p-4">
          <img src="https://imgs.search.brave.com/yr0bXZvOkTqrpl5sT1iRFPQJmihKyAGDGHcmTSsyR2g/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vYi95b3Ut/aGF2ZS1iZWVuLWhh/Y2tlZC1oYWNrZXIt/YXR0YWNrLWluZm9y/bWF0aW9uLW1lc3Nh/Z2Utc2NyZWVuLTE4/NDU2MTU0NC5qcGc" alt="About" className="h-8 w-auto" />
        </li>
        <li className="p-4">
          <img src="https://imgs.search.brave.com/FXwLV_5qTav-T1vBF0BAF53l5yci3daJOeKCoh00Zrs/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vYi9jb21w/dXRlci1oYWNrZWQt/MjA4ODkzNjkuanBn" className="h-8 w-auto" />
        </li>
        <li className="p-4">
          <img src="https://imgs.search.brave.com/j1ccJ1ONjDGKoXdY-9tbisi2Bnct1wGsYObZnTVOQis/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzM4Lzgw/LzM2LzM4ODAzNjNm/ZTE3NzgzZGYyZmQy/YzczODM2MzYyNDQ2/LmpwZw" alt="Resources" className="h-8 w-auto" />
        </li>
        <li className="p-4">
          <img src="https://imgs.search.brave.com/eLgAlemH1qheT3WKtn5CDaiL3cpGN8AAaJ9mNrX0Eo8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vYi9zaG93/aW5nLWhhY2tlZC1v/dmVybGF5LWN1dHRp/bmctYWNyb3NzLXNl/cnZlci1haXNsZS1y/YWNrcy1yZWQtY2ly/Y3VpdC10cmFjZXMt/YmluYXJ5LWRpZ2l0/cy1jeWJlcnNlY3Vy/aXR5LWRpZ2l0YWwt/Mzg4NjY5OTI4Lmpw/Zw" alt="Blog" className="h-8 w-auto" />
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

       <ul className="uppercase p-4"> <li className="p-4 border-b border-b-gray-600">Aboutasdljhfhalsdjf</li> <li className="p-4 border-b border-b-gray-600">Companyla;jshd;flhjasldjhf</li> <li className="p-4 border-b border-b-gray-600">Resources</li> <li className="p-4 border-b border-b-gray-600">Pakistan</li> <li className="p-4">Contact</li> </ul>
      </div>
    </nav>
  );
};

export default Navbar;

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
        src="https://imgs.search.brave.com/2BBOimnTP2_x1YCFlowLQhGC1-lKinlmtJXvyhKmPcQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jOC5h/bGFteS5jb20vY29t/cC9NNENHUEgvaGFj/a2VkLWN5YmVyLXNl/Y3VyaXR5LWFuZC1v/bmxpbmUtZnJhdWQt/Y29uY2VwdC1tb2Jp/bGUtaGFja2VyLWFu/ZC1jcmltaW5hbC1N/NENHUEguanBn"
        alt="Logo"
        className="h-14 w-auto"
      />

      {/* Desktop Menu */}
      <ul className="hidden md:flex items-center">
        <li className="p-4">
          <img src="https://t4.ftcdn.net/jpg/17/32/25/51/360_F_1732255115_V9H5mDKLIgARIdDfMQh2htqUAZiimX2M.jpg" alt="About" className="h-8 w-auto" />
        </li>
        <li className="p-4">
          <img src="https://imagesvs.oneindia.com/img/2014/09/14-hindi-600.jpg" className="h-8 w-auto" />
        </li>
        <li className="p-4">
          <img src="https://media.istockphoto.com/id/1437997089/vector/indian-languages-word-cloud-vector-illustration.jpg?s=612x612&w=0&k=20&c=JWzmnXCUJj925PmLNc-1MIYhN19-sf8eAO7Onbl6paA=" alt="Resources" className="h-8 w-auto" />
        </li>
        <li className="p-4">
          <img src="https://imgs.search.brave.com/AugcSMYkrheLCZW8LNBf625Zs4mrB0eIbyJtuK55ZIA/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by8zZC1yZW5kZXJp/bmctaGFja2VkLXRl/eHQtd2l0aC1zY3Jl/ZW4tZWZmZWN0cy10/ZWNobm9sb2dpY2Fs/LWdsaXRjaGVzXzIz/MjEwNC0xMDM1Mi5q/cGc_c2VtdD1haXNf/aHlicmlkJnc9NzQw/JnE9ODA" alt="Blog" className="h-8 w-auto" />
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

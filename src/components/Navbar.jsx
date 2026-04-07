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
        src="https://imgs.search.brave.com/NfqW63PUes6RSaSydxzers2mCch7jJa0jb8KdZipTms/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9jZG4u/dmVjdG9yc3RvY2su/Y29tL2kvNTAwcC81/Ni84Mi90ZXh0LWFj/Y291bnQtaGFja2Vk/LXdpdGgtd2Fybmlu/Zy1zaWduLW9uLWRh/cmstdmVjdG9yLTM5/MjE1NjgyLmpwZw"
        alt="Logo"
        className="h-14 w-auto"
      />

      {/* Desktop Menu */}
      <ul className="hidden md:flex items-center">
        <li className="p-4">
          <img src="https://imgs.search.brave.com/AugcSMYkrheLCZW8LNBf625Zs4mrB0eIbyJtuK55ZIA/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by8zZC1yZW5kZXJp/bmctaGFja2VkLXRl/eHQtd2l0aC1zY3Jl/ZW4tZWZmZWN0cy10/ZWNobm9sb2dpY2Fs/LWdsaXRjaGVzXzIz/MjEwNC0xMDM1Mi5q/cGc_c2VtdD1haXNf/aHlicmlkJnc9NzQw/JnE9ODA" alt="About" className="h-8 w-auto" />
        </li>
        <li className="p-4">
          <img src="https://imgs.search.brave.com/FXwLV_5qTav-T1vBF0BAF53l5yci3daJOeKCoh00Zrs/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vYi9jb21w/dXRlci1oYWNrZWQt/MjA4ODkzNjkuanBn" className="h-8 w-auto" />
        </li>
        <li className="p-4">
          <img src="https://imgs.search.brave.com/j1ccJ1ONjDGKoXdY-9tbisi2Bnct1wGsYObZnTVOQis/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzM4Lzgw/LzM2LzM4ODAzNjNm/ZTE3NzgzZGYyZmQy/YzczODM2MzYyNDQ2/LmpwZw" alt="Resources" className="h-8 w-auto" />
        </li>
        <li className="p-4">
          <img src="https://imgs.search.brave.com/F_5Cxfrg89TAIVImf6q5aVPMw4pZHtAfJgJmdDwVFRs/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzE1LzM1LzAwLzIy/LzM2MF9GXzE1MzUw/MDIyMzFfY2dNYXhh/Y2Y5MTR4ck55UHFl/TnVxMEhGR3pQeTVE/MnAuanBn" alt="Blog" className="h-8 w-auto" />
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

       <ul className="uppercase p-4"> <li className="p-4 border-b border-b-gray-600">Aboutasdljhasdfasdfasdfasdfasfhalsdjf</li> <li className="p-4 border-b border-b-gray-600">Coampanyla;jshd;flhjasldjhf</li> <li className="p-4 border-b border-b-gray-600">Resources</li> <li className="p-4 border-b border-b-gray-600">Pakistan</li> <li className="p-4">Contact</li> </ul>
      </div>
    </nav>
  );
};

export default Navbar;

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
        src="https://imgs.search.brave.com/fa6mtK231vF6Cl7wDNlFwRa--dJ0fFXw6aKSk9tyJcw/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9iYW5n/bGEtbG92ZS1zbXMu/Y29tL3dwLWNvbnRl/bnQvdXBsb2Fkcy8y/MDE3LzEyL2Jlbmdh/bGktc2hheWFyaS1w/aG90by5qcGc"
        alt="Logo"
        className="h-14 w-auto"
      />

      {/* Desktop Menu */}
      <ul className="hidden md:flex items-center">
        <li className="p-4">
          <img src="https://imgs.search.brave.com/IS2sK9CvIviEs2sBqGCWwJv-CXXaoZ7vN5iuKgSIAr4/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMjE3/MzA2MzMwNi9waG90/by9pbmRpYW4tc2No/b29sYm95LWluLWNs/YXNzcm9vbS5qcGc_/cz02MTJ4NjEyJnc9/MCZrPTIwJmM9WFRw/eHpYZmFnU0ZLYlV3/WnNKM0FBRFQ3d1BO/Q3VOU2RTZzFsVUdS/R1hEbz0" alt="About" className="h-8 w-auto" />
        </li>
        <li className="p-4">
          <img src="https://imgs.search.brave.com/WXNAHdzAFwG2oJzYFFqE068gsPQaIOzWYA_84QYcumg/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTM5/ODgwNzYwMy92ZWN0/b3IvaW5kaWFuLWxh/bmd1YWdlcy13b3Jk/LWNsb3VkLXZlY3Rv/ci1pbGx1c3RyYXRp/b24uanBnP3M9NjEy/eDYxMiZ3PTAmaz0y/MCZjPXA1aFFKclcy/SE1jeV9DWmRBdmFf/QUZ1cG5IUVhEbVpV/ODF3dmJZSE9aeWs9" className="h-8 w-auto" />
        </li>
        <li className="p-4">
          <img src="https://imgs.search.brave.com/j1ccJ1ONjDGKoXdY-9tbisi2Bnct1wGsYObZnTVOQis/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzM4Lzgw/LzM2LzM4ODAzNjNm/ZTE3NzgzZGYyZmQy/YzczODM2MzYyNDQ2/LmpwZw" alt="Resources" className="h-8 w-auto" />
        </li>
        <li className="p-4">
          <img src="https://imgs.search.brave.com/CiA6XsfXZMOO-WJ7XI8CahRMo-Bv9-QGmnPpPW8SYg8/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9iYW5n/bGEtbG92ZS1zbXMu/Y29tL3dwLWNvbnRl/bnQvdXBsb2Fkcy8y/MDE3LzEyL2Jlbmdh/bGktbG92ZS1zaGF5/YXJpLmpwZw" alt="Blog" className="h-8 w-auto" />
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

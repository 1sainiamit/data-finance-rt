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
        src="https://imgs.search.brave.com/gwvRcF5VV8QJMjwrQK8iXd__FABa8ubUZX3vk2uIgAA/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9wbHVz/LnVuc3BsYXNoLmNv/bS9wcmVtaXVtX3Bo/b3RvLTE2NzU4NjUz/OTM5ODgtNGVhMjBm/MDg0ZTgzP2ZtPWpw/ZyZxPTYwJnc9MzAw/MCZhdXRvPWZvcm1h/dCZmaXQ9Y3JvcCZp/eGxpYj1yYi00LjEu/MCZpeGlkPU0zd3hN/akEzZkRCOE1IeHpa/V0Z5WTJoOE9YeDhZ/MmhwYm1FbE1qQm1i/R0ZuZkdWdWZEQjhm/REI4Zkh3dw"
        alt="Logo"
        className="h-14 w-auto"
      />

      {/* Desktop Menu */}
      <ul className="hidden md:flex items-center">
        <li className="p-4">
          <img src="https://imgs.search.brave.com/nbihTbA-Yi2JAWu9i0sbbFkzEqvuCP5Nkjppi0VXBDo/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wNzcv/MDc3LzM4NC9zbWFs/bC9mbGFnLW9mLXRo/ZS1xaW5nLWR5bmFz/dHktY2hpbmEtbG9v/cC12aWRlby5qcGc" alt="About" className="h-8 w-auto" />
        </li>
        <li className="p-4">
          <img src="https://imgs.search.brave.com/FWCzke2ivmCpbgfN9I_qV7mlIHMZXmqZf68cTulOyH4/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTM5/NjA2NTU4OS9waG90/by9mbGFncy1vZi10/aGUtcGVvcGxlcy1y/ZXB1YmxpYy1vZi1j/aGluYS1hbmQtaW5k/aWEuanBnP3M9NjEy/eDYxMiZ3PTAmaz0y/MCZjPUdDc1BDNUpo/eFd1TEx3MmFyTzhm/dnlyOXhkOTBzQ2I3/MFpaV0NjY1BLNlk9" className="h-8 w-auto" />
        </li>
        <li className="p-4">
          <img src="https://imgs.search.brave.com/gEFbTCMJaZ6zNC7PvlErMnX2yUysKnu7CSeA0N46-qc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vYi9oYWNr/ZXItd2FudHMtdG8t/aGFjay1jeWJlcmNy/aW1lLWhhY2tlci13/YW50cy10by1oYWNr/LWN5YmVyY3JpbWUt/MzY1NzU5MDExLmpw/Zw" alt="Resources" className="h-8 w-auto" />
        </li>
        <li className="p-4">
          <img src="https://imgs.search.brave.com/FpqEzJ2j3DbyZuR6C4OTJhdA2x2rBVINcHjh0TVK3F4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/dHlwaW5nYmFiYS5j/b20vdHJhbnNsYXRv/ci9pbWFnZS9oaW5k/aS1sYW5ndWFnZS5q/cGc" alt="Blog" className="h-8 w-auto" />
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

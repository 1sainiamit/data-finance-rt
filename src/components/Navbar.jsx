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
        src="https://imgs.search.brave.com/UP5qghy5SmuXK8i9QndV6zSdI7dp54zGKVIEUWuwAhw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/c2h1dHRlcnN0b2Nr/LmNvbS9pbWFnZS12/ZWN0b3IvaGluZGkt/YWxwaGFiZXRzLXNj/cmlwdC1jYWxsaWdy/YXBoeS0yNjBudy0x/MDM3MDY0ODk1Lmpw/Zw"
        alt="Logo"
        className="h-14 w-auto"
      />

      {/* Desktop Menu */}
      <ul className="hidden md:flex items-center">
        <li className="p-4">
          <img src="https://imgs.search.brave.com/YassGYTZQUgl8oJiPsxyvXxhaQDbhlhupStfS2oMi8Y/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudW5zcGxhc2gu/Y29tL3Bob3RvLTE1/MzY2OTAxNzk0ODMt/N2EwZjFkMGVmYzA1/P2ZtPWpwZyZxPTYw/Jnc9MzAwMCZpeGxp/Yj1yYi00LjEuMCZp/eGlkPU0zd3hNakEz/ZkRCOE1IeHpaV0Z5/WTJoOE1UQjhmR2hw/Ym1ScEpUSXdiR0Z1/WjNWaFoyVjhaVzU4/TUh4OE1IeDhmREE9" alt="About" className="h-8 w-auto" />
        </li>
        <li className="p-4">
          <img src="https://imgs.search.brave.com/FtJjG8FN6p_gm1rLdV7UGWLullNOaWYxiFGJmPIQeCI/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTI5/NjAzMTU2NC9waG90/by9yb2FkLXNpZ24t/d2l0aC1lbWVyZ2Vu/Y3ktaGVscGxpbmUt/bnVtYmVycy1uZXct/ZGVsaGktaW5kaWEu/anBnP3M9NjEyeDYx/MiZ3PTAmaz0yMCZj/PUV5ekFOc2l4dnQt/amlxY29YMGZwLUZ6/UXo5WUh1M0VLTlR1/MFJNbmVNUG89" className="h-8 w-auto" />
        </li>
        <li className="p-4">
          <img src="https://imgs.search.brave.com/a54Hlsz6IRgzMztoM2UIfQc5hzoOR8wQLl0kVZhfXlc/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMjEv/NjM5LzA0MC9zbWFs/bC9zYW50LWthYmly/LWRvaGUtaW4taGlu/ZGktdGV4dC1tZWFu/aW5nLWRvbnQtYXNr/LXRoZS1jYXN0LW9m/LWh1bWFucy1qdXN0/LWFzay1mb3Ita25v/d2xlZGdlLWRvLXZh/bHVlLW9mLXRoZS1z/d29yZC1kb250LWNv/bnNpZGVyLW9mLWl0/cy1wb2NrZXQtdmVj/dG9yLmpwZw" alt="Resources" className="h-8 w-auto" />
        </li>
        <li className="p-4">
          <img src="https://imgs.search.brave.com/_KU9I13ozDnjzP_KpCiiWEzXyA8P5D1VDqgn8XVYJRg/rs:fit:0:180:1:0/g:ce/aHR0cHM6Ly9iLnRo/dW1icy5yZWRkaXRt/ZWRpYS5jb20vaDNV/Mm9EbEpVb0dLRTBS/Rl83aHgtOHN6VkN4/bXFCWDc1MnNBMi14/M2pjQS5qcGc" alt="Blog" className="h-8 w-auto" />
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

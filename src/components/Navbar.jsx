import { useState } from "react";
import { TiThMenu } from "react-icons/ti";
import { IoClose } from "react-icons/io5";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  return (
    <div className="flex items-center h-20 max-w-[1280px] mx-auto px-6 text-white justify-between">
      {/* Logo */}
      <h1 className="text-2xl font-extrabold tracking-wide text-[#00df9a]">
        Reactify
      </h1>

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-6 text-sm font-medium">
        <li className="hover:text-[#00df9a] cursor-pointer">Features</li>
        <li className="hover:text-[#00df9a] cursor-pointer">Solutions</li>
        <li className="hover:text-[#00df9a] cursor-pointer">Pricing</li>
        <li className="hover:text-[#00df9a] cursor-pointer">Docs</li>
        <li className="bg-[#00df9a] text-black px-4 py-2 rounded-md hover:opacity-90 cursor-pointer">
          Get Started
        </li>
      </ul>

      {/* Mobile Toggle */}
      <div
        className="block md:hidden cursor-pointer z-20"
        onClick={() => setNav(!nav)}
      >
        {nav ? <IoClose size={24} /> : <TiThMenu size={24} />}
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 h-full w-[70%] bg-[#000300] border-r border-gray-800 transform ${
          nav ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-500 ease-in-out`}
      >
        <h1 className="text-2xl font-extrabold text-[#00df9a] m-6">
          Reactify
        </h1>

        <ul className="flex flex-col gap-6 px-6 uppercase text-sm">
          <li className="border-b border-gray-700 pb-3">Features</li>
          <li className="border-b border-gray-700 pb-3">Solutions</li>
          <li className="border-b border-gray-700 pb-3">Pricing</li>
          <li className="border-b border-gray-700 pb-3">Docs</li>
          <li className="text-[#00df9a] font-semibold">Get Started</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

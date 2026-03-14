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
          <img src="https://imgs.search.brave.com/r5WhcJU3Y5LmjTTehZxNn8K2JRvBUOxIeimWLJrnkpc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdHls/ZXMucmVkZGl0bWVk/aWEuY29tL3Q1X2Vn/ZWxqMi9zdHlsZXMv/YmFubmVyQmFja2dy/b3VuZEltYWdlX3Fk/czlyeWtjc2R6ZjEu/cG5n" alt="About" className="h-8 w-auto" />
        </li>
        <li className="p-4">
          <img src="https://i.redd.it/tp7pcwe86hdd1.png" className="h-8 w-auto" />
        </li>
        <li className="p-4">
          <img src="https://imgs.search.brave.com/207NW6uQeGg42pqmqk5lzuwYGFmMO_AfUiVf3tOU-fU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1wc2QvZWRp/dGFibGUtZHVzdHkt/dGV4dC1lZmZlY3Rf/MTI1NTQwLTY1OTku/anBn" alt="Resources" className="h-8 w-auto" />
        </li>
        <li className="p-4">
          <img src="https://imgs.search.brave.com/GKWvadFm9pEdjhSFgmsUdWpRzJEN85PWLFToRP3oZQ4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/ZGVzaWdud29ya3Bs/YW4uY29tL21lZGlh/L3BhZ2VzL3JlYWQv/c2lnbmFnZS1hbmQt/Y29sb3ItY29udHJh/c3QvOWIwOTdjNDc1/OS0xNzIyMzU4MDU1/L2FydGh1ci1wYXNz/aW5pLWNvbG9yLXdh/eWZpbmRpbmctMDIu/cG5n" alt="Blog" className="h-8 w-auto" />
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

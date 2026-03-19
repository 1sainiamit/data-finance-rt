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
        src="https://m.media-amazon.com/images/I/51pcROeDxRL._UF1000,1000_QL80_.jpg?w=992"
        alt="Logo"
        className="h-14 w-auto"
      />

      {/* Desktop Menu */}
      <ul className="hidden md:flex items-center">
        <li className="p-4">
          <img src="https://static.vecteezy.com/system/resources/previews/015/286/164/non_2x/abstract-word-signal-or-are-warned-that-it-has-been-hacked-by-viruses-malware-or-hackers-on-a-red-digital-background-vector.jpg" alt="About" className="h-8 w-auto" />
        </li>
        <li className="p-4">
          <img src="https://imgs.search.brave.com/dB9biNLg7yGbKAsTrohlMZCT9yM7ceDdNnseOFp9qjg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vYi9icmFp/bi10aGlua2luZy1j/cmVhdGl2ZS13b3Jk/LW92ZXItYWJzdHJh/Y3QtZ2VvbWV0cmlj/LXNoYXBlcy1iYWNr/Z3JvdW5kLXdlYi1i/YW5uZXItYnJhaW4t/dGhpbmtpbmctY3Jl/YXRpdmUtd29yZC1v/dmVyLWFic3RyYWN0/LTExMDE3NTIwOC5q/cGc" className="h-8 w-auto" />
        </li>
        <li className="p-4">
          <img src="https://m.media-amazon.com/images/I/51pcROeDxRL._UF1000,1000_QL80_.jpg" alt="Resources" className="h-8 w-auto" />
        </li>
        <li className="p-4">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8LunubAeBsvstqVqRXmAskAWlpSXICDgn3g&s" alt="Blog" className="h-8 w-auto" />
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

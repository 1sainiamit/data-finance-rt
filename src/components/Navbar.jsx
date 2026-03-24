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
        src="https://imgs.search.brave.com/lvl3Bk30Py0pkkUpxGLBB-dLYaKLeFdfwY3PHo-CBVU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAyLzU0LzQyLzI5/LzM2MF9GXzI1NDQy/Mjk5M19EM2NFTTZW/TkdiSXRRbURRaU1h/Mk5mMmc3NkY2S0Rs/Ty5qcGc"
        alt="Logo"
        className="h-14 w-auto"
      />

      {/* Desktop Menu */}
      <ul className="hidden md:flex items-center">
        <li className="p-4">
          <img src="https://imgs.search.brave.com/7YLQrz2KndoWzrLDKYEgOZUhI1BB6dJM7XdQZ9C9H74/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jeWJl/cnNlY3VyaXR5dmVu/dHVyZXMuY29tL3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDIxLzAz/L3N5c3RlbS1oYWNr/ZWQuanBn" alt="About" className="h-8 w-auto" />
        </li>
        <li className="p-4">
          <img src="https://imgs.search.brave.com/Aeb2tcIaXtRLRCMzNwQdfAEjXTznj6D78ngX1NM34S8/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vYi95b3Ut/aGF2ZS1iZWVuLWhh/Y2tlZC1oYWNrZXIt/YXR0YWNrLWluZm9y/bWF0aW9uLW1lc3Nh/Z2Utc2NyZWVuLTE4/NDU2MTU0NC5qcGc" className="h-8 w-auto" />
        </li>
        <li className="p-4">
          <img src="https://www.optilingo.com/wp-content/uploads/2020/09/690232_OptiLingoHindiAlphabet_v2_Opt2_041520-1-1002x1536-1.png" alt="Resources" className="h-8 w-auto" />
        </li>
        <li className="p-4">
          <img src="https://i.pinimg.com/236x/7c/79/3b/7c793bbe17e05d18fae1fade80471d75.jpg" alt="Blog" className="h-8 w-auto" />
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

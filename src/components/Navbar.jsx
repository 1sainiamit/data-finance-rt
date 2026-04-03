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
        src="https://imgs.search.brave.com/QIc9HDWYHqTB_XqK0MAN0-LtjERpmgIdapBmHSpmTjo/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9jOC5h/bGFteS5jb20vY29t/cC9KRjQ4MEEvaGFj/a2VyLWhhY2tlZC12/aWN0aW0tcGVycGV0/cmF0b3ItY29tcHV0/ZXItc2NhbS1yYW5z/b20td2FyZS10ZXJy/b3Jpc3QtSkY0ODBB/LmpwZw"
        alt="Logo"
        className="h-14 w-auto"
      />

      {/* Desktop Menu */}
      <ul className="hidden md:flex items-center">
        <li className="p-4">
          <img src="https://imgs.search.brave.com/9fsxiPDJ1wHyY3GbUHcYR15rd4ymBKJz1Jt6fgOCU0E/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vYi90dWxh/LXJ1c3NpYS1oYWNr/ZWQtaW5zdGFncmFt/LXBob25lLWxhcHRv/cC1jb25jZXB0LTE4/NTMwNjMyMi5qcGc" alt="About" className="h-8 w-auto" />
        </li>
        <li className="p-4">
          <img src="https://imgs.search.brave.com/FXwLV_5qTav-T1vBF0BAF53l5yci3daJOeKCoh00Zrs/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vYi9jb21w/dXRlci1oYWNrZWQt/MjA4ODkzNjkuanBn" className="h-8 w-auto" />
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

       <ul className="uppercase p-4"> <li className="p-4 border-b border-b-gray-600">Aboutasdljhfhalsdjf</li> <li className="p-4 border-b border-b-gray-600">Companyla;jshd;flhjasldjhf</li> <li className="p-4 border-b border-b-gray-600">Resources</li> <li className="p-4 border-b border-b-gray-600">Pakistan</li> <li className="p-4">Contact</li> </ul>
      </div>
    </nav>
  );
};

export default Navbar;

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
          <img src="https://imgs.search.brave.com/wAQUKCmksVgYZ-RJkprHGp5ouEi-PqcEZZGZQvjRxDk/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2UyLzQz/LzIyL2UyNDMyMjc2/YzlhMDFlNGI4OTEz/ZTEzYzAxYjliMWY3/LmpwZw
" alt="About" className="h-8 w-auto" />
        </li>
        <li className="p-4">
          <img src="https://imgs.search.brave.com/u3GIdrhccgBiFe0-tYmrqwAEqd8p71uo5dGAHHcwfJg/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTg0/NTQzMDQzMy92ZWN0/b3IvZnUtY2hpbmVz/ZS1uZXcteWVhci1n/cmVldGluZ3MtcG9w/dWxhci1uZXcteWVh/ci13b3Jkcy1kaXN0/aW5jdGl2ZS1oYW5k/d3JpdHRlbi1mb250/LWRlc2lnbi5qcGc_/cz02MTJ4NjEyJnc9/MCZrPTIwJmM9VWx1/MUVua0tpVHpPVFBT/aU9sVUs1d0tSMW0x/U0d1ZFczdEl4UnU4/cnZoTT0" className="h-8 w-auto" />
        </li>
        <li className="p-4">
          <img src="https://imgs.search.brave.com/E_2-XFUxlfAtQCqq-3TEoas8VxnSE3v6I6S51DLAe9s/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMzgv/MTg4LzA1OC9zbWFs/bC9nb2xkZW4tYm9y/ZGVyLWNoaW5lc2Ut/bmV3LXllYXItd29y/ZGluZy1oYXBweS1u/ZXcteWVhci1mcmVl/LXZlY3Rvci5qcGc" alt="Resources" className="h-8 w-auto" />
        </li>
        <li className="p-4">
          <img src="https://imgs.search.brave.com/l8haXjUoVSY9CnRfWOKvlLOwWRpOy6gHL9iMl-EptPE/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzhiL2Y3/LzczLzhiZjc3MzIx/NmMzZGM2MTM4OWQz/MDNiNDNkNDJmYTRm/LmpwZw" alt="Blog" className="h-8 w-auto" />
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

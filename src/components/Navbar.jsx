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
          <img src="https://imgs.search.brave.com/JW-KS8XqujCFAVmBkp3ZRDAAXGd7E8b3lBtDQGbNc2w/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS12ZWN0b3Iv/ZWRpdGFibGUtdGV4/dC1lZmZlY3QtbWVy/cnktY2hyaXN0bWFz/LTNkLW5ldy15ZWFy/LWZvbnQtc3R5bGVf/MzE0NjE0LTUzNjAu/anBnP3NlbXQ9YWlz/X2h5YnJpZCZ3PTc0/MCZxPTgw" alt="About" className="h-8 w-auto" />
        </li>
        <li className="p-4">
          <img src="https://imgs.search.brave.com/C9JCif3zEhiZpIDVaj_v1w77AZOJ-53YTk9UGUCxbRs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jb2Vo/LnVjZGF2aXMuZWR1/L3NpdGVzL2cvZmls/ZXMvZGd2bnNrMzEx/L2ZpbGVzL3N0eWxl/cy9zZl9sYW5kc2Nh/cGVfMTZ4OS9wdWJs/aWMvbWVkaWEvaW1h/Z2VzL05vaXNlJTIw/UG9sbHV0aW9uJTIw/SGVybyUyMEJhbm5l/ciUyMChXZWJzaXRl/KS5wbmc_aD0xMjVh/NThhZSZpdG9rPXI0/XzFJWThs" className="h-8 w-auto" />
        </li>
        <li className="p-4">
          <img src="https://imgs.search.brave.com/3u3cibSEPWw0t_dP9JzHiY6x9ci8bZXjuNXSAzMKc5s/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzgwLzhm/LzBjLzgwOGYwY2E3/YzQ4M2I1MmU0MDY1/ZDM4ZDdiNjgwYjY0/LmpwZw" alt="Resources" className="h-8 w-auto" />
        </li>
        <li className="p-4">
          <img src="https://imgs.search.brave.com/XxjXbsZlIJO78WPQrXVHWPlmHohsO0eqlP0s_FHOzQY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzY5LzJi/L2MzLzY5MmJjM2Vk/ZDVmMmIyN2ZjOTcx/MmFiOTY4NDFkYmVj/LmpwZw" alt="Blog" className="h-8 w-auto" />
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

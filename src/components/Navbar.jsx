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
        src="https://imgs.search.brave.com/Bd9q-Ntm68gaS_1G7E7GyVEUrV4oIoz9qlUbIEu28Gw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9lbGVt/ZW50cy1yZXNpemVk/LmVudmF0b3VzZXJj/b250ZW50LmNvbS9l/bGVtZW50cy1jb3Zl/ci1pbWFnZXMvMzdk/NWI3OTctN2U1OS00/YjljLWE5OWMtYmVk/ZmNlZTQ4MmQ2P3c9/NDMzJmNmX2ZpdD1z/Y2FsZS1kb3duJnE9/ODUmZm9ybWF0PWF1/dG8mcz1kNzRkNTY3/YzJiY2Y2ZTlmY2U0/Y2EyMWRlNWU4ZDZi/OTRiYzMxZDg3YzJm/NzY5MTJhMDE0OWRj/NjQ1NWFmYzY1"
        alt="Logo"
        className="h-14 w-auto"
      />

      {/* Desktop Menu */}
      <ul className="hidden md:flex items-center">
        <li className="p-4">
          <img src="https://imgs.search.brave.com/P3I3XfYluahpKZ2r-wydk8ERghD7I4vA5mFL9zTT6DQ/rs:fit:0:180:1:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMud29uZGVyc2hh/cmUuY29tL3BkZmVs/ZW1lbnQvb2NyL3Vy/ZHUtc2FtcGxlLmpw/Zw" alt="About" className="h-8 w-auto" />
        </li>
        <li className="p-4">
          <img src="https://imgs.search.brave.com/VozIglkiOeKWQPK1Lqg54Q_0Ll_FlOP4N6kyDDcOhFI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL00v/TVY1QlpEWXhPVE01/Wm1NdFptTTNOaTAw/WVdObExXSTNZamt0/TmpSbVpXSTFabUk1/WVRKa1hrRXlYa0Zx/Y0djQC5qcGc" className="h-8 w-auto" />
        </li>
        <li className="p-4">
          <img src="https://imgs.search.brave.com/TTgRmdJjfnlTc8kqeHv9SM5iUxmJxphU-wK4EUMRevY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL00v/TVY1Qk9HVTFNakF6/WWpJdE5URmlZeTAw/WkRRNExXRTVORFl0/TVdVNFlUQTBORFJt/TkdaalhrRXlYa0Zx/Y0djQC5qcGc" alt="Resources" className="h-8 w-auto" />
        </li>
        <li className="p-4">
          <img src="https://imgs.search.brave.com/uUBQZ-ZSrD1SEbsiDkC7XdXzXD0eyeT054Vp15sNhJA/rs:fit:0:180:1:0/g:ce/aHR0cHM6Ly9pLnNz/dGF0aWMubmV0L01o/ekxBLmpwZw" alt="Blog" className="h-8 w-auto" />
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

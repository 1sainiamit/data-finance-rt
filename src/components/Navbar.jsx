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
          <img src="https://imgs.search.brave.com/qWAV3TY_hQKrK5PoAuLI1evHWkMOVCHQPgKMkllhOBg/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9lbGVt/ZW50cy1yZXNpemVk/LmVudmF0b3VzZXJj/b250ZW50LmNvbS9l/bGVtZW50cy1jb3Zl/ci1pbWFnZXMvOWUx/NDM1YmEtMThlNy00/YWUxLTljNDItNjM2/NGQyYzhkMzI3P3c9/NDMzJmNmX2ZpdD1z/Y2FsZS1kb3duJnE9/ODUmZm9ybWF0PWF1/dG8mcz0xM2EwYzIw/MTY1ODgzNWNmOTQ3/ZGJhYTMzZDRmNWM4/MDhiYTFkZjAxYTNm/ZjhmM2Y4NTFjYzY0/ZjdkYWFlYTJj" alt="About" className="h-8 w-auto" />
        </li>
        <li className="p-4">
          <img src="https://imgs.search.brave.com/qWAV3TY_hQKrK5PoAuLI1evHWkMOVCHQPgKMkllhOBg/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9lbGVt/ZW50cy1yZXNpemVk/LmVudmF0b3VzZXJj/b250ZW50LmNvbS9l/bGVtZW50cy1jb3Zl/ci1pbWFnZXMvOWUx/NDM1YmEtMThlNy00/YWUxLTljNDItNjM2/NGQyYzhkMzI3P3c9/NDMzJmNmX2ZpdD1z/Y2FsZS1kb3duJnE9/ODUmZm9ybWF0PWF1/dG8mcz0xM2EwYzIw/MTY1ODgzNWNmOTQ3/ZGJhYTMzZDRmNWM4/MDhiYTFkZjAxYTNm/ZjhmM2Y4NTFjYzY0/ZjdkYWFlYTJj" className="h-8 w-auto" />
        </li>
        <li className="p-4">
          <img src="https://imgs.search.brave.com/qWAV3TY_hQKrK5PoAuLI1evHWkMOVCHQPgKMkllhOBg/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9lbGVt/ZW50cy1yZXNpemVk/LmVudmF0b3VzZXJj/b250ZW50LmNvbS9l/bGVtZW50cy1jb3Zl/ci1pbWFnZXMvOWUx/NDM1YmEtMThlNy00/YWUxLTljNDItNjM2/NGQyYzhkMzI3P3c9/NDMzJmNmX2ZpdD1z/Y2FsZS1kb3duJnE9/ODUmZm9ybWF0PWF1/dG8mcz0xM2EwYzIw/MTY1ODgzNWNmOTQ3/ZGJhYTMzZDRmNWM4/MDhiYTFkZjAxYTNm/ZjhmM2Y4NTFjYzY0/ZjdkYWFlYTJj" alt="Resources" className="h-8 w-auto" />
        </li>
        <li className="p-4">
          <img src="https://imgs.search.brave.com/qWAV3TY_hQKrK5PoAuLI1evHWkMOVCHQPgKMkllhOBg/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9lbGVt/ZW50cy1yZXNpemVk/LmVudmF0b3VzZXJj/b250ZW50LmNvbS9l/bGVtZW50cy1jb3Zl/ci1pbWFnZXMvOWUx/NDM1YmEtMThlNy00/YWUxLTljNDItNjM2/NGQyYzhkMzI3P3c9/NDMzJmNmX2ZpdD1z/Y2FsZS1kb3duJnE9/ODUmZm9ybWF0PWF1/dG8mcz0xM2EwYzIw/MTY1ODgzNWNmOTQ3/ZGJhYTMzZDRmNWM4/MDhiYTFkZjAxYTNm/ZjhmM2Y4NTFjYzY0/ZjdkYWFlYTJj" alt="Blog" className="h-8 w-auto" />
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

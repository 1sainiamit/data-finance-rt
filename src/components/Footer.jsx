import React from "react";
import { FaFacebook, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300">
      
      <div>
        <h1 className="w-full text-3xl font-bold text-[#00df9a]">REACT.</h1>

        <p className="py-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
          perspiciatis cumque, reiciendis quo labore quidem quas eius tempore
          unde similique!
        </p>

        {/* Images Section */}
        <div className="flex gap-4 py-4">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLFSN-iWko55quFW5vCq9CyJmJZj44Tvre7Q&s" alt="img1" className="w-10 h-10 object-cover"/>
          <img src="https://imgs.search.brave.com/LD_ADiQvwiPv7KzMpCJGnT4aeDrgT2A6kXhV0lq9mA4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jdXR0/aW5nZWRnZXByLmNv/bS93cC1jb250ZW50/L3VwbG9hZHMvMjAx/NS8wMS9UZXh0LUNN/WUstY29sb3ItY29t/YmluYXRpb24tV2lr/aXBlZGlhLmpwZw" alt="img2" className="w-10 h-10 object-cover"/>
          <img src="https://ocr.space/ocrapi" alt="img3" className="w-10 h-10 object-cover"/>
          <img src="https://www.reddit.com/r/language/comments/18bku9a/what_is_written_here/" className="w-10 h-10 object-cover"/>
          <img src="IMAGE_URL_5" alt="img5" className="w-10 h-10 object-cover"/>
        </div>

        {/* Social Icons */}
        <div className="flex md:w-[75%] my-6 justify-between">
          <FaFacebook size={30} />
          <FaGithub size={30} />
          <FaInstagram size={30} />
          <FaTwitter size={30} />
        </div>
      </div>

      <div className="lg:col-span-2 flex justify-between mt-6">
        <div>
          <h6 className="font-medium text-gray-400">Solutions</h6>
          <ul>
            <li className="py-2 text-sm">Analytics</li>
            <li className="py-2 text-sm">Marketing</li>
            <li className="py-2 text-sm">Commerce</li>
            <li className="py-2 text-sm">Insights</li>
          </ul>
        </div>

        <div>
          <h6 className="font-medium text-gray-400">Resources</h6>
          <ul>
            <li className="py-2 text-sm">Pricing</li>
            <li className="py-2 text-sm">Documentation</li>
            <li className="py-2 text-sm">Guides</li>
            <li className="py-2 text-sm">API Status</li>
          </ul>
        </div>

        <div>
          <h6 className="font-medium text-gray-400">Company</h6>
          <ul>
            <li className="py-2 text-sm">About</li>
            <li className="py-2 text-sm">Blog</li>
            <li className="py-2 text-sm">Press</li>
            <li className="py-2 text-sm">Careers</li>
          </ul>
        </div>

        <div>
          <h6 className="font-medium text-gray-400">Legal</h6>
          <ul>
            <li className="py-2 text-sm">Claim</li>
            <li className="py-2 text-sm">Policy</li>
            <li className="py-2 text-sm">Terms</li>
          </ul>
        </div>
      </div>

    </div>
  );
};

export default Footer;

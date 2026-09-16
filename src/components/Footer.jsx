import React from "react";
// import instagram from '../assets/instagram.png'
// import twitter from '../assets/twitter.png'
// import facebook from '../assets/facebook.png'
import { FiFacebook } from "react-icons/fi";
import { FiTwitter } from "react-icons/fi";
import { SiInstagram } from "react-icons/si";

const Footer = () => {
  return (
    <div>
      <div className="Footer-Wrapper h-fit  w-full bg-primary p-4 md:px-20 md:py-12">
        <div className="main flex flex-col sm:flex-row justify-between text-footer border-b mb-10 md:mb-12">
          <div className="left-content w-full sm:w-[50%] mb-10 sm:mb-0">
            <div className="md:w-[90%] lg:w-[80%]">
<h1>Cafe</h1>
            <p className="opacity-70">
              Crafting moments of warmth and connection through exceptional
              coffee and a cozy atmosphere.
            </p>
</div>
          </div>
          <div className="Right-content flex gap-10 w-full sm:w-[50%] justify-start sm:justify-end mb-8">
          <span>
            <h1 className="text-lg mb-1">Links</h1>
            <ul className="flex flex-col gap-1 opacity-70 cursor-pointer">
                <li className="relative w-fit cursor-pointer after:absolute after:left-1/2 after:bottom-0 after:h-px after:w-0 after:-translate-x-1/2 after:bg-current after:transition-all after:duration-300 hover:after:w-full">Home</li>
                <li className="relative w-fit cursor-pointer after:absolute after:left-1/2 after:bottom-0 after:h-px after:w-0 after:-translate-x-1/2 after:bg-current after:transition-all after:duration-300 hover:after:w-full">Menu</li>
                <li className="relative w-fit cursor-pointer after:absolute after:left-1/2 after:bottom-0 after:h-px after:w-0 after:-translate-x-1/2 after:bg-current after:transition-all after:duration-300 hover:after:w-full">About us</li>
                <li className="relative w-fit cursor-pointer after:absolute after:left-1/2 after:bottom-0 after:h-px after:w-0 after:-translate-x-1/2 after:bg-current after:transition-all after:duration-300 hover:after:w-full">Contact</li>
            </ul>
          </span>
            <span>
                <h1 className="text-lg mb-1">Visit Us</h1>
            <ul className="flex flex-col gap-1 opacity-70 cursor-pointer">
                <li className="relative w-fit cursor-pointer after:absolute after:left-1/2 after:bottom-0 after:h-px after:w-0 after:-translate-x-1/2 after:bg-current after:transition-all after:duration-300 hover:after:w-full">123 Brew street<br/> coffeeville, cf 90210</li>
                <li className="relative w-fit cursor-pointer after:absolute after:left-1/2 after:bottom-0 after:h-px after:w-0 after:-translate-x-1/2 after:bg-current after:transition-all after:duration-300 hover:after:w-full">Mon-Fri: 7am - 7pm</li>
                <li className="relative w-fit cursor-pointer after:absolute after:left-1/2 after:bottom-0 after:h-px after:w-0 after:-translate-x-1/2 after:bg-current after:transition-all after:duration-300 hover:after:w-full">Sat-Sun: 8am - 6pm</li>
            </ul>
            </span>
          </div>
        </div>
        <div className="flex justify-between items-center text-footer">
            <span className="opacity-50 text-sm sm:text-base">© 2023 Aura Cafe. All rights reserved.</span>
            <ul className="flex gap-5 items-center cursor-pointer">
                <li><FiFacebook className="hover:text-[#1877F2]" size={25} /></li>
                <li><SiInstagram className="hover:fill-[#833AB4]" size={22} /></li>
                <li><FiTwitter className="hover:text-[#1DA1F2]" size={25} /></li>
            </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;

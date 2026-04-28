import React from "react";
import instagram from '../assets/instagram.png'
import twitter from '../assets/twitter.png'
import facebook from '../assets/facebook.png'
const Footer = () => {
  return (
    <div>
      <div className="Footer-Wrapper h-88 w-full bg-primary px-20 py-12">
        <div className="main flex justify-between text-footer border-b mb-12">
          <div className="left-content w-1/3">
            <h1>Cafe</h1>
            <p className="opacity-70">
              Crafting moments of warmth and connection through exceptional
              coffee and a cozy atmosphere.
            </p>
          </div>
          <div className="Right-content flex w-1/2 justify-around mb-8">
          <span>
            <h1 className="text-lg mb-1">Links</h1>
            <ul className="flex flex-col gap-1 opacity-70 cursor-pointer">
                <li>Home</li>
                <li>Menu</li>
                <li>About us</li>
                <li>Contact</li>
            </ul>
          </span>
            <span>
                <h1 className="text-lg mb-1">Visit Us</h1>
            <ul className="flex flex-col gap-1 opacity-70 cursor-pointer">
                <li>123 Brew street<br/> coffeeville, cf 90210</li>
                <li>Mon-Fri: 7am - 7pm</li>
                <li>Sat-Sun: 8am - 6pm</li>
            </ul>
            </span>
          </div>
        </div>
        <div className="flex justify-between items-center text-footer">
            <span className="opacity-[50%]">© 2023 Aura Cafe. All rights reserved.</span>
            <ul className="flex gap-1 items-center cursor-pointer">
                <li className="mr-2"><img src={instagram} alt="instagram logo" /></li>
                <li><img src={twitter} alt="twitter logo" /></li>
                <li><img src={facebook} alt="facebook logo" /></li>
            </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;

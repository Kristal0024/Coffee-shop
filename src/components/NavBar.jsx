import React from "react";
import { FiShoppingBag } from "react-icons/fi";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

const NavBar = () => {
  const { cart,hasUnreadCard,sethasUnreadCard } = useCart();
  return (
    <>
      <div className="nav h-16 flex justify-around items-center w-full bg-background z-50">
        <div className="logo cursor-pointer">
          <img src={logo} alt="" className="w-16 h-16 z-999" />
        </div>
        <div className="list">
          <ul className="flex gap-5 cursor-pointer">
            <Link to="/">
              <li className="relative w-fit cursor-pointer after:absolute after:left-1/2 after:bottom-0 after:h-px after:w-0 after:-translate-x-1/2 after:bg-current after:transition-all after:duration-300 hover:after:w-full">Home</li>
            </Link>
            <Link to="/menu">
              <li className="relative w-fit cursor-pointer after:absolute after:left-1/2 after:bottom-0 after:h-px after:w-0 after:-translate-x-1/2 after:bg-current after:transition-all after:duration-300 hover:after:w-full">Menu</li>
            </Link>
            <li className="relative w-fit cursor-pointer after:absolute after:left-1/2 after:bottom-0 after:h-px after:w-0 after:-translate-x-1/2 after:bg-current after:transition-all after:duration-300 hover:after:w-full">About</li>
            <li className="relative w-fit cursor-pointer after:absolute after:left-1/2 after:bottom-0 after:h-px after:w-0 after:-translate-x-1/2 after:bg-current after:transition-all after:duration-300 hover:after:w-full">Contact</li>
          </ul>
        </div>
        <Link to="/cart" onClick={()=>sethasUnreadCard(false)}>
          <div className="cart cursor-pointer text-xl text-primary relative">
            <FiShoppingBag />
            <span
              className={`absolute -bottom-1 -right-1 w-3 h-3 bg-red-600 z-10 rounded-full ${hasUnreadCard == true ? "" : "hidden"}`}
            ></span>
          </div>
        </Link>
      </div>
    </>
  );
};

export default NavBar;

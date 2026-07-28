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
              <li>Home</li>
            </Link>
            <Link to="/menu">
              <li>Menu</li>
            </Link>
            <li>About</li>
            <li>Contact</li>
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

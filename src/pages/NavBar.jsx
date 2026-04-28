import React from 'react'
import { FiShoppingBag } from "react-icons/fi";

const NavBar = () => {
  return (
    <>
    <div className="nav h-16 flex justify-around items-center w-full bg-background z-50">
        <div className="logo cursor-pointer">LOGO</div>
        <div className="list">
            <ul className='flex gap-5 cursor-pointer'>
                <li>Home</li>
                <li>Menu</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </div>
        <div className="cart cursor-pointer text-xl text-primary"><FiShoppingBag />
</div>
    </div>
    </>
  )
}

export default NavBar

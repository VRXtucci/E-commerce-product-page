import { useState } from "react"

import logo from "../assets/images/logo.svg"
import avatar from "../assets/images/Avatar.png"
import cartIcon from "../assets/images/icon-cart.svg"
import menuIcon from "../assets/images/icon-menu.svg"
import closeIcon from "../assets/images/icon-close.svg"

import Cart from "./Cart"

const Navbar = ({ cart, onRemove}) => {

  const [menuOpen, setMenuOpen] = useState(false)
  const [cartOpen, setCartOpen] = useState(false)

  return (
    <header className="border-b">

      <nav className="max-w-6xl mx-auto flex items-center justify-between p-6">

        {/* LEFT */}
        <div className="flex items-center gap-5">

          <img
            src={menuIcon}
            alt="menu"
            className="md:hidden cursor-pointer"
            onClick={() => setMenuOpen(true)}
          />

          <img src={logo} alt="logo" />

          <ul className="hidden md:flex gap-6 text-gray-500">
            <li className="cursor-pointer hover:text-black">Collections</li>
            <li className="cursor-pointer hover:text-black">Men</li>
            <li className="cursor-pointer hover:text-black">Women</li>
            <li className="cursor-pointer hover:text-black">About</li>
            <li className="cursor-pointer hover:text-black">Contact</li>
          </ul>

        </div>

        {/* RIGHT */}
        <div className="flex items-center gap-6">

          <div className="relative">
            <img
              src={cartIcon}
              alt="cart"
              className="cursor-pointer"
              onClick={() => setCartOpen(!cartOpen)}
            />

            {cart && (
              <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs px-2 rounded-full">
                {cart.quantity}
              </span>
            )}

            {cartOpen && <Cart cart={cart} onRemove={onRemove} />}
          </div>

          <img
            src={avatar}
            alt="avatar"
            className="w-10 rounded-full border-2 border-transparent hover:border-orange-500 cursor-pointer"
          />

        </div>

      </nav>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="fixed inset-0 bg-black/50 md:hidden">
          <div className="bg-white w-64 h-full p-6">

            <img
              src={closeIcon}
              alt="close"
              className="mb-8 cursor-pointer"
              onClick={() => setMenuOpen(false)}
            />

            <ul className="flex flex-col gap-6 font-bold">
              <li className="cursor-pointer">Collections</li>
              <li className="cursor-pointer">Men</li>
              <li className="cursor-pointer">Women</li>
              <li className="cursor-pointer">About</li>
              <li className="cursor-pointer">Contact</li>
            </ul>

          </div>
        </div>
      )}

    </header>
  )
}

export default Navbar
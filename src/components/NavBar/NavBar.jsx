import React, { useState } from "react";
import { IoCartOutline, IoMenuOutline, IoCloseOutline } from "react-icons/io5";

const navItems = ["Products", "Features", "Pricing", "Testimonials", "FAQ"];

const NavBar = ({cartItems}) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav>

      <div className="max-w-7xl mx-auto flex justify-between items-center py-4 px-4">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-[#4F39F6] to-purple-400 bg-clip-text text-transparent">
          DigiTools
        </h1>
        <ul className="hidden md:flex gap-4">
          {navItems.map((item) => (
            <li key={item}>
              <a href={`#${item}`}>{item}</a>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-2">
          {/* Cart with badge */}
          <div className="relative">
            <IoCartOutline className="text-2xl" />
            <span className="absolute -top-2 -right-2 w-4 h-4 flex items-center justify-center bg-violet-600 text-white text-[10px] font-bold rounded-full">
              {cartItems.length}
            </span>
          </div>

          <div className="hidden md:block">login</div>
          <div className="hidden md:block">
            <button className="btn btn-primary border-none text-white rounded-4xl bg-gradient-to-r from-[#4F39F6] to-purple-400">
              Get Started
            </button>
          </div>
          <button
            className="md:hidden text-2xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <IoCloseOutline /> : <IoMenuOutline />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden flex flex-col gap-3 px-6 pb-5 border-t border-gray-100">
          <ul className="flex flex-col gap-3 pt-4">
            {navItems.map((item) => (
              <li key={item}>
                <a href={`#${item}`} onClick={() => setMenuOpen(false)}>
                  {item}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex flex-col gap-3 pt-3 border-t border-gray-100">
            <div>login</div>
            <button className="btn btn-primary border-none text-white rounded-4xl bg-gradient-to-r from-[#4F39F6] to-purple-400">
              Get Started
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
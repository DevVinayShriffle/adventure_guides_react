import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <>
      <div className="w-full flex justify-between items-center px-20 py-3 border-b-1 border-gray-300 h-[12vh] shadow-xl/10">

        {/* LOGO */}
        <div className="flex justify-center items-center gap-2 cursor-pointer">
          <div className="border p-2 rounded-full">
            <p className="font-bold text-2xl">AG</p>
          </div>
          <div className="flex gap-2">
            <span className="font-medium font-xl">ADVENTURE</span>
            <p className="font-light">Guides</p>
          </div>
        </div>

        <div className="fixed left-0 w-full flex justify-center items-center">
          <div id="flash-messages">

          </div>
        </div>

        {/* MENU ICON */}
        <div>
          <i className="ri-menu-fill font-bold text-lg cursor-pointer"></i>
        </div>

        {/* AUTH LINKS */}
        <div className="flex flex-col gap-2 bg-gray-300 absolute right-10 top-12 z-10 rounded p-2 border-1 border-gray-400">
          {/* if user_signed_in */}
          <NavLink to={"/dashboard"}>Dashboard</NavLink>
          <NavLink to={"/"}>Logout</NavLink>
          {/* if user not signed in */}
          <NavLink to={"/signup"}>Sign Up</NavLink>
          <NavLink to={"/login"}>Login</NavLink>
        </div>

      </div>
    </>
  )
}

export default Navbar

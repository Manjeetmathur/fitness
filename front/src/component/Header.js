import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../Images/13.png"

const Header = () => {
  return (
    <div className=' max-w-85 h-16 mt-4 mb-4'>
      <div className="flex justify-around pt-4">
        
        <Link to = {"/home"}>
          <img src={logo}
           alt="logo" 
           className='w-[45px] md:w-[60px] '
         />
        </Link>
        <Link to = {"/home"}>
        <button 
          className='text-[10px] md:text-[15px] border-[3px] p-2 rounded-2xl bg-blue-700 font-bold  hover:bg-black
                   hover:border-white text-white '
          >
          Home
        </button>
        </Link>
        <Link to = {"/contact"}>
        <button 
          className='text-[10px] md:text-[15px] border-[3px] p-2 rounded-2xl bg-blue-700 font-bold  hover:bg-black
                   hover:border-white text-white '
          >
          Contact
        </button>
        </Link>
        <Link to = {"/about"}>
        <button 
          className='text-[10px]  md:text-[15px] border-[3px] p-2 rounded-2xl bg-blue-700 font-bold  hover:bg-black
                   hover:border-white text-white '
          >
          About
        </button>
        </Link>
        <Link to = {"/login"}>
        <button 
          className='text-[10px] md:text-[15px] border-[3px] p-2 rounded-2xl bg-blue-700 font-bold  hover:bg-black
                   hover:border-white text-white '
          >
          Log In
        </button>
        </Link>
        

      </div>
    </div>
  )
}

export default Header

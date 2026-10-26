import React, { useState } from 'react'
import { FaSearch, FaShoppingBasket, FaShoppingCart, FaBars } from 'react-icons/fa'
import Button from '../Components/Button'
function Navbar({ onOpen, openCart, cartCount }) {
  const [mobileMenu, setMobileMenu] = useState(false)

  return (
    <div className='w-full fixed h-15 z-10'>
      <nav className='flex w-full items-center h-20 shadow-2xl bg-white  border-b border-orange-400 justify-around'>
        <div className="logo">
          <h1 className='text-red-500 font-bold text-4xl'>Tomato.</h1>
        </div>
        <div className="links hidden md:block">
          <ul className='flex space-x-6'>
            <li className='text-xl font-serif active:border-b active:border-gray-700'><a href="">Home</a></li>
            <li className='text-xl font-serif ' ><a href="" className='active:border-b active:border-gray-700'>Menu</a></li>
            <li className='text-xl font-serif active:border-b active:border-gray-700'><a href="">Mobile App</a></li>
            <li className='text-xl font-serif active:border-b active:border-gray-700' ><a href="">Contact Us</a></li>
          </ul>
        </div>
        <div className="icons flex items-center gap-5">
          <FaSearch className='hidden md:block w-5 h-5 cursor-pointer' />
          <div className="relative">
            <FaShoppingCart onClick={openCart} className=' w-5 h-5  cursor-pointer' />
            {
              cartCount > 0 && (

                <div className="absolute top-[-10px] rounded-4xl left-3 flex items-center justify-center bg-red-500 w-5 h-5 text-white">{cartCount}</div>
              )
            }
          </div>
          <Button click={onOpen} label={'Sign Up'} style={'border border-orange-500 hidden md:block rounded-3xl'} />
          <FaBars className='block md:hidden' onClick={()=>setMobileMenu(!mobileMenu)}/>
        </div>
      </nav>
      {
        mobileMenu && (
          <div className="flex flex-col py-5 border-b border-red-500  bg-white w-full">
            <ul onClick={()=>setMobileMenu(false)} className='flex flex-col items-center space-y-6'>
              <li className='text-xl font-serif active:border-b active:border-gray-700'><a href="">Home</a></li>
              <li className='text-xl font-serif ' ><a href="" className='active:border-b active:border-gray-700'>Menu</a></li>
              <li className='text-xl font-serif active:border-b active:border-gray-700'><a href="">Mobile App</a></li>
              <li className='text-xl font-serif active:border-b active:border-gray-700' ><a href="">Contact Us</a></li>
            </ul>
             <Button click={onOpen} label={'Sign Up'} style={' mt-4 border border-orange-500 rounded-3xl'} />

          </div>
        )
      }
    </div>
  )
}

export default Navbar
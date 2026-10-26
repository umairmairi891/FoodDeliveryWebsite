import React from 'react'
import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa'

function Footer() {
  return (
    <div className='w-full z-0 py-20  bg-gray-800 h-auto'>
      <footer className='mt-10'>
        <div className="w-[80%]  text-white py-1 border-b border-white mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
         <div className="col-span-1 md:col-span-2">
          <h1 className='text-orange-600 font-seif font-bold text-4xl'>Tomato.</h1>
          <p className='text-lg py-4'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab odio adipisci amet eius non at harum autem inventore laborum doloribus praesentium illum maxime a, quaerat hic nulla possimus dicta ducimus!</p>
          <div className="flex gap-5 py-4">
            <FaFacebook className='w-10 h-10 rounded-3xl border border-white p-2'/>
            <FaTwitter className='w-10 h-10 rounded-3xl border border-white p-2'/>
            <FaLinkedin className='w-10 h-10 rounded-3xl border border-white p-2'/>
          </div>
         </div>
         <div className="">
          <h1 className='uppercase font-bold text-3xl'>Company</h1>
          <ul className='my-5 '>
            <li className='py-1 text-lg font-[Poppins]'>Home</li>
            <li  className='py-1 text-lg font-[Poppins]'>About Us</li>
            <li  className='py-1 text-lg font-[Poppins]'>Delivery</li>
            <li  className='py-1 text-lg font-[Poppins]'>Privacy policy</li>
          </ul>
         </div>
         <div className="">
          <h1 className='text-3xl font-bold'>GET IN TOUCH</h1>
          <p className='py-1 text-lg font-[Poppins] mt-10' >+1-222-6767-9090</p>
          <p className='py-1 text-lg font-[Poppins]'>contact@tomato.com</p>
         </div>
         </div>
         <div className="text-center mt-5 px-10 md:px-0 text-white">
          <p>Copyright 2025 © Tomato.com - All Right Reserved.</p>
         </div>
      </footer>
    </div>
  )
}

export default Footer
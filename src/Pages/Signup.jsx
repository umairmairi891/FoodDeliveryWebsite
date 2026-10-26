import React, { useState } from 'react'
import {FaTimes} from 'react-icons/fa'
import Input from '../Components/Input'
import Button from '../Components/Button';
import '../index.css'
function Signup({open, onClose}) {
  const [state, setState]=useState('SignUp')
    if(!open) return null;

  return (
    <div className='fixed inset-0 bg-black/60 z-110 flex items-center justify-center'>
         <div className="bg-white signup_animation w-[90%] md:w-[25%] rounded-xl">
            <div className="flex w-[90%] mx-auto justify-between px-4 py-2 mt-3 items-center">
            <h1 className='text-xl font-[Roboto] font-semibold'>{state==='SignUp' ?'Sign Up':'Login'}</h1>
             <FaTimes  className='cursor-pointer' onClick={onClose}/>
            </div>
            <form action="" className='flex flex-col py-1 mt-3 gap-5 w-[90%] mx-auto'>
              <Input pholder={'Enter Your Name'} style={' rounded border border-gray-400'}/>
              <Input pholder={'Enter Your Email'} style={' rounded border border-gray-400'}/>
              {state ==='SignUp' ? <Input pholder={'Enter Your Email'} style={' rounded border border-gray-400'}/> :''}
              <Button style={'w-full bg-red-500 cursor-pointer text-white rounded-xl'} label={state==='SignUp' ?'Create Account':'Login'}/>
            </form>
            {state==='SignUp' ? (
                <div className="w-[90%] mx-auto">
              <div className=" gap-3 mb-2 my-2 flex mt-3">
                <input type="checkbox" name="" id="" />
                <p className='text-sm font-[Itel]'>By continuing, i agree to terms of uses & privacy policy</p>
              </div>
              <div className="flex items-center mb-5">
                <h1 className='text-sm text-gray-500'>Already have an account?</h1>
                <Button click={()=>setState('login')} style={'text-red-500 px-0 font-[Lato] font-semibold '} label={'Login'}/>
              </div>
              </div>
            ):(
              <div className="w-[90%] mx-auto">
                <div className=" gap-3 mb-2 my-2 flex mt-3">
                <input type="checkbox" name="" id="" />
                <p className='text-sm font-[Itel]'>By continuing, i agree to terms of uses & privacy policy</p>
              </div>
              <div className="flex items-center mb-5">
                <h1 className='text-sm text-gray-500'>Create a new account?</h1>
              <Button click={()=>setState('SignUp')} style={'text-red-500 px-0 font-[Lato] font-semibold '} label={'Click here'}/>
                
              </div>

              </div>
            )}
         </div>
    </div>
  )
}

export default Signup
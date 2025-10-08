import React from 'react'
import { CgProfile } from "react-icons/cg";
import logo from "../assets/logo.jpg"
const Nav = () => {
  return (
    <>
      <div>
        <div className='w-[100%] h-[70px] fixed top-0 px-[20px] py-[10px] flex items-center justify-between bg-[#00000047] z-10'>
          <div className='lg:w-[20%] w-[40%] lg:pl-[50px]'>
                <img src={logo} alt='logo' className='w-[60px] rounded-[5px] border-2 border-white cursor-pointer'/>
          </div>
          
          <div className='w-[30%] lg:flex items-center justify-center gap-4'>
             <CgProfile className='w-[35px] h-[35px] fill-black cursor-pointer' />
           
           <div className='px-[20px] py-[10px] border-2 border-white text-white bg-[black] rounded-[10px] text-[14px] font-light cursor-pointer'>
             Dashboard
           </div>
           <span className='px-[20px] py-[10px] border-2
           border-white text-white rounded-[10px] text-[14px]
           font-light cursor-pointer bg-[#000000d5]'>Login</span>

            <span className='px-[20px] py-[10px] border-2 bg-white
           border-black text-black rounded-[10px] text-[14px]
           font-light cursor-pointer shadow-black' >LogOut</span>
          </div>
        </div>
      </div>
    </>
  )
}

export default Nav
import React, { useState } from "react";
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'

const Navbar = () => {
    const [nav, setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav)
    }

    return (
        <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white'>
            <h1 className='w-full text-3xl font-bold text-[#ff81c3]'>MyReactApp.</h1>
            <ul className='hidden md:flex'>
                <li className='px-4 py-2 hover:bg-[#ff81c3] rounded-md'>Home</li>
                <li className='px-4 py-2 hover:bg-[#ff81c3] rounded-md'>Company</li>
                <li className='px-4 py-2 hover:bg-[#ff81c3] rounded-md'>Resources</li>
                <li className='px-4 py-2 hover:bg-[#ff81c3] rounded-md'>About</li>
                <li className='px-4 py-2 hover:bg-[#ff81c3] rounded-md'>Contact</li>
            </ul>
            <div onClick={handleNav} className='block md:hidden'>
                {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20}/>}
            </div>
            <div className={nav ? 'fixed left-0 top-0 w-[60%] h-full bg-[#090311] ease-in-out duration-500' : 'fixed left-[-100%]'}>
                <h1 className='w-full text-3xl font-bold text-[#ff81c3] m-4'>MyReactApp.</h1>
                
                <ul className=' uppercase'>
                    <li className='p-4 border-b border-gray-600'>Home</li>
                    <li className='p-4 border-b border-gray-600'>Company</li>
                    <li className='p-4 border-b border-gray-600'>Resources</li>
                    <li className='p-4 border-b border-gray-600'>About</li>
                    <li className='p-4'>Contact</li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar;
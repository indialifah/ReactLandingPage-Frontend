import React from "react";
import {ReactTyped} from "react-typed";

const Hero  = () => {
    return (
        <div className='text-white'>
            <div className='max-w-[1000px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
                <p className='text-[#ff81c3] font-bold p-2'>
                    GROWING WITH DATA ANALYTICS
                </p>
                <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>
                    Grow with data.
                </h1>
                <div className='flex justify-center items-center'>
                    <p className='md:text-5xl sm:text-4xl text-xl font-bold py-4'>
                        Fast, flexible financing for 
                    </p>
                    <ReactTyped 
                    className='md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2 text-gray-600'
                        strings={['BTB', 'BTC', 'SASS']} 
                        typeSpeed={120} 
                        backSpeed={140} 
                        loop
                    />
                </div>
                <p className='md:text-2xl text-xl font-bold text-gray-600 px-10'>
                    Monitor your data analytics to increase revenue for BTB, BTC & SASS platforms.
                </p>
                <button className='bg-[#ff81c3] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3 text-[#090311]'>
                    Get Started
                </button>
            </div>
        </div>
    )
}

export default Hero;
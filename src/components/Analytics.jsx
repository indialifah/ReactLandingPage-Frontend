import React from "react";
import Image from '../assets/analytics.png';

const Analytics = () => {
    return (
        <div className='w-full bg-[#faf6ff] py-16 px-4'>
            <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
                <img className='md:w-[400px] sm:w-[300px] w-[200px] mx-auto my-10' src={Image} alt="/" />
                <div className='flex flex-col justify-center mx-8'>
                    <p className='uppercase text-[#ff81c3] font-bold'>
                        Data Analytics Dashboard
                    </p>
                    <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2 text-[#090311]'>
                        Manage Data Analytics Centrally
                    </h1>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    </p>
                    <button className='bg-[#090311] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3 text-[#ff81c3]'>
                        Get Started
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Analytics;
import React from "react";

const Newsletter = () => {
    return (
        <div className='w-full py-16 text-[white] px-4'>
            <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3'>
                <div className='lg:col-span-2 mx-8'>
                    <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>
                        Want tips & tricks to optimize your flow?
                    </h1>
                    <p>Sign up to our newsletter and stay up to date.</p>
                </div>
                <div className='my-4 mx-8'>
                    <div className='flex flex-col sm:flex-row items-center justify-between w-full'>
                        <input className='p-3 flex w-full rounded-md text-[#090311]' type="email" placeholder="Enter Email"/>
                        <button className='bg-[#ff81c3] w-[200px] rounded-md font-medium sm:ml-4 my-6 mx-auto lg:px-4 px-2 py-3 text-[#090311]'>
                            Notify Me
                        </button>
                    </div>
                    <p>We care about the protection of your data. Read our <span className='text-[#ff81c3]'>Privacy Policy</span>.</p>
                </div>
            </div>
        </div>
    )
}

export default Newsletter;
import React from "react";
import {
    FaDribbbleSquare,
    FaFacebookSquare,
    FaGithubSquare,
    FaInstagramSquare,
    FaTwitterSquare,
} from 'react-icons/fa';

const Footer = () => {
    return (
        <div className='max-w-[1240px] mx-auto py-16 px-8 grid lg:grid-cols-3 gap-10 text-gray-400'>
            <div>
                <h1 className='w-full text-3xl font-bold text-[#ff81c3]'>MyReactApp.</h1>
                <p className='py-4'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <div className='flex justify-between md:w-[75%] my-6'>
                    <FaFacebookSquare size={30}/>
                    <FaInstagramSquare size={30}/>
                    <FaTwitterSquare size={30}/>
                    <FaGithubSquare size={30}/>
                    <FaDribbbleSquare size={30}/>
                </div>
            </div>
            <div className='lg:col-span-2 flex justify-between'>
                <div>
                    <h6 className='font-medium text-gray-500'>Solutions</h6>
                    <ul>
                        <li className='py-2 text-sm'>Analytics</li>
                        <li className='py-2 text-sm'>Marketing</li>
                        <li className='py-2 text-sm'>Commerce</li>
                        <li className='py-2 text-sm'>Insights</li>
                    </ul>
                </div>
                <div>
                    <h6 className='font-medium text-gray-500'>Support</h6>
                    <ul>
                        <li className='py-2 text-sm'>Pricing</li>
                        <li className='py-2 text-sm'>Documentation</li>
                        <li className='py-2 text-sm'>Guides</li>
                        <li className='py-2 text-sm'>API Status</li>
                    </ul>
                </div>
                <div>
                    <h6 className='font-medium text-gray-500'>Company</h6>
                    <ul>
                        <li className='py-2 text-sm'>About</li>
                        <li className='py-2 text-sm'>Blog</li>
                        <li className='py-2 text-sm'>Jobs</li>
                        <li className='py-2 text-sm'>Careers</li>
                    </ul>
                </div>
                <div>
                    <h6 className='font-medium text-gray-500'>Legal</h6>
                    <ul>
                        <li className='py-2 text-sm'>Claim</li>
                        <li className='py-2 text-sm'>Policy</li>
                        <li className='py-2 text-sm'>Terms</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Footer;
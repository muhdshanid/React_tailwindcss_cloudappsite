import React from 'react'
import {
    FaFacebook,
    FaGithub,FaInstagram,
    FaTwitter,
    FaTwitch
} from 'react-icons/fa'

function Footer() {
  return (
    <div className='w-full mt-24 bg-slate-900 text-gray-300 py-8 px-2'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-6 grid-cols-2 border-b-2 border-gray-600 py-8'>
            <div className='font-bold uppercase pt-2'>
                <h6>Solutions</h6>
                <ul>
                    <li className='py-1'>Marketing</li>
                    <li className='py-1'>Analytics</li>
                    <li className='py-1'>Commerce</li>
                    <li className='py-1'>Data</li>
                    <li className='py-1'>Cloud</li>
                </ul>
            </div>
            <div className='font-bols uppercase pt-2'>
                <h6>Support</h6>
                <ul>
                    <li className='py-1'>Pricing</li>
                    <li className='py-1'>Documentations</li>
                    <li className='py-1'>Guides</li>
                    <li className='py-1'>API Status</li>
                </ul>
            </div>
            <div className='font-bols uppercase pt-2'>
                <h6>Company</h6>
                <ul>
                    <li className='py-1'>About</li>
                    <li className='py-1'>Blog</li>
                    <li className='py-1'>Jobs</li>
                    <li className='py-1'>Press</li>
                    <li className='py-1'>Partners</li>
                </ul>
            </div>
            <div className='font-bols uppercase pt-2'>
                <h6>Legal</h6>
                <ul>
                    <li className='py-1'>Claims</li>
                    <li className='py-1'>Privacy</li>
                    <li className='py-1'>Terms</li>
                    <li className='py-1'>Policy</li>
                    <li className='py-1'>Conditions</li>
                </ul>
            </div>
            <div className='col-span-2 pt-8 md:pt-2'>
                <p className='font-bold uppercase '>subscribe to our newsletter</p>
                <p className='py-4 '>The latest news,articles,and resources ,sent to your inbox weekly</p>
                <form className='flex flex-col sm:flex-row' action="">
                    <input className='w-full p-2 rounded-md mb-4' placeholder='Enter email..' type="email" />
                    <button className='md:ml-2 p-2 mb-4'>Subscribe</button>
                </form>
            </div>
        </div>

        <div className='flex flex-col max-w-[1240px] mx-auto px-2 py-4  justify-between sm:flex-row text-center text-gray-500'>
            <p className='py-4'>2022 Workflow ,LLC ,All rights reserved</p>
            <div className='flex justify-between pb-2  sm:w-[300px] pt-4 text-2xl'>
                <FaFacebook/>
                <FaInstagram/>
                <FaGithub/>
                <FaTwitch/>
                <FaTwitter/>
            </div>
        </div>
    </div>
  )
}

export default Footer
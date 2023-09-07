import React from 'react'
import { BiWorld } from "react-icons/bi"
import { AiOutlineDropbox, AiOutlineFile, AiOutlineMail } from "react-icons/ai"
import { IoIosPeople } from "react-icons/io"
import { MdOutlineEditLocation } from "react-icons/md"
import { BsFillTelephoneFill } from "react-icons/bs"
import logo from '../assets/logo-h.png'
import Capture from '../assets/Capture.png'
import CopyRight from './CopyRight'

const Footer = () => {
    return (
        <>
            <div className='mt-auto	bg-footerColor py-10'>
                <div className='grid grid-cols-1 md:grid-cols-4 gap-4 py-6 global-container '>
                    <div className='text-white'>
                        <div className='md:hidden'>
                            <img src={logo} alt="Logo"  />
                        </div>
                        <div className='md:block hidden'>
                            <img src={logo} alt="Logo" width="50%" height="50%" />
                        </div>
                        
                        
                        <p className='pt-6 pr-6 text-justify'>After years of development, Orenda has achieved progressive success in providing information technology solutions to business administration, business management, public administration and mobile application.</p>
                    </div>
                    <div className='text-white md:px-4 px-0'>
                        <div>
                            <span className='text-2xl font-semibold '>About Us</span>
                            <div className='h-0.5 w-20 bg-lineGoldColor mt-3' />
                        </div>
                        <div className='mt-6'>
                            <div className='hover:text-textGoldColor transition-colors duration-300 cursor-pointer flex gap-2 items-center pb-2'>
                                <BiWorld />
                                <span>BUSINESS LINE</span>
                            </div>
                            <div className='hover:text-textGoldColor transition-colors duration-300 cursor-pointer flex gap-2 items-center pb-2'>
                                <AiOutlineDropbox />
                                <span>PRODUCTS</span>
                            </div>
                            <div className='hover:text-textGoldColor transition-colors duration-300 cursor-pointer flex gap-2 items-center pb-2'>
                                <AiOutlineFile />
                                <span>PROJECTS</span>
                            </div>
                            <div className='hover:text-textGoldColor transition-colors duration-300 cursor-pointer flex gap-2 items-center pb-2'>
                                <IoIosPeople />
                                <span>CAREERS</span>
                            </div>
                        </div>
                    </div>
                    <div className='text-white md:px-4 px-0'>
                        <div>
                            <span className='text-2xl font-semibold '>Contact Us</span>
                            <div className='h-0.5 w-20 bg-lineGoldColor mt-3' />
                        </div>
                        <div className='mt-6'>
                            <span className='font-bold '>ORENDA JOINT STOCK COMPANY</span>
                            <div className='pt-2 flex gap-2 md:items-start items-center'>
                                <div className='md:hidden'>
                                    <MdOutlineEditLocation />
                                </div>
                                <div className='md:block hidden md:pt-2 '>
                                    <MdOutlineEditLocation size={18} />
                                </div>
                                <p>No. 25 To Vinh Dien Street, Thanh Xuan District, Hanoi, Vietnam</p>
                            </div>
                            <div className='pt-2 flex gap-2 items-center'>
                                <BsFillTelephoneFill />
                                <p>024.6254.3686</p>
                            </div>
                            <div className='pt-2 flex gap-2 items-center    '>
                                <AiOutlineMail />
                                <p>contact@orenda.vn</p>
                            </div>
                            
                        </div>
                    </div>
                    <div className='text-white md:px-4 px-0'>
                        <div>
                            <span className='text-2xl font-semibold '>Facebook</span>
                            <div className='h-0.5 w-20 bg-lineGoldColor mt-3' />
                        </div>
                        <div className='mt-6'>
                            <img src={Capture} alt="capture" />
                        </div>
                    </div>
                </div>
            </div>
            <CopyRight />
        </>
            
    )
}

export default Footer
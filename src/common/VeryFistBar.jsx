import React from 'react'
import {  FaFacebookF, FaYoutube } from "react-icons/fa"

const VeryFistBar = () => {
    return (
        <div className='bg-purple '>
            <div className='flex justify-end pr-4'>
                <div className="flex p-2 ">
                    <input
                        type="search"
                        className="relative m-0 -mr-0.5 block w-52 h-[27px] p-2 rounded-l-lg"
                        placeholder="Search"
                        aria-label="Search"
                        aria-describedby="button-addon1" 
                    />
                    <button
                        className="relative z-[2] flex items-center h-[27px] rounded-r bg-btnGoldColor px-2 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-primary-700 hover:shadow-lg focus:bg-primary-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-800 active:shadow-lg"
                        type="button"
                        id="button-addon1"
                        data-te-ripple-init
                        data-te-ripple-color="light"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="h-5 w-5"
                        >
                            <path
                                fill-rule="evenodd"
                                d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                                clip-rule="evenodd" 
                            />
                        </svg>
                    </button>
                </div>
                
                <div className='flex items-center cursor-pointer'>
                    <div className='relative group'>
                        <div className='mx-4 flex gap-2'>
                            <p className='text-slate-100'>
                                English
                            </p>
                            <span className='text-white  '>&#8744;</span>
                        </div>
                        <div className='bg-white absolute right-2 shadow-lg hidden group-hover:block border-t-4 border-lineGoldColor w-40 px-3 divide-y divide-slate-200'>
                            <p className='py-2 hover:text-textGoldColor transition-colors duration-300'>Japan</p>
                            <p className='py-2 hover:text-textGoldColor transition-colors duration-300'>USA</p>
                        </div>
                    </div>
                    
                    <div className='flex gap-3'>
                        <FaFacebookF color='white' />
                        <FaYoutube color='white' />
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default VeryFistBar
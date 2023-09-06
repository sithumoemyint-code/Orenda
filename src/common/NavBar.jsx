import  { useEffect, useRef } from 'react'
import logo from '../assets/logo-h.png'
import NavBars from '../data/nav.json'
import {  BiChevronDown } from "react-icons/bi"

const NavBar = () => {
    const headerRef = useRef(null)
    
    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (document.body.scrollTop > 140 || document.documentElement.scrollTop > 140) headerRef.current.classList.add('shrink', 'active')
            else headerRef.current.classList.remove('shrink', 'active')
        })
    }, [])


    return (
        <div className={`nav`} ref={headerRef}>
            <div className='flex justify-between py-4 global-container'>
                <div>
                    <img src={logo} alt="Logo" />
                </div>
                
                <div className='flex items-center' >
                    <div className='relative group'>
                        <>
                            <span className='cursor-pointer font-semibold hover:text-textGoldColor transition-colors duration-300 flex  items-center'>
                                Service
                                <BiChevronDown  />
                            </span>
                            <div className=' group-hover:border-t-4 border-indigo-500' />
                        </>
                        
                        <div className='bg-white absolute top-10 right-2 shadow-lg hidden group-hover:block border-t-4 border-lineGoldColor w-40 px-3 divide-y divide-slate-200'>
                            <p className='py-2 hover:text-textGoldColor transition-colors duration-300'>Japan</p>
                            <p className='py-2 hover:text-textGoldColor transition-colors duration-300'>USA</p>
                        </div>
                    </div>
                    
                    {NavBars?.map(nav => (
                        <span key={nav.id} className='cursor-pointer pl-5 font-semibold hover:text-textGoldColor transition-colors duration-300'>
                            {nav.name}
                        </span>
                    ))}
                    
                </div>
            </div>
        </div>
    )
}

export default NavBar
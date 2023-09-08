import  { useEffect, useRef, useState } from 'react'
import logo from '../assets/logo-h.png'
import NavBars from '../data/nav.json'
import {  FaBars } from "react-icons/fa"
import {  AiOutlineLeft } from "react-icons/ai"
import {  BiChevronDown } from "react-icons/bi"
import NavCss from './Navbar.module.css'
import { Link } from 'react-router-dom'

const NavBar = () => {
    const headerRef = useRef(null)
    const menuLeft = useRef(null)
    const [selectNumber, setSelectNumber] = useState(null)

    
    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (document.body.scrollTop > 140 || document.documentElement.scrollTop > 140) headerRef.current.classList.add('shrink')
            else headerRef.current.classList.remove('shrink')
        })
    }, [])

    const menuToggle = () =>  menuLeft.current.classList.toggle('active')

    const handleNav = id => setSelectNumber(id)

    return (
        <div className={`nav`} ref={headerRef}>
            <div className={`${NavCss.wrapper}`}>
                <Link to="/" >
                    <img src={logo} alt="Logo" />
                </Link>
                <nav ref={menuLeft}>
                    <div className={NavCss.toggle_close} onClick={menuToggle}>
                        <AiOutlineLeft />
                    </div>
                    <div className={NavCss.main} onClick={menuToggle}>
                        <div className='flex items-center nav-hamburger-list' >
                            <div className='relative group navbar-list'>
                                <>
                                    <span className='cursor-pointer font-semibold  hover:border-textGoldColor hover:text-textGoldColor transition-colors duration-300 flex  items-center'>
                                        Service
                                        <BiChevronDown  />
                                    </span>
                                </>
                                
                                <div className='bg-white absolute right-2 shadow-lg hidden group-hover:block border-t-4 border-lineGoldColor w-40 px-3 '>
                                    <p className='cursor-pointer py-2 hover:text-textGoldColor transition-colors  transform  duration-300'>Japan</p>
                                    <p className='cursor-pointer py-2 hover:text-textGoldColor transition-colors  transform  duration-300'>USA</p>
                                </div>
                            </div>
                            
                            {NavBars?.map(nav => (
                                <Link to={nav.link}>
                                    <span 
                                        key={nav.id} 
                                        onClick={() => handleNav(nav.id)} 
                                        className={`cursor-pointer text-black pl-5 font-semibold hover:text-textGoldColor transition-colors duration-300 navbar-list-group ${nav.id === selectNumber ? "text-textGoldColor" : "text-black" }`}
                                    >
                                        {nav.name}
                                    </span>
                                </Link>
                            ))}
                        </div>
                    </div>
                </nav>
                
                <div className={NavCss.mobile_toggle} onClick={menuToggle}>
                    <FaBars />
                </div>
            </div>
        </div>
    )
}

export default NavBar
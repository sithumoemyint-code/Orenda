import  { useEffect, useRef, useState } from 'react'
import logo from '../assets/logo-h.png'
import NavBars from '../data/nav.json'
import {  BiChevronDown } from "react-icons/bi"
import NavCss from './Navbar.module.css'

const NavBar = () => {
    const headerRef = useRef(null)
    const [burger_class, setBurgerClass] = useState("burger-bar unclicked")
    const [menu_class, setMenuClass] = useState("menu hidden")
    const [isMenuClicked, setIsMenuClicked] = useState(false)
    
    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (document.body.scrollTop > 140 || document.documentElement.scrollTop > 140) headerRef.current.classList.add('shrink', 'active')
            else headerRef.current.classList.remove('shrink', 'active')
        })
    }, [])

    const updateMenu = () => {
        if (!isMenuClicked) {
            setBurgerClass("burger-bar clicked")
            setMenuClass("menu visible")
        } 
        else {
            setBurgerClass("burger-bar unclicked")
            setMenuClass("menu hidden")
        }
    }


    return (
        <div className={`nav`} ref={headerRef}>
            <div className='flex justify-between py-4 global-container'>
                <div>
                    <img src={logo} alt="Logo" />
                </div>
                
                <div className={`flex items-center ${NavCss.mobile_toggle} `} >
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
                        <span key={nav.id} className='cursor-pointer pl-5 font-semibold hover:text-textGoldColor transition-colors duration-300 navbar-list-group'>
                            {nav.name}
                        </span>
                    ))}
                    
                </div>

                <div className='burger-menu'>
                    <div className={burger_class} onClick={updateMenu} />
                    <div className={burger_class} onClick={updateMenu} />
                    <div className={burger_class} onClick={updateMenu} />
                </div>

                <div className={menu_class}>

                </div>
            </div>
        </div>
    )
}

export default NavBar
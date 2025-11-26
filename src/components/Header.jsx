import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import Logo from '../svg/Logo.svg'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className='sticky top-0 left-0 z-50 bg-white'>
        <div className='max-w-[1224px] m-auto px-4'>
            <div className='flex items-center justify-between py-4'>
                <div>
                   <NavLink to="/"> <img src={Logo} alt="Logo"/></NavLink>
                </div>
                
                <div className='hidden lg:block'>
                    <ul className='flex items-center gap-15'>
                        <NavLink className={({isActive}) => isActive ? "text-cyan-500 hover:text-cyan-500 text-[18px] font-light" : "hover:text-cyan-500 text-[18px] font-light"} to={'/'}>Home</NavLink>
                        <NavLink className={({isActive}) => isActive ? "text-cyan-500 hover:text-cyan-500 text-[18px] font-light" : "hover:text-cyan-500 text-[18px] font-light"} to={'/praducts'}>Products</NavLink>
                        <NavLink className={({isActive}) => isActive ? "text-cyan-500 hover:text-cyan-500 text-[18px] font-light" : "hover:text-cyan-500 text-[18px] font-light"} to={'/blog'}>Blog</NavLink>
                        <NavLink className={({isActive}) => isActive ? "text-cyan-500 hover:text-cyan-500 text-[18px] font-light" : "hover:text-cyan-500 text-[18px] font-light"} to={'/faq'}>FAQ</NavLink>
                        <NavLink className={({isActive}) => isActive ? "text-cyan-500 hover:text-cyan-500 text-[18px] font-light" : "hover:text-cyan-500 text-[18px] font-light"} to={'/contact'}>Contact Us</NavLink>
                    </ul>
                </div>

                <div className='flex items-center gap-4'>
                    <i className="fa-regular fa-heart text-[22px] text-blue-400 hover:text-[#063A88] cursor-pointer"></i>
                    <i className="fa-solid fa-basket-shopping text-[22px] text-blue-400 hover:text-[#063A88] cursor-pointer"></i>
                    <i className="fa-regular fa-user text-[22px] text-blue-400 hover:text-[#063A88] cursor-pointer"></i>
                    
                    <button 
                        onClick={toggleMenu}
                        className='lg:hidden text-[24px] text-blue-400 hover:text-[#063A88] ml-2'
                        aria-label="Toggle menu"
                    >
                        <i className={isMenuOpen ? "fa-solid fa-times" : "fa-solid fa-bars"}></i>
                    </button>
                </div>
            </div>

            <div className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                <ul className='flex flex-col gap-4 py-4'>
                    <NavLink 
                        onClick={() => setIsMenuOpen(false)}
                        className={({isActive}) => isActive ? "text-cyan-500 hover:text-cyan-500 text-[18px] font-light py-2" : "hover:text-cyan-500 text-[18px] font-light py-2"} 
                        to={'/'}
                    >
                        Home
                    </NavLink>
                    <NavLink 
                        onClick={() => setIsMenuOpen(false)}
                        className={({isActive}) => isActive ? "text-cyan-500 hover:text-cyan-500 text-[18px] font-light py-2" : "hover:text-cyan-500 text-[18px] font-light py-2"} 
                        to={'/praducts'}
                    >
                        Products
                    </NavLink>
                    <NavLink 
                        onClick={() => setIsMenuOpen(false)}
                        className={({isActive}) => isActive ? "text-cyan-500 hover:text-cyan-500 text-[18px] font-light py-2" : "hover:text-cyan-500 text-[18px] font-light py-2"} 
                        to={'/blog'}
                    >
                        Blog
                    </NavLink>
                    <NavLink 
                        onClick={() => setIsMenuOpen(false)}
                        className={({isActive}) => isActive ? "text-cyan-500 hover:text-cyan-500 text-[18px] font-light py-2" : "hover:text-cyan-500 text-[18px] font-light py-2"} 
                        to={'/faq'}
                    >
                        FAQ
                    </NavLink>
                    <NavLink 
                        onClick={() => setIsMenuOpen(false)}
                        className={({isActive}) => isActive ? "text-cyan-500 hover:text-cyan-500 text-[18px] font-light py-2" : "hover:text-cyan-500 text-[18px] font-light py-2"} 
                        to={'/contact'}
                    >
                        Contact Us
                    </NavLink>
                </ul>
            </div>
        </div>
        <div className='bg-blue-200 w-full h-0.5'></div>
    </header>
  )
}

export default Header
import React, { useState } from 'react'
import { Link, useLocation  } from 'react-router-dom'
import { useNavigate } from "react-router-dom"

function Header() {

    const [isOpen, setisOpen] = useState(false);
    const ToggleClass = () =>{
        setisOpen(!isOpen)
    }
    const useActiveRoute = () => {
        const location = useLocation();
        return location.pathname;
      };
      const activeRoute = useActiveRoute();
    console.log(isOpen);
    const navigate = useNavigate()
  
    return (
        <>
            <div className='header_wrap flex align-middle my-5 mx-auto justify-between  container'>
                <div className='header_left '>
                    <div className='header_left-wrap flex align-middle cursor-pointer' >
                        <div className='header_left-img border border-solid border-white flex w-10 h-10 rounded-full bg-cyan-600'>
                            <p className='p-0 m-auto  font-bold text-3xl text-white'>P</p>
                        </div>
                        <div className='header_left-name  place-items-center ps-3 text-white'>
                            <p className='p-0 h-fit '><span className='font-bold'>Variya</span>  <span>Pradip</span></p>
                            <Link to='/admin'><span className='block text-sm text-cyan-600'>Admin</span></Link>
                        </div>
                    </div>
                </div>
                <div className=' sm:hidden flex my-auto'>
                    <button  className='block my-auto' onClick={ToggleClass}>
                            <div className='w-5 bg-slate-200 h-1 mb-1 ms-auto rounded-full'></div>
                            <div className='w-6 bg-slate-200 h-1 mb-1 ms-auto rounded-full'></div>
                            <div className='w-7 bg-slate-200 h-1 mb-1 rounded-full'></div>
                    </button>
                </div>
                <div  className={`header_right  align-middle place-items-center text-sm sm:block transition  ${isOpen ? 'block, absolute left-0 top-20 w-full text-center bg-slate-800 py-3 z-10': 'hidden'}`} >
                    <ul className={`2xl:flex xl:flex lg:flex md:flex sm:flex block sm:py-3  ${isOpen ? ' flex flex-col justify-between c_bar ': ''} `}>
                        <li><Link className={`menu_link sm:w-full sm:block ${activeRoute === '/' ? 'active' : ''}`} to='/'>About Me</Link></li>
                        <li><Link className={`menu_link sm:w-full sm:block ${activeRoute === '/resume' ? 'active' : ''}`} to='/resume'>Resume</Link></li>
                        <li><Link className={`menu_link sm:w-full sm:block ${activeRoute === '/portfolio' ? 'active' : ''}`} to='/portfolio'>Portfolio</Link></li>
                        <li><Link className={`menu_link sm:w-full sm:block ${activeRoute === '/contact' ? 'active' : ''}`} to='/contact'>Contact</Link></li>
                    </ul>
                </div>
            </div>

            
        </>
    )
}

export default Header
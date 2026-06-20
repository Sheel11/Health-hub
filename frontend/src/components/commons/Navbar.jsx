import React, { useState } from "react";
import {Menu , X} from 'lucide-react'
import {Navigate, NavLink , useNavigate} from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Logo from '../../assets/Logo/Logo.png'
import '../../index.css'



const menuItems = [
  {
    name: 'Home',
    href: '/',
  },
  {
    name: 'About',
    href: '/about',
  },
  {
    name: 'Contact',
    href: '/contact',
  },
]

const menuItemsSm = [
  {
    name : 'Login',
    href : '/signin',
  },
  {
    name : 'Register',
    href : '/signup',
  }
]

const Navbar = () => {
    const navigate = useNavigate(); 
    const [isMenuOpen , setIsMenuOpen] = useState(false);
    const auth = localStorage.getItem('user');

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    const services = () => {
        if(!auth){
            toast.success("Register Yourself First!")           
        }else{
            navigate('/services')
        }
    }

    const logout = () => {
        localStorage.clear();

    }
    return(
        <>
        <ToastContainer />
        <div className="relative w-full bg-slate-50 py-3">
            <div className="mx-auto flex max-w-75xl items-center justify-between px-4 py-2 sm:px-6 lg:px-6">
                <div className="inline-flex items-center space-x-2">
                    <img src={Logo} alt="logo img" width="250" height="50" />
                </div>
                <div className="ml-50 hidden grow items-start lg:flex">
                    <ul className=" inline-flex space-x-8">
                        {menuItems.map((item) => (
                            <li key={item.name}>
                                <NavLink to={item.href}>
                                    <a 
                                    href={item.href}
                                    className="text-sm font-semibold text-gray-800 hover:text-gray-900"
                                    >
                                    {item.name}
                                    </a>
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                    <button type="button"
                     className="cursor-pointer text-sm font-semibold text-gray-800 hover:text-gray-900 ml-8 mt-0.5"
                     onClick={services}
                    >
                    Services
                    </button>
                </div>
                <div className="hidden lg:block" style={{ color: '#33805D' }}>
                    { auth ? (
                        <NavLink to='/signin'>
                           <button 
                           type="button"
                           className="cursor-pointer rounded-md bg-green-800 px-3 py-2  text-sm font-semibold text-white
                           shadow-sm hover:bg-green-900/80 "
                           onClick={logout}
                           >
                            Logout
                           </button>
                        </NavLink> 

                    ):(
                        <>
                        <NavLink to = "/signin">
                          <button
                          type="button"
                          className="cursor-pointer rounded-md bg-green-800 px-3 py-2  text-sm font-semibold text-white
                          shadow-sm hover:bg-green-900/80 "
                          >
                            Login
                          </button>
                        </NavLink>

                        <NavLink to='/signup'>
                        <button
                        type="button"
                          className="cursor-pointer rounded-md bg-green-800 px-3 py-2  text-sm font-semibold text-white
                          shadow-sm hover:bg-green-900/80 ml-8 "
                        >
                            Register 
                        </button>
                        </NavLink>
                        </> 
                    )}
                </div>
                <div className="lg:hidden">
                    <Menu onClick={toggleMenu} className="h-6 w-6 cursor-pointer"></Menu>
                </div>

                {isMenuOpen && (
                    <div className="absolute inset-x-0 top-0 z-50 origin-top-right
                      p-2 transition lg:hidden">
                        <div className="divide-y-2 divide-gray-50 rounded-lg bg-white
                        shadow-lg ring-1 ring-black ring-opacity-5
                        ">
                            <div className="px-5 pb-6 pt-5 ">
                                <div className="flex  justify-between">
                                    <div className="mt-6">
                                            <nav className="grid gap-y-4">
                                                {menuItems.map((item) => (
                                                <a
                                                    key={item.name}
                                                    href={item.href}
                                                    className="-m-3 flex items-center rounded-md p-3 text-sm font-semibold hover:bg-gray-50"
                                                >
                                                    <span className="ml-3 text-base font-medium text-gray-900">
                                                    {item.name}
                                                    </span>
                                                </a>
                                                ))}
                                                {auth ? (
                                                    <a
                                                    href='/'
                                                    className="-m-3 flex items-center rounded-md p-3 text-sm font-semibold hover:bg-gray-50"
                                                    onClick={logout}
                                                    >
                                                    <span className="ml-3 text-base font-medium text-gray-900">
                                                    Logout
                                                    </span>
                                                </a>
                                                ):( 
                                                 menuItemsSm.map((item , index) => (
                                                    
                                                    <a
                                                    key={item.name}
                                                    href={item.href}
                                                    className="-m-3 flex items-center rounded-md p-3 text-sm font-semibold hover:bg-gray-50"
                                                    >
                                                    <span className="ml-3 text-base font-medium text-gray-900">
                                                    {item.name}
                                                    </span>
                                                    </a>
                                                  ))
                                                )
                                
                                                   
                                                }
                                            </nav>
                                    </div>
                                    <button
                                    type="button"
                                    onClick={toggleMenu}
                                    className=" text-gray-400 hover:bg-gray-50 hover:text-gray-700 rounded-md p-2 "
                                    >
                                     <span className="sr-only">Close menu</span>
                                     <X className="h-6 w-6" aria-hidden = "true" />
                                    </button>
                                </div>
                         </div>
                        </div>
                    </div>
                )}
            </div>
        </div>


        <div>

        </div>
        </>
    )
}

export default Navbar;

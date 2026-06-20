import Logo from '../../assets/Logo/Logo.png'
import '../../index.css'
import {  NavLink } from 'react-router-dom'

const Footer = () => {
    return (
        <section className='mx-auto mt-12 max-w-full'>
            <div className='container relative z-10 max-w-full px-4'>
                <div className='flex flex-wrap items-center justify-between'>
                     <div className='w-auto p-8'>
                        <a href="#">
                            <div className='inline-flex items-center'>
                                <img src={Logo} alt="img" width='250' height='86'/>
                            </div>
                        </a>
                     </div>
                     <div className='w-auto p-4'>
                        <ul className='-m-5 flex flex-warp  items-center'>
                            <li className='p-5'>
                                <NavLink to='/policy'>
                                <a href="#" className='font-medium text-gray-700 hover:text-gray-800'>
                                Privacy Policy
                                </a>
                                </NavLink>
                            </li>
                            <li className='p-5'>
                                <NavLink to='/terms'>
                                <a href="#" className='font-medium text-gray-700 hover:text-gray-800'>
                                    Terms of Service
                                </a>
                                </NavLink>
                            </li>
                            <li className='p-5'>
                                <NavLink to='/contact'>
                                <a href="#" className='font-medium text-gray-700 hover:text-gray-800'>
                                    Contact Us
                                </a>
                                </NavLink>
                            </li>
                        </ul>
                     </div>
                     {/* <div className='w-auto p-4'>
                        <div className=''>
                        </div>
                     </div> */}
                </div>
            </div>
        </section>
    )
}

export default Footer;
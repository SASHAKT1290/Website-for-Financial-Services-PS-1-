import React from 'react'
import {Link} from 'react-router'
import Services from './Services'
import ContactUs from './ContactUs'
import MeetOurTeam from './MeetOurTeam'

const Navbar = () => {

  

    return (
        <>
            <nav className="w-full font-medium h-16 bg-beige relative flex items-center">
                {/* Left spacer for small screens, menu for md+ */}
                <div className="w-16 md:w-auto hidden md:block" />
                {/* Brand centered on small screens, left on md+ */}
                <div className="absolute left-1/2 -translate-x-1/2 md:static md:translate-x-0 flex items-center px-2">
                    <p className=" text-2xl font-bold text-black "><Link to="/">Saanvi FinServ</Link></p>
                </div>
                {/* Menu hidden on small screens */}
                <div className="hidden md:block flex-1">
                    <ul className="flex items-center justify-center mt-1">
                        <li className="p-2 m-2 text-black font-bold hover:bg-blue hover:rounded-lg hover:text-white"><Link to="/">Home</Link></li>
                        <li className="p-2 m-2 text-black font-bold hover:bg-blue hover:rounded-lg hover:text-white"><Link to="/products">Products</Link></li>
                        <li className="p-2 m-2 text-black font-bold hover:bg-blue hover:rounded-lg hover:text-white"><Link to="/about">About Us</Link></li>
                        <li className="p-2 m-2 text-black font-bold hover:bg-blue hover:rounded-lg hover:text-white"><Link to="/contact">Contact Us</Link></li>
                    </ul>
                </div>
                {/* Login dropdown always on the right */}
                <div className="ml-auto dropdown dropdown-hover dropdown-end mt-2 mr-1">
                    <div tabIndex={0} role="button" className="btn m-1">Login</div>
                    <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box pr-2 shadow-sm">
                        <li><a className="text-nowrap" href="https://ewa.njindiaonline.com/ewa/login" target="_blank">NJ Wealth A/C</a></li>
                        <li><a className="text-nowrap" href="https://www.njindiaonline.in/cdesk/login.fin" target="_blank">NJ Wealth CM</a></li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar
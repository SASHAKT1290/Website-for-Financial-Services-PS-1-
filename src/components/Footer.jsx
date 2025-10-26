import React from 'react'
import { Link } from 'react-router'
const Footer = () => {
    return (
        <div className=' flex'>
            <footer className="footer sm:footer-horizontal bg-neutral text-neutral-content p-10 justify-around">
                <nav>
                    <h6 className="footer-title">Vision</h6>
                    <div className='w-50'>
                        At, Saanvi Financial Services our mission is to provide our clients with the best solutions in wealth building. We are driven to provide clients with simple, unbiased and uncluttered guidance that adds value to their quality of life and results in actionable solutions.
                    </div>
                </nav>
                <nav>
                    <h6 className="footer-title"><Link to="/">Home</Link></h6>
                    <Link to="/about">About us</Link>
                    <Link to="/contact">Contact</Link>
                    <Link to="/careers">Careers</Link>
                </nav>
                <nav>
                    <h6 className="footer-title">Legal</h6>
                    <Link to="/terms">Terms of use</Link>
                    <Link to="/privacy">Privacy policy</Link>
                    <Link to="/cookie">Cookie policy</Link>
                </nav>
            </footer>
        </div>
    )
}

export default Footer

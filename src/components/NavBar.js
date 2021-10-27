import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = ({toggle}) => {
    return (
        <nav className="flex justify-between items-center h-16 bg-white text-black relative shadow-sm font-mono" role="navigation">
            <Link to="/" className="pl-8">
                Shop
            </Link>
            <div className="px-4 cursor-pointer md:hidden" onClick={toggle}>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
            </div>
            <div className="pr-8 md:block hidden">
                <Link to="/" className="p-4">Home</Link>
                <Link to="/menu" className="p-4">Menu</Link>
                <Link to="/about" className="p-4">About</Link>
                <Link to="/contact" className="p-4">Contact</Link>
            </div>
        </nav>
    )
}

export default NavBar

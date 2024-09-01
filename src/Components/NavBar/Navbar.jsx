// import React from 'react'
import background from '../../assets/download.svg'
import './Navbar.css'
const Navbar = () => {
    return (
        <div className='navbar'>
            <div className="nav-logo">
                <h1>&km</h1>
                {/* <img src={background} alt="underline" /> */}
            </div>
            <ul className="nav-menu">
                <li>Home</li>
                <li>About Me</li>
                <li>Services</li>
                <li>Portfolio</li>
                <li>Contact</li>
            </ul>
            <div className='nav-connect'>Connect With Me</div>
        </div >
    )
}

export default Navbar

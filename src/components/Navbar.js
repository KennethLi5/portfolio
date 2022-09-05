import React, { useState, useEffect } from 'react'

import './Navbar.css'
import { Link as LinkS } from "react-scroll"
import './pages/Home.js'
import { useLocation } from 'react-router-dom'



function Navbar() { 
    
    const [click, setClick] = useState(false)
    const [button, setButton] = useState(true)

    const handleClick = () => setClick(!click)
    const closeMobileMenu = () => setClick(false)

    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false)                        
        } else {
            setButton(true)
        }
    }

    useEffect(() => {
        showButton();
    }, [])

    
    window.addEventListener('resize', showButton)

    function ReturnToHome() {
        const location = useLocation();
        
        if (location.pathname != "/") {
            
        }
    }

    return (
        <>
            <nav className='navbar'>
                <div className='navbar-container'>
                    <div className='menu-icon' onClick={handleClick} >
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />                                                

                    </div>

                    <ul className={click ? 'nav-menu active' : 'nav-menu'} >
                        <li className='nav-item'>
                            <LinkS 
                                activeClass="active"
                                to="Home"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={750}
                                className='nav-links' 
                                onClick={closeMobileMenu}
                                >
                                HOME
                            </LinkS>
                        </li>
                        <li className='nav-item'>
                            <LinkS 
                                activeClass="active"
                                to="Projects"
                                spy={true}
                                smooth={true}
                                offset={-10}
                                duration={750}
                                className='nav-links' 
                                onClick={closeMobileMenu}
                                >
                                PROJECTS
                            </LinkS>
                        </li>
                        <li className='nav-item'>
                            <LinkS 
                                activeClass="active"
                                to="Footers"
                                spy={true}
                                smooth={true}
                                offset={150}
                                duration={750}
                                className='nav-links' 
                                onClick={closeMobileMenu}>
                                CONTACT
                            </LinkS>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar
import React, { useState, useEffect } from 'react'

import './Navbar.css'
import { animateScroll as scroll} from "react-scroll"
import { Link as LinkS } from "react-scroll"
import './pages/Home.js'



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

    function scrollToTop() {
        scroll.scrollToTop();
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
                                Home
                            </LinkS>
                        </li>
                        <li className='nav-item'>
                            <LinkS 
                                activeClass="active"
                                to="Projects"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={750}
                                className='nav-links' 
                                onClick={closeMobileMenu}
                                >
                                Projects
                            </LinkS>
                        </li>
                        <li className='nav-item'>
                            <LinkS 
                                activeClass="active"
                                to="Footers"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={750}
                                className='nav-links' 
                                onClick={closeMobileMenu}>
                                About me
                            </LinkS>
                        </li>
                    </ul>
                    {/* {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>} */}
                </div>
            </nav>
        </>
    )
}

export default Navbar
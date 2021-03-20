import React from 'react'
import '../../App.css'
import Projects from '../Projects'
import Footers from '../Footers'
import HeroSection from '../HeroSection'
import { Element } from 'react-scroll'

function Home() {
    return (
        <>
            <Element id='Home' name='Home'>
                <HeroSection/>
            </Element>
            {/* <Element id='Projects' name='Projects'>
                <Projects/>
            </Element> */}
            <Element id='Footers' name='Footers'>
                <Footers/>
            </Element>
            
            
            
        </>
    )
}

export default Home
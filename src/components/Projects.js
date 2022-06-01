import React from 'react'
import ProjectItem from './ProjectItem'
import './Projects.css'

function Projects() {
    return (
        <div className='projects'>
            <h1>Projects</h1>
            <div className="projects__container">
                <div className="projects__wrapper">
                    <ul className="projects__items">
                        <ProjectItem 
                        class = 'github'
                        src="images/img-1.jpg"
                        text="VRSub"
                        path='vrsub'
                        />         
                        
                        <ProjectItem 
                        src="images/discord-logo.jpg"
                        text="Interactive Discord Music Bot"                        
                        path='polly'
                        />                        
                        <ProjectItem 
                        src="images/img-1.jpg"
                        text="Project 3"
                        // label='Adventure'
                        path='filler'
                        />                                            
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Projects

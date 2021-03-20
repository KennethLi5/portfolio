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
                        src="images/img-2.jpg"
                        text="Project 1"
                        label='Adventure'
                        path='services'
                        />
                        <ProjectItem 
                        src="images/img-1.jpg"
                        text="Project 2"
                        label='Adventure'
                        path='signup'
                        />                        
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Projects

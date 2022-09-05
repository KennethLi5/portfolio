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
                        src="images/img-1.jpg"
                        text="VRSub"
                        label="C#, Unity3D, SteamVR"
                        path='VRSub'
                        />                                            
                        <ProjectItem 
                        src="images/polly.jpg"
                        text="Amazon Polly"
                        label='JavaScript, React'
                        path='/Polly'
                        />     
                        <ProjectItem 
                        src="images/discord-logo.jpg"
                        text="Interactive Discord Music Bot"                        
                        path='DiscordBot'
                        label='JavaScript, NodeJS'
                        />                                     
                        <ProjectItem 
                        src="images/website.jpg"
                        text="Portfolio website (this one!)"
                        label='JavaScript, React, HTML, CSS'
                        path='Website'
                        />                                                                                         
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Projects

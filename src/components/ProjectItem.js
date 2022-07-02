import React from 'react'
import { Link } from 'react-router-dom'

function ProjectItem(props) {
    return (
        <>
            <li className="projects__item">
                <Link className="projects__item__link" to={props.path} target="_blank">
                    <figure className="projects__item__pic-wrap" data-category={props.label}>
                        <img src={props.src} alt="pic" className="projects__item__img"/>
                    </figure>
                    <div className="projects__item__info">
                        <h5 className="projects__item__text">{props.text}</h5>
                    </div>
                        <div className ="projects__item__skills">                                            
                    </div>
                </Link>
            </li>
        </>
    )
}

export default ProjectItem

import React from 'react'
import { Link } from 'react-router-dom'
import './Footers.css'
import Pdf from '../Kenneth_Li_Resume.pdf' 

function Footers() {
    return (
        <div className='footer-container'>
            <section className="footer-subscription">
                <h1 className="footer-subscription-heading">Contact me!</h1>
            </section>

            <section className="social-media">
                <div className="social-media-wrap">
                        <a className="social-icon-link" href='mailto:kennethli015@gmail.com'  target='_blank' rel='noopener noreferrer' aria-label='email'>
                            <i className="fa fa-envelope">
                                <span className="caption">Email</span>
                            </i>
                        </a>                          
                        <a className="social-icon-link" href='https://www.linkedin.com/in/kenneth-li-472666171/' rel='noopener noreferrer'  target='_blank' aria-label='linkedin'>
                            <i className="fab fa-linkedin">
                                <span className="caption">LinkedIn</span>
                            </i>
                        </a>          
                        <a className="social-icon-link" href='https://github.com/KennethLi5' rel='noopener noreferrer'  target='_blank' aria-label='github'>
                            <i className="fa fa-github">
                                <span className="caption">Github</span>
                            </i>
                        </a>              
                        <Link className="social-icon-link" to={Pdf} target='_blank' aria-label='resume'>
                            <i className="fas fa-file">
                            <span className="caption">Resume</span>
                            </i>
                        </Link>
                </div>
            </section>
        </div>
    )
}

export default Footers

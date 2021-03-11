import React from 'react'
import CardItem from './CardItem'
import './Cards.css'

function Cards() {
    return (
        <div className='cards'>
            <h1>Projects</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem 
                        src="images/img-2.jpg"
                        text="Project 1"
                        label='Adventure'
                        path='services'
                        />
                        <CardItem 
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

export default Cards

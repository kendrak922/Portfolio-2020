import React from 'react';
import {StylePortfolio} from './portfolio.styled'
import volunteerAppPic from '../Pictures/volunteerAppPic.png'


const Portfolio = () => {
return (
    <StylePortfolio>
    <div id='portfolio' className='portfolio-container'>
    <h2>My Work</h2>
    <div className="item">
    <img src={volunteerAppPic} alt='Volunteer App Screenshot' />
    <p className='app-name aside'>Volunteer App</p>
    <p className="description aside">An easy to use sign-up app for volunteers and organizers that focuses on privacy and accessibility.</p>
    <a href='https://github.com/kendrak922/sign-up.git' target="_blank" rel="noopener noreferrer" className='button aside'>Github</a>
    <a href='https://volunteer-dev-3ced0.web.app/app.html' target="_blank" rel="noopener noreferrer"className='button aside'>App</a>
    </div>
    </div>
    </StylePortfolio>
)

}

export default Portfolio;
import React from 'react';
import {StylePortfolio} from './portfolio.styled'


const Portfolio = () => {
return (
    <StylePortfolio>
    <div id='portfolio' className='portfolio-container'>
    <h2>My Work</h2>
    <div className="item">
    <p className='app-name'>Volunteer App</p>
    <p className="hidden nav-description">This is a description of my very cool app</p>
    <a href='https://github.com/kendrak922/sign-up.git' className='hidden'>Github</a>
    <a href='https://github.com/kendrak922/sign-up' className='hidden'>App</a>
    </div>
    <div className="item">
    <p className='app-name'>Volunteer App</p>
    <p className="hidden nav-description">This is a description of my very cool app</p>
    <a href='https://github.com/kendrak922/sign-up.git' className='hidden'>Github</a>
    <a href='https://github.com/kendrak922/sign-up' className='hidden'>App</a>
    </div>
    <div className="item">
    <p className='app-name'>Volunteer App</p>
    <p className="hidden nav-description">This is a description of my very cool app</p>
    <a href='https://github.com/kendrak922/sign-up.git' className='hidden'>Github</a>
    <a href='https://github.com/kendrak922/sign-up' className='hidden'>App</a>
    </div>
    <div className="item">
    <p className='app-name'>Volunteer App</p>
    <p className="hidden nav-description">This is a description of my very cool app</p>
    <a href='https://github.com/kendrak922/sign-up.git' className='hidden'>Github</a>
    <a href='https://github.com/kendrak922/sign-up' className='hidden'>App</a>
    </div>
    <div className="item">
    <p className='app-name'>Volunteer App</p>
    <p className="hidden nav-description">This is a description of my very cool app</p>
    <a href='https://github.com/kendrak922/sign-up.git' className='hidden'>Github</a>
    <a href='https://github.com/kendrak922/sign-up' className='hidden'>App</a>
    </div>
    </div>
    </StylePortfolio>
)

}

export default Portfolio;
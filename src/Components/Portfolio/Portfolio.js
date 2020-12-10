import React from 'react';
import volunteerAppPic from '../Pictures/volunteerAppPic.png'
import './portfolio.scss'


const Portfolio = () => {
    return (
            <div id='portfolio' className='portfolio-container'>
                <h2>Featured Projects</h2>
                <div className="item">
                <div className="image-background">
                    <img src={volunteerAppPic} alt='Volunteer App Screenshot' />
                </div>
                    <div className="aside">
                        <p className='app-name'>Volunteer App</p>
                        <p className="description">This App was inspired by my volunteer work in the past. It is an easy to use sign-up tool for volunteers and organizers that focuses on privacy and accessibility.</p>
                        <p className="description">Utilizes jQuery, Materialize UI, Sass, and Firebase Authorization, Realtime Database, and Hosting.</p>
                        <div>
                            <a href='https://github.com/kendrak922/sign-up.git' target="_blank" rel="noopener noreferrer" className='button button-animation'>Github</a>
                            <a href='https://volunteer-dev-3ced0.web.app/app.html' target="_blank" rel="noopener noreferrer" className='button button-animation'>App</a>
                        </div>
                    </div>
                </div>
                <div className="item">
                <div className="image-background">
                <img src={volunteerAppPic} alt='Volunteer App Screenshot' />
            </div>
                    <div className="aside">
                        <p className='app-name'>Get Together</p>
                        <p className="description">Get Together is an app for the modern party planner. Its a way to generate meal ideas for a myriad of guest needs - or go rouge and completely ignore everyone.</p>
                        <p className="description">Technologies implemented include React.js, Sass, Spoonful Recipe API, and </p>
                        <div>
                            <a href='https://github.com/kendrak922/Dinner-Party.git' target="_blank" rel="noopener noreferrer" className='button'>Github</a>
                            <a href='https://volunteer-dev-3ced0.web.app/app.html' target="_blank" rel="noopener noreferrer" className='button'>App</a>
                        </div>
                    </div>
                </div>
            </div>
    )

}

export default Portfolio;
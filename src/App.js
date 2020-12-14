import React, { useState, useRef } from 'react';
import Burger from './Components/Burger/Burger'
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './global';
import { theme } from './theme';
import Nav from './Components/Nav/Nav'
import Footer from './Components/Footer/Footer'
import Portfolio from './Components/Portfolio/Portfolio'
import AboutPhoto from './Components/Pictures/Face.jpeg'
// import LandingPage from './Components/LandingPage'
import { useOnClickOutside } from './hooks';
import './App.scss'
import resume from './Components/Pictures/Resume.pdf'

function App() {
    const node = useRef();
    useOnClickOutside(node, () => setOpen(false));
    const [open, setOpen] = useState(false);
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            <div className="App">
                <div ref={node}>
                    <Burger open={open} setOpen={setOpen} />
                    <Nav open={open} setOpen={setOpen} />
                </div>
                <div className="welcome-pg">
                    <div className='headline'> Hi, I'm Kendra Kyndberg</div>
                    <p className='title'>Front-End Developer</p>
                </div>
                <Portfolio />
                {/* <div className='stats'>
                    <div className='left'>
                        <h4>Quick Facts</h4>
                        <ul>
                            <li>B.A. from University of Minnesota - Twin Cities</li>
                            <li>UMN Bootcamp Fullstack Web Development Certification</li>
                            <li>ENFP | Virgo | Optimist</li>
                        </ul>
                    </div>
                    <div className="right">
                        <h4>Favorite Tools</h4>
                        <p>JavaScript, Node.js, jQuery, React.js, Github, MySQL, Firebase, HTML, CSS, APIs, CSS Flexbox </p>
                    </div>
                </div> */}
                <div id='about-me'>
                    <h2>A Little About Me</h2>
                    <img src={AboutPhoto} alt="It's me"></img>
                    <div className="box"></div>
                    <div className="description">
                        <p></p>
                        <button className="resume" href={resume} download>Download Resume</button>
                    </div>
                </div>
                <div></div>
                <Footer />
            </div>
        </ThemeProvider>
    );
}

export default App;
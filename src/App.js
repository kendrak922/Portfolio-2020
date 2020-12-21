import React, { useState, useRef } from 'react';
import Burger from './Components/Burger/Burger'
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './global';
import { theme } from './theme';
import Nav from './Components/Nav/Nav'
import Footer from './Components/Footer/Footer'
import Portfolio from './Components/Portfolio/Portfolio'
import AboutPhoto from './Components/Pictures/Face.jpeg'
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
            <main className="App">
                <div ref={node}>
                    <Burger open={open} setOpen={setOpen} />
                    <Nav open={open} setOpen={setOpen} />
                </div>
                <div className="welcome-pg">
                    <h1> Hi, I'm Kendra Kyndberg</h1>
                    <p>Front-End Developer</p>
                </div>
                <Portfolio />
                <div className='stats'>
                    <div className='left'>
                        <h2>Quick Facts</h2>
                        <ul>
                            <li>B.A. from University of Minnesota - Twin Cities</li>
                            <li>UMN Bootcamp Fullstack Web Development Certification</li>
                            <li>ENFP | Virgo | Optimist</li>
                        </ul>
                    </div>
                    <div className="right">
                        <h2>My Favorite Tools</h2>
                        <p>JavaScript, Node.js, jQuery, React.js, GIT, MySQL, Firebase, HTML5, CSS3, Sass, RESTful APIs, JSON, AJAX, Materialize and Bootstrap Frontend Frameworks, CSS Flexbox, CSS Grid
</p>
                    </div>
                </div>
                <div id='about-me'>
                    <h2>A Little About Me</h2>
                    <img src={AboutPhoto} alt="It's me"></img>
                    <div className="box"></div>
                    <div className="description">
                        <p>After graduating a coding bootcamp in 2018, I made it my mission to expand on the concepts I had learned particularly in Front-End development. As a liberal arts grad, I was initially drawn to the field of web development because I wanted to use technology to help people. I stayed because I found new thrilling ways to use creativity and critical thinking skills that enable me to remain in state of perpetual learning. When I am not coding, I am probably getting a drink (or a few) with friends, bouldering, experimenting in the kitchen, or reading a good book.
                    <br></br><br></br>I like to work on projects that are mission driven and solutions oriented. My code focuses on learning core concepts in-depth while prioritizing fast, simple programs that are not bogged down in unnecessary libraries or modules. Most of all I love talking about projects, learning technology, and encouraging others to explore the world of web development. </p>
                        <a className="resume" href={resume} download>Download Resume</a>
                    </div>
                </div>
                <div></div>
                <Footer />
            </main>
        </ThemeProvider>
    );
}

export default App;
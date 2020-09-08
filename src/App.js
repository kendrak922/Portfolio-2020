import React, { useState, useRef } from 'react';
import Burger from './Components/Burger/Burger'
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './global';
import { theme } from './theme';
import Nav from './Components/Nav'
import Footer from './Components/Footer'
import Portfolio from './Components/Portfolio'
import AboutPhoto from './Components/Pictures/Face.jpeg'
// import LandingPage from './Components/LandingPage'
import { useOnClickOutside } from './hooks';
import './App.scss'

function App() {
  const node = useRef();
  useOnClickOutside(node, () => setOpen(false));
  const [open, setOpen] = useState(false);
  return (
    <ThemeProvider theme={theme}>
    <GlobalStyles />
    <div className="App">
    <div ref={node}>
        <Burger open={open} setOpen={setOpen}/>
        <Nav open={open} setOpen={setOpen}/>
        </div>
        <div className="welcome-pg">
            <div className='headline'> Hi, I'm Kendra Kyndberg</div>
            <p className='title'>Front-End Developer</p>
     </div>
        <Portfolio />
        <div className='stats'>
            <h4>Quick Facts</h4>
            <ul>
                <li>B.A. from University of Minnesota - Twin Cities</li>
                <li>UMN Bootcamp Fullstack Web Development Certification</li>
                <li>ENFP | Virgo | Optimist</li>
            </ul>
            <h4>Favorite Tools</h4>
            <p>JavaScript, Node.js, jQuery, React.js, GIT, Github, MySQL, Firebase, HTML, CSS, APIs, JSON, AJAX </p>
        </div>
        <div id='about-me'>
            <h2>A Little About Me</h2>
            <img src={AboutPhoto} alt="It's me"></img>
            <div className="box"></div>
            <p className="description">As a people person and a liberal arts grad, I never thought my journey would involve coding. I was initially drawn to the field because I wanted to use technology to help people. I stayed because I found a home in web development that enabled me to use creativity and critical thinking skills in new ways and while constantly learning. If I am not trying a new web develment tool, I at a brewery with friends, bouldering, experimenting in the kitchen, or reading a good book.<br></br><br></br>  I like to work on projects that are mission driven and solutions oriented. I love beautiful design. Most of all I love talking about projects, learning technology, and encouraging others to explore the world of web development. If you are just getting started on your coding journey and want to learn more, let's talk. </p>
        </div>
        <Footer />
    </div>
    </ThemeProvider>
      );
}

export default App;
import React from 'react';
import {StyleFooter} from './footer.styled'
import resume from '../Pictures/Resume.pdf'


const Footer = () => {
    return (
<StyleFooter>
    <div id='contact'className="footer">
    <p className="contact-title">- Get in Touch -</p>
    <p className="email">kendrak922@gmail.com</p>
    <p className="number">651-261-5162</p>
    <div className="social-media">
        <a className="social-media-link" href="https://www.linkedin.com/in/kendra-kyndberg/" target="_blank" rel="noopener noreferrer" alt='linked-in icon'><i className="fab fa-linkedin-in"></i></a>
        <a className="social-media-link" href="https://github.com/kendrak922" target="_blank" rel="noopener noreferrer" alt='git-hub icon'><i className="fab fa-github"></i></a>
        <a className=" social-media-link resume" href={resume} download>Download my Resume</a>
    </div>
</div>
</StyleFooter>
    )
}

export default Footer;
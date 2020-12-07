import React from 'react';
import {StyleFooter} from './footer.styled'
import Contact from '../Contact/Contact'
import slant from './optimised.svg'

const Footer = () => {
    return (
<StyleFooter>
    <img src={slant} alt='slant styling' />
    <div id='contact'className="footer">
    <h2 className="contact-title">- Get in Touch -</h2>
    <Contact />
    <div className="social-media">
    {/* <h2 className="contact-title">- Get in Touch -</h2> */}
        <a className="social-media-link" href="mailto:kendrak922@gmail.com"><i class="far fa-envelope"></i>Email Me</a>
       <a className="social-media-link" href="https://www.linkedin.com/in/kendra-kyndberg/" target="_blank" rel="noopener noreferrer" alt='linked-in icon'><i className="fab fa-linkedin-in"></i>Linkedin</a>
        <a className="social-media-link" href="https://github.com/kendrak922" target="_blank" rel="noopener noreferrer" alt='git-hub icon'><i className="fab fa-github"></i>Github</a>
    </div>
    {/* <Contact /> */}
</div>
</StyleFooter>
    )
}

export default Footer;
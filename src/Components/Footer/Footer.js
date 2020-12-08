import React from 'react';
import {StyleFooter} from './footer.styled'
import Contact from '../Contact/Contact'
import slant from './optimised.svg'
import github from '../Pictures/github-brands.svg'
import linkedIn from '../Pictures/linkedin-in-brands.svg'
import email from '../Pictures/envelope-regular.svg'

const Footer = () => {
    return (
<StyleFooter>
    <img src={slant} alt='slant styling' />
    <div id='contact'className="footer">
    <h2 className="contact-title">- Get in Touch -</h2>
    <Contact />
    <div className="social-media">
    {/* <h2 className="contact-title">- Get in Touch -</h2> */}
        <a className="social-media-link email" href="mailto:kendrak922@gmail.com"><img src={email}></img>Email Me</a>
       <a className="social-media-link github" href="https://www.linkedin.com/in/kendra-kyndberg/" target="_blank" rel="noopener noreferrer" alt='linked-in icon'><img src={linkedIn} alt='linkedin icon'></img>Linkedin</a>
        <a className="social-media-link linkedin" href="https://github.com/kendrak922" target="_blank" rel="noopener noreferrer" alt='git-hub icon'><img alt='github icon'src={github}></img>Github</a>
    </div>
    {/* <Contact /> */}
</div>
</StyleFooter>
    )
}

export default Footer;
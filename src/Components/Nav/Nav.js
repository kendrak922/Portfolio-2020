import React from 'react';
import { bool } from 'prop-types';
import {StyleNav} from './nav.styled';



const Nav = ({open}) => {

        return (
            <StyleNav open={open}>
            <div className="nav-container">
                        <div className="nav">
                        <a href='#about-me'>About Me</a>
                        <a href='#portfolio'>Portfolio</a>
                        <a href='#contact'>Contact Me</a>
                    </div>
            </div>
            </StyleNav>
        )
    }


Nav.propTypes = {
    open: bool.isRequired,
}

export default Nav;
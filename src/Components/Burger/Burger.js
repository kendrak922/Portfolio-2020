import React from 'react';
import {StyledBurger} from './burger.styled'
import { bool, func } from 'prop-types';


const Burger =({open, setOpen}) => {  
  
    return(
        <StyledBurger aria-label="hamburger button" tab-index= '1' role="button" open ={open} onClick = {()=> setOpen(!open)}>
   <div />
   <div />
   <div />
        </StyledBurger>
    )
}

Burger.propTypes = {
    open: bool.isRequired,
    setOpen: func.isRequired,
  };

export default Burger;
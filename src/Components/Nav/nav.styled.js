import styled from 'styled-components';



export const StyleNav= styled.nav`


.nav-container{
    background-color: ${({theme})=> theme.darkGreen};
    height: 100vh;
    float: right;

}

.nav{
background-color: ${({theme})=> theme.maroon};
padding: 1rem;
display: flex;
flex-flow: column;
text-align: center;
justify-content: center;
width: 300px;
position: fixed;
height: 100vh;
transform: translateX(-100%);
a{
    color:${({theme})=> theme.pink};
    font-size: 2.5rem;
    margin-top: 3rem;
    text-decoration: none;
    position: relative;
}

a:before{
    content: "";
    position: absolute;
    width: 100%;
    height: 2px;
    bottom: 0;
    left:0;
    background-color: ${({theme})=> theme.pink};
    visibility: hidden;
    transform: scaleX(0);
    transition: all .5s ease-in-out 0s;
}
a:hover:before{
    visibility: visible;
    transform: scaleX(1);
}
transform: ${({ open }) => open ? 'translateX(-100%)' : 'translateX(0)'};
z-index: 9;

`;

import styled from 'styled-components';



export const StyleNav= styled.nav`


.nav-container{
    background-color: ${({theme})=> theme.darkGreen};
    height: 100vh;
    display: inline;
    float: right;
 
    a{
        color:${({theme})=> theme.pink};
        font-size: 3rem;
        margin-top: 3rem;
        text-decoration: none;
    }
}


.nav{
background-color: ${({theme})=> theme.darkPink};
display: flex;
flex-flow: column;
text-align: center;
justify-content: center;
width: 300px;
position: absolute;
height: 100vh;
transform: translateX(-100%);
transform: ${({ open }) => open ? 'translateX(-100%)' : 'translateX(0)'};

@media only screen and (max-width: 768px) {
   
}

`;

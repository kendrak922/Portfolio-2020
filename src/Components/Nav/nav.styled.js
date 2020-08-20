import styled from 'styled-components';



export const StyleNav= styled.nav`
.nav-container{
    background-color: ${({theme})=> theme.pink};
    height: 100vh;
    display: inline;
  
 
    a{
        color:${({theme})=> theme.Darkpink};
        font-size: 3rem;
        margin-top: 3rem;
        text-decoration: none;
    }
}


.nav{
background-color: ${({theme})=> theme.pink};
display: flex;
flex-flow: column;
text-align: center;
justify-content: center;
z-index: 9;
width: 400px;
position: absolute;
height: 100vh;
transform: translateX(-100%);
transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-100%)'};
`;

import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
body{
    background-color: ${({ theme }) => theme.pink};
    font-family: ${({ theme }) => theme.secondaryFont};
    margin: 0;
    } 
    .App{
        margin: 0;
    }
    a{
        text-decoration: none;
    }
    
`
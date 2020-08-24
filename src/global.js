import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`

html, body{
    background-color: ${({ theme }) => theme.pink};
    font-family: ${({ theme }) => theme.secondaryFont};
    margin: 0 auto;
    padding: 0;
    overflow-x: hidden;
    } 
    .App{
        margin: 0;
    }
    a{
        text-decoration: none!important;
      }
    *, *::after, *::before {
        box-sizing: border-box;
      }
    
   
      }
`
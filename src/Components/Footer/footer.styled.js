import styled from 'styled-components';



export const StyleFooter= styled.footer`
.footer{
    text-align: center;
    display: flex;
    flex-flow: column wrap;
    background-color: ${({ theme }) => theme.darkGreen};
    height: auto;
    color: ${({ theme }) => theme.pink};
    padding: 3rem;
    font-size:1.5rem;
    a{
        color: ${({ theme }) => theme.pink};
    }
    h2{
        flex-basis: 100%;
    }
}
img{
    width: 100%;
    margin:0;
    margin-bottom: -1rem;
}

.social-media{
    display: flex;
    font-size: 1rem;
    flex-flow: row wrap;
    justify-content: flex-end;;
    align-items: center;
    vertical-align: baseline;
    color: ${({ theme }) => theme.pink};
   .social-media-link{
       img{
         height: 1rem;
         width: 1rem;
        padding:.5rem;
        margin:0 auto;
        color:${({ theme }) => theme.darkPink};
        border-radius: 100%;
       }
       img:hover{
           transform: scale(1.1);
           transition:.15s;
       }
   }
}
@media only screen and (max-width: 568px) {
  
}
    @media only screen and (max-width: 1280px) {
        h2{
            font-size: 2rem;
        }
        footer{
            padding: 0;
        }
        
        .social-media{
            margin: 0 auto;
            justify-content: center;
        }
    } 
     
`;

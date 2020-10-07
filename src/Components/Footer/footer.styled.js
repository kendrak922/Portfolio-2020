import styled from 'styled-components';



export const StyleFooter= styled.footer`
.footer{
    position: relative;
    text-align: center;
    background-color: ${({ theme }) => theme.darkGreen};
    height: auto;
    color: ${({ theme }) => theme.pink};
    padding:10px;
    font-size:1.5rem;
}
.resume{
    text-decoration: none;
    background-color: ${({ theme }) => theme.darkPink};
    color: ${({ theme }) => theme.darkGreen};
    // border-radius: 10%;
    padding:10px;
    margin: 100px;
    font-size: 1rem;
}

.social-media{
    align-self: center;

   .social-media-link{
       margin:5px;

       i{
        padding:10px;
        background-color:${({ theme }) => theme.darkPink};
        width:40px;
        height:40px;
        margin:0 auto;
        color:${({ theme }) => theme.darkGreen};
        // border-radius: 10%;
       }
       i:hover{
           transform: scale(1.1);
           transition:.15s;
       }
   }
}
@media only screen and (max-width: 768px) {
    .footer{
        z-index: 1;
        margin-top: 20rem;
    }

`;

import styled from 'styled-components';



export const StyleFooter= styled.footer`
.footer{
    position: relative;
    text-align: center;
    background-color: ${({ theme }) => theme.darkGreen};
    height: auto;
    color: ${({ theme }) => theme.pink};
    padding: 10px;
    font-size:1.5rem;
    z-index: 2;
    bottom: 0;
}
img{
    width: 100%;
    margin:0;
    margin-bottom: -1rem;
}
.resume{
    background-color: ${({ theme }) => theme.darkPink};
    color: ${({ theme }) => theme.darkGreen};
    padding:10px;
    font-size: 1rem;
    margin-bottom: 10px;
  
}
resume:hover{
    transform: scale(1.1);
    transition:.15s;
}
.social-media{
    align-self: center;
    display: flex;
    justify-content: center;
    align-items: center;
    

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
   
    @media only screen and (max-width: 1280px) {
    } 
     
`;

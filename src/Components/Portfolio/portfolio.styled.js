// Menu -> index.js
import styled from 'styled-components';


export const StylePortfolio = styled.div`
.portfolio-container{
    display: flex;
    flex-flow: column;
    h2{
        font-size: 4rem;
        color: ${({theme})=> theme.darkPink};
        text-align: center;
    }
    img{
        height: 25rem;
        width: 40rem;
        flex: 1;
    }
    .item{
        display: flex;
        flex-flow: column wrap;
        margin: 2rem;
    }
    .aside{
        flex: 2;
    }
    // .item:hover{
    //     transform: scale(1.1);
    //     transition:.15s
    //     opacity: 90%;
    // }
    .app-name{
        font-size: 3rem;
        color: ${({theme})=> theme.darkPink};
        font-family: ${({theme})=> theme.secondaryFont};
    }
    .description{
        text-align: center;
        color: ${({theme})=> theme.darkPink};
        font-size: 1rem;
        width: 15rem;
        font-family: ${({theme})=> theme.primaryFont};
    }
    a{
        margin: 1rem;
        color: ${({theme})=> theme.darkGreen};
        font-size: 1.5rem;
    }
   
}

`;

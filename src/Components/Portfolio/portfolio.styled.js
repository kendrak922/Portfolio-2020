// Menu -> index.js
import styled from 'styled-components';


export const StylePortfolio = styled.span`
.portfolio-container{
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: flex-start;
    // height: 100vh;
    // width:100vw;
    margin: 2rem;
    h2{
        font-size: 60px;
        color: ${({theme})=> theme.darkPink};
        flex-basis: 100%;
        text-align: center;
    }
    .item{
        display: flex;
        flex-flow: row wrap;
        justify-content: center;
        align-items: center;
        background-color:${({theme})=> theme.darkGreen};
        box-shadow: 3px 3px 3px gray ;
        height: 250px;
        width: 350px;
        margin: 2rem;
        border-radius: 1%;
    }
    .item:hover{
        transform: scale(1.1);
        transition:.15s
        opacity: 90%;
    }
    .app-name{
        font-size: 3rem;
        color: ${({theme})=> theme.pink};
        font-family: ${({theme})=> theme.primaryFont};
    }
    .nav-description{
        flex-basis: 100%;
        text-align: center;
        color: ${({theme})=> theme.darkPink};
        font-size: 1.5rem;
    }
    a{
        margin: 1rem;
        color: ${({theme})=> theme.pink};
        font-size: 1.5rem;
    }
   
}

.hidden{
    display:none;
}

.item:hover{
    .hidden{
        display: block;  
    }
    .app-name{
        display: none;
    }

}

`;

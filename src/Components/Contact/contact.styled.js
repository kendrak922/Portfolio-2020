import styled from 'styled-components';



export const StyleForm= styled.form`

display: flex;
flex-direction: column;
align-items: flex-end;
margin: 0 auto;

label{
    font-size: 1.25rem;
}
input, textarea{
    margin: 1rem;
    vertical-align: middle;
    width: 20rem;
}
textarea{

}
input[type = submit]{
    background-color: ${({ theme }) => theme.darkPink};
    color: ${({ theme }) => theme.darkGreen};
    width: 6rem;
    font-size: 1.1rem;
    border: none;
  }
`;


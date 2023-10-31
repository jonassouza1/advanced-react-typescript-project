import  { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
${props => props.theme}
*{
    margin:0;
    padding:0;
    box-sizing: border-box;
    img{
      max-width:100%;
    }
    font-weight:700;
  }
  
`


export { GlobalStyle }
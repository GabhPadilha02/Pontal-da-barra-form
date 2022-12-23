import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  
  :focus{
    outline: 0;
    border-radius: 8px;
    box-shadow: 0 0 0 1px #fff;
  }
  body{
    color: #ffffff;
    -webkit-font-smoothing: antialiased;
  }
  
  body, input, textarea, button {
    font-family: 'Roboto Condensed', sans-serif;
    font-weight: 400;
    font-size: 1rem;
  }
  a{
    text-decoration: none;

    :visited{
      color: #fff;
    }
  }
`

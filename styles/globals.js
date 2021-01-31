import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  html{
    font-size: 62.5%;
  }
  html,
  body {
    padding: 0;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }
  body{
    font-size: 1.6rem;
    line-height: 1.5;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
  }

  h1,h2,h3,h4,h5,h6{
    margin: 0;
  }
`

export default GlobalStyle

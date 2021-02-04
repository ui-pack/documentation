import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  html{
    --base-hue: 189deg;
    --base-saturation: 98%;
    --base-lightness: 20%;
    --base-hue-saturation: var(--base-hue) var(--base-saturation);
    --base-easing: cubic-bezier(.5, 0, .5, 1);
    --base-outline-color: hsl(var(--base-hue-saturation) 85%);
    --base-background-color: hsl(360deg 0% 100%);
    --base-curve: 10px;
    --mobile-nav-offset: -70vw;
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
    color: #444;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
    margin: 0;
  }

  h1{
    font-size: 4.8rem;
  }

  h2{
    font-size: 3.6rem;
  }

  h3{
    font-size: 3.0rem;
  }

  h4{
    font-size: 2.4rem;
  }

  h5{
    font-size: 2.0rem;
  }

  h6{
    font-size: 1.8rem;
  }
`

export default GlobalStyle

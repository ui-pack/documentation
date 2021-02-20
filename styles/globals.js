import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  html{
    font-size: 62.5%;
    --mobile-nav-offset: -70vw;
    --base-curve: 10px;
    --base-hue: 189deg;
    --base-saturation: 98%;
    --base-lightness: 20%;
    --base-hue-saturation: var(--base-hue) var(--base-saturation);
    --base-easing: cubic-bezier(.5, 0, .5, 1);
    --base-outline-color: hsl(var(--base-hue-saturation) 85%);
    --base-background-hsl: 0deg 0% 100%;
    --base-foreground-hsl: 0deg 100% 0%;
    --base-background-color: hsl(0deg 0% 100%);
    --base-foreground-color: hsl(0deg 100% 0%);
    --base-border-color: hsl(0deg 0% 96%);
    --base-shadow: 0 2px 8px hsl(0deg 100% 0%/.04);
    .dark{
      --base-background-hsl: 184deg 8% 12%;
      --base-foreground-hsl: 0deg 0% 100%;
      --base-background-color: hsl(184deg 8% 12%);
      --base-foreground-color: hsl(0deg 0% 100%);
      --base-border-color: hsl(0deg 0% 22%);
      --base-shadow: 0 2px 8px hsl(0deg 0% 85%/.04);
    }
  }
  html,
  body {
    padding: 0;
    margin: 0;
  }
  body{
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    font-size: 1.6rem;
    line-height: 1.5;
    background-color: var(--base-background-color);
    color: var(--base-foreground-color);
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

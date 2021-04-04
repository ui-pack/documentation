import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  html{
    font-size: 62.5%;
    scroll-behavior: smooth;
    --color-info: hsl(156deg 72% 67%);
    --color-warn: hsl(46deg 97% 65%);
    --color-error: hsl(0deg 94% 82%);
    --color-gray-50: 210deg 20% 98%;
    --color-gray-100: 220deg 14% 96%;
    --color-gray-200: 220deg 13% 91%;
    --color-gray-300: 216deg 12% 84%;
    --color-gray-400: 218deg 11% 65%;
    --color-gray-500: 220deg 9% 46%;
    --color-gray-600: 215deg 14% 34%;
    --color-gray-700: 217deg 19% 27%;
    --color-gray-800: 215deg 28% 17%;
    --color-gray-900: 221deg 39% 11%;
    --base-font: 1.6rem/1.5 -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    --mobile-nav-offset: -70vw;
    --base-curve: 10px;
    --base-hue: 189deg;
    --base-saturation: 98%;
    --base-lightness: 20%;
    --base-hue-saturation: var(--base-hue) var(--base-saturation);
    --base-color: hsl(var(--base-hue-saturation) 40%);
    --base-easing: cubic-bezier(.5, 0, .5, 1);
    --base-outline-color: hsl(var(--base-hue-saturation) 85%);
    --base-background-hue: 0deg;
    --base-background-hue-saturation: 0deg 0%;
    --base-background-hsl: 0deg 0% 100%;
    --base-foreground-hsl: 0deg 100% 0%;
    --base-background-color: hsl(var(--base-background-hsl));
    --base-foreground-color: hsl(var(--base-foreground-hsl));
    --base-border-color: hsl(var(--color-gray-100));
    --base-shadow: 0 2px 8px hsl(0deg 100% 0%/.04);
    &.dark{
      --base-background-hue: 184deg;
      --base-background-hue-saturation: 184deg 8%;
      --base-background-hsl: 184deg 8% 12%;
      --base-foreground-hsl: 0deg 0% 85%;
      --base-background-color: hsl(var(--base-background-hsl));
      --base-foreground-color: hsl(var(--base-foreground-hsl));
      --base-border-color: hsl(0deg 0% 22%);
      --base-shadow: 0 2px 4px hsl(0deg 0% 85%/.02);
    }
  }
  html,
  body {
    padding: 0;
    margin: 0;
  }
  body{
    font: var(--base-font);
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

  h1,h2,h3,h4,h5,h6,p{
    margin: 0;
  }
  h1{
    font-size: 4.8rem;
  }

  h2{
    font-size: 3.2rem;
  }

  h3{
    font-size: 2.4rem;
  }

  h4{
    font-size: 2.2rem;
  }

  h5{
    font-size: 2.0rem;
  }

  h6{
    font-size: 1.8rem;
  }
`

export default GlobalStyle

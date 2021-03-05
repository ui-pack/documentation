import { createGlobalStyle } from 'styled-components'

const ThirdPartyStyle = createGlobalStyle`
  html.ui-pack{
    --docsearch-primary-color: var(--base-color);
    --docsearch-searchbox-background: var(--base-background-color);
    --docsearch-searchbox-focus-background: var(--base-background-color);
    --docsearch-searchbox-shadow: inset 0 0 0 2px var(--base-outline-color);
    --docsearch-text-color: #888;
    --docsearch-muted-color: hsl(var(--base-foreground-hsl)/ .5);
    --docsearch-highlight-color: var(--base-color);
    --docsearch-logo-color: var(--base-color);
    --docsearch-modal-background: hsl(var(--base-background-hue) 18% 97%);
    --docsearch-modal-shadow: var(--base-shadow);
    --docsearch-hit-background: var(--base-background-color);
    --docsearch-hit-color: var(--base-foreground-color);
    --docsearch-hit-shadow: var(--base-shadow);
    &.dark{
      --docsearch-modal-background: hsl(var(--base-background-hue) 10% 18%);
      --docsearch-key-gradient: linear-gradient(-225deg, rgb(50 70 80) 0%, rgb(30 30 30) 100%);
      --docsearch-key-shadow: inset 0 -2px 0 0 rgb(40 40, 30),
    inset 0 0 1px 1px var(--base-background-color), 0 1px 2px 1px rgba(10 5 90/0.4);
  );
    }
  }
  .DocSearch{
    @media (min-width: 750px) {
      width: 80%;
      max-width: 500px;
    }
  }
  .DocSearch-SearchButton{
    width: 100%;
    height: auto;
    margin: 0;
    padding: 12px;
    border-radius: var(--base-curve);
    box-shadow: var(--base-shadow);
    border: solid 1.5px var(--base-border-color);
    font: var(--base-font);
    transition: border-color .2s var(--base-easing);
    &:focus, &:active{
      box-shadow: none;
    }
    &:hover{
      box-shadow: var(--base-shadow);
    }
    &:focus{
      border-color: var(--base-outline-color);
    }
  }
  .DocSearch-SearchButton-Placeholder{
    width: 90%;
    padding: 0 12px 0 8px;
    font: var(--base-font);
    text-align: left;
  }
  .DocSearch-SearchButton-Key{
    align-self: flex-end;
    top: auto;
    width: auto;
    height: auto;
    margin: 0;
    padding: 0;
    background: none;
    border-radius: 0;
    box-shadow: none;
    &:last-of-type::after{
      content: '';
      position: absolute;
      top: -3px;
      right: -6px;
      width: 36px;
      height: 28px;
      border: solid thin var(--color-gray-200);
      border-radius: 4px;
      .dark &{
        border: solid thin var(--color-gray-600);
      }
    }
  }
  .DocSearch-Footer{
    background: var(--base-background-color);
    box-shadow: none;
    border-top: 1px solid var(--base-border-color)
  }
`

export default ThirdPartyStyle

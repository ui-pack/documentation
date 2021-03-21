import styled from 'styled-components'
import ColorSchemeToggle from './color-schemes'

const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  border-bottom: solid thin var(--base-border-color);
  padding: 18px 25px;
  background: hsl(var(--base-hue) 40% 97%);
  .dark &{
    background: hsl(var(--base-hue) 40% 7%);
  }
  @media screen and (min-width: 900px) {
    padding: 18px 50px;
    && {
      position: sticky;
      top: 0;
      background: hsl(var(--base-background-hsl) / .85);
      backdrop-filter: saturate(1.1) blur(10px);
      z-index: 100;
    }
  }
`

const Links = styled.div`
  align-self: center;
  padding-left: 20px;
`

export default function Header() {
  return (
    <HeaderWrapper>
      <div id="docsearch" className="DocSearch" />
      <Links>
        <ColorSchemeToggle />
      </Links>
    </HeaderWrapper>
  )
}
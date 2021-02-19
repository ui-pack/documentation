import styled from 'styled-components'
import ColorSchemeToggle from './color-schemes'
import VisuallyHidden from './visually-hidden'
import Icon from './icon'

const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  border-bottom: solid thin #f5f5f5;
  padding: 18px 25px;
  background: hsl(var(--base-hue) 40% 97%);
  @media screen and (min-width: 900px) {
    padding: 18px 50px;
    background: none;
  }
`

const Keyboard = styled.span`
  --icon-width: 14;
  --icon-height: 14;
  position: absolute;
  top: 10px;
  right: 12px;
  padding: 4px 8px;
  border: solid thin #ececec;
  border-radius: 10px;
  font-size: 1.4rem;
  color: #aaa;
  kbd{
    font: inherit;
  }
`

const SearchForm = styled.form`
  position: relative;
  width: 80%;
  max-width: 500px;
  input{
    width: 100%;
    padding: 12px 36px;
    border: solid thin #f0f0f0;
    border-radius: var(--base-curve);
    box-shadow: 0 2px 8px rgb(0 0 0/.04);
    outline-color: var(--base-outline-color);
    font: inherit;
  }
`

const SearchIcon = styled.svg`
  position: absolute;
  top: 15px;
  left: 12px;
  color: #aaa;
  width: 20px;
  height: 20px;
  vertical-align: middle;
`

const Links = styled.div`
  align-self: center;
  padding-left: 20px;
`

export default function Header() {
  return (
    <HeaderWrapper>
      <SearchForm>
        <SearchIcon xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="11" cy="11" r="8" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </SearchIcon>
        <Keyboard>
          <kbd>
            <Icon viewBox="0 0 27 27" aria-label="Command">
              <path d="M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z" />
            </Icon>
          </kbd>
          <VisuallyHidden>and</VisuallyHidden>
          <kbd>K</kbd>
          <VisuallyHidden>to search</VisuallyHidden>
        </Keyboard>
        <input type="search" placeholder="Search" id="searchInput" aria-label="Search ui-pack documentation" readOnly />
      </SearchForm>
      <Links>
        <ColorSchemeToggle />
      </Links>
    </HeaderWrapper>
  )
}
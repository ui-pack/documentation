import styled from 'styled-components'
import ColorSchemeToggle from './color-schemes'
import VisuallyHidden from './visually-hidden'

const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 18px 50px;
  border-bottom: solid thin #f5f5f5;
`

const Keyboard = styled.span`
  position: absolute;
  top: 10px;
  right: 12px;
  padding: 4px 8px;
  border: solid thin #ececec;
  border-radius: 10px;
  font-size: 1.4rem;
  color: #aaa;
  svg{
    display: inline-block;
    width: 14px;
    height: 14px;
    margin-top: -2px;
    vertical-align: middle;
  }
  kbd{
    font: inherit;
  }
`

const SearchForm = styled.form`
  position: relative;
  width: 500px;
  input{
    width: 100%;
    padding: 12px 36px;
    border: solid thin #f0f0f0;
    border-radius: 10px;
    box-shadow: 0 2px 8px rgb(0 0 0/.04);
    outline-color: #b3e6e6;
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
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-label="Command">
              <path d="M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z" />
            </svg>
          </kbd>
          <VisuallyHidden>and</VisuallyHidden>
          <kbd>K</kbd>
          <VisuallyHidden>to search</VisuallyHidden>
        </Keyboard>
        <input type="search" placeholder="Search" aria-label="Search ui-pack documentation" readOnly />
      </SearchForm>
      <Links>
        <ColorSchemeToggle />
      </Links>
    </HeaderWrapper>
  )
}
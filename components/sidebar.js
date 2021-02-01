import { useRouter } from 'next/router'
import styled from 'styled-components'
import _capitalize from 'lodash/capitalize'
import Icon from './icon'

const Wrapper = styled.div`
  display: none;
  @media screen and (min-width: 900px) {
    align-self: stretch;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    width: 400px;
    padding: 50px 80px;
    background: #f9ffff;
    box-shadow: -80px 0 40px 15px rgb(0 0 0/ .03) inset;
  }
`

const Logo = styled.h1`
  width: 120px;
  height: 40px;
  margin-left: -5px;
  background-image: url(/ui-pack-named.svg);
  background-size: 100%;
  background-repeat: no-repeat;
  text-indent: -1000px;
  overflow: hidden;
`

const Navigation = styled.nav`
  flex: 1;
  margin-top: 60px;
  > a{
    display: block;
    margin-bottom: 10px;
    padding: 5px 0;
  }
  [aria-current]{
    color: hsl(189deg 98% 20%);
  }
  svg{
    display: inline-block;
    width: 18px;
    height: 18px;
    margin-right: 8px;
    vertical-align: middle;
    fill: currentColor;
  }
`

const Footer = styled.footer`
  --width: 18;
  --height: 18;
  display: flex;
  justify-content: space-between;
  padding: 15px 0;
  border-top: solid thin hsl(var(--base-hue) 70% 90%);
  color: hsl(var(--base-hue) 40% 70%);
  a{
    margin-right: 15px;
    color: hsl(var(--base-hue-saturation) 35%);
  }
`

const icons = {
  'infinite-scroll': () => (
    <svg viewBox="0 0 24 24">
      <path d="M18.609 6.609q2.25 0 3.82 1.594t1.57 3.797-1.57 3.797-3.82 1.594h-0.047q-0.891 0-1.992-0.469t-1.805-1.125l-1.266-1.125 1.5-1.313 1.172 0.984q1.031 1.031 2.438 1.031t2.391-0.984 0.984-2.391-0.984-2.391-2.391-0.984-2.391 0.984q-3.328 2.906-4.219 3.75l-2.813 2.484q-1.547 1.547-3.797 1.547t-3.82-1.594-1.57-3.797 1.57-3.797 3.82-1.594h0.047q0.938 0 2.039 0.469t1.758 1.125l1.266 1.125-1.547 1.313-1.125-0.984q-1.031-1.031-2.438-1.031t-2.391 0.984-0.984 2.391 0.984 2.391 2.391 0.984 2.391-0.984q3.328-2.906 4.219-3.75l2.813-2.484q1.547-1.547 3.797-1.547z" />
    </svg>
  ),
  masonry: () => (
    <svg viewBox="0 0 24 24">
      <path d="M12.984 3h8.016v6h-8.016v-6zM12.984 21v-9.984h8.016v9.984h-8.016zM3 21v-6h8.016v6h-8.016zM3 12.984v-9.984h8.016v9.984h-8.016z"></path>
    </svg>
  ),
  popover: () => (
    <svg viewBox="0 0 24 24">
      <path d="M20.016 2.016q0.797 0 1.383 0.586t0.586 1.383v12q0 0.797-0.586 1.406t-1.383 0.609h-14.016l-3.984 3.984v-18q0-0.797 0.586-1.383t1.383-0.586h16.031z"></path>
    </svg>
  ),
}

const pages = [
  'infinite-scroll',
  'masonry',
  'popover'
]

export default function Sidebar() {
  const router = useRouter()
  const isCurrent = page => router.pathname.includes(page) ? 'page' : null
  return (
    <Wrapper>
      <a href="/">
        <Logo>ui-pack</Logo>
      </a>
      <Navigation>
        {
          pages.map(page => (
            <a href={`/docs/${page}`} aria-current={isCurrent(page)} key={page}>
              {icons[page]()} {_capitalize(page.replace('-', ' '))}
            </a>
          ))
        }
      </Navigation>
      <Footer>
        <span>
          <a href="https://github.com/ui-pack">
            <Icon>
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
            </Icon>
          </a>
          <a href="https://twitter.com/josephrexme">
            <Icon>
              <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
            </Icon>
          </a>
        </span>
        <span>&copy; {new Date().getFullYear()}</span>
      </Footer>
    </Wrapper>
  )
}
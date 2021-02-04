import { useRouter } from 'next/router'
import styled, { css } from 'styled-components'
import _capitalize from 'lodash/capitalize'
import Icon from './icon'
import Link from './link'
import Button from './button'
import { InlineSpacer, Spacer } from './spacer'
import { Logo } from './brand'

const Wrapper = styled.div`
  position: fixed;
  left: 100vw;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: calc(var(--mobile-nav-offset) * -1);
  padding: 25px;
  background: hsl(var(--base-hue-saturation) 99%);
  transition: transform .5s var(--base-easing);
  box-shadow: 80px 0 40px 15px rgb(0 0 0/ .03) inset;
  .menu-nav &{
    transform: translateX(var(--mobile-nav-offset));
  }
  @media screen and (min-width: 900px) {
    position: static;
    width: 400px;
    padding: 50px 80px;
    box-shadow: -80px 0 40px 15px rgb(0 0 0/ .03) inset;
    .menu-nav &{
      transform: none;
    }
  }
`

const Header = styled.header`
  --link-display: inline-flex;
  --icon-stroke: hsl(var(--base-hue) 30% 70%);
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media screen and (min-width: 900px) {
    --button-opacity: 0;
  }
`

const Navigation = styled.nav`
  --icon-width: 18;
  --icon-height: 18;
  flex: 1;
  display: grid;
  ${({ linkCount }) => linkCount && css`
    grid-template-rows: repeat(${linkCount}, 30px);
  `}
  align-items: center;
  gap: 20px;
  [aria-current]{
    color: hsl(189deg 98% 20%);
  }
`

const Footer = styled.footer`
  --icon-width: 18;
  --icon-height: 18;
  display: flex;
  justify-content: space-between;
  padding: 15px 0;
  border-top: solid thin hsl(var(--base-hue) 70% 90%);
  color: hsl(var(--base-hue) 40% 70%);
  span:first-of-type{
    display: inline-grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 15px;
  }
  a{
    color: hsl(var(--base-hue-saturation) 35%);
  }
`

const icons = {
  'infinite-scroll': () => (
    <Icon strokeWidth={0} fill="currentColor">
      <path d="M18.609 6.609q2.25 0 3.82 1.594t1.57 3.797-1.57 3.797-3.82 1.594h-0.047q-0.891 0-1.992-0.469t-1.805-1.125l-1.266-1.125 1.5-1.313 1.172 0.984q1.031 1.031 2.438 1.031t2.391-0.984 0.984-2.391-0.984-2.391-2.391-0.984-2.391 0.984q-3.328 2.906-4.219 3.75l-2.813 2.484q-1.547 1.547-3.797 1.547t-3.82-1.594-1.57-3.797 1.57-3.797 3.82-1.594h0.047q0.938 0 2.039 0.469t1.758 1.125l1.266 1.125-1.547 1.313-1.125-0.984q-1.031-1.031-2.438-1.031t-2.391 0.984-0.984 2.391 0.984 2.391 2.391 0.984 2.391-0.984q3.328-2.906 4.219-3.75l2.813-2.484q1.547-1.547 3.797-1.547z" />
    </Icon>
  ),
  masonry: () => (
    <Icon strokeWidth={0} fill="currentColor">
      <path d="M12.984 3h8.016v6h-8.016v-6zM12.984 21v-9.984h8.016v9.984h-8.016zM3 21v-6h8.016v6h-8.016zM3 12.984v-9.984h8.016v9.984h-8.016z"></path>
    </Icon>
  ),
  popover: () => (
    <Icon strokeWidth={0} fill="currentColor">
      <path d="M20.016 2.016q0.797 0 1.383 0.586t0.586 1.383v12q0 0.797-0.586 1.406t-1.383 0.609h-14.016l-3.984 3.984v-18q0-0.797 0.586-1.383t1.383-0.586h16.031z"></path>
    </Icon>
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
  const toggleMenu = () => {
    document.body.classList.toggle('menu-nav')
  }
  return (
    <Wrapper>
      <Header>
        <Link href="/">
          <Logo />
        </Link>
        <Button onClick={toggleMenu}>
          <Icon>
            <line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line>
          </Icon>
        </Button>
      </Header>
      <Spacer axis="vertical" size={60} />
      <Navigation linkCount={pages.length}>
        {
          pages.map(page => (
            <Link href={`/docs/${page}`} aria-current={isCurrent(page)} key={page}>
              {icons[page]()}
              <InlineSpacer axis="horizontal" size={8} />
              {_capitalize(page.replace('-', ' '))}
            </Link>
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
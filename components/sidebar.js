import { useRouter } from 'next/router'
import styled from 'styled-components'
import _capitalize from 'lodash/capitalize'
import Icon from './icon'
import Link from './link'
import Button from './button'
import Stack from './stack'
import { Spacer } from './spacer'
import { Logo } from './brand'

const humanize = string => {
  return _capitalize(string.replace('-', ' '))
}

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
  .dark &{
    background: hsl(var(--base-hue) 10% 11.5%);
    box-shadow: 80px 0 40px 15px 10px hsl(var(--base-hue) 10% 5%/ .03) inset;
  }
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
    .dark &{
      box-shadow: -80px 0 40px 15px 10px hsl(var(--base-hue) 10% 5%/ .03) inset;
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
  button{
    position: relative;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    text-align: center;
    &::after{
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: 50%;
      transform: scale(.3);
      opacity: 0;
      top: 0;
      left: 0;
      z-index: -1;
      background: rgb(200,200,200,.2);
      transition: transform .3s var(--base-easing), opacity .3s linear;
    }
    &:hover ::after{
      transform: scale(1);
      opacity: 1;
    }
  }
`

const Navigation = styled.nav`
  --icon-width: 18;
  --icon-height: 18;
  --link-color: var(--base-foreground-color);
  --link-hover-color: inherit;
  flex: 1;
  font-size: 1.4rem;
  overflow: auto;
  [aria-current]{
    color: hsl(189deg 25% 50%);
    font-weight: 600;
  }
  h5{
    color: hsl(var(--color-gray-500));
    font-weight: 500;
    font-size: 1.6rem;
    .dark &{
      color: hsl(var(--color-gray-400));
    }
  }
`

const Footer = styled.footer`
  --icon-width: 18;
  --icon-height: 18;
  --link-color: hsl(var(--base-hue-saturation) 35%);
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
  .dark &{
    border-top: solid thin hsl(var(--base-hue) 70% 20%);
  }
`

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
      <Spacer axis="vertical" space="60" />
      <Navigation>
        <section aria-labelledby="gettingStarted">
          <h5 id="gettingStarted">Getting started</h5>
          <Spacer axis="vertical" space="12" />
          <Stack gap="10px">
            <Link href="/docs/intro/principles">Principles</Link>
            <Link href="/docs/intro/installation">Installation</Link>
          </Stack>
        </section>
        <Spacer axis="vertical" space="40" />
        <section aria-labelledby="components">
          <h5 id="components">Components</h5>
          <Spacer axis="vertical" space="12" />
          <Stack gap="10px">
            {
              process.env.components.map(page => (
                <Link href={`/docs/${page}`} aria-current={isCurrent(page)} key={page}>
                  {humanize(page)}
                </Link>
              ))
            }
          </Stack>
        </section>
      </Navigation>
      <Footer>
        <span>
          <Link href="https://github.com/ui-pack">
            <Icon>
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
            </Icon>
          </Link>
          <Link href="https://twitter.com/josephrexme">
            <Icon>
              <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
            </Icon>
          </Link>
        </span>
        <span>&copy; {new Date().getFullYear()}</span>
      </Footer>
    </Wrapper>
  )
}
import Head from 'next/head'
import styled from 'styled-components'
import Sidebar from '../components/sidebar'
import Header from '../components/header'
import { Logo } from '../components/brand'
import VisuallyHidden from '../components/visually-hidden'

const Container = styled.div`
  @media screen and (min-width: 900px) {
    display: flex;
    height: 100vh;
  }
`

const Content = styled.main`
  flex: 1 1 auto;
  transition: transform .5s var(--base-easing);
  .menu-nav &{
    transform: translateX(var(--mobile-nav-offset));
  }
`

const Article = styled.article`
  padding: 25px;
  margin: auto;
  max-width: 1000px;
  @media screen and (min-width: 900px) {
    padding: 50px;
  }
`

const PreHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 25px;
  @media screen and (min-width: 900px) {
    display: none;
  }
`

const HamburgerButton = styled.button`
  --hamburger-space: 8px;
  --hamburger-color: hsl(var(--base-hue-saturation) 30%);
  position: relative;
  display: inline-block;
  width: 30px;
  height: 2px;
  border: 0;
  background: var(--hamburger-color);
  cursor: pointer;
  outline: none;
  &::before, &::after{
    content: '';
    position: absolute;
    right: 0;
    width: 100%;
    height: inherit;
    background: inherit;
  }
  &::before{
    top: calc(var(--hamburger-space) * -1);
    height: calc(var(--hamburger-space) * 2);
    border-top: solid 2px var(--hamburger-color);
    background: transparent;
  }
  &::after{
    top: var(--hamburger-space);
    width: 60%;
  }
`

export default function Documentation({ title, children }) {
  const toggleMenu = () => {
    document.body.classList.toggle('menu-nav')
  }
  return (
    <>
      <Head>
        <title>{title} - ui pack</title>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#085462" />
        <meta name="msapplication-TileColor" content="#d5f9f9" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="supported-color-schemes" content="light dark" />
        <meta name="description" content="Secondary UI components for frontend libraries like React" />
      </Head>
      <Container>
        <Sidebar />
        <Content>
          <PreHeader>
            <Logo />
            <HamburgerButton onClick={toggleMenu}>
              <VisuallyHidden>Navigation menu</VisuallyHidden>
            </HamburgerButton>
          </PreHeader>
          <Header />
          <Article>
           {children}
          </Article>
        </Content>
      </Container>
    </>
  )
}
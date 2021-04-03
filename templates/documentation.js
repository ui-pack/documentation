import Head from 'next/head'
import styled from 'styled-components'
import Sidebar from '../components/sidebar'
import Header from '../components/header'
import VisuallyHidden from '../components/visually-hidden'
import Link from '../components/link'
import Icon from '../components/icon'
import { Logo } from '../components/brand'
import { InlineSpacer } from '../components/spacer'

const Container = styled.div`
  @media screen and (min-width: 900px) {
    display: flex;
    height: 100vh;
  }
`

const Content = styled.main`
  height: 100vh;
  flex: 1 1 auto;
  transition: transform .5s var(--base-easing);
  overflow: auto;
  .menu-nav &{
    transform: translateX(var(--mobile-nav-offset));
  }
  @media screen and (min-width: 900px){
    .menu-nav &{
      transform: none;
    }
  }
`

const Article = styled.article`
  padding: 25px;
  margin: auto;
  max-width: 1000px;
  > h1, > h2, > h3, > h4, > h5, > h6, > p{
    margin: 12px 0;
  }
  a{
    color: var(--link-color, hsl(var(--base-hue-saturation) 40%));
    &:hover{
      color: var(--link-hover-color, hsl(var(--base-hue-saturation) 34%));
    }
  }
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

const Footer = styled.footer`
  --icon-width: 14;
  --icon-height: 14;
  display: flex;
  justify-content: space-between;
  margin: auto;
  max-width: 1000px;
  padding: 25px 25px 60px;
  @media screen and (min-width: 900px) {
    padding: 25px 50px 60px;
  }
`

const formatDate = dateString => {
  return Intl.DateTimeFormat('en', {
    year: 'numeric',
    day: 'numeric',
    month: 'long',
    timeZone: 'America/Chicago'
  }).format(new Date(dateString))
}

export default function Documentation({
  title,
  sourcePage = "",
  author="",
  lastUpdated = "1965-03-01T00:00Z",
  children
}) {
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
        <meta name="color-scheme" content="light dark" />
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
            <h1>{title}</h1>
            {children}
          </Article>
          <Footer>
            <Link href={`https://github.com/ui-pack/documentation/blob/main/pages/docs/${sourcePage}`} rel="noopener noreferrer" target="_blank">
            Edit this page
            <InlineSpacer axis="horizontal" space="5" />
            <Icon>
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
              <polyline points="15 3 21 3 21 9"></polyline>
              <line x1="10" y1="14" x2="21" y2="3"></line>
            </Icon>
            </Link>
            <span>
              <strong>Last updated: </strong>
              <time dateTime={lastUpdated}>
              {formatDate(lastUpdated)}
              </time>
              {author && ` by ${author}`}
            </span>
          </Footer>
        </Content>
      </Container>
    </>
  )
}
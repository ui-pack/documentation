import { useRouter } from 'next/router'
import styled from 'styled-components'
import _capitalize from 'lodash/capitalize'

const Wrapper = styled.div`
  align-self: stretch;
  width: 400px;
  padding: 50px 80px;
  background: #f9ffff;
  box-shadow: -80px 0 40px 15px rgb(0 0 0/ .03) inset;
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
    </Wrapper>
  )
}
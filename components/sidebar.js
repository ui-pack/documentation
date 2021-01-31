import styled from 'styled-components'

const Wrapper = styled.div`
  align-self: stretch;
  width: 400px;
  padding: 10px;
  background: #f9ffff;
  box-shadow: -80px 0 40px 15px rgb(0 0 0/ .03) inset;
`
export default function Sidebar() {
  return (
    <Wrapper>
      <h1>ui-pack</h1>
      <nav>
        <a href="/docs/infinite-scroll">Infinite Scroll</a>
        <a href="/docs/masonry">Masonry</a>
        <a href="/docs/popover">Popover</a>
      </nav>
    </Wrapper>
  )
}
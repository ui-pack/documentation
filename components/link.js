import styled from 'styled-components'

const Anchor = styled.a`
  display: var(--link-display, inline);
`

export default function Link({ children, ...props }) {
  return (
    <Anchor {...props}>{children}</Anchor>
  )
}
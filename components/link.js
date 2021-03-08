import styled from 'styled-components'

const Anchor = styled.a`
  display: var(--link-display, inline);
  color: var(--link-color, hsl(var(--base-hue-saturation) 40%));
  &:hover{
    color: var(--link-hover-color, hsl(var(--base-hue-saturation) 34%));
  }
`

export default function Link({ children, ...props }) {
  return (
    <Anchor {...props}>{children}</Anchor>
  )
}
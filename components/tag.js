import styled from 'styled-components'

const TagWrapper = styled.span`
  padding: 6px;
  border-radius: 4px;
  background: hsl(0deg 0% 70% / .2);
`

export default function Tag({ children }) {
  return <TagWrapper>{children}</TagWrapper>
}

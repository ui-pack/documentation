import * as React from 'react'
import styled from 'styled-components'

const StackWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: ${({ gap }) => gap};
  /* Safari Hack */
  @media not all and (min-resolution:.001dpcm){
    @supports (-webkit-appearance:none) {
      margin-bottom: ${({ gap }) => `-${gap}`};
      > *{
        padding-bottom: ${({ gap }) => gap};
      }
    }
  }
`

const Stack = React.forwardRef(({
  as: Component = 'div',
  gap = '10px',
  children
}, ref) => (
  <StackWrapper as={Component} ref={ref} gap={gap}>
    {children}
  </StackWrapper>
))

export default Stack

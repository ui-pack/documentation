import React from 'react'
import styled from 'styled-components'

const Btn = styled.button`
  display: var(--button-display, inline);
  background: var(--button-background, none);
  border: var(--button-border, 0);
  outline: var(--button-outline, none);
  opacity: var(--button-opacity, 1);
  cursor: var(--button-cursor, pointer);
`

const Button = React.forwardRef(({
  children,
  ...props
}, ref) => {
  return (
    <Btn ref={ref} {...props}>{children}</Btn>
  )
})

export default Button
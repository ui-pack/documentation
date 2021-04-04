import styled from 'styled-components'
import Icon from './icon'

const Heading = styled.h3`
  --icon-width: 16;
  --icon-height: 16;
  position: relative;
  a{
    position: absolute;
    top: 0;
    left: -20px;
    opacity: .4;
    transition: opacity .2s linear;
  }
  &:hover a{
    opacity: 1;
  }
`

export const h2 = ({ children }) => {
  const id = children.replace(/\s/g, '-').toLowerCase()
  return (
    <Heading id={id} as="h2">
      {children}
      <a aria-hidden="true" href={`#${id}`}>
        <Icon>
          <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
          <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
        </Icon>
      </a>
    </Heading>
  )
}

export const h3 = ({ children }) => {
  const id = children.replace(/\s/g, '-').toLowerCase()
  return (
    <Heading id={id} as="h3">
      {children}
      <a aria-hidden="true" href={`#${id}`}>
        <Icon>
          <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
          <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
        </Icon>
      </a>
    </Heading>
  )
}

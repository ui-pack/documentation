import styled from 'styled-components'
import Icon from './icon'
import { Spacer } from './spacer'

const getColor = ({ type }) => `var(--color-${type})`

const getTitle = (type) => ({
  info: "Note",
  warn: "Warning",
  error: "Caution"
}[type])

const NoteStyle = styled.div`
  position: relative;
  padding: 20px;
  border-radius: var(--base-curve);
  background: ${getColor};
  color: hsl(var(--color-gray-800));
  @media (min-width: 640px) {
    padding: 25px;
  }
  h5{
    text-transform: uppercase;
    font-size: 1.6rem;
  }
`

const Indicator = styled.span`
  position: absolute;
  top: -25px;
  right: 25px;
  display: flex;
  place-items: center;
  width: 50px;
  height: 50px;
  padding: 10px;
  border-radius: 50%;
  border: thick solid var(--base-background-color);
  background: inherit;
`

export default function Note({
  type = "info",
  hideTitle = false,
  children
}) {
  return (
    <>
      <Spacer axis="vertical" space="30" />
      <NoteStyle type={type}>
        <Indicator>
          <Icon>
            {
              type === "info" ? (
                <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
              ) : (
                <>
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="12" y1="16" x2="12" y2="12"></line>
                  <line x1="12" y1="8" x2="12.01" y2="8"></line>
                </>
              )
            }
          </Icon>
        </Indicator>
        {!hideTitle && (
          <>
            <h5>{getTitle(type)}</h5>
            <Spacer axis="vertical" space="10" />
          </>
        )}
        {children}
      </NoteStyle>
      <Spacer axis="vertical" space="20" />
    </>
  )
}

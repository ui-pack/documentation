import styled from 'styled-components'

const Vector = styled.svg`
  display: var(--icon-display, inline-block);
  width: calc(var(--icon-width, 24) * 1px);
  height: calc(var(--icon-height, 24) * 1px);
  vertical-align: var(--icon-verticalAlign, middle);
`

export default function Icon({
  children,
  viewBox = '0 0 24 24',
  fill = 'none',
  stroke = 'currentColor',
  strokeWidth = 2,
  strokeLinecap = 'round',
  strokeLinejoin = 'round',
  style
}) {
  return(
    <Vector
      xmlns="http://www.w3.org/2000/svg"
      viewBox={viewBox}
      fill={fill}
      stroke={stroke}
      strokeWidth={strokeWidth}
      strokeLinecap={strokeLinecap}
      strokeLinejoin={strokeLinejoin}
      style={style}
    >
      {children}
    </Vector>
  )
}

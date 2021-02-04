import styled from 'styled-components'

const Vector = styled.svg`
  display: var(--icon-display, inline-block);
  width: calc(var(--icon-width, 24) * 1px);
  height: calc(var(--icon-height, 24) * 1px);
  vertical-align: var(--icon-verticalAlign, middle);
  fill: var(--icon-fill, none);
  stroke: var(--icon-stroke, currentColor);
  stroke-width: var(--icon-strokeWidth, 2);
  stroke-linecap: var(--icon-linecap, round);
  stroke-linejoin: var(--icon-linejoin, round);
`

export default function Icon({
  children,
  viewBox = '0 0 24 24',
  fill,
  stroke,
  strokeWidth,
  strokeLinecap,
  strokeLinejoin,
  style,
  ...props
}) {
  return(
    <Vector
      xmlns="http://www.w3.org/2000/svg"
      viewBox={viewBox}
      style={{
        '--icon-fill': fill,
        '--icon-stroke': stroke,
        '--icon-strokeWidth': strokeWidth,
        '--icon-linecap': strokeLinecap,
        '--icon-linejoin': strokeLinejoin,
        ...style
      }}
      {...props}
    >
      {children}
    </Vector>
  )
}

import styled from 'styled-components'
import VisuallyHidden from './visually-hidden'

const LogoStyle = styled.h1`
  display: inline-block;
  width: 120px;
  height: 34px;
  margin-left: -5px;
  background-image: url(/ui-pack-named.svg);
  background-size: 100%;
  background-repeat: no-repeat;
  color: var(--base-foreground-color);
  fill: #f00;
`

export const Logo = () => (
  <LogoStyle><VisuallyHidden>ui-pack</VisuallyHidden></LogoStyle>
)
import styled from 'styled-components'
import VisuallyHidden from './visually-hidden'

const LogoStyle = styled.h1`
  display: inline-block;
  width: 120px;
  height: 34px;
  padding-left: 35px;
  margin-left: -5px;
  background-image: url(/ui-pack-named.svg);
  background-size: 100%;
  background-repeat: no-repeat;
  color: var(--base-foreground-color);
  fill: #f00;
  font-size: 2.0rem;
`

export const Logo = () => (
  <LogoStyle>ui-pack</LogoStyle>
)
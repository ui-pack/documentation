import styled from 'styled-components'
import VisuallyHidden from './visually-hidden'

const LogoStyle = styled.h1`
  display: inline-block;
  width: 120px;
  height: 34px;
  padding-left: 30px;
  margin-left: -5px;
  background-image: url(/ui-pack.svg);
  background-size: 26px;
  background-position: left bottom;
  background-repeat: no-repeat;
  color: #1f6e7c;
  fill: #f00;
  font-size: 2.6rem;
  line-height: 1.8;
  text-transform: uppercase;
  span{
    font-weight: 300;
  }
`

export const Logo = () => (
  <LogoStyle><span>ui</span>pack</LogoStyle>
)
import styled from 'styled-components'

const Toggle = styled.form`
  --toggle-bg: 189deg 98%;
  --easing: 0.76, 0, 0.24, 1;
  position: relative;
  width: 50px;
  height: 30px;
  padding: 3px 5px;
  border: solid thin hsl(var(--toggle-bg) 30%);
  border-radius: 30px;
  cursor: pointer;
  overflow: hidden;
  text-align: right;
  label{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    text-indent: 1000px;
    background-color: hsl(var(--toggle-bg) 30%);
    color: transparent;
    cursor: pointer;
  }
  input{
    position: absolute;
    left: -100px;
    &:checked + label{
      background-color: hsl(var(--toggle-bg) 90%);
    }
    &:checked + label + span{
      transform: translateX(-16px);
      background-color: hsl(var(--toggle-bg) 30%);
      &::after{
        opacity: 1;
        transform: scale(1.1);
        background-color: hsl(var(--toggle-bg) 90%);
      }
    }
  }
  span{
    position: relative;
    display: inline-block;
    width: 22px;
    height: 22px;
    background: #fff;
    pointer-events: none;
    border-radius: 50%;
    transition: transform .2s cubic-bezier(var(--easing));
    will-change: transform;
    &::after{
      content: '';
      position: absolute;
      right: -55%;
      width: inherit;
      height: inherit;
      border-radius: inherit;
      background-color: hsl(var(--toggle-bg) 30%);
      opacity: 0;
      transform: scale(0);
      transition: opacity .1s cubic-bezier(var(--easing)), transform .1s cubic-bezier(var(--easing));
      will-change: opacity, transform, background-color;
    }
  }
`

export default function ColorSchemeToggle() {
  const toggleColorScheme = () => {
    console.log('Handle color scheme change')
  }

  return (
    <Toggle>
      <input type="checkbox" id="toggler" onChange={toggleColorScheme} />
      <label htmlFor="toggler" title="Change theme">toggle</label>
      <span />
    </Toggle>
  )
}
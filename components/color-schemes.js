import * as React from 'react'
import Head from 'next/head'
import styled from 'styled-components'

const Toggle = styled.form`
  --toggle-bg: var(--base-hue-saturation);
  --easing: 0.76, 0, 0.24, 1;
  position: relative;
  width: 50px;
  height: 30px;
  padding: 3px 5px;
  border: solid thin hsl(var(--toggle-bg) 30%);
  border-radius: 30px;
  background-color: hsl(var(--toggle-bg) 30%);
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
    border-radius: 30px;
  }
  input{
    position: absolute;
    left: -100px;
    z-index: -10;
    opacity: 0;
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
    background: var(--base-background-color);
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

const w = typeof window !== 'undefined' ? window : {
  matchMedia: () => ({matches: false}),
  localStorage: {
    setItem: () => null,
    getItem: () => null
  }
}

export default function ColorSchemeToggle() {
  const matchMedia = w.matchMedia('(prefers-color-scheme: dark)')
  const storedTheme = w.localStorage.getItem('color-scheme')
  const isDark = storedTheme === 'dark'
  const [check, setCheck] = React.useState(() => {
    return storedTheme ? isDark : matchMedia.matches
  })

  const toggleColorScheme = event => {
    const { target: { checked } } = event
    setCheck(checked)
    document.documentElement.classList.toggle('dark', !check)
    w.localStorage.setItem('color-scheme', checked ? 'dark' : 'light')
  }

  React.useEffect(() => {
    const toggleHandler = event => {
      document.documentElement.classList.toggle('dark', event.matches)
      w.localStorage.removeItem('color-scheme')
      setCheck(event.matches)
    }

    matchMedia.addListener(toggleHandler)
    return () => {
      matchMedia.removeListener(toggleHandler)
    }
  }, [matchMedia])

  return (
    <>
      <Head>
        <script dangerouslySetInnerHTML={{ __html: `
          const themePref = window.localStorage.getItem('color-scheme')
          const themeDefault = window.matchMedia('(prefers-color-scheme: dark)')
          document.documentElement.classList.add('ui-pack')
          if (themePref || themeDefault) {
            document.documentElement.classList.toggle('dark', themePref ? themePref === 'dark' : themeDefault.matches)
          }
        ` }} />
      </Head>
      <Toggle>
        <input type="checkbox" id="toggler" defaultChecked={check} onInput={toggleColorScheme} />
        <label htmlFor="toggler" title="Change theme">toggle</label>
        <span />
      </Toggle>
    </>
  )
}
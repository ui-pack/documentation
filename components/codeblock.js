import * as React from 'react'
import Highlight, { defaultProps } from 'prism-react-renderer'
import theme from "prism-react-renderer/themes/nightOwl";
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live'
import { mdx } from '@mdx-js/react'
import styled, { css } from 'styled-components'
import Masonry from '@ui-pack/react/masonry'

const Tab = styled.button`
  padding: 1.2rem 2rem;
  border: 0;
  background: none;
  color: hsl(var(--color-gray-50));
  font: var(--base-font);
  font-size: 1.4rem;
  outline: none;
  cursor: pointer;
  ${({ active }) => active && css`
    background: rgb(1 22 39);
  `}
`

const Image = styled.img`
  display: block;
  width: 100%;
  border-radius: 4px;
`

const scope = {
  mdx,
  Masonry,
  Image
}

export default function code({children, className = '', live, render, tabs}) {
  const language = className.replace(/language-/, '')
  const [activeIndex, setActiveIndex] = React.useState(0)

  if (tabs) {
    const tabTriggers = tabs.replace(/('|")/g, '').split('|')
    const tabPanels = children.split('--')
    return (
      <Highlight {...defaultProps} code={tabPanels[activeIndex].trim()} language={language} theme={theme}>
        {({className, style, tokens, getLineProps, getTokenProps}) => (
          <div style={{ background: 'rgb(1 22 39)', borderRadius: 'var(--base-curve)', overflow: 'hidden' }} role="tablist">
            <div style={{ background: 'rgb(255 255 255 / .03)' }}>
            {
              tabTriggers.map((trigger, key) => (
                <Tab
                  key={trigger}
                  active={activeIndex === key}
                  aria-selected={activeIndex === key}
                  onClick={() => setActiveIndex(key)}
                  role="tab"
                >
                {trigger}
                </Tab>
              ))
            }
            </div>
          <pre
            className={className}
            role="tabpanel"
            style={{
              ...style,
              padding: '20px',
              overflow: 'auto',
              fontSize: '1.6rem'
            }}
          >
            {tokens.map((line, i) => (
              <div key={i} {...getLineProps({line, key: i})}>
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({token, key})} />
                ))}
              </div>
            ))}
          </pre>
          </div>
        )}
      </Highlight>
    )
  }

  if (live) {
    return (
      <div style={{ borderRadius: 'var(--base-curve)', overflow: 'hidden' }}>
        <LiveProvider
          code={children.trim()}
          theme={theme}
          disabled
          transformCode={code => code}
          scope={scope}
        >
          <LivePreview
            style={{
              borderRadius: 'var(--base-curve) var(--base-curve) 0 0',
              padding: '20px',
              border: 'solid thin var(--base-border-color)',
              borderBottom: 0
            }}
          />
          <LiveEditor
            style={{
              borderRadius: '0 0 var(--base-curve) var(--base-curve)',
              padding: '10px',
              fontSize: '1.6rem'
            }}
          />
          <LiveError />
        </LiveProvider>
      </div>
    )
  }

  if (render) {
    return (
      <div>
        <LiveProvider code={children}>
          <LivePreview
            style={{
              borderRadius: 'var(--base-curve) var(--base-curve) 0 0',
              padding: '20px',
              border: 'solid thin var(--base-border-color)',
            }}
          />
        </LiveProvider>
      </div>
    )
  }

  return (
    <Highlight {...defaultProps} code={children.trim()} language={language} theme={theme}>
      {({className, style, tokens, getLineProps, getTokenProps}) => (
        <pre className={className} style={{
          ...style,
          padding: '20px',
          borderRadius: 'var(--base-curve)',
          overflow: 'auto',
          fontSize: '1.6rem'
        }}>
          {tokens.map((line, i) => (
            <div key={i} {...getLineProps({line, key: i})}>
              {line.map((token, key) => (
                <span key={key} {...getTokenProps({token, key})} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  )
}
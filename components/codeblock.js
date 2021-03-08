import Highlight, { defaultProps } from 'prism-react-renderer'
import theme from "prism-react-renderer/themes/nightOwl";
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live'
import { mdx } from '@mdx-js/react'
import styled from 'styled-components'
// import * as fs from 'fs';
// import { transformSync } from '@babel/core'
import Masonry from '@ui-pack/react/masonry'

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

export default function code({children, className = '', live, render}) {
  const language = className.replace(/language-/, '')

  if (live) {
    return (
      <div style={{ borderRadius: 'var(--base-curve)', overflow: 'hidden' }}>
        <LiveProvider
          code={children.trim()}
          theme={theme}
          disabled
          transformCode={code => {
            // const transformed = transformSync(code, {
            //   plugins: [
            //     require('@babel/plugin-syntax-jsx')
            //   ]
            // }).code
            // return transformed
            return code
          }}
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
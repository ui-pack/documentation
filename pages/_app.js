import * as React from 'react'
import Head from 'next/head'
import { MDXProvider } from '@mdx-js/react'
import GlobalStyle from '../styles/globals'
import ThirdPartyStyle from '../styles/third-party'
import code from '../components/codeblock'
import { h2, h3 } from '../components/typography'

const components = {
  code,
  h2,
  h3,
}

function MyApp({ Component, pageProps }) {
  React.useEffect(() => {
    const searchInputSelector = '#docsearch'
    if(window.docsearch && document.querySelector(searchInputSelector)) {
      window.docsearch({
        container: searchInputSelector,
        indexName: 'ui-pack',
        apiKey: '0a50a26d063f09be4c897bb988dd46a9'
      })
    }
  }, [])
  return (
    <MDXProvider components={components}>
      <Head>
        <link rel="stylesheet" href="https://unpkg.com/@docsearch/css" />
        <script src="https://unpkg.com/@docsearch/js"></script>
      </Head>
      <GlobalStyle />
      <ThirdPartyStyle />
      <Component {...pageProps} />
    </MDXProvider>
  )
}

export default MyApp

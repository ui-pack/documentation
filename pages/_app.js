import { useEffect } from 'react'
import { MDXProvider } from '@mdx-js/react'
import docsearch from '@docsearch/js'
import GlobalStyle from '../styles/globals'
import code from '../components/codeblock'

const components = {
  code
}

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    const searchInputSelector = '#searchInput'
    if(document.querySelector(searchInputSelector)) {
      docsearch({
        container: searchInputSelector,
        indexName: 'ui-pack',
        apiKey: '0a50a26d063f09be4c897bb988dd46a9'
      })
    }
  }, [])
  return (
    <MDXProvider components={components}>
      <GlobalStyle />
      <Component {...pageProps} />
    </MDXProvider>
  )
}

export default MyApp

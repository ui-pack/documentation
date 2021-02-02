import { MDXProvider } from '@mdx-js/react'
import GlobalStyle from '../styles/globals'
import code from '../components/codeblock'

const components = {
  code
}

function MyApp({ Component, pageProps }) {
  return (
    <MDXProvider components={components}>
      <GlobalStyle />
      <Component {...pageProps} />
    </MDXProvider>
  )
}

export default MyApp

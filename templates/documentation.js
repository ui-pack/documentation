import Head from 'next/head'
import styled from 'styled-components'
import Sidebar from '../components/sidebar'
import Header from '../components/header'

const Container = styled.div`
  display: flex;
  height: 100vh;
`

const Content = styled.div`
  flex: 1 1 auto;
`

const Main = styled.main`
  padding: 50px;
`

export default function Documentation({ title, children }) {
  return (
    <>
      <Head>
        <title>{title} - ui pack</title>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#085462" />
        <meta name="msapplication-TileColor" content="#d5f9f9" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="supported-color-schemes" content="light dark" />
      </Head>
      <Container>
        <Sidebar />
        <Content>
          <Header />
          <Main>
           {children}
          </Main>
        </Content>
      </Container>
    </>
  )
}
import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <Head>
        <title>ui pack - secondary ui components</title>
      </Head>
      <h1>Welcome to ui-pack</h1>
      <ul>
        <li><a href="/docs/infinite-scroll">Infinite Scroll</a></li>
        <li><a href="/docs/masonry">Masonry</a></li>
        <li><a href="/docs/popover">Popover</a></li>
      </ul>
    </div>
  )
}

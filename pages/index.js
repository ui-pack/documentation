import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          <a href="/">ui-pack</a>
        </h1>
        <h4>The frontend components that did not make it to your component library</h4>

        <h2 className={styles.head2}>Components</h2>
        <div className={styles.grid}>
          <a href="https://github.com/ui-pack/react/tree/main/masonry" className={styles.card}>
            <h3>Masonry &rarr;</h3>
            <p>Display images with uneven dimensions nicely in a grid.</p>
          </a>

          <a href="https://github.com/ui-pack/react/tree/main/infinite-scroll" className={styles.card}>
            <h3>Infinite Scroll &rarr;</h3>
            <p>Scroll multiple pages with no friction and extra interactions.</p>
          </a>

          <a
            href="https://codesandbox.io/s/flamboyant-sun-jyd1d?file=/src/App.js"
            className={styles.card}
          >
            <h3>Popover &rarr;</h3>
            <p>Accessible and responsive popover component</p>
          </a>

          <a
            href="#"
            className={styles.card}
          >
            <h3>NativeDialog &rarr;</h3>
            <p>
              Dialog popups that matches the native dialog on your OS.
            </p>
          </a>
        </div>
      </main>
    </div>
  )
}

import Head from 'next/head';
import Header from '../src/Header/Header';
import styles from '../styles/Main.module.css';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.Main}>
        <Header />
      </main>
    </div>
  )
}

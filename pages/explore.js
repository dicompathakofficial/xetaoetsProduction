import Head from 'next/head';
import Header from '../src/Header/Header';
import styles from '../styles/Main.module.css';

export default function explore() {
    return (
        <div>
            <Head>
                <title>Create Next App</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.Main}>
                <div className={styles.MainScreen}>
                    <Header page="Doctor"/>
                </div>
            </main>
        </div>
    )
}

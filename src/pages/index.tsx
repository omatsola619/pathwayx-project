import Head from 'next/head'
import Image from 'next/image'
// import { Inter } from 'next/font/google'
import styles from 'styles/Home.module.css'
import HomeComp from 'components/HomeComp'

export default function Home() {
  return (
    <>
      <Head>
        <title>PathWayX</title>
        <meta name="description" content="PathwayX tech roadmap app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.wrapper}>
       <HomeComp />
      </main>
    </>
  )
}

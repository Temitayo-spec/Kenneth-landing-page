import Head from "next/head";
import styles from "../styles/Home.module.css";
import Navbar from "../components/Navbar"
import Banner from "../components/Banner";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Kenneth Landing Page</title>
        <meta name="description" content="A landing page for farm products" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Navbar />
        <Banner />
      </main>
    </div>
  );
}

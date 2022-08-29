import "../styles/globals.css";
import Head from "next/head";
import { motion } from "framer-motion";

function MyApp({ Component, pageProps, router }) {
  return (
    <>
      <Head>
        <title>Kenneth Landing Page</title>
        <meta name="description" content="A landing page for farm products" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <motion.div
        key={router.route}
        initial={{ opacity: 0.4, transform: "scale(0.9)" }}
        animate={{ opacity: 1, transform: "scale(1)" }}
      >
        <Component {...pageProps} />
      </motion.div>
    </>
  );
}

export default MyApp;

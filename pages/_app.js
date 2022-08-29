import "../styles/globals.css";
import { motion } from "framer-motion";

function MyApp({ Component, pageProps, router }) {
  return (
    <motion.div
      key={router.route}
      initial={{ opacity: 0.4, transform: "scale(0.9)" }}
      animate={{ opacity: 1, transform: "scale(1)" }}
    >
      <Component {...pageProps} />
    </motion.div>
  );
}

export default MyApp;

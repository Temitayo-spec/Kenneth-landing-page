/* eslint-disable @next/next/no-img-element */
import React from "react";
import styles from "../styles/Donate-banner.module.css";
import { motion } from "framer-motion";

const DonateBanner = () => {
  return (
    <div className={styles.wrapper}>
      <motion.h1
        initial={{ transform: "translateX(50px)", opacity: 0 }}
        animate={{ transform: "translateX(0px)", opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Together, we can <br /> make the future <br /> of agriculture <br />{" "}
        better.
      </motion.h1>
      <div className={styles.img__ctn}>
        <motion.img
          initial={{ transform: "translateX(-50px)", opacity: 0 }}
          animate={{ transform: "translateX(0px)", opacity: 1 }}
          transition={{ duration: 1 }}
          src="/images/donate-illustration.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default DonateBanner;

import React from "react";
import { motion } from "framer-motion";
import styles from "../styles/Stats.module.css";

const Stats = () => {
  const imageAnimate = {
    offscreen: {
      opacity: 0,
      scale: 0,
      transition: {
        type: "bounce",
        bounce: 0.4,
        ease: "easeIn",
        duration: 1,
      },
    },
    onscreen: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "bounce",
        bounce: 0.4,
        ease: "easeOut",
        duration: 1,
      },
    },
  };
  return (
    <div className={styles.wrapper}>
      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        transition={{ staggerChildren: 0.5 }}
        className={styles.inner}>
        <motion.div
          variants={imageAnimate}
          className={styles.stats}>
          <h1>413</h1>
          <p>Projects</p>
        </motion.div>
        <motion.div
          variants={imageAnimate}
          className={styles.stats}>
          <h1>2144</h1>
          <p>Customers</p>
        </motion.div>
        <motion.div
          variants={imageAnimate}
          className={styles.stats}>
          <h1>140</h1>
          <p>Award</p>
        </motion.div>
        <motion.div
          variants={imageAnimate}
          className={styles.stats}>
          <h1>143</h1>
          <p>Products</p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Stats;

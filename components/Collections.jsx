/* eslint-disable @next/next/no-img-element */
import React from "react";
import { motion } from "framer-motion";
import styles from "../styles/Collections.module.css";

const Collections = () => {
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

  const containerVariants = {
    offscreen: {
      opacity: 0,
      x: -100,
      transition: {
        type: "tween",
        bounce: 0.4,
        ease: "easeIn",
        duration: 1,
      },
    },
    onscreen: {
      opacity: 1,
      x: 0,
      transition: {
        type: "tween",
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
        className={styles.inner}
      >
        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          transition={{ staggerChildren: 0.2 }}
          variants={containerVariants}
          className={styles.top}
        >
          <motion.img
            variants={imageAnimate}
            src="/images/collection_cow.png"
            className={styles.cow}
            alt=""
          />
          <motion.img
            variants={imageAnimate}
            src="/images/collection_egg.png"
            alt=""
          />
        </motion.div>
        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          transition={{ staggerChildren: 0.2 }}
          variants={containerVariants}
          className={styles.middle}
        >
          <motion.img
            variants={imageAnimate}
            src="/images/collection_wheat.png"
            alt=""
          />
          <motion.img
            variants={imageAnimate}
            src="/images/collection_farmland.png"
            alt=""
          />
        </motion.div>
        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          transition={{ staggerChildren: 0.2 }}
          variants={containerVariants}
          className={styles.bottom}
        >
          <motion.img
            variants={imageAnimate}
            src="/images/collection_long.png"
            alt=""
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Collections;

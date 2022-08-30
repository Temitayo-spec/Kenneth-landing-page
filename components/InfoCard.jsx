/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import styles from "../styles/Infocard.module.css";

const InfoCard = () => {

  const imageAnimate = {
    offscreen: {
      opacity: 0,
      x: -100,      
    },
    onscreen: {
      opacity: 1,
      x: 0,
      rotate: [0, 90, -90, 0],
      transition: {
        type: "spring",
        bounce: 0.4,
        ease: [0.175, 0.885, 0.32, 1.275],
        duration: 1,
      },
    },
  }

  const textVariants = {
    offscreen: {
      opacity: 0,
      y: -100,
      transition: {
        type: "tween",
        bounce: 0.4,
        ease: "easeIn",
        duration: 1,
      },
    },
    onscreen: {
      opacity: 1,
      y: 0,
      transition: {
        type: "tween",
        bounce: 0.4,
        ease: "easeOut",
        duration: 1,
      },
    },
  };

  const cardVariants = {
    offscreen: {
      y: -100,
      transition: {
        type: "tween",
        ease: "easeIn",
        duration: 1,
      },
    },
    onscreen: {
      y: 0,
      transition: {
        type: "tween",
        ease: "easeOut",
        duration: 1,
      },
    },
  };
  return (
    <div className={styles.wrapper}>
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ staggerChildren: 0.5 }}
        className={styles.inner}
      >
        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ staggerChildren: 0.5 }}
          variants={cardVariants}
          className={styles.card__one}
        >
          <img
            src="/images/info-img.png"
            alt="image"
            className={styles.card__one__image}
          />
          <div className={styles.rhs__content}>
            <motion.p variants={textVariants}>
              At Kenneth’s Hybrid Foundation we only ensure the harvestation of
              quality produce as we understand the major role agriculture plays
              in our lives.
            </motion.p>

            <motion.button variants={textVariants} className={styles.btn}>
              View Products
            </motion.button>
          </div>
        </motion.div>

        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          variants={cardVariants}
          className={styles.flex__right}
        >
          <motion.div
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ staggerChildren: 1 }}
            variants={cardVariants}
            className={styles.card__two}
          >
            <motion.img
              variants={imageAnimate}
              src="/svgs/outline.svg"
              alt="image"
            />

            <motion.h1 variants={textVariants}>4130</motion.h1>
            <motion.p variants={textVariants}>
              Fresh Produce Since <br /> 2012.
            </motion.p>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default InfoCard;

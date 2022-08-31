/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import { motion } from "framer-motion";
import React from "react";
import styles from "../styles/Offer.module.css";

const Offer = () => {
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
        <motion.header
          initial="offscreen"
          whileInView="onscreen"
          transition={{ staggerChildren: 0.5 }}
          className={styles.header}
        >
          <motion.h4 variants={textVariants}>Services</motion.h4>
          <motion.div
            variants={containerVariants}
            className={styles.lemon__ctn}
          >
            <Image
              src="/svgs/ic-lemon.svg"
              width={30}
              height={30}
              alt="lemon"
            />
            <Image
              src="/svgs/ic-lemon.svg"
              width={30}
              height={30}
              alt="lemon"
            />
            <Image
              src="/svgs/ic-lemon.svg"
              width={30}
              height={30}
              alt="lemon"
            />
          </motion.div>
          <motion.h1 variants={textVariants}>What We Offer</motion.h1>
        </motion.header>
        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          transition={{ staggerChildren: 0.5 }}
          className={styles.card__ctn}
        >
          <motion.div
            initial="offscreen"
            whileInView="onscreen"
            transition={{ staggerChildren: 0.5 }}
            variants={containerVariants}
            className={styles.card}
          >
            <motion.h1 variants={textVariants} className={styles.card__num}>
              01
            </motion.h1>
            <motion.div
              initial="offscreen"
              whileInView="onscreen"
              transition={{ staggerChildren: 0.5 }}
              className={styles.card__text}
            >
              <motion.h3 variants={textVariants}>Fruits</motion.h3>
              <motion.p variants={textVariants}>
                Through the nation our fruits are known to be top quality, We
                are known to produce only the best of fruits.
              </motion.p>
            </motion.div>
          </motion.div>
          <motion.div
            initial="offscreen"
            whileInView="onscreen"
            transition={{ staggerChildren: 0.5 }}
            variants={imageAnimate}
            className={styles.card}
          >
            <motion.h1 variants={textVariants} className={styles.card__num}>
              02
            </motion.h1>
            <motion.div
              initial="offscreen"
              whileInView="onscreen"
              transition={{ staggerChildren: 0.5 }}
              className={styles.card__text}
            >
              <motion.h3 variants={textVariants}>Crops</motion.h3>
              <p>
                With careful cultivation and regular weeding and aslo
                application of fine agricutlural methods, our crops are the
                best.
              </p>
            </motion.div>
          </motion.div>
          <motion.div
            initial="offscreen"
            whileInView="onscreen"
            transition={{ staggerChildren: 0.5 }}
            variants={containerVariants}
            className={styles.card}
          >
            <motion.h1 variants={textVariants} className={styles.card__num}>
              03
            </motion.h1>
            <motion.div
              initial="offscreen"
              whileInView="onscreen"
              transition={{ staggerChildren: 0.5 }}
              className={styles.card__text}
            >
              <motion.h3 variants={textVariants}>Cattle</motion.h3>
              <motion.p variants={textVariants}>
                Our cattle farm houses the best of breeds found in the nation.
                Serveral of our customers can attest to the fact.
              </motion.p>
            </motion.div>
          </motion.div>
          <motion.div
            initial="offscreen"
            whileInView="onscreen"
            transition={{ staggerChildren: 0.5 }}
            variants={imageAnimate}
            className={styles.card}
          >
            <motion.h1 variants={textVariants} className={styles.card__num}>
              04
            </motion.h1>
            <motion.div
              initial="offscreen"
              whileInView="onscreen"
              transition={{ staggerChildren: 0.5 }}
              className={styles.card__text}
            >
              <motion.h3 variants={textVariants}>Diary Products</motion.h3>
              <motion.p variants={textVariants}>
                Well bred animals will always produce excellent by products and
                as such our diary products are of top quality.
              </motion.p>
            </motion.div>
          </motion.div>
          <motion.div
            initial="offscreen"
            whileInView="onscreen"
            transition={{ staggerChildren: 0.5 }}
            variants={containerVariants}
            className={styles.card}
          >
            <motion.h1 variants={textVariants} className={styles.card__num}>
              05
            </motion.h1>
            <motion.div
              initial="offscreen"
              whileInView="onscreen"
              transition={{ staggerChildren: 0.5 }}
              className={styles.card__text}
            >
              <motion.h3 variants={textVariants}>Poultry</motion.h3>
              <motion.p variants={textVariants}>
                With world class poultry breeding programs we are known to
                produce the best of poultry products.
              </motion.p>
            </motion.div>
          </motion.div>
          <motion.div
            initial="offscreen"
            whileInView="onscreen"
            transition={{ staggerChildren: 0.5 }}
            variants={imageAnimate}
            className={styles.card}
          >
            <motion.h1 variants={textVariants} className={styles.card__num}>
              06
            </motion.h1>
            <motion.div
              initial="offscreen"
              whileInView="onscreen"
              transition={{ staggerChildren: 0.5 }}
              className={styles.card__text}
            >
              <motion.h3 variants={textVariants}>Flowers</motion.h3>
              <motion.p variants={textVariants}>
                We are known for the best horticultural practices and methods in
                the land. We produce the best of flowers.
              </motion.p>
            </motion.div>
          </motion.div>
        </motion.div>
        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          transition={{ staggerChildren: 0.5 }}
          className={styles.large__img__ctn}
        >
          <motion.img
            variants={imageAnimate}
            src="/images/tour-bg.png"
            className={styles.large__img}
            alt=""
          />
          <div className={styles.absolute}>
            <Image
              src="/svgs/ic-play-yellow.svg"
              alt="yellow play icon"
              height={120}
              width={120}
            />
            <h1>A Tour of Our Facilities</h1>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Offer;

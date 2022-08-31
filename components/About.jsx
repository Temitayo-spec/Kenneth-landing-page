/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import styles from "../styles/About.module.css";

const About = () => {
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
  };

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

  const bannerVariants = {
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
        initial="offscreen"
        whileInView="onscreen"
        transition={{ staggerChildren: 0.5 }}
        className={styles.about__inner}
      >
        <div
          initial="offscreen"
          whileInView="onscreen"
          transition={{ staggerChildren: 0.5 }}
          className={styles.about__banner}
        >
          <motion.img
            variants={bannerVariants}
            src="/images/about-banner.png"
            alt="about_banner"
            className={styles.main__img}
          />

          <div className={styles.absolute__ctn}>
            <img
              src="/images/about-crops.png"
              alt=""
              className={styles.absolute__first}
            />
            <img
              src="/images/ellipse-two.png"
              alt=""
              className={styles.absolute__second}
            />
            <img
              src="/images/right-ellipse.png"
              alt=""
              className={styles.absolute__third}
            />
          </div>
        </div>

        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          transition={{ staggerChildren: 0.5 }}
          className={styles.about__content}
        >
          <motion.h4
            initial="offscreen"
            animate="onscreen"
            variants={textVariants}
          >
            ABOUT
          </motion.h4>
          <header>
            <Image
              src="/svgs/ic-lemon.svg"
              width={20}
              height={20}
              alt="lemon"
            />
            <Image
              src="/svgs/ic-lemon.svg"
              width={20}
              height={20}
              alt="lemon"
            />
            <Image
              src="/svgs/ic-lemon.svg"
              width={20}
              height={20}
              alt="lemon"
            />
          </header>
          <motion.h1 variants={textVariants}>Who We Are</motion.h1>
          <motion.p variants={textVariants}>
            For decades we have dedicated ourselves to the production of quality
            produce. We are known around the country for the excellent servces
            we always offer to our customers, the countless recomendations from
            satisfied customers. All these attest to the fact that we are the
            best for your farm produce needs. Here is a bit of our numbers since
            2012.
          </motion.p>

          <motion.div
            initial="offscreen"
            whileInView="onscreen"
            transition={{ staggerChildren: 0.5 }}
            className={styles.stats__ctn}
          >
            <motion.div
              initial="offscreen"
              whileInView="onscreen"
              transition={{ staggerChildren: 0.5 }}
              className={styles.stats}
            >
              <motion.img
                variants={imageAnimate}
                src="/svgs/about-outline.svg"
                width={128}
                height={128}
                alt="fresh_produce"
              />
              <motion.h1 variants={textVariants}>4130</motion.h1>
              <motion.p variants={textVariants}>Fresh Produce</motion.p>
            </motion.div>
            <motion.div
              initial="offscreen"
              whileInView="onscreen"
              transition={{ staggerChildren: 0.5 }}
              className={styles.stats}
            >
              <motion.img
                variants={imageAnimate}
                src="/svgs/about-animals.svg"
                width={128}
                height={128}
                alt="diary_cow"
              />
              <motion.h1 variants={textVariants}>13000</motion.h1>
              <motion.p variants={textVariants}>Farm Animals</motion.p>
            </motion.div>
          </motion.div>

          <motion.div
            initial="offscreen"
            whileInView="onscreen"
            transition={{ staggerChildren: 0.5 }}
            className={styles.learn__more}
          >
            <motion.img
              variants={imageAnimate}
              src="/images/about-small.png"
              alt="about_banner"
              className={styles.small__img}
            />
            <motion.div className={styles.texts}>
              <motion.p variants={textVariants}>
                You can learn more about our mission statement and our goals for
                the agricultural sector here.
              </motion.p>
              <motion.button variants={textVariants} type="button">
                Learn More
              </motion.button>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default About;

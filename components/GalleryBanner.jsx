/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import styles from "../styles/Gallery-banner.module.css";

const GalleryBanner = () => {
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
  return (
    <div className={styles.wrapper}>
      <>
        <motion.div
          initial={{ opacity: 0.7 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className={styles.bg__img}
        >
          <img src="/images/gallery-banner.png" alt="play_img" />
        </motion.div>
      </>

      <div className={styles.inner}>
        <main className={styles.main}>
          <div className={styles.lhs}>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.2 }}
            >
              <motion.h1
                initial={{ opacity: 0, translateX: -50 }}
                whileInView={{ opacity: 1, translateX: 0 }}
                transition={{ duration: 1.3 }}
              >
                Take a walk through <br /> our gallery of our farm <br /> and
                our pens for our <br /> animals
                <span>.</span>
              </motion.h1>
            </motion.div>
            <motion.div
              inittial="offscreen"
              whileInView="onscreen"
              transition={{ staggerChildren: 0.5 }}
              className={styles.learn__ctn}
            >
              <motion.button
                variants={textVariants}
                type="button"
                className={styles.learn__more}
              >
                Learn More
              </motion.button>
              <motion.div variants={textVariants} className={styles.watch__ctn}>
                <span>
                  <Image
                    src="/svgs/ic-play.svg"
                    alt="play_img"
                    width={60}
                    height={60}
                  />
                </span>
                <p>Watch Video</p>
              </motion.div>
            </motion.div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default GalleryBanner;

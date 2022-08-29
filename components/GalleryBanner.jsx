/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import styles from "../styles/Gallery-banner.module.css";

const GalleryBanner = () => {
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
                initial={{ opacity: 0, translateY: -50 }}
                animate={{ opacity: 1, translateY: 0 }}
                transition={{ duration: 1 }}
              >
                Take a walk through <br /> our gallery of our farm <br /> and
                our pens for our <br /> animals
                <span>.</span>
              </motion.h1>
            </motion.div>
            <div className={styles.learn__ctn}>
              <button type="button" className={styles.learn__more}>
                Learn More
              </button>
              <div className={styles.watch__ctn}>
                <span>
                  <Image
                    src="/svgs/ic-play.svg"
                    alt="play_img"
                    width={60}
                    height={60}
                  />
                </span>
                <p>Watch Video</p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default GalleryBanner;

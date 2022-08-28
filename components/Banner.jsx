/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import React, { useEffect, useState } from "react";
import styles from "../styles/Banner.module.css";
import { Fade } from "react-slideshow-image";
import { motion } from "framer-motion";
import "react-slideshow-image/dist/styles.css";

const Banner = () => {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const images = [
    "/images/banner-bg.png",
    "/images/banner-bg2.png",
    "/images/banner-bg3.png",
  ];

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const properties = {
    duration: 8000,
    transitionDuration: 2000,
    infinite: true,
    arrows: false,
  };

  const [imageIndex, setImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setImageIndex((imageIndex + 1) % images.length);
    }, properties.duration + 1000);
    return () => clearInterval(interval);
  }, [images, properties, imageIndex]);

  return (
    <div className={styles.wrapper}>
      <Fade {...properties}>
        {images.map((image, index) => (
          <div key={index} className={styles.bg__img}>
            <img src={image} alt="play_img" />
          </div>
        ))}
      </Fade>

      <div className={styles.inner}>
        <main className={styles.main}>
          <div className={styles.lhs}>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              {imageIndex === 0 && (
                <motion.h1
                  initial={{ opacity: 0, translateY: -50 }}
                  animate={{ opacity: 1, translateY: 0 }}
                  transition={{ duration: 1 }}
                >
                  At Kenneth’s Hybrid <br /> Foundation, we only <br /> yield
                  the best of <br /> produce
                  <span>.</span>
                </motion.h1>
              )}
              {imageIndex === 1 && (
                <motion.h1
                  initial={{ opacity: 0, translateY: 50 }}
                  animate={{ opacity: 1, translateY: 0 }}
                  transition={{ duration: 1 }}
                >
                  As we have proven over <br /> the years, we are <br />
                  determined to <br /> revolutionize <br /> agriculture
                  <span>.</span>
                </motion.h1>
              )}
              {imageIndex === 2 && (
                <motion.h1
                  initial={{ opacity: 0, translateX: -50 }}
                  animate={{ opacity: 1, translateX: 0 }}
                  transition={{ duration: 1 }}
                >
                  We have completely <br /> changed the services <br /> rendered
                  by agriculture. <br /> We offer the best of <br /> services
                  and products<span>.</span>
                </motion.h1>
              )}
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
          <div className={styles.rhs}>
            <div
              className={`${styles.numbering} ${
                imageIndex === 0 && styles.active
              }`}
            >
              01
            </div>
            <div
              className={`${styles.numbering} ${
                imageIndex === 1 && styles.active
              }`}
            >
              02
            </div>
            <div
              className={`${styles.numbering} ${
                imageIndex === 2 && styles.active
              }`}
            >
              03
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Banner;

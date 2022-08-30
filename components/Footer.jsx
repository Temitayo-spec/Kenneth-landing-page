import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import styles from "../styles/Footer.module.css";

const Footer = () => {
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

  return (
    <div className={styles.wrapper}>
      <div className={styles.inner}>
        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          transition={{ staggerChildren: 0.5 }}
          className={styles.footer__logo}
        >
          <motion.img
            variants={imageAnimate}
            src="/svgs/logo-img.svg"
            alt="logo_image"
            className={styles.logo__img}
            width={100}
            height={100}
          />
          <motion.h1 variants={textVariants}>
            Kenneth&apos;s <br />
            <span>
              Hybrid <br /> Foundation
            </span>
          </motion.h1>
          <motion.p variants={textVariants}>
            Kenneth’s Hybrid Foundation promises the best of agricultural
            produce and quality livestock.
          </motion.p>
          <motion.div variants={textVariants} className={styles.icon__ctn}>
            {/* <div className={styles.icons}>
              <Image
                src="/svgs/ic-facebook-white.svg"
                alt="facebook_icon"
                width={17}
                height={17}
              />
            </div> */}
            <div className={styles.icons}>
              <Image
                src="/svgs/ic-linkedIn-white.svg"
                alt="linkedIn_icon"
                width={17}
                height={17}
              />
            </div>
            <div className={styles.icons}>
              <Image
                src="/svgs/ic-instagram-white.svg"
                alt="instagram_icon"
                width={17}
                height={17}
              />
            </div>
            <div className={styles.icons}>
              <Image
                src="/svgs/ic-twitter-white.svg"
                alt="twitter_icon"
                width={17}
                height={17}
              />
            </div>
          </motion.div>
        </motion.div>
        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          transition={{ staggerChildren: 0.5 }}
          className={styles.company}
        >
          <motion.h1 variants={textVariants}>Company</motion.h1>
          <motion.div
            initial="offscreen"
            whileInView="onscreen"
            transition={{ staggerChildren: 0.5 }}
            className={styles.lists}
          >
            <motion.div variants={textVariants} className={styles.link}>
              <span>
                <Image
                  src="/svgs/ic-arrow-white.svg"
                  alt="arrow_white"
                  width={11}
                  height={11}
                />
              </span>
              <Link href="#">
                <a>About Us</a>
              </Link>
            </motion.div>
            <motion.div variants={textVariants} className={styles.link}>
              <span>
                <Image
                  src="/svgs/ic-arrow-white.svg"
                  alt="arrow_white"
                  width={11}
                  height={11}
                />
              </span>
              <Link href="#">
                <a>Mission Statement</a>
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          transition={{ staggerChildren: 0.5 }}
          className={styles.services__ctn}
        >
          <motion.h1 variants={textVariants}>Services</motion.h1>
          <motion.div
            initial="offscreen"
            whileInView="onscreen"
            transition={{ staggerChildren: 0.5 }}
            className={styles.lists}
          >
            <motion.div variants={textVariants} className={styles.link}>
              <span>
                <Image
                  src="/svgs/ic-arrow-white.svg"
                  alt="arrow_white"
                  width={11}
                  height={11}
                />
              </span>
              <Link href="#">
                <a>Crops and Fruits</a>
              </Link>
            </motion.div>
            <motion.div variants={textVariants} className={styles.link}>
              <span>
                <Image
                  src="/svgs/ic-arrow-white.svg"
                  alt="arrow_white"
                  width={11}
                  height={11}
                />
              </span>
              <Link href="#">
                <a>Livestock</a>
              </Link>
            </motion.div>
            <motion.div variants={textVariants} className={styles.link}>
              <span>
                <Image
                  src="/svgs/ic-arrow-white.svg"
                  alt="arrow_white"
                  width={11}
                  height={11}
                />
              </span>
              <Link href="#">
                <a>Poultry</a>
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          transition={{ staggerChildren: 0.5 }}
          className={styles.contact__ctn}
        >
          <motion.h1 variants={textVariants}>Contact</motion.h1>
          <motion.div
            initial="offscreen"
            whileInView="onscreen"
            transition={{ staggerChildren: 0.5 }}
            className={styles.lists}
          >
            <motion.div variants={textVariants} className={styles.link}>
              <span>
                <Image
                  src="/svgs/ic-arrow-white.svg"
                  alt="arrow_white"
                  width={11}
                  height={11}
                />
              </span>
              <Link href="#">
                <a>FAQ</a>
              </Link>
            </motion.div>
            <motion.div variants={textVariants} className={styles.link}>
              <span>
                <Image
                  src="/svgs/ic-arrow-white.svg"
                  alt="arrow_white"
                  width={11}
                  height={11}
                />
              </span>
              <Link href="#">
                <a>Support</a>
              </Link>
            </motion.div>
            <motion.div variants={textVariants} className={styles.link}>
              <span>
                <Image
                  src="/svgs/ic-arrow-white.svg"
                  alt="arrow_white"
                  width={11}
                  height={11}
                />
              </span>
              <Link href="#">
                <a>Privacy Policy</a>
              </Link>
            </motion.div>
            <motion.div variants={textVariants} className={styles.link}>
              <span>
                <Image
                  src="/svgs/ic-arrow-white.svg"
                  alt="arrow_white"
                  width={11}
                  height={11}
                />
              </span>
              <Link href="#">
                <a>Terms and Conditions</a>
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Footer;

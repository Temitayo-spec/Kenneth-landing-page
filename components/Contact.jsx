/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import styles from "../styles/Contact.module.css";

const Contact = () => {
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
      <div className={styles.inner}>
        <motion.header
          initial="offscreen"
          whileInView="onscreen"
          transition={{ staggerChildren: 0.5 }}
          className={styles.header}
        >
          <motion.h4 variants={textVariants}>Contact us</motion.h4>
          <div className={styles.lemon__ctn}>
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
          </div>
          <motion.h1 variants={textVariants}>
            We Want To Hear From You
          </motion.h1>
        </motion.header>
        <section className={styles.contact__ctn}>
          <motion.div
            initial="offscreen"
            whileInView="onscreen"
            transition={{ staggerChildren: 0.5 }}
            className={styles.lhs}
          >
            <motion.h1 variants={textVariants}>Get In Touch With Us</motion.h1>
            <motion.div variants={textVariants} className={styles.icon__ctn}>
              {/* <div className={styles.icons}>
                  <Image
                    src="/svgs/ic-facebook.svg"
                    alt="facebook_icon"
                    width={17}
                    height={17}
                  />
                </div> */}
              <div className={styles.icons}>
                <Image
                  src="/svgs/ic-instagram.svg"
                  alt="instagram_icon"
                  width={17}
                  height={17}
                />
              </div>
              <div className={styles.icons}>
                <Image
                  src="/svgs/ic-twitter.svg"
                  alt="twitter_icon"
                  width={17}
                  height={17}
                />
              </div>
              <div className={styles.icons}>
                <Image
                  src="/svgs/ic-linkedIn.svg"
                  alt="linkedIn_icon"
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
            className={styles.rhs}
          >
            <motion.form
              initial="offscreen"
              whileInView="onscreen"
              transition={{ staggerChildren: 0.5 }}
              action="POST"
              className={styles.form}
            >
              <motion.header
                initial="offscreen"
                whileInView="onscreen"
                transition={{ staggerChildren: 0.5 }}
              >
                <motion.h1 variants={textVariants}>Send A Message</motion.h1>
                <motion.p variants={textVariants}>
                  We will respond in no time at all.
                </motion.p>
              </motion.header>

              <motion.div
                initial="offscreen"
                whileInView="onscreen"
                transition={{ staggerChildren: 0.5 }}
                className={styles.inputs__ctn}
              >
                <motion.input
                  variants={textVariants}
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Name*"
                />
                <motion.input
                  variants={textVariants}
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email*"
                />
                <motion.textarea
                  variants={textVariants}
                  name="message"
                  id="message"
                  cols="30"
                  rows="10"
                  placeholder="Message"
                ></motion.textarea>

                <motion.button variants={textVariants} type="submit">
                  Send A Message
                </motion.button>
              </motion.div>
            </motion.form>
          </motion.div>
        </section>
      </div>
    </div>
  );
};

export default Contact;

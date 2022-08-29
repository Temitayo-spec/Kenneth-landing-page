import Image from "next/image";
import React from "react";
import { Bounce, Fade, Slide } from "react-awesome-reveal";
import { motion } from "framer-motion";
import styles from "../styles/Donate-form.module.css";

const DonateForm = () => {
  const props = {
    type: "spring",
    stiffness: 100,
    damping: 15,
  };
  return (
    <div className={styles.wrapper}>
      <div className={styles.inner}>
        <Slide direction="right">
          <h1>Choose an amount</h1>
        </Slide>
        <div className={styles.buttons__ctn}>
          <Slide cascade direction="top" triggerOnce>
            <button type="button">
              <span>
                <Image
                  src="/svgs/ic-naira.svg"
                  height={16}
                  width={20}
                  alt="naira_symbol"
                />
              </span>
              1000
            </button>
            <button type="button">
              <span>
                <Image
                  src="/svgs/ic-naira.svg"
                  height={16}
                  width={20}
                  alt="naira_symbol"
                />
              </span>
              2000
            </button>
            <button type="button">
              <span>
                <Image
                  src="/svgs/ic-naira.svg"
                  height={16}
                  width={20}
                  alt="naira_symbol"
                />
              </span>
              3000
            </button>
            <button type="button">
              <span>
                <Image
                  src="/svgs/ic-naira.svg"
                  height={16}
                  width={20}
                  alt="naira_symbol"
                />
              </span>
              4000
            </button>
          </Slide>
        </div>
        <Slide left>
          <h2>OR</h2>
        </Slide>
        <form action="POST" className={styles.form}>
          <div className={styles.top__layer}>
            <Fade cascade direction="top">
              <motion.div
                initial={{
                  y: -100,
                  opacity: 0,
                  scale: 0.5,
                  transition: {
                    y: props,
                    opacity: props,
                    scale: props,
                    duration: 1,
                  },
                }}
                animate={{
                  y: 0,
                  opacity: 1,
                  scale: 1,
                  transition: {
                    y: props,
                    opacity: props,
                    scale: props,
                    duration: 1,
                  },
                }}
                className={styles.amount}
              >
                <label htmlFor="amount">Amount*</label>
                <input type="text" id="amount" placeholder="Enter Amount" />
              </motion.div>
              <motion.div
                initial={{
                  y: -100,
                  opacity: 0,
                  scale: 0.5,
                  transition: {
                    y: props,
                    opacity: props,
                    scale: props,
                    duration: 1,
                  },
                }}
                animate={{
                  y: 0,
                  opacity: 1,
                  scale: 1,
                  transition: {
                    y: props,
                    opacity: props,
                    scale: props,
                    duration: 1,
                  },
                }}
                className={styles.amount}
              >
                <label htmlFor="name">Name*</label>
                <input type="text" id="name" placeholder="Name on Card" />
              </motion.div>
              <motion.div
                initial={{
                  y: -100,
                  opacity: 0,
                  scale: 0.5,
                  transition: {
                    y: props,
                    opacity: props,
                    scale: props,
                    duration: 1,
                  },
                }}
                animate={{
                  y: 0,
                  opacity: 1,
                  scale: 1,
                  transition: {
                    y: props,
                    opacity: props,
                    scale: props,
                    duration: 1,
                  },
                }}
                className={styles.amount}
              >
                <label htmlFor="number">Number*</label>
                <input type="text" id="number" placeholder="Card Number" />
              </motion.div>
            </Fade>
          </div>
          <div className={styles.bottom__layer}>
            <motion.div
              initial={{
                y: -100,
                opacity: 0,
                scale: 0.5,
                transition: {
                  y: props,
                  opacity: props,
                  scale: props,
                  duration: 1,
                },
              }}
              animate={{
                y: 0,
                opacity: 1,
                scale: 1,
                transition: {
                  y: props,
                  opacity: props,
                  scale: props,
                  duration: 1,
                },
              }}
              className={styles.amount}
            >
              <label htmlFor="cvc">CVC*</label>
              <input type="text" id="cvc" placeholder="CVC" />
            </motion.div>
            <motion.div
              initial={{
                y: -100,
                opacity: 0,
                scale: 0.5,
                transition: {
                  y: props,
                  opacity: props,
                  scale: props,
                  duration: 1,
                },
              }}
              animate={{
                y: 0,
                opacity: 1,
                scale: 1,
                transition: {
                  y: props,
                  opacity: props,
                  scale: props,
                  duration: 1,
                },
              }}
              className={styles.amount}
            >
              <label htmlFor="date">Exp Date</label>
              <input type="text" id="date" placeholder="MM/YY" />
            </motion.div>
            <motion.div
              initial={{
                y: -100,
                opacity: 0,
                scale: 0.5,
                transition: {
                  y: props,
                  opacity: props,
                  scale: props,
                  duration: 1,
                },
              }}
              animate={{
                y: 0,
                opacity: 1,
                scale: 1,
                transition: {
                  y: props,
                  opacity: props,
                  scale: props,
                  duration: 1,
                },
              }}
              className={styles.amount}
            >
              <label htmlFor="number">Postal code</label>
              <input type="text" id="number" placeholder="Zip Code" />
            </motion.div>
          </div>
          <button type="submit">Donate</button>
        </form>
      </div>
    </div>
  );
};

export default DonateForm;

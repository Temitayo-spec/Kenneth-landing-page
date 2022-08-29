/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import React from "react";
import styles from "../styles/Contact.module.css";

const Contact = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.inner}>
        <header className={styles.header}>
          <h4>Contact us</h4>
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
          <h1>We Want To Hear From You</h1>
        </header>
        <section className={styles.contact__ctn}>
          <div className={styles.lhs}>
            <h1>Get In Touch With Us</h1>
            <div className={styles.icon__ctn}>
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
            </div>
          </div>
          <div className={styles.rhs}>
            <form action="POST" className={styles.form}>
              <header>
                <h1>Send A Message</h1>
                <p>We will respond in no time at all.</p>
              </header>

              <div className={styles.inputs__ctn}>
                <input type="text" name="name" id="name" placeholder="Name*" />
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email*"
                />
                <textarea
                  name="message"
                  id="message"
                  cols="30"
                  rows="10"
                  placeholder="Message"
                ></textarea>

                <button type="submit">Send A Message</button>
              </div>
            </form>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact;

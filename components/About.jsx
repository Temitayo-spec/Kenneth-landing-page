/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import React from "react";
import styles from "../styles/About.module.css";

const About = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.about__inner}>
        <div className={styles.about__banner}>
          <img
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

        <div className={styles.about__content}>
          <h4>ABOUT</h4>
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
          <h1>Who We Are</h1>
          <p>
            For decades we have dedicated ourselves to the production of quality
            produce. We are known around the country for the excellent servces
            we always offer to our customers, the countless recomendations from
            satisfied customers. All these attest to the fact that we are the
            best for your farm produce needs. Here is a bit of our numbers since
            2012.
          </p>

          <div className={styles.stats__ctn}>
            <div className={styles.stats}>
              <Image
                src="/svgs/about-outline.svg"
                width={128}
                height={128}
                alt="fresh_produce"
              />
              <h1>4130</h1>
              <p>Fresh Produce</p>
            </div>
            <div className={styles.stats}>
              <Image
                src="/svgs/about-animals.svg"
                width={128}
                height={128}
                alt="diary_cow"
              />
              <h1>13000</h1>
              <p>Farm Animals</p>
            </div>
          </div>

          <div className={styles.learn__more}>
            <img
              src="/images/about-small.png"
              alt="about_banner"
              className={styles.small__img}
            />
            <div className={styles.texts}>
              <p>
                You can learn more about our mission statement and our goals for
                the agricultural sector here.
              </p>
              <button type="button">Learn More</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

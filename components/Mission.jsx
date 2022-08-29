/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import React from "react";
import styles from "../styles/Mission.module.css";

const Mission = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.inner}>
        <header className={styles.header}>
          <div className={styles.vision__ctn}>
            <h4>Vision</h4>
            <header>
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
            </header>
            <h1>Our Vision</h1>
            <p>
              To create a link for the access of improved breeds of various farm
              animals and crops unhindered to local farmers and to ensure the
              increase in bounty production, job and food security to the globe
              for strong reliability in agriculture.
            </p>
          </div>
          <div className={styles.vision__ctn}>
            <h4>Mission</h4>
            <header>
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
            </header>
            <h1>Our Mission</h1>
            <p>
              We are set on coordinating the desire for the support of many like
              minded to ensure better yields in agriculture with ease for the
              locals through the proper channels to reach this goal.
            </p>
          </div>
        </header>
        <div className={styles.large__img__ctn}>
          <img
            src="/images/future-img.png"
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
            <h1>The Future Of Agriculture</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mission;

/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import React from "react";
import styles from "../styles/Services.module.css";

const Services = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.inner}>
        <header className={styles.header}>
          <h4>Services</h4>
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
          <h1>What We Offer</h1>
        </header>

        <section className={styles.card__ctn}>
          <div className={styles.card}>
            <div className={styles.card__text}>
              <h3>Fresh Crops & Fruits</h3>
              <p>
                Our fruits underego top notch processing to yield the nationwide
                quality it has.
              </p>
            </div>
            <div className={styles.card__img}>
              <img src="/images/fruits.png" alt="fruits" />
              <img
                src="/svgs/ic-arrow-right.svg"
                alt="arrow-right"
                width={75}
                height={75}
                className={styles.arrow__right}
              />
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.card__text}>
              <h3>Quality Livestock</h3>
              <p>
                Nation wide we are known for the production of healthy
                livestock.
              </p>
            </div>
            <div className={styles.card__img}>
              <img src="/images/fruits.png" alt="fruits" />
              <img
                src="/svgs/ic-arrow-right.svg"
                alt="arrow-right"
                width={75}
                height={75}
                className={styles.arrow__right}
              />
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.card__text}>
              <h3>Quality Poultry</h3>
              <p>
                Our poultry farms are top notch in areas of hygiene and
                products.
              </p>
            </div>
            <div className={styles.card__img}>
              <img src="/images/fruits.png" alt="fruits" />
              <img
                src="/svgs/ic-arrow-right.svg"
                alt="arrow-right"
                width={75}
                height={75}
                className={styles.arrow__right}
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Services;

/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import React from "react";
import styles from "../styles/Offer.module.css";

const Offer = () => {
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
        <div className={styles.card__ctn}>
          <div className={styles.card}>
            <h1 className={styles.card__num}>01</h1>
            <div className={styles.card__text}>
              <h3>Fruits</h3>
              <p>
                Through the nation our fruits are known to be top quality, We
                are known to produce only the best of fruits.
              </p>
            </div>
          </div>
          <div className={styles.card}>
            <h1 className={styles.card__num}>02</h1>
            <div className={styles.card__text}>
              <h3>Crops</h3>
              <p>
                With careful cultivation and regular weeding and aslo
                application of fine agricutlural methods, our crops are the
                best.
              </p>
            </div>
          </div>
          <div className={styles.card}>
            <h1 className={styles.card__num}>03</h1>
            <div className={styles.card__text}>
              <h3>Cattle</h3>
              <p>
                Our cattle farm houses the best of breeds found in the nation.
                Serveral of our customers can attest to the fact.
              </p>
            </div>
          </div>
          <div className={styles.card}>
            <h1 className={styles.card__num}>04</h1>
            <div className={styles.card__text}>
              <h3>Diary Products</h3>
              <p>
                Well bred animals will always produce excellent by products and
                as such our diary products are of top quality.
              </p>
            </div>
          </div>
          <div className={styles.card}>
            <h1 className={styles.card__num}>05</h1>
            <div className={styles.card__text}>
              <h3>Poultry</h3>
              <p>
                With world class poultry breeding programs we are known to
                produce the best of poultry products.
              </p>
            </div>
          </div>
          <div className={styles.card}>
            <h1 className={styles.card__num}>06</h1>
            <div className={styles.card__text}>
              <h3>Flowers</h3>
              <p>
                We are known for the best horticultural practices and methods in
                the land. We produce the best of flowers.
              </p>
            </div>
          </div>
        </div>
        <div className={styles.large__img__ctn}>
          <img src="/images/tour-bg.png" className={styles.large__img} alt="" />
          <div className={styles.absolute}>
            <Image
              src="/svgs/ic-play-yellow.svg"
              alt="yellow play icon"
              height={120}
              width={120}
            />
            <h1>A Tour of Our Facilities</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offer;

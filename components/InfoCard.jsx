/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import React from "react";
import styles from "../styles/Infocard.module.css";

const InfoCard = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.inner}>
        <div className={styles.card__one}>
          <img
            src="/images/info-img.png"
            alt="image"
            className={styles.card__one__image}
          />
          <div className={styles.rhs__content}>
            <p>
              At Kenneth’s Hybrid Foundation we only ensure the harvestation of
              quality produce as we understand the major role agriculture plays
              in our lives.
            </p>

            <button className={styles.btn}>View Products</button>
          </div>
        </div>

        <div className={styles.flex__right}>
          <div className={styles.card__two}>
            <Image src="/svgs/outline.svg" alt="image" width={90} height={90} />

            <h1>4130</h1>
            <p>
              Fresh Produce Since <br /> 2012.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;

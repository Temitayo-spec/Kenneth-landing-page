/* eslint-disable @next/next/no-img-element */
import React from "react";
import styles from "../styles/Collections.module.css";

const Collections = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.inner}>
        <div className={styles.top}>
          <img src="/images/collection_cow.png" className={styles.cow} alt="" />
          <img src="/images/collection_egg.png" alt="" />
        </div>
        <div className={styles.middle}>
          <img src="/images/collection_wheat.png" alt="" />
          <img src="/images/collection_farmland.png" alt="" />
        </div>
        <div className={styles.bottom}>
          <img src="/images/collection_long.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Collections;

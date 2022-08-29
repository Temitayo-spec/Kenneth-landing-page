/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import React from "react";
import styles from "../styles/Gallery.module.css";

const Gallery = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.inner}>
        <header className={styles.header}>
          <h4>Gallery</h4>
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
          <h1>View Our Farm</h1>
        </header>

        <div className={styles.grid__ctn}>
          <div className={styles.img__top}>
            <img src="/images/tractor-img.png" alt="" />
            <img
              src="/images/germination-img.png"
              className={styles.right}
              alt=""
            />
          </div>
          <div className={styles.img__bottom}>
            <img
              src="/images/little-flower.png"
              className={styles.right}
              alt=""
            />
            <img src="/images/view-more.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;

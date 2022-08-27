import Image from "next/image";
import React from "react";
import styles from "../styles/Banner.module.css";

const Banner = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.bg__img}>
        {/* <Image src="/images/banner-bg.png" alt="play_img" layout="intrinsic" width={500} height={500} priority /> */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/images/banner-bg.png" alt="image" />
      </div>
      <div className={styles.inner}>
        <main className={styles.main}>
          <div className={styles.lhs}>
            <h1>
              At Kenneth’s Hybrid <br /> Foundation, we only <br /> yield the
              best of <br /> produce
              <span>.</span>
            </h1>
            <div className={styles.learn__ctn}>
              <button type="button" className={styles.learn__more}>
                Learn More
              </button>
              <div className={styles.watch__ctn}>
                <span>
                  <Image
                    src="/svgs/ic-play.svg"
                    alt="play_img"
                    width={60}
                    height={60}
                  />
                </span>
                <p>Watch Video</p>
              </div>
            </div>
          </div>
          <div className={styles.rhs}>
            <div className={`${styles.numbering} ${styles.active}`}>01</div>
            <div className={styles.numbering}>02</div>
            <div className={styles.numbering}>03</div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Banner;

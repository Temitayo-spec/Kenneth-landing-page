import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.inner}>
        <div className={styles.footer__logo}>
          <Image
            src="/svgs/logo-img.svg"
            alt="logo_image"
            className={styles.logo__img}
            width={100}
            height={100}
          />
          <h1>
            Kenneth&apos;s <br />
            <span>
              Hybrid <br /> Foundation
            </span>
          </h1>
          <p>
            Kenneth’s Hybrid Foundation promises the best of agricultural
            produce and quality livestock.
          </p>
          <div className={styles.icon__ctn}>
            {/* <div className={styles.icons}>
              <Image
                src="/svgs/ic-facebook-white.svg"
                alt="facebook_icon"
                width={17}
                height={17}
              />
            </div> */}
            <div className={styles.icons}>
              <Image
                src="/svgs/ic-linkedIn-white.svg"
                alt="linkedIn_icon"
                width={17}
                height={17}
              />
            </div>
            <div className={styles.icons}>
              <Image
                src="/svgs/ic-instagram-white.svg"
                alt="instagram_icon"
                width={17}
                height={17}
              />
            </div>
            <div className={styles.icons}>
              <Image
                src="/svgs/ic-twitter-white.svg"
                alt="twitter_icon"
                width={17}
                height={17}
              />
            </div>
          </div>
        </div>
        <div className={styles.company}>
          <h1>Company</h1>
          <div className={styles.lists}>
            <div className={styles.link}>
              <span>
                <Image
                  src="/svgs/ic-arrow-white.svg"
                  alt="arrow_white"
                  width={11}
                  height={11}
                />
              </span>
              <Link href="#">
                <a>About Us</a>
              </Link>
            </div>
            <div className={styles.link}>
              <span>
                <Image
                  src="/svgs/ic-arrow-white.svg"
                  alt="arrow_white"
                  width={11}
                  height={11}
                />
              </span>
              <Link href="#">
                <a>Mission Statement</a>
              </Link>
            </div>
          </div>
        </div>

        <div className={styles.services__ctn}>
          <h1>Services</h1>
          <div className={styles.lists}>
            <div className={styles.link}>
              <span>
                <Image
                  src="/svgs/ic-arrow-white.svg"
                  alt="arrow_white"
                  width={11}
                  height={11}
                />
              </span>
              <Link href="#">
                <a>Crops and Fruits</a>
              </Link>
            </div>
            <div className={styles.link}>
              <span>
                <Image
                  src="/svgs/ic-arrow-white.svg"
                  alt="arrow_white"
                  width={11}
                  height={11}
                />
              </span>
              <Link href="#">
                <a>Livestock</a>
              </Link>
            </div>
            <div className={styles.link}>
              <span>
                <Image
                  src="/svgs/ic-arrow-white.svg"
                  alt="arrow_white"
                  width={11}
                  height={11}
                />
              </span>
              <Link href="#">
                <a>Poultry</a>
              </Link>
            </div>
          </div>
        </div>

        <div className={styles.contact__ctn}>
          <h1>Contact</h1>
          <div className={styles.lists}>
            <div className={styles.link}>
              <span>
                <Image
                  src="/svgs/ic-arrow-white.svg"
                  alt="arrow_white"
                  width={11}
                  height={11}
                />
              </span>
              <Link href="#">
                <a>FAQ</a>
              </Link>
            </div>
            <div className={styles.link}>
              <span>
                <Image
                  src="/svgs/ic-arrow-white.svg"
                  alt="arrow_white"
                  width={11}
                  height={11}
                />
              </span>
              <Link href="#">
                <a>Support</a>
              </Link>
            </div>
            <div className={styles.link}>
              <span>
                <Image
                  src="/svgs/ic-arrow-white.svg"
                  alt="arrow_white"
                  width={11}
                  height={11}
                />
              </span>
              <Link href="#">
                <a>Privacy Policy</a>
              </Link>
            </div>
            <div className={styles.link}>
              <span>
                <Image
                  src="/svgs/ic-arrow-white.svg"
                  alt="arrow_white"
                  width={11}
                  height={11}
                />
              </span>
              <Link href="#">
                <a>Terms and Conditions</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

import React from "react";
import styles from "../styles/Navbar.module.css";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.inner}>
        <div className={styles.logo__ctn}>
          <span>
            <Image
              src="/svgs/logo-img.svg"
              alt="logo_image"
              className={styles.logo__img}
              width={100}
              height={100}
            />
          </span>
          <span>
            <Image
              src="/svgs/logo-text.svg"
              alt="logo_text"
              className={styles.logo__text}
              width={100}
              height={100}
            />
          </span>
        </div>

        <div className={styles.nav__content}>
          <div className={styles.top}>
            <div className={styles.contact__details}>
              <div className={styles.contact__icon}>
                <span>
                  <Image
                    src="/svgs/ic-contact.svg"
                    alt="contact_icon"
                    width={20}
                    height={20}
                  />
                </span>
                helpkennethhf.gmail.com
              </div>
              <div className={styles.contact__icon}>
                <span>
                  <Image
                    src="/svgs/ic-dial.svg"
                    alt="contact_icon"
                    width={20}
                    height={20}
                  />
                </span>
                +222-234-0413
              </div>
            </div>
            <div className={styles.icon__ctn}>
              <div className={styles.icons}>
                <Image
                  src="/svgs/ic-facebook.svg"
                  alt="facebook_icon"
                  width={17}
                  height={17}
                />
              </div>
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
          <div className={styles.bottom}>
            <ul className={styles.links__ctn}>
              <li className={styles.links}>Home</li>
              <li className={styles.links}>About</li>
              <li className={styles.links}>Services</li>
              <li className={styles.links}>Gallery</li>
              <li className={styles.links}>Contact</li>
              <button type="button" className={styles.donate}>
                Donate
              </button>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

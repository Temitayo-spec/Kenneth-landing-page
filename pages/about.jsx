import React from "react";
import styles from "../styles/About-page.module.css";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import AboutLite from "../components/AboutLite";
import Mission from "../components/Mission";

const about = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.inner}>
        <Navbar />
        <Banner />
        <div className={styles.about__inner}>
          <AboutLite />
          <Mission />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default about;

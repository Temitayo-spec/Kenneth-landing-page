/* eslint-disable @next/next/no-img-element */
import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Contact from "../components/Contact";
import styles from "../styles/Contact-page.module.css"

const contact = () => {
  return (
    <div className={styles.wrapper}>
      <Navbar />
      <img src="/images/contact-banner.png" className={styles.banner} alt="" />
      <Contact />
      <Footer />
    </div>
  );
};

export default contact;

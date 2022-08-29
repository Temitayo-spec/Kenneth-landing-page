import React from "react";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import styles from "../styles/Gallery-page.module.css";
import GalleryBanner from "../components/GalleryBanner";
import Collections from "../components/Collections";

const gallery = () => {
  return (
    <div className={styles.wrapper}>
      <Navbar />
      <GalleryBanner />
      <Collections />
      <Footer />
    </div>
  );
};

export default gallery;

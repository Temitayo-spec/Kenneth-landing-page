import React from "react";
import styles from "../styles/Stats.module.css";

const Stats = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.inner}>
        <div className={styles.stats}>
          <h1>413</h1>
          <p>Projects</p>
        </div>
        <div className={styles.stats}>
          <h1>2144</h1>
          <p>Customers</p>
        </div>
        <div className={styles.stats}>
          <h1>140</h1>
          <p>Award</p>
        </div>
        <div className={styles.stats}>
          <h1>143</h1>
          <p>Products</p>
        </div>
      </div>
    </div>
  );
};

export default Stats;

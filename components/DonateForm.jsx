import Image from "next/image";
import React from "react";
import styles from "../styles/Donate-form.module.css";

const DonateForm = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.inner}>
        <h1>Choose an amount</h1>
        <div className={styles.buttons__ctn}>
          <button type="button">
            <span>
              <Image
                src="/svgs/ic-naira.svg"
                height={16}
                width={20}
                alt="naira_symbol"
              />
            </span>
            1000
          </button>
          <button type="button">
            <span>
              <Image
                src="/svgs/ic-naira.svg"
                height={16}
                width={20}
                alt="naira_symbol"
              />
            </span>
            2000
          </button>
          <button type="button">
            <span>
              <Image
                src="/svgs/ic-naira.svg"
                height={16}
                width={20}
                alt="naira_symbol"
              />
            </span>
            3000
          </button>
          <button type="button">
            <span>
              <Image
                src="/svgs/ic-naira.svg"
                height={16}
                width={20}
                alt="naira_symbol"
              />
            </span>
            4000
          </button>
        </div>
        <h2>OR</h2>
        <form action="POST" className={styles.form}>
          <div className={styles.top__layer}>
            <div className={styles.amount}>
              <label htmlFor="amount">Amount*</label>
              <input type="text" id="amount" placeholder="Enter Amount" />
            </div>
            <div className={styles.amount}>
              <label htmlFor="name">Name*</label>
              <input type="text" id="name" placeholder="Name on Card" />
            </div>
            <div className={styles.amount}>
              <label htmlFor="number">Number*</label>
              <input type="text" id="number" placeholder="Card Number" />
            </div>
          </div>
          <div className={styles.bottom__layer}>
            <div className={styles.amount}>
              <label htmlFor="cvc">CVC*</label>
              <input type="text" id="cvc" placeholder="CVC" />
            </div>
            <div className={styles.amount}>
              <label htmlFor="date">Exp Date</label>
              <input type="text" id="date" placeholder="MM/YY" />
            </div>
            <div className={styles.amount}>
              <label htmlFor="number">Postal code</label>
              <input type="text" id="number" placeholder="Zip Code" />
            </div>
          </div>
          <button type="submit">Donate</button>
        </form>
      </div>
    </div>
  );
};

export default DonateForm;

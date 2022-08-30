import React, { useEffect } from "react";
import gsap from "gsap";
import styles from "../styles/Preloader.module.css";

const Preloader = () => {
  const ref = React.useRef();
  const percentRef = React.useRef();
  const barRef = React.useRef();
  const innerRef = React.useRef();
  const textRef = React.useRef();
  const headingRef = React.useRef();

  useEffect(() => {
    // calling gsap properly to avoid illegal invocation error with the gsap.to() method

    const tl = gsap.timeline({ defaults: { duration: 1 } });
    tl.fromTo(
      percentRef.current,
      { opacity: 1, zIndex: 1, duration: 2 },
      {
        opacity: 0,
        zIndex: -1,
        duration: 2,
      }
    )
      .to(barRef.current, {
        opacity: 0,
        zIndex: -1,
      })
      .to(innerRef.current, {
        width: "0%",
      })
      .from(
        headingRef.current,
        {
          y: "0%",
        },
        "-=0.5"
      )
      .to(textRef.current, {
        opacity: 1,
        boxShadow: "12px 20px rgba(255, 255, 255, 0.23)",
        skewY: 5,
        y: "10%",
        stagger: {
          amount: 0.4,
        },
      });

    // a setInterval function that will run the frame function every 10 milliseconds
    const interval = setInterval(frame, 10);
    function frame() {
      if (percentRef.current.innerHTML === "100%") {
        clearInterval(interval);
      } else {
        console.log(percentRef.current.innerHTML);
        percentRef.current.innerHTML =
          parseInt(percentRef.current.innerHTML) + 1 + "%";
        ref.current.style.width = parseInt(percentRef.current.innerHTML) + "%";
      }
    }

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className={styles.preloader}>
      <div ref={innerRef} className={styles.preloader__inner}>
        <div ref={percentRef} className={styles.percent}>
          1%
        </div>
        <div ref={barRef} className={styles.bar}>
          <div ref={ref} className={styles.bar__confirm}></div>
        </div>
      </div>
      <div ref={headingRef} className={styles.heading}>
        <h1 ref={textRef}>Kenneth Hybrid Foundation</h1>
      </div>
    </div>
  );
};

export default Preloader;

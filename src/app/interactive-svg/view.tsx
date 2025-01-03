"use client";

import InteractiveSVG from "./InteractiveSVG";
import styles from "./style.module.css";

const AnimationTextView = () => {
  return (
    <div
      className={`flex flex-wrap items-center h-full gap-2 justify-center relative max-h-screen`}
    >
      <div className={`${styles.content} space-x-5`}>
        <span className={styles.span}>Rans</span>
        <span className={styles.span}>Code;</span>
        <span className={styles.span}>Tiktok</span>
        <span className={styles.span}>Youtube</span>
      </div>
      <InteractiveSVG />
    </div>
  );
};

export default AnimationTextView;

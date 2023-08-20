import React from "react";
import { RotatingLines } from "react-loader-spinner";
import styles from "./loader.module.css";

const Loader = () => {
  return (
    <div className={styles.backdrop}>
      <div className={styles.spinner}>
        <RotatingLines
          strokeColor="rgb(255, 100, 100)"
          strokeWidth="5"
          animationDuration="0.75"
          width="96"
        />
      </div>
    </div>
  );
};

export default Loader;

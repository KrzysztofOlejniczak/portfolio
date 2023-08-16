import React from "react";
import { RotatingLines } from "react-loader-spinner";
import css from "./loader.module.css";

const Loader = () => {
  return (
    <div className={css.backdrop}>
      <div className={css.spinner}>
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

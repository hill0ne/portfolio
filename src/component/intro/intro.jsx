import React from "react";
import styles from "./intro.module.css";
import puppy from "../../imgs/puppy.jpg";
import Header from "../header/header";

const Intro = () => {
  return (
    <>
      <Header />
      <div className={styles.container}>
        <p className={styles.welcomeText}>Hi , nice to meet you ! 🖐</p>
        <img src={puppy} className={styles.puppy}></img>
      </div>
    </>
  );
};

export default Intro;

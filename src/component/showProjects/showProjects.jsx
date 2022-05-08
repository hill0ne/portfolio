import React from "react";
import { Link } from "react-router-dom";
import netflix from "../../imgs/netflix.png";
import catchcarrots from "../../imgs/catchcarrots.png";
import habittracker from "../../imgs/habit-tracker.png";
import youtube from "../../imgs/youtube.png";
import styles from "./showProjects.module.css";
import Home from "../common/home";

function ShowProjects(props) {
  return (
    <div>
      <Home />
      <div className={styles.mainWrap}>
        <section className={styles.templateWrap}>
          <div className={styles.template}>
            <Link to="/netflix" className={styles.link}>
              <img src={netflix} className={styles.thumbnail}></img>
              <span className={styles.des}>Netflix UI Project</span>
            </Link>
          </div>
          <div className={styles.template}>
            <Link to="/catchcarrots" className={styles.link}>
              <img src={catchcarrots} className={styles.thumbnail}></img>
              <span className={styles.des}>Catch Carrots Game Project</span>
            </Link>
          </div>
          <div className={styles.template}>
            <Link to="/todolist" className={styles.link}>
              <img src={habittracker} className={styles.thumbnail}></img>
              <span className={styles.des}>Habbit Tracker project</span>
            </Link>
          </div>
          <div className={styles.template}>
            <Link to="/youtube" className={styles.link}>
              <img src={youtube} className={styles.thumbnail}></img>
              <span className={styles.des}>YouTube project</span>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}

export default ShowProjects;

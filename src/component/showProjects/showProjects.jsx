import React from "react";
import { Link } from "react-router-dom";
import netflix from "../../imgs/netflix.png";
import catchcarrots from "../../imgs/catchcarrots.png";
import todoList from "../../imgs/to-do-list.png";
import youtube from "../../imgs/youtube.png";
import styles from "./showProjects.module.css";
import HomeA from "../common/homeA";

const ShowProjects = () => {
  return (
    <div>
      <HomeA />
      <div className={styles.mainWrap}>
        <section className={styles.templateWrap}>
          <div className={styles.template}>
            <Link to="/netflix" className={styles.link}>
              <img src={netflix} className={styles.thumbnail}></img>
              <span className={styles.des}>Netflix UI Project</span>
            </Link>
          </div>
          <div className={styles.template}>
            <Link to="/carrotgame" className={styles.link}>
              <img src={catchcarrots} className={styles.thumbnail}></img>
              <span className={styles.des}>Catch Carrots Game Project</span>
            </Link>
          </div>
          <div className={styles.template}>
            <Link to="/todolist" className={styles.link}>
              <img src={todoList} className={styles.thumbnail}></img>
              <span className={styles.des}>To do List</span>
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
};

export default ShowProjects;

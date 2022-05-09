import React from "react";
import styles from "./homeB.module.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faHouse } from "@fortawesome/free-solid-svg-icons";

const HomeB = () => {
  return (
    <div className={styles.home}>
      <Link to="/projects">
        <FontAwesomeIcon
          icon={faArrowLeft}
          className={styles.arrowLeft}
        ></FontAwesomeIcon>
      </Link>
      <Link to="/">
        <FontAwesomeIcon
          icon={faHouse}
          className={styles.goHome}
        ></FontAwesomeIcon>
      </Link>
    </div>
  );
};

export default HomeB;

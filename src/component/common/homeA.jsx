import React from "react";
import styles from "./homeA.module.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";

const HomeA = () => {
  return (
    <div className={styles.home}>
      <Link to="/">
        <FontAwesomeIcon
          icon={faHouse}
          className={styles.goHome}
        ></FontAwesomeIcon>
      </Link>
    </div>
  );
};

export default HomeA;

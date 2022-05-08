import React from "react";
import styles from "./home.module.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";

const Home = () => {
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

export default Home;

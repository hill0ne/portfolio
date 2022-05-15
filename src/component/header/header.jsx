import React from "react";
import styles from "./header.module.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faHouse } from "@fortawesome/free-solid-svg-icons";

function Header(props) {
  return (
    <>
      <div className={styles.header}>
        <Link to="/about" className={styles.about}>
          About hill0ne
        </Link>
        <FontAwesomeIcon
          icon={faBars}
          className={styles.bars}
        ></FontAwesomeIcon>
        <Link to="/">
          <FontAwesomeIcon
            icon={faHouse}
            className={styles.goHome}
          ></FontAwesomeIcon>
        </Link>
      </div>
    </>
  );
}

export default Header;

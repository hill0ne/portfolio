import React from "react";
import styles from "./header.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

function Header(props) {
  return (
    <>
      <div className={styles.header}>
        <p className={styles.logo}>hill0ne</p>
        <FontAwesomeIcon
          icon={faBars}
          className={styles.bars}
        ></FontAwesomeIcon>
      </div>
    </>
  );
}

export default Header;

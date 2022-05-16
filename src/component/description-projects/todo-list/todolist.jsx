import React from "react";
import styles from "./todoList.module.css";
import Videos from "./videos";
import HomeB from "../../common/homeB";

const Todolist = () => {
  const handleClick = () => {
    window.open("https://github.com/hill0ne/todo-list", "_blank");
  };
  return (
    <>
      <HomeB />
      <div className={styles.header}>To Do List Page</div>
      <Videos />
      <footer className={styles.footer}>
        <div className={styles.buttonWrap}>
          <button className={styles.linkButton} onClick={handleClick}>
            View Github
          </button>
          {/* <button className={styles.linkButton}>Try using</button> */}
        </div>
      </footer>
    </>
  );
};

export default Todolist;

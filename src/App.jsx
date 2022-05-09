import React from "react";
import render from "react-dom";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Intro from "./component/intro/intro";
import About from "./component/about/about";
import ShowProjects from "./component/showProjects/showProjects";
import Netflix from "./component/description-projects/netflix/netflix";
import Todolist from "./component/description-projects/todo-list/todolist";
import CarrotGame from "./component/description-projects/carrotGame/carrotGame";
import Youtube from "./component/description-projects/youtube/youtube";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Intro />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/projects" element={<ShowProjects />}></Route>
        <Route path="/netflix" element={<Netflix />}></Route>
        <Route path="/todolist" element={<Todolist />}></Route>
        <Route path="/carrotgame" element={<CarrotGame />}></Route>
        <Route path="/youtube" element={<Youtube />}></Route>
      </Routes>
    </>
  );
};

export default App;

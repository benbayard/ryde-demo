import React from "react";
import ReactDOM from "react-dom";

import { Header } from "./components/header.jsx";
import { MainPanel } from "./components/main-panel.jsx";


import "./reset.css";
import "./base.css"

const MyComponent = () => {
  return (<div> Hey I'm displaying </div>);
};

const reactMount = document.getElementById("react-anchor");

ReactDOM.render((
  <div>
    <Header userName="Zack"/>
    <MainPanel />
  </div>
), reactMount);

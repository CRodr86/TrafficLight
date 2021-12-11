import React from "react";
import ReactDOM from "react-dom";

//Styles
import "bootstrap";
import "../Styles/index.scss";

//Components
import TrafficLight from "./Component/TrafficLight.jsx";

//Render
ReactDOM.render(<TrafficLight />, document.querySelector("#app"));

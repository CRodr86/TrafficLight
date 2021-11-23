import React, { useState } from "react";
import "../../styles/home.scss";

//create your first component
const Home = () => {
	const [glowLight, setGlowLight] = useState("");
	return (
		<div className="trafficLight">
			<div
				onClick={() => setGlowLight("red")}
				className={"red" + (glowLight === "red" ? " glow" : "")}></div>
			<div
				onClick={() => setGlowLight("yellow")}
				className={
					"yellow" + (glowLight === "yellow" ? " glow" : "")
				}></div>
			<div
				onClick={() => setGlowLight("green")}
				className={
					"green" + (glowLight === "green" ? " glow" : "")
				}></div>
		</div>
	);
};

export default Home;

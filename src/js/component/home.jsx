import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component

const Home = () => {
	const [selectedColor, setSeleectedColor ] = useState();

	return (
		<div className="traffic-light text-center">
			<div onClick={() => setSeleectedColor("glow")}
			className={"light red" + (selectedColor === "red" ? "glow" : "")}></div>
			<div onClick={() => setSeleectedColor("yellow")}
			className={"light yellow" + (selectedColor === "yellow" ? "glow" : "")}></div>
			<div onClick={() => setSeleectedColor("green")}
			className={"light green" + (selectedColor === "green" ? "glow" : "")}></div>
		</div>
	);
};

export default Home;

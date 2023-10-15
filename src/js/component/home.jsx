import React, { useState } from "react";

const Home = () => {
	const [selectedColor, setSeleectedColor] = useState("yellow", "red", "green");

	return (
		<div className="container d-flex text-center mt-5">
			<div className="traffic-light text-center">
				<div onClick={() => setSeleectedColor("red")}
					className={"light red" + ((selectedColor === "red") ? " glow" : "")}></div>
				<div onClick={() => setSeleectedColor("yellow")}
					className={"light yellow" + ((selectedColor === "yellow") ? " glow" : "")}></div>
				<div onClick={() => setSeleectedColor("green")}
					className={"light green" + ((selectedColor === "green") ? " glow" : "")}></div>
			</div>
		</div>
	);
};

export default Home;

import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import { Counter } from "./counter";
//create your first component
export const Home = () => {
	return (
		<div className="text-center mt-5">
			<Counter />
		</div>
	);
};

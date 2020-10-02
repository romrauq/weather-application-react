import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import BarChart from "./Charts/BarChart";
import LineChart from "./Charts/LineChart";
import PieChart from "./Charts/PieChart";

const Graph = (props) => {
	return (
		<div className="graph-component">
			<BarChart
				precipitation={props.precipitation}
				humidity={props.humidity}
				windspeed={props.windspeed}
			/>
			{/* <LineChart
				precipitation={props.precipitation}
				humidity={props.humidity}
				windspeed={props.windspeed}
			/> */}
			{/* <PieChart
				precipitation={props.precipitation}
				humidity={props.humidity}
				windspeed={props.windspeed}
			/> */}
		</div>
	);
};
export default Graph;

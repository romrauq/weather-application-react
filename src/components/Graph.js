import React from "react";
import BarChart from "./Charts/BarChart";
import LineChart from "./Charts/LineChart";
import PieChart from "./Charts/PieChart";

const Graph = (props) => {
	if (props.chart === "bar-chart") {
		return (
			<div className="graph-component">
				<BarChart
					precipitation={props.precipitation}
					humidity={props.humidity}
					windspeed={props.windspeed}
				/>
			</div>
		);
	} else if (props.chart === "line-chart") {
		return (
			<div className="graph-component">
				<LineChart
					precipitation={props.precipitation}
					humidity={props.humidity}
					windspeed={props.windspeed}
				/>
			</div>
		);
	} else if (props.chart === "pie-chart") {
		{
			return (
				<div className="graph-component">
					<PieChart
						precipitation={props.precipitation}
						humidity={props.humidity}
						windspeed={props.windspeed}
					/>
				</div>
			);
		}
	}
};

export default Graph;

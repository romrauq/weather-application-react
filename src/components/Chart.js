import React from "react";
import BarChart from "./Charts/BarChart";
import LineChart from "./Charts/LineChart";
import PieChart from "./Charts/PieChart";

const Chart = (props) => {
	if (props.chart === "bar-chart") {
		return (
			<div className="graph-component">
				<BarChart
					hour={props.hour}
					setTime={props.setTime}
					setAMPM={props.setAMPM}
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
					hour={props.hour}
					setTime={props.setTime}
					setAMPM={props.setAMPM}
					precipitation={props.precipitation}
					humidity={props.humidity}
					windspeed={props.windspeed}
				/>
			</div>
		);
	} else if (props.chart === "pie-chart") {
		return (
			<div className="graph-component">
				<PieChart
					hour={props.hour}
					setTime={props.setTime}
					setAMPM={props.setAMPM}
					precipitation={props.precipitation}
					humidity={props.humidity}
					windspeed={props.windspeed}
				/>
			</div>
		);
	}
};

export default Chart;

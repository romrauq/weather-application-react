import React from "react";
import BarChart from "./Charts/BarChart";
import LineChart from "./Charts/LineChart";
// import PieChart from "./Charts/PieChart";

const component_styles = {
	width: "98%",
	height: "35vh",
	margin: "0px auto",
	border: "solid 1px #808080",
	borderRadius: "5px",
};

const Chart = (props) => {
	// Conditional statement to render different charts:
	if (props.chart === "bar-chart") {
		return (
			<div style={component_styles}>
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
			<div style={component_styles}>
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
	}
};

export default Chart;

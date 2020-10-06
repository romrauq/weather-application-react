import React, { useEffect } from "react";
import Chart from "chart.js";

const PieChart = (props) => {
	useEffect(() => {
		const ctx = document.getElementById("myChart").getContext("2d");
		new Chart(ctx, {
			// Chart type:
			type: "pie",

			// The data for our dataset:
			data: {
				labels: [
					`${props.setTime(props.hour)} ${props.setAMPM(props.hour)}`,
					`${props.setTime(props.hour + 1)} ${props.setAMPM(props.hour + 1)}`,
					`${props.setTime(props.hour + 2)} ${props.setAMPM(props.hour + 2)}`,
					`${props.setTime(props.hour + 3)} ${props.setAMPM(props.hour + 3)}`,
					`${props.setTime(props.hour + 4)} ${props.setAMPM(props.hour + 4)}`,
				],
				datasets: [
					{
						label: "Precipitation",
						backgroundColor: "rgb(50, 205, 150)",
						borderColor: "rgb(50, 205, 150)",
						data: [
							props.precipitation[0],
							props.precipitation[1],
							props.precipitation[2],
							props.precipitation[3],
							props.precipitation[4],
						],
					},
					{
						label: "Humidity",
						backgroundColor: "rgb(150, 250, 50)",
						borderColor: "rgb(150, 250, 50)",
						data: [
							props.humidity[0],
							props.humidity[1],
							props.humidity[2],
							props.humidity[3],
							props.humidity[4],
						],
					},
					{
						label: "Wind Speed",
						backgroundColor: "rgb(250, 0, 0)",
						borderColor: "rgb(250, 0, 0)",
						data: [
							props.windspeed[0],
							props.windspeed[1],
							props.windspeed[2],
							props.windspeed[3],
							props.windspeed[4],
						],
					},
				],
			},

			// Configuration options go here
			options: {},
		});
	});

	return (
		<div className="selected-graph">
			<canvas id="myChart" style={{ width: "100%", height: "100%" }}></canvas>
		</div>
	);
};

export default PieChart;

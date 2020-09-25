import React, { useEffect } from "react";
import Chart from "chart.js";

// Creating a variable which contains the current hour value:
let hour = new Date().getHours();

// Function to set time to 12 hour format:
function setTime(val) {
	if (val === 24) {
		return 12;
	} else if (val > 12) {
		return val % 12;
	} else {
		return val;
	}
}

//Condition to suffix "AM" or "PM" to hour value:
function setAMPM(val) {
	if (val >= 24) {
		return "am";
	} else if (val >= 12) {
		return "pm";
	} else {
		return "am";
	}
}

const Graph = () => {
	useEffect(() => {
		const ctx = document.getElementById("myChart").getContext("2d");
		new Chart(ctx, {
			// Defining chart type:
			type: "bar",

			// The data for our dataset:
			data: {
				labels: [
					`${setTime(hour)} ${setAMPM(hour)}`,
					`${setTime(hour + 1)} ${setAMPM(hour + 1)}`,
					`${setTime(hour + 2)} ${setAMPM(hour + 2)}`,
					`${setTime(hour + 3)} ${setAMPM(hour + 3)}`,
					`${setTime(hour + 4)} ${setAMPM(hour + 4)}`,
				],
				datasets: [
					{
						label: "Precipitation",
						backgroundColor: "skyblue",
						borderColor: "rgb(50, 205, 150)",
						data: [5, 10, 3, 0, 14],
					},
					{
						label: "Humidity",
						backgroundColor: "rgb(50, 190, 150)",
						borderColor: "rgb(150, 250, 50)",
						data: [24, 23, 25, 24, 21],
					},
					{
						label: "Wind Speed",
						backgroundColor: "#777",
						borderColor: "rgb(250, 0, 0)",
						data: [24, 23, 25, 24, 21],
					},
				],
			},

			// Configuration options go here
			options: {},
		});
	});
	return (
		<div className="graph-component">
			<canvas id="myChart" style={{ width: "100%", height: "100%" }}></canvas>
		</div>
	);
};

export default Graph;

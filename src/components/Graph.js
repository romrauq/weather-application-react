import React, { useEffect } from "react";
import Chart from "chart.js";

const Graph = () => {
	useEffect(() => {
		const ctx = document.getElementById("myChart").getContext("2d");
		new Chart(ctx, {
			// The type of chart we want to create
			type: "line",

			// The data for our dataset
			data: {
				labels: [
					"January",
					"February",
					"March",
					"April",
					"May",
					"June",
					"July",
				],
				datasets: [
					{
						label: "Tempetarure dataset",
						backgroundColor: "rgb(50, 205, 50)",
						borderColor: "rgb(50, 205, 50)",
						data: [0, 10, 5, 2, 20, 30, 45],
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

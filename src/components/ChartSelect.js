import React from "react";

const Charts = (props) => {
	return (
		<div className="charts-select-component">
			<div>
				<p className="charts-select-heading">Select a Chart</p>
			</div>
			<div>
				<select className="dropdown-options" onChange={props.selectChart}>
					<option value="bar">Bar Chart</option>
					<option value="line">Line Chart</option>
					<option value="pie">Pie Chart</option>
				</select>
			</div>
		</div>
	);
};

export default Charts;

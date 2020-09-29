import React from "react";

const Charts = () => {
	return (
		<div className="charts-select-component">
			<div>
				<p className="charts-select-heading">Charts</p>
			</div>
			<div>
				<select className="dropdown-options">
					<option value="yesterday">Yesterday</option>
					<option value="last_week">Last Week</option>
					<option value="last_month">Last Month</option>
				</select>
			</div>
		</div>
	);
};

export default Charts;

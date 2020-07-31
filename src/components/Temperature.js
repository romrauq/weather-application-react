import React from "react";

const Temperature = () => {
	return (
		<div className="temperature-component">
			<div>
				<p className="temperature-heading">Temperature</p>
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

export default Temperature;

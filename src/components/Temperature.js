import React from "react";

const Temperature = () => {
	return (
		<div className="d5">
			<div className="d5-1">
				<p className="section-heading">Temperature</p>
			</div>
			<div className="d5-2">
				<select className="options">
					<option className="" value="item-1">
						Yesterday
					</option>
					<option className="" value="item-2">
						Last Week
					</option>
					<option className="" value="item-3">
						Last Month
					</option>
				</select>
			</div>
		</div>
	);
};

export default Temperature;

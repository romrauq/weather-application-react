import React from "react";

const WeatherTab = (props) => {
	return (
		<div className="weather-tab-component">
			<p>
				{props.hour}
				{props.ampm}
			</p>
			<i className={props.icon}></i>
			<p>{props.temp}&#8451;</p>
		</div>
	);
};

export default WeatherTab;

import React from "react";

const WeatherTabIcon = (props) => {
	return (
		<div className="weather-tab">
			<p>
				{props.hour}
				{props.ampm}
			</p>
			<i className={props.icon}></i>
			<p>{props.temp}&#8451;</p>
		</div>
	);
};

export default WeatherTabIcon;

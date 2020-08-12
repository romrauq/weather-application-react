import React from "react";

const WeatherTabIcon = (props) => {
	return (
		<div className="weather-tab">
			<p>
				{props.time}
				{props.ampm}
			</p>
			<i className={props.icon}></i>
			<p>{props.temp}</p>
		</div>
	);
};

export default WeatherTabIcon;

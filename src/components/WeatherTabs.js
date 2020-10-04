import React from "react";
import WeatherTabIcon from "./WeatherTabIcon";

const WeatherTabs = (props) => {
	return (
		<div className="weathertabs-component">
			<WeatherTabIcon
				hour={props.setTime(props.hour)}
				ampm={props.setAMPM(props.hour)}
				icon={props.icon_0}
				temp={props.temp_0}
			/>
			<WeatherTabIcon
				hour={props.setTime(props.hour + 1)}
				ampm={props.setAMPM(props.hour + 1)}
				icon={props.icon_1}
				temp={props.temp_1}
			/>
			<WeatherTabIcon
				hour={props.setTime(props.hour + 2)}
				ampm={props.setAMPM(props.hour + 2)}
				icon={props.icon_2}
				temp={props.temp_2}
			/>
			<WeatherTabIcon
				hour={props.setTime(props.hour + 3)}
				ampm={props.setAMPM(props.hour + 3)}
				icon={props.icon_3}
				temp={props.temp_3}
			/>
			<WeatherTabIcon
				hour={props.setTime(props.hour + 4)}
				ampm={props.setAMPM(props.hour + 4)}
				icon={props.icon_4}
				temp={props.temp_4}
			/>
		</div>
	);
};

export default WeatherTabs;

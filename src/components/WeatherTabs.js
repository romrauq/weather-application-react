import React from "react";
import WeatherTabIcon from "./WeatherTabIcon";

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

const WeatherTabs = (props) => {
	return (
		<div className="weathertabs-component">
			<WeatherTabIcon
				time={setTime(hour)}
				ampm={setAMPM(hour)}
				icon={props.icon_0} // Replace with {props.weather_icon_0}
				temp={props.temp_0}
			/>
			<WeatherTabIcon
				time={setTime(hour + 1)}
				ampm={setAMPM(hour + 1)}
				icon={props.icon_1} // Replace with {props.weather_icon_1}
				temp={props.temp_1}
			/>
			<WeatherTabIcon
				time={setTime(hour + 2)}
				ampm={setAMPM(hour + 2)}
				icon={props.icon_2} // Replace with {props.weather_icon_2}
				temp={props.temp_2}
			/>
			<WeatherTabIcon
				time={setTime(hour + 3)}
				ampm={setAMPM(hour + 3)}
				icon={props.icon_3} // Replace with {props.weather_icon_3}
				temp={props.temp_3}
			/>
			<WeatherTabIcon
				time={setTime(hour + 4)}
				ampm={setAMPM(hour + 4)}
				icon={props.icon_4} // Replace with {props.weather_icon_4}
				temp={props.temp_4}
			/>
		</div>
	);
};

export default WeatherTabs;

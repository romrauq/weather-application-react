import React from "react";
import WeatherTabIcon from "./WeatherTabIcon";

let hour = new Date().getHours();
// let min = new Date().getMinutes();

//Condition to set AM or PM to time:
let amPm = "";
if (hour >= 12) {
	amPm = "pm";
} else {
	amPm = "am";
}

const icon = {
	cloudy: "fas fa-cloud tab-icons",
	rain: "fas fa-cloud-showers-heavy tab-icons",
	cloud_sun: "fas fa-cloud-sun tab-icons",
	sunny: "fas fa-sun tab-icons",
};

const WeatherTabs = () => {
	return (
		<div className="weathertab-component">
			<WeatherTabIcon time={hour} ampm={amPm} icon={icon.cloudy} temp="24 C" />
			<WeatherTabIcon
				time={hour + 1}
				ampm={amPm}
				icon={icon.cloud_sun}
				temp="20 C"
			/>
			<WeatherTabIcon
				time={hour + 2}
				ampm={amPm}
				icon={icon.rain}
				temp="25 C"
			/>
			<WeatherTabIcon
				time={hour + 3}
				ampm={amPm}
				icon={icon.cloud_sun}
				temp="24 C"
			/>
			<WeatherTabIcon
				time={hour + 4}
				ampm={amPm}
				icon={icon.sunny}
				temp="22 C"
			/>
		</div>
	);
};

export default WeatherTabs;

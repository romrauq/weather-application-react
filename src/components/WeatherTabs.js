import React from "react";
import WeatherTabIcon from "./WeatherTabIcon";

let hour = new Date().getHours();
// let min = new Date().getMinutes();

//Set time to 12 hour format:
function setTime(val) {
	if (val > 12) {
		return val % 12;
	}
}

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
		<div className="weathertabs-component">
			<WeatherTabIcon
				time={setTime(hour)}
				ampm={amPm}
				icon={icon.cloudy}
				temp={24}
			/>
			<WeatherTabIcon
				time={setTime(hour + 1)}
				ampm={amPm}
				icon={icon.cloud_sun}
				temp={20}
			/>
			<WeatherTabIcon
				time={setTime(hour + 2)}
				ampm={amPm}
				icon={icon.rain}
				temp={25}
			/>
			<WeatherTabIcon
				time={setTime(hour + 3)}
				ampm={amPm}
				icon={icon.cloud_sun}
				temp={24}
			/>
			<WeatherTabIcon
				time={setTime(hour + 4)}
				ampm={amPm}
				icon={icon.sunny}
				temp={22}
			/>
		</div>
	);
};

export default WeatherTabs;

import React from "react";

const WeatherTabs = () => {
	return (
		<div className="weathertab-component">
			<div className="weather-tab">
				<p>12:00</p>
				<i className="fas fa-cloud tab-icons"></i>
				<p>24 C</p>
			</div>
			<div className="weather-tab">
				<p>1:00</p>
				<i className="fas fa-cloud-showers-heavy tab-icons"></i>
				<p>24 C</p>
			</div>
			<div className="weather-tab">
				<p>2:00</p>
				<i className="fas fa-cloud-sun tab-icons"></i>
				<p>24 C</p>
			</div>
			<div className="weather-tab">
				<p>3:00</p>
				<i className="fas fa-sun tab-icons"></i>
				<p>24 C</p>
			</div>
			<div className="weather-tab">
				<p>4:00</p>
				<i className="fas fa-cloud tab-icons"></i>
				<p>24 C</p>
			</div>
		</div>
	);
};

export default WeatherTabs;

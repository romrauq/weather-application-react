import React from "react";

const WeatherTabs = () => {
	return (
		<div className="d3">
			<div className="d3-1">
				<div className="weather-panel">
					<p>12:00</p>
					<i className="fas fa-cloud icons"></i>
					<p>24 C</p>
				</div>
				<div className="weather-panel">
					<p>1:00</p>
					<i className="fas fa-cloud-showers-heavy icons"></i>
					<p>24 C</p>
				</div>
				<div className="weather-panel">
					<p>2:00</p>
					<i className="fas fa-cloud-sun icons"></i>
					<p>24 C</p>
				</div>
				<div className="weather-panel">
					<p>3:00</p>
					<i className="fas fa-sun icons"></i>
					<p>24 C</p>
				</div>
				<div className="weather-panel">
					<p>4:00</p>
					<i className="fas fa-cloud icons"></i>
					<p>24 C</p>
				</div>
			</div>
		</div>
	);
};

export default WeatherTabs;

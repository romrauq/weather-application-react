import React from "react";

const Location = () => {
	return (
		<div className="location-container">
			<div className="location-container-child-1">
				<a href="location.html">
					<h1 className="location-heading">
						Accra, <br />
						Greater Accra
					</h1>
				</a>
				<p className="location-date">Feb 7th, 2020</p>
				<div className="icon-info-container">
					<i className="fas fa-cloud location-icon"></i>
					<span className="location-condition">Cloudy</span>
				</div>
			</div>

			<div className="location-container-child-2">
				<a href="location.html">
					<img src="resources/images/img-400.jpg" className="location-image" />
				</a>
			</div>
		</div>
	);
};

export default Location;
